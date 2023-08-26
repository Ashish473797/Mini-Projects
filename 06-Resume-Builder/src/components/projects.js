
import './projects.css'

function Project({projects}){
    return (
    <>
        <h2 className="projects">Project</h2>
        {
            projects.map((element) => {
                return (
                    <div className='contant'>
                        <h2>{element.name}</h2>
                        <br/>
                        <p>{element.about}</p>
                    </div>
                )
            })
        }
    </> 
    )
}

export default Project