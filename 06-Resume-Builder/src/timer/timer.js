import './timer.css';
import { useState } from "react";

function Timer(){

    const [time, setTime] = useState(0);

    // useEffect(()=>{
    //     setTimeout(()=>{setTime(time+1)},1000)
    // });

    
    function HandleClick(){
        setTime(time+1)
    }

    return (
        <>
            <div className='center'>
                <h2>{time}</h2>
                <div className="btn" onClick={HandleClick}>START</div>
            </div>
        </>
    )

}

export default Timer