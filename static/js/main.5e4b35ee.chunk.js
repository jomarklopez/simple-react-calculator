(this.webpackJsonpreactcalculator=this.webpackJsonpreactcalculator||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),u=a.n(n),l=a(8),c=a.n(l),s=a(9),i=a(10),r=a(14),o=a(11),m=a(15),d=a(30),b=(a(22),function(e){return u.a.createElement("div",{className:"ui fluid input"},u.a.createElement("input",{id:"resultsDisplay",type:"text",value:e.calculatedResult,disabled:!0}))}),E=(a(23),function(e){return e.screenValue}),N=function(e){return u.a.createElement("div",{className:"ui fluid input"},u.a.createElement("input",{id:"inputDisplay",type:"text",value:E(e),disabled:!0}))},f=(a(24),function(e,t){var a=e.target.id;t.onInput(a)}),v=function(e){return u.a.createElement("div",{className:"ui fluid centered",onMouseDown:function(t){return f(t,e)}},u.a.createElement("div",{className:"four ui fluid buttons"},u.a.createElement("button",{className:"ui teal button",id:"C"},"C"),u.a.createElement("button",{className:"ui teal icon button",id:"DEL"},u.a.createElement("i",{className:"long arrow alternate left icon",id:"DEL"})),u.a.createElement("button",{className:"ui teal button",id:"%"},"%"),u.a.createElement("button",{className:"ui teal button",id:"/"},"/")),u.a.createElement("div",{className:"four ui buttons"},u.a.createElement("button",{className:"ui button",id:"7"},"7"),u.a.createElement("button",{className:"ui button",id:"8"},"8"),u.a.createElement("button",{className:"ui button",id:"9"},"9"),u.a.createElement("button",{className:"ui teal button",id:"*"},"*")),u.a.createElement("div",{className:"four ui buttons"},u.a.createElement("button",{className:"ui button",id:"4"},"4"),u.a.createElement("button",{className:"ui button",id:"5"},"5"),u.a.createElement("button",{className:"ui button",id:"6"},"6"),u.a.createElement("button",{className:"ui teal button",id:"-"},"-")),u.a.createElement("div",{className:"four ui buttons"},u.a.createElement("button",{className:"ui button",id:"1"},"1"),u.a.createElement("button",{className:"ui button",id:"2"},"2"),u.a.createElement("button",{className:"ui button",id:"3"},"3"),u.a.createElement("button",{className:"ui teal button",id:"+"},"+")),u.a.createElement("div",{className:"three ui buttons"},u.a.createElement("button",{className:"ui button zero",id:"0"},"0"),u.a.createElement("button",{className:"ui button decimal",id:"."},"."),u.a.createElement("button",{className:"ui teal button equals",id:"="},"=")))},p=(a(25),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,u=new Array(n),l=0;l<n;l++)u[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(u)))).state={calculatedResult:0,screenValue:""},a.onInput=function(e){"="===e?a.evaluate():"C"===e?a.clear():"DEL"===e?a.delete():(a.clear(),a.setState({screenValue:a.state.screenValue+e}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"calculatorBase ui container centered"},u.a.createElement(b,{calculatedResult:this.state.calculatedResult}),u.a.createElement(N,{screenValue:this.state.screenValue}),u.a.createElement(v,{onInput:this.onInput}))}},{key:"evaluate",value:function(){var e=Object(d.a)(this.state.screenValue);console.log(e),this.setState({calculatedResult:e})}},{key:"clear",value:function(){this.setState({calculatedResult:0,screenValue:""})}},{key:"delete",value:function(){this.clear(),this.setState({screenValue:this.state.screenValue.slice(0,-1)})}}]),t}(u.a.Component)),h=(a(27),function(){return u.a.createElement("div",{className:"ui container"},u.a.createElement("div",{className:"ui centered teal header"},u.a.createElement("h1",null,u.a.createElement("i",{className:"ui icon react"}),"React Calculator",u.a.createElement("i",{className:"ui icon calculator"}))),u.a.createElement(p,null))});c.a.render(u.a.createElement(h,null),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5e4b35ee.chunk.js.map