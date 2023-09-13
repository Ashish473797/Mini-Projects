
import './editor.css'

function Editor(){

    function handleClick(e){
        e.preventDefault();
        console.log(e.target.name);
    }

    return(
        <>
            <div className='form'>
                <form action='' method='GET'>
                <h2>Personal Details</h2>
                <label htmlFor='email'>E-mail: </label>
                <input type='email' id='email'/>

                <label htmlFor='txt'><h2>Skills</h2></label>
                <textarea id='txt'/>

                <h2>Education</h2>
                <label htmlFor='course'>Course: </label>
                <input type='text' id='course'/><br/><br/>
                <label htmlFor='college'>College: </label>
                <input type='text' id='college'/><br/><br/>
                <label htmlFor='cgpa'>CGPA: </label>
                <input type='number' id='cgpa'/><br/><br/>
                
                <button type='sumbit' onClick={handleClick}>Submit</button>
                </form>
                </div>
        </>
    )
}

export default Editor;