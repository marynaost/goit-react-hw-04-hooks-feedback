(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,c){e.exports={item:"Statistics_item__2leDU",list:"Statistics_list__3Ciz5"}},,,,function(e,t,c){e.exports={button:"FeedbackOptions_button__FLMjI"}},function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(5),i=c.n(a),r=(c(12),c(13),c(3)),o=(c(14),c(6)),l=c.n(o),u=c(0);var b=function(e){var t=e.options,c=e.onLeaveFeedback;return Object(u.jsx)("div",{children:t.map((function(e){return Object(u.jsx)("button",{className:l.a.button,type:"button",value:e,onClick:function(){return c(e)},children:e},e)}))})},j=c(2),d=c.n(j);var h=function(e){var t=e.good,c=e.neutral,n=e.bad,s=e.total,a=e.positivePercent;return Object(u.jsxs)("ul",{className:d.a.item,children:[Object(u.jsxs)("li",{className:d.a.list,children:["Good: ",t]}),Object(u.jsxs)("li",{className:d.a.list,children:["Neutral: ",c]}),Object(u.jsxs)("li",{className:d.a.list,children:["Bad: ",n]}),Object(u.jsxs)("li",{className:d.a.list,children:["Total: ",s]}),Object(u.jsxs)("li",{className:d.a.list,children:["Positive feedback: ",a,"%"]})]})};var O=function(e){var t=e.message;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("p",{children:t})})},f=c(7),x=c.n(f);var v=function(e){var t=e.title,c=e.children;return Object(u.jsxs)("section",{className:x.a.section,children:[t&&Object(u.jsx)("h2",{children:t}),c]})},m=["good","neutral","bad"];function k(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(0),i=Object(r.a)(a,2),o=i[0],l=i[1],j=Object(n.useState)(0),d=Object(r.a)(j,2),f=d[0],x=d[1],k=function(){return c+o+f};return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(v,{title:"Please leave feedback",children:Object(u.jsx)(b,{options:m,onLeaveFeedback:function(e){switch(e){case"good":s((function(e){return e+1}));break;case"neutral":l((function(e){return e+1}));break;case"bad":x((function(e){return e+1}));break;default:return}}})}),Object(u.jsx)(v,{title:"Statistics",children:k()>0?Object(u.jsx)(h,{good:c,neutral:o,bad:f,total:k(),positivePercent:Math.floor(c/k()*100)}):Object(u.jsx)(O,{message:"There is no feedback"})})]})}i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.f10ece52.chunk.js.map