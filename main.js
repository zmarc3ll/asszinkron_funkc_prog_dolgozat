(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("allQuotes").addEventListener("click",(()=>{!async function(){let t=await fetch("/src/quotes.json"),e=(await t.json()).quotes.sort((function(t,e){return t.quote<e.quote?-1:t.quote>e.quote?1:0})),n=document.getElementById("dataList");n.textContent="";for(let t of e){let e=document.createElement("li");e.innerHTML=t.quote+" <i>-<i/><i>"+t.author+"<i/>",n.appendChild(e)}}()})),document.getElementById("bold").addEventListener("click",(()=>{!async function(){let t=[],e=await fetch("/src/quotes.json"),n=(await e.json()).quotes.sort((function(t,e){return t.quote<e.quote?-1:t.quote>e.quote?1:0}));for(let e of n)n.forEach((t=>{t.quote=t.quote.replaceAll(" the ","<b> the </b>"),t.quote=t.quote.replaceAll("The ","<b>The </b>")})),t.push(e.quote);let o=document.getElementById("dataList");o.textContent="";for(let e of t){let t=document.createElement("li");t.innerHTML=e,o.appendChild(t)}}()})),document.getElementById("lenghtButton").addEventListener("click",(()=>{!async function(){let t=await fetch("/src/quotes.json"),e=[],n=(await t.json()).quotes.quotes.sort((function(t,e){let n=t.author.toUpperCase(),o=e.author.toUpperCase();return n<o?-1:n>o?1:0})),o=document.getElementById("dataList");o.textContent="";for(let t of n){let n=document.createElement("li");e.push(t.quote.length),n.innerHTML=t.quote.length+" "+t.quote+" "+t.author,o.appendChild(n)}}()})),document.getElementById("counter").addEventListener("click",(()=>{!async function(){let t=document.getElementById("searchInput").value,e=await fetch("/src/quotes.json"),n=(await e.json()).quotes.quotes.filter((e=>e.author.toLowerCase()===t.toLowerCase()));document.getElementById("searchOutput").value=n.length}()}))}))})();