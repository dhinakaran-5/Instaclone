import React from 'react'
import Stories from './Stories' 
import Posts  from './Posts'


function Feed() {
  return (
    <>
      {/* Stories Section */}
      <div className="w-full md:max-w-[90%] mt-6 items-start">
        <Stories />
      </div>

      {/* Posts Section */}
      <div className="w-full md:max-w-[70%]  md:ml-30">
        <Posts />
      </div>
    </>
  )
}

export default Feed




