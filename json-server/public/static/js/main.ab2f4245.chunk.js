(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{103:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(15),s=a.n(l),o=(a(100),a(101),a(102),a(103),a(17)),c=a(18),m=a(19),i=a(20),u=a(2),d=a(6),E=function(){return r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("span",{className:"fa fa-circle-o-notch fa-pulse fa-3x fa-fw text-success"}))},h="http://localhost:3001/";function f(e){var t=e.dish;return r.a.createElement(u.d,null,r.a.createElement(d.b,{to:"/menu/".concat(t.id)},r.a.createElement(u.g,{width:"100%",src:h+t.image,alt:t.name}),r.a.createElement(u.h,null,r.a.createElement(u.k,null,t.name))))}var p=function(e){var t=e.dishes.dishes.map((function(t){return r.a.createElement("div",{key:t.id,className:"col-12 col-md-5 m-1"},r.a.createElement(f,{dish:t,onClick:e.onClick}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,(void 0).props.errMess))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement(u.b,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},t))},g=a(16),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(g.a)(n)),n.toggleModal=n.toggleModal.bind(Object(g.a)(n)),n.handleLogin=n.handleLogin.bind(Object(g.a)(n)),n}return Object(c.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert(" Username "+this.username.value+" Password "+this.password.value+" Remember "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.y,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(u.A,{onClick:this.toggleNav}),r.a.createElement(u.z,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Confusion Restaurant"})),r.a.createElement(u.m,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(u.w,{navbar:!0},r.a.createElement(u.x,null,r.a.createElement(d.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(u.x,null,r.a.createElement(d.c,{className:"nav-link",to:"/about"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(u.x,null,r.a.createElement(d.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(u.x,null,r.a.createElement(d.c,{className:"nav-link",to:"/contact"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(u.w,{className:"ml-auto",navbar:!0},r.a.createElement(u.x,null,r.a.createElement(u.c,{onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"},"Login"))))))),r.a.createElement(u.q,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Confusion Restaurant"),r.a.createElement("p",null,"We take inspiration from the World's best cuisine, and create a unique fusion experience. Our lipsmacking creation will tickle your culinary sense!"))))),r.a.createElement(u.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(u.v,{toggle:this.toggleModal}," Login "),r.a.createElement(u.u,null,r.a.createElement(u.n,{onSubmit:this.handleLogin},r.a.createElement(u.o,null,r.a.createElement(u.r,{htmlFor:"username"},"Username"),r.a.createElement(u.p,{type:"text",id:"username",placeholder:"Username",name:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(u.o,null,r.a.createElement(u.r,{htmlFor:"password"},"Password"),r.a.createElement(u.p,{type:"password",id:"password",placeholder:"Password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(u.o,{check:!0},r.a.createElement(u.r,{check:!0},r.a.createElement(u.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember Me!")),r.a.createElement(u.c,{type:"submit",value:"submit",className:"bg-primary"},"Login")))))}}]),a}(n.Component);var N=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/about"},"About Us")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/contact"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),":"," ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2020 Confusion Restaurant")))))},v=a(8),y=function(e){return e&&e.length},w=function(e){return function(t){return!t||t.length<=e}},O=function(e){return function(t){return t&&t.length>=e}},M=function(e){return!isNaN(Number(e))},k=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},L=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(c.a)(a,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message),console.log("Feedback sent"),console.log("Current State is: "+JSON.stringify(e)),alert("Feedback has been sent and Current State is: "+JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement(u.b,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),":"," ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"/"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(v.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(u.l,{md:10},r.a.createElement(v.Control.text,{className:"form-control",model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",validators:{required:y,minLength:O(3),maxLength:w(15)}}),r.a.createElement(v.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters ",maxLength:"Must be 15 characters or less "}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(u.l,{md:10},r.a.createElement(v.Control.text,{className:"form-control",model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",validators:{required:y,minLength:O(3),maxLength:w(15)}}),r.a.createElement(v.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters ",maxLength:"Must be 15 characters or less "}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(u.l,{md:10},r.a.createElement(v.Control.text,{className:"form-control",model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",validators:{required:y,minLength:O(3),maxLength:w(13),isNumber:M}}),r.a.createElement(v.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 numbers ",maxLength:"Must be 13 numbers or less ",isNumber:"Must be a number "}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"email",md:2},"Email"),r.a.createElement(u.l,{md:10},r.a.createElement(v.Control.text,{className:"form-control",model:".email",id:"email",name:"email",placeholder:"Email",validators:{required:y,validEmail:k}}),r.a.createElement(v.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required ",validEmail:"Invalid Email Address "}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.l,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(u.r,{check:!0},r.a.createElement(v.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(u.l,{md:{size:3,offset:1}},r.a.createElement(v.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(u.l,{md:10},r.a.createElement(v.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.l,{md:{size:10,offset:2}},r.a.createElement(u.c,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),a}(n.Component),S=a(24),C=function(e){return e&&e.length},D=function(e){return function(t){return!t||t.length<=e}},j=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={author:"",rating:"",comment:"",isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(c.a)(a,[{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"render",value:function(){var e,t=this;return r.a.createElement("div",null,r.a.createElement(u.c,{onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil-square-o fa-lg","aria-hidden":"true"},"Submit Comment")),r.a.createElement("div",{className:"row row-content"},r.a.createElement(u.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(u.v,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(u.u,null,r.a.createElement("div",{className:"col-12 col-md-12"},r.a.createElement(v.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)}},r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"rating",md:12},"Rating"),r.a.createElement(u.l,{md:12},r.a.createElement(v.Control.select,{className:"form-control",model:".rating",id:"rating",name:"rating",placeholder:"Rating",validators:{required:C}},r.a.createElement(v.Errors,{className:"text-danger",model:".rating",show:"touched",messages:{required:"Required "}}),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"author",md:12},"Your Name"),r.a.createElement(u.l,{md:12},r.a.createElement(v.Control.text,{className:"form-control",model:".author",id:"author",name:"author",placeholder:"Your Name",validators:{required:C,minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:D(15)}}),r.a.createElement(v.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters ",maxLength:"Must be 15 characters or less "}}))),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.r,{htmlFor:"feedback",md:12},"Comment")),r.a.createElement(u.B,{className:"form-group"},r.a.createElement(u.l,{md:12},r.a.createElement(v.Control.textarea,{className:"form-control",model:".comment",id:"comment",name:"comment",rows:"6",placeholder:"Enter your comment here",validators:{required:C}}),r.a.createElement(v.Errors,{className:"text-danger",model:".comment",show:"touched",messages:{required:"Required "}}))),r.a.createElement(u.c,{type:"submit",value:"submit",className:"bg-primary"},"Submit")))))))}}]),a}(n.Component);function x(e){var t=e.dish;return null!=t?r.a.createElement(S.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.d,null,r.a.createElement(u.g,{width:"100%",src:h+t.image,axlt:t.name}),r.a.createElement(u.e,null,r.a.createElement(u.k,null,t.name),r.a.createElement(u.j,null,t.description)))):r.a.createElement("div",null)}function F(e){var t=e.comments,a=e.postComment,n=e.dishId,l=e.errMess;if(l)return r.a.createElement("h4",null,l);if(null!=t){var s=t.map((function(e){return r.a.createElement(S.Fade,{in:!0},r.a.createElement("li",{key:e.id},e.comment,r.a.createElement("br",null),r.a.createElement("br",null),"-- ",e.author,","," ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))),r.a.createElement("br",null),r.a.createElement("br",null)))}));return r.a.createElement("div",null,r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(S.Stagger,{in:!0},s)),r.a.createElement(j,{dishId:n,postComment:a}))}return r.a.createElement("div",null)}var A=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,(void 0).props.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(d.b,{to:"/menu"},"Menu")),r.a.createElement(u.b,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(x,{dish:e.dish})),r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(F,{errMess:e.commentsErrMess,comments:e.comments,postComment:e.postComment,dishId:e.dish.id})))):r.a.createElement("div",null)};function I(e){var t=e.item,a=e.isLoading,n=e.errMess;return console.log(t),a?r.a.createElement(E,null):n?r.a.createElement("h4",null,n):r.a.createElement(S.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.d,null,r.a.createElement(u.g,{src:h+t.image,alt:t.name}),r.a.createElement(u.e,null,r.a.createElement(u.k,null,t.name),t.designation?r.a.createElement(u.i,null,t.designation):null,r.a.createElement(u.j,null,t.description))))}var T=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:" row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(I,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(I,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErrorMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(I,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrorMess}))))};function R(e){var t=e.leader;return r.a.createElement(S.Fade,{in:!0},r.a.createElement(u.s,{tag:"li"},r.a.createElement(u.s,{left:!0,middle:!0},r.a.createElement(u.s,{object:!0,src:h+t.image,height:"200",width:"200",alt:t.name})),r.a.createElement(u.s,{body:!0,className:"ml-5"},r.a.createElement(u.s,{heading:!0},t.name),r.a.createElement("p",null,t.designation),r.a.createElement("p",null,t.description))))}var q=function(e){var t=e.leaders.leaders.map((function(t){return e.leaders.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.leaders.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.leaders.errMess))):r.a.createElement("div",{key:t.id,className:"col-12 mt-5"},r.a.createElement(S.Stagger,{in:!0},r.a.createElement(R,{leader:t})))}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement(u.b,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Confusion Restaurant quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to"," ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.d,null,r.a.createElement(u.f,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(u.e,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.d,null,r.a.createElement(u.e,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.s,{list:!0},t))))},_=a(53),B=a(22),P=function(){return{type:"DISHES_LOADING"}},H=function(e){return{type:"DISH_FAILED",payload:e}},G=function(e){return{type:"ADD_DISH",payload:e}},U=function(e){return{type:"ADD_COMMENTS",payload:e}},W=function(e){return{type:"COMMENTS_FAILED",payload:e}},Y=function(){return{type:"PROMOS_LOADING"}},J=function(e){return{type:"PROMOS_FAILED",payload:e}},K=function(e){return{type:"ADD_PROMOS",payload:e}},z=function(){return{type:"LEADERS_LOADING"}},Z=function(e){return{type:"LEADERS_FAILED",payload:e}},$=function(e){return{type:"ADD_LEADERS",payload:e}},Q=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchLeaders(),this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(_.TransitionGroup,null,r.a.createElement(_.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(d.f,{location:this.props.location},r.a.createElement(d.e,{path:"/home",component:function(){return r.a.createElement(T,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrorMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrorMess:e.props.leaders.errMess})}}),r.a.createElement(d.e,{exact:!0,path:"/menu",component:function(){return r.a.createElement(p,{dishes:e.props.dishes})}}),r.a.createElement(d.e,{path:"/menu/:dishId",component:function(t){var a=t.match;return r.a.createElement(A,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(a.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(a.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(d.e,{exact:!0,path:"/contact",component:function(){return r.a.createElement(L,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(d.e,{path:"/about",component:function(){return r.a.createElement(q,{leaders:e.props.leaders})}}),r.a.createElement(d.d,{to:"/home"})))),r.a.createElement(N,null))}}]),a}(n.Component),V=Object(d.g)(Object(B.connect)((function(e){return{dishes:e.dishes,leaders:e.leaders,promotions:e.promotions,comments:e.comments}}),(function(e){return{postComment:function(t,a,n,r){return e(function(e,t,a,n){return function(r){var l={dishId:e,rating:t,author:a,comment:n};return l.date=(new Date).toISOString(),fetch(h+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/JSON"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(t,a,n,r))},postFeedback:function(t,a,n,r,l,s,o){return e(function(e,t,a,n,r,l,s){return function(o){var c={firstname:e,lastname:t,telnum:a,email:n,agree:r,contactType:l,message:s};return c.date=(new Date).toISOString(),fetch(h+"feedback",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/JSON"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return o({type:"ADD_FEEDBACK",payload:e})})).catch((function(e){console.log("post feedback",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(t,a,n,r,l,s,o))},fetchDishes:function(){e((function(e){return e(P(!0)),fetch(h+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(G(t))})).catch((function(t){return e(H(t.message))}))}))},fetchComments:function(){e((function(e){return fetch(h+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(U(t))})).catch((function(t){return e(W(t.message))}))}))},fetchLeaders:function(){e((function(e){return e(z(!0)),fetch(h+"leaders").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e($(t))})).catch((function(t){return e(Z(t.message))}))}))},fetchPromos:function(){e((function(e){return e(Y()),fetch(h+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(K(t))})).catch((function(t){return e(J(t.message))}))}))},resetFeedbackForm:function(){e(v.actions.reset("feedback"))}}}))(Q)),X=(a(171),a(10)),ee=a(23),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errmess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DISH":return Object(X.a)({},e,{isLoading:!1,errMess:null,dishes:t.payload});case"DISHES_LOADING":return Object(X.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISH_FAILED":return Object(X.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errmess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LEADERS":return Object(X.a)({},e,{isLoading:!1,errMess:null,leaders:t.payload});case"LEADERS_LOADING":return Object(X.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(X.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errmess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROMOS":return Object(X.a)({},e,{isLoading:!1,errMess:null,promotions:t.payload});case"PROMOS_LOADING":return Object(X.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(X.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errmess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(X.a)({},e,{errMess:null,comments:t.payload});case"COMMENTS_FAILED":return Object(X.a)({},e,{errMess:t.payload});case"ADD_COMMENT":var a=t.payload;return a.id=e.comments.length,a.date=(new Date).toISOString(),Object(X.a)({},e,{comments:e.comments.concat(a)});default:return e}},le=a(93),se=a.n(le),oe=a(94),ce=a.n(oe),me={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},ie=Object(ee.createStore)(Object(ee.combineReducers)(Object(X.a)({dishes:te,comments:re,promotions:ne,leaders:ae},Object(v.createForms)({feedback:me}))),Object(ee.applyMiddleware)(se.a,ce.a)),ue=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(B.Provider,{store:ie},r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(V,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,a){e.exports=a(172)}},[[95,1,2]]]);
//# sourceMappingURL=main.ab2f4245.chunk.js.map