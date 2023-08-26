
import './personalDetails.css'

function PersonalDetail({persoanalDetail}){

    return (
        <>
        <h2 className="personal-detail">Personal Details</h2>
        <div className='contant'>
        <h3>E-mail:</h3>
        <p>{persoanalDetail[0].email}</p>
        </div>
        <div className='contant'>
        <h3>Mobile Number:</h3>
        <p>{persoanalDetail[0].mobileNo}</p>
        </div>
        <div className='contant'>
        <h3>Location:</h3>
        <p>{persoanalDetail[0].location}</p>
        </div>
        </>
    )
}

export default PersonalDetail