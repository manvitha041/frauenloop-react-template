(this["webpackJsonpfrauenloop-react-template"]=this["webpackJsonpfrauenloop-react-template"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),l=n(8),r=n.n(l),c=(n(14),n(1)),u=n(2),i=n(4),s=n(3),p=n(5),m=n(6),h=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(i.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).state={input:"",todos:[]},n.handleSubmit=function(t){t.preventDefault();var e=Object(m.a)(n.state.todos);""!==n.state.input.trim()&&(e.push({content:n.state.input}),n.setState({todos:e,input:""}))},n.onChange=function(t){n.setState({input:t.target.value})},n.handleDelete=function(t){var e=Object(m.a)(n.state.todos);e.splice(t,1),n.setState({todos:e})},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",value:this.state.input,onChange:this.onChange}),o.a.createElement("button",null,"save todo")),o.a.createElement("ul",null,this.state.todos.map((function(e,n){return o.a.createElement("li",{key:n},e.content,o.a.createElement("span",{className:"delete-container"},o.a.createElement("button",{onClick:function(){t.handleDelete(n)},className:"delete"},"x")))}))))}}]),e}(a.Component),b=function(t){function e(){return Object(c.a)(this,e),Object(i.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("main",null,o.a.createElement("h1",null,"Todo List"),o.a.createElement(h,null))}}]),e}(o.a.Component);r.a.render(o.a.createElement(b,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.fae383fe.chunk.js.map