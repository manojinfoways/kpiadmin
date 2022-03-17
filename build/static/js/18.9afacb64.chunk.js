(this.webpackJsonpPinPointGuam=this.webpackJsonpPinPointGuam||[]).push([[18],{1688:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(16),i=a(10),o=a.n(i),s=a(0),c=a(9),l=a(817),d=a(1630),u=a(174),p=a(1512),m=a(176),b=a(19),f=a.n(b),j=a(434),h=a(931),O=a.n(h),x=a(959),v=a(4),g=a(100),y=Object(g.a)(s.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddCircle"),k=a(815),T=a(824),w=a(7),P=a(795),I=a(422),A=a(425),N=a(1),D=["openModal","setOpenModal","children"],S=Object(j.a)((function(e){return{container:{margin:"30px auto ",width:"90%",height:"95%",maxWidth:"90%",textAlign:"center",backgroundColor:e.palette.background.paper,border:"2px solid #555",padding:"3rem",overflow:"auto"}}})),C=function(e){var t=e.openModal,a=e.setOpenModal,n=e.children,r=Object(w.a)(e,D),i=S(r);return Object(N.jsx)(A.a,{open:t,onClose:function(){return a(!1)},closeAfterTransition:!0,BackdropComponent:P.a,BackdropProps:{timeout:500,onDragOver:function(e){return e.preventDefault()},onDrop:function(e){return e.preventDefault()}},children:Object(N.jsx)(I.a,{in:t,children:Object(N.jsx)(d.a,{className:Object(v.default)(r.className,i.container,"rounded-12"),children:n})})})},B=a(880),L=Object(j.a)((function(e){return{customLabel:{"& label":{fontSize:"12px"}},field:{width:"50%"}}})),R=[{name:"Id",label:"Id",options:{filter:!0,sort:!0}},{name:"Owner Name",label:"Owner Name",options:{filter:!0,sort:!0}},{name:"Location Type",label:"Location Type",options:{filter:!0,sort:!0}},{name:"Parcel Search",label:"Parcel Search",options:{filter:!0,sort:!0}},{name:"Land Assessed Value",label:"Land Assessed Value",options:{filter:!0,sort:!0}},{name:"Bldg Assessed Value",label:"Bldg Assessed Value",options:{filter:!0,sort:!0}},{name:"Total Assessed Value",label:"Total Assessed Value",options:{filter:!0,sort:!0}},{name:"First Install Payment",label:"First Install Payment",options:{filter:!0,sort:!0}},{name:"Second Install Payment",label:"Second Install Payment",options:{filter:!0,sort:!0}},{name:"Total Tax",label:"Total Tax",options:{filter:!0,sort:!0}},{name:"Exempt",label:"Exempt",options:{filter:!0,sort:!0}},{name:"Bldg Area",label:"Bldg Area",options:{filter:!0,sort:!0}}],M=function(e){var t=Object(s.useState)(!1),a=Object(r.a)(t,2),n=a[0],i=a[1],o=Object(s.useState)(""),c=Object(r.a)(o,2),l=c[0],m=c[1],b=Object(s.useState)(!1),j=Object(r.a)(b,2),h=j[0],x=j[1],g=Object(s.useState)([]),w=Object(r.a)(g,2),P=w[0],I=w[1],A=Object(s.useState)([]),D=Object(r.a)(A,2),S=D[0],M=D[1],V=Object(s.useState)(!1),E=Object(r.a)(V,2),z=E[0],F=E[1],H=L();Object(s.useEffect)((function(){var t;null!==e&&void 0!==e&&null!==(t=e.ptrDetails)&&void 0!==t&&t.length&&F("Completed"===e.ptrDetails[0].ptr_status)}),[e.ptrDetails]);var Y=Object(s.useMemo)((function(){return{filter:!0,filterType:"multiselect",tableBodyMaxHeight:"calc(100vh - 280px)",rowsPerPage:100,fixedHeader:!0,download:!1,print:!1,draggableColumns:{enabled:!0,transitionTime:300},selectableRows:"multiple",selectableRowsOnClick:!0,onTableChange:function(e,t){var a=[];t.selectedRows.data.length>0&&Object.keys(t.selectedRows.lookup).map((function(e){a.push(t.data[e].data)}));M(a)},setRowProps:function(e,t,a){var n={class:H.dark2Background};return a%2===0&&(n.class=Object(v.default)(n.class,H.dark1Background)),n}}}),[H]);Object(s.useEffect)((function(){l&&l.length>2&&(x(!0),f.a.post("/searchTaxInfo",{searchtext:l}).then((function(e){e.data.status&&(I(e.data.data.map((function(e){return[e.ID,e.OwnerName,e.LocationType,e.ParcelSearch,e.LandAssessedValue,e.BldgAssessedValue,e.TotalAssessedValue,e.FirstInstallPayment,e.SecondInstallPayment,e.TotalTax,e.Exempt,e.BldgArea]}))),x(!1))})).catch((function(e){var t,a;Object(B.g)(null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message),x(!1),I([])})))}),[l]);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(k.a,{variant:"contained",sx:{marginRight:"15px"},startIcon:Object(N.jsx)(y,{}),color:"secondary",disabled:z,onClick:function(){return i(!0)},children:"Add Tax Document"}),Object(N.jsxs)(C,{openModal:n,setOpenModal:i,children:[Object(N.jsx)(d.a,{sx:{margin:"30px"},children:Object(N.jsxs)("div",{className:"flex items-center justify-between mb-12",children:[Object(N.jsx)(T.a,{id:"Land Parcel",label:"Land Parcel",type:"text",className:"w-1/4",name:"Land Parcel",value:l,onChange:function(e){return m(e.target.value.toUpperCase())},variant:"outlined"}),Object(N.jsx)(k.a,{variant:"contained",color:"secondary",className:"whitespace-nowrap mx-16 px-24",startIcon:Object(N.jsx)(y,{}),onClick:function(){f.a.post("/associate_taxinfo_to_ptr",{ptr_id:e.ptrId,tax_id:S.map((function(e){return e[0]}))}).then((function(t){var a;t.status&&(e.refreshData(),Object(B.h)(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message),i(!1))})).catch((function(e){var t,a;Object(B.g)(null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message)}))},disabled:_.isEmpty(S),children:"Add Tax Info"})]})}),Object(N.jsx)("div",{className:"mx-20 my-20",children:Object(N.jsx)(O.a,{title:Object(N.jsxs)(u.a,{variant:"h6",children:["Tax Info",h&&Object(N.jsx)(p.a,{size:24,style:{marginLeft:15,position:"relative",top:4}})]}),data:P,columns:R,options:Y})})]})]})},V=a(904),E=a(907),z=Object(j.a)({dark1Background:{backgroundColor:"rgba(200,200,200,0.5)"},dark2Background:{"&:hover":{backgroundColor:"rgba(200,200,200,1)"}}}),F=[{name:"Id",label:"Id",options:{filter:!0,sort:!0}},{name:"Owner Name",label:"Owner Name",options:{filter:!0,sort:!0,display:!1}},{name:"Location Type",label:"Location Type",options:{filter:!0,sort:!0}},{name:"Parcel Search",label:"Parcel Search",options:{filter:!0,sort:!0}},{name:"Land Assessed Value",label:"Land Assessed Value",options:{filter:!0,sort:!0}},{name:"Bldg Assessed Value",label:"Bldg Assessed Value",options:{filter:!0,sort:!0}},{name:"Total Assessed Value",label:"Total Assessed Value",options:{filter:!0,sort:!0}},{name:"First Install Payment",label:"First Install Payment",options:{filter:!0,sort:!0}},{name:"Second Install Payment",label:"Second Install Payment",options:{filter:!0,sort:!0}},{name:"Total Tax",label:"Total Tax",options:{filter:!0,sort:!0}},{name:"Exempt",label:"Exempt",options:{filter:!0,sort:!0}},{name:"Bldg Area",label:"Bldg Area",options:{filter:!0,sort:!0}}];t.default=function(e){var t,a,i=Object(c.b)(),b=z(),j=Object(s.useState)([]),h=Object(r.a)(j,2),g=h[0],y=h[1],k=Object(s.useState)([]),T=Object(r.a)(k,2),w=T[0],P=T[1],I=Object(s.useState)(!1),A=Object(r.a)(I,2),D=A[0],S=A[1],C=Object(s.useState)(!1),L=Object(r.a)(C,2),R=L[0],H=L[1],Y=Object(c.c)((function(e){return e.ptr.ptrDetails.details}));Object(s.useEffect)((function(){i(Object(m.b)("Tax Info"))}),[]),Object(s.useEffect)(Object(n.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i(Object(m.b)("Tax Info")),_.isEmpty(Y)){t.next=7;break}if(e.match.params.id===Y[0].id){t.next=5;break}return t.next=5,J(e.match.params.id);case 5:t.next=10;break;case 7:if(null===e||void 0===e||null===(a=e.match)||void 0===a||null===(n=a.params)||void 0===n||!n.id){t.next=10;break}return t.next=10,J(e.match.params.id);case 10:case"end":return t.stop()}}),t)}))),[null===e||void 0===e||null===(t=e.match)||void 0===t||null===(a=t.params)||void 0===a?void 0:a.id]),Object(s.useEffect)((function(){G()}),[]);var W=Object(s.useMemo)((function(){return{filter:!0,filterType:"multiselect",tableBodyMaxHeight:"calc(100vh - 280px)",rowsPerPage:100,fixedHeader:!0,print:!1,customToolbar:function(){return Object(N.jsx)(l.a,{title:"Print",children:Object(N.jsx)(x.a,{className:"text-gray-600 cursor-pointer hover:text-black",onClick:function(){return H(!0)}})})},draggableColumns:{enabled:!0,transitionTime:300},selectableRows:"none",downloadOptions:{filename:"Tax-Info.csv",separator:","},setRowProps:function(e,t,a){var n={class:b.dark2Background};return a%2===0&&(n.class=Object(v.default)(n.class,b.dark1Background)),n},onTableChange:function(e,t){"sort"===e&&P(t.displayData.map((function(e){return e.data})))}}}),[b,g]),G=function(){S(!0),f.a.post("/associate_taxinfo_list",{ptr_id:e.match.params.id}).then((function(e){if(e.status){var t=e.data.result.map((function(e){return[e.ID,e.OwnerName,e.LocationType,e.ParcelSearch,e.LandAssessedValue,e.BldgAssessedValue,e.TotalAssessedValue,e.FirstInstallPayment,e.SecondInstallPayment,e.TotalTax,e.Exempt,e.BldgArea]}));y(t),P(t),S(!1)}})).catch((function(e){var t,a;Object(B.g)(null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message),S(!1)}))},J=function(){var e=Object(n.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,Object(E.a)(t);case 3:S(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{children:[Object(N.jsx)(d.a,{sx:{margin:"30px",width:"50%"},children:Object(N.jsx)(M,{ptrId:e.match.params.id,ptrDetails:Y,refreshData:G})}),Object(N.jsx)("div",{className:"mx-20 my-20",children:Object(N.jsx)(O.a,{title:Object(N.jsxs)(u.a,{variant:"h6",children:["Tax Info",D&&Object(N.jsx)(p.a,{size:24,style:{marginLeft:15,position:"relative",top:4}})]}),data:g,columns:F,options:W})}),w&&Object(N.jsx)(V.a,{openModal:R,setOpenModal:H,title:"PTR Tax Info",subTitle:"PinPointGuam: Tax Info List",columns:F,rows:w,isLoading:D})]})}},880:function(e,t,a){"use strict";a.d(t,"f",(function(){return s})),a.d(t,"e",(function(){return c})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return d})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p})),a.d(t,"h",(function(){return m})),a.d(t,"g",(function(){return b}));var n=a(426),r=a.n(n),i=a(175),o=a(61),s=function(e,t,a){var n=[].concat.apply([],e.map((function(e){return e.properties[0].docs})));return a?n:c(n,t)},c=function(e,t){return e.filter((function(e){return t.includes(e.ptr_report_status)}))},l=function(e){return function(t,a){return((t.data?r()(t.data,"DD/MM/YYYY").valueOf():-1/0)-(a.data?r()(a.data,"DD/MM/YYYY").valueOf():-1/0))*("asc"===e?1:-1)}},d=function(e){return function(t,a){return(parseInt(t.data.props.row.doc_no)-parseInt(a.data.props.row.doc_no))*("asc"===e?1:-1)}},u=function(e){return void 0===e||"undefined"===e||null===e||"null"===e||"nil"===e||""===e?"":e},p=function(e,t,a){return!!t.filter((function(t,n){var r,i,o;return"Doc No."===a[n].name?null===t||void 0===t||null===(r=t.props)||void 0===r||null===(i=r.row)||void 0===i||null===(o=i.docno)||void 0===o?void 0:o.toLowerCase().includes(e.toLowerCase()):"Status"===a[n].name?t.props.label.toLowerCase().includes(e.toLowerCase()):null===t||void 0===t?void 0:t.toString().toLowerCase().includes(e.toLowerCase())})).length},m=function(e){i.a.dispatch(Object(o.c)({message:e,autoHideDuration:3e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"}))},b=function(e){i.a.dispatch(Object(o.c)({message:e||"Network Error",autoHideDuration:3e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"}))}},891:function(e,t,a){"use strict";var n=a(8),r=a(174),i=a(1512),o=a(434),s=a(4),c=a(880),l=a(1),d=Object(o.a)((function(e){return{dark1Background:{backgroundColor:"rgba(200,200,200,0.5)"},dark2Background:{"&:hover":{backgroundColor:"rgba(200,200,200,1)"}},tData:{width:"80px",wordBreak:"break-word"}}}));t.a=function(e){var t,a,o=d(e);return Object(l.jsx)("div",{className:e.classes,children:Object(l.jsx)("div",{className:"table-responsive",children:Object(l.jsxs)("table",{className:"simple",children:[Object(l.jsx)("thead",Object(n.a)(Object(n.a)({},null===e||void 0===e||null===(t=e.options)||void 0===t?void 0:t.headProps),{},{children:Object(l.jsx)("tr",{children:e.columns.map((function(e,t){return Object(l.jsx)("th",{style:e.cellStyle,id:e.id,children:Object(l.jsx)(r.a,{className:"font-semibold",children:e.name})},t)}))})})),Object(l.jsx)("tbody",Object(n.a)(Object(n.a)({},null===e||void 0===e||null===(a=e.options)||void 0===a?void 0:a.bodyProps),{},{children:e.isLoading?Object(l.jsx)("tr",{children:Object(l.jsx)("td",{colSpan:6,className:"text-center",children:Object(l.jsx)(i.a,{size:24})})}):e.rows.length?e.rows.map((function(t,a){return Object(l.jsx)("tr",{className:e.striped&&a%2===0?Object(s.default)(o.dark1Background,o.dark2Background):"",children:t.map((function(e,t){return Object(l.jsx)("td",{className:o.tData,children:Object(l.jsx)(r.a,{className:"truncate break-normal",children:Object(c.a)(e)})},t)}))},a)})):Object(l.jsx)("tr",{children:Object(l.jsx)("td",{colSpan:6,className:"text-center",children:"No Data"})})}))]})})})}},901:function(e,t,a){"use strict";var n=a(933),r=a(0),i=a(1149),o=a(434),s=(a(905),a(1)),c=Object(o.a)({headerWrapper:{background:"#22d3ee",alignItems:"center",padding:"10px 15px 0",minHeight:"50px",position:"relative"},logoWrapper:{width:"auto",height:"90px","& > img":{width:"auto",height:"auto",maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}},printTitle:{fontSize:"30px",color:"white",fontWeight:"bold",textAlign:"right"},printSubData:{fontSize:"20px",color:"Black",textAlign:"right",display:"inline",marginLeft:0,paddingRight:"10px",wordBreak:"break-word"},printSubTitle:{background:"#000000",padding:"4px 15px",position:"relative",left:0,top:0,display:"table-header-group",zIndex:"9",width:"100%","& > h2":{fontSize:"20px",color:"#FFFFFF",fontWeight:"bold",marginBottom:"0"}}}),l=Object(r.forwardRef)((function(e,t){var a=Object(r.useRef)(),o=c(),l=Object(n.useReactToPrint)({content:function(){return a.current}});return Object(r.useImperativeHandle)(t,(function(){return{printData:function(){l()}}})),Object(s.jsx)("div",{className:"hidden",children:Object(s.jsxs)("div",{ref:a,children:[Object(s.jsxs)(i.a,{container:!0,spacing:2,className:o.headerWrapper,children:[Object(s.jsx)(i.a,{item:!0,xs:3,className:"p-36",children:Object(s.jsx)("div",{className:o.logoWrapper,children:Object(s.jsx)("img",{src:"assets/images/logos/PinPointV2-bg.png",alt:"PINPOINTGUAM"})})}),Object(s.jsxs)(i.a,{item:!0,xs:9,className:"p-36",children:[Object(s.jsx)("div",{className:"d-flex justify-end items-center my-auto",children:Object(s.jsx)("h4",{className:o.printTitle,children:e.title})}),Object(s.jsx)("div",{className:"d-flex justify-end items-right",children:e.subData?null===e||void 0===e?void 0:e.subData.map((function(e){return e.map((function(e){return Object(s.jsxs)("h5",{className:o.printSubData,children:[e.name,","]})}))})):""})]}),Object(s.jsx)("div",{className:o.printSubTitle,children:Object(s.jsx)("h2",{children:e.subTitle})})]}),Object(s.jsx)("div",{children:e.children})]})})}));t.a=l},904:function(e,t,a){"use strict";var n=a(20),r=a(16),i=a(7),o=a(425),s=a(795),c=a(422),l=a(1630),d=a(813),u=a(1208),p=a(815),m=a(434),b=a(4),f=a(0),j=a(891),h=a(901),O=a(1661),x=a(1),v=["openModal","setOpenModal","children"],g=Object(m.a)((function(e){return{container:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"auto",backgroundColor:e.palette.background.paper,border:"2px solid #555",padding:"3rem"},choices:{maxHeight:"60vh",overflowY:"scroll"},checkBox:{marginBottom:"10px",width:"30%",justifyContent:"flex-start",alignItems:"flex-start","& span":{display:"flex",alignItems:"center",paddingTop:"0","&:last-child":{top:"-10px",width:"100%",alignItems:"flex-start",height:"40px",overflow:"hidden",display:"-webkit-box","-webkit-line-clamp":"2","-webkit-box-orient":"vertical"}}}}}));t.a=function(e){var t=e.openModal,a=e.setOpenModal,m=(e.children,Object(i.a)(e,v)),y=g(m),k=Object(f.useRef)(),T=Object(f.useState)([]),w=Object(r.a)(T,2),P=w[0],I=w[1],A=Object(f.useState)([]),N=Object(r.a)(A,2),D=N[0],S=N[1];Object(f.useEffect)((function(){I(m.columns.map((function(e,t){return{name:e.name,id:t}}))),S(m.columns.map((function(e,t){return t})))}),[m.columns]);return Object(x.jsx)(o.a,{open:t,onClose:function(){return a(!1)},closeAfterTransition:!0,BackdropComponent:s.a,BackdropProps:{timeout:200,onDragOver:function(e){return e.preventDefault()},onDrop:function(e){return e.preventDefault()}},children:Object(x.jsx)(c.a,{in:t,children:Object(x.jsxs)(l.a,{className:Object(b.default)(m.className,y.container,"rounded-12"),children:[Object(x.jsx)("h2",{children:"Show Columns"}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{className:y.choices,children:m.columns.map((function(e,t){return[Object(x.jsx)(d.a,{className:y.checkBox,label:e.name,control:Object(x.jsx)(u.a,{checked:P.filter((function(t){return t.name===e.name})).length,value:e.name,onChange:function(e){return function(e,t){e.target.checked?(I((function(a){return[].concat(Object(n.a)(a),[{name:e.target.value,id:t}])})),S((function(e){return[].concat(Object(n.a)(e),[t])}))):(I((function(t){return t.filter((function(t){return t.name!==e.target.value}))})),S((function(e){return e.filter((function(e){return e!==t}))})))}(e,t)}})})]}))}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{className:"my-50 w-full flex justify-center",children:Object(x.jsx)(p.a,{variant:"contained",color:"secondary",startIcon:Object(x.jsx)(O.a,{}),size:"large",onClick:function(){return k.current.printData()},children:"Print"})}),Object(x.jsx)(h.a,{ref:k,title:m.title,subTitle:m.subTitle,children:P&&Object(x.jsx)(j.a,{columns:P.sort((function(e,t){return e.id-t.id})),rows:m.rows.map((function(e){return e.filter((function(e,t){return D.includes(t)}))})),isLoading:m.isLoading})})]})})})}},905:function(e,t,a){},907:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(17),r=a(10),i=a.n(r),o=a(19),s=a.n(o),c=a(298),l=a(175),d=a(87),u=a(880),p=function(){l.a.dispatch(Object(c.c)([])),l.a.dispatch(Object(c.b)([])),l.a.dispatch(Object(d.d)("PTR Associated Properties",{id:"PTR Associated Properties",title:"PTR Associated Properties",translate:"PTR Associated Properties",type:"item",url:"/ptr/admin/properties/"}))},m=function(){var e=Object(n.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("/properties/getDetailById/",{request_id:t});case 3:(a=e.sent).data.result.length?(l.a.dispatch(Object(c.c)(a.data.result)),l.a.dispatch(Object(c.b)(a.data.alphaResult)),l.a.dispatch(Object(d.d)("PTR Associated Properties",{id:"PTR Associated Properties",title:"PTR Associated Properties",translate:"PTR Associated Properties",type:"collapse",url:"/ptr/admin/properties/".concat(t),children:[{id:"Documents Info",title:"Documents Info",translate:"Documents Info",type:"item",url:"/ptr/admin/documents-info/".concat(t)},{id:"Chain Of Custody",title:"Chain Of Title",translate:"Chain Of Title",type:"item",url:"/ptr/admin/chain-of-title/".concat(t)},{id:"Name Check",title:"Name Check",translate:"Name Check",type:"item",url:"/ptr/admin/name-check/".concat(t)},{id:"Satisfaction",title:"Satisfaction",translate:"Satisfaction",type:"item",url:"/ptr/admin/satisfaction/".concat(t)},{id:"Legacy Association",title:"Legacy Association",translate:"Legacy Association",type:"item",url:"/ptr/admin/legacy/".concat(t)},{id:"Document Audit Report",title:"Document Audit Report",translate:"Document Audit Report",type:"item",url:"/ptr/admin/exception-report/".concat(t)},{id:"Tax Info",title:"Tax Info",translate:"Tax Info",type:"item",url:"/ptr/admin/tax-info/".concat(t)},{id:"Research Summary",title:"Research Summary",translate:"Research Summary",type:"item",url:"/ptr/admin/research-summary/".concat(t)},{id:"Document Edit",title:"Document Edit",translate:"Document Edit",type:"item",url:"/ptr/admin/document-edit/".concat(t)}]}))):(p(),Object(u.g)("PTR Not Found")),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),p(),Object(u.g)(null===(n=e.t0.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},959:function(e,t,a){"use strict";var n=a(0),r=a(100);t.a=Object(r.a)(n.createElement("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"}),"LocalPrintshop")}}]);