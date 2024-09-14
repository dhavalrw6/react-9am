// let newComponent = WithCount(OldComponent);

import { useState } from "react"

let WithCount = (OldComponent) => {
    return function EnhanceComponent(props) {
        let [count, setCount] = useState(0)
        return (
            <OldComponent {...props} count={count} increment={() => setCount(count + 1)} />
        )
    }
}

export default WithCount;