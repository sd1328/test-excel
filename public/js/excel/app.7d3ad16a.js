(function(e){function t(t){for(var r,o,u=t[0],i=t[1],c=t[2],f=0,d=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(d.length)d.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},l=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=i;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"0494":function(e,t,n){"use strict";var r=n("d572"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("bc3a"),l=n.n(a),o=n("2106"),u=n.n(o),i=n("5f5b"),c=n("b1e0"),s=n("a7e2"),f=n("1f1a"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("tableGrid")],1)},p=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-table",{attrs:{busy:!1,"no-border-collapse":"",bordered:"",hover:"",responsive:"","show-empty":"","sticky-header":"900px",items:e.shemaTable,fields:e.fields,"row-click-handler":e.handleRowFunction},scopedSlots:e._u([{key:"table-busy",fn:function(){return[n("div",{staticClass:"text-center text-danger my-2"},[n("b-spinner",{staticClass:"align-middle"}),n("strong",[e._v("Loading...")])],1)]},proxy:!0},{key:"cell()",fn:function(t){return[!0===t.item.options.editMode&&t.field.key===e.editCell?n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.valueCell,expression:"valueCell"},{name:"autofocus",rawName:"v-autofocus"}],domProps:{value:e.valueCell},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleBlur(t)},function(t){return t.type.indexOf("key")||46===t.keyCode?e.handleBlur("delete"):null}],blur:function(t){return e.handleBlur()},input:function(t){t.target.composing||(e.valueCell=t.target.value)}}})]):n("div",[n("span",{class:"___"===t.value?"disableEmpty":"",on:{click:function(n){return e.handleRow(t)}}},[e._v(e._s(t.value))])])]}}])})],1)},v=[],b=(n("99af"),n("4de4"),n("4160"),n("c975"),n("d81d"),n("13d5"),n("fb6a"),n("a434"),n("b680"),n("b64b"),n("d3b7"),n("ac1f"),n("25f0"),n("6062"),n("3ca3"),n("1276"),n("159b"),n("ddb0"),n("b85c")),m=n("2909"),y=n("ade3"),w=(n("96cf"),n("1da1")),g=n("8a0a"),C=n.n(g);r["default"].directive("autofocus",C.a);var _={data:function(){return{pathPrams:"",dataBE:[],handleRowFunction:this.handleRow,shemaTable:[],editCell:"",valueCell:"",fields:[{key:"_",isRowHeader:!0,variant:"primary",thStyle:{backgroundColor:"#ffffff"}},"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],items:[{_:1,A:"1",B:"Dickerson",BB:"Macdonald"},{_:2,A:"4",B:"Larsen",C:"Shaw"},{_:3,A:"2",B:"Geneva",C:"Wilson",E:"rrr"},{_:4,A:"3",B:"Jami",AA:"Carney"},{_:5,AA:"3",B:"Jami",CC:"Carney"},{_:6,A:"3",B:"Jami",C:"123"},{_:7,A:"3",B:"567",C:"777"},{_:8,A:"3",B:"555",C:"8888"},{_:9,A:"3",B:"778",C:"12234"},{_:10,A:"3",B:"5678",C:"00008"},{_:30,A:"3",B:"AVB",C:"Carney"}]}},props:{},mounted:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n,a,l,o,u,i,c,s,f,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.pathPrams=window.location.pathname.split("/"),n=JSON.stringify({start_col:"A",start_row:"1",end_col:"AA",end_row:"50"}),a={method:"post",url:"/table/"+e.pathPrams[2]+"/editor/get",headers:{"Content-Type":"application/json"},data:n},e.dataBE=[{t:"c",r:1,c:"A",v:"3"},{t:"c",r:2,c:"A",v:"2"},{t:"c",r:3,c:"A",v:"1"},{t:"n",r:2,c:"B",v:3},{t:"n",r:3,c:"B",v:2},{t:"n",r:4,c:"B",v:1},{t:"n",r:1,c:"C",v:1},{t:"c",r:4,c:"C",v:"СУММ(A1:A3;B2:B4;C1)"},{t:"n",r:3,c:"D",v:"СРЗНАЧ(A1:A3;B2:B4;C1)"}],l=function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r["default"].axios(a);case 3:n=t.sent,console.log(n.data,"<<<<<<<<<<<<<<========response.data"),e.dataBE=n.data,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0,"<<<<<<<<======error");case 11:console.log(e.dataBE,"<<<<<<<<<<<<<<========this.dataBE");case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),t.next=8,l();case 8:for(o=[],e.dataBE&&e.dataBE.length&&e.dataBE.forEach((function(e){o.push(Object(y["a"])({_:e.r},e.c,e.v))})),console.log(o,"<<<<<<<<======arrItem"),e.items=o.length?o:[],u=[],e.items.forEach((function(e){var t=JSON.parse(JSON.stringify(e));delete t["options"],u.push.apply(u,Object(m["a"])(Object.keys(t)))})),i=JSON.parse(JSON.stringify(e.fields)),u.push.apply(u,Object(m["a"])(i)),c=new Set(u),c=Object(m["a"])(c).sort(),c.splice(c.length-2,2),c=Object(m["a"])(c).sort((function(e,t){if(e.length<t.length)return-1})),e.fields=[e.fields[0]].concat(Object(m["a"])(c)),s=[],e.fields.forEach((function(e,t){t>0&&s.push(Object(y["a"])({},e,"___"))})),s=s.reduce((function(e,t){for(var n in t)e[n]=t[n];return e}),{}),f=1;f<51;f+=1)d=JSON.parse(JSON.stringify(s)),d._=f,e.shemaTable.push(d);e.items.forEach((function(t,n){if(e.shemaTable.forEach((function(n,r){if(t._===n._)for(var a in e.shemaTable[r])for(var l in t)l===a&&(e.shemaTable[r][a]=t[l])})),n>50)return!1})),e.shemaTable=e.shemaTable.map((function(e){return e.options={editMode:!1,key:Math.random()},e})),t.next=32;break;case 29:t.prev=29,t.t0=t["catch"](0),console.log(t.t0,"err-mounted");case 32:case"end":return t.stop()}}),t,null,[[0,29]])})))()},methods:{handleRow:function(e){var t=this;"___"!==e.value&&(this.valueCell=e.value),this.shemaTable.forEach((function(n,r){n._===e.item._&&"_"!==e.field.key&&(t.editCell=e.field.key,t.currentRow=r,t.currentCow=e.field.key,t.shemaTable=t.shemaTable.map((function(e){return e.options.editMode=!1,e})),t.shemaTable[r]["options"].editMode=!0,t.shemaTable[r][e.field.key].substring(0,t.shemaTable[r][e.field.key].length-1))}))},handleBlur:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var a,l,o,u,i,c,s,f;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.shemaTable=t.shemaTable.map((function(e){return e.options.editMode=!1,e})),a=t.shemaTable[t.currentRow][t.currentCow],l=null,"="!==t.valueCell[0]){n.next=12;break}if(o=t.valueCell.split("=").pop(),o.indexOf("("),u=o.split("(")[0],"СУММ"!==u&&"СРЗНАЧ"!==u){n.next=12;break}return n.next=10,t.mathematicalCalculations(o,u,l);case 10:l=n.sent,console.log(l,"resaltSum===>>>");case 12:return null===l?("___"!==a.toString()?t.valueCell?t.shemaTable[t.currentRow][t.currentCow]=t.valueCell:t.shemaTable[t.currentRow][t.currentCow]:t.valueCell&&(t.shemaTable[t.currentRow][t.currentCow]=t.valueCell),t.valueCell||(t.shemaTable[t.currentRow][t.currentCow]="___")):t.shemaTable[t.currentRow][t.currentCow]=l,i="delete"===e?"___":null===l?t.valueCell:l,"delete"===e&&(t.valueCell=""),console.log(i,"finalValue===>>>"),c=JSON.stringify({col:t.currentCow,row:t.currentRow+1,value:i}),s={method:"post",url:"/table/"+t.pathPrams[2]+"/editor/set",headers:{"Content-Type":"application/json"},data:c},f=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r["default"].axios(s);case 3:t=e.sent,console.log(t,"<<<<<<<<<<<<<<========response-update"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0,"<<<<<<<<======error-update");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),n.next=21,f();case 21:t.valueCell="";case 22:case"end":return n.stop()}}),n)})))()},findValueCell:function(e){var t,n=-1,r=Object(b["a"])(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;+a===+a&&(n=e.indexOf(a))}}catch(u){r.e(u)}finally{r.f()}var l=this.splitByIndex(e,n),o=this.shemaTable[0===l.row?l:l.row-1][l.cow];return o},splitByIndex:function(e,t){return{cow:e.substring(0,t),row:e.substring(t)}},addArrValueCells:function(e){var t,n=e.split(":")[0],r=e.split(":")[1],a=-1,l=Object(b["a"])(n);try{for(l.s();!(t=l.n()).done;){var o=t.value;+o===+o&&(a=n.indexOf(o))}}catch(c){l.e(c)}finally{l.f()}n=this.splitByIndex(n,a),r=this.splitByIndex(r,a);var u=JSON.parse(JSON.stringify(this.shemaTable)),i=u.slice(n.row-1,r.row);return i=i.map((function(e){return e[n.cow]})).filter((function(e){return+e===+e})),i},mathematicalCalculations:function(e,t,n){var r=this;try{var a=e.split("(")[1];a=a.substring(0,a.length-1);var l=a.split(";"),o=[],u=0;if(l.forEach((function(e){var t=e.indexOf(":"),n=null,a=null;-1!==t?(a=r.addArrValueCells(e),u+=a.length):(n=r.findValueCell(e),u+=1);var l=null===a?n:a.reduce((function(e,t){return e+ +t}),0);o.push(l)})),"СУММ"===t)return o.reduce((function(e,t){return e+ +t}),0);if("СРЗНАЧ"===t)return(n=o.reduce((function(e,t){return e+ +t}),0)/u).toFixed(3);if(n!==n)return 0}catch(i){return console.log(i,"err===>>>"),null}}}},O=_,x=(n("0494"),n("2877")),B=Object(x["a"])(O,h,v,!1,null,"c273a274",null),k=B.exports,T={name:"App",components:{tableGrid:k}},A=T,j=(n("034f"),Object(x["a"])(A,d,p,!1,null,null,null)),R=j.exports;n("f9e3"),n("2dd8");r["default"].use(i["a"]),r["default"].use(c["a"]),r["default"].use(s["a"]),r["default"].use(f["a"]),r["default"].use(u.a,l.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(R)}}).$mount("#app")},"85ec":function(e,t,n){},d572:function(e,t,n){}});
//# sourceMappingURL=app.7d3ad16a.js.map