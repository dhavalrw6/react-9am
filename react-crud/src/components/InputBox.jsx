// import React from 'react'

function InputBox(props) {
  return (
    <>
        <div className='formGrup'>
            <label htmlFor={props.name}>{props.name}</label>
            <input type="text" name={props.name} onChange={props.handleChaneg}/>
        </div>
    </>
  )
}

export default InputBox
