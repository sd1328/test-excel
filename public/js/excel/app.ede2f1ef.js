(function(e){function t(t){for(var n,l,i=t[0],s=t[1],c=t[2],f=0,d=[];f<i.length;f++)l=i[f],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},o=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("bc3a"),o=a.n(r),l=a("2106"),i=a.n(l),s=a("5f5b"),c=a("b1e0"),u=a("a7e2"),f=a("1f1a"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("tableGrid")],1)},p=[],h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-button",{staticClass:"mb-2 goBack",attrs:{size:"md"},on:{click:e.goToBack}},[a("b-icon",{attrs:{icon:"arrow90deg-left","aria-hidden":"true"}}),e._v(" Back ")],1),a("b-table",{ref:"tableRef",attrs:{id:"keyTable",busy:!1,"no-border-collapse":"",bordered:"",hover:"",responsive:"","show-empty":"","sticky-header":e.clientHeight,items:e.shemaTable,fields:e.fields,"row-click-handler":e.handleRowFunction},nativeOn:{scroll:function(t){return e.onScroll(t)}},scopedSlots:e._u([{key:"table-busy",fn:function(){return[a("div",{staticClass:"text-center text-danger my-2"},[a("b-spinner",{staticClass:"align-middle"}),a("strong",[e._v("Loading...")])],1)]},proxy:!0},{key:"cell()",fn:function(t){return[!0===t.item.options.editMode&&t.field.key===e.editCell?a("div",[a("input",{directives:[{name:"autofocus",rawName:"v-autofocus"}],domProps:{value:e.valueCell},on:{input:e.updateValueCell,keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleBlur()},function(t){return t.type.indexOf("key")||46===t.keyCode?e.handleBlur("delete"):null}],blur:function(t){return e.handleBlur()}}})]):a("div",[a("span",{class:"___"===t.value?"disableEmpty":"",on:{click:function(a){return e.handleRow(t)}}},[e._v(e._s(t.value))])])]}}])})],1)},m=[],b=(a("99af"),a("4de4"),a("4160"),a("c975"),a("d81d"),a("13d5"),a("fb6a"),a("a434"),a("a9e3"),a("9129"),a("b680"),a("b64b"),a("d3b7"),a("ac1f"),a("25f0"),a("6062"),a("3ca3"),a("1276"),a("498a"),a("159b"),a("ddb0"),a("b85c")),g=a("2909"),v=a("ade3"),y=(a("96cf"),a("1da1")),w=a("5530"),O=a("2f62"),S=a("8a0a"),T=a.n(S);n["default"].directive("autofocus",T.a);var C={data:function(){return{clientHeight:"".concat(document.documentElement.clientHeight-120,"px"),pathPrams:"",cloneObjArrEmptyStrings:[],handleRowFunction:this.handleRow,editCell:"",payloadData:"",payloadConfig:"",startPositionRow:1,countRow:100,maxHeightContent:5e3,bankScrollTop:0,fakeScrollTop:0,arrEmptyStrings:[]}},computed:Object(w["a"])({},Object(O["c"])({dataBE:function(e){return e.dataBE},fields:function(e){return e.fields},items:function(e){return e.items},valueCell:function(e){return e.valueCell},shemaTable:function(e){return e.shemaTable}})),mounted:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.pathPrams=window.location.pathname.split("/"),e.payloadData=JSON.stringify({start_col:"A",start_row:"1",end_col:"AAAA",end_row:"100"}),t.next=5,e.handleGeneralData(e.payloadData);case 5:for(a=[],n=e.startPositionRow;n<e.countRow;n+=1)e.cloneObjArrEmptyStrings=JSON.parse(JSON.stringify(e.arrEmptyStrings)),e.cloneObjArrEmptyStrings._=n,a.push(e.cloneObjArrEmptyStrings);e.getShemaTable(a),e.items.forEach((function(t,a){return e.shemaTable.forEach((function(a,n){if(t._===a._)for(var r in e.shemaTable[n])if({}.hasOwnProperty.call(e.shemaTable[n],r))for(var o in t)o===r&&e.getOneObjShemaTable({i:n,key:r,item:t})})),!(a>50)})),r=e.shemaTable.map((function(e){var t=e;return t.options={editMode:!1,key:Math.random()},t})),e.getShemaTable(r),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),console.log(t.t0,"err-mounted");case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()},methods:Object(w["a"])(Object(w["a"])({},Object(O["b"])(["getDataCellsFromBE","getFields","getItems","getValueCell","getShemaTable","getOneObjShemaTable"])),{},{handleRow:function(e){var t=this;this.getValueCell(""),"___"!==e.value&&this.getValueCell(e.value.trim()),this.shemaTable.forEach((function(a,n){if(a._===e.item._&&"_"!==e.field.key){t.editCell=e.field.key,t.currentRow=n,t.currentCow=e.field.key;var r=t.shemaTable.map((function(e){var t=e;return t.options.editMode=!1,t}));t.getShemaTable(r),t.shemaTable[n].options.editMode=!0,t.shemaTable[n][e.field.key].toString().substring(0,t.shemaTable[n][e.field.key].length-1)}}))},handleGeneralData:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function a(){var n,r,o,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.payloadConfig={method:"post",url:"/table/".concat(t.pathPrams[2],"/editor/get"),headers:{"Content-Type":"application/json"},data:e},a.next=3,t.getDataFromBe(t.payloadConfig);case 3:n=[],console.log(t.dataBE,"this.dataBE"),t.dataBE&&t.dataBE.length&&t.dataBE.forEach((function(e){n.push(Object(v["a"])({_:e.r},e.c,e.v))})),console.log(n,"<<<<<<<<======arrItem"),t.getItems(n.length?n:[]),r=[],t.items.forEach((function(e){var t=JSON.parse(JSON.stringify(e));delete t.options,r.push.apply(r,Object(g["a"])(Object.keys(t)))})),o=JSON.parse(JSON.stringify(t.fields)),r.push.apply(r,Object(g["a"])(o)),l=new Set(r),l=Object(g["a"])(l).sort(),l.splice(l.length-2,2),l=Object(g["a"])(l).sort((function(e,t){return e.length<t.length?-1:1})),t.getFields([t.fields[0]].concat(Object(g["a"])(l))),t.arrEmptyStrings=[],t.fields.forEach((function(e,a){a>0&&t.arrEmptyStrings.push(Object(v["a"])({},e,"___"))})),t.arrEmptyStrings=t.arrEmptyStrings.reduce((function(e,t){for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}),{});case 20:case"end":return a.stop()}}),a)})))()},handleBlur:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function a(){var n,r,o,l,i,s,c,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=t.shemaTable.map((function(e){var t=e;return t.options.editMode=!1,t})),t.getShemaTable(n),r=t.shemaTable[t.currentRow][t.currentCow],o=null,"="!==t.valueCell[0]){a.next=11;break}if(l=t.valueCell.split("=").pop(),i=l.split("(")[0],"СУММ"!==i&&"СРЗНАЧ"!==i){a.next=11;break}return a.next=10,t.mathematicalCalculations(l,i,o);case 10:o=a.sent;case 11:null===o?(r.toString(),t.valueCell&&(t.shemaTable[t.currentRow][t.currentCow]=t.valueCell),t.valueCell||(t.shemaTable[t.currentRow][t.currentCow]="___")):t.shemaTable[t.currentRow][t.currentCow]=o,s="delete"===e?"___":null===o?t.valueCell:o,"delete"===e&&t.getValueCell(""),console.log(s,"finalValue===>>>"),c=JSON.stringify({col:t.currentCow,row:t.currentRow+1,value:s}),u={method:"post",url:"/table/".concat(t.pathPrams[2],"/editor/set"),headers:{"Content-Type":"application/json"},data:c},t.updateCell(u);case 18:case"end":return a.stop()}}),a)})))()},findValueCell:function(e){var t,a=-1,n=Object(b["a"])(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;Number.isNaN(+r)||(a=e.indexOf(r))}}catch(i){n.e(i)}finally{n.f()}var o=this.splitByIndex(e,a),l=this.shemaTable[0===o.row?o:o.row-1][o.cow];return l},splitByIndex:function(e,t){return{cow:e.substring(0,t),row:e.substring(t)}},addArrValueCells:function(e){var t,a=e.split(":")[0],n=e.split(":")[1],r=-1,o=Object(b["a"])(a);try{for(o.s();!(t=o.n()).done;){var l=t.value;Number.isNaN(+l)||(r=a.indexOf(l))}}catch(c){o.e(c)}finally{o.f()}a=this.splitByIndex(a,r),n=this.splitByIndex(n,r);var i=JSON.parse(JSON.stringify(this.shemaTable)),s=i.slice(a.row-1,n.row);return s=s.map((function(e){return e[a.cow]})).filter((function(e){return!Number.isNaN(+e)})),s},mathematicalCalculations:function(e,t,a){var n=this,r=a;try{var o=e.split("(")[1];o=o.substring(0,o.length-1);var l=o.split(";").filter((function(e){return!!e})),i=[],s=0;return l.forEach((function(e){var t=e.indexOf(":"),a=null,r=null;-1!==t?(r=n.addArrValueCells(e),s+=r.length):(a=n.findValueCell(e),Number.isNaN(+a)||(s+=1));var o=0;o=null===r?Number.isNaN(+a)?0:+a:r.reduce((function(e,t){return e+(Number.isNaN(+t)?0:+t)}),0),i.push(Number.isNaN(+o)?0:o)})),"СУММ"===t?(r=i.reduce((function(e,t){return e+ +t}),0),r):"СРЗНАЧ"===t?(r=(i.reduce((function(e,t){return e+ +t}),0)/s).toFixed(3),r):"Unknown math operation"}catch(c){return console.log(c,"err===>>>"),r=null,r}},getDataFromBe:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,n["default"].axios(e);case 3:r=a.sent,console.log(r.data,"<<<<<<<<<<<<<<========response.data"),t.getDataCellsFromBE(r.data),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0,"<<<<<<<<======error");case 11:console.log(t.dataBE,"<<<<<<<<<<<<<<========this.dataBE");case 12:case"end":return a.stop()}}),a,null,[[0,8]])})))()},updateCell:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n["default"].axios(e);case 3:a=t.sent,console.log(a,"<<<<<<<<<<<<<<========response-update"),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0,"<<<<<<<<======error-update");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},updateValueCell:function(e){this.getValueCell(e.target.value.trim())},goToBack:function(){window.location.href="/"},updateShemaData:function(e){var t=this;this.getShemaTable(e),this.items.forEach((function(e){t.shemaTable.forEach((function(a,n){if(e._===a._)for(var r in t.shemaTable[n])if({}.hasOwnProperty.call(t.shemaTable[n],r))for(var o in e)o===r&&t.getOneObjShemaTable({i:n,key:r,item:e})}))}));var a=this.shemaTable.map((function(e){var t=e;return t.options={editMode:!1,key:Math.random()},t}));this.getShemaTable(a)},onScroll:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function a(){var n,r,o,l,i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!(e.target.scrollTop<=500&&t.fakeScrollTop>e.target.scrollTop)){a.next=9;break}for(n=[],t.startPositionRow>=3&&(t.startPositionRow-=3,t.countRow-=3,e.target.scrollTop=e.target.scrollTop+.1*e.target.scrollTop),t.startPositionRow<3&&(t.startPositionRow=1,t.countRow=100),r=t.startPositionRow;r<t.countRow;r+=1)o=JSON.parse(JSON.stringify(t.cloneObjArrEmptyStrings)),o._=r,n.push(o);return t.payloadData=JSON.stringify({start_col:"A",start_row:t.startPositionRow<3?1:t.startPositionRow,end_col:"AAAA",end_row:t.startPositionRow+100}),a.next=8,t.handleGeneralData(t.payloadData);case 8:t.updateShemaData(n);case 9:if(t.fakeScrollTop=e.target.scrollTop,t.maxHeightContent=e.target.scrollHeight,t.maxHeightContent/2-500<=t.fakeScrollTop){for(l=[],t.startPositionRow+=50,t.countRow+=50,i=t.startPositionRow;i<t.countRow;i+=1)s=JSON.parse(JSON.stringify(t.cloneObjArrEmptyStrings)),s._=i,l.push(s);t.getShemaTable(l),t.updateShemaData(l),e.target.scrollTop=.25*e.target.scrollTop}case 12:case"end":return a.stop()}}),a)})))()}})},k=C,_=(a("ddca"),a("2877")),B=Object(_["a"])(k,h,m,!1,null,"40343f51",null),j=B.exports,x={name:"App",components:{tableGrid:j}},R=x,E=(a("034f"),Object(_["a"])(R,d,p,!1,null,null,null)),A=E.exports,N={getDataCellsFromBE:function(e,t){var a=e.commit;a("setDataFromBE",t)},getFields:function(e,t){var a=e.commit;a("setFields",t)},getItems:function(e,t){var a=e.commit;a("setItems",t)},getValueCell:function(e,t){var a=e.commit;a("setValueCell",t)},getShemaTable:function(e,t){var a=e.commit;a("setShemaTable",t)},getOneObjShemaTable:function(e,t){var a=e.commit;a("setOneObjShemaTable",t)}},P={},D={setDataFromBE:function(e,t){e.dataBE=t},setFields:function(e,t){e.fields=t},setItems:function(e,t){e.items=t},setValueCell:function(e,t){e.valueCell=t},setShemaTable:function(e,t){e.shemaTable=t},setOneObjShemaTable:function(e,t){e.shemaTable[t.i][t.key]=t.item[t.key]}},J={dataBE:[{t:"c",r:1,c:"A",v:"3"},{t:"c",r:2,c:"A",v:"2"},{t:"c",r:3,c:"A",v:"1"},{t:"n",r:2,c:"B",v:3},{t:"n",r:3,c:"B",v:2},{t:"n",r:4,c:"B",v:1},{t:"n",r:1,c:"C",v:1},{t:"c",r:4,c:"C",v:"СУММ(A1:A3;B2:B4;C1)"},{t:"n",r:3,c:"D",v:"СРЗНАЧ(A1:A3;B2:B4;C1)"},{t:"n",r:140,c:"A",v:"СРЗНАЧ(A1:A3;B2:B4)"},{t:"n",r:240,c:"A",v:"СРЗНАЧ(A1:A3;B2:B4)"},{t:"n",r:340,c:"A",v:"СРЗНАЧ(A1:A3;B2:B4)"}],fields:[{key:"_",isRowHeader:!0,variant:"primary",thStyle:{backgroundColor:"#ffffff"}},"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],items:[{_:1,A:"1",B:"Dickerson",BB:"Macdonald"},{_:2,A:"4",B:"Larsen",C:"Shaw"},{_:3,A:"2",B:"Geneva",C:"Wilson",E:"rrr"}],valueCell:"",shemaTable:[]};n["default"].use(O["a"]);var F=new O["a"].Store({state:J,getters:P,actions:N,mutations:D});a("f9e3"),a("2dd8");n["default"].use(s["a"]),n["default"].use(c["a"]),n["default"].use(u["a"]),n["default"].use(f["a"]),n["default"].use(i.a,o.a),n["default"].config.productionTip=!1,new n["default"]({store:F,render:function(e){return e(A)}}).$mount("#app")},"85ec":function(e,t,a){},ddca:function(e,t,a){"use strict";var n=a("e744"),r=a.n(n);r.a},e744:function(e,t,a){}});
//# sourceMappingURL=app.ede2f1ef.js.map