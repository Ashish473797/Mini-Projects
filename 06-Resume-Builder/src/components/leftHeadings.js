import './leftHeadings.css'
import PersonalDetail from './personalDetails';
import Skill from './skills';
import Language from './language';
import Hobbie from './hobbies';

function LeftHeading({prop}){
    return(
        <>
            <div className='left-headings'>
                <PersonalDetail {...prop}/>
                <Skill {...prop}/>
                <Language {...prop}/>
                <Hobbie {...prop}/>
            </div>
        </>
    )
}

export default LeftHeading;