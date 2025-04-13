import{r as P,G as ne,as as Ct,a as ie,at as St,au as bt,a3 as Oe,J as u,af as k,k as s,ak as ee,av as Ot,aw as ve,ax as Lt,ad as lt,ay as st,az as Le,aA as Ze,aB as ot,M as It,aC as Mt,q as $t,D as Ce,e as x,N as _e,s as D,f as U,h,g as f,L as V,j as c,$ as m,I as w,K as v,t as y,F as te,B as Ee,o as R,v as Fe,P as ht,aD as Et,O as Me,R as Ie,w as Be,C as it,Q as ct,n as et}from"./app-CrvaeZra.js";import"./constants-DgoLmzql.js";import{D as d,a as Ve}from"./DatabaseType-25kBBVgA.js";import{b as Ye}from"./viewUtil-DCbZMcCo.js";import{c as Se}from"./codemirror-CTzG3qrd.js";import{E as $e}from"./index-D0x6NhgQ.js";import{E as he,a as ge}from"./index-DHFpw2B2.js";import{E as ut}from"./index-Dr81pKWW.js";import{E as fe,a as we}from"./index-CA5ENLEs.js";import{a as We,E as Ge}from"./index-DWVKu4oX.js";import{A as tt}from"./arrayUtil-CzswX_vs.js";import{E as gt}from"./index-4QIWyZP7.js";import{S as Y}from"./stringBuilder-DUZQE8vS.js";import{g as re,c as J,a as ft,i as wt,b as Te,E as Dt}from"./wrapper-D1_8DVyj.js";import{l as Ut}from"./common_view_utils-CNUf_t_L.js";import"./index-CGtBesQq.js";import"./_baseIteratee-I4jn1rod.js";import"./isEqual-CI57ebgG.js";import"./merge-VDnJkgEN.js";import"./_initCloneObject-CqBpyGcW.js";import"./isArrayLikeObject-Bza4ElQd.js";import"./castArray-Bw1xMsKS.js";import"./clone-DVYh2Aeu.js";import"./_baseClone-B0T5KvB6.js";import"./index-DFnwKXRk.js";import"./index-BM16nDTw.js";import"./_baseFindIndex-D7XfJLKM.js";import"./objectUtil-Z6JRxuBJ.js";function yt(o){let e;const t=P(!1),n=ne({...o,originalPosition:"",originalOverflow:"",visible:!1});function r(_){n.text=_}function l(){const _=n.parent,b=C.ns;if(!_.vLoadingAddClassList){let I=_.getAttribute("loading-number");I=Number.parseInt(I)-1,I?_.setAttribute("loading-number",I.toString()):(ve(_,b.bm("parent","relative")),_.removeAttribute("loading-number")),ve(_,b.bm("parent","hidden"))}a(),A.unmount()}function a(){var _,b;(b=(_=C.$el)==null?void 0:_.parentNode)==null||b.removeChild(C.$el)}function E(){var _;o.beforeClose&&!o.beforeClose()||(t.value=!0,clearTimeout(e),e=window.setTimeout(i,400),n.visible=!1,(_=o.closed)==null||_.call(o))}function i(){if(!t.value)return;const _=n.parent;t.value=!1,_.vLoadingAddClassList=void 0,l()}const T=ie({name:"ElLoading",setup(_,{expose:b}){const{ns:I,zIndex:N}=bt("loading");return b({ns:I,zIndex:N}),()=>{const S=n.spinner||n.svg,g=Oe("svg",{class:"circular",viewBox:n.svgViewBox?n.svgViewBox:"0 0 50 50",...S?{innerHTML:S}:{}},[Oe("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),F=n.text?Oe("p",{class:I.b("text")},[n.text]):void 0;return Oe(Ot,{name:I.b("fade"),onAfterLeave:i},{default:u(()=>[k(s("div",{style:{backgroundColor:n.background||""},class:[I.b("mask"),n.customClass,n.fullscreen?"is-fullscreen":""]},[Oe("div",{class:I.b("spinner")},[g,F])]),[[ee,n.visible]])])})}}}),A=Ct(T),C=A.mount(document.createElement("div"));return{...St(n),setText:r,removeElLoadingChild:a,close:E,handleAfterLeave:i,vm:C,get $el(){return C.$el}}}let Ue;const vt=function(o={}){if(!Lt)return;const e=Bt(o);if(e.fullscreen&&Ue)return Ue;const t=yt({...e,closed:()=>{var r;(r=e.closed)==null||r.call(e),e.fullscreen&&(Ue=void 0)}});Ft(e,e.parent,t),nt(e,e.parent,t),e.parent.vLoadingAddClassList=()=>nt(e,e.parent,t);let n=e.parent.getAttribute("loading-number");return n?n=`${Number.parseInt(n)+1}`:n="1",e.parent.setAttribute("loading-number",n),e.parent.appendChild(t.$el),lt(()=>t.visible.value=e.visible),e.fullscreen&&(Ue=t),t},Bt=o=>{var e,t,n,r;let l;return st(o.target)?l=(e=document.querySelector(o.target))!=null?e:document.body:l=o.target||document.body,{parent:l===document.body||o.body?document.body:l,background:o.background||"",svg:o.svg||"",svgViewBox:o.svgViewBox||"",spinner:o.spinner||!1,text:o.text||"",fullscreen:l===document.body&&((t=o.fullscreen)!=null?t:!0),lock:(n=o.lock)!=null?n:!1,customClass:o.customClass||"",visible:(r=o.visible)!=null?r:!0,target:l}},Ft=async(o,e,t)=>{const{nextZIndex:n}=t.vm.zIndex||t.vm._.exposed.zIndex,r={};if(o.fullscreen)t.originalPosition.value=Le(document.body,"position"),t.originalOverflow.value=Le(document.body,"overflow"),r.zIndex=n();else if(o.parent===document.body){t.originalPosition.value=Le(document.body,"position"),await lt();for(const l of["top","left"]){const a=l==="top"?"scrollTop":"scrollLeft";r[l]=`${o.target.getBoundingClientRect()[l]+document.body[a]+document.documentElement[a]-Number.parseInt(Le(document.body,`margin-${l}`),10)}px`}for(const l of["height","width"])r[l]=`${o.target.getBoundingClientRect()[l]}px`}else t.originalPosition.value=Le(e,"position");for(const[l,a]of Object.entries(r))t.$el.style[l]=a},nt=(o,e,t)=>{const n=t.vm.ns||t.vm._.exposed.ns;["absolute","fixed","sticky"].includes(t.originalPosition.value)?ve(e,n.bm("parent","relative")):Ze(e,n.bm("parent","relative")),o.fullscreen&&o.lock?Ze(e,n.bm("parent","hidden")):ve(e,n.bm("parent","hidden"))},ye=Symbol("ElLoading"),at=(o,e)=>{var t,n,r,l;const a=e.instance,E=_=>ot(e.value)?e.value[_]:void 0,i=_=>{const b=st(_)&&(a==null?void 0:a[_])||_;return b&&P(b)},T=_=>i(E(_)||o.getAttribute(`element-loading-${Mt(_)}`)),A=(t=E("fullscreen"))!=null?t:e.modifiers.fullscreen,C={text:T("text"),svg:T("svg"),svgViewBox:T("svgViewBox"),spinner:T("spinner"),background:T("background"),customClass:T("customClass"),fullscreen:A,target:(n=E("target"))!=null?n:A?void 0:o,body:(r=E("body"))!=null?r:e.modifiers.body,lock:(l=E("lock"))!=null?l:e.modifiers.lock};o[ye]={options:C,instance:vt(C)}},Ht=(o,e)=>{for(const t of Object.keys(e))It(e[t])&&(e[t].value=o[t])},be={mounted(o,e){e.value&&at(o,e)},updated(o,e){const t=o[ye];e.oldValue!==e.value&&(e.value&&!e.oldValue?at(o,e):e.value&&e.oldValue?ot(e.value)&&Ht(e.value,t.options):t==null||t.instance.close())},unmounted(o){var e;(e=o[ye])==null||e.instance.close(),o[ye]=null}},de=$t("design",{state:()=>({schema:"",table:"",columns:[],tableMeta:{},dbType:d.MYSQL,dialect:null,remainHeight:0,activePanel:"column"}),getters:{canAlterTable(o){return![d.SQLITE].includes(o.dbType)},supportForeignKey(o){return o.dbType==d.DUCK_DB||!Ve(o.dbType)&&(!o.tableMeta.engine||o.tableMeta.engine!="MyISAM")},supportCheck(o){return![d.D1,d.SQLITE,d.DUCK_DB,d.SNOWFLAKE].includes(o.dbType)&&!Ve(o.dbType)},supportTrigger(o){return!Ve(o.dbType)},supportIndex(o){return![d.SNOWFLAKE,d.DATABRICKS,d.ATHENA,d.BIG_QUERY,d.PRESTO,d.TRINO].includes(o.dbType)}},actions:{updateDBType(o){this.dbType=o},updateFullInfo(o){for(const e in o)this[e]=o[e]}}}),Pt={class:"design-toolbar"},xt={class:"text-center"},kt=ie({__name:"IndexPanel",setup(o){const e=P([]),t=P([]),n=P(!0),r=de(),{dbType:l,dialect:a,remainHeight:E,activePanel:i}=Ce(r),T={visible:!1,loading:!1,column:null,columns:null,type:"INDEX"},A=ne({...T}),C=x(()=>{var g;return((g=A.columns)==null?void 0:g.length)>0?a.value.newIndex({...A}):""});_e(()=>{D.on("designMetaNext",()=>{A.visible=!1,t.value=a.value.indexTypes(),_()}).on("indexes",g=>{e.value=g,n.value=!1}).on("success",g=>{g=="index"&&(A.loading=!1,A.visible=!1,_())}).on("error",()=>{A.loading=!1})});const _=()=>{D.emit("indexes"),n.value=!0},b=()=>{Object.assign(A,T),A.visible=!0,A.loading=!1},I=g=>a.value.formatIndexType(g),N=()=>{A.loading=!0,D.emit("execute",{type:"index",sql:C.value})},S=g=>{Fe(m("design.deleteIndexConfirm")).then(()=>{D.emit("execute",{type:"index",sql:a.value.dropIndex(g.index_name)})})};return(g,F)=>{const G=V("vsc-button"),B=V("vsc-tooltip"),M=ge,q=ut,Q=he,j=V("RedMark"),K=Ge,le=We,W=we,X=fe,se=$e,Re=be;return R(),U("div",null,[h("div",Pt,[s(B,{title:c(m)("common.new")},{default:u(()=>[["ClickHouse"].includes(c(l))?f("",!0):(R(),w(G,{key:0,type:"icon",icon:"codicon-add text-base",onClick:b}))]),_:1},8,["title"]),s(B,{title:c(m)("common.refresh")},{default:u(()=>[s(G,{type:"icon",icon:"codicon-refresh text-base",onClick:_})]),_:1},8,["title"])]),c(i)=="index"?k((R(),w(Q,{key:0,data:e.value,height:c(E),border:""},{default:u(()=>[s(M,{resizable:!0,align:"center",prop:"index_name",label:c(m)("design.indexName"),width:"200"},null,8,["label"]),s(M,{resizable:!0,align:"center",prop:"column_name",label:c(m)("design.column"),width:"200"},null,8,["label"]),s(M,{align:"center",prop:"isUnique",label:c(m)("design.unique"),width:"200"},{default:u(({row:H})=>[s(q,{disabled:"","model-value":c(Ye)(H.isUnique)},null,8,["model-value"])]),_:1},8,["label"]),s(M,{resizable:!0,align:"center",prop:"index_type",label:c(m)("common.type"),width:"200"},{default:u(({row:H})=>[v(y(I(H)),1)]),_:1},8,["label"]),["PostgreSQL"].includes(c(l))?(R(),w(M,{key:0,resizable:!0,align:"center",prop:"index_method",label:c(m)("design.indexMethod"),width:"200"},null,8,["label"])):f("",!0),["ClickHouse"].includes(c(l))?f("",!0):(R(),w(M,{key:1,label:c(m)("design.operation"),width:"120"},{default:u(({row:H})=>[h("div",xt,[s(G,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:Ae=>S(H)},null,8,["onClick"])])]),_:1},8,["label"]))]),_:1},8,["data","height"])),[[Re,n.value]]):f("",!0),s(se,{modelValue:A.visible,"onUpdate:modelValue":F[3]||(F[3]=H=>A.visible=H),"show-close":!1,title:c(m)("design.newIndex"),width:"520px",closeOnClickModal:!1,center:""},{footer:u(()=>[s(G,{type:"secondary",onClick:F[2]||(F[2]=H=>A.visible=!1)},{default:u(()=>[v(y(c(m)("common.cancel")),1)]),_:1}),s(G,{type:"primary",loading:A.loading,onClick:N},{default:u(()=>[v(y(c(m)("common.ok")),1)]),_:1},8,["loading"]),F[4]||(F[4]=h("br",null,null,-1)),F[5]||(F[5]=v()),F[6]||(F[6]=h("br",null,null,-1)),k(s(Se,{ref:"cmEditor",value:C.value,readonly:!0},null,8,["value"]),[[ee,C.value]])]),default:u(()=>[s(X,{inline:!0,"label-width":"75px",size:"small"},{default:u(()=>[s(W,null,{label:u(()=>[s(j),v(y(c(m)("design.column")),1)]),default:u(()=>[s(le,{modelValue:A.columns,"onUpdate:modelValue":F[0]||(F[0]=H=>A.columns=H),size:"small",filterable:"",multiple:"",class:"!w-[150px]"},{default:u(()=>[(R(!0),U(te,null,Ee(c(r).columns,H=>(R(),w(K,{key:H.name,label:H.name,value:H.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(W,null,{label:u(()=>[s(j),v(y(c(m)("common.type")),1)]),default:u(()=>[s(le,{modelValue:A.type,"onUpdate:modelValue":F[1]||(F[1]=H=>A.type=H),size:"small",class:"!w-[110px]"},{default:u(()=>[(R(!0),U(te,null,Ee(t.value,(H,Ae)=>(R(),w(K,{key:Ae,label:H.label,value:H.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}}}),Vt={ref:"infoPanel",class:"design-toolbar"},Yt=ie({__name:"DDL",setup(o){const e=de(),t=P(!1),n=P("");_e(()=>{D.on("designMetaNext",()=>{D.emit("ddl")}).on("ddl",({ddl:l})=>{t.value=!1,n.value=l})});const r=()=>{navigator.clipboard.writeText(n.value),Et("Copy DDL success!")};return(l,a)=>{const E=V("vsc-button"),i=V("vsc-tooltip"),T=be;return k((R(),U("div",null,[h("div",Vt,[s(i,{title:"Copy DDL"},{default:u(()=>[s(E,{type:"icon",icon:"el-icon-document-copy text-base",onClick:r})]),_:1}),s(i,{title:l.$t("common.refresh")},{default:u(()=>[s(E,{type:"icon",icon:"codicon-refresh text-base",onClick:a[0]||(a[0]=A=>c(D).emit("ddl"))})]),_:1},8,["title"])],512),c(e).activePanel=="ddl"?(R(),w(Se,{key:0,dbType:c(e).dbType,value:n.value,readonly:!0,style:ht({maxHeight:c(e).remainHeight+"px",overflow:"auto"}),class:"large"},null,8,["dbType","value","style"])):f("",!0)])),[[T,t.value]])}}}),Wt={key:0,class:"design-toolbar"},Gt={class:"text-center"},qt=ie({__name:"ForeignKey",setup(o){const e=de(),{dialect:t,canAlterTable:n,remainHeight:r,activePanel:l}=Ce(e),a=P([]),E=P([]),i=P([]),T=P([]),A=P(!0),C=ne({visible:!1,loading:!1}),_={column:null,refTable:null,refColumn:null,foreignKeyName:null,onUpdate:"NO ACTION",onDelete:"NO ACTION"},b=ne({..._}),I=x(()=>{const{column:B,refTable:M,refColumn:q}=b;return B||M||q?t.value.newForeignKey(b):""});_e(()=>{D.on("designMetaNext",()=>{C.visible=!1,T.value=t.value.strategies(),S(),D.emit("tables")}).on("foreignKeys",B=>{A.value=!1,a.value=B}).on("columnsById",B=>{b.refColumn="",i.value=B}).on("success",B=>{B=="fk"&&(C.loading=!1,C.visible=!1,S())}).on("error",()=>{C.loading=!1}).on("tables",B=>{E.value=B})});const N=B=>{D.emit("columnsById",B)},S=()=>{const B=t.value.showForeignKeys();B&&(A.value=!0,D.emit("foreignKeys",B))},g=()=>{Object.assign(b,_),C.visible=!0,C.loading=!1},F=()=>{C.loading=!0,D.emit("execute",{type:"fk",sql:I.value})},G=B=>{Fe(m("design.deleteFkConfirm")).then(()=>{D.emit("execute",{type:"fk",sql:t.value.dropForeignKey(B.constraint_name)})})};return(B,M)=>{const q=V("vsc-button"),Q=V("vsc-tooltip"),j=ge,K=he,le=V("RedMark"),W=Ge,X=We,se=we,Re=Me,H=fe,Ae=$e,ke=be;return R(),U("div",null,[c(n)?(R(),U("div",Wt,[s(Q,{title:c(m)("common.new")},{default:u(()=>[s(q,{type:"icon",icon:"codicon-add text-base",onClick:g})]),_:1},8,["title"]),s(Q,{title:c(m)("common.refresh")},{default:u(()=>[s(q,{type:"icon",icon:"codicon-refresh text-base",onClick:S})]),_:1},8,["title"])])):f("",!0),c(l)=="foreignKey"?k((R(),w(K,{key:1,data:a.value,style:{width:"100%"},height:c(r),border:""},{default:u(()=>[c(n)?(R(),w(j,{key:0,resizable:!0,align:"center",prop:"constraint_name",label:c(m)("design.constraintName"),width:"150"},null,8,["label"])):f("",!0),s(j,{resizable:!0,align:"center",prop:"column_name",label:c(m)("design.column"),width:"150"},null,8,["label"]),s(j,{resizable:!0,align:"center",prop:"referenced_table",label:c(m)("design.referencedTable"),width:"150"},null,8,["label"]),s(j,{resizable:!0,align:"center",prop:"referenced_column",label:c(m)("design.referencedColumn"),width:"155"},null,8,["label"]),s(j,{align:"center",prop:"updateRule",label:c(m)("design.updateRule"),width:"150"},null,8,["label"]),s(j,{align:"center",prop:"deleteRule",label:c(m)("design.deleteRule"),width:"150"},null,8,["label"]),c(n)?(R(),w(j,{key:1,label:c(m)("design.operation"),width:"120"},{default:u(({row:$})=>[h("div",Gt,[s(q,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:O=>G($)},null,8,["onClick"])])]),_:1},8,["label"])):f("",!0)]),_:1},8,["data","height"])),[[ke,A.value]]):f("",!0),s(Ae,{modelValue:C.visible,"onUpdate:modelValue":M[7]||(M[7]=$=>C.visible=$),"show-close":!1,title:c(m)("design.newForeignKey"),width:"780px",closeOnClickModal:!1,"close-on-press-escape":!1,center:""},{footer:u(()=>[s(q,{type:"secondary",onClick:M[6]||(M[6]=$=>C.visible=!1)},{default:u(()=>[v(y(c(m)("common.cancel")),1)]),_:1}),s(q,{type:"primary",loading:C.loading,onClick:F},{default:u(()=>[v(y(c(m)("common.ok")),1)]),_:1},8,["loading"]),M[9]||(M[9]=h("br",null,null,-1)),M[10]||(M[10]=v()),M[11]||(M[11]=h("br",null,null,-1)),k(s(Se,{ref:"cmEditor",value:I.value,readonly:!0},null,8,["value"]),[[ee,I.value]])]),default:u(()=>[s(H,{inline:!0,"label-width":"150px","label-position":"left",size:"small"},{default:u(()=>[s(se,null,{label:u(()=>[s(le),v(y(c(m)("design.column")),1)]),default:u(()=>[s(X,{modelValue:b.column,"onUpdate:modelValue":M[0]||(M[0]=$=>b.column=$),size:"small",filterable:"",class:"!w-[170px] mr-4"},{default:u(()=>[(R(!0),U(te,null,Ee(c(e).columns,$=>(R(),w(W,{key:$.name,label:$.name,value:$.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(se,null,{label:u(()=>[v(y(c(m)("design.constraintName")),1)]),default:u(()=>[s(Re,{modelValue:b.foreignKeyName,"onUpdate:modelValue":M[1]||(M[1]=$=>b.foreignKeyName=$),class:"!w-[170px]"},null,8,["modelValue"])]),_:1}),M[8]||(M[8]=h("br",null,null,-1)),s(se,null,{label:u(()=>[s(le),v(y(c(m)("design.referencedTable")),1)]),default:u(()=>[s(X,{modelValue:b.refTable,"onUpdate:modelValue":M[2]||(M[2]=$=>b.refTable=$),size:"small",filterable:"",class:"!w-[170px] mr-4"},{default:u(()=>[(R(!0),U(te,null,Ee(E.value,$=>(R(),w(W,{key:$.name,label:$.name,value:$.name,onClick:O=>N($.id)},null,8,["label","value","onClick"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(se,null,{label:u(()=>[s(le),v(y(c(m)("design.referencedColumn")),1)]),default:u(()=>[s(X,{modelValue:b.refColumn,"onUpdate:modelValue":M[3]||(M[3]=$=>b.refColumn=$),size:"small",filterable:"",class:"!w-[170px]"},{default:u(()=>[(R(!0),U(te,null,Ee(i.value,$=>(R(),w(W,{key:$.name,label:$.name,value:$.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(se,{label:"On Update"},{default:u(()=>[s(X,{modelValue:b.onUpdate,"onUpdate:modelValue":M[4]||(M[4]=$=>b.onUpdate=$),size:"small",filterable:"",class:"!w-[170px] mr-4"},{default:u(()=>[(R(!0),U(te,null,Ee(T.value,$=>(R(),w(W,{key:$,label:$,value:$},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(se,{label:"On Delete"},{default:u(()=>[s(X,{modelValue:b.onDelete,"onUpdate:modelValue":M[5]||(M[5]=$=>b.onDelete=$),size:"small",filterable:"",class:"!w-[170px]"},{default:u(()=>[(R(!0),U(te,null,Ee(T.value,$=>(R(),w(W,{key:$,label:$,value:$},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}}}),jt={key:0,ref:"infoPanel",class:"design-toolbar"},Kt=["title"],Qt={class:"text-center"},Jt={class:"max-h-[300px] overflow-y-auto"},Xt=["onClick"],zt=ie({__name:"ColumnPanel",setup(o){const e=de(),{dbType:t,columns:n,dialect:r,canAlterTable:l,remainHeight:a,activePanel:E}=Ce(e),i=ne({visible:!1,inputting:!1}),T=x(()=>r.value.columnTypes()),A=P([]),C=P(!1),_=P(!0),b=P([]),I={name:"",type:"",unsigned:null,zerofill:null,comment:null,isNotNull:null,defaultValue:null,useCurrentTimestamp:null},N=ne({...I}),S=ne({isNew:!0,editDisable:!1,editVisible:!1,editLoading:!1}),g=x(()=>{var O,L;return B.value&&((L=(O=N.type)==null?void 0:O.match)==null?void 0:L.call(O,/(\bint|decimal|float|double)/i))}),F=x(()=>{var O,L;return B.value&&((L=(O=N.type)==null?void 0:O.match)==null?void 0:L.call(O,/timestamp/i))}),G=x(()=>window.innerWidth<=1200),B=x(()=>["MySQL","Doris","MariaDB"].includes(t.value)),M=x(()=>{const O=S.isNew?"design.newColumn":"design.updateColumn";return m(O)}),q=x(()=>i.inputting&&N.type?T.value.filter(O=>(O.label||O).match(new RegExp(N.type,"i"))):T.value),Q=x(()=>{if(S.isNew){const{name:O,type:L}=N;return O&&L?r.value.newColumn(N):""}g.value||(N.zerofill=!1,N.unsigned=!1),F.value||(N.useCurrentTimestamp=!1);try{return r.value.updateColumn({newColumnName:N.name,columnType:N.type,nullable:!N.isNotNull,...N})}catch(O){return console.error(O),S.editDisable=!0,O}}),j=x(()=>[d.MYSQL,d.MARIA_DB,d.PG,d.DB2].includes(t.value));_e(()=>{D.on("designMetaNext",O=>{b.value=tt.clone(O.columns),S.editVisible=!1,_.value=!1}).on("columns",O=>{b.value=tt.clone(O),_.value=!1}).on("indexes",O=>{C.value=!0,A.value=O.filter(L=>Ye(L.isUnique)).map(L=>L.column_name)}).on("success",O=>{O=="column"&&(S.editLoading=!1,S.editVisible=!1,X())}).on("error",()=>{S.editLoading=!1,X()})});const K=(...O)=>!O.includes(t.value),le=O=>{O&&(N.defaultValue="CURRENT_TIMESTAMP")},W=()=>{const O=q.value[0];O&&(N.type=O.value||O,i.visible=!1)},X=()=>{D.emit("columns"),_.value=!0},se=()=>{Object.assign(N,I),S.isNew=!0,S.editVisible=!0},Re=O=>{Object.assign(N,{...O,columnName:O.name,oldRow:O}),S.isNew=!1,S.editVisible=!0,S.editDisable=!1,S.editLoading=!1},H=(O,L)=>{S.isNew=!1,Object.assign(N,{...O,columnName:O.name,oldRow:b.value[L]}),Ae()},Ae=()=>{if(!Q.value)return Be("No any change!");if(S.editLoading=!0,S.isNew)return ke();try{D.emit("execute",{type:"column",sql:Q.value})}catch(O){Be(O.message),S.editLoading=!1}},ke=()=>{D.emit("execute",{type:"column",sql:Q.value})},$=O=>{Fe(m("design.deleteColumnConfirm")).then(()=>{D.emit("execute",{type:"column",sql:r.value.dropColumn(O.name)})})};return(O,L)=>{const pe=V("vsc-button"),Xe=V("vsc-tooltip"),z=ge,oe=ut,dt=he,ze=V("RedMark"),De=Me,me=we,At=gt,Nt=fe,Rt=$e,pt=be;return R(),U("div",null,[c(l)?(R(),U("div",jt,[s(Xe,{title:c(m)("common.new")},{default:u(()=>[s(pe,{type:"icon",icon:"codicon-add text-base",onClick:se})]),_:1},8,["title"]),s(Xe,{title:c(m)("common.refresh")},{default:u(()=>[s(pe,{type:"icon",icon:"codicon-refresh text-base",onClick:X})]),_:1},8,["title"])],512)):f("",!0),c(E)=="column"?k((R(),w(dt,{key:1,data:c(n),height:c(a),border:"",onRowDblclick:Re},{default:u(()=>[s(z,{resizable:!0,align:"center",prop:"name",label:c(m)("common.name"),width:"180"},null,8,["label"]),s(z,{resizable:!0,align:"center",prop:"type",label:c(m)("common.type"),width:G.value?100:130},null,8,["label","width"]),s(z,{resizable:!0,align:"center",prop:"maximum_length",width:80,label:c(m)("design.length")},null,8,["label"]),["DuckDB"].includes(c(t))?f("",!0):(R(),w(z,{key:0,resizable:!0,align:"center",prop:"comment",label:c(m)("common.comment"),width:"100"},{default:u(({row:p})=>[h("span",{title:p==null?void 0:p.comment},y(p==null?void 0:p.comment),9,Kt)]),_:1},8,["label"])),s(z,{resizable:!0,align:"center",prop:"defaultValue",width:G.value?75:110,label:c(m)("common.default")},null,8,["width","label"]),s(z,{align:"center",label:"Not Null",width:80},{default:u(({row:p,$index:ae})=>[s(oe,{modelValue:p.isNotNull,"onUpdate:modelValue":Z=>p.isNotNull=Z,onChange:Z=>H(p,ae)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),s(z,{align:"center",label:c(m)("design.isPrimary"),width:110},{default:u(({row:p})=>[s(oe,{disabled:"","model-value":p.isPrimary},null,8,["model-value"])]),_:1},8,["label"]),C.value||["MySQL","MariaDB","Doris"].includes(c(t))?(R(),w(z,{key:1,align:"center",label:c(m)("design.isUnique"),width:80},{default:u(({row:p})=>[s(oe,{disabled:"","model-value":p.isUnique||A.value.includes(p.name)},null,8,["model-value"])]),_:1},8,["label"])):f("",!0),["DuckDB"].includes(c(t))?f("",!0):(R(),w(z,{key:2,align:"center",label:c(m)("design.isAutoIncrement"),width:"130"},{default:u(({row:p,$index:ae})=>[s(oe,{modelValue:p.isAutoIncrement,"onUpdate:modelValue":Z=>p.isAutoIncrement=Z,disabled:!p.isPrimary||!j.value,onChange:Z=>H(p,ae)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:1},8,["label"])),["SQLite"].includes(c(t))?f("",!0):(R(),w(z,{key:3,label:c(m)("design.operation"),width:"100"},{default:u(({row:p})=>[h("div",Qt,[s(pe,{type:"icon",icon:"codicon-edit",title:"edit",onClick:ae=>Re(p)},null,8,["onClick"]),s(pe,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:ae=>$(p)},null,8,["onClick"])])]),_:1},8,["label"])),B.value?(R(),U(te,{key:4},[s(z,{align:"center",label:"UNSIGNED",width:"100"},{default:u(({row:p,$index:ae})=>[s(oe,{modelValue:p.unsigned,"onUpdate:modelValue":Z=>p.unsigned=Z,"true-value":"1","false-value":"0",onChange:Z=>H(p,ae)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),s(z,{align:"center",label:"Zerofill",width:"80"},{default:u(({row:p,$index:ae})=>[s(oe,{modelValue:p.zerofill,"onUpdate:modelValue":Z=>p.zerofill=Z,"true-value":"1","false-value":"0",onChange:Z=>H(p,ae)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})],64)):f("",!0)]),_:1},8,["data","height"])),[[pt,_.value]]):f("",!0),s(Rt,{modelValue:S.editVisible,"onUpdate:modelValue":L[12]||(L[12]=p=>S.editVisible=p),"show-close":!1,title:M.value,width:"680px",closeOnClickModal:!1,"close-on-press-escape":!1,center:""},{footer:u(()=>[s(pe,{type:"secondary",onClick:L[11]||(L[11]=p=>S.editVisible=!1)},{default:u(()=>[v(y(c(m)("common.cancel")),1)]),_:1}),s(pe,{type:"primary",loading:S.editLoading,disabled:S.editDisable,onClick:Ae},{default:u(()=>[v(y(c(m)("common.ok")),1)]),_:1},8,["loading","disabled"]),L[14]||(L[14]=h("br",null,null,-1)),L[15]||(L[15]=v()),L[16]||(L[16]=h("br",null,null,-1)),k(s(Se,{ref:"cmEditor",value:Q.value,readonly:!0},null,8,["value"]),[[ee,Q.value]])]),default:u(()=>[s(Nt,{inline:!0,"label-width":"90px",size:"small"},{default:u(()=>[s(me,null,{label:u(()=>[s(ze),v(y(c(m)("common.name")),1)]),default:u(()=>[s(De,{modelValue:N.name,"onUpdate:modelValue":L[0]||(L[0]=p=>N.name=p),size:"small",fixed:""},null,8,["modelValue"])]),_:1}),g.value?(R(),w(me,{key:0,label:"ZEROFILL"},{default:u(()=>[s(oe,{modelValue:N.zerofill,"onUpdate:modelValue":L[1]||(L[1]=p=>N.zerofill=p),"true-value":"1","false-value":"0"},null,8,["modelValue"])]),_:1})):f("",!0),F.value?(R(),w(me,{key:1,label:"CURRENT_TIMESTAMP","label-width":"160px"},{default:u(()=>[s(oe,{modelValue:N.useCurrentTimestamp,"onUpdate:modelValue":L[2]||(L[2]=p=>N.useCurrentTimestamp=p),onChange:le},null,8,["modelValue"])]),_:1})):f("",!0),L[13]||(L[13]=h("br",null,null,-1)),s(me,null,{label:u(()=>[s(ze),v(y(c(m)("common.type")),1)]),default:u(()=>[s(At,{visible:i.visible,"onUpdate:visible":L[6]||(L[6]=p=>i.visible=p),placement:"bottom-start","popper-class":"!p-0",trigger:"click",tabindex:null},{reference:u(()=>[s(De,{modelValue:N.type,"onUpdate:modelValue":L[3]||(L[3]=p=>N.type=p),size:"small",fixed:"",onKeyup:Ie(W,["enter"]),onInput:L[4]||(L[4]=p=>{i.inputting=!0,i.visible=!0}),onClick:L[5]||(L[5]=p=>i.inputting=!1)},null,8,["modelValue"])]),default:u(()=>[h("div",Jt,[(R(!0),U(te,null,Ee(q.value,(p,ae)=>(R(),U(te,null,[p=="hr"?(R(),U("div",{key:ae,class:"w-full type-hr bg-bg"})):(R(),U("div",{key:1,class:"el-select-dropdown__item !h-6 min-w-[190px] bg-[var(--vscode-dropdown-background)]",onClick:Z=>{N.type=p.value||p,i.visible=!1}},y(p.label||p),9,Xt))],64))),256))])]),_:1},8,["visible"])]),_:1}),K("ClickHouse")?(R(),w(me,{key:2,label:c(m)("design.isNotNull")},{default:u(()=>[s(oe,{modelValue:N.isNotNull,"onUpdate:modelValue":L[7]||(L[7]=p=>N.isNotNull=p)},null,8,["modelValue"])]),_:1},8,["label"])):f("",!0),g.value?(R(),w(me,{key:3,label:"UNSIGNED"},{default:u(()=>[s(oe,{modelValue:N.unsigned,"onUpdate:modelValue":L[8]||(L[8]=p=>N.unsigned=p),"true-value":"1","false-value":"0"},null,8,["modelValue"])]),_:1})):f("",!0),!["SqlServer","Snowflake"].includes(c(t))||S.isNew?(R(),w(me,{key:4,label:c(m)("common.default")},{default:u(()=>[s(De,{modelValue:N.defaultValue,"onUpdate:modelValue":L[9]||(L[9]=p=>N.defaultValue=p),size:"small",fixed:""},null,8,["modelValue"])]),_:1},8,["label"])):f("",!0),["DuckDB"].includes(c(t))?f("",!0):(R(),w(me,{key:5,label:c(m)("common.comment")},{default:u(()=>[s(De,{modelValue:N.comment,"onUpdate:modelValue":L[10]||(L[10]=p=>N.comment=p),size:"small",fixed:""},null,8,["modelValue"])]),_:1},8,["label"]))]),_:1})]),_:1},8,["modelValue","title"])])}}}),Zt=it(zt,[["__scopeId","data-v-2591f846"]]),en={class:"ml-4"},tn={class:"flex flex-col gap-y-2"},nn={class:"flex-wrap"},an={class:"inline-block mr-5"},rn={class:"font-bold mr-5 inline-block"},ln={class:"inline-block mr-5"},sn={class:"font-bold mr-5 inline-block"},on={class:"flex-wrap"},En={key:0,class:"inline-block mr-5"},cn={class:"font-bold mr-5 inline-block"},un={key:1,class:"inline-block mr-5"},mn={class:"font-bold mr-5 inline-block"},Tn={class:"inline-block pt-1"},_n=ie({__name:"InfoPanel",setup(o){const e=de(),{dialect:t}=Ce(e),n=P([]),r=ne({name:null,schema:null,newTableName:null,comment:null,newComment:null,collation:null,newCollation:null});_e(()=>{D.on("designMetaNext",a=>{r.name=a.table,r.schema=a.schema,r.newTableName=a.table,r.comment=a.comment,r.newComment=a.comment,r.collation=a.collation,r.newCollation=a.collation}).on("collations",a=>{n.value=a})});const l=()=>{const a={...r,table:r.name};D.emit("updateTable",a);const E=t.value.updateTable(a);E?D.emit("execute",{type:"table",sql:E}):Be("No any change!")};return(a,E)=>{const i=Me,T=Ge,A=We,C=V("vsc-button");return R(),U("div",en,[h("div",tn,[h("div",nn,[h("div",an,[h("label",rn,y(a.$t("design.table")),1),s(i,{modelValue:r.newTableName,"onUpdate:modelValue":E[0]||(E[0]=_=>r.newTableName=_),class:"!w-48",required:"",onKeyup:Ie(l,["enter"])},null,8,["modelValue"])]),h("div",ln,[h("label",sn,y(a.$t("common.comment")),1),s(i,{modelValue:r.newComment,"onUpdate:modelValue":E[1]||(E[1]=_=>r.newComment=_),class:"!w-48",onKeyup:Ie(l,["enter"])},null,8,["modelValue"])])]),h("div",on,[c(e).tableMeta.engine?(R(),U("div",En,[h("label",cn,y(a.$t("design.engine")),1),s(i,{value:c(e).tableMeta.engine,class:"!w-24",disabled:""},null,8,["value"])])):f("",!0),r.collation&&n.value.length>0?(R(),U("div",un,[h("label",mn,y(a.$t("design.collate")),1),s(A,{modelValue:r.newCollation,"onUpdate:modelValue":E[2]||(E[2]=_=>r.newCollation=_),size:"small",filterable:""},{default:u(()=>[(R(!0),U(te,null,Ee(n.value,_=>(R(),w(T,{key:_.name,label:_.name,value:_.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])):f("",!0),h("div",Tn,[s(C,{type:"success",onClick:l},{default:u(()=>[v(y(a.$t("common.update")),1)]),_:1})])])])])}}}),dn={key:0,class:"design-toolbar"},An={class:"text-center"},Nn=ie({__name:"Check",setup(o){const e=de(),{dialect:t,canAlterTable:n,remainHeight:r,activePanel:l}=Ce(e),a=P([]),E=P(!0),i=ne({visible:!1,loading:!1}),T=ne({clause:null}),A=x(()=>T.clause?t.value.newCheck(T.clause):"");_e(()=>{D.on("designMetaNext",N=>{N.isSupportCheck&&(C(),i.visible=!1)}).on("checks",N=>{E.value=!1,a.value=N}).on("success",N=>{N=="check"&&(C(),i.visible=!1,i.loading=!1)}).on("error",()=>{i.loading=!1})});const C=()=>{const N=t.value.showChecks();if(!N){console.log("This database type does not currently support check."),E.value=!1;return}E.value=!0,D.emit("checks",N)},_=()=>{i.visible=!0,i.loading=!1,T.clause=null},b=()=>{i.loading=!0,D.emit("execute",{type:"check",sql:A.value})},I=N=>{Fe(m("design.deleteCheckConfirm")).then(()=>{D.emit("execute",{type:"check",sql:t.value.dropCheck(N.name)})})};return(N,S)=>{const g=V("vsc-button"),F=V("vsc-tooltip"),G=ge,B=he,M=V("RedMark"),q=Me,Q=we,j=fe,K=$e,le=be;return R(),U("div",null,[c(n)?(R(),U("div",dn,[s(F,{title:c(m)("common.new")},{default:u(()=>[s(g,{type:"icon",icon:"codicon-add text-base",onClick:_})]),_:1},8,["title"]),s(F,{title:c(m)("common.refresh")},{default:u(()=>[s(g,{type:"icon",icon:"codicon-refresh text-base",onClick:C})]),_:1},8,["title"])])):f("",!0),c(l)=="check"?k((R(),w(B,{key:1,data:a.value,height:c(r),border:""},{default:u(()=>[c(n)?(R(),w(G,{key:0,resizable:!0,align:"center",prop:"name",label:c(m)("design.constraintName"),width:"200"},null,8,["label"])):f("",!0),s(G,{resizable:!0,align:"center",prop:"clause",label:c(m)("design.clause"),width:"200"},null,8,["label"]),c(n)?(R(),w(G,{key:1,label:c(m)("design.operation"),width:"100"},{default:u(({row:W})=>[h("div",An,[s(g,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:X=>I(W)},null,8,["onClick"])])]),_:1},8,["label"])):f("",!0)]),_:1},8,["data","height"])),[[le,E.value]]):f("",!0),s(K,{modelValue:i.visible,"onUpdate:modelValue":S[3]||(S[3]=W=>i.visible=W),"show-close":!1,title:c(m)("design.newCheck"),width:"430px",closeOnClickModal:!1,"close-on-press-escape":!1,center:""},{footer:u(()=>[s(g,{type:"secondary",onClick:S[2]||(S[2]=W=>i.visible=!1)},{default:u(()=>[v(y(c(m)("common.cancel")),1)]),_:1}),s(g,{type:"primary",loading:i.loading,onClick:b},{default:u(()=>[v(y(c(m)("common.ok")),1)]),_:1},8,["loading"]),S[4]||(S[4]=h("br",null,null,-1)),S[5]||(S[5]=v()),S[6]||(S[6]=h("br",null,null,-1)),k(s(Se,{ref:"cmEditor",value:A.value,readonly:!0},null,8,["value"]),[[ee,A.value]])]),default:u(()=>[s(j,{inline:!0,"label-width":"80px","label-position":"left",onSubmit:S[1]||(S[1]=ct(()=>{},["prevent"])),onKeyup:Ie(b,["enter"])},{default:u(()=>[s(Q,null,{label:u(()=>[s(M),v(y(c(m)("design.clause")),1)]),default:u(()=>[s(q,{modelValue:T.clause,"onUpdate:modelValue":S[0]||(S[0]=W=>T.clause=W),class:"!w-[290px]",size:"small",placeholder:"e.g. id >20 and name!='admin'"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}}}),Rn={key:0,class:"design-toolbar"},pn=ie({__name:"Trigger",setup(o){const e=de(),{dialect:t,canAlterTable:n,remainHeight:r,activePanel:l}=Ce(e),a=P([]),E=P(!0),i=ne({visible:!1,loading:!1}),T=ne({clause:null}),A=x(()=>"");_e(()=>{D.on("designMetaNext",()=>{C(),i.visible=!1}).on("triggers",b=>{E.value=!1,a.value=b}).on("success",b=>{b=="trigger"&&(C(),i.visible=!1,i.loading=!1)}).on("error",()=>{i.loading=!1})});const C=()=>{E.value=!0,D.emit("triggers")},_=()=>{i.loading=!0,D.emit("execute",{type:"trigger",sql:A.value})};return(b,I)=>{const N=V("vsc-button"),S=V("vsc-tooltip"),g=ge,F=he,G=V("RedMark"),B=Me,M=we,q=fe,Q=$e,j=be;return R(),U("div",null,[c(n)?(R(),U("div",Rn,[s(S,{title:c(m)("common.refresh")},{default:u(()=>[s(N,{type:"icon",icon:"codicon-refresh text-base",onClick:C})]),_:1},8,["title"])])):f("",!0),c(l)=="trigger"?k((R(),w(F,{key:1,data:a.value,height:c(r),border:""},{default:u(()=>[s(g,{resizable:!0,align:"center",prop:"trigger_name",label:c(m)("design.triggerName"),width:"200"},null,8,["label"]),s(g,{resizable:!0,align:"center",prop:"timing",label:c(m)("design.timing"),width:"200"},null,8,["label"]),s(g,{resizable:!0,align:"center",prop:"manipulation",label:c(m)("design.manipulation"),width:"200"},null,8,["label"]),s(g,{resizable:!0,align:"center",prop:"orientation",label:c(m)("design.orientation"),width:"200"},null,8,["label"]),s(g,{resizable:!0,align:"center",prop:"statement",label:c(m)("design.statement"),width:"200"},{default:u(K=>[v(y(K.row.source||K.row.statement),1)]),_:1},8,["label"])]),_:1},8,["data","height"])),[[j,E.value]]):f("",!0),s(Q,{modelValue:i.visible,"onUpdate:modelValue":I[3]||(I[3]=K=>i.visible=K),"show-close":!1,title:c(m)("design.newTrigger"),width:"430px",closeOnClickModal:!1,"close-on-press-escape":!1,center:""},{footer:u(()=>[s(N,{type:"secondary",onClick:I[2]||(I[2]=K=>i.visible=!1)},{default:u(()=>[v(y(c(m)("common.cancel")),1)]),_:1}),s(N,{type:"primary",loading:i.loading,onClick:_},{default:u(()=>[v(y(c(m)("common.ok")),1)]),_:1},8,["loading"]),I[4]||(I[4]=h("br",null,null,-1)),I[5]||(I[5]=v()),I[6]||(I[6]=h("br",null,null,-1)),k(s(Se,{ref:"cmEditor",value:A.value,readonly:!0},null,8,["value"]),[[ee,A.value]])]),default:u(()=>[s(q,{inline:!0,"label-width":"80px","label-position":"left",onSubmit:I[1]||(I[1]=ct(()=>{},["prevent"])),onKeyup:Ie(_,["enter"])},{default:u(()=>[s(M,null,{label:u(()=>[s(G),v(y(c(m)("design.clause")),1)]),default:u(()=>[s(B,{modelValue:T.clause,"onUpdate:modelValue":I[0]||(I[0]=K=>T.clause=K),class:"!w-[290px]",size:"small",placeholder:"e.g. AFTER INSERT ON table_name FOR EACH ROW"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}}});class ce{showAllComments(){return null}showAllForeignKeys(){return null}showAllConstraints(){return null}dropIndex(e,t){throw new Error("Method not implemented.")}showVersion(){return null}showIndex(e,t){return null}createIndex(e){return null}showDatabases(){return null}updateUser(e){return null}showCollations(){return null}showPackages(e){return null}showChecks(e,t){return null}showPartitions(e,t){return null}showActualPartitions(e,t){return null}showForeignKeys(e,t){return null}updateColumnSql(e){throw new Error("Method not implemented.")}showMaterialViews(e,t){return""}showTriggers(e,t){return null}showSequences(e){return null}showCustomTypes(e){return null}showExternalTables(e){return`select foreign_table_name "name",foreign_server_name "server",foreign_server_catalog "server_db" from information_schema.foreign_tables where foreign_table_schema='${e}';`}showEvents(e){return`SELECT EVENT_NAME "name" FROM information_schema.EVENTS where EVENT_SCHEMA='${e}' ORDER BY EVENT_NAME;`}dropEventTemplate(e){return`DROP EVENT IF EXISTS ${e};`}dropDatabase(e){return`DROP DATABASE ${e}`}showTableSource(e,t){return null}materializedViewTemplate(){return this.viewTemplate(!0)}triggerTemplate(e){return`CREATE TRIGGER trigger_name$1
[BEFORE/AFTER] INSERT ON ${e??"[table_name]$2"}
FOR EACH ROW BEGIN
    $3
END;`}eventTemplate(){return`CREATE EVENT event_name$1
ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR
DO
BEGIN
    SELECT now()$2;
END;`}kill(e){return null}pingDataBase(e,t){return null}dropTriggerTemplate(e,t){return`DROP TRIGGER ${e}`}}class Cn extends ce{showVersion(){return"select version() server_version"}createIndex(e){const t=e.indexType||"btree";return`CREATE INDEX ${e.column}_${new Date().getTime()}_index ON ${e.table} USING ${t} (${e.column})`}dropIndex(e,t){return`DROP INDEX ${t}`}showIndex(e,t){return`select name index_name,is_in_sorting_key indexdef  FROM system.columns WHERE database = '${e}' and table ='${t}' and indexdef=1`}variableList(){return"select name , value as setting,description from system.settings s "}statusList(){return"select name as db , engine as status from system.databases d "}kill(e){return`KILL QUERY WHERE query_id='${e.ID}'`}processList(){return`
    SELECT query_id AS "ID", user AS "User",
    current_database AS "DB",os_user AS "State",
    addSeconds(now(), elapsed) AS "Time",
    query AS "SQL"
    FROM system.processes p 
    ORDER BY elapsed desc`}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD COLUMN [column] [type]`}createUser(){return"CREATE USER [name] WITH PASSWORD 'password'"}updateColumn(e,t){const{name:n,type:r,comment:l,nullable:a,defaultValue:E}=t;return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${n} TYPE ${r};
-- change column name
ALTER TABLE ${e}  
    RENAME COLUMN ${n} TO [newColumnName]`}updateColumnSql(e){const{columnName:t,columnType:n,newColumnName:r,comment:l,table:a,defaultValue:E,oldRow:i}=e;return console.log(n,i),new Y("",`
`).if(n!=i.type,`ALTER TABLE ${a} ALTER COLUMN ${t} TYPE ${n};`).if(E&&E!=i.defaultValue,`ALTER TABLE ${a} MODIFY COLUMN ${t} DEFAULT ${re(E,n)};`).if(l&&l!=i.comment,`ALTER TABLE ${a} MODIFY COLUMN ${t} COMMENT '${l}';`).if(t!=r,`ALTER TABLE ${a} RENAME COLUMN ${t} TO ${r};`).toString()}showUsers(){return"SELECT * FROM system.users"}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l}=e;let a="";return l&&l!=r&&(a=`ALTER TABLE ${t} MODIFY COMMENT '${l}';`),n&&t!=n&&(a+=`ALTER TABLE ${t} RENAME TO ${n};`),a}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showTableSource(e,t){return`SELECT create_table_query as "Create Table",name as table_name,'definition' as view_definition from system.tables WHERE database='${e}' and name='${t}'`}showViewSource(e,t){return`SELECT create_table_query as "Create View",name as table_name,'definition' as view_definition from system.tables WHERE database='${e}' and name='${t}'`}showProcedureSource(e,t){return"select number from system.numbers where 1=0"}showFunctionSource(e,t){return"select number from system.numbers where 1=0"}showTriggerSource(e,t){return"select number from system.numbers where 1=0"}showColumns(e,t){return`select name,type, null as maximum_length,default_expression as defaultValue,is_in_primary_key as key from system.columns c where database='${e}' and table='${t}' `}showProcedures(e){return"select number from system.numbers where 1=0"}showFunctions(e){return`select name as "ROUTINE_NAME" from system.functions  where origin !='System'`}showViews(e){return`select name ,engine as type from system.tables where database='${e}' and engine = 'View' ORDER BY name`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n}`}showTables(e){return`select name, engine as type from system.tables where database='${e}' and engine <> 'View' ORDER BY name`}showDatabases(){return"SELECT name as Database FROM system.databases where name not in ('information_schema','INFORMATION_SCHEMA') order by name ASC"}showSchemas(){return this.showDatabases()}tableTemplate(){return`CREATE TABLE table_name$1(  
    id UUID,
    create_time DATETIME,
    name$2 String
)
ENGINE = MergeTree()
ORDER BY (id)
PRIMARY KEY(id);`}viewTemplate(){return`CREATE VIEW $1
AS
SELECT * FROM $2`}procedureTemplate(){return"select number from system.numbers where 1=0"}functionTemplate(){return"CREATE FUNCTION [func_name] AS (a, b, c) -> a * b * c;"}}class He{constructor(e){this.param=e,this.afterTablePrefix=`ALTER TABLE "${e.table}"`,this.afterColumnPrefix=`${this.afterTablePrefix} ALTER COLUMN "${e.columnName}"`}genAlterSQL(){const{columnName:e,newColumnName:t}=this.param;return new Y("",`
`).append(this.changeTypePart()).append(this.notNullPart()).append(this.defaultPart()).append(this.otherPart()).append(this.commentPart()).if(e!=t,`${this.afterTablePrefix} RENAME COLUMN "${e}" TO "${t}";`).toString()}changeTypePart(){const{oldRow:e,columnType:t}=this.param;return e.type==t?"":`${this.afterColumnPrefix} TYPE ${t};`}notNullPart(){const{oldRow:e,isNotNull:t}=this.param;return e.isNotNull==t?"":`${this.afterColumnPrefix} ${t?"SET NOT NULL":"DROP NOT NULL"};`}otherPart(){return null}defaultPart(){const{oldRow:e,defaultValue:t,columnType:n}=this.param;return e.defaultValue==t?"":`${this.afterColumnPrefix} ${J(t)?"DROP DEFAULT":`SET DEFAULT ${re(t,n)}`};`}commentPart(){return""}}class Ne extends ce{showVersion(){return""}createIndex(e){return`ALTER TABLE ${e.table} ADD ${e.type||"key"} ("${e.column||"[column]"}")`}dropIndex(e,t){return`DROP INDEX "${t}"`}showIndex(e,t){return null}variableList(){return null}statusList(){return null}processList(){return null}addColumn(e,t){const n=t?` AFTER "${t}"`:"";return`ALTER TABLE ${e}
    ADD COLUMN [column] [type] COMMENT ''${n};`}createUser(){return`CREATE USER 'username'@'%' IDENTIFIED BY 'password';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO 'username'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO 'username'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var C;const{name:n,type:r,comment:l,nullable:a,defaultValue:E,extra:i,character_set_name:T,collation_name:A}=t;return new Y(`ALTER TABLE ${e}`).append(`
	CHANGE ${n} ${n} ${r}`).if(T,`CHARACTER SET ${T}`).if(A,`COLLATE ${A}`).if(a!="YES","NOT NULL").if((C=i==null?void 0:i.toLowerCase())==null?void 0:C.includes("auto_increment"),"AUTO_INCREMENT").if(l,`COMMENT '${l}'`).if(E,`DEFAULT ${E=="CURRENT_TIMESTAMP"?E:`'${E}'`}`).toString()}updateColumnSql(e){return new He(e).genAlterSQL()}showUsers(){return"SELECT concat(user,'@',host) user FROM mysql.user;"}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l}=e;let a="";return l&&l!=r&&(a=`COMMENT ON TABLE "${t}" IS '${l}';`),n&&t!=n&&(a+=`RENAME TABLE "${t}" TO "${n}";`),a}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',table_schema,'"."',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return"CREATE DATABASE $1;"}showTableSource(e,t){return`SHOW CREATE TABLE ${e}.${t};`}showViewSource(e,t,n){return`SHOW CREATE VIEW database.${t};`}showProcedureSource(e,t){return`SHOW CREATE PROCEDURE database.${t};`}showFunctionSource(e,t,n){return`SHOW CREATE FUNCTION database.${t};`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER database.${t};`}showColumns(e,t){return`SELECT COLUMN_NAME name,DATA_TYPE type, IS_NULLABLE nullable
            FROM information_schema.columns WHERE table_schema = '${e}' AND table_name = '${t}' ORDER BY ORDINAL_POSITION;`}showTriggers(e,t){return""}showProcedures(e){return""}showFunctions(e){return""}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e,t=e){return`SELECT TABLE_NAME "name" FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${t}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showViews(e,t=e){return`SELECT TABLE_NAME name FROM information_schema.VIEWS  WHERE TABLE_SCHEMA = '${t}' ORDER BY TABLE_NAME`}showDatabases(){return"SELECT SCHEMA_NAME as Database FROM information_schema.schemata ORDER BY Database;"}showSchemas(e){return"SELECT SCHEMA_NAME as schema FROM information_schema.schemata ORDER BY schema;"}tableTemplate(e){return`CREATE TABLE table_name$1(
    id int,
    create_time DATE,
    update_time DATE,
    content VARCHAR(255)
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM `}procedureTemplate(){return`CREATE PROCEDURE procedure_name$1()
BEGIN
    $2
END;`}functionTemplate(){return`CREATE FUNCTION function_name$1() RETURNS int
BEGIN
    $2
    return 0;
END;`}}class qe extends ce{updateColumn(e,t){return null}showSchemas(e){return null}showTables(e,t){return null}addColumn(e,t){return null}showColumns(e,t,n){return null}showViews(e,t){return null}showUsers(){return null}createUser(){return null}showTriggers(e,t){return null}showProcedures(e){return null}showFunctions(e){return null}buildPageSql(e,t,n){return null}createDatabase(e){return null}truncateDatabase(e){return null}updateTable(e){return null}showViewSource(e,t,n){return null}showProcedureSource(e,t){return null}showFunctionSource(e,t,n){return null}showTriggerSource(e,t){return null}tableTemplate(e){return null}viewTemplate(e){return null}procedureTemplate(){return null}functionTemplate(){return null}processList(){return null}variableList(){return null}statusList(){return null}}class mt extends ce{showVersion(){return`select RTRIM(SUBSTR(REPLACE(banner,'Oracle Database ',''),1,3)) "server_version" from v$version where rownum=1`}showAllForeignKeys(){return`SELECT 
    a.constraint_name AS "constraint_name",
    a.owner AS "table_schema",
    a.table_name AS "table_name",
    a.column_name AS "column_name",
    c.owner AS "referenced_schema",
    c.table_name AS "referenced_table",
    c.column_name AS "referenced_column"
FROM 
    ALL_CONS_COLUMNS a 
JOIN 
    ALL_CONSTRAINTS b ON a.owner = b.owner AND a.constraint_name = b.constraint_name
JOIN 
    ALL_CONS_COLUMNS c ON b.r_owner = c.owner AND b.r_constraint_name = c.constraint_name
WHERE 
    b.constraint_type = 'R'
    and a.owner not in ('SYS','APEX_040200')`}showAllConstraints(){return`SELECT 
        b.CONSTRAINT_NAME "constraint_name",
        c.CONSTRAINT_TYPE "constraint_type",
        b.owner "table_schema",
        b.table_name "table_name",
        b.COLUMN_NAME "column_name"
         FROM ALL_CONS_COLUMNS b 
          join ALL_CONSTRAINTS c on b.CONSTRAINT_NAME=c.CONSTRAINT_NAME 
          WHERE CONSTRAINT_TYPE='P'
          and b.owner not in ('SYS','APEX_040200')`}showAllComments(){return`SELECT 
        owner "table_schema",
        table_name "table_name",
        COLUMN_NAME "column_name",
        COMMENTS "comment"
         FROM all_col_comments WHERE COMMENTS is not null
         and owner not in ('SYS','APEX_040200')`}createIndex(e){const{table:t,column:n}=e;return`CREATE INDEX ${`${t}_${n}`} ON ${t}(${n})`}dropIndex(e,t){return`DROP INDEX ${t}`}showIndex(e,t){return`SELECT 
col.COLUMN_NAME "column_name",col.INDEX_NAME "index_name",idx.UNIQUENESS='UNIQUE' "isUnique"
from ALL_IND_COLUMNS col
join ALL_INDEXES idx on col.index_name = idx.index_name
WHERE col.TABLE_OWNER='${e}'
     and col.TABLE_NAME='${t}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}kill(e){const{SID:t,SERIAL:n}=e;return`ALTER SYSTEM KILL SESSION '${t},${n}' IMMEDIATE;`}processList(){return`SELECT 
        SID, SERIAL# as SERIAL,
        s.username "User", s.schemaname "Schema", 
        s.status "Status", 
        sql.sql_text SQL
        FROM v$session s,
             v$sql     sql
       WHERE sql.sql_id(+) = s.sql_id
         AND s.type     = 'USER'`}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment'`}createUser(){return`CREATE USER $1 IDENTIFIED BY [password$2];
GRANT CONNECT TO $1;
ALTER USER $1 quota unlimited on USERS;
        `}updateUser(e){return`ALTER USER ${e} IDENTIFIED BY [new_password]`}updateColumn(e,t){const{name:n,type:r,comment:l,nullable:a,defaultValue:E}=t;return`-- change column type
ALTER TABLE ${e} MODIFY ${n} ${r};
-- change column name
ALTER TABLE ${e} RENAME COLUMN ${n} TO [newColumnName];
COMMENT ON COLUMN ${e}.${n} IS '${l||""}'`}updateColumnSql(e){const{columnName:t,columnType:n,newColumnName:r,comment:l,defaultValue:a,table:E,isNotNull:i,oldRow:T}=e;return new Y("","").if(n!=T.type,`ALTER TABLE "${E}" MODIFY "${t}" ${n};`).if(i!=T.isNotNull,`
ALTER TABLE "${E}" MODIFY "${t}"${i?"NOT NULL":"NULL"};`).if(a!=null&&a!=T.defaultValue,`
ALTER TABLE "${E}" MODIFY "${t}" DEFAULT ${a!=null&&a.match(/(:|nextval)/i)?a:`'${a==null?void 0:a.replace(/(^'|'$)/g,"")}'`};`).if(l&&l!=T.comment,`
COMMENT ON COLUMN "${E}"."${t}" is '${l}';`).if(t!=r,`
ALTER TABLE "${E}" RENAME COLUMN "${t}" TO "${r}";`).toString()}showUsers(){return'SELECT username "user" FROM all_users'}pingDataBase(e){return e?`ALTER SESSION SET current_schema = "${e}"`:null}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l}=e;let a="";return l&&l!=r&&(a=`COMMENT ON TABLE "${t}" IS '${l}';`),n&&t!=n&&(a+=`ALTER TABLE "${t}" RENAME TO "${n}"`),a}truncateDatabase(e){return`SELECT 'TRUNCATE TABLE "' || owner || '"."' || object_name || '";' trun FROM all_objects where  owner ='${e}' and object_type ='TABLE'`}createDatabase(e){return"CREATE USER $1 IDENTIFIED BY password$2;"}showViewSource(e,t,n){return n?`select QUERY "Create View" from ALL_MVIEWS where OWNER='${e}' and mview_name='${t}'`:`SELECT DBMS_METADATA.GET_DDL('VIEW', '${t}', '${e}') AS VIEW_DDL FROM DUAL;`}showProcedureSource(e,t){return`SELECT text "Create Procedure"
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${t}'
       ORDER BY line`}showFunctionSource(e,t){return`SELECT 'CREATE ' || LISTAGG(text) within group( order by line ) "source"
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${t}'
       ORDER BY line`}showTriggerSource(e,t){return`SELECT text
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${t}'
       ORDER BY line`}showColumns(e,t){return e?`select
        a.COLUMN_NAME "name",
        a.DATA_DEFAULT "defaultValue",
        a.DATA_PRECISION "precision",
        a.DATA_SCALE "scale",
        a.DATA_TYPE "type",
        COALESCE(a.DATA_PRECISION, a.data_length) "maximum_length",
        a.NULLABLE "nullable"
      from
        all_tab_columns a
      where
        a.owner = '${e}'
        and a.table_name = '${t}'`:`select
a.COLUMN_NAME "name",
a.DATA_DEFAULT "defaultValue",
a.DATA_PRECISION "precision",
a.DATA_SCALE "scale",
a.DATA_TYPE "type",
COALESCE(a.DATA_PRECISION, a.data_length) "maximum_length",
a.NULLABLE "nullable"
from
    user_tab_columns a
where
a.table_name = '${t}'`}showChecks(e,t){return`SELECT
        c.constraint_name "name",
        c.search_condition "clause"
    FROM
        all_constraints c
    WHERE
        c.owner = '${e}' and
        c.table_name = '${t}'
        AND c.constraint_type = 'C';`}showForeignKeys(e,t){let n=`select
        b.CONSTRAINT_NAME "constraint_name",
        b.COLUMN_NAME "column_name",
        c_pk.table_name "referenced_table",
        b_pk.COLUMN_NAME "referenced_column"
    from ALL_CONS_COLUMNS b
        join ALL_CONSTRAINTS c on b.owner=c.owner and b.CONSTRAINT_NAME = c.CONSTRAINT_NAME
        JOIN all_constraints c_pk ON c.r_owner = c_pk.owner AND c.r_constraint_name = c_pk.constraint_name
        join ALL_CONS_COLUMNS b_pk on b_pk.CONSTRAINT_NAME = c_pk.CONSTRAINT_NAME
    where
        b.owner = '${e}' and
        b.table_name = '${t}'
        and c.CONSTRAINT_TYPE = 'R';`;return e||(n=n.replace(/all_/ig,"USER_").replace("b.owner = 'undefined' and","")),n}showTriggers(e,t){const n=t?` AND TABLE_NAME='${t}'`:"";return`SELECT TRIGGER_NAME "trigger_name",TABLE_NAME "table_name",TRIGGERING_EVENT "event" FROM all_triggers WHERE TABLE_OWNER='${e}' ${n} ORDER BY TRIGGER_NAME`}showPackages(e){return`SELECT 
                    object_name "name" ,
                    status "status"
                FROM 
                    ALL_OBJECTS 
                WHERE 
                    OBJECT_TYPE IN ('PACKAGE') 
                    AND owner='${e}' 
                ORDER BY 
                    "name"`}showProcedures(e){return`SELECT 
                    object_name "ROUTINE_NAME" ,
                    status "status"
                FROM 
                    all_objects 
                WHERE 
                    object_type = 'PROCEDURE' 
                    AND owner = '${e}' 
                ORDER BY 
                    "ROUTINE_NAME"`}showFunctions(e){return`SELECT 
                    object_name "ROUTINE_NAME" ,
                    status "status"
                FROM 
                    all_objects 
                WHERE 
                    object_type = 'FUNCTION' 
                    AND owner='${e}' 
                ORDER BY 
                    "ROUTINE_NAME"`}showViews(e,t){return`select object_type "type",object_name "name" from all_objects where object_type = 'VIEW' and owner='${t}' ORDER BY "type","name"`}showMaterialViews(e,t){return`select object_type "type",object_name "name" from all_objects where object_type = 'MATERIALIZED VIEW' and owner='${t}' ORDER BY "type","name"`}buildPageSql(e,t,n){return`SELECT * FROM ${t} WHERE ROWNUM <= ${n}`}showTables(e,t){return`select 
        o.object_name "name", nvl(t.num_rows, -1) "table_rows", 
        c.comments "comment", s.bytes "data_length"
        from all_objects o
        LEFT JOIN all_tables t on o.owner = t.owner and o.object_name = t.table_name
        LEFT JOIN all_tab_comments c on o.owner = c.owner and o.object_name = c.table_name
        LEFT JOIN dba_segments s on o.owner = s.owner and o.object_name = s.segment_name
        where o.owner = '${t}' and o.object_type = 'TABLE' ORDER BY "name"`}showDatabases(){return'select username as "Database" from sys.all_users order by username'}showSchemas(){return'select username as "Database" from sys.all_users order by username'}tableTemplate(){return`CREATE TABLE table_name$1(  
    id NUMBER GENERATED AS IDENTITY PRIMARY KEY,
    create_time DATE,
    name$2 VARCHAR2(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.$2 IS '$4'`}viewTemplate(e){return`CREATE ${e?"MATERIALIZED ":""}VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1(x IN OUT NUMBER, y OUT NUMBER)
IS
BEGIN
   $2
   y:=4 * x;
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1(x IN NUMBER) 
RETURN NUMBER 
IS
BEGIN 
    $2
    RETURN x*2;
END;`}}class Sn extends mt{showVersion(){return`SELECT REPLACE(banner,'DM Database Server 64 ','') "server_version"  FROM v$version where rownum=1;`}createIndex(e){const{table:t,column:n="$2"}=e;return`CREATE INDEX ${`${t}_${n}`} ON ${t}(${n});`}dropIndex(e,t){return`DROP INDEX ${t};`}showIndex(e,t){return`SELECT COLUMN_NAME "column_name",INDEX_NAME "index_name" from all_IND_COLUMNS WHERE TABLE_OWNER='${e}' and TABLE_NAME='${t}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"SELECT SESS_ID,STATE,SQL_TEXT FROM v$sessions"}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD COLUMN $1 $2;
COMMENT ON COLUMN ${e}.$3 IS 'comment$4';`}createUser(){return"CREATE USER $1 IDENTIFIED BY [password]$2;"}updateUser(e){return`ALTER USER ${e} IDENTIFIED BY [new_password];`}updateColumn(e,t){const{name:n,type:r,comment:l,nullable:a,defaultValue:E}=t;return`-- change column type
ALTER TABLE ${e} MODIFY ${n} ${r};
-- change column name
ALTER TABLE ${e} RENAME COLUMN ${n} TO [newColumnName];
COMMENT ON COLUMN ${e}.${n} IS '${l||""}';`}updateColumnSql(e){const{columnName:t,columnType:n,newColumnName:r,comment:l,defaultValue:a,table:E,isNotNull:i,oldRow:T}=e;return new Y("","").if(n!=T.type,`ALTER TABLE "${E}" MODIFY "${t}" ${n};`).if(i!=T.isNotNull,`
ALTER TABLE "${E}" MODIFY "${t}"${i?"NOT NULL":"NULL"};`).if(a!=null&&a!=T.defaultValue,`
ALTER TABLE "${E}" MODIFY "${t}" DEFAULT ${a!=null&&a.match(/(:|nextval)/i)?a:`'${a==null?void 0:a.replace(/(^'|'$)/g,"")}'`};`).if(l&&l!=T.comment,`
COMMENT ON COLUMN "${E}"."${t}" is '${l}';`).if(t!=r,`
ALTER TABLE "${E}" RENAME COLUMN "${t}" TO "${r}";`).toString()}showUsers(){return'SELECT username "user" FROM all_users'}pingDataBase(e){return e?`set SCHEMA ${e}`:null}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l}=e;let a="";return l&&l!=r&&(a=`COMMENT ON TABLE "${t}" IS '${l}';`),n&&t!=n&&(a+=`ALTER TABLE "${t}" RENAME TO "${n}"`),a}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return"CREATE USER [name] IDENTIFIED BY [password];"}showViewSource(e,t){return`CALL SP_VIEWDEF('${e}', '${t}');`}showProcedureSource(e,t){return`SELECT LISTAGG(text) within group(order by line) "Create Procedure"
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${t}'
       ORDER BY line`}showFunctionSource(e,t){return`select DBMS_METADATA.GET_DDL('FUNCTION', '${t}','${e}') "Create Function";`}showColumns(e,t){return`select
        a.COLUMN_NAME "name",
        a.DATA_DEFAULT "defaultValue",
        a.DATA_TYPE "type",
        a.DATA_PRECISION "precision",
        a.DATA_SCALE "scale",
        a.data_length "maximum_length",
        a.NULLABLE "nullable",
        c.CONSTRAINT_TYPE "key",
        cc.COMMENTS "comment",
        sc."INFO2" "extra"
      from
        all_tab_columns a
        left join all_col_comments cc on a.COLUMN_NAME=cc.COLUMN_NAME and a.OWNER=cc.SCHEMA_NAME and a.table_name=cc.table_name
        left join ALL_CONS_COLUMNS b on a.COLUMN_NAME=b.COLUMN_NAME and a.OWNER=b.OWNER and a.table_name=b.table_name
        left join all_CONSTRAINTS c on b.CONSTRAINT_NAME=c.CONSTRAINT_NAME
        left join sys.syscolumns sc on sc.id = (
            SELECT OBJECT_ID
                FROM all_objects t
                WHERE t.owner =a.OWNER
                AND t.object_name = a.table_name
                AND t.OBJECT_TYPE='TABLE'
        ) and sc."NAME"=a.COLUMN_NAME
      where
        a.owner = '${e}'
        and a.table_name = '${t}';`}showProcedures(e){return`select object_name "ROUTINE_NAME" from all_objects where object_type = 'PROCEDURE' and owner='${e}' ORDER BY "ROUTINE_NAME";`}showFunctions(e){return`select object_name "ROUTINE_NAME" from all_objects where object_type = 'FUNCTION' and owner='${e}' ORDER BY "ROUTINE_NAME";`}showViews(e){return`select object_name "name" from all_objects where object_type = 'VIEW' and owner='${e}';`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e,t){return`SELECT a.object_name "name",b.COMMENTS "comment",s.bytes "data_length" 
FROM all_objects a
LEFT JOIN ALL_TAB_COMMENTS b on a.OWNER=b.OWNER and a.object_name=b.TABLE_NAME
LEFT JOIN dba_segments s on a.owner = s.owner and a.object_name = s.segment_name
where a.object_type = 'TABLE' and a.owner='${t}' and a.TEMPORARY<>'Y';`}showDatabases(){return`select object_name "Database" from all_objects where object_type = 'SCH';`}showSchemas(){return`select object_name "Database" from all_objects where object_type = 'SCH';`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY IDENTITY(1,1),
    create_time DATETIME,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE $1 IS '$3';
COMMENT ON COLUMN $1.$2 IS '$4';`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1(x IN OUT NUMBER, y OUT NUMBER)
IS
BEGIN
   $2
   y:=4 * x;
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1(x IN int) RETURN int$2
AS
BEGIN
    $3
    return x*2;
END;`}}class Pe extends ce{showVersion(){return"select @@version server_version;"}showAllForeignKeys(){return`SELECT 
        CONSTRAINT_NAME constraint_name,
        TABLE_SCHEMA table_schema,
        TABLE_NAME table_name,
        COLUMN_NAME column_name,
        REFERENCED_TABLE_SCHEMA referenced_schema,
        REFERENCED_TABLE_NAME referenced_table,
        REFERENCED_COLUMN_NAME referenced_column
         FROM information_schema.KEY_COLUMN_USAGE 
         WHERE REFERENCED_TABLE_NAME is not null`}createIndex(e){let t=`${e.type||"key"}`;return t.match(/BTREE/i)&&(t="key"),`ALTER TABLE ${e.table} ADD ${t} (\`${e.column||"$1"}\`)`}dropIndex(e,t){return`ALTER TABLE ${e} DROP INDEX \`${t}\``}showIndex(e,t){return`SELECT column_name "column_name",index_name "index_name",index_type "index_type",non_unique=0 "isUnique" FROM INFORMATION_SCHEMA.STATISTICS WHERE table_schema='${e}' and table_name='${t}'
        ORDER BY index_name, SEQ_IN_INDEX;`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}kill(e){return`KILL ${e==null?void 0:e.ID};`}processList(){return"SELECT ID, USER User, DB, COMMAND Command, STATE State, TIME Time, INFO `SQL`\nFROM information_schema.PROCESSLIST;"}addColumn(e,t){const n=t?` AFTER \`${t}\``:"";return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type]$2 COMMENT '$3'${n};`}createUser(){return`CREATE USER '$1'@'%' IDENTIFIED BY 'password$2';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO '$1'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO '$1'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set 
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var l,a;const{nullable:n,extra:r}=t;return this.updateColumnSql({table:e,...t,isNotNull:n!="YES",isAutoIncrement:(a=(l=r==null?void 0:r.toLowerCase())==null?void 0:l.includes)==null?void 0:a.call(l,"auto_increment")})}updateColumnSql(e){const{table:t,tableMeta:n,name:r,columnName:l=r,type:a,unsigned:E,zerofill:i,useCurrentTimestamp:T,isNotNull:A,isAutoIncrement:C,comment:_,defaultValue:b,character_set_name:I,collation_name:N}=e,S=a.match(/char|text|set|enum|blob|binary/i)&&(n==null?void 0:n.collation)!=N;return new Y(`ALTER TABLE \`${t}\``).append(`
	CHANGE \`${l}\` \`${r}\` ${a}`).if(E=="1","UNSIGNED").if(i=="1","ZEROFILL").if(T,"ON UPDATE CURRENT_TIMESTAMP").if(S&&I,`CHARACTER SET ${I}`).if(S&&N,`COLLATE ${N}`).if(A,"NOT NULL").if(C,"AUTO_INCREMENT").if(_,`COMMENT '${_}'`).if(J(b)&&!A,"DEFAULT NULL").if(!J(b),`DEFAULT ${b=="CURRENT_TIMESTAMP"?b:`${re(b,a)}`}`).append(";").toString()}showCollations(){return'select DEFAULT_COLLATE_NAME "name",CHARACTER_SET_NAME "charset",DESCRIPTION "description" from information_schema.CHARACTER_SETS ORDER BY name;'}showChecks(e,t){return`SELECT
        tc.CONSTRAINT_NAME "name",
        cc.CHECK_CLAUSE "clause"
    FROM
        information_schema.CHECK_CONSTRAINTS AS cc,
        information_schema.TABLE_CONSTRAINTS AS tc
    WHERE
        tc.CONSTRAINT_SCHEMA = '${e}'
        AND tc.TABLE_NAME = '${t}'
        AND tc.CONSTRAINT_TYPE = 'CHECK'
        AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
        AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME;`}showUsers(){return"SELECT user user,host host FROM mysql.user;"}pingDataBase(e){return e?`use \`${e}\``:null}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l,collation:a,newCollation:E}=e;let i="";return l&&l!=r&&(i=`ALTER TABLE \`${t}\` COMMENT = '${l}';`),E&&E!=a&&(i+=`ALTER TABLE \`${t}\` collate = '${E}';`),n&&t!=n&&(i+=`ALTER TABLE \`${t}\` RENAME TO \`${n}\`;`),i}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return`CREATE DATABASE $1
    DEFAULT CHARACTER SET = 'utf8mb4';`}showTableSource(e,t){return`SHOW CREATE TABLE \`${e}\`.\`${t}\`;`}showPartitions(e,t){return`SELECT 
PARTITION_NAME "name",PARTITION_METHOD "strategy",PARTITION_EXPRESSION "columnName",
PARTITION_DESCRIPTION "value",TABLE_ROWS "rows",DATA_LENGTH "length"
        FROM information_schema.partitions WHERE TABLE_SCHEMA='${e}' AND TABLE_NAME = '${t}' AND PARTITION_NAME IS NOT NULL`}showViewSource(e,t){return`SHOW CREATE VIEW  \`${e}\`.\`${t}\`;`}showProcedureSource(e,t){return`SHOW CREATE PROCEDURE \`${e}\`.\`${t}\`;`}showFunctionSource(e,t){return`SHOW CREATE FUNCTION \`${e}\`.\`${t}\`;`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER \`${e}\`.\`${t}\`;`}showColumns(e,t){return`SELECT 
        c.COLUMN_NAME name,
        COLUMN_TYPE type,
        COLUMN_COMMENT comment,COLUMN_KEY \`key\`,IS_NULLABLE nullable,
        CHARACTER_MAXIMUM_LENGTH maximum_length,
        COLUMN_DEFAULT defaultValue,
        INSTR(COLUMN_TYPE,'zerofill')>0 "zerofill",
        INSTR(COLUMN_TYPE,'unsigned')>0 "unsigned",
        EXTRA extra,
        COLLATION_NAME collation_name,
        CHARACTER_SET_NAME character_set_name 
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}showForeignKeys(e,t){return`SELECT
        c.COLUMN_NAME column_name, ik.CONSTRAINT_NAME constraint_name,
        ik.REFERENCED_TABLE_NAME referenced_table, ik.REFERENCED_COLUMN_NAME referenced_column,
        UPDATE_RULE "updateRule",
        DELETE_RULE "deleteRule"
        FROM
        information_schema.columns c join information_schema.KEY_COLUMN_USAGE ik on c.table_schema = ik.TABLE_SCHEMA
        and c.table_name = ik.TABLE_NAME and c.COLUMN_NAME = ik.COLUMN_NAME
        JOIN information_schema.REFERENTIAL_CONSTRAINTS ir on ik.CONSTRAINT_NAME=ir.CONSTRAINT_NAME
        WHERE c.table_schema = '${e}' and c.table_name = '${t}' ORDER BY ik.CONSTRAINT_NAME;`}showTriggers(e,t){const n=t?` AND EVENT_OBJECT_TABLE='${t}'`:"";return`SELECT 
                    EVENT_OBJECT_TABLE table_name,
                    TRIGGER_NAME "trigger_name",
                    ACTION_TIMING timing,
                    EVENT_MANIPULATION event,
                    EVENT_MANIPULATION manipulation,
                    ACTION_ORIENTATION orientation,
                    ACTION_STATEMENT statement
                FROM 
                    information_schema.TRIGGERS 
                WHERE 
                    TRIGGER_SCHEMA = '${e}' 
                    ${n} 
                ORDER BY 
                    TRIGGER_NAME;`}showProcedures(e){return`SELECT 
    r.ROUTINE_NAME "name",
    p.PARAMETER_NAME "param_name",
    p.DATA_TYPE "param_type",
    p.PARAMETER_MODE "param_mode"
FROM 
    information_schema.routines r
LEFT JOIN 
    information_schema.parameters p 
ON 
    r.SPECIFIC_NAME = p.SPECIFIC_NAME
WHERE
    r.ROUTINE_SCHEMA = '${e}'
    AND r.ROUTINE_TYPE = 'PROCEDURE'
ORDER BY 
    r.ROUTINE_NAME, p.ORDINAL_POSITION;`}showFunctions(e){return`SELECT 
        ROUTINE_NAME "name",
        p.PARAMETER_NAME "param_name",
        p.DATA_TYPE "param_type",
        p.PARAMETER_MODE "param_mode"
    FROM 
        information_schema.routines  r
    LEFT JOIN 
        information_schema.parameters p 
    ON 
        r.SPECIFIC_NAME = p.SPECIFIC_NAME
    WHERE 
        r.ROUTINE_SCHEMA = '${e}' 
        AND r.ROUTINE_TYPE = 'FUNCTION' 
    ORDER BY 
        r.ROUTINE_NAME;`}showViews(e){return`SELECT TABLE_NAME name,SECURITY_TYPE "view_group" FROM information_schema.VIEWS  WHERE TABLE_SCHEMA = '${e}' ORDER BY TABLE_NAME`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e){return`SELECT TABLE_COMMENT "comment",TABLE_NAME "name",TABLE_ROWS "table_rows",\`AUTO_INCREMENT\` "auto_increment",
        row_format "row_format",DATA_LENGTH "data_length",INDEX_LENGTH "index_length",TABLE_COLLATION "collation",
        TABLE_TYPE "view_group",\`ENGINE\` engine
        FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${e}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showDatabases(){return"show DATABASES"}showSchemas(){return this.showDatabases()}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    name$2 VARCHAR(255)
) COMMENT '$4';`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1()
BEGIN
$2
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1() RETURNS int$2
READS SQL DATA
BEGIN
    $3
    return 0;
END;`}}class bn extends Pe{showVersion(){return"select replace(@@version,'-MariaDB','') server_version;"}}class On extends qe{showVersion(){return"show version"}showDatabases(){return"show dbs"}buildPageSql(e,t,n){return`db('${e}').collection('${t}').find({}).limit(${n}).toArray()`}showIndex(e,t){return`db('${e}').collection('${t}').indexes();`}createIndex(e){const{database:t,table:n,column:r}=e;return`db('${t}').collection('${n}').createIndex({ ${r||"column_name"}: 1 });`}createDatabase(e){return'db("db_name").createCollection("collection")'}dropDatabase(e){return`db("${e}").dropDatabase()`}}class Ln extends ce{showVersion(){return"SELECT CAST(SERVERPROPERTY('ProductVersion') AS SYSNAME)+' '+CAST(SERVERPROPERTY('Edition') AS SYSNAME) AS server_version"}showAllForeignKeys(){return`SELECT 
    OBJECT_SCHEMA_NAME(fk.parent_object_id) AS table_schema,
    OBJECT_NAME(fk.parent_object_id) AS table_name,
    COL_NAME(fc.parent_object_id, fc.parent_column_id) AS column_name,
    OBJECT_SCHEMA_NAME(fk.referenced_object_id) AS referenced_schema,
    OBJECT_NAME(fk.referenced_object_id) AS referenced_table,
    COL_NAME(fc.referenced_object_id, fc.referenced_column_id) AS referenced_column
FROM 
    sys.foreign_keys fk
JOIN 
    sys.foreign_key_columns fc ON fk.object_id = fc.constraint_object_id`}showAllComments(){return`SELECT 
        s.name table_schema,
        t.name AS table_name,
        c2.name AS column_name,
        prop.value AS comment
        FROM 
           sys.columns c2 
                join sys.tables t on c2.object_id=t.object_id
                join sys.schemas s on t.schema_id=s.schema_id 
                join sys.extended_properties prop ON prop.major_id = c2.object_id AND prop.minor_id = c2.column_id`}createIndex(e){return`ALTER TABLE ${e.table} ADD ${e.type} (${e.column})`}dropIndex(e,t){return`DROP INDEX ${e}.${t}`}showIndex(e,t){return`SELECT
        index_name = ind.name,
        column_name = col.name,
        ind.is_primary_key "isPrimary",
        ind.is_unique "isUnique",
        ind.is_unique_constraint,
        CASE 
            WHEN ind.is_primary_key=1 THEN 'PRIMARY'
            WHEN ind.is_unique=1 THEN 'UNIQUE'
            WHEN ind.is_unique_constraint=1 THEN 'UNIQUE'
        ELSE 'INDEX' END index_type
      FROM
        sys.indexes ind
        INNER JOIN sys.index_columns ic ON ind.object_id = ic.object_id
        and ind.index_id = ic.index_id
        INNER JOIN sys.columns col ON ic.object_id = col.object_id
        and ic.column_id = col.column_id
        INNER JOIN sys.tables t ON ind.object_id = t.object_id
      WHERE
        t.name = '${t}';`}variableList(){throw new Error("Method not implemented.")}statusList(){throw new Error("Method not implemented.")}kill(e){return`kill ${e.ID};`}processList(){return`SELECT
    s.session_id "ID",
    s.login_name "User",
    s.program_name "Client",
    r.status "Status",
    r.wait_time "Wait Time",
    d.text "SQL"
FROM sys.dm_exec_sessions s
LEFT JOIN sys.dm_exec_requests r ON s.session_id = r.session_id
Outer APPLY sys.dm_exec_sql_text(sql_handle) d
WHERE s.is_user_process = 1;`}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD $1 [type]$2;`}createUser(){return`CREATE LOGIN loginName$1 WITH PASSWORD = 'password$2';
-- user master[YourDatabaseName]
CREATE USER userName$3 FOR LOGIN loginName$1;
ALTER ROLE db_datareader ADD MEMBER userName$3;
ALTER ROLE db_datawriter ADD MEMBER userName$3;
-- ALTER ROLE db_ddladmin ADD MEMBER userName$3;`}updateColumn(e,t){const{name:n,type:r,comment:l,nullable:a,defaultValue:E}=t,i=a=="YES"?"NULL":"NOT NULL";return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${n} ${r} ${i};
-- change column name
EXEC sp_rename '${e}.${n}', '${n}', 'COLUMN';`}updateColumnSql(e){const{columnName:t,columnType:n,newColumnName:r,comment:l,oldRow:a,isNotNull:E,schema:i,table:T}=e,A=E?"NOT NULL":"NULL";return new Y(`ALTER TABLE "${i}"."${T}" ALTER COLUMN ${t} ${n} ${A};`,`
`).if(t!=r,()=>`EXEC sp_rename '${i}.${T}.${t}' , '${r}', 'COLUMN';`).if(l!=a.comment,()=>`EXEC ${a.comment?"sp_updateextendedproperty":"sp_addextendedproperty"} 
@level0type = N'Schema', @level0name = '${i}',
@level1type = N'Table', @level1name = '${T}', 
@level2type = N'Column', @level2name = '${r}',
@name = N'MS_Description', @value = N'${l}';`).toString()}showUsers(){return"SELECT name [user] from sys.database_principals where type='S'"}updateTable(e){const{schema:t,table:n,newTableName:r,comment:l,newComment:a}=e;let E="";return a&&a!=l&&(E=`EXEC ${l?"sp_updateextendedproperty":"sp_addextendedproperty"} 
@level0type = N'Schema', @level0name = '${t}',
@level1type = N'Table', @level1name = '${n}', 
@name = N'MS_Description', @value = N'${a}';`),r&&n!=r&&(E+=`sp_rename '${n}', '${r}';`),E}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE [',table_schema,'].[',TABLE_NAME, '];') trun FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'  AND TABLE_SCHEMA='${e}'`}createDatabase(e){return`create database ${e||"[name]"}`}showViewSource(e,t){return`SELECT definition 'Create View' FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showProcedureSource(e,t){return`SELECT definition 'Create Procedure','${e}.${t}' "Procedure" FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showFunctionSource(e,t){return`SELECT definition 'Create Function','${e}.${t}' "Function" FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showTriggerSource(e,t){return`SELECT definition 'SQL Original Statement','${e}.${t}' "Trigger" FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showColumns(e,t){return["information_schema","sys"].includes(e==null?void 0:e.toLowerCase())?`SELECT
            name,
            type_name(system_type_id) "type",
            is_nullable nullable,
            max_length "maximum_length"
        FROM
            sys.all_columns
        WHERE
            object_id = OBJECT_ID('${e}.${t}') ;`:`SELECT 
               c.COLUMN_NAME "name",
               DATA_TYPE "type",
               numeric_precision "precision",
               numeric_scale "scale",
               IS_NULLABLE nullable, CHARACTER_MAXIMUM_LENGTH "maximum_length", COLUMN_DEFAULT "defaultValue", '' "comment", tc.constraint_type "key",
               COLUMNPROPERTY(object_id('${e}.${t}'), c.COLUMN_NAME, 'IsIdentity') extra
               FROM
               INFORMATION_SCHEMA.COLUMNS c
               left join  INFORMATION_SCHEMA.CONSTRAINT_COLUMN_USAGE ccu
               on c.COLUMN_NAME=ccu.column_name and c.table_name=ccu.table_name and ccu.TABLE_SCHEMA=c.TABLE_SCHEMA
               left join  INFORMATION_SCHEMA.TABLE_CONSTRAINTS tc
               on tc.constraint_name=ccu.constraint_name
               and tc.TABLE_SCHEMA=c.TABLE_SCHEMA and tc.table_name=c.table_name WHERE c.TABLE_SCHEMA = '${e}' AND c.table_name = '${t}' ORDER BY ORDINAL_POSITION`}showChecks(e,t){return`SELECT
        tc.CONSTRAINT_NAME "name",
        cc.CHECK_CLAUSE "clause"
    FROM
        "INFORMATION_SCHEMA"."CHECK_CONSTRAINTS" AS cc,
        "INFORMATION_SCHEMA"."TABLE_CONSTRAINTS" AS tc
    WHERE
        tc.CONSTRAINT_SCHEMA = '${e}'
        AND tc.TABLE_NAME = '${t}'
        AND tc.CONSTRAINT_TYPE = 'CHECK'
        AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
        AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME;`}showForeignKeys(e,t){return`SELECT
        f.name AS "constraint_name",
        COL_NAME( fkc.parent_object_id, fkc.parent_column_id ) AS "column_name",
        OBJECT_NAME (fkc.referenced_object_id) AS "referenced_table",
        COL_NAME( fkc.referenced_object_id, fkc.referenced_column_id )  AS "referenced_column",
        update_referential_action_desc "updateRule",
        delete_referential_action_desc "deleteRule"
    FROM
        sys.foreign_key_columns fkc
        JOIN sys.foreign_keys f ON f.object_id = fkc.constraint_object_id
        JOIN sys.tables tab1 ON tab1.object_id = fkc.parent_object_id and tab1.name='${t}' and SCHEMA_NAME(tab1.schema_id)='${e}'
    ;`}showTriggers(e,t){const n=t?` AND tb.name='${t}'`:"";return`SELECT 
                tr.name AS trigger_name, 
                tb.name AS table_name,
                'Statement' AS orientation,
                OBJECT_DEFINITION(tr.object_id) AS source
            FROM 
                sys.triggers tr
                INNER JOIN sys.tables tb ON tr.parent_id = tb.object_id
                INNER JOIN sys.schemas sc ON tb.schema_id = sc.schema_id
            WHERE 
                tr.is_ms_shipped = 0
                AND sc.name = '${e}' ${n}`}showProcedures(e){return`SELECT ROUTINE_NAME FROM INFORMATION_SCHEMA.ROUTINES WHERE SPECIFIC_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME`}showFunctions(e){return`SELECT ROUTINE_NAME FROM INFORMATION_SCHEMA.ROUTINES WHERE SPECIFIC_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME`}showViews(e,t){return`SELECT name FROM sys.all_views t where SCHEMA_NAME(t.schema_id)='${t}' order by name`}buildPageSql(e,t,n){return`SELECT TOP ${n} * FROM ${t};`}showTables(e,t){return`SELECT 
    t.name AS 'name', 
    ep.value AS 'comment', 
    t.is_ms_shipped AS 'isSystem',
    p.rows AS 'table_rows',
    SUM(a.total_pages) * 8 * 1024 AS 'data_length'
FROM 
    sys.tables t
    LEFT JOIN sys.extended_properties ep ON ep.major_id = t.object_id AND ep.minor_id = 0 AND ep.name = 'MS_Description'
    LEFT JOIN sys.indexes i ON t.object_id = i.object_id
    LEFT JOIN sys.partitions p ON i.object_id = p.object_id AND i.index_id = p.index_id
    LEFT JOIN sys.allocation_units a ON p.partition_id = a.container_id
WHERE
    t.schema_id = SCHEMA_ID('${t}')
GROUP BY 
    t.name, ep.value, t.is_ms_shipped, p.rows
ORDER BY 
    t.is_ms_shipped, t.name;`}showDatabases(){return"SELECT name 'Database' FROM sys.databases"}showSchemas(){return"SELECT SCHEMA_NAME [schema] FROM INFORMATION_SCHEMA.SCHEMATA"}tableTemplate(e){return`CREATE TABLE ${(e=="dbo"?"":`${e}.`)+"table_name"}$1(  
    id int IDENTITY(1,1) primary key,
    create_time DATETIME,
    update_time DATETIME,
    content$2 NVARCHAR(255)
);
EXECUTE sp_addextendedproperty N'MS_Description', '[table_comment]', N'user', N'dbo', N'table', N'[table_name]', NULL, NULL;
EXECUTE sp_addextendedproperty N'MS_Description', '[column_comment]', N'user', N'dbo', N'table', N'[table_name]', N'column', N'[column_name]';
`}viewTemplate(){return`CREATE VIEW dbo.view_name$1
AS
SELECT * FROM 
`}procedureTemplate(){return`CREATE PROCEDURE dbo.procedure_name$1
AS
BEGIN
    $2
END;`}functionTemplate(){return`CREATE FUNCTION dbo.function_name$1() RETURNS [TYPE]
BEGIN
    $2
    return [value];
END;`}triggerTemplate(e){return`CREATE TRIGGER trigger_name$1
ON ${e??"[table_name]$2"}
[FOR/AFTER] INSERT
AS
BEGIN
    $3
END;`}}class In extends qe{showVersion(){return"call dbms.components() yield name, versions, edition unwind versions as server_version return server_version;"}showDatabases(){return"SHOW DATABASES yield name AS Database"}showSchemas(){return this.showDatabases()}showTables(e){return"call db.labels() yield label as name RETURN name ORDER BY toLower(name)"}addColumn(e,t){return`MATCH (n:${e}) WHERE id(n) = 1 SET n.name = 'name' RETURN n`}showColumns(e,t){return`MATCH(n:\`${t}\`) UNWIND keys(n) AS name RETURN DISTINCT name`}showIndex(e,t){return`show indexes yield name as index_name, properties as column_name, type as index_type, labelsOrTypes where '${t}' in labelsOrTypes`}showViews(e){return"call db.relationshipTypes() yield relationshipType AS name RETURN name ORDER BY toLower(name)"}showUsers(){return"SHOW USERS"}createUser(){return`CREATE USER [name] IF NOT EXISTS 
    SET PASSWORD 'password';`}buildPageSql(e,t,n){return`MATCH (n${t=="*"?"":`:${t}`}) RETURN n LIMIT ${n}`}createDatabase(e){return"CREATE DATABASE $1"}tableTemplate(){return"CREATE (n:node {id:1}) return n;"}createIndex(e){return`CREATE INDEX FOR (n:${e.table}) ON (n.id)`}dropIndex(e,t){return`DROP INDEX \`${t}\``}viewTemplate(){return"MATCH (n1:node {id:1}), (n2:node {id:2}) CREATE (n1)-[r:TO]->(n2) RETURN type(r)"}}class je extends He{defaultPart(){var A,C;const{oldRow:e,isAutoIncrement:t,defaultValue:n,columnType:r}=this.param,l=(A=n==null?void 0:n.match)==null?void 0:A.call(n,/\bnextval\b/);if(t&&!e.isAutoIncrement&&!l)return`${this.afterColumnPrefix} ADD GENERATED ALWAYS AS IDENTITY;`;if(!t&&e.isAutoIncrement&&!l)return`${this.afterColumnPrefix} DROP IDENTITY;`;if(!t&&e.isAutoIncrement&&l)return`${this.afterColumnPrefix} DROP DEFAULT;`;if(e.defaultValue==n)return"";const T=(C=n==null?void 0:n.match)!=null&&C.call(n,/\bnextval\b/)?n:re(n,r);return`${this.afterColumnPrefix} ${J(n)?"DROP DEFAULT":`SET DEFAULT ${T}`};`}commentPart(){const{oldRow:e,table:t,columnName:n,comment:r}=this.param;if(r!=e.comment)return`COMMENT ON COLUMN "${t}"."${n}" is '${r}';`}}class Ke extends ce{showVersion(){return"SHOW server_version;"}createIndex(e){const t=e.name??`${e.column||"[column]"}`,n=e.indexType||"btree";return`CREATE INDEX ${t}_${new Date().getTime()}_index ON 
    ${e.table} USING ${n} ("${e.column||"[column]"}");`}dropIndex(e,t){return`DROP INDEX "${t}"`}showIndex(e,t){return`select
    t.relname as table_name,
    i.relname as index_name,
    a.attname as column_name,
    ix.indisprimary "isPrimary",
    ix.indisunique "isUnique",
    CASE ix.indisprimary
        WHEN true THEN 'PRIMARY'
    ELSE CASE ix.indisunique
        WHEN true THEN 'UNIQUE'
    ELSE 'KEY'
    END
    END AS index_type,
    am.amname index_method
  from
    pg_class t
    join pg_catalog.pg_namespace pgn ON pgn.oid=t.relnamespace and pgn.nspname='${e}'
    join pg_index ix on t.oid = ix.indrelid
    join pg_attribute a on t.oid = a.attrelid and a.attnum = ANY(ix.indkey)
    join pg_class i on ix.indexrelid = i.oid
    JOIN pg_am am ON am.oid=i.relam
  where
     t.relkind = 'r'
    and t.relname = '${t}'
  order by
    ix.indexrelid;`}variableList(){return"SHOW ALL"}statusList(){return`SELECT
        'db_numbackends' AS db,
        pg_stat_get_db_numbackends(datid) AS status
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_commit',
        pg_stat_get_db_xact_commit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_rollback',
        pg_stat_get_db_xact_rollback(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_fetched',
        pg_stat_get_db_blocks_fetched(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_hit',
        pg_stat_get_db_blocks_hit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()`}kill(e){return`SELECT pg_terminate_backend(${e.ID})`}processList(){return`SELECT
        a.pid AS "ID",
        query_start AS "Time",
        datname AS "db",
        CASE
        WHEN c.relname IS NOT NULL THEN c.relname
        ELSE l.virtualtransaction
        END AS "Target",
        l.mode AS "State",
        query AS "SQL"
      FROM
        pg_stat_activity a
        LEFT JOIN pg_locks l ON a.pid = l.pid
        LEFT JOIN pg_class c ON l.relation = c.oid
      ORDER BY
        a.pid ASC,
        c.relname ASC`}addColumn(e,t){return`ALTER TABLE ${e} 
  ADD COLUMN [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment';`}createUser(){return`CREATE USER $1 WITH PASSWORD 'password$2';
-- Grant select privilege;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO $1;
-- Grant all privileges;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO $1;`}updateUser(e){return`ALTER USER ${e} WITH PASSWORD 'new_password';`}updateColumn(e,t){const{name:n,type:r,comment:l,nullable:a,defaultValue:E}=t;return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${n} TYPE ${r};
-- change column name
ALTER TABLE ${e} 
    RENAME COLUMN ${n} TO ${n};
-- Change column comment
COMMENT ON COLUMN ${e}.${n} IS '${l||"comment"}';`}updateColumnSql(e){return new je(e).genAlterSQL()}showUsers(){return'SELECT usename "user" from pg_user '}showAllForeignKeys(){return`SELECT
    c.conname AS constraint_name,
    sch.nspname AS table_schema,
    tbl.relname AS table_name,
    (col.attname) as column_name,
    f_tbl.relname AS referenced_table,
    (f_col.attname) as referenced_column,
    c.confupdtype AS "updateRule",
    c.confdeltype AS "deleteRule"
FROM pg_constraint c
LEFT JOIN LATERAL UNNEST(c.conkey)
    WITH ORDINALITY AS u(attnum, attposition)
    ON TRUE
LEFT JOIN LATERAL UNNEST(c.confkey)
    WITH ORDINALITY AS f_u(attnum, attposition)
    ON f_u.attposition = u.attposition
JOIN pg_class tbl ON tbl.oid = c.conrelid
JOIN pg_namespace sch ON sch.oid = tbl.relnamespace
LEFT JOIN pg_attribute col
    ON (col.attrelid = tbl.oid AND col.attnum = u.attnum)
LEFT JOIN pg_class f_tbl ON f_tbl.oid = c.confrelid
LEFT JOIN pg_namespace f_sch ON f_sch.oid = f_tbl.relnamespace
LEFT JOIN pg_attribute f_col
    ON (f_col.attrelid = f_tbl.oid AND f_col.attnum = f_u.attnum)
WHERE c.contype = 'f'`}showForeignKeys(e,t){return`SELECT
    c.conname AS constraint_name,
    (col.attname) as column_name,
    f_tbl.relname AS referenced_table,
    (f_col.attname) as referenced_column,
    c.confupdtype AS "updateRule",
    c.confdeltype AS "deleteRule"
FROM pg_constraint c
LEFT JOIN LATERAL UNNEST(c.conkey) WITH ORDINALITY AS u(attnum, attposition) ON TRUE
LEFT JOIN LATERAL UNNEST(c.confkey) WITH ORDINALITY AS f_u(attnum, attposition) ON f_u.attposition = u.attposition
JOIN pg_class tbl ON tbl.oid = c.conrelid
JOIN pg_namespace sch ON sch.oid = tbl.relnamespace
LEFT JOIN pg_attribute col ON (col.attrelid = tbl.oid AND col.attnum = u.attnum)
LEFT JOIN pg_class f_tbl ON f_tbl.oid = c.confrelid
LEFT JOIN pg_namespace f_sch ON f_sch.oid = f_tbl.relnamespace
LEFT JOIN pg_attribute f_col ON (f_col.attrelid = f_tbl.oid AND f_col.attnum = f_u.attnum)
WHERE c.contype = 'f' and sch.nspname = '${e}' and tbl.relname = '${t}'`}pingDataBase(e){return e?`set search_path to '${e}';`:null}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l}=e;let a="";return l&&l!=r&&(a=`COMMENT ON TABLE "${t}" IS '${l}';`),n&&t!=n&&(a+=`ALTER TABLE "${t}" RENAME TO "${n}";`),a}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showViewSource(e,t,n){return n?`SELECT CONCAT('CREATE MATERIALIZED VIEW ',matviewname,'
AS
(',regexp_replace(definition,';$',''),')') "Create View"
    ,matviewname "table_name",'definition' "view_definition" from pg_matviews
    WHERE schemaname='${e}' and matviewname='${t}';`:`SELECT CONCAT('CREATE VIEW ',table_name,'
AS
(',regexp_replace(view_definition,';$',''),')') "Create View"
    ,table_name,view_definition from information_schema.views 
    where table_schema='${e}' and table_name='${t}'`}showMaterialViewSource(e,t){return`SELECT CONCAT('CREATE MATERIALIZED VIEW ',matviewname,'
AS
(',regexp_replace(definition,';$',''),')') "Create View"
    ,matviewname "table_name",'definition' "view_definition" from pg_matviews
    WHERE schemaname='${e}' and matviewname='${t}';`}showProcedureSource(e,t){return`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Procedure",'${t}' "Procedure";`}showTriggerSource(e,t){return`select pg_get_triggerdef(oid) "SQL Original Statement",'${e}.${t}' "Trigger" from pg_trigger where tgname = '${t}';`}showColumns(e,t,n){return`SELECT 
          ${n?"c.*,":""}
          c.COLUMN_NAME "name", 
          atttypid::regtype AS pg_reg_type,
          DATA_TYPE "type",
          IS_NULLABLE nullable, 
          numeric_precision "precision",
          numeric_scale "scale",
          CHARACTER_MAXIMUM_LENGTH "maximum_length", 
          COLUMN_DEFAULT "defaultValue", 
          pg_catalog.col_description(pgc.oid, c.ordinal_position::int) AS "comment",
          tc.constraint_type "key",
          tc.constraint_name "constraint_name",
          cc.table_name "referenced_table",
          cc.column_name "referenced_column",
          pa.*
        FROM information_schema.columns c
        JOIN pg_catalog.pg_class pgc ON c.table_name = pgc.relname 
        JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=c.table_schema
        JOIN pg_attribute pa on pa.attname =c.column_name and pa.attrelid =pgc.oid 
        LEFT JOIN information_schema.key_column_usage ccu on ccu.table_schema=c.table_schema
          and ccu.table_name=c.table_name and ccu.column_name=c.COLUMN_NAME
        LEFT JOIN information_schema.table_constraints tc on tc.table_schema=c.table_schema 
          and tc.table_name=c.table_name and tc.constraint_name=ccu.constraint_name
        LEFT JOIN information_schema.constraint_column_usage cc on cc.table_schema=c.table_schema 
          and cc.constraint_name=tc.constraint_name and  tc.constraint_type='FOREIGN KEY'
        WHERE c.TABLE_SCHEMA = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}showChecks(e,t){return`SELECT
    tc.CONSTRAINT_NAME "name",
    cc.CHECK_CLAUSE "clause"
FROM
    "information_schema"."check_constraints" AS cc,
    "information_schema"."table_constraints" AS tc
WHERE
    tc.CONSTRAINT_SCHEMA = '${e}'
    AND tc.TABLE_NAME = '${t}'
    AND tc.CONSTRAINT_TYPE = 'CHECK'
    AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
    AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME
    AND cc.CONSTRAINT_NAME NOT LIKE '%_not_null'`}showPartitions(e,t){return`select col.column_name "columnName", pt.partition_strategy "strategy" from (
      select
          partrelid, partnatts, case partstrat when 'h' then 'HASH' when 'l' then 'LIST' when 'r' then 'RANGE' end as partition_strategy, unnest(partattrs) column_index
      from
          pg_partitioned_table ) pt
      join pg_class pc on pc.oid = pt.partrelid
      join information_schema.columns col on col.table_schema = pc.relnamespace :: regnamespace :: text
        and col.table_name = pc.relname and col.ordinal_position = pt.column_index
      WHERE col.table_schema='${e}' and col.table_name='${t}';`}showTriggers(e,t){const n=t?` AND event_object_table='${t}'`:"";return`SELECT 
              event_object_table table_name,
              trigger_name "trigger_name",
              action_timing timing,
              event_manipulation manipulation ,
              action_orientation orientation,
              action_statement "statement"
            FROM 
              information_schema.TRIGGERS 
            WHERE trigger_schema = '${e}' ${n} 
            ORDER BY TRIGGER_NAME ASC`}showProcedures(e){return`SELECT p.proname "ROUTINE_NAME",
    pg_get_functiondef(p.oid) source,
    p.oid,
    pg_get_function_identity_arguments(p.oid) "argDefs"
from
    pg_proc p
    JOIN pg_namespace n ON p.pronamespace = n.oid
    and n.nspname = '${e}'
    and p.prokind = 'p'
order by p.proname`}showFunctions(e){return`SELECT DISTINCT
    r.ROUTINE_NAME AS "name",
    p.oid,
    pg_get_function_identity_arguments(p.oid) "argDefs"
FROM 
    information_schema.routines r
    JOIN pg_proc p ON r.ROUTINE_NAME = p.proname 
    JOIN pg_namespace n ON p.pronamespace = n.oid 
    AND n.nspname = '${e}'
WHERE 
    r.ROUTINE_SCHEMA = '${e}' 
    AND r.ROUTINE_TYPE = 'FUNCTION' 
ORDER BY 
    r.ROUTINE_NAME ASC`}showFunctionSource(e,t,n){return n?`select pg_get_functiondef('${n}') "Create Function",'${t}' "Function";`:`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Function",'${t}' "Function";`}showViews(e,t){return`select table_name "name" from information_schema.tables where table_schema='${t}' and table_type='VIEW' order by "name";`}showMaterialViews(e,t){return`SELECT matviewname "name" from pg_matviews WHERE schemaname='${t}' order by "name" ASC`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e,t){return`SELECT t.table_name "name", 
    pg_catalog.obj_description(pgc.oid, 'pg_class') "comment",
    pgc.reltuples "table_rows",
    pg_total_relation_size(quote_ident(table_name)) AS "data_length"
FROM information_schema.tables t
JOIN pg_catalog.pg_class pgc ON t.table_name = pgc.relname 
JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=t.table_schema
WHERE t.table_type='BASE TABLE'
AND t.table_schema='${t}' order by t.table_name;`}showDatabases(){return"SELECT datname FROM pg_database WHERE datistemplate = false order by datname ASC;"}showSchemas(){return'SELECT nspname "schema" from pg_catalog.pg_namespace order by nspname ASC;'}showSequences(e){return`select sequencename as name,last_value as sequence from pg_sequences WHERE schemaname='${e}' ORDER BY name;`}showCustomTypes(e){return`SELECT  t.typname as name,typtype as type,string_agg(pg_enum.enumlabel, ',') enum_values
    FROM        pg_type t 
    LEFT JOIN   pg_enum ON pg_enum.enumtypid = t.oid
    LEFT JOIN   pg_catalog.pg_namespace n ON n.oid = t.typnamespace 
    WHERE (t.typrelid = 0 OR (SELECT c.relkind = 'c' FROM pg_catalog.pg_class c WHERE c.oid = t.typrelid)) 
    AND     NOT EXISTS(SELECT 1 FROM pg_catalog.pg_type el WHERE el.oid = t.typelem AND el.typarray = t.oid)
    and n.nspname='${e}' GROUP BY name,type;`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    create_time DATE,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.name$2 IS '$4';`}viewTemplate(e){return`CREATE ${e?"MATERIALIZED ":""}VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1()
LANGUAGE SQL
as $$
[$2]
$$;`}triggerTemplate(e){return`CREATE FUNCTION trigger_fun$1() RETURNS TRIGGER AS 
\\$body\\$
BEGIN
    $2
    RETURN [value];
END;
\\$body\\$ 
LANGUAGE plpgsql;

CREATE TRIGGER [name]$3
[BEFORE/AFTER] INSERT
ON ${e??"[table_name]$4"}
FOR EACH ROW
EXECUTE PROCEDURE [trigger_fun]();`}dropTriggerTemplate(e,t){return`DROP TRIGGER ${e} on ${t}`}functionTemplate(){return`CREATE FUNCTION fun_name$1() 
RETURNS int$2 AS $$
BEGIN
    $3
    return 0;
END;
$$ LANGUAGE plpgsql;`}}class xe extends Ke{showAllForeignKeys(){return`SELECT
      refc.constraint_name "constraint_name",
      refc.constraint_schema "table_schema",
      kcu.table_name "table_name",
      kcu.column_name AS "column_name",
      ccu.table_name AS "referenced_table",
      ccu.column_name AS "referenced_column"
  FROM
      information_schema.referential_constraints AS refc,
      information_schema.key_column_usage AS kcu,
      information_schema.constraint_column_usage AS ccu
  WHERE
      refc.constraint_name = kcu.constraint_name
      AND refc.constraint_schema = kcu.table_schema
      AND ccu.constraint_name = refc.constraint_name;`}showForeignKeys(e,t){return`SELECT
      refc.constraint_name "constraint_name",
      kcu.column_name AS column_name,
      ccu.table_name AS referenced_table,
      ccu.column_name AS referenced_column,
      kcu.ordinal_position AS ord_position,
      refc.update_rule "updateRule",
      refc.delete_rule "deleteRule"
  FROM
      information_schema.referential_constraints AS refc,
      information_schema.key_column_usage AS kcu,
      information_schema.constraint_column_usage AS ccu
  WHERE
      refc.constraint_schema = '${e}'
      AND refc.constraint_name = kcu.constraint_name
      AND refc.constraint_schema = kcu.table_schema
      AND ccu.constraint_name = refc.constraint_name
      AND kcu.table_name = '${t}'
  ORDER BY ord_position;`}showProcedures(e){return`SELECT ROUTINE_NAME "ROUTINE_NAME" FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME ASC`}}class Mn extends xe{showVersion(){return"SELECT VERSION() as server_version"}createIndex(e){throw new Error("Redshift not support index!")}variableList(){return"SHOW ALL"}statusList(){return`SELECT
        'db_numbackends' AS db,
        pg_stat_get_db_numbackends(datid) AS status
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_commit',
        pg_stat_get_db_xact_commit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_rollback',
        pg_stat_get_db_xact_rollback(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_fetched',
        pg_stat_get_db_blocks_fetched(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_hit',
        pg_stat_get_db_blocks_hit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()`}processList(){return`SELECT
        a.pid AS "Id",
        a.usename AS "User",
        a.client_addr AS "Host",
        a.client_port AS "Port",
        datname AS "db",
        query AS "Command",
        l.mode AS "State",
        query_start AS "Time",
        CASE
          WHEN c.relname IS NOT NULL THEN 'Locked Object: ' || c.relname
          ELSE 'Locked Transaction: ' || l.virtualtransaction
        END AS "Info"
      FROM
        pg_stat_activity a
        LEFT JOIN pg_locks l ON a.pid = l.pid
        LEFT JOIN pg_class c ON l.relation = c.oid
      ORDER BY
        a.pid ASC,
        c.relname ASC`}addColumn(e,t){return`ALTER TABLE ${e}
  ADD COLUMN [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment';`}createUser(){return"CREATE USER [name] WITH PASSWORD 'password';"}updateUser(e){return`ALTER USER ${e} WITH PASSWORD 'new_password';`}updateColumn(e,t){const{name:n,type:r}=t;return`-- change column type
ALTER TABLE ${e}
    ALTER COLUMN ${n} TYPE ${r};
-- change column name
ALTER TABLE ${e}
    RENAME COLUMN ${n} TO ${n};`}updateColumnSql(e){return new je(e).genAlterSQL()}showUsers(){return'SELECT usename "user" from pg_user '}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l}=e;let a="";return l&&l!=r&&(a=`COMMENT ON TABLE "${t}" IS '${l}';`),n&&t!=n&&(a+=`ALTER TABLE "${t}" RENAME TO "${n}";`),a}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showTableSource(e,t){return`SHOW TABLE "${e}"."${t}"`}showViewSource(e,t){return`SHOW VIEW "${e}"."${t}"`}showProcedureSource(e,t){return`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Procedure",'${t}' "Procedure";`}showFunctionSource(e,t){return`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Function",'${t}' "Function";`}showTriggerSource(e,t){return`select pg_get_triggerdef(oid) "SQL Original Statement",'${e}.${t}' "Trigger" from pg_trigger where tgname = '${t}';`}showPartitions(e,t){return""}showIndex(e,t){return`select
    t.relname as table_name,
    i.relname as index_name,
    a.attname as column_name,
    ix.indisprimary "isPrimary",
    ix.indisunique "isUnique",
    CASE ix.indisprimary
        WHEN true THEN 'PRIMARY'
    ELSE CASE ix.indisunique
        WHEN true THEN 'UNIQUE'
    ELSE 'KEY'
    END
    END AS index_type,
    am.amname index_method
  from
    pg_class t
    join pg_catalog.pg_namespace pgn ON pgn.oid=t.relnamespace and pgn.nspname='${e}'
    join pg_index ix on t.oid = ix.indrelid
    join pg_attribute a on t.oid = a.attrelid and a.attnum = ANY(string_to_array(textin(int2vectorout(ix.indkey)),' ')::int[])
    join pg_class i on ix.indexrelid = i.oid
    JOIN pg_am am ON am.oid=i.relam
  where
     t.relkind = 'r'
    and t.relname = '${t}'
  order by
    ix.indexrelid;`}showSequences(e){return`SELECT sequence_name name FROM information_schema.sequences WHERE sequence_schema = '${e}' ORDER BY sequence_name`}showTriggers(e,t){const n=t?` AND event_object_table='${t}'`:"";return`SELECT TRIGGER_NAME "trigger_name" FROM information_schema.TRIGGERS WHERE trigger_schema = '${e}' ${n} ORDER BY TRIGGER_NAME ASC`}showProcedures(e){return`SELECT ROUTINE_NAME "ROUTINE_NAME" FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME ASC`}showFunctions(e){return`SELECT ROUTINE_NAME "ROUTINE_NAME" FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME ASC `}showTables(e,t){return`  SELECT t.table_name "name", pg_catalog.obj_description(pgc.oid, 'pg_class') "comment",
    pg_total_relation_size(quote_ident(table_name)) AS "data_length"
FROM information_schema.tables t
JOIN pg_catalog.pg_class pgc ON t.table_name = pgc.relname
JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=t.table_schema
WHERE t.table_type='BASE TABLE'
AND t.table_schema='${t}' order by t.table_name;`}showSchemas(){return'SELECT nspname "schema" from pg_catalog.pg_namespace order by nspname ASC;'}tableTemplate(){return`CREATE TABLE table_name$1(
    id INT identity(1, 1) NOT NULL PRIMARY KEY,
    create_time DATE,
    update_time DATE,
    content$2 VARCHAR(255)
);
COMMENT ON TABLE table_name IS 'table_comment';
COMMENT ON COLUMN table_name.content IS 'content';`}procedureTemplate(){return`CREATE PROCEDURE procedure_name()
as $$
begin
    SELECT 1;
END;
$$ LANGUAGE plpgsql;`}functionTemplate(){return`CREATE FUNCTION function_name()
RETURNS int STABLE
AS $$
    SELECT 1
$$ LANGUAGE sql;`}}class $n extends ce{showVersion(){return'select CURRENT_VERSION() as "server_version";'}createIndex(e){let t=`${e.type||"key"}`;return t.match(/BTREE/i)&&(t="key"),`ALTER TABLE ${e.table} ADD ${t} (\`${e.column||"$1"}\`)`}dropIndex(e,t){return`ALTER TABLE ${e} DROP INDEX \`${t}\``}showIndex(e,t){return""}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"show processlist"}addColumn(e,t){const n=t?` AFTER \`${t}\``:"";return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type]$2 COMMENT '$3'${n};`}createUser(){return`CREATE USER '$1'@'%' IDENTIFIED BY 'password$2';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO '$1'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO '$1'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set 
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var _;const{name:n,type:r,comment:l,nullable:a,defaultValue:E,extra:i,character_set_name:T,collation_name:A}=t,C=a!="YES";return new Y(`ALTER TABLE ${e}`).append(`
	CHANGE ${n} ${n} ${r}`).if(T,`CHARACTER SET ${T}`).if(A,`COLLATE ${A}`).if(C,"NOT NULL").if((_=i==null?void 0:i.toLowerCase())==null?void 0:_.includes("auto_increment"),"AUTO_INCREMENT").if(l,`COMMENT '${l}'`).if(J(E)&&!C,"DEFAULT NULL").if(!J(E),`DEFAULT ${E=="CURRENT_TIMESTAMP"?E:`'${ft(E)}'`}`).toString()}updateColumnSql(e){const{table:t,columnName:n,newColumnName:r,columnType:l,isNotNull:a,isAutoIncrement:E,comment:i,defaultValue:T,oldRow:A}=e,C=`ALTER TABLE "${t}"`,_=a?"SET NOT NULL":"DROP NOT NULL";return new Y(`${C} ALTER COLUMN "${n}" TYPE ${l};`,`
`).if(i&&i!=A.comment,`${C} ALTER COLUMN "${n}" COMMENT '${i}';`).if(a!=A.isNotNull,`${C} ALTER COLUMN "${n}" ${_};`).if(n!=r,`${C} RENAME COLUMN "${n}" TO "${r}";`).toString()}showCollations(){return""}showChecks(e,t){return""}showUsers(){return"SELECT user user,host host FROM mysql.user;"}pingDataBase(e,t){return e?`use "${t}"."${e}"`:"select 1"}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l,collation:a,newCollation:E}=e;let i="";return l&&l!=r&&(i=`ALTER TABLE \`${t}\` COMMENT = '${l}';`),E&&E!=a&&(i+=`ALTER TABLE \`${t}\` collate = '${E}';`),n&&t!=n&&(i+=`ALTER TABLE \`${t}\` RENAME TO \`${n}\`;`),i}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return"CREATE DATABASE $1;"}showTableSource(e,t){return`select get_ddl('table', '${e}.${t}') "Create Table";`}showViewSource(e,t){return`select get_ddl('view', '${e}.${t}') "Create View";`}showProcedureSource(e,t){return`select get_ddl('PROCEDURE', '${e}.${t}()') "Create Procedure";`}showFunctionSource(e,t){return`select get_ddl('FUNCTION', '${e}.${t}()') "Create Function";`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER \`${e}\`.\`${t}\`;`}showColumns(e,t){return`SELECT 
        c.COLUMN_NAME "name",
        DATA_TYPE "type",
        CHARACTER_MAXIMUM_LENGTH "maximum_length",
        IS_IDENTITY "key",
        COMMENT "comment",
        IS_NULLABLE "nullable",
        COLUMN_DEFAULT "defaultValue",
        COLLATION_NAME "$"
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}showTriggers(e,t){const n=t?` AND EVENT_OBJECT_TABLE='${t}'`:"";return`SELECT TRIGGER_NAME FROM information_schema.TRIGGERS WHERE TRIGGER_SCHEMA = '${e}' ${n} ORDER BY TRIGGER_NAME;`}showProcedures(e){return`SELECT PROCEDURE_NAME ROUTINE_NAME FROM information_schema.PROCEDURES WHERE PROCEDURE_SCHEMA = '${e}' ORDER BY PROCEDURE_NAME`}showFunctions(e){return`SELECT FUNCTION_NAME ROUTINE_NAME FROM INFORMATION_SCHEMA.FUNCTIONS WHERE FUNCTION_SCHEMA='${e}' ORDER BY FUNCTION_NAME`}showViews(e,t){return`SELECT COMMENT "comment",TABLE_NAME "name",ROW_COUNT "table_rows"
        FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${t}' and TABLE_TYPE='VIEW' ORDER BY TABLE_NAME;`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e,t){return`SELECT COMMENT "comment",TABLE_NAME "name",ROW_COUNT "table_rows"
        FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${t}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showDatabases(){return"show databases;"}showSchemas(){return'SELECT SCHEMA_NAME "schema" FROM INFORMATION_SCHEMA.SCHEMATA;'}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY AUTOINCREMENT,
    create_time DATE,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.name$2 IS '$4';`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`create procedure proc_name$1() returns string
language javascript
as $$
    $2return 1+1;
$$;`}functionTemplate(){return`CREATE FUNCTION fun_name$1() RETURNS int
AS
$$
    $2return 1;
$$`}}class Qe extends qe{showVersion(){return"select sqlite_version() as server_version"}updateColumn(e,t){throw new Error("SQLite not support update column.")}updateColumnSql(e){throw new Error("SQLite not support update column.")}createIndex(e){const{table:t,column:n="$2"}=e;return`CREATE INDEX ${`${t}_${n}`} ON ${t}(${n});`}showIndex(e,t){return`SELECT name index_name FROM sqlite_master WHERE type='index' and tbl_name='${t}' `}dropIndex(e,t){return`DROP INDEX ${t};`}showTables(e,t){return"SELECT name, type FROM sqlite_master WHERE type='table' ORDER BY type ASC, name ASC;"}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type$2];`}showSequences(e){return"SELECT name,seq sequence FROM sqlite_sequence"}showColumns(e,t){return`SELECT t1.*,t1.pk "key",t1.dflt_value "defaultValue",t2."table" "referenced_table",t2."to" "referenced_column" FROM PRAGMA_TABLE_INFO('${t}') t1
        left join (
            SELECT * FROM  pragma_foreign_key_list('${t}')
        ) t2  on t1.name=t2.'from';`}showViews(e,t){return"SELECT name, type FROM sqlite_master WHERE type='view' AND name <> 'sqlite_sequence' AND name <> 'sqlite_stat1' ORDER BY type ASC, name ASC;"}showTriggers(e,t){return`SELECT name, tbl_name, sql FROM sqlite_master WHERE type='trigger' ${t?` AND tbl_name='${t}'`:""} ORDER BY name ASC;`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTableSource(e,t){return`SELECT sql "Create Table" FROM sqlite_master where name='${t}' and type='table';`}showViewSource(e,t){return`SELECT sql "Create View" FROM sqlite_master where name='${t}' and type='view';`}showTriggerSource(e,t){return`SELECT sql FROM sqlite_master where name='${t}' and type='trigger';`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    content TEXT
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}}class hn extends Qe{showVersion(){return"SELECT library_version as server_version from pragma_version()"}pingDataBase(e,t){return e?`set schema '${e}';`:null}showDatabases(){return'SELECT DISTINCT catalog_name "Database" from information_schema.schemata ORDER BY catalog_name'}showSchemas(e){return`SELECT schema_name "schema" from information_schema.schemata WHERE catalog_name='${e}' ORDER BY schema_name`}showTables(e,t){return`SELECT table_name "name" FROM information_schema.tables
        WHERE table_type in ('BASE TABLE','LOCAL TEMPORARY') and table_catalog='${e}' and table_schema = '${t}' order by table_name`}showViews(e,t){return`
SELECT table_name "name",1 "view_group",null "source" FROM information_schema.tables
        WHERE table_type='VIEW' and table_catalog='${e}' and table_schema = '${t}'
        UNION all
SELECT viewname "name",2 "view_group",definition "source" FROM pg_catalog.pg_views
        WHERE schemaname = '${t}'
ORDER BY "view_group",name`}showSequences(e){return`SELECT sequence_name AS name, last_value AS sequence 
                FROM duckdb_sequences() 
                WHERE schema_name = '${e}'`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id INTEGER NOT NULL PRIMARY KEY,
    content TEXT
);`}showColumns(e,t){return["system","temp"].includes(e)?`SELECT column_name "name", data_type "type",
        column_default "defaultValue", is_nullable "nullable"
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`:`SELECT t1.*,t1.pk "key",t1.dflt_value "defaultValue" FROM PRAGMA_TABLE_INFO('${t}') t1;`}updateColumn(e,t){const{name:n,type:r}=t;return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${n} TYPE ${r};
-- change column name
ALTER TABLE ${e} 
    RENAME COLUMN ${n} TO ${n};`}updateColumnSql(e){return new He(e).genAlterSQL()}}class Tt extends Ne{showVersion(){return"select version() as server_version;"}showDatabases(){return"show databases"}showTables(e,t){return`show tables in ${e}`}showColumns(e,t){return`describe ${e}.${t};`}showViews(e,t){return`show views in ${e}`}}class gn extends Ne{showVersion(){return"SELECT node_version as server_version FROM system.runtime.nodes;"}pingDataBase(e){return e?`use ${e}`:null}showDatabases(){return"show catalogs"}}class fn extends Ne{showVersion(){return"select release_version from system.local;"}showUsers(){return'SELECT role as "user" FROM system_auth.roles;'}pingDataBase(e){return e?`use ${e}`:null}createDatabase(e){return`CREATE KEYSPACE $1
WITH REPLICATION = { 
    'class' : 'SimpleStrategy', 
    'replication_factor' : 1 
};`}dropDatabase(e){return`DROP KEYSPACE ${e}`}showDatabases(){return'select keyspace_name as "database" from system_schema.keyspaces;'}showTables(e,t){return`select table_name as "name" from system_schema.tables where keyspace_name='${e}'`}showColumns(e,t){return`select column_name as "name", type, kind as "key" 
                from system_schema.columns 
                where keyspace_name='${e}' 
                and table_name='${t}'`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int PRIMARY key,
    create_time DATE,
    update_time DATE,
    content TEXT
);`}}class wn extends He{otherPart(){const{oldRow:e,isAutoIncrement:t}=this.param;return!e.isAutoIncrement&&t?`${this.afterColumnPrefix} SET GENERATED ALWAYS as identity;`:e.isAutoIncrement&&!t?`${this.afterColumnPrefix} DROP GENERATED;`:null}commentPart(){const{oldRow:e,table:t,columnName:n,comment:r}=this.param;if(r!=e.comment)return`COMMENT ON COLUMN "${t}"."${n}" is '${r}';`}changeTypePart(){const{oldRow:e,columnType:t}=this.param;return e.type==t?"":`${this.afterColumnPrefix} SET DATA TYPE ${t};`}}class _t extends Ne{showVersion(){return'SELECT SERVICE_LEVEL as "server_version" FROM SYSIBMADM.ENV_INST_INFO;'}showUsers(){return`SELECT GRANTEE "user" FROM syscat.dbauth WHERE GRANTEETYPE='U';`}pingDataBase(e){return e?`set SCHEMA ${e}`:null}showDatabases(){return'select schemaname "database" from syscat.schemata'}showTableSource(e,t){return null}showTables(e,t){return`select tabname "name", remarks "comment" from syscat.tables where tabschema='${t}' and TYPE='T' order by tabname`}showColumns(e,t){return`select COLUMN_NAME "name",
        DATA_TYPE "type",
        IS_NULLABLE "nullable",
        NUMERIC_PRECISION "precision",
        NUMERIC_SCALE "scale",
        CHARACTER_MAXIMUM_LENGTH "maximum_length",
        sc.length "number_length",
        COLUMN_DEFAULT "defaultValue",
        tc.TYPE "key",
        sc.remarks "comment",
        sc.IDENTITY "extra",
        r.REFTABNAME "referenced_table",
        trim(r.PK_COLNAMES) "referenced_column"
        from SYSIBM.columns c
        left join syscat.keycoluse kc
            on c.TABLE_SCHEMA=kc.TABSCHEMA and c.TABLE_NAME=kc.TABNAME  and c.COLUMN_NAME=kc.COLNAME
        left join SYSCAT.tabconst tc
            on c.TABLE_SCHEMA=tc.TABSCHEMA and c.TABLE_NAME=tc.TABNAME  and tc.CONSTNAME=kc.CONSTNAME
        left join sysibm.syscolumns sc
            on c.TABLE_SCHEMA=sc.TBCREATOR and c.TABLE_NAME=sc.TBNAME  and c.COLUMN_NAME=sc.NAME
        left join syscat.references r
            on c.TABLE_SCHEMA=r.TABSCHEMA and c.TABLE_NAME=r.TABNAME  and c.COLUMN_NAME=trim(r.FK_COLNAMES)
        where
            TABLE_SCHEMA = '${e}'
            and TABLE_NAME = '${t}'
        order by ORDINAL_POSITION;`}updateColumnSql(e){return new wn(e).genAlterSQL()}showAllForeignKeys(){return`SELECT 
        CONSTNAME "constraint_name",
        TABSCHEMA "table_schema",
        TABNAME "table_name",
        FK_COLNAMES "column_name",
    REFTABNAME "referenced_table",
    PK_COLNAMES "referenced_column"
     FROM syscat.references`}showForeignKeys(e,t){return`SELECT 
        FK_COLNAMES "column_name",
        CONSTNAME "constraint_name",
        REFTABNAME "referenced_table",
        PK_COLNAMES "referenced_column",
        UPDATERULE "updateRule",
        DELETERULE "deleteRule"
         FROM syscat.references WHERE 
        TABSCHEMA='${e}' and TABNAME='${t}'`}showIndex(e,t){return`SELECT 
        COLNAMES "column_name",
        INDNAME "index_name",
        UNIQUERULE='U' "isUnique"
         FROM SYSCAT.INDEXES WHERE TABNAME = '${t}' AND TABSCHEMA = '${e}'`}showViews(e,t){return`select VIEWNAME "name",TEXT "source" from SYSCAT.VIEWS where VIEWSCHEMA = '${t}';`}showProcedures(e){return`select PROCNAME "routine_name",TEXT "source" from SYSCAT.procedures where PROCSCHEMA = '${e}' order by PROCNAME;`}showChecks(e,t){return`SELECT CONSTNAME "name",TEXT "clause" FROM SYSCAT.CHECKS WHERE TABNAME = '${t}' AND TABSCHEMA = '${e}';`}showTriggers(e,t){let n=`SELECT TRIGNAME "trigger_name",TEXT "source",TABNAME "table_name",TRIGEVENT "event" FROM syscat.triggers WHERE TABSCHEMA = '${e}'`;return t&&(n+=`AND TABNAME = '${t}'`),n}showFunctions(e){return`select FUNCNAME "routine_name",BODY "source" from SYSCAT.FUNCTIONS where FUNCSCHEMA = '${e}' order by FUNCNAME;`}dropIndex(e,t){return`DROP INDEX "${t}"`}createDatabase(e){return`CREATE SCHEMA ${e}$1;`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id INTEGER NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    create_time DATE,
    update_time DATE,
    content VARCHAR(255)
);`}processList(){return`SELECT session_auth_id,
        application_handle,
        elapsed_time_sec,
        activity_state,
        rows_read,
        stmt_text info
 FROM sysibmadm.mon_current_sql
 ORDER BY elapsed_time_sec DESC`}}class Dn extends Pe{tableTemplate(){return`CREATE TABLE table_name(  
    id int NOT NULL  COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    name VARCHAR(255)
) 
AGGREGATE KEY(id,create_time,name)
DISTRIBUTED BY HASH(id) BUCKETS 1
PROPERTIES (
    "replication_allocation" = "tag.location.default: 1"
);`}showColumns(e,t){return`SELECT 
        c.COLUMN_NAME name,
        COLUMN_TYPE type,
        COLUMN_COMMENT comment,COLUMN_KEY \`key\`,IS_NULLABLE nullable,
        CHARACTER_MAXIMUM_LENGTH maximum_length,
        COLUMN_DEFAULT defaultValue,
        INSTR(COLUMN_TYPE,'zerofill')>0 "zerofill",
        INSTR(COLUMN_TYPE,'unsigned')>0 "unsigned",
        EXTRA extra,
        COLLATION_NAME collation_name,
        CHARACTER_SET_NAME character_set_name 
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}}class Un extends ce{showVersion(){return"SELECT SERVER_VERSION();"}createIndex(e){let t=`${e.type||"key"}`;return t.match(/BTREE/i)&&(t="key"),`ALTER TABLE ${e.table} ADD ${t} (\`${e.column||"$1"}\`)`}dropIndex(e,t){return`ALTER TABLE ${e} DROP INDEX \`${t}\``}showIndex(e,t){return`SELECT column_name "column_name",index_name "index_name",index_type "index_type",non_unique=0 "isUnique" FROM INFORMATION_SCHEMA.STATISTICS WHERE table_schema='${e}' and table_name='${t}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"show processlist"}addColumn(e,t){const n=t?` AFTER \`${t}\``:"";return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type]$2 COMMENT '$3'${n};`}createUser(){return`CREATE USER '$1'@'%' IDENTIFIED BY 'password$2';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO '$1'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO '$1'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set 
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var l,a;const{nullable:n,extra:r}=t;return this.updateColumnSql({table:e,...t,isNotNull:n!="YES",isAutoIncrement:(a=(l=r==null?void 0:r.toLowerCase())==null?void 0:l.includes)==null?void 0:a.call(l,"auto_increment")})}updateColumnSql(e){const{table:t,name:n,columnName:r=n,type:l,unsigned:a,zerofill:E,useCurrentTimestamp:i,isNotNull:T,isAutoIncrement:A,comment:C,defaultValue:_,character_set_name:b,collation_name:I}=e,N=!wt(l)&&!l.match(/json/i);return new Y(`ALTER TABLE \`${t}\``).append(`
	CHANGE \`${r}\` \`${n}\` ${l}`).if(a=="1","UNSIGNED").if(E=="1","ZEROFILL").if(i,"ON UPDATE CURRENT_TIMESTAMP").if(N&&b,`CHARACTER SET ${b}`).if(N&&I,`COLLATE ${I}`).if(T,"NOT NULL").if(A,"AUTO_INCREMENT").if(C,`COMMENT '${C}'`).if(J(_)&&!T,"DEFAULT NULL").if(!J(_),`DEFAULT ${_=="CURRENT_TIMESTAMP"?_:`${re(_,l)}`}`).append(";").toString()}showCollations(){return null}showChecks(e,t){return`SELECT
        tc.CONSTRAINT_NAME "name",
        cc.CHECK_CLAUSE "clause"
    FROM
        information_schema.CHECK_CONSTRAINTS AS cc,
        information_schema.TABLE_CONSTRAINTS AS tc
    WHERE
        tc.CONSTRAINT_SCHEMA = '${e}'
        AND tc.TABLE_NAME = '${t}'
        AND tc.CONSTRAINT_TYPE = 'CHECK'
        AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
        AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME;`}showUsers(){return"SELECT user user,host host FROM mysql.user;"}pingDataBase(e){return e?`use \`${e}\``:null}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l,collation:a,newCollation:E}=e;let i="";return l&&l!=r&&(i=`ALTER TABLE \`${t}\` COMMENT = '${l}';`),E&&E!=a&&(i+=`ALTER TABLE \`${t}\` collate = '${E}';`),n&&t!=n&&(i+=`ALTER TABLE \`${t}\` RENAME TO \`${n}\`;`),i}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return"CREATE DATABASE $1;"}showTableSource(e,t){return`SHOW CREATE TABLE \`${e}\`.\`${t}\`;`}showPartitions(e,t){return`SELECT 
PARTITION_NAME "name",PARTITION_METHOD "strategy",PARTITION_EXPRESSION "columnName",
PARTITION_DESCRIPTION "value",TABLE_ROWS "rows",DATA_LENGTH "length"
        FROM information_schema.partitions WHERE TABLE_SCHEMA='${e}' AND TABLE_NAME = '${t}' AND PARTITION_NAME IS NOT NULL`}showViewSource(e,t){return`SHOW CREATE VIEW  \`${e}\`.\`${t}\`;`}showProcedureSource(e,t){return`SHOW CREATE PROCEDURE \`${e}\`.\`${t}\`;`}showFunctionSource(e,t){return`SHOW CREATE FUNCTION \`${e}\`.\`${t}\`;`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER \`${e}\`.\`${t}\`;`}showColumns(e,t){return`desc ${t}`}showForeignKeys(e,t){return`SELECT
        c.COLUMN_NAME column_name, ik.CONSTRAINT_NAME constraint_name,
        ik.REFERENCED_TABLE_NAME referenced_table, ik.REFERENCED_COLUMN_NAME referenced_column,
        UPDATE_RULE "updateRule",
        DELETE_RULE "deleteRule"
        FROM
        information_schema.columns c join information_schema.KEY_COLUMN_USAGE ik on c.table_schema = ik.TABLE_SCHEMA
        and c.table_name = ik.TABLE_NAME and c.COLUMN_NAME = ik.COLUMN_NAME
        JOIN information_schema.REFERENTIAL_CONSTRAINTS ir on ik.CONSTRAINT_NAME=ir.CONSTRAINT_NAME
        WHERE c.table_schema = '${e}' and c.table_name = '${t}' ORDER BY ik.CONSTRAINT_NAME;`}showProcedures(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME`}showFunctions(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME`}showViews(e){return`SELECT TABLE_NAME name,SECURITY_TYPE "view_group" FROM information_schema.VIEWS  WHERE TABLE_SCHEMA = '${e}' ORDER BY TABLE_NAME`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e){return`show ${e}.tables;`}showDatabases(){return"show databases"}showSchemas(){return this.showDatabases()}tableTemplate(e){return`CREATE TABLE table_name$1(  
    create_time timestamp,
    name$2 NCHAR(255)
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1()
BEGIN
$2
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1() RETURNS int$2
READS SQL DATA
BEGIN
    $3
    return 0;
END;`}}class yn extends Tt{showVersion(){return""}}class vn extends Ne{showDatabases(){return"SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA ORDER BY SCHEMA_NAME;"}showTables(e,t=e){return`SELECT table_name,ddl source FROM ${t}.INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = '${t}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showTableSource(e,t){return`SELECT ddl source FROM ${e}.INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = '${e}' and table_name='${t}' ORDER BY TABLE_NAME;`}showColumns(e,t){return`SELECT COLUMN_NAME name,DATA_TYPE type, IS_NULLABLE nullable 
            FROM ${e}.INFORMATION_SCHEMA.COLUMNS WHERE table_schema = '${e}' AND table_name = '${t}' ORDER BY ORDINAL_POSITION;`}showViews(e,t=e){return`SELECT TABLE_NAME,view_definition source FROM ${t}.INFORMATION_SCHEMA.VIEWS  WHERE TABLE_SCHEMA = '${t}' ORDER BY TABLE_NAME`}tableTemplate(e){return`CREATE TABLE ${e}.table_name$1(  
    id INT64,
    create_time DATE,
    update_time DATE,
    content STRING
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM `}createDatabase(e){return`CREATE SCHEMA ${e}$1;`}}class Bn extends _t{showVersion(){return"SELECT SYSTEM_VALUE_NAME, CURRENT_CHARACTER_VALUE FROM QSYS2.SYSTEM_VALUE_INFO WHERE SYSTEM_VALUE_NAME IN ('QSRLNBR', 'QMODEL');"}showUsers(){return`SELECT AUTHORIZATION_NAME AS "user" FROM QSYS2.USER_INFO WHERE STATUS = 'ENABLED';`}pingDataBase(e){return e?`SET SCHEMA ${e}`:null}showDatabases(){return'SELECT SCHEMA_NAME AS "database" FROM QSYS2.SYSSCHEMAS;'}showTables(e,t){return`SELECT TABLE_NAME AS "name", TABLE_TEXT AS "comment" FROM QSYS2.SYSTABLES WHERE TABLE_SCHEMA='${t}' AND TABLE_TYPE='T' ORDER BY TABLE_NAME;`}showColumns(e,t){return`SELECT COLUMN_NAME AS "name",
                       DATA_TYPE AS "type",
                       IS_NULLABLE AS "nullable",
                       NUMERIC_PRECISION AS "precision",
                       NUMERIC_SCALE AS "scale",
                       CHARACTER_MAXIMUM_LENGTH AS "maximum_length",
                       COLUMN_DEFAULT AS "defaultValue",
                       COLUMN_TEXT AS "comment",
                       IDENTITY AS "extra"
                FROM QSYS2.SYSCOLUMNS
                WHERE TABLE_SCHEMA = '${e}'
                  AND TABLE_NAME = '${t}'
                ORDER BY ORDINAL_POSITION;`}showAllForeignKeys(){return`SELECT 
                    CONSTRAINT_NAME AS "constraint_name",
                    TABLE_SCHEMA AS "table_schema",
                    TABLE_NAME AS "table_name",
                    CONSTRAINT_KEYS AS "column_name",
                    SYSTEM_TABLE_NAME AS "referenced_table",
                    SYSTEM_CONSTRAINT_SCHEMA AS "referenced_column"
                FROM QSYS2.SYSCST
                WHERE CONSTRAINT_TYPE = 'FOREIGN KEY';`}showForeignKeys(e,t){return`SELECT 
                    CONSTRAINT_KEYS AS "column_name",
                    CONSTRAINT_NAME AS "constraint_name",
                    SYSTEM_TABLE_NAME AS "referenced_table",
                    SYSTEM_CONSTRAINT_SCHEMA AS "referenced_column"
                FROM QSYS2.SYSCST
                WHERE TABLE_SCHEMA='${e}' AND TABLE_NAME='${t}' AND CONSTRAINT_TYPE='FOREIGN KEY';`}showIndex(e,t){return`SELECT 
                    INDEX_NAME AS "index_name",
                    COLUMN_NAME AS "column_name",
                    CASE WHEN NON_UNIQUE = 0 THEN 'YES' ELSE 'NO' END AS "isUnique"
                FROM QSYS2.SYSINDEXES
                WHERE TABLE_NAME = '${t}' AND TABLE_SCHEMA = '${e}';`}showViews(e,t){return`SELECT VIEW_NAME AS "name", VIEW_DEFINITION AS "source" FROM QSYS2.SYSVIEWS WHERE TABLE_SCHEMA = '${t}';`}showProcedures(e){return`SELECT SPECIFIC_NAME AS "routine_name", ROUTINE_DEFINITION AS "source" FROM QSYS2.SYSROUTINES WHERE ROUTINE_SCHEMA = '${e}' ORDER BY SPECIFIC_NAME;`}showChecks(e,t){return`SELECT CONSTRAINT_NAME AS "name", CHECK_CLAUSE AS "clause" FROM QSYS2.SYSCST WHERE TABLE_NAME = '${t}' AND TABLE_SCHEMA = '${e}' AND CONSTRAINT_TYPE = 'CHECK';`}showTriggers(e,t){return`SELECT TRIGGER_NAME AS "trigger_name", ACTION_STATEMENT AS "source", EVENT_OBJECT_TABLE AS "table_name", EVENT_MANIPULATION AS "event" FROM QSYS2.SYSTRIGGERS WHERE EVENT_OBJECT_SCHEMA = '${e}'${t?` AND EVENT_OBJECT_TABLE = '${t}'`:""};`}showFunctions(e){return`SELECT SPECIFIC_NAME AS "routine_name", ROUTINE_DEFINITION AS "source" FROM QSYS2.SYSFUNCS WHERE FUNCTION_SCHEMA = '${e}' ORDER BY SPECIFIC_NAME;`}dropIndex(e,t){return`DROP INDEX ${e}.${t};`}processList(){return`SELECT JOB_NAME, 
                       AUTHORIZATION_NAME, 
                       TOTAL_CPU_TIME, 
                       TOTAL_DISK_IO_COUNT, 
                       TOTAL_MEMORY_USAGE 
                FROM QSYS2.ACTIVE_JOB_INFO 
                ORDER BY TOTAL_CPU_TIME DESC;`}}class rt extends Pe{showDatabases(){return"show databases"}showTables(e){return`show tables from ${e}`}showColumns(e,t){return`show columns from ${t}`}showViews(e){return`show views from ${e}`}showIndexes(e,t){return`show indexes from ${t}`}showFunctions(e){return`show functions from ${e}`}showProcedures(e){return`show procedures from ${e}`}showTriggers(e,t){return`show triggers from ${t}`}}class Fn extends Ke{showVersion(){return"select replace(version(), 'KingbaseES ', '');"}showViewSource(e,t,n){return n?`SELECT 
    'CREATE MATERIALIZED VIEW ' || schemaname || '.' || matviewname || ' AS ' ||
    definition as mview_ddl
FROM sys_matviews
WHERE schemaname = '${e}' 
    AND matviewname = '${t}';`:`SELECT 
    'CREATE OR REPLACE VIEW ' || schemaname || '.' || viewname || ' AS ' || 
    definition as view_ddl
FROM sys_views 
WHERE schemaname = '${e}' 
    AND viewname = '${t}';`}triggerTemplate(e){return`CREATE TRIGGER trigger_name$1
[BEFORE/AFTER] INSERT ON ${e??"[table_name]$2"}
FOR EACH ROW BEGIN
    $3
END;`}}class Hn extends Qe{showDatabases(){return"list"}showTables(e){return`SELECT name, type FROM sqlite_master 
                WHERE type='table' 
                AND name NOT LIKE '_cf%' 
                ORDER BY type ASC, name ASC;`}}class Pn extends xe{showVersion(){return"SELECT VERSION() as server_version"}createIndex(e){throw new Error("Redshift not support index!")}variableList(){return"SHOW ALL"}statusList(){return`SELECT
        'db_numbackends' AS db,
        pg_stat_get_db_numbackends(datid) AS status
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_commit',
        pg_stat_get_db_xact_commit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_rollback',
        pg_stat_get_db_xact_rollback(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_fetched',
        pg_stat_get_db_blocks_fetched(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_hit',
        pg_stat_get_db_blocks_hit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()`}processList(){return`SELECT
        a.pid AS "Id",
        a.usename AS "User",
        a.client_addr AS "Host",
        a.client_port AS "Port",
        datname AS "db",
        query AS "Command",
        l.mode AS "State",
        query_start AS "Time",
        CASE
          WHEN c.relname IS NOT NULL THEN 'Locked Object: ' || c.relname
          ELSE 'Locked Transaction: ' || l.virtualtransaction
        END AS "Info"
      FROM
        pg_stat_activity a
        LEFT JOIN pg_locks l ON a.pid = l.pid
        LEFT JOIN pg_class c ON l.relation = c.oid
      ORDER BY
        a.pid ASC,
        c.relname ASC`}addColumn(e,t){return`ALTER TABLE ${e}
  ADD COLUMN [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment';`}createUser(){return"CREATE USER [name] WITH PASSWORD 'password';"}updateUser(e){return`ALTER USER ${e} WITH PASSWORD 'new_password';`}updateColumn(e,t){const{name:n,type:r}=t;return`-- change column type
ALTER TABLE ${e}
    ALTER COLUMN ${n} TYPE ${r};
-- change column name
ALTER TABLE ${e}
    RENAME COLUMN ${n} TO ${n};`}updateColumnSql(e){return new je(e).genAlterSQL()}showUsers(){return'SELECT usename "user" from pg_user '}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l}=e;let a="";return l&&l!=r&&(a=`COMMENT ON TABLE "${t}" IS '${l}';`),n&&t!=n&&(a+=`ALTER TABLE "${t}" RENAME TO "${n}";`),a}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showViewSource(e,t,n){return n?`SELECT CONCAT('CREATE MATERIALIZED VIEW ',matviewname,'
AS
(',regexp_replace(definition,';$',''),')') "Create View"
    ,matviewname "table_name",'definition' "view_definition" from pg_matviews
    WHERE schemaname='${e}' and matviewname='${t}';`:`SELECT CONCAT('CREATE VIEW ',table_name,'
AS
(',regexp_replace(view_definition,';$',''),')') "Create View"
    ,table_name,view_definition from information_schema.views 
    where table_schema='${e}' and table_name='${t}'`}showMaterialViewSource(e,t){return`SELECT CONCAT('CREATE MATERIALIZED VIEW ',matviewname,'
AS
(',regexp_replace(definition,';$',''),')') "Create View"
    ,matviewname "table_name",'definition' "view_definition" from pg_matviews
    WHERE schemaname='${e}' and matviewname='${t}';`}showProcedureSource(e,t){return`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Procedure",'${t}' "Procedure";`}showFunctionSource(e,t){return`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Function",'${t}' "Function";`}showTriggerSource(e,t){return`select pg_get_triggerdef(oid) "SQL Original Statement",'${e}.${t}' "Trigger" from pg_trigger where tgname = '${t}';`}showPartitions(e,t){return""}showSequences(e){return`SELECT sequence_name name FROM information_schema.sequences WHERE sequence_schema = '${e}' ORDER BY sequence_name`}showTriggers(e,t){const n=t?` AND event_object_table='${t}'`:"";return`SELECT TRIGGER_NAME "trigger_name" FROM information_schema.TRIGGERS WHERE trigger_schema = '${e}' ${n} ORDER BY TRIGGER_NAME ASC`}showProcedures(e){return` SELECT proname AS "ROUTINE_NAME",
       pg_catalog.pg_get_function_arguments(p.oid) AS "argDefs"
FROM pg_catalog.pg_proc p
     LEFT JOIN pg_catalog.pg_namespace n ON n.oid = p.pronamespace
WHERE pg_catalog.pg_function_is_visible(p.oid)
  AND n.nspname = '${e}'
  AND p.prokind = 'p'; `}showFunctions(e){return`SELECT proname AS name,
       pg_catalog.pg_get_function_result(p.oid) AS return_type,
       pg_catalog.pg_get_function_arguments(p.oid) AS "argDefs",
       CASE
           WHEN p.proisagg THEN 'agg'
           WHEN p.proiswindow THEN 'window'
           WHEN p.prorettype = 'pg_catalog.trigger'::pg_catalog.regtype THEN 'trigger'
           ELSE 'normal'
       END AS type
FROM pg_catalog.pg_proc p
     LEFT JOIN pg_catalog.pg_namespace n ON n.oid = p.pronamespace
WHERE pg_catalog.pg_function_is_visible(p.oid)
  AND n.nspname = '${e}'
  AND p.prokind = 'f';  `}showTables(e,t){return`SELECT t.table_name "name", pg_catalog.obj_description(pgc.oid, 'pg_class') "comment",
    pg_total_relation_size(quote_ident(table_name)) AS "data_length"
FROM information_schema.tables t
JOIN pg_catalog.pg_class pgc ON t.table_name = pgc.relname
JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=t.table_schema
WHERE t.table_type='BASE TABLE'
AND t.table_schema='${t}' order by t.table_name;`}showSchemas(){return'SELECT nspname "schema" from pg_catalog.pg_namespace order by nspname ASC;'}tableTemplate(){return`CREATE TABLE table_name$1(  
    id serial NOT NULL PRIMARY KEY,
    create_time DATE,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.name$2 IS '$4';`}procedureTemplate(){return`CREATE OR REPLACE PROCEDURE procedure_name()
AS
BEGIN
   SELECT 1;
END;`}functionTemplate(){return`CREATE FUNCTION function_name()
RETURNS int STABLE
AS $$
    SELECT 1
$$ LANGUAGE sql;`}}class xn extends Ne{showVersion(){return"select version() as server_version;"}showDatabases(){return"SHOW CATALOGS"}pingDataBase(e,t){return`USE ${e}`}showTables(e,t){return`SELECT table_name FROM information_schema.tables
   WHERE table_catalog = '${e}' and table_schema = '${t}' and TABLE_TYPE<>'VIEW' `}tableTemplate(){return`CREATE TABLE table_name$1(
    id LONG PRIMARY KEY,
    create_time DATE,
    update_time DATE,
    content STRING
);`}showColumns(e,t){return`SELECT c.COLUMN_NAME name,
c.DATA_TYPE type, c.IS_NULLABLE nullable,
CASE WHEN tc.constraint_type = 'PRIMARY KEY' THEN 'YES' ELSE 'NO' END AS key
    FROM information_schema.columns c
    LEFT JOIN 
        information_schema.key_column_usage kcu ON c.table_schema = kcu.table_schema
        AND c.table_name = kcu.table_name AND c.column_name = kcu.column_name
    LEFT JOIN 
        information_schema.table_constraints tc ON kcu.constraint_name = tc.constraint_name
        AND kcu.table_schema = tc.table_schema AND kcu.table_name = tc.table_name
    WHERE c.table_schema = '${e}' AND c.table_name = '${t}'
    ORDER BY c.ordinal_position;`}createDatabase(e){return`CREATE CATALOG $1${e};`}dropDatabase(e){return`DROP CATALOG ${e};`}}class kn extends xe{showTables(e,t){return`SELECT t.table_name "name", pg_catalog.obj_description(pgc.oid, 'pg_class') "comment",pgc.reltuples "table_rows"
FROM information_schema.tables t
JOIN pg_catalog.pg_class pgc ON t.table_name = pgc.relname 
JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=t.table_schema
WHERE t.table_type='BASE TABLE'
AND t.table_schema='${t}' order by t.table_name;`}}function Vn(o,e){switch(o||(o=d.MYSQL),o){case d.MYSQL:return e?new rt:new Pe;case d.MARIA_DB:return new bn;case d.DORIS:return new Dn;case d.MYSQL_COMPATIBLE:return new rt;case d.KINGBASE:return new Fn;case d.COCKROACH:return new kn;case d.PG:return e?new xe:new Ke;case d.REDSHIFT:return new Mn;case d.GAUSS_DB:return new Pn;case d.SQLServer:return new Ln;case d.D1:return new Hn;case d.libSQL:case d.SQLITE:return new Qe;case d.DUCK_DB:return new hn;case d.SNOWFLAKE:return new $n;case d.CLICKHOUSE:return new Cn;case d.DM:return new Sn;case d.ORACLE:return new mt;case d.CASSANDRA:return new fn;case d.BIG_QUERY:return new vn;case d.PRESTO:case d.TRINO:return new gn;case d.HIVE:return new Tt;case d.DATABRICKS:return new xn;case d.ATHENA:return new yn;case d.DB2:return new _t;case d.AS400:return new Bn;case d.MONGO_DB:return new On;case d.NEO4J:return new In;case d.TDengine:return new Un}return new Ne}class ue{constructor(e){this.meta=e,this.dialect=Vn(e.dbType),this.wrappedTable=Te(this.meta.table,this.meta.dbType,Dt.Always)}updateTable(e){return this.dialect.updateTable(e)}columnTypes(){return["INTEGER",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"hr","DATE","TIMESTAMP","hr","BOOLEAN","FLOAT","DOUBLE","hr","TEXT","JSON","BLOB"]}strategies(){return["RESTRICT","CASCADE","SET NULL","SET DEFAULT","NO ACTION"]}newColumn(e){const{name:t,type:n,isNotNull:r}=e,l=r?" NOT NULL":"";return`ALTER TABLE ${this.wrappedTable} ADD COLUMN ${Te(t,this.meta.dbType)} ${n}${l}`}updateColumn(e){return this.dialect.updateColumnSql({...e,table:this.meta.table,tableMeta:this.meta,schema:this.meta.schema})}dropColumn(e){return`ALTER TABLE ${this.wrappedTable} DROP COLUMN ${Te(e,this.meta.dbType)}`}formatIndexType(e){return e.index_type}indexTypes(){return[{label:"INDEX",value:"INDEX"},{label:"UNIQUE",value:"UNIQUE"}]}newIndex(e){return`ALTER TABLE ${this.wrappedTable} ADD INDEX (${e.columns.join(",")})`}dropIndex(e){return this.dialect.dropIndex(this.wrappedTable,e)}dropTrigger(e){return this.dialect.dropTriggerTemplate(e,this.wrappedTable)}showChecks(){return this.dialect.showChecks(this.meta.schema,this.meta.table)}showForeignKeys(){return this.dialect.showForeignKeys(this.meta.schema,this.meta.table)}newForeignKey(e){const{column:t,foreignKeyName:n,refTable:r,refColumn:l,onUpdate:a,onDelete:E}=e,i=a=="NO ACTION"?"":` ON UPDATE ${a}`,T=E=="NO ACTION"?"":` ON DELETE ${E}`;return new Y(`ALTER TABLE "${this.meta.table}"`).if(n,()=>`ADD CONSTRAINT ${n}`).if(!n,"ADD").append(`FOREIGN KEY ("${t}") REFERENCES "${r}"("${l}")${i}${T};`).toString()}dropForeignKey(e){return`ALTER TABLE "${this.meta.table}" DROP CONSTRAINT ${e};`}newCheck(e){return`ALTER TABLE ${this.wrappedTable} ADD CHECK (${e});`}dropCheck(e){return`ALTER TABLE ${this.wrappedTable} DROP CONSTRAINT ${e};`}splitColumn(e,t='"'){return e.map(n=>t+n+t).join(",")}}class Yn extends ue{columnTypes(){return["Int32","String","Float32","hr","Date","DateTime","hr","BOOLEAN","UUID",{label:"Array",value:"Array(String)"},"hr","JSON",{label:"Tuple",value:"Tuple(String)"},{label:"Map",value:"Map(String,String)"},"hr","Int8","Int16","Int64","Int128","Int256","UInt8","UInt16","UInt32","UInt64","UInt128","UInt256","hr","DateTime64","DateTime32","hr","Decimal32","Decimal64","Decimal128","Decimal256","hr","IPv4","IPv6","hr",{label:"Enum8",value:"Enum8('a'=1)"},{label:"Enum16",value:"Enum16('a'=1)"},"hr",{label:"FixedString",value:"FixedString(100)"}]}newColumn(e){const{name:t,type:n,defaultValue:r,comment:l}=e;return new Y(`ALTER TABLE ${this.wrappedTable} ADD COLUMN "${t}" ${n}`).if(!J(r),`DEFAULT ${re(r,n)}`).if(l,`COMMENT '${l}'`).toString()}newIndex(e){const{columns:t}=e;return`ALTER TABLE "${this.meta.table}" ADD INDEX ${t.join("")}_${new Date().getTime()}_index expression TYPE type GRANULARITY value AFTER ${this.splitColumn(t)}`}showForeignKeys(){return null}showChecks(){return null}}class Je extends ue{newColumn(e){const{name:t,type:n,defaultValue:r,isNotNull:l}=e;return new Y(`ALTER TABLE "${this.meta.schema}".${Te(this.meta.table,this.meta.dbType)} ADD ${Te(t,this.meta.dbType)} ${n}`).if(l,"NOT NULL").if(!J(r),`DEFAULT ${re(r,n)}`).toString()}dropColumn(e){return`ALTER TABLE "${this.meta.schema}".${this.wrappedTable} DROP COLUMN ${Te(e,this.meta.dbType)}`}newIndex(e){const{table:t=this.meta.table,columns:n,type:r}=e,l=`${t}_${n.join("_")}_${new Date().getTime()}`;return`CREATE ${r=="UNIQUE"?"UNIQUE":""} INDEX ${l} ON "${this.meta.schema}"."${t}"(${this.splitColumn(n)});`}newCheck(e){return`ALTER TABLE "${this.meta.schema}".${this.wrappedTable} ADD CHECK (${e});`}dropCheck(e){return`ALTER TABLE "${this.meta.schema}".${this.wrappedTable} DROP CONSTRAINT ${e};`}dropForeignKey(e){return`ALTER TABLE "${this.meta.schema}"."${this.meta.table}" DROP CONSTRAINT ${e};`}newForeignKey(e){return super.newForeignKey(e).replace(`"${this.meta.table}"`,`"${this.meta.schema}"."${this.meta.table}"`)}}class Wn extends ue{indexTypes(){return[{label:"INDEX",value:"INDEX"},{label:"UNIQUE",value:"UNIQUE"},{label:"FULLTEXT",value:"FULLTEXT"}]}columnTypes(){return["INT",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"hr","DATETIME","TIMESTAMP","DATE","hr","BIT","FLOAT","DOUBLE",{label:"DECIMAL",value:"DECIMAL(10,2)"},"BIGINT","hr","TEXT","JSON","BLOB","BINARY","hr",{label:"ENUM",value:"ENUM('item')"},{label:"SET",value:"SET('item')"},"hr","TINYINT","SMALLINT","MEDIUMINT","hr","TIME","YEAR","hr","VARBINARY","TINYBLOB","MEDIUMBLOB","LONGBLOB","TINYTEXT","MEDIUMTEXT","LONGTEXT","hr","GEOMETRY","POINT","LINESTRING","POLYGON","MULTIPOINT","MULTILINESTRING","MULTIPOLYGON","GEOMETRYCOLLECTION"]}newColumn(e){const{name:t,type:n,comment:r,defaultValue:l,isNotNull:a,unsigned:E,zerofill:i}=e;return console.log(e),new Y(`ALTER TABLE ${this.wrappedTable} ADD COLUMN \`${t}\` ${n}`).if(E&&E!=0,"UNSIGNED").if(i,"ZEROFILL").if(a,"NOT NULL").if(r,`COMMENT '${r}'`).if(!J(l),`DEFAULT ${re(l,n)}`).toString()}formatIndexType(e){const t=e.index_type.toUpperCase();return t=="BTREE"?e.index_name=="PRIMARY"?"PRIMARY":Ye(e.isUnique)?"UNIQUE":"KEY":t}newIndex(e){const{type:t="key",columns:n}=e;return`ALTER TABLE \`${this.meta.table}\` ADD ${t} (${this.splitColumn(n,"`")})`}newForeignKey(e){const{column:t,foreignKeyName:n,refTable:r,refColumn:l,onUpdate:a,onDelete:E}=e,i=a=="NO ACTION"?"":` ON UPDATE ${a}`,T=E=="NO ACTION"?"":` ON DELETE ${E}`;return new Y(`ALTER TABLE \`${this.meta.table}\``).if(n,()=>`ADD CONSTRAINT ${n}`).if(!n,"ADD").append(`FOREIGN KEY (\`${t}\`) REFERENCES \`${r}\`(\`${l}\`)${i}${T};`).toString()}dropForeignKey(e){return`ALTER TABLE \`${this.meta.table}\` DROP FOREIGN KEY ${e};`}}class Gn extends ue{newIndex(e){const{table:t=this.meta.table,columns:n,type:r}=e,l=`${t}_${n.join("_")}_${new Date().getTime()}`;return`CREATE ${r=="UNIQUE"?"UNIQUE":""} INDEX ${l} ON "${t}"(${this.splitColumn(n)})`}newColumn(e){const{name:t,type:n,isNotNull:r,defaultValue:l,comment:a}=e;return new Y(`ALTER TABLE ${Te(this.meta.table,this.meta.dbType)} ADD ${t} ${n}`).if(!J(l),`DEFAULT ${re(l,n)}`).if(r,"NOT NULL").if(a,`;
COMMENT ON COLUMN ${this.wrappedTable}."${t.toUpperCase()}" is '${a}';`).toString()}newForeignKey(e){const{column:t,foreignKeyName:n,refTable:r,refColumn:l,onUpdate:a,onDelete:E}=e,i=a=="NO ACTION"?"":` ON UPDATE ${a}`,T=E=="NO ACTION"?"":` ON DELETE ${E}`,A=n||`${t}_${r}_${l}_fk_${Math.floor(Math.random()*30)}`;return`ALTER TABLE "${this.meta.table}" ADD CONSTRAINT ${A} FOREIGN KEY ("${t}") REFERENCES ${r}(${l})${i}${T};`}showForeignKeys(){var t;let{schema:e}=this.meta;return(e==null?void 0:e.toLowerCase())==((t=this.meta.user)==null?void 0:t.toLowerCase())&&(e=void 0),this.dialect.showForeignKeys(e,this.meta.table)}columnTypes(){return["INTEGER",{label:"VARCHAR2",value:"VARCHAR2(255)"},{label:"CHAR",value:"CHAR(50)"},"hr","DATE","TIMESTAMP","hr","NUMBER","FLOAT","hr","CLOB","BLOB","hr","BINARY_FLOAT","BINARY_DOUBLE","hr","TIMESTAMP WITH TIME ZONE","TIMESTAMP WITH LOCAL TIME ZONE","hr","INTERVAL YEAR TO MONTH","INTERVAL DAY TO SECOND","hr","RAW","LONG RAW","LONG","hr","NCHAR","NVARCHAR2","NCLOB","hr","BFILE","ROWID","UROWID"]}}class qn extends ue{newColumn(e){const{name:t,type:n,comment:r,defaultValue:l,isNotNull:a}=e,E=this.wrappedTable;return new Y(`ALTER TABLE ${E} ADD COLUMN "${t}" ${n}`).if(a,"NOT NULL").if(!J(l),`DEFAULT ${re(l,n)}`).append(";").if(r,`
COMMENT ON COLUMN ${E}."${t}" is '${r}';`).toString()}columnTypes(){return["INTEGER",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"TIMESTAMP","DATE","BOOLEAN","FLOAT","TEXT","JSON","BLOB","hr","SMALLINT","BIGINT","REAL","DOUBLE PRECISION","hr","BYTEA","XML","UUID","ARRAY","hr","NUMERIC","MONEY","INTERVAL","CIDR","INET","MACADDR"]}indexTypes(){return[{label:"INDEX",value:"INDEX"},{label:"UNIQUE",value:"UNIQUE"},{label:"HASH",value:"HASH"}]}newIndex(e){const{table:t=this.meta.table,columns:n,type:r}=e,l=r=="HASH"?"hash":"btree";return`CREATE ${r=="UNIQUE"?"UNIQUE":""} INDEX ${n.join("_")}_${new Date().getTime()}_index ON "${t}" USING ${l} (${this.splitColumn(n)});`}}class jn extends ue{newIndex(e){throw new Error("Method not implemented.")}dropForeignKey(e){return`ALTER TABLE "${this.meta.table}" DROP CONSTRAINT "${e}";`}showForeignKeys(){return`select
       rco.constraint_name "constraint_name",
       rco.UPDATE_RULE "updateRule",
       rco.DELETE_RULE "deleteRule",
       pk_tco.table_name "referenced_table"
from information_schema.referential_constraints rco
    join information_schema.table_constraints fk_tco on fk_tco.constraint_name = rco.constraint_name and fk_tco.constraint_schema = rco.constraint_schema
    join information_schema.table_constraints pk_tco on pk_tco.constraint_name = rco.unique_constraint_name and pk_tco.constraint_schema = rco.unique_constraint_schema
    WHERE fk_tco.TABLE_SCHEMA='${this.meta.schema}' and fk_tco.table_name='${this.meta.table}' 
    ORDER BY rco.CREATED`}}class Kn extends ue{newIndex(e){const{table:t=this.meta.table,columns:n}=e;return`CREATE INDEX ${`${t}_${n.join("_")}_${new Date().getTime()}`} ON "${t}"(${this.splitColumn(n)});`}showForeignKeys(){return`SELECT "from" column_name, "table" referenced_table, "to" referenced_column,
        on_update, on_delete 
        FROM pragma_foreign_key_list('${this.meta.table}');`}showChecks(){return null}}class Qn extends ue{newColumn(e){const{type:t,defaultValue:n}=e;return new Y(super.newColumn(e)).if(!J(n),`DEFAULT ${re(n,t)}`).toString()}newIndex(e){const{table:t=this.meta.table,columns:n}=e;return`CREATE INDEX ${`${t}_${n.join("_")}_${new Date().getTime()}`} ON "${t}"(${this.splitColumn(n)});`}showForeignKeys(){return`SELECT constraint_column_names "column_name" FROM duckdb_constraints()
        WHERE constraint_type='FOREIGN KEY' and database_name not in ('system','temp') and schema_name='${this.meta.schema}' and table_name='${this.meta.table}'`}showChecks(){return null}}class Jn extends Je{columnTypes(){return["INTEGER",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"hr","DATE","TIMESTAMP","TIME","hr","BOOLEAN","FLOAT","DOUBLE","hr","TEXT","BLOB","hr","SMALLINT","BIGINT","DECFLOAT","hr","TIMESTAMP WITH TIME ZONE","TIME WITH TIME ZONE","hr","XML","GRAPHIC","VARGRAPHIC","hr","DBCLOB","CLOB"]}}class Xn extends Je{columnTypes(){return["INTEGER","TEXT","hr","DATE","TIMESTAMP","hr","BOOLEAN","FLOAT","DOUBLE","hr","BLOB","hr","BIGINT","SMALLINT","TINYINT","VARINT","hr","TIME","TIMEUUID","hr","DECIMAL","COUNTER","hr","UUID","INET","ASCII","DURATION"]}dropColumn(e){return`ALTER TABLE ${this.wrappedTable} DROP ${Te(e,this.meta.dbType)}`}}function zn(o){switch(o.dbType){case d.PG:case d.REDSHIFT:case d.KINGBASE:case d.GAUSS_DB:return new qn(o);case d.DM:case d.ORACLE:return new Gn(o);case d.DB2:return new Jn(o);case d.CASSANDRA:return new Xn(o);case d.SQLServer:return new Je(o);case d.SNOWFLAKE:return new jn(o);case d.CLICKHOUSE:return new Yn(o);case d.DUCK_DB:return new Qn(o);case d.D1:case d.libSQL:case d.SQLITE:return new Kn(o);case d.MYSQL:case d.MARIA_DB:case d.DATABRICKS:return new Wn(o);default:return new ue(o)}}const Zn={class:"mt-2 design-container"},ea={id:"infoPanel"},ta={class:"tab"},na=["onClick"],aa={class:"design-data-container"},ra=ie({__name:"design",setup(o){const e=P(!1),t=de(),n=x(()=>t.activePanel),r=x(()=>[{id:"ddl",i18n:"design.ddl",icon:"codicon-edit green"},{id:"column",i18n:"design.column",icon:"codicon-symbol-field blue"},{id:"foreignKey",i18n:"design.foreignKey",icon:"codicon-symbol-class yellow",hidden:x(()=>!t.supportForeignKey)},{id:"index",i18n:"design.index",icon:"codicon-github-action purple",hidden:x(()=>!t.supportIndex)},{id:"trigger",i18n:"design.trigger",icon:"codicon-github-action orange",hidden:x(()=>!t.supportTrigger)},{id:"check",i18n:"design.check",icon:"codicon-tools red",hidden:x(()=>!t.supportCheck||!e.value)}].filter(a=>{var E;return((E=a==null?void 0:a.hidden)==null?void 0:E.value)!=!0}));_e(()=>{D.on("dbType",a=>{t.updateDBType(a)}).on("designMeta",a=>{e.value=a.isSupportCheck,t.dialect=zn(a),t.updateFullInfo(a),D.emitImmediately("designMetaNext",a)}).on("success",()=>{Et(m("design.updateSuccess"))}).on("error",a=>{Be(a)}).on("refresh_design",()=>{l()}),l(),Ut(55,["tableTab","infoPanel"],a=>{t.remainHeight=a})});const l=()=>{D.emit("init",{type:"design"})};return(a,E)=>(R(),U("div",Zn,[h("div",ea,[s(_n),h("ul",ta,[(R(!0),U(te,null,Ee(r.value,(i,T)=>(R(),U("li",{key:T,class:et(["tab__item",{"tab__item--active":n.value==i.id}]),onClick:A=>c(t).activePanel=i.id},[i.icon?(R(),U("i",{key:0,type:"icon",class:et(i.icon),style:{position:"relative",top:"3px"}},null,2)):f("",!0),v(" "+y(c(m)(i.i18n)),1)],10,na))),128))])]),h("div",aa,[k(s(Yt,null,null,512),[[ee,n.value=="ddl"]]),k(s(Zt,null,null,512),[[ee,n.value=="column"]]),k(s(qt,null,null,512),[[ee,n.value=="foreignKey"]]),k(s(kt,null,null,512),[[ee,n.value=="index"]]),k(s(pn,null,null,512),[[ee,n.value=="trigger"]]),k(s(Nn,null,null,512),[[ee,n.value=="check"]])])]))}}),Ua=it(ra,[["__scopeId","data-v-68f3d12d"]]);export{Ua as default};
