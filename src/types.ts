export type User = { id:string; name:string; collegeId:string; email:string; department:string; year:string; avatar?:string }
export type Category = 'Electronics'|'Study Tools'|'Books'|'Lab Equipment'|'Stationery'|'Daily Essentials'
export type Item = { id:string; name:string; description:string; category:Category; ownerId:string; available:boolean; image:string; condition:'Excellent'|'Good'|'Fair' }
export type RequestStatus = 'pending'|'accepted'|'rejected'|'returned'
export type BorrowRequest = { id:string; itemId:string; borrowerId:string; ownerId:string; status:RequestStatus; createdAt:string }
