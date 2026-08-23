import { initialItems, initialRequests, users } from './data'
import type { BorrowRequest, Item, User } from './types'
const keys={items:'campusconnect_items',requests:'campusconnect_requests',current:'campusconnect_current_user'}
const read=<T,>(key:string,fallback:T):T=>{try{const saved=localStorage.getItem(key);return saved?JSON.parse(saved) as T:structuredClone(fallback)}catch{return structuredClone(fallback)}}
const write=(key:string,value:unknown)=>localStorage.setItem(key,JSON.stringify(value))
const savedItems=read<Item[]>(keys.items,initialItems)
// Preserve a prior demo session while making newly introduced seed items available.
let items = [...savedItems,...initialItems.filter(seed=>!savedItems.some(saved=>saved.id===seed.id))], requests = read<BorrowRequest[]>(keys.requests,initialRequests)
let current:User|undefined=users.find(u=>u.id===localStorage.getItem(keys.current))
const persist=()=>{write(keys.items,items);write(keys.requests,requests)}
const wait=()=>new Promise<void>(r=>setTimeout(r,260))
export const authService={login:async(user:User)=>{await wait();current=user;localStorage.setItem(keys.current,user.id);return user},logout:()=>{current=undefined;localStorage.removeItem(keys.current)},getCurrentUser:()=>current}
export const itemService={getItems:async()=>{await wait();return structuredClone(items)},getById:(id:string)=>items.find(x=>x.id===id)}
export const requestService={
 getRequests:async()=>{await wait();return structuredClone(requests)},
 create:async(itemId:string,borrowerId:string)=>{await wait();const item=items.find(x=>x.id===itemId);if(!item||!item.available||item.ownerId===borrowerId)throw Error('This item is not available to request.');const r:BorrowRequest={id:`r${Date.now()}`,itemId,borrowerId,ownerId:item.ownerId,status:'pending',createdAt:new Date().toISOString()};requests=[r,...requests];persist();return r},
 update:async(id:string,action:'accept'|'reject'|'return')=>{await wait();const r=requests.find(x=>x.id===id);if(!r)throw Error('Request not found');const item=items.find(x=>x.id===r.itemId)!;if(action==='accept'){if(r.status!=='pending'||!item.available)throw Error('This request can no longer be accepted.');r.status='accepted';item.available=false}else if(action==='reject'){if(r.status!=='pending')throw Error('This request has already been resolved.');r.status='rejected';item.available=true}else{if(r.status!=='accepted')throw Error('Only accepted requests can be returned.');r.status='returned';item.available=true}persist();return structuredClone(r)},
 reset:async()=>{await wait();items=structuredClone(initialItems);requests=structuredClone(initialRequests);persist()}
}
