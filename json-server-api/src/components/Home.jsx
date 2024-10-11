import { useState } from 'react'
import axios from 'axios';

function Home() {

    let [api, setApi] = useState('');

    let handleClick = () => {
        try {
            setTimeout(async () => {
                let res = await axios.get(api);
                console.log(res.data);
            }, 1000)
        } catch (error) {
            console.error(error);
        }
        // window.open(api, '_blank');
    }

    return (
        <div className="App">
            <input type="text" name="api" id="api" onChange={(e) => setApi(e.target.value)} />
            <button onClick={handleClick}>Get Data</button>
            <Show  />
        </div>
    )
}

export default Home
