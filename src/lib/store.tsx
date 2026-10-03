import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";

type User = {name:string;email:string;role:"user"|"admin";phone?:string;country?:string};
type Booking = {id:string;type:string;name:string;amount:number;status:string;date:string};
type Activity = {id:string;day:number;time:string;title:string;place:string};
type State = {user:User|null; wishlist:string[]; bookings:Booking[]; activities:Activity[]};
type Store = State & {login:(email:string,admin?:boolean)=>void;register:(name:string,email:string)=>void;logout:()=>void;toggleWish:(id:string)=>void;book:(type:string,name:string,amount:number)=>string;addActivity:(title:string)=>void;deleteActivity:(id:string)=>void;moveActivity:(id:string,delta:number)=>void;updateProfile:(user:User)=>void};
const initial:State={user:null,wishlist:[],bookings:[{id:"WD-847291",type:"Package",name:"Bali Soul Journey",amount:2580,status:"Confirmed",date:"Nov 12, 2026"}],activities:[{id:"a1",day:1,time:"10:00",title:"Old Town walking tour",place:"Historic quarter"},{id:"a2",day:1,time:"19:30",title:"Welcome dinner",place:"Riverside terrace"},{id:"a3",day:2,time:"08:00",title:"Sunrise viewpoint",place:"North ridge"}]};
const Ctx=createContext<Store|undefined>(undefined);
export function StoreProvider({children}:{children:ReactNode}){const [s,setS]=useState<State>(initial);const [ready,setReady]=useState(false);useEffect(()=>{try{const v=localStorage.getItem("wanderly-state");if(v)setS(JSON.parse(v) as State)}finally{setReady(true)}},[]);useEffect(()=>{if(ready)localStorage.setItem("wanderly-state",JSON.stringify(s))},[s,ready]);
 const login=(email:string,admin=false)=>{setS(x=>({...x,user:{name:admin?"Alex Morgan":"Jordan Lee",email,role:admin?"admin":"user",phone:"+1 415 555 0198",country:"United States"}}));toast.success("Welcome back to Wanderly")};
 const register=(name:string,email:string)=>{setS(x=>({...x,user:{name,email,role:"user"}}));toast.success("Your Wanderly account is ready")};
 const logout=()=>{setS(x=>({...x,user:null}));toast.success("You have been signed out")};
 const toggleWish=(id:string)=>setS(x=>{const has=x.wishlist.includes(id);toast.success(has?"Removed from wishlist":"Saved to wishlist");return {...x,wishlist:has?x.wishlist.filter(v=>v!==id):[...x.wishlist,id]}});
 const book=(type:string,name:string,amount:number)=>{const id=`WD-${Math.floor(100000+Math.random()*899999)}`;setS(x=>({...x,bookings:[{id,type,name,amount,status:"Confirmed",date:"Dec 6, 2026"},...x.bookings]}));toast.success("Booking confirmed");return id};
 const addActivity=(title:string)=>{setS(x=>({...x,activities:[...x.activities,{id:crypto.randomUUID(),day:2,time:"14:00",title,place:"Added place"}]}));toast.success("Added to itinerary")};
 const deleteActivity=(id:string)=>setS(x=>({...x,activities:x.activities.filter(a=>a.id!==id)}));
 const moveActivity=(id:string,delta:number)=>setS(x=>{const a=[...x.activities],i=a.findIndex(v=>v.id===id),j=i+delta;if(i<0||j<0||j>=a.length)return x;const t=a[i]!;a[i]=a[j]!;a[j]=t;return {...x,activities:a}});
 const updateProfile=(user:User)=>{setS(x=>({...x,user}));toast.success("Profile updated")};
 return <Ctx.Provider value={{...s,login,register,logout,toggleWish,book,addActivity,deleteActivity,moveActivity,updateProfile}}>{children}</Ctx.Provider>}
export function useStore(){const v=useContext(Ctx);if(!v)throw new Error("StoreProvider missing");return v}