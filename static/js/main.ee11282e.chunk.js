(this["webpackJsonpwhisper-client"]=this["webpackJsonpwhisper-client"]||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(50),a=n.n(r),o=(n(57),n(2)),i=(n(20),n(18)),l=n(0);function u(e){var t=e.menuOptions,n=e.setShowMenu,c=Object(s.useRef)();Object(s.useEffect)((function(){return document.addEventListener("click",r),function(){return document.removeEventListener("click",r)}}),[]);var r=function(e){c.current&&c.current.contains(e.target)||n(!1)};return Object(l.jsx)("div",{style:{position:"relative"},children:Object(l.jsx)("div",{ref:c,className:"menu-div",children:t.map((function(e,t){return Object(l.jsx)("div",{onClick:e.onClick,children:e.title},t)}))})})}function j(e){var t=e.setToken,n=e.currentUser,c=[{title:"Logout",onClick:function(){t(null)}}],r=Object(s.useState)(!1),a=Object(o.a)(r,2),i=a[0],j=a[1];return Object(l.jsxs)("div",{className:"header-options",children:[Object(l.jsxs)("div",{className:"userHeader",children:[Object(l.jsx)("span",{className:"userIcon",children:n.username[0]}),Object(l.jsx)("span",{children:n.username})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{style:i?{background:"rgba(0,0,0,.1)"}:{},onClick:function(){return j(!i)},className:"option-svg",children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:Object(l.jsx)("path",{fill:"currentColor",d:"M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"})})}),i?Object(l.jsx)(u,{setShowMenu:j,menuOptions:c}):null]})]})}function d(e){var t=e.suggestedUsers,n=e.setSelectedUser,s=e.selectedUser;return Object(l.jsxs)("div",{className:"contactList",children:[Object(l.jsx)("div",{className:"suggestedText",children:"Suggested Users"}),t.map((function(e){return Object(l.jsxs)("li",{style:{backgroundColor:e._id===s._id?"#eee":""},onClick:function(){return n(e)},className:"eachContact",children:[" ",Object(l.jsx)("span",{className:"userIcon",style:{background:"#6865c9"},children:e.username[0]}),Object(l.jsx)("div",{className:"each-contact",children:Object(l.jsx)("span",{children:e.username})})]},e._id)}))]})}var h=n(9),b=n.n(h);function O(e){var t=e.setToken,n=e.ENDPOINT,c=e.currentUser,r=e.setSelectedUser,a=e.selectedUser,i=e.token,u=Object(s.useState)([]),h=Object(o.a)(u,2),O=h[0],f=h[1];return Object(s.useEffect)((function(){b.a.get("".concat(n,"/user/getUsers"),{headers:{"x-auth-token":i}}).then((function(e){200===e.status&&f(Array.isArray(e.data)?e.data:[])}))}),[n]),Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)(j,{currentUser:c,setToken:t}),Object(l.jsx)(d,{selectedUser:a,setSelectedUser:r,suggestedUsers:O.filter((function(e){return e._id!=c._id}))})]})}var f=n(11),m=n(24),g=n.n(m);function x(e){e.showEmoji;var t=e.setChosenEmoji,n=e.setShowEmoji,c=Object(s.useRef)();Object(s.useEffect)((function(){return document.addEventListener("click",r),function(){return document.removeEventListener("click",r)}}),[]);var r=function(e){c.current&&c.current.contains(e.target)||n(!1)};return Object(l.jsx)("div",{ref:c,children:Object(l.jsx)(g.a,{onEmojiClick:function(e,n){t(n)},skinTone:m.SKIN_TONE_NEUTRAL,pickerStyle:{position:"absolute",bottom:"10px",right:"10px",maxWidth:"90%"},disableAutoFocus:!0,disableSkinTonePicker:!0})})}function p(e){var t=e.chatList,n=e.selectedUser,c=(e.setChatList,e.showEmoji),r=e.setShowEmoji,a=e.setChosenEmoji,i=Object(s.useState)(!1),u=Object(o.a)(i,2),j=u[0],d=u[1],h=Object(s.useRef)(),b=Object(s.useRef)();return Object(l.jsxs)("div",{style:Object(f.a)({},v.chatGroup),children:[Object(l.jsxs)("div",{ref:h,onScroll:function(){return h.current?d(h.current.scrollTop+h.current.offsetHeight>=h.current.scrollHeight):null},className:"chatContainer",children:[t.map((function(e,t){return Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:e.message},className:"eachChat",style:e.from!==n._id?{marginLeft:"auto",borderRadius:"10px 10px 0"}:{}},t)})),Object(l.jsx)("div",{ref:b,className:"scroll-into-view"})]}),Object(l.jsx)("div",{onClick:function(){return b.current.scrollIntoView({behavior:"smooth"})},style:{transform:j?"scale(0.0004)":"rotate(90deg)"},className:"scrollDiv"}),c?Object(l.jsx)(x,{setChosenEmoji:a,showEmoji:c,setShowEmoji:r}):null]})}var v={chatGroup:{display:"flex",flex:1,alignItems:"flex-end",overflow:"auto",position:"relative"}};function k(e){var t=e.selectedUser;return Object(l.jsx)("div",{className:"conversation-header",children:Object(l.jsxs)("div",{style:N.headerName,children:[Object(l.jsx)("span",{className:"userIcon",children:t.username[0]}),Object(l.jsx)("span",{children:t.username})]})})}var N={headerName:{display:"flex",height:"100%",alignItems:"center"}},E=n(51);function S(e){var t=e.socket,n=e.setChatList,c=(e.chatList,e.currentUser),r=e.selectedUser,a=e.showEmoji,u=e.setShowEmoji,j=e.chosenEmoji,d=Object(s.useRef)(),h=Object(s.useState)(!0),b=Object(o.a)(h,2),O=b[0],m=b[1],g=Object(s.useState)(null),x=Object(o.a)(g,2),p=x[0],v=x[1];Object(s.useEffect)((function(){null!=j&&(Object(E.a)(d.current,j.emoji),m(!1))}),[j]);return Object(l.jsxs)("div",{style:Object(f.a)({},w.inputArea),children:[O?Object(l.jsx)("div",{style:Object(f.a)({},w.placeholder),children:"Enter a message"}):null,Object(l.jsx)("div",{ref:d,style:Object(f.a)({},w.inputBox),onKeyUp:function(e){if("Enter"===e.key&&!e.shiftKey){if(!d.current.textContent)return;var s={message:d.current.innerHTML,from:c._id,to:r._id,timestamp:Date.now()};t.emit("sendMessage",s),n((function(e){return[].concat(Object(i.a)(e),[s])})),d.current.innerHTML="",u(!1)}m(""===d.current.textContent||!d.current.textContent)},onKeyPress:function(e){"Enter"!==e.key||e.shiftKey||e.preventDefault()},contentEditable:!0,onBlur:function(e){return v(function(){if(window.getSelection){var e=window.getSelection();if(e.getRangeAt&&e.rangeCount)return e.getRangeAt(0)}else if(document.selection&&document.selection.createRange)return document.selection.createRange();return null}())}}),Object(l.jsx)("div",{onClick:function(){d.current.focus(),function(e){if(e)if(window.getSelection){var t=window.getSelection();t.removeAllRanges(),t.addRange(e)}else document.selection&&e.select&&e.select()}(p),u(!a)},className:"emojiDiv"})]})}var w={inputArea:{display:"flex",alignItems:"center",background:"#ddd"},inputBox:{background:"#fff",minHeight:"40px",flex:1,margin:"10px 3px",outline:"none",padding:"7px 20px",alignItems:"center",borderRadius:"30px",fontSize:"20px",fontWeight:"300",maxHeight:"30vh",overflowY:"auto"},placeholder:{position:"absolute",fontWeight:"300",color:"#888",margin:"0 23px",pointerEvents:"none"}};function U(e){var t=e.selectedUser,n=e.socket,c=e.setChatList,r=e.chatList,a=e.currentUser,i=Object(s.useState)(null),u=Object(o.a)(i,2),j=u[0],d=u[1],h=Object(s.useState)(!1),b=Object(o.a)(h,2),O=b[0],f=b[1];return Object(l.jsxs)("div",{className:"conversation",children:[Object(l.jsx)(k,{selectedUser:t}),Object(l.jsx)(p,{chatList:r,selectedUser:t,setChatList:c,showEmoji:O,setShowEmoji:f,setChosenEmoji:d}),Object(l.jsx)(S,{selectedUser:t,currentUser:a,chatList:r,setChatList:c,socket:n,setShowEmoji:f,showEmoji:O,chosenEmoji:j})]})}function y(e){var t=e.selectedUser,n=e.socket,s=e.setChatList,c=e.chatList,r=e.currentUser;return Object(l.jsx)("div",{className:"dashboard",children:!1!==t?Object(l.jsx)(U,{currentUser:r,chatList:c,setChatList:s,socket:n,selectedUser:t}):Object(l.jsx)("p",{className:"helper-text",children:"Select a contact from left to start a conversation"})})}function C(e){var t=e.setToken,n=e.ENDPOINT,c=e.currentUser,r=e.socket,a=e.token,u=Object(s.useState)([]),j=Object(o.a)(u,2),d=j[0],h=j[1],f=Object(s.useState)(!1),m=Object(o.a)(f,2),g=m[0],x=m[1],p=Object(s.useRef)(g);return Object(s.useEffect)((function(){r.on("notifyUser",(function(e){console.log(e)})),r.on("getMessage",(function(e){p.current&&e.from==p.current._id?h((function(t){return[].concat(Object(i.a)(t),[e])})):console.log("data from:",e.from)}))}),[]),Object(s.useEffect)((function(){!1!==g&&(r.emit("selectUser",{userId:g._id,username:g.username,selector:c}),b.a.post("".concat(n,"/message/getMessages"),{selectedUser:g._id},{headers:{"x-auth-token":a}}).then((function(e){console.log(e.data),Array.isArray(e.data)&&h(e.data)})))}),[g]),Object(s.useEffect)((function(){!1!==g&&d.length>0&&document.querySelector(".scroll-into-view").scrollIntoView()}),[d,g]),Object(l.jsxs)("div",{className:"mainContainer",children:[Object(l.jsx)(O,{setSelectedUser:function(e){p.current=e,x(e)},currentUser:c,ENDPOINT:n,setToken:t,selectedUser:g,token:a}),Object(l.jsx)(y,{currentUser:c,chatList:d,setChatList:h,socket:r,selectedUser:g})]})}function L(e){var t=e.type,n=e.setType,c=e.setToken,r=e.ENDPOINT,a=Object(s.useState)(""),i=Object(o.a)(a,2),u=i[0],j=i[1],d=Object(s.useState)(""),h=Object(o.a)(d,2),O=h[0],f=h[1],m=Object(s.useState)(""),g=Object(o.a)(m,2),x=g[0],p=g[1],v=Object(s.useState)(""),k=Object(o.a)(v,2),N=k[0],E=k[1],S=Object(s.useState)(""),w=Object(o.a)(S,2),U=w[0],y=w[1],C=/^[a-zA-Z_]{1}[a-zA-Z0-9_]{0,14}$/,L=function(e){E(""),f(""),p(""),j(""),n(e)};return Object(l.jsxs)("div",{className:"login",children:[Object(l.jsx)("div",{className:"login-header",children:"login"===t?"Login":"Signup"}),Object(l.jsx)("span",{className:"label",children:"User name:"}),Object(l.jsx)("input",{name:"username",value:u,placeholder:"Enter a username",onChange:function(e){return j(e.target.value)},type:"username",maxLength:"15"}),Object(l.jsx)("div",{className:"error",children:Object(l.jsx)("span",{children:x})}),Object(l.jsx)("span",{className:"label",children:"Password:"}),Object(l.jsx)("input",{name:"password",value:O,onChange:function(e){return f(e.target.value)},placeholder:"Enter password",type:"password"}),Object(l.jsx)("div",{className:"error",children:Object(l.jsx)("span",{children:N})}),Object(l.jsx)("div",{onClick:function(){var e=!1;if(y(""),u.length>0&&C.test(u)?p(""):(p("A username can only contain letters, numbers and underscore (_). First character must be a letter."),e=!0),O.length>=6?E(""):(E("Password must be at least 6 characters"),e=!0),e)return 0;console.log("".concat(u," and ").concat(O," are valid"));var n={username:u,password:O};"login"===t?b.a.post("".concat(r,"/user/login"),n).then((function(e){200===e.status&&c(e.data.token)})).catch((function(e){e.response.data&&(0===e.response.data.status?p("User does not exist."):2===e.response.data.status&&y("Invalid credentials"))})):b.a.post("".concat(r,"/user/register"),n).then((function(e){201===e.status&&c(e.data.token)})).catch((function(e){p(e.response.data.msg)}))},className:"button",children:"Submit"}),Object(l.jsx)("div",{className:"error",children:Object(l.jsx)("span",{children:U})}),"login"===t?Object(l.jsxs)("p",{children:["Don't have an account?"," ",Object(l.jsx)("span",{className:"change-type",onClick:function(){return L("signup")},children:"Signup"})]}):Object(l.jsxs)("p",{children:["Already have an account?"," ",Object(l.jsx)("span",{className:"change-type",onClick:function(){return L("login")},children:"Login"})]})]})}var T=function(e){var t=e.socket,n=e.ENDPOINT,c=Object(s.useState)("login"),r=Object(o.a)(c,2),a=r[0],i=r[1],u=Object(s.useState)(localStorage.getItem("whisper-token")),j=Object(o.a)(u,2),d=j[0],h=j[1],O=Object(s.useState)({}),f=Object(o.a)(O,2),m=f[0],g=f[1];return Object(s.useEffect)((function(){null!=d?(localStorage.setItem("whisper-token",d),b.a.get("".concat(n,"/user/getCurrentUser"),{headers:{"x-auth-token":d}}).then((function(e){console.log(e.data),g(e.data.user)})).catch((function(e){h(null)}))):(localStorage.removeItem("whisper-token"),i("login"))}),[d,n]),Object(s.useEffect)((function(){m.username&&(i("dashboard"),t.emit("login",m))}),[m,t]),Object(l.jsx)("div",{className:"top-container",children:"dashboard"===a?Object(l.jsx)(C,{currentUser:m,ENDPOINT:n,setToken:h,socket:t,token:d}):Object(l.jsx)(L,{ENDPOINT:n,setToken:h,type:a,setType:i})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,106)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))},A=n(52),_="http://localhost:8081",R=Object(A.io)(_);a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(T,{socket:R,ENDPOINT:_})}),document.getElementById("root")),I()},20:function(e,t,n){},57:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.ee11282e.chunk.js.map