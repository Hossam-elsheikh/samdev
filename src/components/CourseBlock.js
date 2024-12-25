import { formattedDate } from '@/lib/utils'
import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
const MoreDetails = ({course})=>{

   const emph = "text-[#fa913c] text-lg";
     return (
       <div className="flex flex-col gap-3 overflow-scroll">
         <p>
           <span className={emph}>Description</span> : {course.description}
         </p>
         <p>
           <span className={emph}>Organization</span>: {course.organization}
         </p>
         <p>
           <span className={emph}>Completion Date</span>: {formattedDate(course.date)}
         </p>
         
         <p className={emph}>Topics Covered : </p>

         <ul>
            {course.topics.map((t,i)=><li key={i}>- {t}</li>)}
         </ul>
          
       </div>
     );
}
const CourseBlock = ({course}) => {
  return (
    <div className='flex flex-col p-3 gap-2 shadow-[5px_5px_0px_0px_rgba(250,_145,_60,_1)] w-full md:w-1/3  md:h-40 border border-foreground rounded-md '>
        <h1 className='text-md'>{course.title}</h1>
        {/* <p>{formattedDate(course.date)}</p> */}
        <p>By : {course.organization} </p>
        <div className='flex flex-col md:flex-row text-xs  gap-3'>
            
            <a href={course.link} target='_blank' className='underline text-blue-500'>Validate</a>
            <Dialog>
            <DialogTrigger>
              <p className=" text-left underline  text-xs">More details</p>
            </DialogTrigger>
            <DialogContent className="max-h-[70%] overflow-scroll">
              <DialogHeader>
                <DialogTitle>{course.title}</DialogTitle>
              </DialogHeader>
              <MoreDetails course={course} />
            </DialogContent>
          </Dialog>
        </div>
    </div>
  )
}

export default CourseBlock