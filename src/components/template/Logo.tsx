import React from "react";

export default function Logo() {
  return (
    <div
      className={`
    flex flex-col items-center justify-center
    h-10 w-10 rounded-full
    bg-white`}
    >
      <div className={`h-3 w-3 rounded-full bg-red-600`} />
      <div className={`flex `}>
        <div className={` h-3 w-3 rounded-full bg-yellow-400`} />
        <div className={` h-3 w-3 rounded-full bg-green-400`} />
      </div>
    </div>
  );
}
