(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931,83],{8009:function(e,t,s){Promise.resolve().then(s.bind(s,7185))},7185:function(e,t,s){"use strict";s.r(t);var i=s(3827),r=s(4090);let n=[{id:1,question:"Doing a job right is more important than making people happy.",options:["agree","disagree"],correctAnswer:"agree"},{id:2,question:"I believe that listening to others' opinions can sometimes lead to better decisions than relying on my own judgment.",options:["agree","disagree"],correctAnswer:"agree"},{id:3,question:"At times, I have so many thoughts I can't decide which one to choose.",options:["agree","disagree"],correctAnswer:"agree"},{id:13,question:"I don't like to make guesses.",options:["agree","disagree"],correctAnswer:"disagree"},{id:14,question:"I enjoy beginning new projects even if they are risky.",options:["agree","disagree"],correctAnswer:"agree"},{id:15,question:"I achieve what I want in life by working hard for it.",options:["agree","disagree"],correctAnswer:"agree"},{id:25,question:"I usually stick to my plans when I decide to do something.",options:["agree","disagree"],correctAnswer:"agree"},{id:26,question:"I often stand up for my beliefs when others don't agree with me.",options:["agree","disagree"],correctAnswer:"agree"},{id:27,question:"I often find that I achieve more when I work with others than alone.",options:["agree","disagree"],correctAnswer:"agree"},{id:37,question:"I usually don't need or want help with a task.",options:["agree","disagree"],correctAnswer:"disagree"},{id:38,question:"I like to be fairly good at many things instead of excellent at just one.",options:["agree","disagree"],correctAnswer:"agree"},{id:39,question:"I'm willing to take chances if there's a fair possibility of success.",options:["agree","disagree"],correctAnswer:"agree"},{id:49,question:"If I might fail, I prefer not to try.",options:["agree","disagree"],correctAnswer:"disagree"},{id:50,question:"To be successful, you have to be in the right place at the right time.",options:["agree","disagree"],correctAnswer:"agree"},{id:51,question:"If a task is giving me trouble, I leave it and do something else.",options:["agree","disagree"],correctAnswer:"disagree"}];t.default=()=>{let[e,t]=(0,r.useState)(0),[s,o]=(0,r.useState)(0),[a,l]=(0,r.useState)(0),[c,d]=(0,r.useState)(!1),[g,u]=(0,r.useState)(!1),[h,m]=(0,r.useState)(15),[x,p]=(0,r.useState)(0),[b,w]=(0,r.useState)(0),[f,v]=(0,r.useState)(0),[y,I]=(0,r.useState)(0),[j,N]=(0,r.useState)(0),[k,A]=(0,r.useState)(1),q=t=>{if(!c){let s=n[e].correctAnswer===t;o(e=>s?e+10:e+2),d(!0)}},S=()=>{m(15),3==k?p(s):6==k?w(s-x):9==k?v(s-x-b):12==k?I(s-x-b-f):15==k&&N(s-x-b-f-y),A(e=>e+1),d(!1),e<n.length-1?t(e=>e+1):(u(!0),alert("Quiz completed! Your final score is ".concat(s," and total time taken is ").concat(a," seconds.")))};return((0,r.useEffect)(()=>{let e;return c||(e=setInterval(()=>{m(e=>e-1),g||l(e=>e+1),1==h&&(S(),clearInterval(e))},1e3)),()=>clearInterval(e)},[e,c,h]),g)?(0,i.jsxs)("div",{className:"container mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg text-center",children:[(0,i.jsx)("div",{className:"text-3xl font-bold mb-4",children:"Results"}),(0,i.jsxs)("div",{className:"result-box bg-blue-500 text-white py-3 px-6 mb-4",children:["Passion Of Success: ",x]}),(0,i.jsxs)("div",{className:"result-box bg-green-500 text-white py-3 px-6 mb-4",children:["Independent Drive: ",b]}),(0,i.jsxs)("div",{className:"result-box bg-yellow-500 text-gray-800 py-3 px-6 mb-4",children:["Innovative Spirit: ",f]}),(0,i.jsxs)("div",{className:"result-box bg-red-500 text-white py-3 px-6 mb-4",children:["Strategic Risk Management: ",y]}),(0,i.jsxs)("div",{className:"result-box bg-red-500 text-white py-3 px-6 mb-4",children:["Resolute Motivation: ",j]}),(0,i.jsxs)("div",{className:"result-box bg-orange-500 text-white py-3 px-6 mb-4",children:["Overall Score: ",s]}),(0,i.jsxs)("div",{className:"result-box bg-purple-500 text-white py-3 px-6 mb-4",children:["Total Time: ",a]})]}):(0,i.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6 w-96 mx-auto mt-8",children:[(0,i.jsxs)("h2",{className:"text-2xl font-bold mb-4",children:["Question ",e+1]}),(0,i.jsx)("p",{className:"text-gray-700 text-xl mb-4",children:n[e].question}),(0,i.jsx)("div",{className:"text-center mb-4",children:(0,i.jsxs)("p",{className:"text-lg font-bold text-blue-500",children:["Time remaining: ",h]})}),(0,i.jsxs)("div",{className:"flex justify-between space-x-4",children:[(0,i.jsx)("button",{onClick:()=>q("agree"),disabled:c,className:"bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none",children:"Agree"}),(0,i.jsx)("button",{onClick:()=>q("disagree"),disabled:c,className:"bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none",children:"Disagree"})]}),c&&(0,i.jsx)("div",{className:"mt-4",children:(0,i.jsx)("button",{onClick:S,className:"mt-4 bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none",children:g?"Finish":"Next Question"})})]})}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=8009)}),_N_E=e.O()}]);