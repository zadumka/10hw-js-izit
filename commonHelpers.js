import{i as b}from"./assets/error-icon-54602577.js";import{f as p}from"./assets/vendor-2b44ac2e.js";const i=document.querySelector("#datetime-picker"),n=document.querySelector("button[data-start]");n.setAttribute("disabled",!0);const g=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),C=document.querySelector("[data-minutes]"),M=document.querySelector("[data-seconds]");let d,u=0,c=1e3,l;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=new Date;l=e,t[0]<e?iziToast.show({title:"Error",titleColor:"#fff",message:"Please choose a date in the future",messageColor:"#fff",backgroundColor:"#EF4040",position:"topCenter",messageLineHeight:"24px",messageSize:"16px",iconUrl:b,theme:"dark"}):(n.removeAttribute("disabled"),d=t[0])}};p(i,D);n.addEventListener("click",x);function q(t){const m=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),y=Math.floor(t%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}function o(t){return t.toString().padStart(2,"0")}function x(){n.setAttribute("disabled",!0),i.setAttribute("disabled",!0),u=setInterval(()=>{let t=d.getTime()-l.getTime()-c;if(c+=1e3,t<0){clearInterval(u);return}const{days:e,hours:r,minutes:s,seconds:a}=q(t);g.textContent=o(e),S.textContent=o(r),C.textContent=o(s),M.textContent=o(a)},1e3)}
//# sourceMappingURL=commonHelpers.js.map