import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import profileimage from "./assets/profile.jpg"

function Suggestions() {
  const [suggest, setSuggest] = useState([]);
  const [profile, setProfile] = useState(null);
    const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetch("https://instaclone-db.onrender.com/suggested").then((response) => {
      return response
        .json()
        .then((data) => {
          setSuggest(data);
          
        })
        .catch((err) => {
          console.log(err.message);
        });
    });

     


  }, []);

    useEffect(() => {
    fetch("https://instaclone-db.onrender.com/profile").then((response) => {
      return response
        .json()
        .then((data) => {
          setProfile(data);
          
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  }, []);

    useEffect(()=>{
     axios.get("https://instaclone-db.onrender.com/followers").then((data) => {setFollowers(data.data) ;console.log(data)}
      
    ).catch(err=>console.log(err));


  },[])



// const handlefollow = async(user,id)=>{
//     axios.post("http://localhost:3000/followers",user).then(console.log("updtaed")).catch(err=>console.log(err))
//     axios.delete(`http://localhost:3000/suggested/${id}`).then(console.log("deleted")).catch(err=>console.log(err))
// }


const handlefollow = async(user,id)=>{

  try{

  const res= await  axios.post("https://instaclone-db.onrender.com/followers",user).then(console.log("updated")).catch(err=>console.log(err));

    
    setFollowers(prev=>[...prev,user] )

 await axios.delete(`https://instaclone-db.onrender.com/suggested/${id}`).then(console.log("followed")).catch(err=>console.log(err))
    setSuggest(prev=>prev.filter(f=>f.id!==id))

    
  }catch(err){
    console.log(err)
  }
    
}

  return (
    <div className="mt-10">

          {!profile && <p>Loading</p>  }
          {profile &&   
          <div className="  md:m-0 flex  justify-between  font-[Segoe UI] " >
                <div className="flex  gap-3">
                   <img src={profileimage} alt="useravatar" className="rounded-full h-[40px] w-[40px]" />
                 <div className="flex flex-col items-start gap-2">
                  <p className="leading-5  text-[12px] flex gap-1 items-center justify-center"> 
                    <span className='font-medium text-[14px]'>{profile.username}</span> 
                     
                      
                 </p>
                 <p className="items-start justify-start text-[12px] opacity-70 leading-0">{profile.name}</p>
                 </div>
                </div>

                <div className="flex justify-center">
                  <p className="font-semibold text-[blue] leading-8 text-[12px]">Switch</p>
                </div>
               </div>  }



      {suggest.length > 0 ? (
        <div className="flex flex-col gap-5">
         

      
                

             
               <div className=" md:m-0 flex  justify-between  font-[Segoe UI] " >
                <div className="flex  gap-3">
                   
    
                  
                 <p className="items-centerjustify-center text-[12px] opacity-50 leading-8 font-bold">Suggested for You </p>
              
                </div>
                <div className="flex justify-center">
                  <p className="font-semibold  leading-8 text-[12px]">See all</p>
                </div>
               </div>

          {suggest.map((user)=>{
            console.log(user)
            return(
               <div className=" md:m-0 flex  justify-between  font-[Segoe UI] " key={user.id}>
                <div className="flex  gap-3">
                   <img src={user.avatar} alt="useravatar" className="rounded-full h-[40px] w-[40px]" />
                 <div className="flex flex-col items-start gap-2">
                  <p className="leading-5  text-[12px] flex gap-1 items-center justify-center"> 
                    <span className='font-medium text-[14px]'>{user.username}</span> 
                     
                      
                 </p>
                 <p className="items-start justify-start text-[12px] opacity-70 leading-0">Suggested for you</p>
                 </div>
                </div>
                <div className="flex  justify-center items-center">
                  <button onClick={()=>{handlefollow(user,user.id)}} className="font-semibold text-[blue] text-[12px]">Follow</button>
                </div>
               </div>
            )
          })}

        </div>
      ) : (
        <div className="mt-5 text-blue-600 font-semibold">No suggestions Found</div>
      )}
    </div>
  );
}

export default Suggestions;
