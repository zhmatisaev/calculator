(this.webpackJsonpadvan10=this.webpackJsonpadvan10||[]).push([[0],{16:function(t,e,n){"use strict";n.r(e);var u=n(1),i=n.n(u),r=n(6),a=n.n(r),s=n(2),c=n(7),l=n(8),o=n(10),p=n(9),j=n(0),b=function(t){Object(o.a)(n,t);var e=Object(p.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).inputHandler=function(e){t.setState((function(){return Object(s.a)({},e.target.name,parseInt(e.target.value))}))},t.onPlus=function(){t.setState((function(){return{result:parseInt(t.state.inputValue1)+parseInt(t.state.inputValue2)}}))},t.onMinus=function(){t.setState((function(){return{result:parseInt(t.state.inputValue1)-parseInt(t.state.inputValue2)}}))},t.onMult=function(){t.setState((function(){return{result:parseInt(t.state.inputValue1)*parseInt(t.state.inputValue2)}}))},t.onDivis=function(){t.setState((function(){return{result:parseInt(t.state.inputValue1)/parseInt(t.state.inputValue2)}}))},t.state={inputValue1:1,inputValue2:1,result:0},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{style:{background:"green",width:350,marginLeft:50,padding:20},children:[Object(j.jsx)("h1",{children:"Calculate  with class"}),Object(j.jsx)("input",{type:"number",value:this.state.inputValue1,onChange:this.inputHandler,name:"inputValue1",style:{textAlign:"center",width:80}}),Object(j.jsx)("button",{onClick:this.onPlus,children:"+"}),Object(j.jsx)("button",{onClick:this.onMinus,children:"-"}),Object(j.jsx)("button",{onClick:this.onMult,children:"*"}),Object(j.jsx)("button",{onClick:this.onDivis,children:"/"}),Object(j.jsx)("input",{type:"number",value:this.state.inputValue2,onChange:this.inputHandler,name:"inputValue2",style:{textAlign:"center",width:80}}),Object(j.jsxs)("h1",{style:{textAlign:"center",width:250},children:["Result:",this.state.result]})]})}}]),n}(i.a.Component),h=n(4),d=n(5),O=function(){var t=Object(u.useState)({input1:2,input2:2}),e=Object(d.a)(t,2),n=e[0],i=e[1],r=Object(u.useState)({result:0}),a=Object(d.a)(r,2),c=a[0],l=a[1],o=function(t){i((function(){return Object(h.a)(Object(h.a)({},n),{},Object(s.a)({},t.target.name,parseInt(t.target.value)))}))};return Object(j.jsxs)("div",{style:{backgroundColor:"yellow",width:350,marginLeft:50,padding:20,marginTop:30},children:[Object(j.jsx)("h1",{children:"Calculate with function "}),Object(j.jsx)("input",{type:"number",value:n.input1,onChange:o,name:"input1",style:{textAlign:"center",backgroundColor:"red",height:30,width:80}}),Object(j.jsx)("button",{onClick:function(){l((function(){return{result:parseInt(n.input1)+parseInt(n.input2)}}))},children:"+"}),Object(j.jsx)("button",{onClick:function(){l((function(){return{result:parseInt(n.input1)-parseInt(n.input2)}}))},children:"-"}),Object(j.jsx)("button",{onClick:function(){l((function(){return{result:parseInt(n.input1)*parseInt(n.input2)}}))},children:"*"}),Object(j.jsx)("button",{onClick:function(){l((function(){return{result:parseInt(n.input1)/parseInt(n.input2)}}))},children:"/"}),Object(j.jsx)("input",{type:"number",value:n.input2,onChange:o,name:"input2",style:{textAlign:"center",backgroundColor:"red",height:30,width:80}}),Object(j.jsxs)("h1",{style:{textAlign:"center",width:350},children:["Result : ",c.result]})]})};var f=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsx)(O,{})]})};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.660350c4.chunk.js.map