import './Resume.css';
import Header from './components/header';
import userData from './assets/data';

function Resume() {
  return (
    <>
      <div className='page'>
        <Header {...userData}/>
      </div>
    </>
  );
}

export default Resume;