import React from 'react'

function SectionTitle({children, id}) {
  return (
    <div>
          <h1
              id = {id && id}
              className='text-3xl text-indigo-600 dark:text-indigo-500 mb-5'
          >
              {children}
          </h1>
    </div>
  )
}

export default SectionTitle
