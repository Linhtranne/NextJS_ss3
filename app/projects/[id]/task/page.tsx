import React from 'react'
type PropTypes={
    params:{
        id:string;
    }
}
export default function page({params}:PropTypes) {
  return (
    <div>
      <p>Danh sách nhiệm vụ của dự án có id:{params.id}</p>
    </div>
  )
}
