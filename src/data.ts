import type { BorrowRequest, Item, User } from './types'
export const users: User[] = [
 {id:'aarav',name:'Daivik',collegeId:'BT250121CS',email:'aarav@college.edu',department:'Computer Science',year:'Second Year',avatar:'D'},
 {id:'priya',name:'Aditi',collegeId:'BT250073',email:'priya@college.edu',department:'Computer Science',year:'Second Year',avatar:'A'},
 {id:'rohan',name:'Pranay',collegeId:'BT250106',email:'rohan@college.edu',department:'Computer Science',year:'Second Year',avatar:'P'}]
const i=(id:string,name:string,category:Item['category'],ownerId:string,condition:Item['condition'],available:boolean,image:string,description:string):Item=>({id,name,category,ownerId,condition,available,image,description})
export const initialItems:Item[]=[
 i('a1','Casio Scientific Calculator','Study Tools','aarav','Excellent',true,'🧮','A reliable scientific calculator suitable for engineering mathematics, physics, and examinations.'),
 i('a2','Laptop Charger','Electronics','aarav','Good',true,'🔌','Universal laptop charger available for short-term borrowing on campus.'),
 i('a3','Data Structures Textbook','Books','aarav','Good',true,'📘','Data Structures and Algorithms reference book useful for C and programming fundamentals.'),
 i('a4','Umbrella','Daily Essentials','aarav','Good',true,'☂️','Compact umbrella useful during rainy days on campus.'),
 i('a5','Lab Coat','Lab Equipment','aarav','Excellent',false,'🥼','Clean laboratory coat suitable for chemistry and practical laboratory sessions.'),
 i('a6','USB Pen Drive','Electronics','aarav','Good',true,'💾','USB drive useful for transferring assignments, presentations, and project files.'),
 i('p1','Scientific Calculator','Study Tools','priya','Excellent',true,'🧮','Scientific calculator suitable for mathematics, statistics, and engineering calculations.'),
 i('p2','Engineering Drawing Instruments','Study Tools','priya','Good',true,'📐','Set containing essential instruments for engineering drawing and technical work.'),
 i('p3','Python Programming Book','Books','priya','Excellent',true,'🐍','Beginner-friendly Python programming reference book.'),
 i('p4','Power Bank','Electronics','priya','Good',true,'🔋','Portable power bank useful for charging a phone during college hours.'),
 i('p5','File Folder','Stationery','priya','Excellent',true,'📁','Useful for storing assignments, notes, certificates, and important documents.'),
 i('p6','Lab Goggles','Lab Equipment','priya','Good',false,'🥽','Protective goggles suitable for laboratory practical sessions.'),
 i('r1','Digital Multimeter','Lab Equipment','rohan','Excellent',true,'📟','Digital multimeter useful for electronics practicals, circuit testing, and engineering laboratory work.'),
 i('r2','Graph Notebook','Stationery','rohan','Good',true,'📓','Graph notebook useful for mathematics, engineering drawing, and practical work.'),
 i('r3','C Programming Book','Books','rohan','Good',true,'📗','A programming reference book covering C fundamentals, data structures, and basic problem solving.'),
 i('r4','USB-C Charger','Electronics','rohan','Excellent',true,'⚡','Compact USB-C charger suitable for short-term charging during college hours.'),
 i('r5','Geometry Box','Study Tools','rohan','Good',true,'📐','Contains essential instruments for technical drawing and academic work.'),
 i('r6','Raincoat','Daily Essentials','rohan','Good',false,'🧥','Lightweight raincoat useful during unexpected rainy days on campus.')]
export const initialRequests:BorrowRequest[]=[{id:'r1',itemId:'a3',borrowerId:'priya',ownerId:'aarav',status:'returned',createdAt:'2026-08-17T09:30:00'}]
