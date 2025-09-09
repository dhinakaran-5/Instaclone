import React, { useState, useEffect } from "react";

import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [suggest, setSuggest] = useState([]);
  const [hide,setHide]=useState(false)

  useEffect(() => {
    axios.get("https://instaclone-db.onrender.com/profile").then((data) => {
      setProfile(data.data);
      
    }).catch(err=>console.log(err));

        fetch("https://instaclone-db.onrender.com/suggested").then((response) => {
      return response
        .json()
        .then((data) => {
          setSuggest(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    });

   



  }, []);

  useEffect(()=>{
     axios.get("http://localhost:3000/followers").then((data) => {setFollowers(data.data) ;console.log(data)}
      
    ).catch(err=>console.log(err));


  },[])




console.log(followers)

  function handleonchange(e){
    setProfile(prev=>({
        ...prev,
        [e.target.name]:e.target.value

    }))
  }
const updating = async()=>{
    axios.put("https://instaclone-db.onrender.com/profile",profile).then(console.log("updtaed")).catch(err=>console.log(err))
}



const handleunfollow = async(id,user)=>{

  try{

   await  axios.delete(`https://instaclone-db.onrender.com/followers/${id}`).then(console.log("deleted")).catch(err=>console.log(err));

    setFollowers(prev=>prev.filter(f=>f.id!==id))

  const res= await axios.post("https://instaclone-db.onrender.com/suggested",user).then(console.log("unfollowed")).catch(err=>console.log(err))
    setSuggest(prev=>[...prev,user] )

    
  }catch(err){
    console.log(err)
  }
    
}




  return (
    <div className="flex flex-col justify-center items-center h-full bg-[#3b3535]">
      {profile ? (
        <div className="">


          <div className="rounded-md w-full max-w-4xl mx-auto px-4 py-6 ">
            {/* Profile header */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              {/* Avatar */}
              <div className="flex justify-center sm:justify-start">
                <img
                  src={profile.avatar}
                  alt={profile.username}
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-gray-300 object-cover"
                />
              </div>

              {/* User Info */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white">
                    {profile.username}
                  </h2>
                  <button onClick={()=>setHide((prev)=>!prev)} className="px-4 py-1 bg-gray-700 text-white rounded-md text-sm hover:bg-gray-600 transition">
                    Edit Profile
                  </button>
                </div>

                {/* Stats */}
                <div className="flex gap-6 mb-4 text-white">
                  <span>
                    <strong>{profile.posts}</strong> posts
                  </span>
                  <span>
                    <strong>{profile.followers}</strong> followers
                  </span>
                  <span>
                    <strong>{followers.length}</strong> following
                  </span>
                </div>

                {/* Name + Bio */}
                <div className="text-white">
                  <p className="font-semibold">{profile.name}</p>
                  <p className="text-sm">{profile.bio}</p>
                </div>
              </div>
            </div>
                
                {}
            <div className={`text-white mt-6  flex-col gap-3 items-start  ${hide? "flex": "hidden"} `}>
                <input onChange={handleonchange} className="border border-amber-200/20 rounded p-2" value={profile.username} name="username" type="text" />
                <input onChange={handleonchange} className="border border-amber-200/20 rounded p-2"  value={profile.name} name="name" type="text" />
                <input onChange={handleonchange} className="border border-amber-200/20 rounded p-2" value={profile.bio} name="bio" type="text" />
                <input  onChange={handleonchange} className="border border-amber-200/20 rounded p-2" value={profile.avatar} name="avatar" type="text" />
                <button onClick={updating} className="bg-[blue] px-3 py-2 rounded-xl w-[10%]">Update</button>
                
            </div>
          </div>


        </div>
      ) : (
        <div>Loading</div>
      )}

      {/* { followers.length>0 ?(
        followers.map(foll=>{
            return(
                <div key={foll.id} className="bg-[red] ">


                </div>

            )
            
        })

      ):(
        <div className="">Loading</div>
      )} */}

      <div className=" md:w-1/3  text-white rounded-lg p-4 shadow-md ">

        <p className="text-center mb-5"> Followings</p>
           {followers.length > 0 ? (
        <ul className="space-y-3">
          {followers.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center"
            >
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#1e1e1e] cursor-pointer">            <img
                src={user.avatar}
                alt={user.username}
                className="w-10 h-10 rounded-full object-cover border border-gray-500"
              />
              <div>
                <p className="font-semibold">{user.username}</p>
                <p className="text-sm text-gray-400 truncate w-[180px]">
                  {user.bio}
                </p>
              </div>
              
              </div>

              <div className="">
                <button onClick={()=>{handleunfollow(user.id,user)}} className="font-semibold text-[white text-[12px] bg-[blue] px-3 py-2 rounded-md" >Unfollow</button>
              </div>
  
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 text-sm">Not following anyone yet</p>
      )}
      
      </div>






    </div>
  );
}

export default Profile;
