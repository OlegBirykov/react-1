(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{14:function(e,c,t){},15:function(e,c,t){},17:function(e,c,t){"use strict";t.r(c);var i=t(0),s=t(2),a=t.n(s),d=t(5),r=t.n(d),l=(t(14),t(15),t(3)),n=function e(c,t,i,s,a,d){Object(l.a)(this,e),this.brand=c,this.title=t,this.description=i,this.descriptionFull=s,this.price=a,this.currency=d};var j=function(e){var c=e.item;return Object(i.jsxs)("div",{className:"main-content",children:[Object(i.jsx)("h2",{children:c.brand}),Object(i.jsx)("h1",{children:c.title}),Object(i.jsx)("h3",{children:c.description}),Object(i.jsx)("div",{className:"description",children:c.descriptionFull}),Object(i.jsx)("div",{className:"highlight-window mobile",children:Object(i.jsx)("div",{className:"highlight-overlay"})}),Object(i.jsx)("div",{className:"divider"}),Object(i.jsxs)("div",{className:"purchase-info",children:[Object(i.jsxs)("div",{className:"price",children:[c.currency,c.price.toFixed(2)]}),Object(i.jsx)("button",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]})},h=t(6),o=t(8),b=t(7),m=function(e){Object(o.a)(t,e);var c=Object(b.a)(t);function t(){return Object(l.a)(this,t),c.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){var e=this.props.item;return Object(i.jsxs)("div",{className:"main-content",children:[Object(i.jsx)("h2",{children:e.brand}),Object(i.jsx)("h1",{children:e.title}),Object(i.jsx)("h3",{children:e.description}),Object(i.jsx)("div",{className:"description",children:e.descriptionFull}),Object(i.jsx)("div",{className:"highlight-window mobile",children:Object(i.jsx)("div",{className:"highlight-overlay"})}),Object(i.jsx)("div",{className:"divider"}),Object(i.jsxs)("div",{className:"purchase-info",children:[Object(i.jsxs)("div",{className:"price",children:[e.currency,e.price.toFixed(2)]}),Object(i.jsx)("button",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]})}}]),t}(a.a.Component),O=t(1),x=t.n(O);var u=function(e){for(var c=e.date,t=[{day:c.date(),class:"ui-datepicker-today"}],s=x()(c);1!==s.date();)s.date(s.date()-1),t.unshift({day:s.date(),class:null});for(;1!==s.day();)s.date(s.date()-1),t.unshift({day:s.date(),class:"ui-datepicker-other-month"});for((s=x()(c)).date(s.date()+1);s.month()===c.month();)t.push({day:s.date(),class:null}),s.date(s.date()+1);for(;1!==s.day();)t.push({day:s.date(),class:"ui-datepicker-other-month"}),s.date(s.date()+1);for(var a=[];t.length;)a.push(t.splice(0,7));return Object(i.jsxs)("div",{className:"ui-datepicker",children:[Object(i.jsxs)("div",{className:"ui-datepicker-material-header",children:[Object(i.jsx)("div",{className:"ui-datepicker-material-day",children:c.format("dddd")}),Object(i.jsxs)("div",{className:"ui-datepicker-material-date",children:[Object(i.jsx)("div",{className:"ui-datepicker-material-day-num",children:c.format("D")}),Object(i.jsx)("div",{className:"ui-datepicker-material-month",children:c.format("MMM")}),Object(i.jsx)("div",{className:"ui-datepicker-material-year",children:c.format("YYYY")})]})]}),Object(i.jsx)("div",{className:"ui-datepicker-header",children:Object(i.jsxs)("div",{className:"ui-datepicker-title",children:[Object(i.jsx)("span",{className:"ui-datepicker-month",children:c.format("MMMM")}),"\xa0",Object(i.jsx)("span",{className:"ui-datepicker-year",children:c.format("YYYY")})]})}),Object(i.jsxs)("table",{className:"ui-datepicker-calendar",children:[Object(i.jsxs)("colgroup",{children:[Object(i.jsx)("col",{}),Object(i.jsx)("col",{}),Object(i.jsx)("col",{}),Object(i.jsx)("col",{}),Object(i.jsx)("col",{}),Object(i.jsx)("col",{className:"ui-datepicker-week-end"}),Object(i.jsx)("col",{className:"ui-datepicker-week-end"})]}),Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",title:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",children:"\u041f\u043d"}),Object(i.jsx)("th",{scope:"col",title:"\u0412\u0442\u043e\u0440\u043d\u0438\u043a",children:"\u0412\u0442"}),Object(i.jsx)("th",{scope:"col",title:"\u0421\u0440\u0435\u0434\u0430",children:"\u0421\u0440"}),Object(i.jsx)("th",{scope:"col",title:"\u0427\u0435\u0442\u0432\u0435\u0440\u0433",children:"\u0427\u0442"}),Object(i.jsx)("th",{scope:"col",title:"\u041f\u044f\u0442\u043d\u0438\u0446\u0430",children:"\u041f\u0442"}),Object(i.jsx)("th",{scope:"col",title:"\u0421\u0443\u0431\u0431\u043e\u0442\u0430",children:"\u0421\u0431"}),Object(i.jsx)("th",{scope:"col",title:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435",children:"\u0412\u0441"})]})}),Object(i.jsx)("tbody",{children:a.map((function(e,c){return Object(i.jsx)("tr",{children:e.map((function(e,c){return Object(i.jsx)("td",{className:e.class,children:e.day},c)}))},c)}))})]})]})};var p=function(){x.a.locale("ru"),x.a.updateLocale("ru",{weekdays:["\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430"],months:["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","M\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"],monthsShort:["\u042f\u043d\u0432\u0430\u0440\u044f","\u0424\u0435\u0432\u0440\u0430\u043b\u044f","\u041c\u0430\u0440\u0442\u0430","\u0410\u043f\u0440\u0435\u043b\u044f","M\u0430\u044f","\u0418\u044e\u043d\u044f","\u0418\u044e\u043b\u044f","\u0410\u0432\u0433\u0443\u0441\u0442\u0430","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u041e\u043a\u0442\u044f\u0431\u0440\u044f","\u041d\u043e\u044f\u0431\u0440\u044f","\u0414\u0435\u043a\u0430\u0431\u0440\u044f"]})};var v=function(){var e=new n("Tiger of Sweden","Leonard coat","Minimalistic coat in cotton-blend","Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",399,"\xa3");p();var c=x()();return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"background-element"}),Object(i.jsx)("div",{className:"highlight-window",children:Object(i.jsx)("div",{className:"highlight-overlay"})}),Object(i.jsx)("div",{className:"window",children:Object(i.jsx)(j,{item:e})})]}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"background-element"}),Object(i.jsx)("div",{className:"highlight-window",children:Object(i.jsx)("div",{className:"highlight-overlay"})}),Object(i.jsx)("div",{className:"window",children:Object(i.jsx)(m,{item:e})})]}),Object(i.jsx)("div",{className:"container-calendar",children:Object(i.jsx)(u,{date:c})})]})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4830c8b8.chunk.js.map