import React from 'react'

function WorkItem({title, img, tech}) {
  return (
    <div className='rounded-lg overflow-hidden shadow-sm hover:shadow-md transition'>
          <img
              src={img}
              alt={title}
              className="w-full h-36 md:h-48 object-cover"
          />
          <div className='w-full p-3 dark:bg-slate-700'>
              <h3 className='mb-2 text-gray-600 dark:text-gray-300 font-semibold text-lg md:text-xl'>{title}</h3>
              <p className='text-xs md:text-sm flex flex-row justify-start items-center gap-2 flex-wrap '>{
                  tech.map(item => (
                      <span
                          key={item}
                        className='dark:text-slate-300 rounded-md inline-block px-2 py-1 bg-slate-200 dark:bg-slate-600'
                      >
                          {item}
                        </span>
                  ))
              }</p>
          </div>
    </div>
  )
}

export default WorkItem
