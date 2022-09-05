(()=>{"use strict";const e=document.getElementById("canvas"),t=e.getContext("2d");t.imageSmoothingEnabled=!1;const n=[],l=[],o=(e,n,l,o)=>{t.fillStyle=l,t.fillRect(e,n,o,o)},a=(e,t,l)=>{const o={from:e,to:t,g:l};return n.push(o),o},i=()=>500*Math.random(),r=()=>{n.forEach((t=>((t,n,l)=>{for(let o=0;o<t.length;o++){let a=0,i=0;const r=t[o];for(let e=0;e<n.length;e++){const t=n[e],o=r.x-t.x,d=r.y-t.y,c=Math.sqrt(o*o+d*d);if(c>0&&c<80){const e=-l/c;a+=e*o,i+=e*d}}r.vx=.5*(r.vx+a),r.vy=.5*(r.vy+i),r.x+=r.vx,r.y+=r.vy,(r.x<=0||r.x>=e.width)&&(r.vx*=-1),(r.y<=0||r.y>=e.width)&&(r.vy*=-1)}})(t.from.particles,t.to.particles,t.g))),t.clearRect(0,0,e.width,e.width),o(0,0,"black",e.width),l.forEach((e=>o(e.x,e.y,e.color,e.size))),requestAnimationFrame(r)},d=document.getElementById("color_input"),c=document.getElementById("number_input"),s=document.getElementById("add"),g=document.getElementById("groups"),u=document.getElementById("rules");let h="",m=0;const v=[],y=()=>{h=`#${Math.floor(16777215*Math.random()).toString(16)}`,d.value=h,m=Math.floor(1e3*Math.random()),c.value=m};d.addEventListener("input",(e=>{h=e.target.value})),c.addEventListener("input",(e=>{m=e.target.value,e.target.value>1e3&&(m=1e3,c.value=1e3),e.target.value<0&&(m=0,c.value=0)})),s.addEventListener("click",(()=>{const e=((e,t,n,o)=>{const a=[];for(let n=0;n<e;n++)a.push({x:i(),y:i(),vx:0,vy:0,color:t,size:5});return l.push(...a),{name:o,particles:a}})(m,h,0,v.length);v.push(e),y(),g.innerHTML="",v.forEach((t=>{g.innerHTML+=`\n      <div class="group" style="background: ${t.particles[0].color}">\n        <label style="color: ${t.particles[0].color}">${t.name} ${t.particles.length}</label>\n      </div>\n      `,a(e,t,0),e.name!==t.name&&a(t,e,0)})),u.innerHTML="",n.forEach((e=>{u.innerHTML+=`\n      <div>\n        <label>${e.from.name}</label>\n        <input\n          class="g_input"\n          type="range"\n          min="-2"\n          max="2"\n          value="0"\n          step="0.001"\n        />\n        <label>${e.to.name}</label>\n      </div>`}));const t=document.getElementsByClassName("g_input");for(let e=0;e<t.length;e++)t[e].addEventListener("input",(t=>{n[e].g=t.target.value}))}));const p=document.getElementById("canvas");p.getContext("2d").imageSmoothingEnabled=!1,window.onload=()=>{window.innerHeight>window.innerWidth?(p.width=window.innerWidth-10,p.height=window.innerWidth-10):(p.width=window.innerHeight-10,p.height=window.innerHeight-10),y(),r()}})();