(this.webpackJsonpPinPointGuam=this.webpackJsonpPinPointGuam||[]).push([[13],{1094:function(e,t,a){"use strict";var n=a(16),r=a(0),i=a(1098),o=a(824),c=a(434),s=a(1676),l=a(815),d=a(19),u=a.n(d),p=a(880),m=a(4),b=a(1),f=Object(c.a)({customLabel:{"& label":{fontSize:"12px"}},customOption:{fontSize:"12px !important"},customButton:{maxWidth:"255px",minWidth:"158px"}});t.a=function(e){var t=Object(r.useState)(""),a=Object(n.a)(t,2),c=a[0],d=a[1],j=f(e);return Object(b.jsxs)("div",{className:"flex flex-1 items-center mr-20",children:[Object(b.jsxs)(o.a,{classes:{root:j.customLabel},label:"Territory of Guam",variant:"outlined",className:"mr-12 ml-12",required:!0,select:!0,fullWidth:!0,value:c,disabled:!e.docRecordId.length||"Completed"===e.ptrStatus,onChange:function(e){return d(e.target.value)},children:[Object(b.jsx)(i.a,{classes:{root:j.customOption},value:"Urban",children:"Urban"},"urban"),Object(b.jsx)(i.a,{classes:{root:j.customOption},value:"Suburban",children:"Suburban"},"sub-urban")]}),Object(b.jsx)(l.a,{className:Object(m.default)("whitespace-nowrap mx-4",j.customButton),variant:"contained",color:"secondary",size:"large",disabled:!c||"Completed"===e.ptrStatus,startIcon:Object(b.jsx)(s.a,{}),onClick:function(){u.a.put("ptr/set_urban_unurban",{ptr_id:e.ptrId,doc_record_id:e.docRecordId,status:c}).then((function(t){Object(p.h)(t.data.message),e.fetchData(e.ptrId),d(null)})).catch((function(e){var t,a;Object(p.g)(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message),d(null)}))},children:"Update"})]})}},1692:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(17),i=a(16),o=a(10),c=a.n(o),s=a(9),l=a(0),d=a(1630),u=a(1512),p=a(176),m=a(931),b=a.n(m),f=a(434),j=a(930),h=a(907),x=a(4),O=a(174),g=a(904),v=a(880),y=a(919),C=a(920),w=a(917),k=a(918),D=a(1094),N=a(824),S=a(1676),R=a(815),I=a(19),T=a.n(I),P=a(1),B=Object(f.a)({customLabel:{"& label":{fontSize:"12px"}},customButton:{maxWidth:"255px",minWidth:"158px"}}),A=function(e){var t=Object(l.useState)(null),a=Object(i.a)(t,2),n=a[0],r=a[1],o=B(e);return Object(P.jsxs)("div",{className:"flex flex-1 justify-start items-center mr-10",children:[Object(P.jsx)(N.a,{id:"ctInfo",label:"CT Info",classes:{root:o.customLabel},type:"text",className:"mr-12 ml-12 w-full",name:"ctInfo",inputProps:{maxLength:50},disabled:!e.docRecordId.length||"Completed"===e.ptrStatus,onChange:function(e){return r(e.target.value)},variant:"outlined"}),Object(P.jsx)(R.a,{className:Object(x.default)("whitespace-nowrap mx-8",o.customButton),variant:"contained",color:"secondary",size:"large",disabled:!n||"Completed"===e.ptrStatus,startIcon:Object(P.jsx)(S.a,{}),onClick:function(){T.a.put("ptr/update_ct_info",{ptr_id:e.ptrId,doc_record_id:e.docRecordId,ct_info:n}).then((function(t){Object(v.h)(t.data.message),e.fetchData(e.ptrId),r(null)})).catch((function(e){var t,a;Object(v.g)(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message),r(null)}))},children:"Update"})]})},E=[{name:"Document No.",label:"Doc No.",options:{filter:!0,display:"excluded",customBodyRender:v.a}},{name:"Doc No.",label:"Doc No.",options:{filter:!1,sort:!0,download:!1,setCellProps:function(){return{style:{textAlign:"center",minWidth:"90px"}}},customBodyRender:v.a,sortCompare:v.d}},{name:"Territory of Guam",label:"Territory of Guam",options:{filter:!0,sort:!0,print:!1,customBodyRender:v.a}},{name:"CT Info",label:"CT Info",options:{filter:!0,sort:!0,print:!1,customBodyRender:v.a}},{name:"PTR Report Status",label:"PTR Report Status",options:{filter:!0,sort:!0,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:v.a}},{name:"Doc Record Id",label:"Doc Record Id",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:v.a}}],F=Object(f.a)({customLabel:{"& label":{fontSize:"12px"}},dark1Background:{backgroundColor:"rgba(200,200,200,0.5)"},dark2Background:{"&:hover":{backgroundColor:"rgba(200,200,200,1)"}},printTitle:{background:"#000000",padding:"4px 15px","& > h2":{fontSize:"20px",color:"#FFFFFF",fontWeight:"bold",marginBottom:"0"}}});t.default=function(e){var t,a,o,m,f,N,S,R,I=Object(l.useState)(!1),T=Object(i.a)(I,2),B=T[0],M=T[1],L=Object(l.useState)([]),z=Object(i.a)(L,2),W=z[0],Y=z[1],q=Object(l.useState)(!1),H=Object(i.a)(q,2),G=H[0],U=H[1],V=Object(l.useState)(""),J=Object(i.a)(V,2),K=J[0],X=J[1],Q=Object(l.useState)([]),Z=Object(i.a)(Q,2),$=Z[0],ee=Z[1],te=Object(s.c)((function(e){return e.ptr.ptrDetails.details})),ae=Object(s.c)((function(e){return e.ptr.ptrDetails.alpha})),ne=F(),re=Object(s.b)(),ie=Object(l.useMemo)((function(){return{filter:!0,filterType:"multiselect",rowsPerPage:100,selectableRows:"multiple",download:!1,print:!1,draggableColumns:{enabled:!0,transitionTime:300},tableBodyMaxHeight:"calc(100vh - 280px)",onRowSelectionChange:function(e,t){var a=t.map((function(e){return W.at(e.index)})).map((function(e){return e[5]}));ee(a)},setRowProps:function(e,t,a){var n={class:ne.dark2Background};return a%2===0&&(n.class=Object(x.default)(n.class,ne.dark1Background)),n},customSearch:v.b}}),[ne,W]);Object(l.useEffect)(Object(r.a)(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(re(Object(p.b)("Document Edit")),_.isEmpty(te)){t.next=7;break}if(e.match.params.id===te[0].id){t.next=5;break}return t.next=5,oe(e.match.params.id);case 5:t.next=10;break;case 7:if(null===e||void 0===e||null===(a=e.match)||void 0===a||null===(n=a.params)||void 0===n||!n.id){t.next=10;break}return t.next=10,oe(e.match.params.id);case 10:case"end":return t.stop()}}),t)}))),[null===(t=e.match)||void 0===t||null===(a=t.params)||void 0===a?void 0:a.id]),Object(l.useEffect)((function(){if(!_.isEmpty(te)||!_.isEmpty(ae)){ee([]);var e=Object(v.f)(te,[],!0).map((function(e){return[e.docno,Object(P.jsx)(y.a,{row:e,ptrId:te[0].id,fetchData:oe}),e.urban_suburban,e.ct_info,e.ptr_report_status.replace("_"," "),e.doc_record_id]})),t=ae.map((function(e){return[e.docno,Object(P.jsx)(y.a,{row:e,ptrId:te[0].id,fetchData:oe}),e.urban_suburban,e.ct_info,e.ptr_report_status.replace("_"," "),e.doc_record_id]}));Y([].concat(Object(n.a)(e),Object(n.a)(t)))}}),[te,ae]);var oe=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.next=3,Object(h.a)(t);case 3:M(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsxs)(d.a,{sx:{margin:"30px"},children:[Object(P.jsx)(k.a,{ptrDetails:te,isLoading:B,setPtrStatus:X}),Object(P.jsx)(C.a,{refreshData:function(){return oe(e.match.params.id)},ptrDetails:te,ptrId:e.match.params.id}),Object(P.jsx)("div",{className:"my-10 flex justify-between",children:Object(P.jsxs)("div",{className:"flex w-full items-center",children:[Object(P.jsx)(A,{ptrId:null===e||void 0===e||null===(o=e.match)||void 0===o||null===(m=o.params)||void 0===m?void 0:m.id,docRecordId:$,fetchData:oe,ptrStatus:K}),Object(P.jsx)(D.a,{ptrId:null===e||void 0===e||null===(f=e.match)||void 0===f||null===(N=f.params)||void 0===N?void 0:N.id,docRecordId:$,fetchData:oe,ptrStatus:K}),K&&Object(P.jsx)(w.a,{ptrId:null===e||void 0===e||null===(S=e.match)||void 0===S||null===(R=S.params)||void 0===R?void 0:R.id,ptrStatus:K,fetchData:oe})]})}),Object(P.jsx)("div",{className:"w-full flex flex-col mt-16",children:Object(P.jsx)(b.a,{title:Object(P.jsxs)(O.a,{variant:"h6",children:["Document Edit",B&&Object(P.jsx)(u.a,{size:24,style:{marginLeft:15,position:"relative",top:4}})]}),data:W,columns:E,options:ie})}),Object(P.jsx)(j.a,{}),W&&Object(P.jsx)(g.a,{openModal:G,setOpenModal:U,title:"DOCUMENT EDIT REPORT",subTitle:"PinPointGuam: Documents List",columns:E.slice(1),rows:null===W||void 0===W?void 0:W.map((function(e){return e.slice(1)})),isLoading:B})]})}},880:function(e,t,a){"use strict";a.d(t,"f",(function(){return c})),a.d(t,"e",(function(){return s})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return d})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p})),a.d(t,"h",(function(){return m})),a.d(t,"g",(function(){return b}));var n=a(426),r=a.n(n),i=a(175),o=a(61),c=function(e,t,a){var n=[].concat.apply([],e.map((function(e){return e.properties[0].docs})));return a?n:s(n,t)},s=function(e,t){return e.filter((function(e){return t.includes(e.ptr_report_status)}))},l=function(e){return function(t,a){return((t.data?r()(t.data,"DD/MM/YYYY").valueOf():-1/0)-(a.data?r()(a.data,"DD/MM/YYYY").valueOf():-1/0))*("asc"===e?1:-1)}},d=function(e){return function(t,a){return(parseInt(t.data.props.row.doc_no)-parseInt(a.data.props.row.doc_no))*("asc"===e?1:-1)}},u=function(e){return void 0===e||"undefined"===e||null===e||"null"===e||"nil"===e||""===e?"":e},p=function(e,t,a){return!!t.filter((function(t,n){var r,i,o;return"Doc No."===a[n].name?null===t||void 0===t||null===(r=t.props)||void 0===r||null===(i=r.row)||void 0===i||null===(o=i.docno)||void 0===o?void 0:o.toLowerCase().includes(e.toLowerCase()):"Status"===a[n].name?t.props.label.toLowerCase().includes(e.toLowerCase()):null===t||void 0===t?void 0:t.toString().toLowerCase().includes(e.toLowerCase())})).length},m=function(e){i.a.dispatch(Object(o.c)({message:e,autoHideDuration:3e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"}))},b=function(e){i.a.dispatch(Object(o.c)({message:e||"Network Error",autoHideDuration:3e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"}))}},891:function(e,t,a){"use strict";var n=a(8),r=a(174),i=a(1512),o=a(434),c=a(4),s=a(880),l=a(1),d=Object(o.a)((function(e){return{dark1Background:{backgroundColor:"rgba(200,200,200,0.5)"},dark2Background:{"&:hover":{backgroundColor:"rgba(200,200,200,1)"}},tData:{width:"80px",wordBreak:"break-word"}}}));t.a=function(e){var t,a,o=d(e);return Object(l.jsx)("div",{className:e.classes,children:Object(l.jsx)("div",{className:"table-responsive",children:Object(l.jsxs)("table",{className:"simple",children:[Object(l.jsx)("thead",Object(n.a)(Object(n.a)({},null===e||void 0===e||null===(t=e.options)||void 0===t?void 0:t.headProps),{},{children:Object(l.jsx)("tr",{children:e.columns.map((function(e,t){return Object(l.jsx)("th",{style:e.cellStyle,id:e.id,children:Object(l.jsx)(r.a,{className:"font-semibold",children:e.name})},t)}))})})),Object(l.jsx)("tbody",Object(n.a)(Object(n.a)({},null===e||void 0===e||null===(a=e.options)||void 0===a?void 0:a.bodyProps),{},{children:e.isLoading?Object(l.jsx)("tr",{children:Object(l.jsx)("td",{colSpan:6,className:"text-center",children:Object(l.jsx)(i.a,{size:24})})}):e.rows.length?e.rows.map((function(t,a){return Object(l.jsx)("tr",{className:e.striped&&a%2===0?Object(c.default)(o.dark1Background,o.dark2Background):"",children:t.map((function(e,t){return Object(l.jsx)("td",{className:o.tData,children:Object(l.jsx)(r.a,{className:"truncate break-normal",children:Object(s.a)(e)})},t)}))},a)})):Object(l.jsx)("tr",{children:Object(l.jsx)("td",{colSpan:6,className:"text-center",children:"No Data"})})}))]})})})}},901:function(e,t,a){"use strict";var n=a(933),r=a(0),i=a(1149),o=a(434),c=(a(905),a(1)),s=Object(o.a)({headerWrapper:{background:"#22d3ee",alignItems:"center",padding:"10px 15px 0",minHeight:"50px",position:"relative"},logoWrapper:{width:"auto",height:"90px","& > img":{width:"auto",height:"auto",maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}},printTitle:{fontSize:"30px",color:"white",fontWeight:"bold",textAlign:"right"},printSubData:{fontSize:"20px",color:"Black",textAlign:"right",display:"inline",marginLeft:0,paddingRight:"10px",wordBreak:"break-word"},printSubTitle:{background:"#000000",padding:"4px 15px",position:"relative",left:0,top:0,display:"table-header-group",zIndex:"9",width:"100%","& > h2":{fontSize:"20px",color:"#FFFFFF",fontWeight:"bold",marginBottom:"0"}}}),l=Object(r.forwardRef)((function(e,t){var a=Object(r.useRef)(),o=s(),l=Object(n.useReactToPrint)({content:function(){return a.current}});return Object(r.useImperativeHandle)(t,(function(){return{printData:function(){l()}}})),Object(c.jsx)("div",{className:"hidden",children:Object(c.jsxs)("div",{ref:a,children:[Object(c.jsxs)(i.a,{container:!0,spacing:2,className:o.headerWrapper,children:[Object(c.jsx)(i.a,{item:!0,xs:3,className:"p-36",children:Object(c.jsx)("div",{className:o.logoWrapper,children:Object(c.jsx)("img",{src:"assets/images/logos/PinPointV2-bg.png",alt:"PINPOINTGUAM"})})}),Object(c.jsxs)(i.a,{item:!0,xs:9,className:"p-36",children:[Object(c.jsx)("div",{className:"d-flex justify-end items-center my-auto",children:Object(c.jsx)("h4",{className:o.printTitle,children:e.title})}),Object(c.jsx)("div",{className:"d-flex justify-end items-right",children:e.subData?null===e||void 0===e?void 0:e.subData.map((function(e){return e.map((function(e){return Object(c.jsxs)("h5",{className:o.printSubData,children:[e.name,","]})}))})):""})]}),Object(c.jsx)("div",{className:o.printSubTitle,children:Object(c.jsx)("h2",{children:e.subTitle})})]}),Object(c.jsx)("div",{children:e.children})]})})}));t.a=l},904:function(e,t,a){"use strict";var n=a(20),r=a(16),i=a(7),o=a(425),c=a(795),s=a(422),l=a(1630),d=a(813),u=a(1208),p=a(815),m=a(434),b=a(4),f=a(0),j=a(891),h=a(901),x=a(1661),O=a(1),g=["openModal","setOpenModal","children"],v=Object(m.a)((function(e){return{container:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"auto",backgroundColor:e.palette.background.paper,border:"2px solid #555",padding:"3rem"},choices:{maxHeight:"60vh",overflowY:"scroll"},checkBox:{marginBottom:"10px",width:"30%",justifyContent:"flex-start",alignItems:"flex-start","& span":{display:"flex",alignItems:"center",paddingTop:"0","&:last-child":{top:"-10px",width:"100%",alignItems:"flex-start",height:"40px",overflow:"hidden",display:"-webkit-box","-webkit-line-clamp":"2","-webkit-box-orient":"vertical"}}}}}));t.a=function(e){var t=e.openModal,a=e.setOpenModal,m=(e.children,Object(i.a)(e,g)),y=v(m),C=Object(f.useRef)(),w=Object(f.useState)([]),k=Object(r.a)(w,2),D=k[0],N=k[1],S=Object(f.useState)([]),R=Object(r.a)(S,2),I=R[0],T=R[1];Object(f.useEffect)((function(){N(m.columns.map((function(e,t){return{name:e.name,id:t}}))),T(m.columns.map((function(e,t){return t})))}),[m.columns]);return Object(O.jsx)(o.a,{open:t,onClose:function(){return a(!1)},closeAfterTransition:!0,BackdropComponent:c.a,BackdropProps:{timeout:200,onDragOver:function(e){return e.preventDefault()},onDrop:function(e){return e.preventDefault()}},children:Object(O.jsx)(s.a,{in:t,children:Object(O.jsxs)(l.a,{className:Object(b.default)(m.className,y.container,"rounded-12"),children:[Object(O.jsx)("h2",{children:"Show Columns"}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:y.choices,children:m.columns.map((function(e,t){return[Object(O.jsx)(d.a,{className:y.checkBox,label:e.name,control:Object(O.jsx)(u.a,{checked:D.filter((function(t){return t.name===e.name})).length,value:e.name,onChange:function(e){return function(e,t){e.target.checked?(N((function(a){return[].concat(Object(n.a)(a),[{name:e.target.value,id:t}])})),T((function(e){return[].concat(Object(n.a)(e),[t])}))):(N((function(t){return t.filter((function(t){return t.name!==e.target.value}))})),T((function(e){return e.filter((function(e){return e!==t}))})))}(e,t)}})})]}))}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"my-50 w-full flex justify-center",children:Object(O.jsx)(p.a,{variant:"contained",color:"secondary",startIcon:Object(O.jsx)(x.a,{}),size:"large",onClick:function(){return C.current.printData()},children:"Print"})}),Object(O.jsx)(h.a,{ref:C,title:m.title,subTitle:m.subTitle,children:D&&Object(O.jsx)(j.a,{columns:D.sort((function(e,t){return e.id-t.id})),rows:m.rows.map((function(e){return e.filter((function(e,t){return I.includes(t)}))})),isLoading:m.isLoading})})]})})})}},905:function(e,t,a){},907:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(17),r=a(10),i=a.n(r),o=a(19),c=a.n(o),s=a(298),l=a(175),d=a(87),u=a(880),p=function(){l.a.dispatch(Object(s.c)([])),l.a.dispatch(Object(s.b)([])),l.a.dispatch(Object(d.d)("PTR Associated Properties",{id:"PTR Associated Properties",title:"PTR Associated Properties",translate:"PTR Associated Properties",type:"item",url:"/ptr/admin/properties/"}))},m=function(){var e=Object(n.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.post("/properties/getDetailById/",{request_id:t});case 3:(a=e.sent).data.result.length?(l.a.dispatch(Object(s.c)(a.data.result)),l.a.dispatch(Object(s.b)(a.data.alphaResult)),l.a.dispatch(Object(d.d)("PTR Associated Properties",{id:"PTR Associated Properties",title:"PTR Associated Properties",translate:"PTR Associated Properties",type:"collapse",url:"/ptr/admin/properties/".concat(t),children:[{id:"Documents Info",title:"Documents Info",translate:"Documents Info",type:"item",url:"/ptr/admin/documents-info/".concat(t)},{id:"Chain Of Custody",title:"Chain Of Title",translate:"Chain Of Title",type:"item",url:"/ptr/admin/chain-of-title/".concat(t)},{id:"Name Check",title:"Name Check",translate:"Name Check",type:"item",url:"/ptr/admin/name-check/".concat(t)},{id:"Satisfaction",title:"Satisfaction",translate:"Satisfaction",type:"item",url:"/ptr/admin/satisfaction/".concat(t)},{id:"Legacy Association",title:"Legacy Association",translate:"Legacy Association",type:"item",url:"/ptr/admin/legacy/".concat(t)},{id:"Document Audit Report",title:"Document Audit Report",translate:"Document Audit Report",type:"item",url:"/ptr/admin/exception-report/".concat(t)},{id:"Tax Info",title:"Tax Info",translate:"Tax Info",type:"item",url:"/ptr/admin/tax-info/".concat(t)},{id:"Research Summary",title:"Research Summary",translate:"Research Summary",type:"item",url:"/ptr/admin/research-summary/".concat(t)},{id:"Document Edit",title:"Document Edit",translate:"Document Edit",type:"item",url:"/ptr/admin/document-edit/".concat(t)}]}))):(p(),Object(u.g)("PTR Not Found")),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),p(),Object(u.g)(null===(n=e.t0.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},917:function(e,t,a){"use strict";var n=a(16),r=a(1098),i=a(824),o=a(0),c=a(434),s=a(1676),l=a(815),d=a(19),u=a.n(d),p=a(880),m=a(4),b=a(1),f=Object(c.a)({customLabel:{"& label":{fontSize:"12px"}},customOption:{fontSize:"12px !important"},customButton:{width:"255px"}}),j=[{label:"Draft",name:"Draft"},{label:"Submitted",name:"Submitted"},{label:"Assigned",name:"Assigned"},{label:"Cancelled/Deleted",name:"Deleted"},{label:"Final Admin Review",name:"Final Admin Review"},{label:"Completed",name:"Completed"}];t.a=function(e){var t=Object(o.useState)(""),a=Object(n.a)(t,2),c=a[0],d=a[1],h=f(e);Object(o.useEffect)((function(){d(e.ptrStatus)}),[e]);return Object(b.jsxs)("div",{className:"flex flex-1 items-center",children:[Object(b.jsx)(i.a,{classes:{root:h.customLabel},label:"PTR Status",variant:"outlined",className:"mr-12 w-full",required:!0,select:!0,value:c,onChange:function(e){return d(e.target.value)},InputLabelProps:{shrink:!0},children:j.map((function(e){return Object(b.jsx)(r.a,{classes:{root:h.customOption},value:e.name,children:e.label},e.name)}))}),Object(b.jsx)(l.a,{className:Object(m.default)("whitespace-nowrap mx-4",h.customButton),variant:"contained",color:"secondary",size:"large",disabled:e.ptrStatus===c,startIcon:Object(b.jsx)(s.a,{}),onClick:function(){e.ptrStatus!==c&&u.a.post("/requests/changePTRStatus",{request_id:e.ptrId,status:c}).then((function(t){Object(p.h)(t.data.message),e.fetchData(e.ptrId)})).catch((function(e){var t,a;Object(p.g)(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message)}))},children:"Update Status"})]})}},918:function(e,t,a){"use strict";var n=a(16),r=a(0),i=a(891),o=a(426),c=a.n(o),s=a(1),l=[{id:"Properties Associated With This PTR",name:"Properties Associated With This PTR",cellStyle:{minWidth:"150px"}},{id:"Request NO",name:"Request NO"},{id:"Researcher",name:"Researcher"},{id:"ResWare File No.",name:"ResWare File No."},{id:"Date Completed",name:"Date Completed"},{id:"Date Requested",name:"Date Requested"},{id:"Status",name:"Status"}];t.a=function(e){var t=Object(r.useState)([]),a=Object(n.a)(t,2),o=a[0],d=a[1];return Object(r.useEffect)((function(){if(_.isEmpty(e.ptrDetails))d([]);else{var t=e.ptrDetails.find((function(e){return"Requested"===e.properties[0].property_ptr_type}));t&&d([[t.property_descriptor,t.id,t.staff_username,t.resware_file_number,t.date_completed?c()(t.date_completed).format("DD/MM/YYYY"):"",t.request_date?c()(t.request_date).format("DD/MM/YYYY"):"",t.ptr_status]]),e.setPtrStatus(t.ptr_status)}}),[e.ptrDetails]),Object(s.jsx)("div",{className:"mb-8",children:Object(s.jsx)(i.a,{columns:l,rows:o,isLoading:e.isLoading})})}},919:function(e,t,a){"use strict";var n=a(16),r=a(7),i=a(9),o=a(434),c=a(1214),s=a(178),l=a(0),d=a(795),u=a(1630),p=a(422),m=a(425),b=a(4),f=a(1),j=["openModal","setOpenModal","children"],h=Object(o.a)((function(e){return{container:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"auto",backgroundColor:e.palette.background.paper,border:"2px solid #555",padding:"3rem"}}})),x=function(e){var t=e.openModal,a=e.setOpenModal,n=e.children,i=Object(r.a)(e,j),o=h(i);return Object(f.jsx)(m.a,{open:t,onClose:function(){return a(!1)},closeAfterTransition:!0,BackdropComponent:d.a,BackdropProps:{timeout:500,onDragOver:function(e){return e.preventDefault()},onDrop:function(e){return e.preventDefault()}},children:Object(f.jsx)(p.a,{in:t,children:Object(f.jsx)(u.a,{className:Object(b.default)(i.className,o.container,"rounded-12"),children:n})})})},O=a(851),g=["openModal","isClickable","setOpenModal","children"],v={Mortgage:"M",Ownership:"OT",Other:"O"},y={CHAIN_TITLE:"purple",EXCEPTION:"red",DOC_INFO:"blue",LEGACY_PTR:"orange",NAME_CHECK:"pink",SATISFACTION:"yellow",DEFAULT:"default"},C=Object(o.a)((function(e){return{docContainer:{minWidth:"150px"},container:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"auto",backgroundColor:e.palette.background.paper,border:"2px solid #555",padding:"3rem"},badge:{borderRadius:"50%",backgroundColor:"white",color:"black",height:"23px",width:"23px",display:"flex",alignItems:"center",justifyContent:"center"},red:{backgroundColor:"#DA4B52",cursor:"pointer",marginBottom:"4px",width:"120px",display:"flex",transition:"all 0.2s",justifyContent:"flex-start","& span":{display:"flex",alignItems:"center"}},orange:{backgroundColor:"#ED7D31FF",cursor:"pointer",marginBottom:"4px",width:"120px",display:"flex",transition:"all 0.2s",justifyContent:"flex-start","& span":{display:"flex",alignItems:"center"}},blue:{backgroundColor:"#A7E0F5",cursor:"pointer",marginBottom:"4px",minWidth:"25px",width:"120px",display:"flex",transition:"all 0.2s",justifyContent:"flex-start","& span":{display:"flex",alignItems:"center"}},purple:{backgroundColor:"#6275b3",color:"#ffffff",cursor:"pointer",marginBottom:"4px",width:"120px",display:"flex",transition:"all 0.2s",justifyContent:"flex-start","& span":{display:"flex",alignItems:"center"}},pink:{backgroundColor:"#FF9B8E",cursor:"pointer",marginBottom:"4px",width:"120px",display:"flex",transition:"all 0.2s",justifyContent:"flex-start","& span":{display:"flex",alignItems:"center"}},yellow:{backgroundColor:"#FBC02D",cursor:"pointer",marginBottom:"4px",width:"120px",display:"flex",transition:"all 0.2s",justifyContent:"flex-start","& span":{display:"flex",alignItems:"center"}},selectedChip:{border:"2px solid #598f63",backgroundColor:"#59B16A",color:"#000",cursor:"pointer",marginBottom:"4px",width:"120px",display:"flex",justifyContent:"flex-start",transition:"all 0.2s",transform:"scale(1.05)",boxShadow:"0 3px 10px rgb(0 0 0 / 0.5)","& span":{display:"flex",alignItems:"center"}},width:{width:"48px"}}}));t.a=function(e){e.openModal;var t=e.isClickable,a=void 0===t||t,o=(e.setOpenModal,e.children,Object(r.a)(e,g)),d=C(o),u=Object(i.b)(),p=(Object(i.c)((function(e){return e.auth.user.role})),Object(l.useState)(!1)),m=Object(n.a)(p,2),j=m[0],h=m[1],w=Object(l.useState)(null),k=Object(n.a)(w,2),D=(k[0],k[1]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:Object(b.default)("flex items-center",d.docContainer),children:Object(f.jsx)(c.a,{className:Object(b.default)(d[y[o.row.ptr_report_status]],o.isSelected?d.selectedChip:""),label:Object(f.jsxs)("div",{className:"flex items-center justify-center",children:[Object(f.jsx)("span",{className:d.width,children:o.row.docno}),Object(f.jsx)("span",{className:d.badge,children:v[o.row.transaction_class]||"-"}),o.row.verified&&Object(f.jsx)(O.a,{className:"ml-3",children:"verified"})]}),clickable:!1,onClick:function(){return a&&(e=o.row,D(e),void h(!0));var e}})}),Object(f.jsx)(x,{openModal:j,setOpenModal:function(e){h(e),e||u(Object(s.a)())}})]})}},920:function(e,t,a){"use strict";var n=a(16),r=a(0),i=a(19),o=a.n(i),c=a(174),s=a(815),l=a(880),d=a(434),u=a(948),p=a(967),m=a(968),b=a.n(m),f=(a(969),a(970)),j=a.n(f),h=a(1),x=Object(d.a)({wrapper:{border:"1px solid black",borderRadius:"10px",padding:"10px"},editor:{borderTop:"1px solid #000",padding:"10px"}}),O=function(e){var t=Object(r.useState)(u.EditorState.createEmpty()),a=Object(n.a)(t,2),i=a[0],o=a[1],c=x(e);return Object(r.useEffect)((function(){var t=b()(e.value||"");if(t){var a=u.ContentState.createFromBlockArray(t.contentBlocks),n=u.EditorState.createWithContent(a);o(n)}}),[e.value]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(p.Editor,{toolbar:{options:["inline","blockType","fontSize","fontFamily","list","textAlign","history"]},wrapperClassName:c.wrapper,editorClassName:c.editor,editorState:i,onEditorStateChange:function(t){o(t),e.setValue(j()(Object(u.convertToRaw)(t.getCurrentContent())))},readOnly:e.disabled})})};t.a=function(e){var t,a=Object(r.useState)(""),i=Object(n.a)(a,2),d=i[0],u=i[1],p=Object(r.useState)(!1),m=Object(n.a)(p,2),b=m[0],f=m[1];Object(r.useEffect)((function(){var t;null!==e&&void 0!==e&&null!==(t=e.ptrDetails)&&void 0!==t&&t.length&&(u(e.ptrDetails[0].admin_notes),f("Completed"===e.ptrDetails[0].ptr_status))}),[e.ptrDetails]);return Object(h.jsxs)("div",{className:"mb-20 flex flex-col",children:[Object(h.jsxs)("div",{className:"items-center mb-6 mt-20",children:[Object(h.jsx)(c.a,{variant:"h6",className:"ml-10 mb-10",children:"PTR Note"}),Object(h.jsx)(O,{value:(null===e||void 0===e||null===(t=e.ptrDetails)||void 0===t?void 0:t.length)&&e.ptrDetails[0].admin_notes||"",setValue:u,disabled:b||_.isEmpty(e.ptrDetails)})]}),Object(h.jsx)("div",{className:"self-end",children:Object(h.jsx)(s.a,{variant:"contained",color:"secondary",className:"mt-10 items-end",onClick:function(){d.trim()&&o.a.post("/requests/updateNotesPTR",{request_id:e.ptrId,notes:d.trim()}).then((function(t){Object(l.h)(t.data.message||"Successfully Created"),e.refreshData()})).catch((function(e){Object(l.g)(e.response.data.message)}))},disabled:b||_.isEmpty(e.ptrDetails),children:"Submit"})})]})}},930:function(e,t,a){"use strict";var n=a(16),r=a(1214),i=a(1630),o=a(813),c=a(856),s=a(422),l=a(434),d=a(4),u=a(174),p=a(0),m=a(851),b=a(1),f=Object(l.a)({badge:{borderRadius:"50%",backgroundColor:"white",color:"black",height:"23px",width:"23px",display:"flex",alignItems:"center",justifyContent:"center"},legendData:{border:"1px solid #000",padding:"16px",display:"flex",flexWrap:"wrap","& p":{width:"25%",display:"flex",alignItems:"center","& svg":{marginRight:"12px",width:"18px"},"& span":{height:"21px",width:"21px",marginRight:"12px","& span":{display:"flex",marginRight:"8px",width:"26px"}}}},green:{backgroundColor:"#59B16A",cursor:"pointer",marginBottom:"4px"},red:{backgroundColor:"#DA4B52",cursor:"pointer",marginBottom:"4px"},orange:{backgroundColor:"#ED7D31FF",cursor:"pointer",marginBottom:"4px"},blue:{backgroundColor:"#A7E0F5",cursor:"pointer",marginBottom:"4px"},purple:{backgroundColor:"#6275b3",cursor:"pointer",marginBottom:"4px"},pink:{backgroundColor:"#FF9B8E",cursor:"pointer",marginBottom:"4px"},yellow:{backgroundColor:"#FBC02D",cursor:"pointer",marginBottom:"4px"}});t.a=function(){var e=Object(p.useState)(!1),t=Object(n.a)(e,2),a=t[0],l=t[1],j=f(),h=Object(p.useMemo)((function(){return[{icon:Object(b.jsx)(r.a,{component:"span",className:j.blue,size:"small"}),name:"Included in Doc Info Sheet"},{icon:Object(b.jsx)(r.a,{component:"span",className:j.purple,size:"small"}),name:"Included in Chain of Title"},{icon:Object(b.jsx)(r.a,{component:"span",className:j.pink,size:"small"}),name:"Included in Name Check"},{icon:Object(b.jsx)(r.a,{component:"span",className:j.yellow,size:"small"}),name:"Included in Satisfaction"},{icon:Object(b.jsx)(r.a,{component:"span",className:j.orange,size:"small"}),name:"Included in Legacy PTR"},{icon:Object(b.jsx)(r.a,{component:"span",className:j.red,size:"small"}),name:"Does not belong in PTR"},{icon:Object(b.jsx)(m.a,{children:"verified"}),name:"Researcher acknowledged"},{icon:Object(b.jsx)("span",{className:j.badge,children:"OT"}),name:"Ownership Transfers"},{icon:Object(b.jsx)("span",{className:j.badge,children:"M"}),name:"Mortgages"},{icon:Object(b.jsx)("span",{className:j.badge,children:"O"}),name:"Other"}]}),[j]);return Object(b.jsxs)(i.a,{sx:{margin:"20px 0px"},children:[Object(b.jsx)(o.a,{control:Object(b.jsx)(c.a,{checked:a,onChange:function(){return l((function(e){return!e}))},inputProps:{"aria-label":"controlled"}}),label:"Show Legend",labelPlacement:"start"}),Object(b.jsx)(s.a,{in:a,children:Object(b.jsx)("div",{className:Object(d.default)(j.legendData,a?"":"hidden"),children:h.map((function(e,t){return Object(b.jsxs)(u.a,{children:[e.icon," ",e.name]},t)}))})})]})}}}]);