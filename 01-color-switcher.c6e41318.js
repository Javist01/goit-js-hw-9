const t={startBtn:document.querySelector("[data-start]"),stoptBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};let e=null;function n(){const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.body.style.backgroundColor=e}t.startBtn.addEventListener("click",(function(){n(),e=setInterval((()=>{n()}),1e3),t.startBtn.setAttribute("disabled","disabled"),t.stoptBtn.removeAttribute("disabled")})),t.stoptBtn.addEventListener("click",(function(){clearInterval(e),t.stoptBtn.setAttribute("disabled","disabled"),t.startBtn.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.c6e41318.js.map
