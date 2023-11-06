let lists = document.querySelectorAll(".list");

let rightBox = document.querySelector(".right");

let leftBox = document.querySelector(".left");

console.log(lists);


lists.forEach((list)=>{
    list.addEventListener("dragstart", function(e){
        let selected = list;

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected=null;
        });
        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected);
            selected=null;
        });
    });
})