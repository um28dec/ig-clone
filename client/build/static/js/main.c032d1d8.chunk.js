(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),o=n(21),s=n.n(o),r=(n(29),n(2)),l=n(3),d=n(4),j=function(){var e=Object(i.useContext)(S),t=e.state,n=e.dispatch,a=Object(l.f)();return Object(c.jsx)("nav",{children:Object(c.jsxs)("div",{className:"nav-wrapper white",children:[Object(c.jsx)(d.b,{to:t?"/":"/signin",className:"brand-logo left",children:"Instagram"}),Object(c.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:t?[Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:"/profile",children:"Profile"})}),Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:"/create",children:"Create Post"})}),Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:"/myfollowingpost",children:"Following Posts"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"btn #c62828 red darken-3",onClick:function(){localStorage.clear(),n({type:"CLEAR"}),a.push("/signin")},children:"Logout"})})]:[Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:"/signin",children:"Signin"})}),Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:"/signup",children:"Signup"})})]})]})})},u=(n(34),function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(i.useContext)(S),s=o.state;o.dispatch;Object(i.useEffect)((function(){fetch("/allposts",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){a(e.posts)}))}),[]);return Object(c.jsx)("div",{className:"home",children:n.map((function(e){return Object(c.jsxs)("div",{className:"card home-card",children:[Object(c.jsxs)("h5",{style:{padding:"5px"},children:[Object(c.jsx)(d.b,{to:e.postedBy._id!==s._id?"/profile/"+e.postedBy._id:"/profile",children:e.postedBy.name}),e.postedBy._id==s._id&&Object(c.jsx)("i",{className:"material-icons",style:{float:"right"},onClick:function(){var t;t=e._id,fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.filter((function(t){return t._id!==e._id}));a(t)}))},children:"delete"})]}),Object(c.jsx)("div",{className:"card-image",children:Object(c.jsx)("img",{src:e.photo})}),Object(c.jsxs)("div",{className:"card-content",children:[Object(c.jsx)("i",{className:"material-icons",style:{color:"red"},children:"favorite"}),e.likes.includes(s._id)?Object(c.jsx)("i",{className:"material-icons",onClick:function(){return t=e._id,void fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));a(t)})).catch((function(e){console.log(e)}));var t},children:"thumb_down"}):Object(c.jsx)("i",{className:"material-icons",onClick:function(){return t=e._id,void fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));a(t)})).catch((function(e){console.log(e)}));var t},children:"thumb_up"}),Object(c.jsxs)("h6",{children:[e.likes.length," likes"]}),Object(c.jsx)("h6",{children:e.title}),Object(c.jsx)("p",{children:e.body}),e.comments.map((function(e){return Object(c.jsxs)("h6",{children:[Object(c.jsx)("span",{style:{fontWeight:"500"},children:e.postedBy.name})," ",e.text]},e._id)})),Object(c.jsx)("form",{onSubmit:function(t){var c,i;t.preventDefault(),c=t.target[0].value,i=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:i,text:c})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));a(t)})).catch((function(e){console.log(e)}))},children:Object(c.jsx)("input",{type:"text",placeholder:"add a comment"})})]})]},e._id)}))})}),h=n(10),p=n.n(h),b=function(){var e=Object(i.useContext)(S),t=(e.state,e.dispatch),n=Object(l.f)(),a=Object(i.useState)(""),o=Object(r.a)(a,2),s=o[0],j=o[1],u=Object(i.useState)(""),h=Object(r.a)(u,2),b=h[0],f=h[1];return Object(c.jsx)("div",{className:"mycard",children:Object(c.jsxs)("div",{className:"card auth-card input-field",children:[Object(c.jsx)("h2",{children:"Instagram"}),Object(c.jsx)("input",{type:"text",placeholder:"email",value:b,onChange:function(e){return f(e.target.value)}}),Object(c.jsx)("input",{type:"password",placeholder:"password",value:s,onChange:function(e){return j(e.target.value)}}),Object(c.jsx)("button",{className:"btn waves-effect #64b5f6 blue darken-1",onClick:function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(b)?fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:s,email:b})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?p.a.toast({html:e.error,classes:"#c62828 red darken-3"}):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"USER",payload:e.user}),p.a.toast({html:"Signed in!",classes:"#43a047 green darken-1"}),n.push("/"))})).catch((function(e){console.log(e)})):p.a.toast({html:"Invalid Email",classes:"#c62828 red darken-3"})},children:"Login"}),Object(c.jsx)("h5",{children:Object(c.jsx)(d.b,{to:"/signup",children:"Don't have an account?"})})]})})},f=n(6),O=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(i.useContext)(S),s=o.state,l=o.dispatch,d=Object(i.useState)(""),j=Object(r.a)(d,2),u=j[0],h=j[1];Object(i.useEffect)((function(){fetch("/mypost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e.mypost)}))}),[]),Object(i.useEffect)((function(){if(u){var e=new FormData;e.append("file",u),e.append("upload_preset","insta-clone"),e.append("cloud_name","dimgxximg"),fetch("https://api.cloudinary.com/v1_1/dimgxximg/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){fetch("/updatepic",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({pic:e.url})}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("user",JSON.stringify(Object(f.a)(Object(f.a)({},s),{},{pic:e.pic}))),l({type:"UPDATEPIC",payload:e.pic})}))})).catch((function(e){console.log(e)}))}}),[u]);return Object(c.jsxs)("div",{style:{maxWidth:"550px",margin:"0px auto"},children:[Object(c.jsxs)("div",{style:{margin:"18px 0px",borderBottom:"1px solid grey"},children:[Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:s?s.pic:"loading"})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:s?s.name:"loading"}),Object(c.jsx)("h5",{children:s?s.email:"loading"}),Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"},children:[Object(c.jsxs)("h6",{children:[n.length," posts"]}),Object(c.jsxs)("h6",{children:[s?s.followers.length:"0"," followers"]}),Object(c.jsxs)("h6",{children:[s?s.following.length:"0"," following"]})]})]})]}),Object(c.jsxs)("div",{className:"file-field input-field",style:{margin:"10px"},children:[Object(c.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(c.jsx)("span",{children:"Update pic"}),Object(c.jsx)("input",{type:"file",onChange:function(e){return t=e.target.files[0],void h(t);var t}})]}),Object(c.jsx)("div",{className:"file-path-wrapper",children:Object(c.jsx)("input",{className:"file-path validate",type:"text"})})]})]}),Object(c.jsx)("div",{className:"gallery",children:n.map((function(e){return Object(c.jsx)("img",{className:"item",src:e.photo,alt:e.title},e._id)}))})]})},m=function(){var e=Object(l.f)(),t=Object(i.useState)(""),n=Object(r.a)(t,2),a=n[0],o=n[1],s=Object(i.useState)(""),j=Object(r.a)(s,2),u=j[0],h=j[1],b=Object(i.useState)(""),f=Object(r.a)(b,2),O=f[0],m=f[1],x=Object(i.useState)(""),g=Object(r.a)(x,2),y=g[0],v=g[1],w=Object(i.useState)(void 0),S=Object(r.a)(w,2),N=S[0],_=S[1];Object(i.useEffect)((function(){N&&C()}),[N]);var C=function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(O)?fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,password:u,email:O,pic:N})}).then((function(e){return e.json()})).then((function(t){t.error?p.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(p.a.toast({html:t.message,classes:"#43a047 green darken-1"}),e.push("/signin"))})).catch((function(e){console.log(e)})):p.a.toast({html:"Invalid Email",classes:"#c62828 red darken-3"})},k=function(){y?function(){var e=new FormData;e.append("file",y),e.append("upload_preset","insta-clone"),e.append("cloud_name","dimgxximg"),fetch("https://api.cloudinary.com/v1_1/dimgxximg/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){_(e.url)})).catch((function(e){console.log(e)}))}():C()};return Object(c.jsx)("div",{className:"mycard",children:Object(c.jsxs)("div",{className:"card auth-card input-field",children:[Object(c.jsx)("h2",{children:"Instagram"}),Object(c.jsx)("input",{type:"text",placeholder:"name",value:a,onChange:function(e){return o(e.target.value)}}),Object(c.jsx)("input",{type:"text",placeholder:"email",value:O,onChange:function(e){return m(e.target.value)}}),Object(c.jsx)("input",{type:"password",placeholder:"password",value:u,onChange:function(e){return h(e.target.value)}}),Object(c.jsxs)("div",{className:"file-field input-field",children:[Object(c.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(c.jsx)("span",{children:"Upload Profile Pic"}),Object(c.jsx)("input",{type:"file",onChange:function(e){return v(e.target.files[0])}})]}),Object(c.jsx)("div",{className:"file-path-wrapper",children:Object(c.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(c.jsx)("button",{className:"btn waves-effect #64b5f6 blue darken-1",onClick:function(){return k()},children:"SignUp"}),Object(c.jsx)("h5",{children:Object(c.jsx)(d.b,{to:"/signin",children:"Already have an account?"})})]})})},x=function(){var e=Object(l.f)(),t=Object(i.useState)(""),n=Object(r.a)(t,2),a=n[0],o=n[1],s=Object(i.useState)(""),d=Object(r.a)(s,2),j=d[0],u=d[1],h=Object(i.useState)(""),b=Object(r.a)(h,2),f=b[0],O=b[1],m=Object(i.useState)(""),x=Object(r.a)(m,2),g=x[0],y=x[1];Object(i.useEffect)((function(){g&&fetch("/createpost",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({title:a,body:j,pic:g})}).then((function(e){return e.json()})).then((function(t){t.error?p.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(p.a.toast({html:"Created post successfully!",classes:"#43a047 green darken-1"}),e.push("/"))})).catch((function(e){console.log(e)}))}),[g]);return Object(c.jsxs)("div",{className:"card input-field",style:{margin:"30px auto",maxWidth:"500px",padding:"20px",textAlign:"center"},children:[Object(c.jsx)("input",{type:"text",placeholder:"title",value:a,onChange:function(e){return o(e.target.value)}}),Object(c.jsx)("input",{type:"text",placeholder:"body",value:j,onChange:function(e){return u(e.target.value)}}),Object(c.jsxs)("div",{className:"file-field input-field",children:[Object(c.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(c.jsx)("span",{children:"Upload Image"}),Object(c.jsx)("input",{type:"file",onChange:function(e){return O(e.target.files[0])}})]}),Object(c.jsx)("div",{className:"file-path-wrapper",children:Object(c.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(c.jsx)("button",{className:"btn waves-effect #64b5f6 blue darken-1",onClick:function(){return function(){var e=new FormData;e.append("file",f),e.append("upload_preset","insta-clone"),e.append("cloud_name","dimgxximg"),fetch("https://api.cloudinary.com/v1_1/dimgxximg/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){y(e.url)})).catch((function(e){console.log(e)}))}()},children:"Submit Post"})]})},g=n(23),y=function(){var e=Object(i.useState)(null),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(i.useContext)(S),s=o.state,d=o.dispatch,j=Object(l.g)().userid,u=Object(i.useState)(!s||!s.following.includes(j)),h=Object(r.a)(u,2),p=h[0],b=h[1];Object(i.useEffect)((function(){fetch("/user/".concat(j),{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){a(e)}))}),[]);return Object(c.jsx)(c.Fragment,{children:n?Object(c.jsxs)("div",{style:{maxWidth:"550px",margin:"0px auto"},children:[Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"},children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:n.user.pic})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:n.user.name}),Object(c.jsx)("h5",{children:n.user.email}),Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"},children:[Object(c.jsxs)("h6",{children:[n.posts.length," posts"]}),Object(c.jsxs)("h6",{children:[n.user.followers.length," followers"]}),Object(c.jsxs)("h6",{children:[n.user.following.length," following"]})]}),p?Object(c.jsx)("button",{style:{margin:"10px"},className:"btn waves-effect #64b5f6 blue darken-1",onClick:function(){fetch("/follow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({followId:j})}).then((function(e){return e.json()})).then((function(e){d({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),a((function(t){return Object(f.a)(Object(f.a)({},t),{},{user:Object(f.a)(Object(f.a)({},t.user),{},{followers:[].concat(Object(g.a)(t.user.followers),[e._id])})})})),b(!1)}))},children:"Follow"}):Object(c.jsx)("button",{style:{margin:"10px"},className:"btn waves-effect #64b5f6 blue darken-1",onClick:function(){fetch("/unfollow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({unfollowid:j})}).then((function(e){return e.json()})).then((function(e){d({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),a((function(t){var n=t.user.followers.filter((function(t){return t!=e._id}));return Object(f.a)(Object(f.a)({},t),{},{user:Object(f.a)(Object(f.a)({},t.user),{},{followers:n})})})),b(!0)}))},children:"Unfollow"})]})]}),Object(c.jsx)("div",{className:"gallery",children:n.posts.map((function(e){return Object(c.jsx)("img",{className:"item",src:e.photo,alt:e.title},e._id)}))})]}):Object(c.jsx)("h2",{children:"Loading"})})},v=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(i.useContext)(S),s=o.state;o.dispatch;Object(i.useEffect)((function(){fetch("/getsubpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){a(e.posts)}))}),[]);return Object(c.jsx)("div",{className:"home",children:n.map((function(e){return Object(c.jsxs)("div",{className:"card home-card",children:[Object(c.jsxs)("h5",{style:{padding:"5px"},children:[Object(c.jsx)(d.b,{to:e.postedBy._id!==s._id?"/profile/"+e.postedBy._id:"/profile",children:e.postedBy.name}),e.postedBy._id==s._id&&Object(c.jsx)("i",{className:"material-icons",style:{float:"right"},onClick:function(){var t;t=e._id,fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.filter((function(t){return t._id!==e._id}));a(t)}))},children:"delete"})]}),Object(c.jsx)("div",{className:"card-image",children:Object(c.jsx)("img",{src:e.photo})}),Object(c.jsxs)("div",{className:"card-content",children:[Object(c.jsx)("i",{className:"material-icons",style:{color:"red"},children:"favorite"}),e.likes.includes(s._id)?Object(c.jsx)("i",{className:"material-icons",onClick:function(){return t=e._id,void fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));a(t)})).catch((function(e){console.log(e)}));var t},children:"thumb_down"}):Object(c.jsx)("i",{className:"material-icons",onClick:function(){return t=e._id,void fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));a(t)})).catch((function(e){console.log(e)}));var t},children:"thumb_up"}),Object(c.jsxs)("h6",{children:[e.likes.length," likes"]}),Object(c.jsx)("h6",{children:e.title}),Object(c.jsx)("p",{children:e.body}),e.comments.map((function(e){return Object(c.jsxs)("h6",{children:[Object(c.jsx)("span",{style:{fontWeight:"500"},children:e.postedBy.name})," ",e.text]},e._id)})),Object(c.jsx)("form",{onSubmit:function(t){var c,i;t.preventDefault(),c=t.target[0].value,i=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:i,text:c})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));a(t)})).catch((function(e){console.log(e)}))},children:Object(c.jsx)("input",{type:"text",placeholder:"add a comment"})})]})]},e._id)}))})},w=function(e,t){return"USER"==t.type?t.payload:"CLEAR"==t.type?null:"UPDATE"==t.type?Object(f.a)(Object(f.a)({},e),{},{followers:t.payload.followers,following:t.payload.following}):"UPDATEPIC"==t.type?Object(f.a)(Object(f.a)({},e),{},{pic:t.payload}):e},S=Object(i.createContext)(),N=function(){var e=Object(l.f)(),t=Object(i.useContext)(S),n=(t.state,t.dispatch);return Object(i.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));t?n({type:"USER",payload:t}):e.push("/signin")}),[]),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",children:Object(c.jsx)(u,{})}),Object(c.jsx)(l.a,{path:"/signin",children:Object(c.jsx)(b,{})}),Object(c.jsx)(l.a,{path:"/signup",children:Object(c.jsx)(m,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/profile",children:Object(c.jsx)(O,{})}),Object(c.jsx)(l.a,{path:"/create",children:Object(c.jsx)(x,{})}),Object(c.jsx)(l.a,{path:"/profile/:userid",children:Object(c.jsx)(y,{})}),Object(c.jsx)(l.a,{path:"/myfollowingpost",children:Object(c.jsx)(v,{})})]})};var _=function(){var e=Object(i.useReducer)(w,null),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(c.jsx)(S.Provider,{value:{state:n,dispatch:a},children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(j,{}),Object(c.jsx)(N,{})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(_,{})}),document.getElementById("root")),C()}},[[35,1,2]]]);
//# sourceMappingURL=main.c032d1d8.chunk.js.map