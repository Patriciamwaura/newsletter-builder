document.addEventListener("DOMContentLoaded",function(){
    const editor=document.getElementById("editor");
    const output=document.getElementById("output");
    function sanitized(str){
        return str.replace(/&/g,"&amp;")
                    .replace(/</g,"&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/\n/g, "<br>");
    }
const saved=localStorage.getItem("draft")
if (saved){
    editor.value=saved;
    output.innerHTML=sanitized(saved);
}
editor.addEventListener("input",() => {
    const content=editor.value;
    output.innerHTML=sanitized (content);
    localStorage.setItem("draft", content);
});
window.preview =function(){
    const content= editor.value;
    output.innerHTML=sanitized(content);
localStorage.setItem("draft", content);
};
});
window.clearDraft=function(){
    const editor=document.getElementById("editor");
    const output=document.getElementById("output");
    editor.value="";
    output.innerHTML="";
    localStorage.removeItem("draft");
};
