import './language.css'

function Language({language}) {
    return (
        <>
            <h2 className="language">Language</h2>
            {
                language.map((element) => {
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

export default Language