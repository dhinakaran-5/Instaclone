import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Suggestions from "./Suggestions";

function App() {
  return (
    <div className="2xl:container ">
      <div className="md:w-[98%] mx-auto flex flex-col md:flex-row gap-6 md:gap-6">
        
        {/* Sidebar - hidden on mobile */}
        <div className="hidden md:block w-[6%] xl:w-[17%] border-r border-black/20 flex-shrink-0  mx-3">
          <Sidebar />
        </div>

        {/* Feed - full width on mobile, shrink on larger screens */}
        <div className=" mdlg:ml-5 xl:ml-40 flex-1 w-full md:w-[70%] lg:w-[40%] flex flex-col gap-5 ">
          <Feed />
        </div>

        {/* Suggestions - only on large screens */}
        <div className="xl:ml-10 md:w-[20%] hidden lg:block w-[30%] flex-shrink-0 ">
          <Suggestions />
        </div>
      </div>
    </div>
  );
}

export default App;





  // npx json-server --watch db.json --port 3000

  //  npx json-server --watch data/dummyData.json --port 3000 --static ./data