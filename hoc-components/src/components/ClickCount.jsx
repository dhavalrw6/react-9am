import React, { useState } from 'react'
import WithCount from './WithCount'

function ClickCount(props) {
    let { count, increment } = props;
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>
                Click me
            </button>
        </div>
    )
}

export default WithCount(ClickCount)
