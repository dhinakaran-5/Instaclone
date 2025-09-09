import React, { useEffect, useState } from 'react'

function Posts() {

  const [posts ,setPosts]=useState([])

  useEffect(()=>{
    fetch("https://instaclone-db.onrender.com/posts").then((response)=>{
      return response.json().then((data)=>{
        setPosts(data)
       
        }).catch((err)=>{
          console.log(err.message)
      })
    })
  },[])



  return (
    <div>
      {posts.length>0?(
        <div className="flex flex-col gap-6 w-full">
          {posts.map((post)=>{

            return(
            <div key={post.id} className="flex flex-col gap-5  overflow-hidden">
              {/* POSTHEAD */}
              <div className="m-3 md:m-0 flex justify-between font-[Segoe UI]">
                <div className="flex  gap-3">
                   <img src={post.user.avatar} alt="useravatar" className="rounded-full h-[40px] w-[40px]" />
                 <div className="flex flex-col items-start gap-2">
                  <p className="leading-5  text-[12px] flex gap-1 items-center justify-center"> 
                    <span className='font-medium text-[14px]'>{post.user.username}</span> 
                     <span className="font-extrabold text-[20px]">.</span>  <span>1w</span> 
                     <span className="font-extrabold text-[20px]">.</span>
                      {/* <span className="font-semibold text-[blue]">Follow</span>  */}
                 </p>
                 <p className="items-start justify-start text-[12px] leading-0">Original audio</p>
                 </div>
                </div>
                <div className="flex">
                  <p className="font-semibold">...</p>
                </div>
               </div>
               {/* POSTBODY */}
             
                {/* POST BODY */}
<div className="w-full bg-black flex justify-center items-center">
  <img 
    src={post.imageUrl} 
    alt="####" 
    className="w-full max-h-[600px] object-cover"
  />
</div>


                
             
               {/* POSTDESCRIPTION */}
               <div className="flex flex-col gap-2 m-3 md:m-0">
                <div className=" flex justify-between">
                  <div className="icons flex gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-icon lucide-message-circle"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
                  </div>
                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-marked-icon lucide-book-marked"><path d="M10 2v8l3-3 3 3V2"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>
                  </div>
                </div>
                <div className="flex font-semibold"><p>{post.likes} likes </p></div>
                <div className="flex gap-2"><p className='font-semibold'>{post.user.username}  </p>
                <p>{post.caption}</p>
                </div>
                <div className="flex text-[#737373] text-[14px]"><p>View all {post.comments.length} {post.comments.length>1 ? ( <span>comments</span> ):( <span>comment</span> )} </p></div>
                 <div className="flex justify-between text-[#737373] text-[14px]">
                  <input type="text" className='outline-none pb-3'  placeholder='Add a comment...'/>
                  <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smile-icon lucide-smile"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg></p>
                  </div>
                
                 <hr className='opacity-20' />
               </div>
              


              

            </div>
            )
          })}
        </div>
      ):(
        <div className=""> 
          Loading Posts
        </div>
      )

    }
    </div>
  )
}

export default Posts