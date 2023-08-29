import './skills.css'

function Skill({skills}){

    return (
        <>
        {skills.length === 0 ? null : <><h2 className="skills">Skills</h2>
        <div>
            {
                skills.map((element)=>{
                    return (
                        <h3 className='contant box'>{element}</h3>
                    )
                })
            }
        </div></>}
        </>
    )
}

export default Skill