import React, { useState } from 'react'

const Localstorge = () => {
    const [count,setcount]=useState(0)
    const handleget=()=>{
        const save=localStorage.getItem("counts")
        setcount(save)

    }
  return (
   <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      {/* Container Box */}
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl border border-gray-100 text-center">
        
        {/* Title / Label */}
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
          Current Balance
        </p>
        
        {/* Count Display */}
        <h1 className="text-5xl font-black text-gray-900 tracking-tight my-4">
          count:{count}
        </h1>

        {/* Core Controls (+ / -) */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button onClick={()=>setcount(count+1)} className="flex h-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl font-bold text-emerald-600 hover:bg-emerald-100 transition active:scale-95">
            +
          </button>
          <button  onClick={()=>setcount(count-1)} className="flex h-12 items-center justify-center rounded-xl bg-amber-50 text-2xl font-bold text-amber-600 hover:bg-amber-100 transition active:scale-95">
            -
          </button>
        </div>

        {/* Separator Divider Line */}
        <div className="border-t border-gray-100 my-4"></div>

        {/* Data Actions (Save, Delete, Get) */}
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-2">
            <button onClick={()=>localStorage.setItem("counts",count)} className="rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition shadow-sm shadow-blue-500/10 active:scale-95">
              Save
            </button>
            <button onClick={handleget} className="rounded-xl bg-gray-100 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition active:scale-95">
              Get
            </button>
          </div>
          
          <button onClick={()=>localStorage.removeItem("counts")} className="w-full rounded-xl bg-red-50 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-100 transition active:scale-95">
            Remove
          </button>
            <button onClick={()=>setcount(0)} className="w-full rounded-xl bg-red-50 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-100 transition active:scale-95">
            Reset
          </button>
        </div>

      </div>
    </div>
  )
}

export default Localstorge
