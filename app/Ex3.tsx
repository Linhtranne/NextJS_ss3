'use client'
import React from 'react'
type PropTypes={
    params:{
        id:string;
    }
}
export default function page({params}:PropTypes) {
  return (
    <div>
        <p>Product id:{params.id}  </p>
    </div>
  )
}