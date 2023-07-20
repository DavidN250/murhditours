import React from 'react'

function Button(props) {
  return (
    <>
      <button className={`p-1 mt-1 px-5 border border-blue-950 rounded-lg text-md font-semibold`}>{props.text}</button>
    </>
  )
}

export default Button
