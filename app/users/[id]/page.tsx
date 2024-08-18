import React from 'react'
type PropTypes={
    params:{
        id:string;
    }
}
export default function page({params}:PropTypes) {
  return (
    <div>
      <p>User id:{params.id}</p>
    </div>
  )
}
