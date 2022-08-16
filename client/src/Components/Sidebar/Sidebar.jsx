import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col items-center p-3 justify-between shadow-lg border-r-2">
      <div className="avatar placeholder">
        <div className="bg-slate-300 text-neutral-content rounded-full w-8 shadow-lg">
          <span className="text-xl text-black cursor-pointer">W!</span>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="my-3 avatar placeholder">
          <div className="bg-slate-300 text-neutral-content rounded-full w-8 shadow-lg">
            <span className="text-xl text-black cursor-pointer">H</span>
          </div>
        </div>
        <div className="my-3 avatar placeholder">
          <div className="bg-slate-300 text-neutral-content rounded-full w-8 shadow-lg">
            <span className="text-xl text-black cursor-pointer">M</span>
          </div>
        </div>
        <div className="my-3 avatar placeholder">
          <div className="bg-slate-300 text-neutral-content rounded-full w-8 shadow-lg">
            <span className="text-xl text-black cursor-pointer">V</span>
          </div>
        </div>
      </div>
      <div className="avatar placeholder">
        <div className="bg-slate-300 text-neutral-content rounded-full w-8 shadow-lg">
          <span className="text-xl text-black cursor-pointer">D</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
