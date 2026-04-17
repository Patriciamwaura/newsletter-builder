document.addEventListener("DOMContentLoaded",function(){
    const editor=document.getElementById("editor");
    const output=document.getElementById("output");
    function sanitized(str){
        return str.replace(/&/g,"&amp;")
                    .replace(/</g,"&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/\n/g, "<br>");
    };
    function toggleClearButton(){
        const clearBtn=document.getElementById("clearBtn");
        const saved=localStorage.getItem("draft");
        clearBtn.disabled=!(saved && saved.trim()!=="");
    }
    function togglePreviewButton(){
        const previewBtn=document.getElementById("previewBtn");
        previewBtn.disabled = editor.value.trim() ==="";
    }
const saved=localStorage.getItem("draft");
if (saved){
    editor.value=saved;
    output.innerHTML=sanitized(saved);
};
    function wordCount(){
        const stats=document.getElementById("stats");
        const content=editor.value;
        const charCount=content.length;
        const words=content.trim()===""?[]:content.trim().split(/\s+\);
        wordCount=words.length;
        stats.textContent=`Words:${wordCount}|Characters:${charCount}`;
    }
editor.addEventListener("input",()=>{
    const content=editor.value;
    output.innerHTML=sanitized(content);
    localStorage.setItem("draft",content);
    wordcount();
    toggleClearButton();
    togglePreviewButton();
});
window.preview=function(){
    const content=editor.value;
    output.innerHTML=sanitized(content);
}
    window.confirmClear=function(){
        const confirmBox=document.getElementById("confirmClear");
        confirmBox.innerHTML=`
        <p>Are you sure you want to clear your draft?</p>
        <button onclick="handleClear(true)">Yes</button>
        <button onclick="handleClear(false)">No</button>
       `
    };
    window.handleClear=function(choice){
        const confirmBox=document.getElementById("confirmClear");
        if(choice){
            editor.value="";
            output.innerHTML="";
            localStorage.removeItem("draft");
            toggleClearButton();
            togglePreviewButton();
        };
confirmBox.innerHTML="";
    };
    toggleClearButton();
    togglePreviewButton();
});
