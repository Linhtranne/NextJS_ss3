import React from 'react'
type PropTypes={
    params:{
        id:string;
    }
}
export default function page({params}:PropTypes) {
  return (
    <div>
      <p>Bài viết của user :{params.id}</p>
    </div>
  )
}
