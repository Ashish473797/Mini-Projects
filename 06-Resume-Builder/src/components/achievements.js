
import './achievements.css'

function Achievement({achievements}){
    return (
    <>
        <h2 className="achievement">Achievement</h2>
        {
            achievements.map((element) => {
                return (
                    <div className='contant'>
                        <h3>{element}</h3>
                    </div>
                )
            })
        }
    </> 
    )
}

export default Achievement