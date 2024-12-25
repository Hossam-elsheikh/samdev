import React from 'react'

const Button = ({title}) => {
  return (
    <button type='submit' className='bg-foreground text-background rounded p-2 px-4 text-bold hover:bg-background hover:outline hover:text-foreground transition-all duration-150  '>{title || 'Save'}</button>
  )
}

export default Button