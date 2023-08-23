import './Resume.css';
import Header from './components/header';
import Heading from './components/heading';


const userData = {
  name: "Ashish Kumar Gupta",
  profession: "Software Developer",
  about: "I have good knowledge of C, C++, HTML, CSS and Javascript and also Data structure and currently i am learning React.",
  headings: ["Personal Detail", "Skills", "Language"],
  personalDetail: [{Address: "Varanasi, India"}, {Mail: "ashish473797@gmail.com"}, {MobileNo: "9115271969"}],
  skills: ["C/C++", "HTML/CSS", "Javascript", "DSA"],
  language: ["English", "Hindi"],
  Education: [ {collageName: "Chandigarh Univesity", degree: "MCA", cgpa: "7.3"}, {collageName: "School of Management Sciences", degree: "BCA", cgpa: "6.5"}],
  certification: ["BootCamp in C/C++, DSA and IOT"],
  Project: "Real Time Chat Application",
  hobbies: ["Reading Blogs", "Playing Chess", "Singing", "Dancing"]
}


function Resume() {
  return (
    <>
      <div className='page'>
        <Header {...userData}/>
        <Heading {...userData}/>
      </div>
    </>
  );
}

export default Resume;