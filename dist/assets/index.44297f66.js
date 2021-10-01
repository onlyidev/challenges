var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var r in o||(o={}))a.call(o,r)&&l(e,r,o[r]);if(t)for(var r of t(o))s.call(o,r)&&l(e,r,o[r]);return e};import{p as r,a as n,r as c,o as i,c as u,b as d,t as p,u as f,F as g,d as v,i as h,e as m,w as x,f as y,g as w,T as b,D as k,h as j,j as _,k as C,l as z,m as A,n as S}from"./vendor.eb308d6a.js";r("data-v-e32c9374");const q=d("p",null,[d("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Documentation "),v(" | "),d("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Documentation")],-1),M=d("p",null,[v(" Edit "),d("code",null,"components/HelloWorld.vue"),v(" to test hot module replacement. ")],-1);n();const W={expose:[],props:{msg:String},setup(e){const t=c({count:0});return(a,s)=>(i(),u(g,null,[d("h1",null,p(e.msg),1),q,d("button",{type:"button",onClick:s[1]||(s[1]=e=>f(t).count++),class:"focus:outline-none bg-blue-200 py-2 px-3 rounded-md shadow-sm"}," count is: "+p(f(t).count),1),M],64))},__scopeId:"data-v-e32c9374"};const T={class:"bg-gray-800 flex items-center w-full justify-between"},R=d("a",{href:"/"},[d("img",{src:"/challenges/assets/logo.03d6d6da.png",alt:"vuejs logo",class:"h-12 p-2 cursor-pointer"})],-1),I={class:"text-white flex justify-around space-x-4 pr-12 cursor-pointer"},L={expose:[],setup(e){const t=h("routeName"),a=h("menuRoutes");return(e,s)=>(i(),u("div",T,[R,d("div",I,[(i(!0),u(g,null,m(f(a),((e,a)=>(i(),u("a",{class:[{"text-blue-500 underline":e==f(t)},"hover:transform hover:scale-110 transition hover:text-red-200"],href:a},p(e),11,["href"])))),256))])]))}},O={class:"\n      container\n      h-[100vh]\n      w-[100vw]\n      m-0\n      p-0\n      flex flex-col\n      justify-center\n      items-center\n    "},P={class:"w-full h-12 fixed top-0 left-0"},D={class:"mt-12"},Y={expose:[],setup:e=>(e,t)=>(i(),u("div",O,[d("nav",P,[d(L)]),d("main",D,[d(W,{msg:"Welcome to this page"})])]))};r("data-v-436da366");const E={class:"w-full h-[100vh] flex flex-col justify-center items-center bg-gray-800"},N=d("h1",{class:"text-9xl text-blue-400 tracking-widest ml-2"},"404",-1),$=d("b",{class:"ring px-2 py-3 text-white"},"The page you are looking for is not here",-1);n();const H={expose:[],setup:e=>(e,t)=>(i(),u("div",E,[N,$])),__scopeId:"data-v-436da366"};const V={},F=x();r("data-v-25a2c32b");const G={class:"w-[100vw] h-[100vh] bg-indigo-dark flex flex-col items-center overflow-y-auto lg:justify-center"},B=y('<div class="bg-indigo-light rounded-md my-12 w-[20rem] flex-grow lg:flex-grow-0 lg:flex lg:flex-row-reverse lg:w-[75%] lg:h-[70%]" data-v-25a2c32b><div id="img" class="w-full h-56 bg-indigo-lighter bg-blend-overlay filter brightness-[60%] rounded-t-md lg:rounded-l-none lg:h-full lg:w-1/2 lg:flex-shrink-0 lg:rounded-r-md" data-v-25a2c32b></div><div class="px-4 space-y-4 my-8 lg:mx-8 lg:mt-16 lg:space-y-16" data-v-25a2c32b><div class="text-center lg:text-left" data-v-25a2c32b><h1 class="text-white text-3xl lg:text-4xl font-extrabold lg:font-bold font-sans-serif" data-v-25a2c32b> Get <span class="text-indigo-lighter" data-v-25a2c32b>insights</span> that help your business grow. </h1><p class="text-white opacity-75 lg:text-sm mt-8 lg:leading-6 lg:mr-8 mx-2 leading-7" data-v-25a2c32b> Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency. </p></div><div class="lg:flex lg:justify-evenly lg:-ml-16 space-y-8 lg:space-y-0" data-v-25a2c32b><div class="text-white text-center lg:text-left" data-v-25a2c32b><h2 class="text-2xl font-extrabold font-sans-serif" data-v-25a2c32b>10k+</h2><p class="uppercase font-normal opacity-60 font-sans text-sm" data-v-25a2c32b>companies</p></div><div class="text-white text-center lg:text-left" data-v-25a2c32b><h2 class="text-2xl font-extrabold font-sans-serif" data-v-25a2c32b>314</h2><p class="uppercase font-normal opacity-60 font-sans text-sm" data-v-25a2c32b>templates</p></div><div class="text-white text-center lg:text-left" data-v-25a2c32b><h2 class="text-2xl font-extrabold font-sans-serif" data-v-25a2c32b>12M+</h2><p class="uppercase font-normal opacity-60 font-sans text-sm" data-v-25a2c32b>queries</p></div></div></div></div>',1);n();const J=F(((e,t)=>(i(),u("div",G,[B]))));V.render=J,V.__scopeId="data-v-25a2c32b";var K="/challenges/assets/icon-close.55b786af.svg";const Q={class:"rounded-full transition-shadow duration-500 ease-out delay-700"},U={expose:[],props:{icon:String,color:String,classes:String,imgClass:String},setup:e=>(t,a)=>(i(),u("div",Q,[d("div",{class:["transform hover:scale-105 duration-300 ease-in-out cursor-pointer bg-white rounded-full w-24 h-24 flex justify-center items-center ring-[1rem] shadow-inner drop-shadow-2xl",[e.color,e.classes]]},[d("img",{src:e.icon,alt:"",class:e.imgClass},null,10,["src"])],2)]))};const X=x();r("data-v-52e50410");const Z={class:"gradient-radial w-[100vw] h-[100vh] grid grid-cols-3 lg:grid-cols-4 grid-rows-4 lg:grid-rows-3 py-8"},ee={class:"ring ring-gray-400 lg:col-span-2 lg:col-start-2 col-span-full col-start-1 rounded-2xl flex items-center px-8 justify-between h-4/5 w-4/5 lg:w-auto mx-auto lg:mx-0 relative z-10"},te=d("img",{src:"/challenges/assets/logo.1ea8253d.svg",class:"h-4/5",alt:""},null,-1),ae={class:"bg-white rounded-lg h-4/5 px-16 w-1/4 flex flex-col justify-center py-4 items-center"},se=d("h3",{class:"uppercase text-[hsl(229,64%,46%)] font-normal tracking-wide text-lg"}," score ",-1),le={class:"font-bold text-6xl text-[hsl(229,25%,31%)] whitespace-nowrap"},oe=d("img",{class:"row-span-full col-span-full w-4/5 h-4/5",src:"/challenges/assets/bg-triangle.e0a7e2da.svg",alt:""},null,-1),re=d("p",{class:"uppercase text-white text-lg font-bold whitespace-nowrap z-10"}," you picked ",-1),ne={class:"text-white text-5xl text-bold uppercase font-mono font-extrabold whitespace-nowrap"},ce=d("p",{class:"uppercase text-white text-lg font-bold whitespace-nowrap z-10"}," the house picked ",-1),ie={class:"row-start-4 col-start-2 lg:row-start-3 lg:col-start-4 w-full h-full flex justify-center items-end z-10"},ue={class:"fixed inset-0 z-10 overflow-y-auto"},de={class:"min-h-screen px-4 text-center flex justify-center items-center"},pe=d("span",{class:"text-3xl font-bold font-mono text-gray-900 uppercase"},"Rules",-1),fe=d("img",{src:K,class:"h-1/2 cursor-pointer",alt:""},null,-1),ge=d("img",{src:"/challenges/assets/image-rules.1a7bc2cb.svg",alt:""},null,-1);n();const ve={expose:[],setup(e){const t={paper:"ring-blue-500",scissors:"ring-yellow-500",rock:"ring-red-500"},a={paper:"../../ch2/images/icon-paper.svg",scissors:"../../ch2/images/icon-scissors.svg",rock:"../../ch2/images/icon-rock.svg"},s=w(""),l=w(""),o=w(!1),r=c({msg:"",playerWon:!1}),n=w(0),v={paper:["rock"],scissors:["paper"],rock:["scissors"]};function h(e=!1){if(e){switch(Math.ceil(9*Math.random())%3){case 0:l.value="paper";break;case 1:l.value="scissors";break;case 2:l.value="rock"}l.value!=s.value?(r.msg=function(){if(s.value==l.value)return"Tie";if(v[s.value].find((e=>e==l.value)))return n.value+=1,"You win";n.value-=0==n.value?0:1;return"You lose"}(),r.playerWon=r.msg.includes("win")):h(!0)}else setTimeout((()=>{h(!0)}),1e3)}function m(e=!1){e?(l.value="",s.value="",r.value={}):setTimeout((()=>{h(!0)}),1e3)}function x(){o.value=!1}return(e,c)=>(i(),u(g,null,[d("div",Z,[d("div",ee,[te,d("div",ae,[se,d("h1",le,p(n.value),1)])]),d(f(b),{as:"div",appear:"",show:!s.value,class:"col-span-1 row-span-2 row-start-2 col-start-2 place-self-center w-full h-full grid place-items-center grid-cols-3 grid-rows-3 lg:ml-[100%]",enter:"transition-all duration-500 ease-out delay-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-all duration-300","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-0"},{default:X((()=>[oe,d(U,{color:t.paper,icon:a.paper,class:"row-start-1 col-start-1",onClick:c[1]||(c[1]=e=>{s.value="paper",h()})},null,8,["color","icon"]),d(U,{onClick:c[2]||(c[2]=e=>{s.value="scissors",h()}),color:t.scissors,class:"row-start-1 col-start-3",icon:a.scissors},null,8,["color","icon"]),d(U,{onClick:c[3]||(c[3]=e=>{s.value="rock",h()}),class:"row-start-3 col-start-2",icon:a.rock,color:t.rock},null,8,["icon","color"])])),_:1},8,["show"]),d(f(b),{show:s.value.length>0,class:"col-span-2 row-span-2 row-start-2 col-start-2 lg:place-self-center w-3/5 h-full grid grid-cols-4",enter:"transition-opacity duration-500 ease-out delay-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:X((()=>[d("div",{class:["flex flex-col items-center col-start-1 space-y-16 duration-500 ease-out z-10 delay-500",{"transform -translate-x-32":l.value.length>0}]},[re,d(U,{icon:a[s.value],color:t[s.value],classes:"w-48 h-48 ring-[2rem] cursor-default hover:scale-100",class:{"win-gradient":f(r).playerWon&&l.value.length>0},"img-class":"w-1/2 h-1/2"},null,8,["icon","color","class"])],2),d(f(b),{show:l.value.length>0,class:"col-span-2 col-start-2 self-center justify-self-center flex flex-col items-center w-full z-10 relative",enter:"transition-all transform duration-500 ease-out delay-500","enter-from":"opacity-0 scale-0","enter-to":"opacity-100 scale-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:X((()=>[d("h1",ne,p(f(r).msg),1),d("button",{onClick:m,class:["uppercase font-normal py-3 w-full tracking-widest text-lg bg-white rounded-lg focus:outline-none shadow-2xl transform hover:scale-105 duration-300 ease-in-out",{"text-red-700":!f(r).playerWon}]}," Play again ",2)])),_:1},8,["show"]),d("div",{class:["flex flex-col col-start-4 items-center space-y-16 duration-500 ease-out z-0 delay-500",{"transform translate-x-32":l.value.length>0}]},[ce,d("div",{class:["rounded-full bg-black h-48 w-48 transition-all duration-500 ease-out delay-300",{"opacity-20":0==l.value.length,"win-gradient":!f(r).playerWon&&l.value.length>0}]},[d(f(b),{show:l.value.length>0,enter:"transition-all transform duration-500 ease-out","enter-from":"opacity-0 scale-0","enter-to":"opacity-100 scale-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0",class:["w-full h-full flex justify-center items-center bg-white rounded-full ring-[2rem]",t[l.value]]},{default:X((()=>[d("img",{class:"w-1/2 h-1/2",src:a[l.value],alt:""},null,8,["src"])])),_:1},8,["show","class"])],2)],2)])),_:1},8,["show"]),d("div",ie,[d("button",{onClick:c[4]||(c[4]=e=>o.value=!o.value),class:"focus:outline-none bg-transparent text-white border-2 border-white px-8 py-2 rounded-lg uppercase text-sm font-bold tracking-wider"}," Rules ")])]),d(f(b),{show:o.value,as:"template"},{default:X((()=>[d(f(k),{as:"div",onClose:c[6]||(c[6]=e=>x())},{default:X((()=>[d("div",ue,[d("div",de,[d(f(j),{class:"fixed inset-0 bg-black opacity-20"}),d(f(_),{as:"div",enter:"transition-opacity duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300 ease-in","leave-from":"opacity-100","leave-to":"opacity-0",class:"w-full max-w-sm p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl flex flex-col space-y-8 justify-center items-center"},{default:X((()=>[d(f(C),{as:"h3",class:"self-start flex justify-between w-full"},{default:X((()=>[pe,d("button",{class:"focus:outline-none",onClick:c[5]||(c[5]=e=>x())},[fe])])),_:1}),ge])),_:1})])])])),_:1})])),_:1},8,["show"])],64))},__scopeId:"data-v-52e50410"};const he=x();r("data-v-49b5d232");const me={class:"gradient-radial w-[100vw] h-[100vh] grid grid-cols-3 lg:grid-cols-4 grid-rows-4 lg:grid-rows-3 py-8"},xe={class:"ring ring-gray-400 lg:col-span-2 lg:col-start-2 col-span-full col-start-1 rounded-2xl flex items-center px-8 justify-between h-4/5 w-4/5 lg:w-auto mx-auto lg:mx-0 relative z-10"},ye=d("img",{src:"/challenges/assets/logo-bonus.97065621.svg",class:"h-4/5",alt:""},null,-1),we={class:"bg-white rounded-lg h-4/5 px-16 w-1/4 flex flex-col justify-center py-4 items-center"},be=d("h3",{class:"uppercase text-[hsl(229,64%,46%)] font-normal tracking-wide text-lg"}," score ",-1),ke={class:"font-bold text-6xl text-[hsl(229,25%,31%)] whitespace-nowrap"},je=d("img",{class:"row-span-full col-span-full w-auto h-auto",src:"/challenges/assets/bg-pentagon.b75c8a50.svg",alt:""},null,-1),_e=d("p",{class:"uppercase text-white text-lg font-bold whitespace-nowrap z-10"}," you picked ",-1),Ce={class:"text-white text-5xl text-bold uppercase font-mono font-extrabold whitespace-nowrap"},ze=d("p",{class:"uppercase text-white text-lg font-bold whitespace-nowrap z-10"}," the house picked ",-1),Ae={class:"row-start-4 col-start-2 lg:row-start-3 lg:col-start-4 w-full h-full flex justify-center items-end z-10"},Se={class:"fixed inset-0 z-10 overflow-y-auto"},qe={class:"min-h-screen px-4 text-center flex justify-center items-center"},Me=d("span",{class:"text-3xl font-bold font-mono text-gray-900 uppercase"},"Rules",-1),We=d("img",{src:K,class:"h-1/2 cursor-pointer",alt:""},null,-1),Te=d("img",{src:"/challenges/assets/image-rules-bonus.8779132b.svg",alt:""},null,-1);n();const Re={expose:[],setup(e){const t={paper:"ring-blue-500",scissors:"ring-yellow-500",rock:"ring-red-500",lizard:"ring-purple-500",spock:"ring-green-500"},a={paper:"../../ch2/images/icon-paper.svg",scissors:"../../ch2/images/icon-scissors.svg",rock:"../../ch2/images/icon-rock.svg",lizard:"../../ch2/images/icon-lizard.svg",spock:"../../ch2/images/icon-spock.svg"},s=w(""),l=w(""),o=w(!1),r=c({msg:"",playerWon:!1}),n=w(0),v={paper:["rock","spock"],scissors:["paper","lizard"],rock:["scissors","lizard"],lizard:["spock","paper"],spock:["scissors","rock"]};function h(e=!1){if(e){switch(Math.ceil(10*Math.random())%5){case 0:l.value="paper";break;case 1:l.value="scissors";break;case 2:l.value="rock";break;case 3:l.value="lizard";break;case 4:l.value="spock"}l.value!=s.value?(r.msg=function(){if(s.value==l.value)return"Tie";if(v[s.value].find((e=>e==l.value)))return n.value+=1,"You win";n.value-=0==n.value?0:1;return"You lose"}(),r.playerWon=r.msg.includes("win")):h(!0)}else setTimeout((()=>{h(!0)}),1e3)}function m(e=!1){e?(l.value="",s.value="",r.value={}):setTimeout((()=>{h(!0)}),1e3)}function x(){o.value=!1}return(e,c)=>(i(),u(g,null,[d("div",me,[d("div",xe,[ye,d("div",we,[be,d("h1",ke,p(n.value),1)])]),d(f(b),{as:"div",appear:"",show:!s.value,class:"col-span-1 row-span-2 row-start-2 col-start-2 place-self-center w-full h-full grid place-items-center grid-cols-3 grid-rows-3 lg:ml-[100%]",enter:"transition-all duration-500 ease-out delay-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-all duration-300","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-0"},{default:he((()=>[je,d(U,{onClick:c[1]||(c[1]=e=>{s.value="scissors",h()}),color:t.scissors,class:"row-start-1 col-start-2",icon:a.scissors},null,8,["color","icon"]),d(U,{color:t.paper,icon:a.paper,class:"row-start-2 col-start-3 self-start justify-self-end",onClick:c[2]||(c[2]=e=>{s.value="paper",h()})},null,8,["color","icon"]),d(U,{onClick:c[3]||(c[3]=e=>{s.value="rock",h()}),class:"row-start-3 col-start-3 self-end justify-self-start",icon:a.rock,color:t.rock},null,8,["icon","color"]),d(U,{onClick:c[4]||(c[4]=e=>{s.value="lizard",h()}),class:"row-start-3 col-start-1 self-end justify-self-end",icon:a.lizard,color:t.lizard},null,8,["icon","color"]),d(U,{onClick:c[5]||(c[5]=e=>{s.value="spock",h()}),class:"row-start-2 col-start-1 self-start justify-self-start",icon:a.spock,color:t.spock},null,8,["icon","color"])])),_:1},8,["show"]),d(f(b),{show:s.value.length>0,class:"col-span-2 row-span-2 row-start-2 col-start-2 lg:place-self-center w-3/5 h-full grid grid-cols-4",enter:"transition-opacity duration-500 ease-out delay-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:he((()=>[d("div",{class:["flex flex-col items-center col-start-1 space-y-16 duration-500 ease-out z-10 delay-500",{"transform -translate-x-32":l.value.length>0}]},[_e,d(U,{icon:a[s.value],color:t[s.value],classes:"w-48 h-48 ring-[2rem] cursor-default hover:scale-100",class:{"win-gradient":f(r).playerWon&&l.value.length>0},"img-class":"w-1/2 h-1/2"},null,8,["icon","color","class"])],2),d(f(b),{show:l.value.length>0,class:"col-span-2 col-start-2 self-center justify-self-center flex flex-col items-center w-full z-10 relative",enter:"transition-all transform duration-500 ease-out delay-500","enter-from":"opacity-0 scale-0","enter-to":"opacity-100 scale-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:he((()=>[d("h1",Ce,p(f(r).msg),1),d("button",{onClick:m,class:["uppercase font-normal py-3 w-full tracking-widest text-lg bg-white rounded-lg focus:outline-none shadow-2xl transform hover:scale-105 duration-300 ease-in-out",{"text-red-700":!f(r).playerWon}]}," Play again ",2)])),_:1},8,["show"]),d("div",{class:["flex flex-col col-start-4 items-center space-y-16 duration-500 ease-out z-0 delay-500",{"transform translate-x-32":l.value.length>0}]},[ze,d("div",{class:["rounded-full bg-black h-48 w-48 transition-all duration-500 ease-out delay-300",{"opacity-20":0==l.value.length,"win-gradient":!f(r).playerWon&&l.value.length>0}]},[d(f(b),{show:l.value.length>0,enter:"transition-all transform duration-500 ease-out","enter-from":"opacity-0 scale-0","enter-to":"opacity-100 scale-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0",class:["w-full h-full flex justify-center items-center bg-white rounded-full ring-[2rem]",t[l.value]]},{default:he((()=>[d("img",{class:"w-1/2 h-1/2",src:a[l.value],alt:""},null,8,["src"])])),_:1},8,["show","class"])],2)],2)])),_:1},8,["show"]),d("div",Ae,[d("button",{onClick:c[6]||(c[6]=e=>o.value=!o.value),class:"focus:outline-none bg-transparent text-white border-2 border-white px-8 py-2 rounded-lg uppercase text-sm font-bold tracking-wider"}," Rules ")])]),d(f(b),{show:o.value,as:"template"},{default:he((()=>[d(f(k),{as:"div",onClose:c[8]||(c[8]=e=>x())},{default:he((()=>[d("div",Se,[d("div",qe,[d(f(j),{class:"fixed inset-0 bg-black opacity-20"}),d(f(_),{as:"div",enter:"transition-opacity duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300 ease-in","leave-from":"opacity-100","leave-to":"opacity-0",class:"w-full max-w-sm p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl flex flex-col space-y-8 justify-center items-center"},{default:he((()=>[d(f(C),{as:"h3",class:"self-start flex justify-between w-full"},{default:he((()=>[Me,d("button",{class:"focus:outline-none",onClick:c[7]||(c[7]=e=>x())},[We])])),_:1}),Te])),_:1})])])])),_:1})])),_:1},8,["show"])],64))},__scopeId:"data-v-49b5d232"};r("data-v-9d55797a");const Ie={class:"bg-gray-800 w-[100vw] h-[100vh] overflow-auto flex flex-col space-y-4 justify-center items-center text-white text-xl"},Le=d("div",{class:"number text-black text-3xl pointer-events-none select-none"},"1",-1),Oe=d("div",{id:"empty",class:"w-full h-full flex justify-center items-center",style:{order:"16"},"data-x":"3","data-y":"3"},null,-1);n();const Pe={expose:[],setup(e){async function t(e){let t=e.target.getAttribute("data-x"),o=e.target.getAttribute("data-y");const n=document.querySelector("#empty"),c={x:n.getAttribute("data-x"),y:n.getAttribute("data-y")};1==s({x:t,y:o},c)?(e.target.setAttribute("data-x",c.x),e.target.setAttribute("data-y",c.y),n.setAttribute("data-x",t),n.setAttribute("data-y",o),e.target.classList.add("transition-all","duration-300"),e.target.style.transform=`translate(calc(${l(t,c.x)}*110%), calc(${l(o,c.y)}*110%))`,await r(300),e.target.classList.remove("transition-all","duration-300"),e.target.style.transform="",a(n,e.target)):(e.target.classList.add("anim-shake"),await r(300),e.target.classList.remove("anim-shake"))}function a(e,t){let a=e.style.order,s=t.style.order;e.style.order=s,t.style.order=a}function s(e,t){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)}function l(e,t){return t>e?1:t==e?0:-1}function r(e){return new Promise((t=>{setTimeout(t,e)}))}async function n(){const e=document.querySelector("#empty"),t=e=>({x:e.getAttribute("data-x"),y:e.getAttribute("data-y")});let l={x:20,y:20};for(let c=0;c<100;c++){const c=t(e);let i=Array.from(document.querySelectorAll("#matrix div")).filter((e=>{const a=t(e);return a!=l&&1==s(a,c)}));l=o({},c);let u=Math.floor(Math.random()*i.length);try{a(e,i[u])}catch(n){}await r(300)}}return z((()=>{let e=document.querySelector("#square"),a=document.querySelector("#matrix");console.log(e,a);for(let s=1,l=0;4*l+s<15;s++,l+=Math.floor(s/4),s%=4){let o=e.cloneNode(!0),r=o.querySelector(".number");r.id=`${4*l+s+1}`,r.innerHTML=r.id,o.style.order=r.id,o.setAttribute("data-x",s),o.setAttribute("data-y",l),o.addEventListener("click",t),a.appendChild(o)}})),(e,a)=>(i(),u("div",Ie,[d("div",{id:"matrix",class:"w-96 h-96 rounded-md border border-white grid grid-cols-4 grid-rows-4 gap-2 p-1 relative"},[d("div",{onClick:t,id:"square",class:"w-full h-full bg-gray-200 border border-white rounded-md flex justify-center items-center","data-x":"0","data-y":"0"},[Le]),Oe]),d("button",{onClick:n,class:"rounded-md bg-green-500 px-3 py-2 text-lg text-white transform transition-transform duartion-100 active:scale-95"}," Shuffle! ")]))},__scopeId:"data-v-9d55797a"};const De={"/":Y,"/apply":Y,"/ch1":V,"/ch2":ve,"/ch2/bonus":Re,"/slsquare":Pe},Ye={"/":"Main","/apply":"Application","/ch1":"Challenge 1","/ch2":"Challenge 2","/slsquare":"Sliding squares"},Ee=A({data:()=>({currentRoute:window.location.pathname}),computed:{CurrentComponent(){return De[this.currentRoute]||H}},render(){return S(this.CurrentComponent)}});Ee.provide("routeName",Ye[window.location.pathname]||""),Ee.provide("menuRoutes",Ye||[]),Ee.mount("#app");