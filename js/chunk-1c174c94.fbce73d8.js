(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c174c94"],{"5c9c":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container py-5"},[t("form",{staticClass:"w-100",on:{submit:function(a){return a.preventDefault(),a.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[e._m(0),t("div",{staticClass:"form-label-group mb-2"},[t("label",{attrs:{for:"name"}},[e._v("Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",name:"name",type:"text",placeholder:"name",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}})]),t("div",{staticClass:"form-label-group mb-2"},[t("label",{attrs:{for:"email"}},[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"email",required:""},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}})]),t("div",{staticClass:"form-label-group mb-3"},[t("label",{attrs:{for:"password"}},[e._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"new-password",required:""},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}})]),t("div",{staticClass:"form-label-group mb-3"},[t("label",{attrs:{for:"password-check"}},[e._v("Password Check")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordCheck,expression:"passwordCheck"}],staticClass:"form-control",attrs:{id:"password-check",name:"passwordCheck",type:"password",placeholder:"Password",autocomplete:"new-password",required:""},domProps:{value:e.passwordCheck},on:{input:function(a){a.target.composing||(e.passwordCheck=a.target.value)}}})]),t("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" "+e._s(e.isProcessing?"Processing":"Submit")+" ")]),t("div",{staticClass:"text-center mb-3"},[t("p",[t("router-link",{attrs:{to:"/signin"}},[e._v(" Sign In ")])],1)]),t("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v(" © 2017-2018 ")])])])},s=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"text-center mb-4"},[t("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v(" Sign Up ")])])}],n=t("1da1"),o=(t("96cf"),t("b0c0"),t("e9c4"),t("7696")),i=t("2fa3"),c={data:function(){return{name:"",email:"",password:"",passwordCheck:"",isProcessing:!1}},methods:{handleSubmit:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var t,r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,e.isProcessing=!0,e.name){a.next=7;break}return i["a"].fire({icon:"warning",title:"請填寫註冊名稱"}),a.abrupt("return");case 7:if(e.email){a.next=12;break}return i["a"].fire({icon:"warning",title:"請填寫註冊信箱"}),a.abrupt("return");case 12:if(e.password&&e.passwordCheck){a.next=15;break}return i["a"].fire({icon:"warning",title:"請填寫註冊密碼"}),a.abrupt("return");case 15:return t={name:e.name,email:e.email,password:e.password,passwordCheck:e.passwordCheck},a.next=18,o["a"].signup(JSON.stringify(t));case 18:if(r=a.sent,s=r.data,"success"===s.status){a.next=22;break}throw new Error(s.message);case 22:e.$router.push({name:"sign-in"}),a.next=29;break;case 25:a.prev=25,a.t0=a["catch"](0),e.isProcessing=!1,i["a"].fire({icon:"error",title:"無法送出註冊，請稍後再試"});case 29:case"end":return a.stop()}}),a,null,[[0,25]])})))()}}},l=c,u=t("2877"),m=Object(u["a"])(l,r,s,!1,null,null,null);a["default"]=m.exports},e9c4:function(e,a,t){var r=t("23e7"),s=t("da84"),n=t("d066"),o=t("2ba4"),i=t("e330"),c=t("d039"),l=s.Array,u=n("JSON","stringify"),m=i(/./.exec),d=i("".charAt),p=i("".charCodeAt),f=i("".replace),w=i(1..toString),v=/[\uD800-\uDFFF]/g,g=/^[\uD800-\uDBFF]$/,b=/^[\uDC00-\uDFFF]$/,h=function(e,a,t){var r=d(t,a-1),s=d(t,a+1);return m(g,e)&&!m(b,s)||m(b,e)&&!m(g,r)?"\\u"+w(p(e,0),16):e},C=c((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&r({target:"JSON",stat:!0,forced:C},{stringify:function(e,a,t){for(var r=0,s=arguments.length,n=l(s);r<s;r++)n[r]=arguments[r];var i=o(u,null,n);return"string"==typeof i?f(i,v,h):i}})}}]);
//# sourceMappingURL=chunk-1c174c94.fbce73d8.js.map