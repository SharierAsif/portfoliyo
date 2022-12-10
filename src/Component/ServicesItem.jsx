import React from 'react'

function ServicesItem({title, icon, dec}) {
  return (
    <div className='border border-gray-200 p-6 rounded-lg hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-600 transition transform hover:-translate-y-2 '>
      <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 mb-4 text-indigo-600 dark:text-indigo-500 text-2xl'>
        {icon }
      </div>
      <h1
        className='text-lg text-gray-900 title-font mb-2 dark:text-gray-200 font-semibold'
      >{title}</h1>
      <p className=' text-gray-600 dark:text-gray-300 leading-relaxed text-sm'>{dec}</p>
    </div>
  )
}

export default ServicesItem
 