import "./Resume.css";
import userData from "./assets/data";
import Header from "./components/header";
import LeftHeadings from "./components/leftHeadings";
import RighttHeadings from "./components/rightHeadings";
import Editor from "./components/editor";
import { useState } from "react";

function Resume() {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <div
        className="toggleBtn"
        onClick={() => {
          setEdit(!edit);
          if(edit === false)
          document.querySelector(".toggleBtn").innerHTML = "Edit";
          else
          document.querySelector(".toggleBtn").innerHTML = "Preview";
        }}
      >
        Preview
      </div>
      {!edit ? (
        <>
          <Editor />
        </>
      ) : (
        <>
          
          <div
            className="print"
            onClick={() => {
              window.print();
            }}
          >
            Print
          </div>
          <div className="page">
            <Header {...userData} />
            <div className="flex">
              <LeftHeadings prop={userData} />
              <RighttHeadings prop={userData} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Resume;
