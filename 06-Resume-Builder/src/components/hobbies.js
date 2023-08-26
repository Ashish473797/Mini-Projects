import './hobbies.css'

function Hobbie({hobbies}) {
    return (
        <>
            <h2 className="hobbie">Hobbies</h2>
            {
                hobbies.map((element) => {
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

export default Hobbie