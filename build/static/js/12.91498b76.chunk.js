(this.webpackJsonpPinPointGuam=this.webpackJsonpPinPointGuam||[]).push([[12],{1094:function(e,t,n){"use strict";var r=n(16),a=n(0),o=n(1098),i=n(824),s=n(434),c=n(1676),l=n(815),d=n(19),u=n.n(d),p=n(880),m=n(4),f=n(1),b=Object(s.a)({customLabel:{"& label":{fontSize:"12px"}},customOption:{fontSize:"12px !important"},customButton:{maxWidth:"255px",minWidth:"158px"}});t.a=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),s=n[0],d=n[1],j=b(e);return Object(f.jsxs)("div",{className:"flex flex-1 items-center mr-20",children:[Object(f.jsxs)(i.a,{classes:{root:j.customLabel},label:"Territory of Guam",variant:"outlined",className:"mr-12 ml-12",required:!0,select:!0,fullWidth:!0,value:s,disabled:!e.docRecordId.length||"Completed"===e.ptrStatus,onChange:function(e){return d(e.target.value)},children:[Object(f.jsx)(o.a,{classes:{root:j.customOption},value:"Urban",children:"Urban"},"urban"),Object(f.jsx)(o.a,{classes:{root:j.customOption},value:"Suburban",children:"Suburban"},"sub-urban")]}),Object(f.jsx)(l.a,{className:Object(m.default)("whitespace-nowrap mx-4",j.customButton),variant:"contained",color:"secondary",size:"large",disabled:!s||"Completed"===e.ptrStatus,startIcon:Object(f.jsx)(c.a,{}),onClick:function(){u.a.put("ptr/set_urban_unurban",{ptr_id:e.ptrId,doc_record_id:e.docRecordId,status:s}).then((function(t){Object(p.h)(t.data.message),e.fetchData(e.ptrId),d(null)})).catch((function(e){var t,n;Object(p.g)(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message),d(null)}))},children:"Update"})]})}},1691:function(e,t,n){"use strict";n.r(t);var r=n(17),a=n(16),o=n(10),i=n.n(o),s=n(9),c=n(0),l=n(817),d=n(1146),u=n(1630),p=n(813),m=n(856),f=n(1512),b=n(176),j=n(931),h=n.n(j),x=n(434),O=n(959),g=n(174),y=n(930),v=n(907),C=n(4),w=n(904),D=n(880),R=n(919),k=n(824),N=n(19),P=n.n(N),B=n(1),S=Object(x.a)({priority:{width:"60px"}}),T=function(e){var t=Object(c.useState)(e.row.priority_no),n=Object(a.a)(t,2),r=n[0],o=n[1],i=Object(c.useState)(!1),s=Object(a.a)(i,2),l=s[0],d=s[1],u=S();Object(c.useEffect)((function(){o(e.row.priority_no)}),[e.row]);return Object(B.jsx)(k.a,{label:"Priority",id:"priority_no",variant:"outlined",type:"number",disabled:l||e.isDisabled,value:r,className:u.priority,onChange:function(e){return o(parseInt(e.target.value)>=0?parseInt(e.target.value):0)},InputLabelProps:{shrink:!0},onKeyPress:function(t){return"Enter"===t.key&&(d(!0),void P.a.post("/updateDocPriority",{priority_no:r,request_id:e.row.ptr_request_id,doc_record_id:e.row.doc_record_id}).then((function(t){t.status&&e.fetchData(e.ptrId),d(!1)})).catch((function(e){var t,n;Object(D.g)(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message),d(!1)})))}})},I=n(920),A=n(917),M=n(426),W=n.n(M),E=n(1147),L=n(918),F=n(1094),Y=[{name:"Priority No",label:"Priority No",options:{filter:!0,sort:!0,display:"excluded",customBodyRender:D.a}},{name:"Document No.",label:"Document No.",options:{filter:!0,display:"excluded",customBodyRender:D.a}},{name:"Priority",label:"Priority",options:{filter:!1,sort:!1,download:!1,customBodyRender:D.a}},{name:"Doc No.",label:"Doc No.",options:{filter:!1,sort:!0,download:!1,setCellProps:function(){return{style:{textAlign:"center",minWidth:"190px"}}},customBodyRender:D.a,sortCompare:D.d}},{name:"Source Type",label:"Source Type",options:{filter:!0,sort:!0,setCellProps:function(){return{style:{minWidth:"107px"}}},customBodyRender:D.a}},{name:"Type",label:"Type",options:{filter:!0,sort:!0,setCellProps:function(){return{style:{minWidth:"107px"}}},customBodyRender:D.a}},{name:"Recorded",label:"Recorded",options:{filter:!0,sort:!0,sortCompare:D.c,customBodyRender:D.a}},{name:"Execution Date",label:"Execution Date",options:{filter:!0,sort:!0,sortCompare:D.c,customBodyRender:D.a}},{name:"Property",label:"Property",options:{filter:!0,sort:!0,setCellProps:function(){return{style:{minWidth:"150px"}}},customBodyRender:D.a}},{name:"Grantor/Mortgager/Assignor/Made by Other",label:"Grantor/Mortgager/Assignor/Made by Other",options:{filter:!0,filterType:"dropdown",sort:!0,setCellProps:function(){return{style:{textAlign:"left",Width:"50px"}}},customBodyRender:D.a}},{name:"Grantee/Mortgagee Assignee/ In Favor of Against/vs. Other",label:"Grantee/Mortgagee Assignee/ In Favor of Against/vs. Other",options:{filter:!0,filterType:"dropdown",sort:!0,setCellProps:function(){return{style:{textAlign:"left"}}},customBodyRender:D.a}},{name:"Notes",label:"Notes",options:{filter:!0,sort:!0,setCellProps:function(){return{style:{textAlign:"center"}}},customBodyRender:D.a}},{name:"Territory of Guam",label:"Territory of Guam",options:{filter:!0,sort:!0,print:!1,setCellProps:function(){return{style:{textAlign:"center"}}},customBodyRender:D.a}},{name:"Associated CT",label:"Associated CT",options:{filter:!0,sort:!0,setCellProps:function(){return{style:{textAlign:"center"}}},customBodyRender:D.a}},{name:"Ref Document",label:"Ref Document",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Transaction Class",label:"Transaction Class",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"PTR Report Status",label:"PTR Report Status",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Doc Record Id",label:"Doc Record Id",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Estate No",label:"Estate No",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Property Id",label:"Property Id",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Recording Fee",label:"Recording Fee",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"LM Check No",label:"LM Check No",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Certificate",label:"Certificate",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Mortgage Amount",label:"Mortgage Amount",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Mortgage Lender",label:"Mortgage Lender",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Mortgage",label:"Mortgage",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Legal Descriptor Record",label:"Legal Descriptor Record",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Area",label:"Area",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Lien No",label:"Lien No",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Court Case No",label:"Court Case No",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Tax No",label:"Tax No",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Cluster",label:"Cluster",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Closing Party",label:"Closing Party",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Maturity Date",label:"Maturity Date",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Condo",label:"Condo",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"UOM",label:"UOM",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Lender Name",label:"Lender Name",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"Verified",label:"Verified",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}},{name:"CT Info",label:"CT Info",options:{filter:!0,sort:!0,display:!1,setCellProps:function(){return{style:{minWidth:"100px"}}},customBodyRender:D.a}}],z=Object(x.a)({dark1Background:{backgroundColor:"rgba(200,200,200,0.5)"},dark2Background:{"&:hover":{backgroundColor:"rgba(200,200,200,1)"}},printTitle:{background:"#000000",padding:"4px 15px",position:"sticky",top:0,zIndex:"9",width:"100%","& > h2":{fontSize:"20px",color:"#FFFFFF",fontWeight:"bold",marginBottom:"0"}}});t.default=function(e){var t,n,o,j,x,k,N=Object(c.useState)([]),P=Object(a.a)(N,2),S=P[0],M=P[1],q=Object(c.useState)([]),H=Object(a.a)(q,2),G=H[0],U=H[1],V=Object(c.useState)(!1),J=Object(a.a)(V,2),K=J[0],X=J[1],Q=Object(c.useState)(!1),Z=Object(a.a)(Q,2),$=Z[0],ee=Z[1],te=Object(c.useState)(!1),ne=Object(a.a)(te,2),re=ne[0],ae=ne[1],oe=Object(c.useState)(""),ie=Object(a.a)(oe,2),se=ie[0],ce=ie[1],le=Object(c.useState)([]),de=Object(a.a)(le,2),ue=de[0],pe=de[1],me=z(),fe=Object(s.b)(),be=Object(s.c)((function(e){return e.ptr.ptrDetails.details})),je=Object(s.c)((function(e){return e.ptr.ptrDetails.alpha}));Object(c.useEffect)(Object(r.a)(i.a.mark((function t(){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(fe(Object(b.b)("Chain Of Title Report")),_.isEmpty(be)){t.next=7;break}if(e.match.params.id===be[0].id){t.next=5;break}return t.next=5,xe(e.match.params.id);case 5:t.next=10;break;case 7:if(null===e||void 0===e||null===(n=e.match)||void 0===n||null===(r=n.params)||void 0===r||!r.id){t.next=10;break}return t.next=10,xe(e.match.params.id);case 10:case"end":return t.stop()}}),t)}))),[null===(t=e.match)||void 0===t||null===(n=t.params)||void 0===n?void 0:n.id]),Object(c.useEffect)((function(){if(!_.isEmpty(be)||!_.isEmpty(je)){pe([]);var e=be.find((function(e){return"Requested"===e.properties[0].property_ptr_type})),t=e&&"Completed"===e.ptr_status,n=Object(D.f)(be,["CHAIN_TITLE"],$).map((function(e){return[e.priority_no,e.docno,Object(B.jsx)(T,{row:e,isDisabled:t,ptrId:be[0].id,fetchData:xe}),Object(B.jsx)(R.a,{row:e,ptrId:be[0].id,fetchData:xe}),e.sourcetype,e.transaction_value,e.recorded_date?W()(e.recorded_date).format("DD/MM/YYYY"):"",e.execution_date?W()(e.execution_date).format("DD/MM/YYYY"):"",e.prop_desc,e.grantor,e.grantee,e.notes,e.urban_suburban,e.associated_ct,e.ref_document,e.transaction_class,e.ptr_report_status.replace("_"," "),e.doc_record_id,e.estate_no,e.property_id,e.recording_fee,e.lm_check_no,e.certificate,e.mortgage_amount,e.mortgage_lender,e.mortgage,e.legal_descriptor_record,e.area,e.lien_no,e.court_case_no,e.tax_no,e.cluster,e.closing_party,e.maturity_date,e.condo,e.uom,e.lender_name,String(e.verified),e.ct_info]})),r=($?je:Object(D.e)(je,["CHAIN_TITLE"])).map((function(e){return[e.priority_no,e.docno,Object(B.jsx)(T,{row:e,isDisabled:t,ptrId:be[0].id,fetchData:xe}),Object(B.jsx)(R.a,{row:e,ptrId:be[0].id,fetchData:xe}),e.sourcetype,e.transaction_value,e.recorded_date?W()(e.recorded_date).format("DD/MM/YYYY"):"",e.execution_date?W()(e.execution_date).format("DD/MM/YYYY"):"",e.prop_desc,e.grantor,e.grantee,e.notes,e.urban_suburban,e.associated_ct,e.ref_document,e.transaction_class,e.ptr_report_status.replace("_"," "),e.doc_record_id,e.estate_no,e.property_id,e.recording_fee,e.lm_check_no,e.certificate,e.mortgage_amount,e.mortgage_lender,e.mortgage,e.legal_descriptor_record,e.area,e.lien_no,e.court_case_no,e.tax_no,e.cluster,e.closing_party,e.maturity_date,e.condo,e.uom,e.lender_name,String(e.verified),e.ct_info]})),a=n.concat(r).sort((function(e,t){return e[0]-t[0]}));M(a),U(a)}}),[$,be,je]);var he=Object(c.useMemo)((function(){return{filter:!0,filterType:"multiselect",rowsPerPage:100,selectableRows:"multiple",downloadOptions:{filename:"ChainOfTitle.csv",separator:","},print:!1,customToolbar:function(){return Object(B.jsx)(l.a,{title:"Print",children:Object(B.jsx)(O.a,{className:"text-gray-600 cursor-pointer hover:text-black",onClick:function(){return ae(!0)}})})},draggableColumns:{enabled:!0,transitionTime:300},tableBodyMaxHeight:"calc(100vh - 280px)",expandableRows:!0,expandableRowsHeader:!1,expandableRowsOnClick:!0,rowsExpanded:Array.from(Array(S.length).keys()).filter((function(e){return S[e][11]})),renderExpandableRow:function(e){return e[11]?Object(B.jsx)(E.a,{children:Object(B.jsx)(d.a,{colSpan:e.length,children:e[11]})}):null},onRowSelectionChange:function(e,t){var n=t.map((function(e){return S.at(e.index)})).map((function(e){return e[17]}));pe(n)},setRowProps:function(e,t,n){var r={class:me.dark2Background};return n%2===0&&(r.class=Object(C.default)(r.class,me.dark1Background)),r},customSearch:D.b,onTableChange:function(e,t){"sort"===e&&U(t.displayData.map((function(e){return e.data})))}}}),[me,S]),xe=function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(!0),e.next=3,Object(v.a)(t);case 3:X(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsxs)(u.a,{sx:{margin:"30px"},children:[Object(B.jsx)(L.a,{ptrDetails:be,isLoading:K,setPtrStatus:ce}),Object(B.jsx)(I.a,{refreshData:function(){return xe(e.match.params.id)},ptrDetails:be,ptrId:e.match.params.id}),Object(B.jsxs)("div",{className:"my-10 flex justify-between",children:[Object(B.jsx)("div",{className:"flex items-center flex-1",children:Object(B.jsx)(p.a,{control:Object(B.jsx)(m.a,{checked:$,onChange:function(){return ee((function(e){return!e}))},inputProps:{"aria-label":"controlled"}}),label:"Show All Documents",labelPlacement:"start"})}),Object(B.jsx)("div",{className:"flex flex-1 items-center",children:Object(B.jsx)(F.a,{ptrId:null===e||void 0===e||null===(o=e.match)||void 0===o||null===(j=o.params)||void 0===j?void 0:j.id,docRecordId:ue,fetchData:xe,ptrStatus:se})}),Object(B.jsx)("div",{className:"flex flex-1 items-center",children:se&&Object(B.jsx)(A.a,{ptrId:null===e||void 0===e||null===(x=e.match)||void 0===x||null===(k=x.params)||void 0===k?void 0:k.id,ptrStatus:se,fetchData:xe})})]}),Object(B.jsx)("div",{className:"w-full flex flex-col mt-16",children:Object(B.jsx)(h.a,{title:Object(B.jsxs)(g.a,{variant:"h6",children:["Chain Of Title",K&&Object(B.jsx)(f.a,{size:24,style:{marginLeft:15,position:"relative",top:4}})]}),data:S,columns:Y,options:he})}),Object(B.jsx)(y.a,{}),G&&Object(B.jsx)(w.a,{openModal:re,setOpenModal:ae,title:"CHAIN OF TITLE DOCUMENT REPORT",subTitle:"PinPointGuam: Chain Of Title Document List",columns:Y.slice(2),rows:null===G||void 0===G?void 0:G.map((function(e){return e.slice(2)})),isLoading:K})]})}},880:function(e,t,n){"use strict";n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p})),n.d(t,"h",(function(){return m})),n.d(t,"g",(function(){return f}));var r=n(426),a=n.n(r),o=n(175),i=n(61),s=function(e,t,n){var r=[].concat.apply([],e.map((function(e){return e.properties[0].docs})));return n?r:c(r,t)},c=function(e,t){return e.filter((function(e){return t.includes(e.ptr_report_status)}))},l=function(e){return function(t,n){return((t.data?a()(t.data,"DD/MM/YYYY").valueOf():-1/0)-(n.data?a()(n.data,"DD/MM/YYYY").valueOf():-1/0))*("asc"===e?1:-1)}},d=function(e){return function(t,n){return(parseInt(t.data.props.row.doc_no)-parseInt(n.data.props.row.doc_no))*("asc"===e?1:-1)}},u=function(e){return void 0===e||"undefined"===e||null===e||"null"===e||"nil"===e||""===e?"":e},p=function(e,t,n){return!!t.filter((function(t,r){var a,o,i;return"Doc No."===n[r].name?null===t||void 0===t||null===(a=t.props)||void 0===a||null===(o=a.row)||void 0===o||null===(i=o.docno)||void 0===i?void 0:i.toLowerCase().includes(e.toLowerCase()):"Status"===n[r].name?t.props.label.toLowerCase().includes(e.toLowerCase()):null===t||void 0===t?void 0:t.toString().toLowerCase().includes(e.toLowerCase())})).length},m=function(e){o.a.dispatch(Object(i.c)({message:e,autoHideDuration:3e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"}))},f=function(e){o.a.dispatch(Object(i.c)({message:e||"Network Error",autoHideDuration:3e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"error"}))}},891:function(e,t,n){"use strict";var r=n(8),a=n(174),o=n(1512),i=n(434),s=n(4),c=n(880),l=n(1),d=Object(i.a)((function(e){return{dark1Background:{backgroundColor:"rgba(200,200,200,0.5)"},dark2Background:{"&:hover":{backgroundColor:"rgba(200,200,200,1)"}},tData:{width:"80px",wordBreak:"break-word"}}}));t.a=function(e){var t,n,i=d(e);return Object(l.jsx)("div",{className:e.classes,children:Object(l.jsx)("div",{className:"table-responsive",children:Object(l.jsxs)("table",{className:"simple",children:[Object(l.jsx)("thead",Object(r.a)(Object(r.a)({},null===e||void 0===e||null===(t=e.options)||void 0===t?void 0:t.headProps),{},{children:Object(l.jsx)("tr",{children:e.columns.map((function(e,t){return Object(l.jsx)("th",{style:e.cellStyle,id:e.id,children:Object(l.jsx)(a.a,{className:"font-semibold",children:e.name})},t)}))})})),Object(l.jsx)("tbody",Object(r.a)(Object(r.a)({},null===e||void 0===e||null===(n=e.options)||void 0===n?void 0:n.bodyProps),{},{children:e.isLoading?Object(l.jsx)("tr",{children:Object(l.jsx)("td",{colSpan:6,className:"text-center",children:Object(l.jsx)(o.a,{size:24})})}):e.rows.length?e.rows.map((function(t,n){return Object(l.jsx)("tr",{className:e.striped&&n%2===0?Object(s.default)(i.dark1Background,i.dark2Background):"",children:t.map((function(e,t){return Object(l.jsx)("td",{className:i.tData,children:Object(l.jsx)(a.a,{className:"truncate break-normal",children:Object(c.a)(e)})},t)}))},n)})):Object(l.jsx)("tr",{children:Object(l.jsx)("td",{colSpan:6,className:"text-center",children:"No Data"})})}))]})})})}},901:function(e,t,n){"use strict";var r=n(933),a=n(0),o=n(1149),i=n(434),s=(n(905),n(1)),c=Object(i.a)({headerWrapper:{background:"#22d3ee",alignItems:"center",padding:"10px 15px 0",minHeight:"50px",position:"relative"},logoWrapper:{width:"auto",height:"90px","& > img":{width:"auto",height:"auto",maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}},printTitle:{fontSize:"30px",color:"white",fontWeight:"bold",textAlign:"right"},printSubData:{fontSize:"20px",color:"Black",textAlign:"right",display:"inline",marginLeft:0,paddingRight:"10px",wordBreak:"break-word"},printSubTitle:{background:"#000000",padding:"4px 15px",position:"relative",left:0,top:0,display:"table-header-group",zIndex:"9",width:"100%","& > h2":{fontSize:"20px",color:"#FFFFFF",fontWeight:"bold",marginBottom:"0"}}}),l=Object(a.forwardRef)((function(e,t){var n=Object(a.useRef)(),i=c(),l=Object(r.useReactToPrint)({content:function(){return n.current}});return Object(a.useImperativeHandle)(t,(function(){return{printData:function(){l()}}})),Object(s.jsx)("div",{className:"hidden",children:Object(s.jsxs)("div",{ref:n,children:[Object(s.jsxs)(o.a,{container:!0,spacing:2,className:i.headerWrapper,children:[Object(s.jsx)(o.a,{item:!0,xs:3,className:"p-36",children:Object(s.jsx)("div",{className:i.logoWrapper,children:Object(s.jsx)("img",{src:"assets/images/logos/PinPointV2-bg.png",alt:"PINPOINTGUAM"})})}),Object(s.jsxs)(o.a,{item:!0,xs:9,className:"p-36",children:[Object(s.jsx)("div",{className:"d-flex justify-end items-center my-auto",children:Object(s.jsx)("h4",{className:i.printTitle,children:e.title})}),Object(s.jsx)("div",{className:"d-flex justify-end items-right",children:e.subData?null===e||void 0===e?void 0:e.subData.map((function(e){return e.map((function(e){return Object(s.jsxs)("h5",{className:i.printSubData,children:[e.name,","]})}))})):""})]}),Object(s.jsx)("div",{className:i.printSubTitle,children:Object(s.jsx)("h2",{children:e.subTitle})})]}),Object(s.jsx)("div",{children:e.children})]})})}));t.a=l},904:function(e,t,n){"use strict";var r=n(20),a=n(16),o=n(7),i=n(425),s=n(795),c=n(422),l=n(1630),d=n(813),u=n(1208),p=n(815),m=n(434),f=n(4),b=n(0),j=n(891),h=n(901),x=n(1661),O=n(1),g=["openModal","setOpenModal","children"],y=Object(m.a)((function(e){return{container:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"auto",backgroundColor:e.palette.background.paper,border:"2px solid #555",padding:"3rem"},choices:{maxHeight:"60vh",overflowY:"scroll"},checkBox:{marginBottom:"10px",width:"30%",justifyContent:"flex-start",alignItems:"flex-start","& span":{display:"flex",alignItems:"center",paddingTop:"0","&:last-child":{top:"-10px",width:"100%",alignItems:"flex-start",height:"40px",overflow:"hidden",display:"-webkit-box","-webkit-line-clamp":"2","-webkit-box-orient":"vertical"}}}}}));t.a=function(e){var t=e.openModal,n=e.setOpenModal,m=(e.children,Object(o.a)(e,g)),v=y(m),C=Object(b.useRef)(),_=Object(b.useState)([]),w=Object(a.a)(_,2),D=w[0],R=w[1],k=Object(b.useState)([]),N=Object(a.a)(k,2),P=N[0],B=N[1];Object(b.useEffect)((function(){R(m.columns.map((function(e,t){return{name:e.name,id:t}}))),B(m.columns.map((function(e,t){return t})))}),[m.columns]);return Object(O.jsx)(i.a,{open:t,onClose:function(){return n(!1)},closeAfterTransition:!0,BackdropComponent:s.a,BackdropProps:{timeout:200,onDragOver:function(e){return e.preventDefault()},onDrop:function(e){return e.preventDefault()}},children:Object(O.jsx)(c.a,{in:t,children:Object(O.jsxs)(l.a,{className:Object(f.default)(m.className,v.container,"rounded-12"),children:[Object(O.jsx)("h2",{children:"Show Columns"}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:v.choices,children:m.columns.map((function(e,t){return[Object(O.jsx)(d.a,{className:v.checkBox,label:e.name,control:Object(O.jsx)(u.a,{checked:D.filter((function(t){return t.name===e.name})).length,value:e.name,onChange:function(e){return function(e,t){e.target.checked?(R((function(n){return[].concat(Object(r.a)(n),[{name:e.target.value,id:t}])})),B((function(e){return[].concat(Object(r.a)(e),[t])}))):(R((function(t){return t.filter((function(t){return t.name!==e.target.value}))})),B((function(e){return e.filter((function(e){return e!==t}))})))}(e,t)}})})]}))}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"my-50 w-full flex justify-center",children:Object(O.jsx)(p.a,{variant:"contained",color:"secondary",startIcon:Object(O.jsx)(x.a,{}),size:"large",onClick:function(){return C.current.printData()},children:"Print"})}),Object(O.jsx)(h.a,{ref:C,title:m.title,subTitle:m.subTitle,children:D&&Object(O.jsx)(j.a,{columns:D.sort((function(e,t){return e.id-t.id})),rows:m.rows.map((function(e){return e.filter((function(e,t){return P.includes(t)}))})),isLoading:m.isLoading})})]})})})}},905:function(e,t,n){},907:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(17),a=n(10),o=n.n(a),i=n(19),s=n.n(i),c=n(298),l=n(175),d=n(87),u=n(880),p=function(){l.a.dispatch(Object(c.c)([])),l.a.dispatch(Object(c.b)([])),l.a.dispatch(Object(d.d)("PTR Associated Properties",{id:"PTR Associated Properties",title:"PTR Associated Properties",translate:"PTR Associated Properties",type:"item",url:"/ptr/admin/properties/"}))},m=function(){var e=Object(r.a)(o.a.mark((function e(t){var n,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("/properties/getDetailById/",{request_id:t});case 3:(n=e.sent).data.result.length?(l.a.dispatch(Object(c.c)(n.data.result)),l.a.dispatch(Object(c.b)(n.data.alphaResult)),l.a.dispatch(Object(d.d)("PTR Associated Properties",{id:"PTR Associated Properties",title:"PTR Associated Properties",translate:"PTR Associated Properties",type:"collapse",url:"/ptr/admin/properties/".concat(t),children:[{id:"Documents Info",title:"Documents Info",translate:"Documents Info",type:"item",url:"/ptr/admin/documents-info/".concat(t)},{id:"Chain Of Custody",title:"Chain Of Title",translate:"Chain Of Title",type:"item",url:"/ptr/admin/chain-of-title/".concat(t)},{id:"Name Check",title:"Name Check",translate:"Name Check",type:"item",url:"/ptr/admin/name-check/".concat(t)},{id:"Satisfaction",title:"Satisfaction",translate:"Satisfaction",type:"item",url:"/ptr/admin/satisfaction/".concat(t)},{id:"Legacy Association",title:"Legacy Association",translate:"Legacy Association",type:"item",url:"/ptr/admin/legacy/".concat(t)},{id:"Document Audit Report",title:"Document Audit Report",translate:"Document Audit Report",type:"item",url:"/ptr/admin/exception-report/".concat(t)},{id:"Tax Info",title:"Tax Info",translate:"Tax Info",type:"item",url:"/ptr/admin/tax-info/".concat(t)},{id:"Research Summary",title:"Research Summary",translate:"Research Summary",type:"item",url:"/ptr/admin/research-summary/".concat(t)},{id:"Document Edit",title:"Document Edit",translate:"Document Edit",type:"item",url:"/ptr/admin/document-edit/".concat(t)}]}))):(p(),Object(u.g)("PTR Not Found")),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),p(),Object(u.g)(null===(r=e.t0.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},917:function(e,t,n){"use strict";var r=n(16),a=n(1098),o=n(824),i=n(0),s=n(434),c=n(1676),l=n(815),d=n(19),u=n.n(d),p=n(880),m=n(4),f=n(1),b=Object(s.a)({customLabel:{"& label":{fontSize:"12px"}},customOption:{fontSize:"12px !important"},customButton:{width:"255px"}}),j=[{label:"Draft",name:"Draft"},{label:"Submitted",name:"Submitted"},{label:"Assigned",name:"Assigned"},{label:"Cancelled/Deleted",name:"Deleted"},{label:"Final Admin Review",name:"Final Admin Review"},{label:"Completed",name:"Completed"}];t.a=function(e){var t=Object(i.useState)(""),n=Object(r.a)(t,2),s=n[0],d=n[1],h=b(e);Object(i.useEffect)((function(){d(e.ptrStatus)}),[e]);return Object(f.jsxs)("div",{className:"flex flex-1 items-center",children:[Object(f.jsx)(o.a,{classes:{root:h.customLabel},label:"PTR Status",variant:"outlined",className:"mr-12 w-full",required:!0,select:!0,value:s,onChange:function(e){return d(e.target.value)},InputLabelProps:{shrink:!0},children:j.map((function(e){return Object(f.jsx)(a.a,{classes:{root:h.customOption},value:e.name,children:e.label},e.name)}))}),Object(f.jsx)(l.a,{className:Object(m.default)("whitespace-nowrap mx-4",h.customButton),variant:"contained",color:"secondary",size:"large",disabled:e.ptrStatus===s,startIcon:Object(f.jsx)(c.a,{}),onClick:function(){e.ptrStatus!==s&&u.a.post("/requests/changePTRStatus",{request_id:e.ptrId,status:s}).then((function(t){Object(p.h)(t.data.message),e.fetchData(e.ptrId)})).catch((function(e){var t,n;Object(p.g)(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)}))},children:"Update Status"})]})}},918:function(e,t,n){"use strict";var r=n(16),a=n(0),o=n(891),i=n(426),s=n.n(i),c=n(1),l=[{id:"Properties Associated With This PTR",name:"Properties Associated With This PTR",cellStyle:{minWidth:"150px"}},{id:"Request NO",name:"Request NO"},{id:"Researcher",name:"Researcher"},{id:"ResWare File No.",name:"ResWare File No."},{id:"Date Completed",name:"Date Completed"},{id:"Date Requested",name:"Date Requested"},{id:"Status",name:"Status"}];t.a=function(e){var t=Object(a.useState)([]),n=Object(r.a)(t,2),i=n[0],d=n[1];return Object(a.useEffect)((function(){if(_.isEmpty(e.ptrDetails))d([]);else{var t=e.ptrDetails.find((function(e){return"Requested"===e.properties[0].property_ptr_type}));t&&d([[t.property_descriptor,t.id,t.staff_username,t.resware_file_number,t.date_completed?s()(t.date_completed).format("DD/MM/YYYY"):"",t.request_date?s()(t.request_date).format("DD/MM/YYYY"):"",t.ptr_status]]),e.setPtrStatus(t.ptr_status)}}),[e.ptrDetails]),Object(c.jsx)("div",{className:"mb-8",children:Object(c.jsx)(o.a,{columns:l,rows:i,isLoading:e.isLoading})})}},919:function(e,t,n){"use strict";var r=n(16),a=n(7),o=n(9),i=n(434),s=n(1214),c=n(178),l=n(0),d=n(795),u=n(1630),p=n(422),m=n(425),f=n(4),b=n(1),j=["openModal","setOpenModal","children"],h=Object(i.a)((function(e){return{container:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"auto",backgroundColor:e.palette.background.paper,border:"2px solid #555",padding:"3rem"}}})),x=function(e){var t=e.openModal,n=e.setOpenModal,r=e.children,o=Object(a.a)(e,j),i=h(o);return Object(b.jsx)(m.a,{open:t,onClose:function(){return n(!1)},closeAfterTransition:!0,BackdropComponent:d.a,BackdropProps:{timeout:500,onDragOver:function(e){return e.preventDefault()},onDrop:function(e){return e.preventDefault()}},children:Object(b.jsx)(p.a,{in:t,children:Object(b.jsx)(u.a,{className:Object(f.default)(o.className,i.container,"rounded-12"),children:r})})})},O=n(851),g=["openModal","isClickable","setOpenModal","children"],y={Mortgage:"M",Ownership:"OT",Other:"O"},v={CHAIN_TITLE:"purple",EXCEPTION:"red",DOC_INFO:"blue",LEGACY_PTR:"orange",NAME_CHECK:"pink",SATISFACTION:"yellow",DEFAULT:"default"},C=Object(i.a)((function(e){return{docContainer:{minWidth:"150px"},container:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"auto",backgroundColor:e.palette.background.paper,border:"2px solid #555",padding:"3rem"},badge:{borderRadius:"50%",backgroundColor:"white",color:"black",height:"23px",width:"23px",display:"flex",alignItems:"center",justifyContent:"center"},red:{backgroundColor:"#DA4B52",cursor:"pointer",marginBottom:"4px",width:"120px",display:"flex",transition:"all 0.2s",justifyContent:"flex-start","& span":{display:"flex",alignItems:"center"}},orange:{backgroundColor:"#ED7D31FF",cursor:"pointer",marginBottom:"4px",width:"120px",display:"flex",transition:"all 0.2s",justifyContent:"flex-start","& span":{display:"flex",alignItems:"center"}},blue:{backgroundColor:"#A7E0F5",cursor:"pointer",marginBottom:"4px",minWidth:"25px",width:"120px",display:"flex",transition:"all 0.2s",justifyContent:"flex-start","& span":{display:"flex",alignItems:"center"}},purple:{backgroundColor:"#6275b3",color:"#ffffff",cursor:"pointer",marginBottom:"4px",width:"120px",display:"flex",transition:"all 0.2s",justifyContent:"flex-start","& span":{display:"flex",alignItems:"center"}},pink:{backgroundColor:"#FF9B8E",cursor:"pointer",marginBottom:"4px",width:"120px",display:"flex",transition:"all 0.2s",justifyContent:"flex-start","& span":{display:"flex",alignItems:"center"}},yellow:{backgroundColor:"#FBC02D",cursor:"pointer",marginBottom:"4px",width:"120px",display:"flex",transition:"all 0.2s",justifyContent:"flex-start","& span":{display:"flex",alignItems:"center"}},selectedChip:{border:"2px solid #598f63",backgroundColor:"#59B16A",color:"#000",cursor:"pointer",marginBottom:"4px",width:"120px",display:"flex",justifyContent:"flex-start",transition:"all 0.2s",transform:"scale(1.05)",boxShadow:"0 3px 10px rgb(0 0 0 / 0.5)","& span":{display:"flex",alignItems:"center"}},width:{width:"48px"}}}));t.a=function(e){e.openModal;var t=e.isClickable,n=void 0===t||t,i=(e.setOpenModal,e.children,Object(a.a)(e,g)),d=C(i),u=Object(o.b)(),p=(Object(o.c)((function(e){return e.auth.user.role})),Object(l.useState)(!1)),m=Object(r.a)(p,2),j=m[0],h=m[1],_=Object(l.useState)(null),w=Object(r.a)(_,2),D=(w[0],w[1]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:Object(f.default)("flex items-center",d.docContainer),children:Object(b.jsx)(s.a,{className:Object(f.default)(d[v[i.row.ptr_report_status]],i.isSelected?d.selectedChip:""),label:Object(b.jsxs)("div",{className:"flex items-center justify-center",children:[Object(b.jsx)("span",{className:d.width,children:i.row.docno}),Object(b.jsx)("span",{className:d.badge,children:y[i.row.transaction_class]||"-"}),i.row.verified&&Object(b.jsx)(O.a,{className:"ml-3",children:"verified"})]}),clickable:!1,onClick:function(){return n&&(e=i.row,D(e),void h(!0));var e}})}),Object(b.jsx)(x,{openModal:j,setOpenModal:function(e){h(e),e||u(Object(c.a)())}})]})}},920:function(e,t,n){"use strict";var r=n(16),a=n(0),o=n(19),i=n.n(o),s=n(174),c=n(815),l=n(880),d=n(434),u=n(948),p=n(967),m=n(968),f=n.n(m),b=(n(969),n(970)),j=n.n(b),h=n(1),x=Object(d.a)({wrapper:{border:"1px solid black",borderRadius:"10px",padding:"10px"},editor:{borderTop:"1px solid #000",padding:"10px"}}),O=function(e){var t=Object(a.useState)(u.EditorState.createEmpty()),n=Object(r.a)(t,2),o=n[0],i=n[1],s=x(e);return Object(a.useEffect)((function(){var t=f()(e.value||"");if(t){var n=u.ContentState.createFromBlockArray(t.contentBlocks),r=u.EditorState.createWithContent(n);i(r)}}),[e.value]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(p.Editor,{toolbar:{options:["inline","blockType","fontSize","fontFamily","list","textAlign","history"]},wrapperClassName:s.wrapper,editorClassName:s.editor,editorState:o,onEditorStateChange:function(t){i(t),e.setValue(j()(Object(u.convertToRaw)(t.getCurrentContent())))},readOnly:e.disabled})})};t.a=function(e){var t,n=Object(a.useState)(""),o=Object(r.a)(n,2),d=o[0],u=o[1],p=Object(a.useState)(!1),m=Object(r.a)(p,2),f=m[0],b=m[1];Object(a.useEffect)((function(){var t;null!==e&&void 0!==e&&null!==(t=e.ptrDetails)&&void 0!==t&&t.length&&(u(e.ptrDetails[0].admin_notes),b("Completed"===e.ptrDetails[0].ptr_status))}),[e.ptrDetails]);return Object(h.jsxs)("div",{className:"mb-20 flex flex-col",children:[Object(h.jsxs)("div",{className:"items-center mb-6 mt-20",children:[Object(h.jsx)(s.a,{variant:"h6",className:"ml-10 mb-10",children:"PTR Note"}),Object(h.jsx)(O,{value:(null===e||void 0===e||null===(t=e.ptrDetails)||void 0===t?void 0:t.length)&&e.ptrDetails[0].admin_notes||"",setValue:u,disabled:f||_.isEmpty(e.ptrDetails)})]}),Object(h.jsx)("div",{className:"self-end",children:Object(h.jsx)(c.a,{variant:"contained",color:"secondary",className:"mt-10 items-end",onClick:function(){d.trim()&&i.a.post("/requests/updateNotesPTR",{request_id:e.ptrId,notes:d.trim()}).then((function(t){Object(l.h)(t.data.message||"Successfully Created"),e.refreshData()})).catch((function(e){Object(l.g)(e.response.data.message)}))},disabled:f||_.isEmpty(e.ptrDetails),children:"Submit"})})]})}},930:function(e,t,n){"use strict";var r=n(16),a=n(1214),o=n(1630),i=n(813),s=n(856),c=n(422),l=n(434),d=n(4),u=n(174),p=n(0),m=n(851),f=n(1),b=Object(l.a)({badge:{borderRadius:"50%",backgroundColor:"white",color:"black",height:"23px",width:"23px",display:"flex",alignItems:"center",justifyContent:"center"},legendData:{border:"1px solid #000",padding:"16px",display:"flex",flexWrap:"wrap","& p":{width:"25%",display:"flex",alignItems:"center","& svg":{marginRight:"12px",width:"18px"},"& span":{height:"21px",width:"21px",marginRight:"12px","& span":{display:"flex",marginRight:"8px",width:"26px"}}}},green:{backgroundColor:"#59B16A",cursor:"pointer",marginBottom:"4px"},red:{backgroundColor:"#DA4B52",cursor:"pointer",marginBottom:"4px"},orange:{backgroundColor:"#ED7D31FF",cursor:"pointer",marginBottom:"4px"},blue:{backgroundColor:"#A7E0F5",cursor:"pointer",marginBottom:"4px"},purple:{backgroundColor:"#6275b3",cursor:"pointer",marginBottom:"4px"},pink:{backgroundColor:"#FF9B8E",cursor:"pointer",marginBottom:"4px"},yellow:{backgroundColor:"#FBC02D",cursor:"pointer",marginBottom:"4px"}});t.a=function(){var e=Object(p.useState)(!1),t=Object(r.a)(e,2),n=t[0],l=t[1],j=b(),h=Object(p.useMemo)((function(){return[{icon:Object(f.jsx)(a.a,{component:"span",className:j.blue,size:"small"}),name:"Included in Doc Info Sheet"},{icon:Object(f.jsx)(a.a,{component:"span",className:j.purple,size:"small"}),name:"Included in Chain of Title"},{icon:Object(f.jsx)(a.a,{component:"span",className:j.pink,size:"small"}),name:"Included in Name Check"},{icon:Object(f.jsx)(a.a,{component:"span",className:j.yellow,size:"small"}),name:"Included in Satisfaction"},{icon:Object(f.jsx)(a.a,{component:"span",className:j.orange,size:"small"}),name:"Included in Legacy PTR"},{icon:Object(f.jsx)(a.a,{component:"span",className:j.red,size:"small"}),name:"Does not belong in PTR"},{icon:Object(f.jsx)(m.a,{children:"verified"}),name:"Researcher acknowledged"},{icon:Object(f.jsx)("span",{className:j.badge,children:"OT"}),name:"Ownership Transfers"},{icon:Object(f.jsx)("span",{className:j.badge,children:"M"}),name:"Mortgages"},{icon:Object(f.jsx)("span",{className:j.badge,children:"O"}),name:"Other"}]}),[j]);return Object(f.jsxs)(o.a,{sx:{margin:"20px 0px"},children:[Object(f.jsx)(i.a,{control:Object(f.jsx)(s.a,{checked:n,onChange:function(){return l((function(e){return!e}))},inputProps:{"aria-label":"controlled"}}),label:"Show Legend",labelPlacement:"start"}),Object(f.jsx)(c.a,{in:n,children:Object(f.jsx)("div",{className:Object(d.default)(j.legendData,n?"":"hidden"),children:h.map((function(e,t){return Object(f.jsxs)(u.a,{children:[e.icon," ",e.name]},t)}))})})]})}},959:function(e,t,n){"use strict";var r=n(0),a=n(100);t.a=Object(a.a)(r.createElement("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"}),"LocalPrintshop")}}]);