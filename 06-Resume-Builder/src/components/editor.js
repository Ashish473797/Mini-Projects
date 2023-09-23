
import './editor.css'
import userData from '../assets/data'

function Editor(){

    function handleClick(e){
        console.log(e);
    }

    return(
        <>
            <div className='form'>
                <form action='' method='GET'>
                <h2>Personal Details</h2>
                <label htmlFor='email'>E-mail: </label><br/>
                <input type='email' id='email' name='email' defaultValue={`${userData.persoanalDetail[0].email}`}/>

                <label htmlFor='txt'><h2>Skills</h2></label>
                <textarea id='txt' rows='2' cols={30} defaultValue={`${userData.skills}`}/>

                <h2>Education</h2>
                <label htmlFor='course'>Course: </label><br/>
                <input type='text' id='course' defaultValue={`${userData.education[0].degree}`}/><br/><br/>
                <label htmlFor='college'>College: </label><br/>
                <input type='text' id='college' defaultValue={`${userData.education[0].collage}`}/><br/><br/>
                <label htmlFor='cgpa'>CGPA: </label><br/>
                <input type='txt' id='cgpa' defaultValue={`${userData.education[0].cgpa}`}/><br/><br/>
                
                <button type='submit' onClick={handleClick}>Submit</button>
                </form>
                </div>
        </>
    )
}

export default Editor;