import './Resume.css';
// import userData from './assets/data';
// import Header from './components/header';
// import LeftHeadings from './components/leftHeadings';
// import RighttHeadings from './components/rightHeadings';
import Timer from './timer/timer';

function Resume() {
  return (
    <>
      <Timer></Timer>
      {/* <div className='print' onClick={()=>{window.print()}}>Print</div>
      <div className='page'>
        <Header {...userData}/>
        <div className='flex'>
        <LeftHeadings prop={userData}/>
        <RighttHeadings prop={userData}/>
        </div>
      </div> */}
    </>
  );
}

export default Resume;