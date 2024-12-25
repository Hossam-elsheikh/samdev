'use client'
import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

const CourseForm = ({course,type,submitData,id}) => {
    const [courseData,setCourseData] = useState({
        title: course?.title || '',
        date: course?.date || '',
        description: course?.description || '',
        link: course?.link || '',
        organization: course?.organization || '',
        topics: course?.topics.join('\n') || '',
    })

    const submitHandler = (e)=>{
        e.preventDefault()
        submitData(type,courseData,id)
    }

  return (
    <form className='flex flex-col gap-2' onSubmit={submitHandler}>
        <Input type='text' title='title' label='title' value={courseData.title} onChange={(e)=>setCourseData({...courseData,title:e.target.value})}/>
        <Input type='date' title='date' label='date' value={courseData.date} onChange={(e)=>setCourseData({...courseData,date:e.target.value})}/>
        <Input type='text' title='description' label='description' value={courseData.description} onChange={(e)=>setCourseData({...courseData,description:e.target.value})}/>
        <Input type='text' title='link' label='link' value={courseData.link} onChange={(e)=>setCourseData({...courseData,link:e.target.value})}/>
        <Input type='text' title='organization' label='organization' value={courseData.organization} onChange={(e)=>setCourseData({...courseData,organization:e.target.value})}/>
        <label htmlFor='topics'>topics</label>
        <textarea className='border border-foreground p-2' name='topics' id='topics' rows='8' value={courseData.topics} onChange={(e)=>setCourseData({...courseData,topics:e.target.value})}></textarea>
        <Button />
    </form>
  )
}

export default CourseForm