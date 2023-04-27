import React from 'react'

const Contact = ({data}) => {
  console.log(data);
  return (
    <div>{data.title}</div>
  )
}

export default Contact