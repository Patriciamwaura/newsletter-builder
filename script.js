document.addEventListener("DOMContentLoaded",function(){
const saved=localStorage.getItem("draft")
if (saved){
    document.getElementById("editor").value=saved;
    document.getElementById("output").innerHTML=sanitized (saved);
}
});
function preview(){
    const content=document.getElementById("editor").value;
    document.getElementById("output").innerHTML= content;
localStorage.setItem("draft", content);
}
