
import './education.css'

function Education({education}) {
    return (
        <>
            <h2 className="education">Education</h2>
            {
                education.map((element) => {
                    return (
                        <div className='contant'>
                            <h3>{element.degree}</h3>
                            <h2>{element.collage}</h2>
                            <p>CGPA- {element.cgpa}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Education