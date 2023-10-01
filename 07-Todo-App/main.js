
let input = document.querySelector("#inputID");

document.querySelector(".btn").onclick = function(){
    let temp = input.value;
    console.log(temp);
    if(temp != "")
    {
        addElement(temp);
    }
    else
    {
        alert("Please write some To-do")
    }
}

function addElement(temp){

    const div = document.createElement('div');
    div.className = 'element-container';

    const para = document.createElement('div');
    para.className = "para";

    const button = document.createElement('div');
    button.className = "del-btn";

    const done = document.createElement('div');
    done.className = "done";

    const bothBtn = document.createElement('div');
    bothBtn.className = "bothBtn";


    const node1 = document.createTextNode(temp);
    const node2 = document.createTextNode("Remove");
    const node3 = document.createTextNode("Done");

    para.appendChild(node1);
    button.appendChild(node2);
    done.appendChild(node3);

    bothBtn.appendChild(button);
    bothBtn.appendChild(done);

    div.appendChild(para);
    div.appendChild(bothBtn);

    const parent = document.querySelector(".container");
    para.setAttribute("class", "new-element");
    parent.append(div);
    document.querySelector("#inputID").value = "";
    console.log(elementArray);
}

