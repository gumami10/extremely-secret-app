(this["webpackJsonpextremely-secret-app"]=this["webpackJsonpextremely-secret-app"]||[]).push([[0],{41:function(e,a,t){e.exports=t.p+"static/media/canvas.41962af0.png"},49:function(e,a,t){e.exports=t(59)},54:function(e,a,t){},55:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(8),l=t.n(o),s=(t(54),t(55),t(98)),c=t(15),i=t(92),u=t(102),m=t(103),f=t(97),E=t(101),d=t(100),p=t(95),b=t(99),g=Object(i.a)((function(e){return Object(u.a)({root:{display:"flex",justifyContent:"center",flexDirection:"column"},text:{},question:{fontSize:"22px"}})}));function v(e){var a=g(),t=n.a.useState(""),r=Object(c.a)(t,2),o=r[0],l=r[1];return n.a.useEffect((function(){var a=o.toLocaleLowerCase().trim();"a odiss\xe9ia dos tontos"!==a&&"a odisseia dos tontos"!==a||e.setAnswer(!0)})),n.a.createElement("div",{className:a.root},n.a.createElement(p.a,{className:a.text},n.a.createElement("h3",null,"Salve minha deusa!! ",n.a.createElement("br",null)),"Esse \xe9 o primeiro de 7 desafios que eu vou fazer para tu, sendo que eu vou liberar eles um por dia. Se tu conseguir completar todos, no final vai ter um pr\xeamio, rs... ",n.a.createElement("br",null),"Como esse \xe9 o primeiro dia, eu vou fazer um desafio bem easy, boa sorte e espero que vc curta! ",n.a.createElement("br",null),"Te amo meu amor ","<3"),n.a.createElement(p.a,{className:a.question},n.a.createElement("h4",null,n.a.createElement("strong",null,'Qual \xe9 o nome do primeiro filme que n\xf3s "assistimos" juntinhos quando nos vemos pela 1a vez?'))),n.a.createElement(b.a,{onChange:function(e){return l(e.target.value)},label:"Resposta",variant:"filled",error:e.error,helperText:e.error?"Sorry bro":""}))}var h=t(41),x=t.n(h),N=Object(i.a)((function(e){return Object(u.a)({root:{display:"flex",flexDirection:"column"},img:{maxHeight:"300px"}})}));function j(){var e=N();return n.a.createElement("div",{className:e.root},"N\xe3o fique ansiosa, volte amanh\xe3 para mais",n.a.createElement("img",{className:e.img,src:x.a,alt:""}))}var w=Object(i.a)((function(e){return Object(u.a)({root:{display:"flex",justifyContent:"center",flexDirection:"column"},text:{},question:{fontSize:"22px"},markedText:{margin:0},breakText:{paddingBottom:"4px",borderBottom:"2px solid #cecece"}})}));function y(e){var a=w(),t=n.a.useState(""),r=Object(c.a)(t,2),o=r[0],l=r[1];return n.a.useEffect((function(){var a=o.toLocaleLowerCase().trim();"christian"!==a&&"chris"!==a||e.setAnswer(!0)})),n.a.createElement("div",{className:a.root},n.a.createElement(p.a,{className:a.text},n.a.createElement("p",{className:a.breakText},n.a.createElement("strong",null,"Eric - Tu tem alguma piada interna com ela ou alguma memoria daora que eu possa colocar aqui?",n.a.createElement("br",null),"X - S\xe9rio Man core aqui bateu ",n.a.createElement("br",null))),n.a.createElement("p",{className:a.breakText},n.a.createElement("s",null,'Primeira que eu mandei uma hist\xf3ria assim na Tegra; algu\xe9m tinha perguntado se a gente almo\xe7ou, e eu falei: "os estagi\xe1rios j\xe1 est\xe3o comidos" ',n.a.createElement("br",null),"Essa ela lembra ezyyy ",n.a.createElement("br",null))),n.a.createElement("p",{className:a.breakText},n.a.createElement("s",null,"Tem outra do git, que eu fui ensinar git para Adna pela 6x vez e ela confunde git com Github ",n.a.createElement("br",null))),n.a.createElement("h4",{className:a.markedText},"E a famosa..."),n.a.createElement("h4",{className:a.markedText},"O gerente t\xe1 maluco, s\xf3 3 trufas por 6 reais")),n.a.createElement(p.a,{className:a.question},n.a.createElement("h4",null,n.a.createElement("strong",null,"Qu\xe9m \xe9 esse serhumaninho?"))),n.a.createElement(b.a,{onChange:function(e){return l(e.target.value)},label:"Resposta",variant:"filled",error:e.error,helperText:e.error?"Sorry bro":""}))}var S=Object(i.a)((function(e){return Object(u.a)({root:{width:"auto",margin:"16px"},button:{width:"300px",backgroundColor:"#1791B1"},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},content:{display:"flex",flexDirection:"column",alignItems:"center"}})}));function k(){var e,a=S(),t=n.a.useState(0),o=Object(c.a)(t,2),l=o[0],s=o[1],i=n.a.useState(!1),u=Object(c.a)(i,2),b=u[0],g=u[1],h=n.a.useState(!1),x=Object(c.a)(h,2),N=x[0],w=x[1],k=["Dia 1","Dia 2","Dia 3","Dia 4","Dia 5","Dia 6","Dia Final, rs"];return Object(r.useEffect)((function(){var e=localStorage.getItem("mission");e&&s(Number(e))}),[]),Object(r.useEffect)((function(){localStorage.setItem("mission",l.toString()),w(!1)}),[l]),n.a.createElement("div",{className:a.root},n.a.createElement(m.a,{activeStep:l},k.map((function(e,a){var t={};return n.a.createElement(f.a,{key:e},n.a.createElement(E.a,t,e))}))),n.a.createElement("div",null,n.a.createElement("div",{className:a.content},n.a.createElement(p.a,{className:a.instructions},function(e,a,t,r){switch(e){case 0:return n.a.createElement(v,{error:a,setAnswer:r,setError:t});case 1:return n.a.createElement(y,{error:a,setAnswer:r,setError:t});case 2:return n.a.createElement(j,null);default:return"Unknown step"}}(l,b,g,w)),n.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){N?(s(l+1),g(!1)):g(!0)},className:a.button,disabled:(e=l,e>1)},l===k.length-1?"Finish":"Tentar"))))}var O={height:"auto",width:"1000px",backgroundColor:"#E6E6E6"};var q=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(s.a,{elevation:3,style:O},n.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.9f9a8e92.chunk.js.map