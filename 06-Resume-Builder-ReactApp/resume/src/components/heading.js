import './heading.css'

function Heading({headings}){
    return(
        <>
            <div className="heading">
                <h2>{headings[0]}</h2>
                <h2>{headings[1]}</h2>
                <h2>{headings[2]}</h2>
            </div>
        </>
    )
}

export default Heading;