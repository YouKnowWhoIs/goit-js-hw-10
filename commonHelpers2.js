import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as o}from"./assets/vendor-77e16229.js";const m=document.querySelector('[name="delay"]'),t=document.querySelector('input[value="fulfilled"]'),a=document.querySelector('input[value="rejected"] '),i=document.querySelector(".form");i.addEventListener("submit",d);function d(s){s.preventDefault();const e=m.value,n=t.checked?t:a;new Promise((l,u)=>{setTimeout(()=>{n===t?l(e):u(e)},e)}).then(c).catch(r);function c(){o.success({message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}function r(){o.error({message:`❌ Rejected promise in ${e}ms`,position:"topRight"})}i.reset()}
//# sourceMappingURL=commonHelpers2.js.map
