import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h,i}from"./assets/vendor-77e16229.js";const s=document.querySelector("#datetime-picker"),r=document.querySelector("button[data-start]"),f=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),y=document.querySelector("[data-seconds]");r.disabled=!0;let n;const T={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){n=e[0],c()}};h(s,T);s.addEventListener("input",c);function c(){const e=new Date(s.value);e>new Date?(r.disabled=!1,n=e):n&&e<n?(r.disabled=!0,n=null,i.error({message:"Please choose a date in the future",position:"topRight"})):(n=null,i.error({message:"Please choose a date in the future",position:"topRight"}))}class g{constructor(t){this.intervalId=null,this.tick=t}start(){n.getTime(),this.intervalId=setInterval(()=>{const t=n.getTime()-Date.now();if(t<0){clearInterval(this.intervalId),r.disabled=!0,s.disabled=!1;return}const o=this.convertMs(t);this.tick(o)},1e3)}convertMs(t){const d=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:u,minutes:l,seconds:m}}}function v({days:e,hours:t,minutes:o,seconds:a}){return e=e.toString().padStart(2,0),t=t.toString().padStart(2,0),o=o.toString().padStart(2,0),a=a.toString().padStart(2,0),{days:e,hours:t,minutes:o,seconds:a}}function b(e){const t=v(e);f.textContent=t.days,S.textContent=t.hours,p.textContent=t.minutes,y.textContent=t.seconds}const D=new g(b);r.addEventListener("click",()=>{console.log("start"),s.disabled=!0,r.disabled=!0,D.start()});
//# sourceMappingURL=commonHelpers.js.map
