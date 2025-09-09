import React from "react";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



function Stories() {
  const [story, setStory] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate =useNavigate()

  useEffect(() => {
    fetch("https://instaclone-db.onrender.com/users").then((response) => {
      return response
        .json()
        .then((data) => {
          setUsers(data);
    
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  }, []);

  useEffect(() => {
    fetch("https://instaclone-db.onrender.com/stories").then((response) => {
      return response
        .json()
        .then((data) => {
          setStory(data);
         
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  }, []);

  const getUser = (userId) => users.find((u) => u.id === userId);

  return (
    <div className="">
      {story.length > 0 ? (
        <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide max-w-full">
          {story.map((store) => {
            const user = getUser(store.userId);

           return(
              <div  key={store.id} className=""> 

              {!user&&  <div className="">Loading</div>}
              {user&&  <div onClick={()=>{navigate(`story/${store.id}`)}}
                key={store.id} 
                className="flex flex-col items-center flex-shrink-0   cursor-pointer"
              >
                <div
                  className={`rounded-full p-[2px] ${
                    store.viewed
                      ? "bg-gray-300"
                      : "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
                  }`}
                >
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="min-w-[80px] h-[80px] rounded-full border-2 border-white object-cover"
                  />
                </div>
                <p className="text-xs text-gray-700 truncate mt-1">
                  {user.username}
                </p>
              </div>}

            </div>
           )

        
             
            
              
            
            
          })}
        </div>
      ) : (
        <div className="">Loading</div>
      )}
    </div>
  );
}

export default Stories;
