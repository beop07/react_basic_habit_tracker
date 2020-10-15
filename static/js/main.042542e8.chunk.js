(this.webpackJsonptemplete=this.webpackJsonptemplete||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(14),a(5)),s=a(1),i=a(2),u=a(3),h=a(4),m=(a(15),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"navbar"},r.a.createElement("i",{className:"navbar-logo fas fa-leaf"}),r.a.createElement("span",null,"Habit Tracker"),r.a.createElement("span",{className:"navbar-count"},this.props.total))}}]),a}(n.Component)),d=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).inputRef=r.a.createRef(),e.onSubmit=function(t){t.preventDefault();var a=e.inputRef.current.value;a&&e.props.onAdd(a)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"add-form",onSubmit:this.onSubmit},r.a.createElement("input",{ref:this.inputRef,type:"text",className:"add-input",placeholder:"\uc785\ub825\ud574\uc8fc\uc138\uc694"}),r.a.createElement("button",{className:"add-button"},"Add"))}}]),a}(n.PureComponent),p=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleIncrement=function(){e.props.onIncrement(e.props.data)},e.handleDecrement=function(){e.props.onDecrement(e.props.data)},e.handleDelete=function(){e.props.onDelete(e.props.data)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.name,a=e.count;return r.a.createElement("li",{className:"habit"},r.a.createElement("span",{className:"habit-name"},t),r.a.createElement("span",{className:"habit-count"},a),r.a.createElement("button",{className:"habit-button habit-increase",onClick:this.handleIncrement},r.a.createElement("i",{className:"fas fa-plus-square"})),r.a.createElement("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement},r.a.createElement("i",{className:"fas fa-minus-square"})),r.a.createElement("button",{className:"habit-button habit-delete",onClick:this.handleDelete},r.a.createElement("i",{className:"fas fa-trash"})))}}]),a}(n.Component),b=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleIncrement=function(t){e.props.onIncrement(t)},e.handleDecrement=function(t){e.props.onDecrement(t)},e.handleDelete=function(t){e.props.onDelete(t)},e.handleAdd=function(t){e.props.onAdd(t)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(d,{onAdd:this.handleAdd}),r.a.createElement("ul",null,this.props.data.map((function(t){return r.a.createElement(p,{key:t.id,data:t,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,onDelete:e.handleDelete})}))),r.a.createElement("button",{type:"button",className:"habits-reset",onClick:this.props.onReset},"Reset all"))}}]),a}(n.Component),f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={totalCount:0,habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]},e.handleIncrement=function(t){var a=Object(l.a)(e.state.habits),n=a.indexOf(t);a[n].count++,e.setState({habits:a});var r=e.state.totalCount;r++,e.setState({totalCount:r})},e.handleDecrement=function(t){var a=Object(l.a)(e.state.habits),n=a.indexOf(t);if(0!==a[n].count){a[n].count--,e.setState({habits:a});var r=e.state.totalCount;0!==r&&(r--,e.setState({totalCount:r}))}},e.handleDelete=function(t){var a=e.state.habits.indexOf(t),n=e.state.habits[a].count,r=e.state.totalCount;r-=n,e.setState({totalCount:r});var c=e.state.habits.filter((function(e){return e.id!==t.id}));e.setState({habits:c})},e.handleAdd=function(t){var a=[].concat(Object(l.a)(e.state.habits),[{id:Date.now(),name:t,count:0}]);e.setState({habits:a})},e.handleReset=function(){var t=e.state.habits.map((function(e){return e.count=0,e}));e.setState({habits:t});e.setState({totalCount:0})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{total:this.state.totalCount}),r.a.createElement(b,{data:this.state.habits,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAdd:this.handleAdd,onReset:this.handleReset}))}}]),a}(n.Component);a(16);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.042542e8.chunk.js.map