import React from 'react'

function SeoBtn() {
  return (
    <a href="#_" className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-bold tracking-tighter text-white border-2 border-white rounded-full group">
    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-65 group-hover:h-56"></span>
    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
    <span className="relative">SEO 2.0</span>
</a>
  )
}

export default SeoBtn