
import './certificate.css'

function Certificate({certificates}){
    return (
    <>
        <h2 className="certificate">Certificate</h2>
        {
            certificates.map((element) => {
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

export default Certificate