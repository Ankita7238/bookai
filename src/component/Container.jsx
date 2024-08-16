import React from 'react'

const Container = ({children}) => {
  return (
    <>
    {/* align items in the middle */}
    <div className='md:mx-auto md:w-10/12 w-screen px-4'>
        {children}
    </div>
    </>
  )
}

export default Container