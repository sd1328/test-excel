(function(e){function t(t){for(var n,i,l=t[0],s=t[1],u=t[2],d=0,f=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,l=1;l<a.length;l++){var s=a[l];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"214d":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("bc3a"),o=a.n(r),i=a("2106"),l=a.n(i),s=a("5f5b"),u=a("b1e0"),c=a("a7e2"),d=a("1f1a"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("tableGrid")],1)},h=[],p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-table",{attrs:{busy:!1,"no-border-collapse":"",bordered:"",hover:"",responsive:"","show-empty":"","sticky-header":"900px",items:e.shemaTable,fields:e.fields,"row-click-handler":e.handleRowFunction},scopedSlots:e._u([{key:"table-busy",fn:function(){return[a("div",{staticClass:"text-center text-danger my-2"},[a("b-spinner",{staticClass:"align-middle"}),a("strong",[e._v("Loading...")])],1)]},proxy:!0},{key:"cell()",fn:function(t){return[!0===t.item.options.editMode&&t.field.key===e.editCell?a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.valueCell,expression:"valueCell"},{name:"autofocus",rawName:"v-autofocus"}],domProps:{value:e.valueCell},on:{blur:function(t){return e.handleBlur()},input:function(t){t.target.composing||(e.valueCell=t.target.value)}}})]):a("div",[a("span",{class:"___"===t.value?"disableEmpty":"",on:{click:function(a){return e.handleRow(t)}}},[e._v(e._s(t.value))])])]}}])})],1)},b=[],m=(a("99af"),a("4160"),a("c975"),a("d81d"),a("13d5"),a("a434"),a("b64b"),a("d3b7"),a("ac1f"),a("25f0"),a("6062"),a("3ca3"),a("1276"),a("159b"),a("ddb0"),a("2909")),v=a("ade3"),_=(a("96cf"),a("1da1")),y=a("8a0a"),g=a.n(y);n["default"].directive("autofocus",g.a);var w={data:function(){return{pathPrams:"",dataBE:[],handleRowFunction:this.handleRow,shemaTable:[],editCell:"",valueCell:"",fields:[{key:"_",isRowHeader:!0,variant:"primary",thStyle:{backgroundColor:"#ffffff"}},"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],items:[{_:1,A:"1",B:"Dickerson",BB:"Macdonald"},{_:2,A:"4",B:"Larsen",C:"Shaw"},{_:3,A:"2",B:"Geneva",C:"Wilson",E:"rrr"},{_:4,A:"3",B:"Jami",AA:"Carney"},{_:5,AA:"3",B:"Jami",CC:"Carney"},{_:6,A:"3",B:"Jami",C:"123"},{_:7,A:"3",B:"567",C:"777"},{_:8,A:"3",B:"555",C:"8888"},{_:9,A:"3",B:"778",C:"12234"},{_:10,A:"3",B:"5678",C:"00008"},{_:30,A:"3",B:"AVB",C:"Carney"}]}},props:{},mounted:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){var a,r,o,i,l,s,u,c,d,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.pathPrams=window.location.pathname.split("/"),a=JSON.stringify({start_col:"A",start_row:"1",end_col:"AA",end_row:"50"}),r={method:"post",url:"/table/"+e.pathPrams[2]+"/editor/get",headers:{"Content-Type":"application/json"},data:a},e.dataBE=[],o=function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n["default"].axios(r).then((function(t){console.log(t.data,"<<<<<<<<<<<<<<========response.data"),e.dataBE=t.data})).catch((function(e){console.log(e,"<<<<<<<<======error")}));case 2:console.log(e.dataBE,"<<<<<<<<<<<<<<========this.dataBE");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.next=7,o();case 7:for(i=[],e.dataBE&&e.dataBE.length&&(console.log(e.dataBE,"<<<<<<<<======dataBE"),e.dataBE.forEach((function(e){i.push(Object(v["a"])({_:e.r},e.c,e.v))}))),console.log(i,"<<<<<<<<======arrItem"),e.items=i.length?i:[],l=[],e.items.forEach((function(e){var t=JSON.parse(JSON.stringify(e));delete t["options"],l.push.apply(l,Object(m["a"])(Object.keys(t)))})),s=JSON.parse(JSON.stringify(e.fields)),l.push.apply(l,Object(m["a"])(s)),u=new Set(l),u=Object(m["a"])(u).sort(),u.splice(u.length-2,2),u=Object(m["a"])(u).sort((function(e,t){if(e.length<t.length)return-1})),e.fields=[e.fields[0]].concat(Object(m["a"])(u)),c=[],e.fields.forEach((function(e,t){t>0&&c.push(Object(v["a"])({},e,"___"))})),c=c.reduce((function(e,t){for(var a in t)e[a]=t[a];return e}),{}),d=1;d<31;d+=1)f=JSON.parse(JSON.stringify(c)),f._=d,e.shemaTable.push(f);e.items.forEach((function(t,a){if(e.shemaTable.forEach((function(a,n){if(t._===a._)for(var r in e.shemaTable[n])for(var o in t)o===r&&(e.shemaTable[n][r]=t[o])})),a>30)return!1})),e.shemaTable=e.shemaTable.map((function(e){return e.options={editMode:!1,key:Math.random()},e}));case 26:case"end":return t.stop()}}),t)})))()},methods:{handleRow:function(e){var t=this;"___"!==e.value&&(this.valueCell=e.value),this.shemaTable.forEach((function(a,n){a._===e.item._&&"_"!==e.field.key&&(t.editCell=e.field.key,t.currentRow=n,t.currentCow=e.field.key,t.shemaTable=t.shemaTable.map((function(e){return e.options.editMode=!1,e})),t.shemaTable[n]["options"].editMode=!0,t.shemaTable[n][e.field.key].substring(0,t.shemaTable[n][e.field.key].length-1))}))},handleBlur:function(){this.shemaTable=this.shemaTable.map((function(e){return e.options.editMode=!1,e}));var e=this.shemaTable[this.currentRow][this.currentCow];if("="===this.valueCell[0]){var t=this.valueCell.split("=").pop(),a=(t.indexOf("("),t.split("(")[0]);if("СУММ"===a){var r=t.split("(")[1];r=r.substring(0,r.length-1),r.split("+")[0],console.log(r,"operationData===>>>")}}"___"!==e.toString()?this.valueCell?this.shemaTable[this.currentRow][this.currentCow]=this.valueCell:this.shemaTable[this.currentRow][this.currentCow]:this.valueCell&&(this.shemaTable[this.currentRow][this.currentCow]=this.valueCell),this.valueCell||(this.shemaTable[this.currentRow][this.currentCow]="___");var o=JSON.stringify({col:this.currentCow,row:this.currentRow+1,value:this.valueCell}),i={method:"post",url:"/table/"+this.pathPrams[2]+"/editor/set",headers:{"Content-Type":"application/json"},data:o};n["default"].axios(i).then((function(e){console.log(e,"<<<<<<<<<<<<<<========")})).catch((function(e){console.log(e,"<<<<<<<<======error")})),this.valueCell=""}}},C=w,O=(a("e90e"),a("2877")),B=Object(O["a"])(C,p,b,!1,null,"35f8b95e",null),T=B.exports,j={name:"App",components:{tableGrid:T}},k=j,E=(a("034f"),Object(O["a"])(k,f,h,!1,null,null,null)),x=E.exports;a("f9e3"),a("2dd8");n["default"].use(s["a"]),n["default"].use(u["a"]),n["default"].use(c["a"]),n["default"].use(d["a"]),n["default"].use(l.a,o.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(x)}}).$mount("#app")},"85ec":function(e,t,a){},e90e:function(e,t,a){"use strict";var n=a("214d"),r=a.n(n);r.a}});
//# sourceMappingURL=app.d48a25b7.js.map