define("a/1.0.0/index",["handlebars-runtime/1.3.0/handlebars"],function(a){a("a/1.0.0/a.json"),a("a/1.0.0/a.tpl"),a("a/1.0.0/a.handlebars"),a("a/1.0.0/a")}),define("a/1.0.0/a.json",[],function(a,n,e){e.exports={a:1}}),define("a/1.0.0/a.tpl",[],function(a,n,e){e.exports="<div></div>"}),define("a/1.0.0/a.handlebars",["handlebars-runtime/1.3.0/handlebars"],function(a,n,e){var t=a("handlebars-runtime/1.3.0/handlebars")["default"];e.exports=t.template(function(a,n,e,t,i){this.compilerInfo=[4,">= 1.0.0"],e=this.merge(e,a.helpers),i=i||{};var s,r,d="",o="function",l=this.escapeExpression;return d+="<div>",(r=e.content)?s=r.call(n,{hash:{},data:i}):(r=n&&n.content,s=typeof r===o?r.call(n,{hash:{},data:i}):r),d+=l(s)+"</div>\n"})}),define("a/1.0.0/a",[],function(){console.log("a")});