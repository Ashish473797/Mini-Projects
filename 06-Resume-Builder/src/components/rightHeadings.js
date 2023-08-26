import './rightHeadings.css'
import Education from './education';
import Certificate from './certificate';
import Project from './projects';
import Achievement from './achievements';

function RightHeading({prop}){
    return(
        <>
            <div className='right-headings'>
                <Education {...prop}/>
                <Certificate {...prop}/>
                <Project {...prop}/>
                <Achievement {...prop}/>
            </div>
        </>
    )
}

export default RightHeading;