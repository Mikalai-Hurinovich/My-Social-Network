(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){e.exports={news:"News_news__e4v3X"}},102:function(e,t,n){e.exports={settings:"Settings_settings__3kVw7"}},103:function(e,t,n){e.exports={music:"Music_music__1aeWg"}},104:function(e,t,n){e.exports={main:"Photos_main__1u_h6",wrapper__photos:"Photos_wrapper__photos__2XkMD"}},107:function(e,t,n){e.exports={description:"ProfileInfo_description__3SY5m",img:"ProfileInfo_img__1PqHU"}},13:function(e,t,n){e.exports={nav:"Navbar_nav__2BuCb",item:"Navbar_item__25gvY",active:"Navbar_active__3Kl5k"}},145:function(e,t,n){e.exports={wrapper_images:"Friends_wrapper_images__1J8MY"}},150:function(e,t,n){e.exports=n.p+"static/media/anonymous.591d2cd5.jpg"},151:function(e,t,n){e.exports=n.p+"static/media/preloader.962f67ed.svg"},179:function(e,t,n){e.exports=n(322)},181:function(e,t,n){},20:function(e,t,n){e.exports={wrapper:"Styles_wrapper__2NzrK",main:"Styles_main__11i1m",user:"Styles_user__15NWa",userInfo:"Styles_userInfo__1hk9O",userLocation:"Styles_userLocation__2u0aN",userPhoto:"Styles_userPhoto__1gbUp",selectedPage:"Styles_selectedPage__3sXBX",page:"Styles_page__Qz6q1"}},264:function(e,t,n){},322:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(181),n(8)),s=n(12),c=n(141),i=n.n(c).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c43d539a-903b-4914-a22c-0ece781ccd2a"}}),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return i.get("users?page=".concat(e,"&count=").concat(t),{}).then(function(e){return e.data})},u=function(e){return i.delete("follow/".concat(e),{}).then(function(e){return e.data})},m=function(e){return i.post("follow/".concat(e),{},{}).then(function(e){return e.data})},f=function(e){return console.warn("Obsolete method.Please, use profileAPI object"),p.profileLink(e)},p={profileLink:function(e){return i.get("profile/".concat(e)).then(function(e){return e.data})},getStatus:function(e){return i.get("profile/status/".concat(e)).then(function(e){return e.data})},updateStatus:function(e){return i.put("profile/status",{status:e}).then(function(e){return e.data})}},d=function(){return i.get("auth/me").then(function(e){return e.data})},g=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return i.post("auth/login",{email:e,password:t,rememberMe:n}).then(function(e){return e.data})},h=function(){return i.delete("auth/login").then(function(e){return e.data})},E={posts:[{id:1,message:"Hi, How are you?",count:10},{id:2,message:"Good luck, in React)",count:100}],profile:null,status:""},v=function(e){return{type:"SET-USER-PROFILE",profile:e}},_=function(e){return{type:"SET-STATUS",status:e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=JSON.parse(JSON.stringify(e));switch(t.type){case"ADD-POST":var a={id:3,message:t.newPostText,count:0};return n.posts.push(a),n.newPostText="",n;case"SET-USER-PROFILE":return Object(s.a)({},e,{profile:t.profile});case"SET-STATUS":return Object(s.a)({},e,{status:t.status});case"DELETE_POST":return Object(s.a)({},e,{posts:e.posts.filter(function(e){return e.id!==t.postId})});default:return n}},O=n(76),S={dialogs:[{id:1,name:"\u041c\u0438\u043a\u043e\u043b\u0430"},{id:2,name:"\u0414\u0438\u043c\u0430"},{id:3,name:"\u041c\u0430\u043b\u044b\u0445\u0430"},{id:4,name:"\u0410\u0440\u0447\u0438\u0431\u0430\u043b\u044c\u0434"},{id:5,name:"\u0412\u0438\u0442\u044f"},{id:6,name:"\u0410\u0440\u0442\u0443\u0440"}],messages:[{id:1,message:"Frontend?"},{id:2,message:"Let's go to Baikal!!!!"},{id:3,message:"Stop sitting at the computer, I want to go on vacation !!1"},{id:4,message:"Good Morning!"},{id:5,message:"Chao!"},{id:6,message:"Aufwiedersehen!"}]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(s.a)({},e,{messages:[].concat(Object(O.a)(e.messages),[{id:6,message:n}])});default:return e}},P={friends:[{id:1,name:"\u041c\u0438\u043a\u043e\u043b\u0430",img:"https://html5css.ru/w3images/avatar2.png"},{id:2,name:"\u0414\u0438\u043c\u0430",img:"https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"},{id:3,name:"\u041c\u0430\u043b\u044b\u0445\u0430",img:"https://html5css.ru/howto/img_avatar2.png"}]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;arguments.length>1&&arguments[1];return e},j={users:[],pageSize:6,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},N=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},C=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},I=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(s.a)({},e,{users:e.users.map(function(e){return e.id===t.userID?Object(s.a)({},e,{followed:!0}):e})});case"UNFOLLOW":return Object(s.a)({},e,{users:e.users.map(function(e){return e.id===t.userID?Object(s.a)({},e,{followed:!1}):e})});case"SET-USERS":return Object(s.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(s.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(s.a)({},e,{totalUsersCount:t.totalCount});case"TOGGLE_IS_FETCHING":return Object(s.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(s.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(O.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!==t.userId})});default:return e}},A=n(46),U={id:null,email:null,login:null,isAuth:!1,loading:!0},R=function(e,t,n,a){return{type:"SET_USER_DATA",data:{id:e,login:n,email:t,isAuth:a}}},k=function(e){return{type:"SET_AUTH_LOADING",data:e}},F=function(){return function(e){d().then(function(t){if(0===t.resultCode){var n=t.data,a=n.id,r=n.login,o=n.email;e(R(a,o,r,!0))}}).finally(function(){return e(k(!1))})}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(s.a)({},e,t.data);case"SET_AUTH_LOADING":return Object(s.a)({},e,{loading:t.data});default:return e}},D=n(142),L=n(77),M=Object(o.c)({profilePage:b,dialogsPage:y,sideBar:w,usersPage:T,auth:x,form:L.a}),G=Object(o.e)(M,Object(o.a)(D.a)),q=G;window.store=G;var z=n(38),B=n.n(z),W=n(11),H=(n(264),n(13)),Y=n.n(H),J=n(145),Q=n.n(J);function X(e){var t=e.friends.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("img",{src:e.img,alt:"FriendImg"}),e.name)});return r.a.createElement("div",null,r.a.createElement("h2",null,"MY FRIENDS"),r.a.createElement("div",{className:Q.a.wrapper_images},t))}var K=function(e){return r.a.createElement("nav",{className:Y.a.nav},r.a.createElement("div",{className:"".concat(Y.a.item," ").concat(Y.a.active)},r.a.createElement(W.b,{to:"/Profile",activeClassName:Y.a.active},"Profile")),r.a.createElement("div",{className:"".concat(Y.a.item)},r.a.createElement(W.b,{to:"/Dialogs",activeClassName:Y.a.active},"Messages")),r.a.createElement("div",{className:Y.a.item},r.a.createElement(W.b,{to:"/Users",activeClassName:Y.a.active},"Users")),r.a.createElement("div",{className:Y.a.item},r.a.createElement(W.b,{to:"/Photos",activeClassName:Y.a.active},"Photos")),r.a.createElement("div",{className:Y.a.item},r.a.createElement(W.b,{to:"/News",activeClassName:Y.a.active},"News")),r.a.createElement("div",{className:Y.a.item},r.a.createElement(W.b,{to:"/Music",activeClassName:Y.a.active},"Music")),r.a.createElement("div",{className:Y.a.item},r.a.createElement(W.b,{to:"/Settings",activeClassName:Y.a.active},"Settings")),r.a.createElement(X,{friends:e.sidebar.friends}))},Z=n(101),V=n.n(Z),$=function(){return r.a.createElement("div",{className:V.a.content},r.a.createElement("div",{className:V.a.news},"Fresh News"))},ee=n(102),te=n.n(ee),ne=function(){return r.a.createElement("div",{className:te.a.content},r.a.createElement("div",{className:te.a.settings},"Settings"))},ae=n(103),re=n.n(ae),oe=function(){return r.a.createElement("div",{className:re.a.content},r.a.createElement("div",{className:re.a.music},"Your Music"))},se=n(104),ce=n.n(se),ie=n(335),le=function(){return r.a.createElement(ie.a,{variant:"h5",className:ce.a.main},"Photo Gallery",r.a.createElement("div",{className:ce.a.wrapper__photos},r.a.createElement("img",{src:"https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:""}),r.a.createElement("img",{src:"https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg?",alt:""}),r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqcYXgEvWlAFg4Kkqa47N4UwXIqz3ni1CZ6w&usqp=CAU",alt:""}),r.a.createElement("img",{src:"https://media.nature.com/lw800/magazine-assets/d41586-020-01390-w/d41586-020-01390-w_17974388.jpg",alt:""}),r.a.createElement("img",{src:"https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",alt:""}),r.a.createElement("img",{src:"https://lh3.googleusercontent.com/CrhU1hnoaVfR4tEhZbHM8PU7czpg6nmjNbHi3KjhC9-bTk7AD6-Qej2aPG06yClb-l1Yx8cWUol9au6jJjFMN4ITmQ=w640-h400-e365-rj-sc0x00ffffff",alt:""}),r.a.createElement("img",{src:"https://i.guim.co.uk/img/media/18c7596e2cda2b1f2b943c938b977b59028c5f86/0_500_3915_2348/master/3915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=37fbad4d1544e39800b4be4bf53078ed",alt:""}),r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREIm6wcLGw99uqZujlMET1F-N81G951HSbLg&usqp=CAU",alt:""}),r.a.createElement("img",{src:"http://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg",alt:""})))},ue=n(4),me=n(35),fe=n.n(me),pe=function(e){return r.a.createElement("div",{className:"".concat(fe.a.dialog," ").concat(fe.a.active)},r.a.createElement(W.b,{to:"/Dialogs/".concat(e.id)},e.name))},de=function(e){return r.a.createElement("div",{className:fe.a.message},e.message)},ge=n(25),he=n(26),Ee=function(e){if(!e)return"Field is required"},ve=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},_e=n(82),be=n(63),Oe=n.n(be),Se=function(e){e.input,e.child;var t=e.meta,n=(Object(_e.a)(e,["input","child","meta"]),t.touched&&t.error);return r.a.createElement("div",{className:"".concat(Oe.a.formControl," ").concat(n?Oe.a.error:"")},r.a.createElement("div",null,e.children),r.a.createElement("div",null,n&&r.a.createElement("span",null,t.error)))},ye=function(e){e.input,e.child,e.meta;var t=Object(_e.a)(e,["input","child","meta"]);return r.a.createElement(Se,e,r.a.createElement("textarea",Object.assign({},e.input,t)))},Pe=function(e){e.input,e.child,e.meta;var t=Object(_e.a)(e,["input","child","meta"]);return r.a.createElement(Se,e,r.a.createElement("input",Object.assign({},e.input,t)))},we=ve(50),je=Object(he.a)({form:"AddMessageForm"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(ge.a,{validate:[Ee,we],component:ye,name:"newMessageBody",placeholder:"Enter Your Message..."})),r.a.createElement("div",null,r.a.createElement("button",null,"Send")))}),Ne=function(e){var t=e.dialogsPage,n=t.dialogs.map(function(e){return r.a.createElement(pe,{key:e.id,name:e.name,id:e.id})}),a=t.messages.map(function(e){return r.a.createElement(de,{key:e.id,message:e.message})});return e.isAuth?r.a.createElement("div",{className:fe.a.dialogs},r.a.createElement("div",{className:fe.a.dialogsItems},n,r.a.createElement(je,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})),r.a.createElement("div",{className:fe.a.messages},r.a.createElement("div",null,a))):r.a.createElement(ue.a,{to:"/login"})},Ce=n(10),Ie=n(40),Te=n(41),Ae=n(23),Ue=n(22),Re=n(18);function ke(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(Re.a)(e);if(t){var r=Object(Re.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(Ue.a)(this,n)}}var Fe=function(e){return{isAuth:e.auth.isAuth}},xe=Object(o.d)(function(e){var t=function(t){Object(Ae.a)(a,t);var n=ke(a);function a(){return Object(Ie.a)(this,a),n.apply(this,arguments)}return Object(Te.a)(a,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(ue.a,{to:"/login"})}}]),a}(r.a.Component);return Object(Ce.b)(Fe)(t)},Object(Ce.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{sendMessage:function(t){e(function(e){return{type:"SEND-MESSAGE",newMessageBody:e}}(t))}}}))(Ne),De=n(52),Le=n.n(De);var Me=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:Le.a.mainbox},r.a.createElement("div",{className:Le.a.err},"4"),r.a.createElement("i",{className:"".concat(Le.a.far," far fa-question-circle fa-spin")}),r.a.createElement("div",{className:Le.a.err2},"4"),r.a.createElement("div",{className:Le.a.msg},"Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?",r.a.createElement("p",null,"Let's go ",r.a.createElement("a",{href:"/Profile"},"home")," and try from there."))))},Ge=n(20),qe=n.n(Ge),ze=n(150),Be=n.n(ze),We=n(337),He=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],a=1;a<=t;a++)n.push(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:qe.a.wrapper},n.map(function(t){return r.a.createElement("span",{key:t,onClick:function(){e.onPageChanged(t)},className:e.currentPage===t&&"".concat(qe.a.page," ").concat(qe.a.selectedPage)||qe.a.page},t)}),e.users.map(function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("div",{className:qe.a.main},r.a.createElement("div",{className:qe.a.user},r.a.createElement(W.b,{to:"/profile/".concat(t.id)},r.a.createElement("img",{className:qe.a.userPhoto,src:null!==t.photos.small?t.photos.small:Be.a,alt:""})),t.followed?r.a.createElement(We.a,{disabled:e.toggleFollowInProgress.some(function(e){return e===t.id}),size:"small",color:"primary",variant:"contained",onClick:function(){e.unfollow(t.id)}},"Unfollow"):r.a.createElement(We.a,{disabled:e.toggleFollowInProgress.some(function(e){return e===t.id}),size:"small",color:"primary",variant:"contained",onClick:function(){e.follow(t.id)}},"Follow")),r.a.createElement("div",{className:qe.a.userInfo},r.a.createElement("span",null,t.name),r.a.createElement("span",null,t.message)),r.a.createElement("div",{className:qe.a.userLocation},"u.location.country",", ","u.location.city")))})))},Ye=n(151),Je=n.n(Ye),Qe=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:Je.a,alt:"PreloaderImg"}))},Xe=n(152),Ke=Object(Xe.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),Ze=function(e){return e.usersPage.pageSize},Ve=function(e){return e.usersPage.totalUsersCount},$e=function(e){return e.usersPage.currentPage},et=function(e){return e.usersPage.isFetching},tt=function(e){return e.usersPage.followingInProgress};function nt(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(Re.a)(e);if(t){var r=Object(Re.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(Ue.a)(this,n)}}var at=function(e){Object(Ae.a)(n,e);var t=nt(n);function n(){var e;Object(Ie.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.requestUsers(t,e.props.pageSize)},e}return Object(Te.a)(n,[{key:"componentDidMount",value:function(){0===this.props.users.length&&this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(Qe,null):null,r.a.createElement(He,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,isFetching:this.props.isFetching,toggleFollowInProgress:this.props.toggleFollowInProgress}))}}]),n}(r.a.Component);var rt=Object(o.d)(Object(Ce.b)(function(e){return{users:Ke(e),pageSize:Ze(e),totalUsersCount:Ve(e),currentPage:$e(e),isFetching:et(e),toggleFollowInProgress:tt(e)}},{follow:function(e){return function(t){t(I(!0,e)),m(e).then(function(n){0===n.resultCode&&t({type:"FOLLOW",userID:e}),t(I(!1,e))})}},unfollow:function(e){return function(t){t(I(!0,e)),u(e).then(function(n){0===n.resultCode&&t({type:"UNFOLLOW",userID:e}),t(I(!1,e))})}},setCurrentPage:N,toggleFollowingProgress:I,requestUsers:function(e,t){return function(n){n(C(!0)),n(N(e)),l(e,t).then(function(e){n(C(!1)),n({type:"SET-USERS",users:e.items}),n({type:"SET_TOTAL_USERS_COUNT",totalCount:e.totalCount})})}}}))(at),ot=n(79),st=n.n(ot),ct=n(80),it=n.n(ct),lt=function(e){return r.a.createElement("div",{className:"".concat(it.a.item," ").concat(it.a.active)},r.a.createElement("img",{src:"https://i1.sndcdn.com/avatars-000549236160-xswcpb-t500x500.jpg",alt:"PostImg"}),e.message,r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("span",{className:it.a.like},"Like ",e.count)))},ut=r.a.memo(function(e){console.log("RENDER");var t=e.posts.map(function(e){return r.a.createElement(lt,{key:e.id,message:e.message,count:e.count})});return r.a.createElement("div",{className:st.a.postsWrapper},r.a.createElement(ie.a,{variant:"h4"},"My posts"),r.a.createElement(ft,{onSubmit:function(t){e.addPost(t.newPostText)}}),r.a.createElement("div",{className:st.a.posts},t))},function(e,t){return e.posts.length===t.posts.length}),mt=ve(10),ft=Object(he.a)({form:"addPost"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:st.a.item},r.a.createElement("div",null,r.a.createElement(ge.a,{component:ye,name:"newPostText",validate:[Ee,mt],placeholder:"Your post message..."})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",null,"Add Post")))}),pt=ut,dt=Object(Ce.b)(function(e){return{newPostText:e.profilePage.newPostText,posts:e.profilePage.posts}},function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}})(pt),gt=n(107),ht=n.n(gt),Et=n(108),vt=function(e){var t=Object(a.useState)(!1),n=Object(Et.a)(t,2),o=n[0],s=n[1],c=Object(a.useState)(e.status),i=Object(Et.a)(c,2),l=i[0],u=i[1];Object(a.useEffect)(function(){u(e.status)},[e.status]);var m=function(){s(!1),e.updateStatus(l)};return r.a.createElement(r.a.Fragment,null,o?o&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){return u(e.currentTarget.value)},autoFocus:!0,onBlur:m,onKeyPress:function(e){"Enter"===e.key&&m()},value:l})):r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){return s(!0)}},e.status||"Set your Status")))},_t=function(e){return e.profile?r.a.createElement("div",null,r.a.createElement("div",{className:ht.a.img}),r.a.createElement("div",{className:ht.a.description},r.a.createElement("img",{src:e.profile.photos.large,alt:"UserPhoto"}),r.a.createElement(vt,{status:e.status,updateStatus:e.updateStatus}))):r.a.createElement(Qe,null)},bt=function(e){return r.a.createElement("div",null,r.a.createElement(_t,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),r.a.createElement(dt,null))};function Ot(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(Re.a)(e);if(t){var r=Object(Re.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(Ue.a)(this,n)}}var St=function(e){Object(Ae.a)(n,e);var t=Ot(n);function n(){return Object(Ie.a)(this,n),t.apply(this,arguments)}return Object(Te.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return r.a.createElement(bt,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(a.Component),yt=Object(o.d)(Object(Ce.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}},{getUserProfile:function(e){return function(t){f(e).then(function(e){t(v(e))})}},getStatus:function(e){return function(t){p.getStatus(e).then(function(e){t(_(e))})}},updateStatus:function(e){return function(t){p.updateStatus(e).then(function(n){0===n.resultCode&&t(_(e))})}}}),ue.g)(St),Pt=n(81),wt=n.n(Pt),jt=function(e){return r.a.createElement("header",{className:wt.a.header},r.a.createElement("div",{className:wt.a.logo},r.a.createElement("img",{src:"https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg",alt:"logoImg"})),r.a.createElement("div",{className:wt.a.loginBlock},r.a.createElement("div",null,e.isAuth||e.login?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Log Out")):r.a.createElement(W.b,{to:"/login"},"Login")),r.a.createElement("div",null,e.isAuth||e.login?e.email:null)))};function Nt(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(Re.a)(e);if(t){var r=Object(Re.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(Ue.a)(this,n)}}var Ct=function(e){Object(Ae.a)(n,e);var t=Nt(n);function n(){return Object(Ie.a)(this,n),t.apply(this,arguments)}return Object(Te.a)(n,[{key:"render",value:function(){return r.a.createElement(jt,this.props)}}]),n}(a.Component),It=Object(Ce.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,email:e.auth.email}},{getAuthUserData:F,logout:function(e,t,n){return function(e){h().then(function(t){0===t.resultCode&&e(R(null,null,null,!1))}).finally(function(){return e(k(!1))})}}})(Ct),Tt=Object(he.a)({form:"login"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(ge.a,{validate:[Ee],placeholder:"Email",name:"email",component:Pe})),r.a.createElement("div",null,r.a.createElement(ge.a,{validate:[Ee],placeholder:"Password",type:"password",name:"password",component:Pe})),r.a.createElement("div",null,r.a.createElement(ge.a,{type:"checkbox",name:"rememberMe",component:Pe})," Remember Me"),e.error&&r.a.createElement("div",{className:Oe.a.formSummaryError},e.error),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))}),At=Object(Ce.b)(function(e){return{isAuth:e.auth.isAuth}},{login:function(e,t,n){return function(a){g(e,t,n).then(function(e){if(0===e.resultCode)a(F());else{var t=e.messages.length>0?e.messages[0]:"Some error";a(Object(A.a)("login",{_error:t}))}}).finally(function(){return a(k(!1))})}}})(function(e){return e.isAuth?r.a.createElement(ue.a,{to:"/Profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(Tt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))}),Ut=Object(o.d)(ue.g,Object(Ce.b)(null,{getAuthUserData:F}))(function(e){var t=Object(Ce.c)(function(e){return{isAuthLoading:e.auth.loading}}).isAuthLoading;return Object(a.useEffect)(function(){e.getAuthUserData()},[]),r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(It,null),r.a.createElement(K,{sidebar:q.getState().sideBar}),!t&&r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(ue.d,null,r.a.createElement(ue.b,{exact:!0,path:"/"}),r.a.createElement(ue.b,{path:"/Profile/:userId?",render:function(){return r.a.createElement(yt,null)}}),r.a.createElement(ue.b,{path:"/Dialogs",render:function(){return r.a.createElement(xe,null)}}),r.a.createElement(ue.b,{path:"/Users",render:function(){return r.a.createElement(rt,null)}}),r.a.createElement(ue.b,{path:"/Photos",component:le}),r.a.createElement(ue.b,{path:"/News",component:$}),r.a.createElement(ue.b,{path:"/Music",component:oe}),r.a.createElement(ue.b,{path:"/Settings",component:ne}),r.a.createElement(ue.b,{path:"/Login",component:At}),r.a.createElement(ue.b,{render:function(){return r.a.createElement(Me,null)}}))))});B.a.render(r.a.createElement(W.a,null,r.a.createElement(Ce.a,{store:q},r.a.createElement(Ut,null))),document.getElementById("root"))},35:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2NgRO",dialogsItems:"Dialogs_dialogsItems__ZJPwd",active:"Dialogs_active__2Ur0N",dialog:"Dialogs_dialog__2QOja",messages:"Dialogs_messages__1_W6V",message:"Dialogs_message__2nivj"}},52:function(e,t,n){e.exports={mainbox:"Error_mainbox__1mVHX",err:"Error_err__22jY5",far:"Error_far__1yg-N",err2:"Error_err2__2Zad1",msg:"Error_msg__2jdsO"}},63:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2mcER",error:"FormsControls_error__TJkLv",formSummaryError:"FormsControls_formSummaryError__t9EFQ"}},79:function(e,t,n){e.exports={postsWrapper:"MyPosts_postsWrapper__OMtkM",posts:"MyPosts_posts__1_Q7q"}},80:function(e,t,n){e.exports={item:"Post_item__YRonC",active:"Post_active__3kZNd",like:"Post_like__1BkTM"}},81:function(e,t,n){e.exports={header:"Header_header__Obmbc",loginBlock:"Header_loginBlock__-dnfY"}}},[[179,2,1]]]);
//# sourceMappingURL=main.75c64b13.chunk.js.map