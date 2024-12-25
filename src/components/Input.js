import React from 'react'

const Input = ({label,title,type,value,onChange}) => {
  return (
    <div className='flex flex-col gap-2 font-md'>
        <label htmlFor={title}> {label}</label>
        <input value={value} className='bg-background border border-foreground text-foreground p-2' tpye={type} onChange={onChange} name={title} />
        
    </div>
  )
}

export default Input