import React, { useState } from 'react'
import WithCount from './WithCount'
function HoverCount(props) {
    let { count, increment } = props
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onMouseOver={increment}>
                Over me
            </button>
        </div>
    )
}

export default WithCount(HoverCount)
