(this.webpackJsonpbookread_frontend=this.webpackJsonpbookread_frontend||[]).push([[0],{102:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t.n(a),c=t(23),r=t.n(c),i=(t(93),t(87)),s=t(12),l=t(47),j=t(51),d=t(17),b=t(53),u=t(82),m=t(76),h=t(56),O=t(86),x=t(2),p=function(){return Object(x.jsxs)(b.a,{bg:"secondary",variant:"dark",expand:"lg",children:[Object(x.jsxs)(b.a.Brand,{href:"#/",children:[Object(x.jsx)(h.a,{}),"BookRead"]}),Object(x.jsxs)(u.a,{className:"mr-auto",children:[Object(x.jsxs)(u.a.Link,{href:"#/",children:[Object(x.jsx)(O.a,{}),"Inicio"]}),Object(x.jsxs)(m.a,{title:"Livros",id:"droplivros",children:[Object(x.jsxs)(m.a.Item,{href:"#/livros",children:[Object(x.jsx)(h.b,{}),"Lista Livros"]}),Object(x.jsx)(m.a.Item,{href:"#/livros/adicionar",children:"Adicionar Livro"})]})]})]})},g=function(){return Object(x.jsx)(b.a,{bg:"dark",fixed:"bottom",children:Object(x.jsxs)(b.a.Brand,{href:"#/",className:"text-light",children:[Object(x.jsx)(h.a,{})," BookRead \xa9 - Todos os direitos reservados"]})})},v=function(){return Object(a.useEffect)((function(){document.title="BookRead"}),[]),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(l.a,{fluid:!0,style:{padding:0},children:[Object(x.jsx)(p,{}),Object(x.jsx)(j.a,{className:"justify-content-md-center",style:{margin:0},children:Object(x.jsx)("h1",{children:"Seja bem-vindo ao BookRead"})}),Object(x.jsxs)(j.a,{className:"justify-content-md-center",style:{margin:0},children:[Object(x.jsx)(d.a,{type:"button",href:"#/livros",children:"Lista de Livros"}),"\xa0",Object(x.jsx)(d.a,{type:"button",href:"#/livros/adicionar",children:"Adicionar Livro"})]}),Object(x.jsx)(g,{})]})})},f=t(31),k=t.n(f),y=t(48),_=t(32),C=t(52),L=t(18),I=t(9),S=t(28),w=t(70),F=t(65),N=t(39),A=t(68),B="https://bookread-backend.herokuapp.com",G=(t(84),function(){var e=Object(a.useState)([]),n=Object(L.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)([]),i=Object(L.a)(r,2),s=i[0],j=i[1],b=Object(a.useState)(!1),u=Object(L.a)(b,2),m=(u[0],u[1]),h=Object(a.useState)(!1),O=Object(L.a)(h,2),v=O[0],f=O[1],G=Object(a.useState)(!1),E=Object(L.a)(G,2),T=E[0],R=E[1],H=o.a.useState(!1),U=Object(L.a)(H,2),z=U[0],J=U[1],D=Object(a.useState)(!1),P=Object(L.a)(D,2),M=P[0],q=P[1],K=Object(a.useState)(""),Q=Object(L.a)(K,2),V=Q[0],W=Q[1],X=Object(a.useState)({}),Y=Object(L.a)(X,2),Z=Y[0],$=Y[1];function ee(){return ne.apply(this,arguments)}function ne(){return(ne=Object(C.a)(k.a.mark((function e(){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),n="".concat(B,"/livros"),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){j(e)})).catch((function(e){console.error("O seguinte erro foi apresentado ao obter os livros: ".concat(e.message))}));case 4:m(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){document.title="BookRead",ee(),z&&(window.open(t.link_compra,"_blank"),J(!1))}),[z]);var te=function(e){c(Object(_.a)(Object(_.a)({},t),{},Object(y.a)({},e.target.name,e.target.value))),$({})},ae=function(){var e={};return(!t.nome||""===t.nome||t.nome.length>50||t.nome.length<1)&&(e.nome="O nome deve ter entre 1 a 50 caracteres"),(!t.autor||""===t.autor||t.autor.length>50||t.autor.length<1)&&(e.autor="O nome do autor deve ter entre 1 a 50 caracteres"),(!t.genero||""===t.genero||t.genero.length>50||t.genero.length<1)&&(e.genero="O genero deve ter entre 1 a 40 caracteres"),(!t.ano_lancamento||""===t.ano_lancamento||t.ano_lancamento.length>4||t.ano_lancamento.length<1)&&(e.ano_lancamento="O ano de lan\xe7amento deve ter pelo menos 1 caracter e no maximo 4"),t.url_img&&""!==t.url_img||(e.url_img="A URL de imagem n\xe3o pode ser vazio"),t.link_compra&&""!==t.link_compra||(e.link_compra="O link de compra n\xe3o pode ser vazio"),e};function oe(){return(oe=Object(C.a)(k.a.mark((function e(n){var a,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a=ae(),!(Object.keys(a).length>0)){e.next=6;break}$(a),e.next=11;break;case 6:return R(!0),o="".concat(B,"/livros"),e.next=10,fetch(o,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e._id||e.message?W("Livro salvo com sucesso"):W(""),f(!1),ee()})).catch((function(e){console.error("Erro ao salvar o livro: ".concat(e.message))}));case 10:R(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(){return(ce=Object(C.a)(k.a.mark((function e(){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(B,"/livros/").concat(t._id),e.next=3,fetch(n,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.message?W(e.message):W(""),f(!1),ee()})).catch((function(e){console.error("Erro ao excluir o livro: ".concat(e.message))}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(l.a,{fluid:!0,style:{padding:0},children:[Object(x.jsx)(p,{}),Object(x.jsx)("div",{className:"livros",children:s.map((function(e){return Object(x.jsxs)("div",{className:"livro",onClick:function(){c(e),f(!0)},children:[Object(x.jsx)("img",{src:e.url_img}),Object(x.jsx)("h5",{children:e.nome})]})}))}),Object(x.jsxs)(S.a,{animation:!1,show:v,onHide:function(){return f(!1)},backdrop:"static",scrollable:!0,children:[Object(x.jsx)(S.a.Header,{closeButton:!0,children:Object(x.jsx)(S.a.Title,{children:Object(x.jsxs)("h2",{children:[t.nome,"\xa0",Object(x.jsx)(w.a,{placement:"right",delay:{show:100,hide:100},overlay:function(e){return Object(x.jsx)(F.a,Object(_.a)(Object(_.a)({},e),{},{children:Object(x.jsx)("img",{src:t.url_img,width:200,alt:"Imagem do Livro"})}))},children:Object(x.jsx)(A.a,{})})]})})}),Object(x.jsx)(S.a.Body,{children:Object(x.jsxs)(I.a,{method:"post",children:[Object(x.jsxs)(I.a.Group,{controlId:"nome",children:[Object(x.jsx)(I.a.Label,{children:"Nome"}),Object(x.jsx)(I.a.Control,{name:"nome",type:"text",value:t.nome,onChange:te,isInvalid:!!Z.nome}),Object(x.jsx)(I.a.Control.Feedback,{type:"invalid",children:Z.nome})]}),Object(x.jsxs)(I.a.Group,{controlId:"autor",children:[Object(x.jsx)(I.a.Label,{children:"Autor"}),Object(x.jsx)(I.a.Control,{name:"autor",type:"text",value:t.autor,onChange:te,isInvalid:!!Z.autor}),Object(x.jsx)(I.a.Control.Feedback,{type:"invalid",children:Z.autor})]}),Object(x.jsxs)(I.a.Group,{controlId:"genero",children:[Object(x.jsx)(I.a.Label,{children:"Genero"}),Object(x.jsx)(I.a.Control,{name:"genero",type:"text",value:t.genero,onChange:te,isInvalid:!!Z.genero}),Object(x.jsx)(I.a.Control.Feedback,{type:"invalid",children:Z.genero})]}),Object(x.jsxs)(I.a.Group,{controlId:"ano_lancamento",children:[Object(x.jsx)(I.a.Label,{children:"Ano de Lan\xe7amento"}),Object(x.jsx)(I.a.Control,{name:"ano_lancamento",type:"number",value:t.ano_lancamento,onChange:te,isInvalid:!!Z.ano_lancamento}),Object(x.jsx)(I.a.Control.Feedback,{type:"invalid",children:Z.ano_lancamento})]}),Object(x.jsxs)(I.a.Group,{controlId:"url_img",children:[Object(x.jsx)(I.a.Label,{children:"Url Imagem"}),Object(x.jsx)(I.a.Control,{name:"url_img",type:"text",value:t.url_img,onChange:te,isInvalid:!!Z.url_img}),Object(x.jsx)(I.a.Control.Feedback,{type:"invalid",children:Z.url_img})]}),Object(x.jsxs)(I.a.Group,{controlId:"link_compra",children:[Object(x.jsx)(I.a.Label,{children:"Link Compra"}),Object(x.jsx)(I.a.Control,{name:"link_compra",type:"text",value:t.link_compra,onChange:te,isInvalid:!!Z.link_compra}),Object(x.jsx)(I.a.Control.Feedback,{type:"invalid",children:Z.link_compra}),Object(x.jsx)(d.a,{inline:!0,variant:"outline-info",title:"Link Compra",onClick:function(){return J(!0)},children:"Link Compra"})]})]})}),Object(x.jsxs)(S.a.Footer,{children:[Object(x.jsx)(d.a,{className:"mr-auto",variant:"danger",title:"Cancelar",onClick:function(){q(!0),f(!1)},children:"Excluir"}),Object(x.jsx)(d.a,{variant:"success",type:"submit",title:"Salvar o registro",onClick:function(e){!function(e){oe.apply(this,arguments)}(e)},children:T?"Salvando...":"Salvar"}),"\xa0",Object(x.jsx)(d.a,{variant:"primary",type:"button",title:"Cancelar",onClick:function(e){f(!1)},children:"Cancelar"})]})]}),Object(x.jsxs)(S.a,{animation:!1,show:M,backdrop:"static",onHide:function(){return q(!1)},children:[Object(x.jsx)(S.a.Header,{children:Object(x.jsx)(S.a.Title,{children:"Confirma\xe7\xe3o da Exclus\xe3o"})}),Object(x.jsx)(S.a.Body,{children:"Confirma a exclus\xe3o do livro exibido?"}),Object(x.jsxs)(S.a.Footer,{children:[Object(x.jsx)(d.a,{variant:"danger",onClick:function(){return q(!M)},children:"\u274cCancelar"}),Object(x.jsx)(d.a,{variant:"success",onClick:function(){q(!M),function(){ce.apply(this,arguments)}()},children:"\u2714\ufe0fConfirmar"})]})]}),Object(x.jsxs)(N.a,{onClose:function(){return W("")},show:V.length>0,animation:!1,delay:4e3,autohide:!0,className:"bg-success",style:{position:"absolute",top:10,right:10},children:[Object(x.jsx)(N.a.Header,{children:"Aviso"}),Object(x.jsx)(N.a.Body,{className:"text-light",children:V})]}),Object(x.jsx)(g,{})]})})}),E=t(69),T=function(){var e={nome:"",autor:"",genero:"",ano_lancamento:"",url_img:"",link_compra:""},n=Object(a.useState)([]),t=Object(L.a)(n,2),o=t[0],c=t[1],r=Object(a.useState)(!1),i=Object(L.a)(r,2),s=i[0],b=i[1],u=Object(a.useState)(""),m=Object(L.a)(u,2),h=m[0],O=m[1],v=Object(a.useState)({}),f=Object(L.a)(v,2),S=f[0],G=f[1];Object(a.useEffect)((function(){document.title="BookRead"}),[]);var T=function(e){c(Object(_.a)(Object(_.a)({},o),{},Object(y.a)({},e.target.name,e.target.value))),G({})},R=function(){var e={};return(!o.nome||""===o.nome||o.nome.length>50||o.nome.length<1)&&(e.nome="O nome deve ter entre 1 a 50 caracteres"),(!o.autor||""===o.autor||o.autor.length>50||o.autor.length<1)&&(e.autor="O nome do autor deve ter entre 1 a 50 caracteres"),(!o.genero||""===o.genero||o.genero.length>50||o.genero.length<1)&&(e.genero="O genero deve ter entre 1 a 40 caracteres"),(!o.ano_lancamento||""===o.ano_lancamento||o.ano_lancamento.length>4||o.ano_lancamento.length<1)&&(e.ano_lancamento="O ano de lan\xe7amento deve ter pelo menos 1 caracter e no maximo 4"),o.url_img&&""!==o.url_img||(e.url_img="A URL de imagem n\xe3o pode ser vazio"),o.link_compra&&""!==o.link_compra||(e.link_compra="O link de compra n\xe3o pode ser vazio"),e};function H(){return(H=Object(C.a)(k.a.mark((function n(t){var a,r;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),a=R(),!(Object.keys(a).length>0)){n.next=6;break}G(a),n.next=11;break;case 6:return b(!0),r="".concat(B,"/livros"),n.next=10,fetch(r,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(e){return e.json()})).then((function(n){n._id||n.message?O("Livro salvo com sucesso"):O(""),c(e)})).catch((function(e){console.error("Erro ao salvar o livro: ".concat(e.message))}));case 10:b(!1);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(l.a,{fluid:!0,style:{padding:0},children:[Object(x.jsx)(p,{}),Object(x.jsx)(j.a,{className:"justify-content-md-center",style:{margin:0},children:Object(x.jsx)("h3",{children:"Adicionar Livro"})}),Object(x.jsx)(j.a,{className:"justify-content-md-center",style:{margin:0},children:Object(x.jsx)(E.a,{lg:6,xs:12,children:Object(x.jsxs)(I.a,{method:"post",children:[Object(x.jsxs)(I.a.Group,{controlId:"nome",children:[Object(x.jsx)(I.a.Label,{children:"Nome"}),Object(x.jsx)(I.a.Control,{name:"nome",type:"text",value:o.nome,onChange:T,isInvalid:!!S.nome}),Object(x.jsx)(I.a.Control.Feedback,{type:"invalid",children:S.nome})]}),Object(x.jsxs)(I.a.Group,{controlId:"autor",children:[Object(x.jsx)(I.a.Label,{children:"Autor"}),Object(x.jsx)(I.a.Control,{name:"autor",type:"text",value:o.autor,onChange:T,isInvalid:!!S.autor}),Object(x.jsx)(I.a.Control.Feedback,{type:"invalid",children:S.autor})]}),Object(x.jsxs)(I.a.Group,{controlId:"genero",children:[Object(x.jsx)(I.a.Label,{children:"Genero"}),Object(x.jsx)(I.a.Control,{name:"genero",type:"text",value:o.genero,onChange:T,isInvalid:!!S.genero}),Object(x.jsx)(I.a.Control.Feedback,{type:"invalid",children:S.genero})]}),Object(x.jsxs)(I.a.Group,{controlId:"ano_lancamento",children:[Object(x.jsx)(I.a.Label,{children:"Ano de Lan\xe7amento"}),Object(x.jsx)(I.a.Control,{name:"ano_lancamento",type:"number",value:o.ano_lancamento,onChange:T,isInvalid:!!S.ano_lancamento}),Object(x.jsx)(I.a.Control.Feedback,{type:"invalid",children:S.ano_lancamento})]}),Object(x.jsxs)(I.a.Group,{controlId:"url_img",children:[Object(x.jsxs)(I.a.Label,{children:["Url Imagem",Object(x.jsx)(w.a,{placement:"right",delay:{show:100,hide:100},overlay:function(e){return Object(x.jsx)(F.a,Object(_.a)(Object(_.a)({},e),{},{children:Object(x.jsx)("img",{src:o.url_img,width:200,alt:"Imagem do Livro"})}))},children:Object(x.jsx)(A.a,{})})]}),Object(x.jsx)(I.a.Control,{name:"url_img",type:"text",value:o.url_img,onChange:T,isInvalid:!!S.url_img}),Object(x.jsx)(I.a.Control.Feedback,{type:"invalid",children:S.url_img})]}),Object(x.jsxs)(I.a.Group,{controlId:"link_compra",children:[Object(x.jsx)(I.a.Label,{children:"Link Compra"}),Object(x.jsx)(I.a.Control,{name:"link_compra",type:"text",value:o.link_compra,onChange:T,isInvalid:!!S.link_compra}),Object(x.jsx)(I.a.Control.Feedback,{type:"invalid",children:S.link_compra})]}),Object(x.jsx)(d.a,{variant:"primary",type:"button",title:"Limpar",onClick:function(){return c(e)},children:"Limpar"}),"\xa0",Object(x.jsx)(d.a,{variant:"success",type:"submit",title:"Salvar o registro",onClick:function(e){!function(e){H.apply(this,arguments)}(e)},children:s?"Salvando...":"Salvar"})]})})}),Object(x.jsxs)(N.a,{onClose:function(){return O("")},show:h.length>0,animation:!1,delay:4e3,autohide:!0,className:"bg-success",style:{position:"absolute",top:10,right:10},children:[Object(x.jsx)(N.a.Header,{children:"Aviso"}),Object(x.jsx)(N.a.Body,{className:"text-light",children:h})]}),Object(x.jsx)(g,{})]})})};function R(){return Object(x.jsx)(i.a,{children:Object(x.jsxs)(s.c,{children:[Object(x.jsx)(s.a,{exact:!0,path:"/",component:v}),Object(x.jsx)(s.a,{exact:!0,path:"/livros",component:G}),Object(x.jsx)(s.a,{exact:!0,path:"/livros/adicionar",component:T})]})})}var H=function(){return Object(x.jsx)(R,{})};r.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(H,{})}),document.getElementById("root"))},84:function(e,n,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.7ea88813.chunk.js.map