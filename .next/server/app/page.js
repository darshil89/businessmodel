(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3951:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>g,tree:()=>d});var r=s(482),i=s(9108),n=s(2563),a=s.n(n),o=s(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,7465)),"C:\\Web Development\\csbs hackthon\\businessmodel\\src\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1965)),"C:\\Web Development\\csbs hackthon\\businessmodel\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Web Development\\csbs hackthon\\businessmodel\\src\\app\\page.js"],u="/page",p={require:s,loadChunk:()=>Promise.resolve()},g=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9920:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},1060:()=>{},9933:(e,t,s)=>{Promise.resolve().then(s.bind(s,7357))},7357:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(5344),i=s(3729);let n=[{id:1,question:"Doing a job right is more important than making people happy.",options:["agree","disagree"],correctAnswer:"agree"},{id:2,question:"I believe that listening to others' opinions can sometimes lead to better decisions than relying on my own judgment.",options:["agree","disagree"],correctAnswer:"agree"},{id:3,question:"At times, I have so many thoughts I can't decide which one to choose.",options:["agree","disagree"],correctAnswer:"agree"},{id:13,question:"I don't like to make guesses.",options:["agree","disagree"],correctAnswer:"disagree"},{id:14,question:"I enjoy beginning new projects even if they are risky.",options:["agree","disagree"],correctAnswer:"agree"},{id:15,question:"I achieve what I want in life by working hard for it.",options:["agree","disagree"],correctAnswer:"agree"},{id:25,question:"I usually stick to my plans when I decide to do something.",options:["agree","disagree"],correctAnswer:"agree"},{id:26,question:"I often stand up for my beliefs when others don't agree with me.",options:["agree","disagree"],correctAnswer:"agree"},{id:27,question:"I often find that I achieve more when I work with others than alone.",options:["agree","disagree"],correctAnswer:"agree"},{id:37,question:"I usually don't need or want help with a task.",options:["agree","disagree"],correctAnswer:"disagree"},{id:38,question:"I like to be fairly good at many things instead of excellent at just one.",options:["agree","disagree"],correctAnswer:"agree"},{id:39,question:"I'm willing to take chances if there's a fair possibility of success.",options:["agree","disagree"],correctAnswer:"agree"},{id:49,question:"If I might fail, I prefer not to try.",options:["agree","disagree"],correctAnswer:"disagree"},{id:50,question:"To be successful, you have to be in the right place at the right time.",options:["agree","disagree"],correctAnswer:"agree"},{id:51,question:"If a task is giving me trouble, I leave it and do something else.",options:["agree","disagree"],correctAnswer:"disagree"}],a=()=>{let[e,t]=(0,i.useState)(0),[s,a]=(0,i.useState)(0),[o,l]=(0,i.useState)(0),[d,c]=(0,i.useState)(!1),[u,p]=(0,i.useState)(!1),[g,m]=(0,i.useState)(15),[h,x]=(0,i.useState)(0),[b,v]=(0,i.useState)(0),[f,w]=(0,i.useState)(0),[y,j]=(0,i.useState)(0),[q,I]=(0,i.useState)(0),[P,k]=(0,i.useState)(1),N=t=>{if(!d){let s=n[e].correctAnswer===t;a(e=>s?e+10:e+2),c(!0)}},A=()=>{m(15),3==P?x(s):6==P?v(s-h):9==P?w(s-h-b):12==P?j(s-h-b-f):15==P&&I(s-h-b-f-y),k(e=>e+1),c(!1),e<n.length-1?t(e=>e+1):(p(!0),alert(`Quiz completed! Your final score is ${s} and total time taken is ${o} seconds.`))};return((0,i.useEffect)(()=>{let e;return d||(e=setInterval(()=>{m(e=>e-1),u||l(e=>e+1),1==g&&(A(),clearInterval(e))},1e3)),()=>clearInterval(e)},[e,d,g]),u)?(0,r.jsxs)("div",{className:"container mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg text-center",children:[r.jsx("div",{className:"text-3xl font-bold mb-4",children:"Results"}),(0,r.jsxs)("div",{className:"result-box bg-blue-500 text-white py-3 px-6 mb-4",children:["Passion Of Success: ",h]}),(0,r.jsxs)("div",{className:"result-box bg-green-500 text-white py-3 px-6 mb-4",children:["Independent Drive: ",b]}),(0,r.jsxs)("div",{className:"result-box bg-yellow-500 text-gray-800 py-3 px-6 mb-4",children:["Innovative Spirit: ",f]}),(0,r.jsxs)("div",{className:"result-box bg-red-500 text-white py-3 px-6 mb-4",children:["Strategic Risk Management: ",y]}),(0,r.jsxs)("div",{className:"result-box bg-red-500 text-white py-3 px-6 mb-4",children:["Resolute Motivation: ",q]}),(0,r.jsxs)("div",{className:"result-box bg-orange-500 text-white py-3 px-6 mb-4",children:["Overall Score: ",s]}),(0,r.jsxs)("div",{className:"result-box bg-purple-500 text-white py-3 px-6 mb-4",children:["Total Time: ",o]})]}):(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6 w-96 mx-auto mt-8",children:[(0,r.jsxs)("h2",{className:"text-2xl font-bold mb-4",children:["Question ",e+1]}),r.jsx("p",{className:"text-gray-700 text-xl mb-4",children:n[e].question}),r.jsx("div",{className:"text-center mb-4",children:(0,r.jsxs)("p",{className:"text-lg font-bold text-blue-500",children:["Time remaining: ",g]})}),(0,r.jsxs)("div",{className:"flex justify-between space-x-4",children:[r.jsx("button",{onClick:()=>N("agree"),disabled:d,className:"bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none",children:"Agree"}),r.jsx("button",{onClick:()=>N("disagree"),disabled:d,className:"bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none",children:"Disagree"})]}),d&&r.jsx("div",{className:"mt-4",children:r.jsx("button",{onClick:A,className:"mt-4 bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none",children:u?"Finish":"Next Question"})})]})}},1965:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o,metadata:()=>a});var r=s(5036),i=s(1457),n=s.n(i);s(5023);let a={title:"BizViz",description:"Generated by create next app"};function o({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:n().className,children:e})})}},4012:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>a});let r=(0,s(6843).createProxy)(String.raw`C:\Web Development\csbs hackthon\businessmodel\src\app\mcp\page.jsx`),{__esModule:i,$$typeof:n}=r,a=r.default},7465:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(5036),i=s(4012);function n(){return r.jsx("div",{className:"text-center text-3xl",children:r.jsx(i.default,{})})}},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(337);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,43,337],()=>s(3951));module.exports=r})();