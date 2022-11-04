let text = document.querySelector("#inputNew");
let submit = document.querySelector("#submit");
let task = document.querySelector("#task");

submit.addEventListener("click", ()=>{
    let taskNew = document.createElement("p");
    taskNew.innerHTML=`${text.value}`;
    document.body.appendChild(taskNew);
    taskNew.style.backgroundColor = "red";
    taskNew.style.color = "white";

    console.log(text.value);
});
