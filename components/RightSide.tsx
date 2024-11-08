import React from 'react'

const RightSide = () => {
  return (
    <div className='flex flex-col items-center justify-end w-full h-full gap-6 text-textLight'>
      <a href="mailto:javiyabhumit54@gmail.com">
        <p className='text-sm tracking-wide rotate-90 w-96 text-textGreen'>
          javiyabhumit54@gmail.com
        </p>
      </a>
      <span className='w-[2px] h-32 bg-textDark inline-flex'></span>
    </div>
  )
}

export default RightSide
