
import ToolDetails from '@/feature/Tools/ToolsDetails'
import React from 'react'

async function page({params}:{params:{id:string}}) {
    const {id}=await params
    console.log(id)
  return (
    <ToolDetails id={id}/>
  )
}

export default page