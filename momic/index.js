!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n(17);var o=n(18),a=r(o);React.render(React.createElement(a["default"],null),document.getElementById("react-content"))},function(t,e){function n(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}t.exports=n},function(t,e){t.exports=window.React},function(t,e){function n(t){return"number"==typeof t&&t>-1&&t%1==0&&r>=t}var r=9007199254740991;t.exports=n},function(t,e){function n(t){return!!t&&"object"==typeof t}t.exports=n},function(t,e,n){var r=n(13),o=n(3),a=n(4),i="[object Array]",c=Object.prototype,u=c.toString,s=r(Array,"isArray"),l=s||function(t){return a(t)&&o(t.length)&&u.call(t)==i};t.exports=l},function(t,e,n){var r=n(13),o=n(8),a=n(1),i=n(46),c=r(Object,"keys"),u=c?function(t){var e=null==t?void 0:t.constructor;return"function"==typeof e&&e.prototype===t||"function"!=typeof t&&o(t)?i(t):a(t)?c(t):[]}:i;t.exports=u},function(t,e,n){function r(t,e,n){if("function"!=typeof t)return o;if(void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 3:return function(n,r,o){return t.call(e,n,r,o)};case 4:return function(n,r,o,a){return t.call(e,n,r,o,a)};case 5:return function(n,r,o,a,i){return t.call(e,n,r,o,a,i)}}return function(){return t.apply(e,arguments)}}var o=n(53);t.exports=r},function(t,e,n){function r(t){return null!=t&&a(o(t))}var o=n(12),a=n(3);t.exports=r},function(t,e){function n(t,e){return t="number"==typeof t||r.test(t)?+t:-1,e=null==e?o:e,t>-1&&t%1==0&&e>t}var r=/^\d+$/,o=9007199254740991;t.exports=n},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),i=r(a),c=i["default"].createClass({displayName:"FocusTrap",propTypes:{onFocus:i["default"].PropTypes.func,onBlur:i["default"].PropTypes.func,focusName:i["default"].PropTypes.string,component:i["default"].PropTypes.any},getDefaultProps:function(){return{component:"div"}},render:function(){var t=this.props.component;return i["default"].createElement(t,o({tabIndex:"-1"},this.props),this.props.children)}});e["default"]=c,t.exports=e["default"]},function(t,e,n){"use strict";function r(){var t=void 0===arguments[0]?{}:arguments[0];return{contextTypes:{hotKeyMap:i["default"].PropTypes.object},childContextTypes:{hotKeyMap:i["default"].PropTypes.object},getChildContext:function(){return{hotKeyMap:this.__hotKeyMap__}},componentWillMount:function(){this.updateMap()},updateMap:function(){var t=this.buildMap();return l["default"](t,this.__hotKeyMap__)?!1:(this.__hotKeyMap__=t,!0)},buildMap:function(){var e=this.context.hotKeyMap||{},n=this.props.keyMap||{};return u["default"]({},e,t,n)},getMap:function(){return this.__hotKeyMap__}}}var o=function(t){return t&&t.__esModule?t:{"default":t}};Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r;var a=n(2),i=o(a),c=n(51),u=o(c),s=n(16),l=o(s);t.exports=e["default"]},function(t,e,n){var r=n(37),o=r("length");t.exports=o},function(t,e,n){function r(t,e){var n=null==t?void 0:t[e];return o(n)?n:void 0}var o=n(49);t.exports=r},function(t,e,n){function r(t){return o(t)?t:Object(t)}var o=n(1);t.exports=r},function(t,e,n){function r(t){return a(t)&&o(t)&&c.call(t,"callee")&&!u.call(t,"callee")}var o=n(8),a=n(4),i=Object.prototype,c=i.hasOwnProperty,u=i.propertyIsEnumerable;t.exports=r},function(t,e,n){function r(t,e,n,r){n="function"==typeof n?a(n,r,3):void 0;var i=n?n(t,e):void 0;return void 0===i?o(t,e,n):!!i}var o=n(35),a=n(7);t.exports=r},function(t,e,n){"use strict";n(22)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=r(o),i=n(20),c=r(i),u=a["default"].createClass({displayName:"App",render:function(){return a["default"].createElement(c["default"],{dataUrl:"/comic/kissis01/"})}});e["default"]=u,t.exports=e["default"]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=r(o),i=a["default"].createClass({displayName:"ComicBar",pre:function(){return this.props.onClick("pre")},next:function(){return this.props.onClick("next")},render:function(){return a["default"].createElement("div",{className:"comicBar"},a["default"].createElement("a",{onClick:this.pre,className:"pre"},a["default"].createElement("img",{src:"/image/chevron-left.png"})),a["default"].createElement("a",{onClick:this.next,className:"next"},a["default"].createElement("img",{src:"/image/chevron-right.png"})))}});e["default"]=i,t.exports=e["default"]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=r(o),i=n(21),c=r(i),u=n(19),s=r(u),l=n(24),f={prePage:"left",nextPage:["right","space"]},p=a["default"].createClass({displayName:"ComicBox",mixins:[l.HotKeyMapMixin(f)],getInitialState:function(){return{page:0}},componentDidMount:function(){var t=window.location.href.split("#")[1];t||(t=this.props.dataUrl);var e=this;$.get("comic.php?url="+encodeURIComponent(t),function(t){return console.log("in loaded"),t=$.parseJSON(t),parseInt(t.image.length)<1?(alert("\u6ca1\u6709\u627e\u5230\u53ef\u7528\u7684\u56fe\u50cf"),!1):(e.refs.cimg.setUrl("image/cover.jpg"),void e.setState({comicData:t}))})},goPage:function(t){"pre"==t?this.prePage():this.nextPage()},prePage:function(){if(0==this.state.page)return alert("\u5df2\u7ecf\u662f\u7b2c\u4e00\u5f20\u5566"),!1;this.setState({page:this.state.page-1});var t=this.state.comicData.base+this.state.comicData.image[this.state.page];this.refs.cimg.setUrl(t)},nextPage:function(){if(console.log(this.state.comicData),this.state.page+1>=this.state.comicData.image.length)return alert("\u5df2\u7ecf\u5230\u6700\u540e\u4e00\u5f20\u5566"),!1;this.setState({page:this.state.page+1});var t=this.state.comicData.base+this.state.comicData.image[this.state.page],e=this.state.comicData.base+this.state.comicData.image[this.state.page+1];$("<img>")[0].src=e,this.refs.cimg.setUrl(t)},render:function(){console.log("in render"),console.log(this.state);var t={prePage:this.prePage,nextPage:this.nextPage};console.log(this.state.comicData);var e="";return this.state.comicData&&(e=this.state.comicData.base+this.state.comicData.image[this.state.page]),console.log("imageUrl="+e),a["default"].createElement(l.HotKeys,{keyMap:f,handlers:t},a["default"].createElement("div",{className:"comicBox"},a["default"].createElement(s["default"],{onClick:this.goPage}),a["default"].createElement(c["default"],{onClick:this.nextPage,src:e,ref:"cimg"})))}});e["default"]=p,t.exports=e["default"]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=r(o),i=a["default"].createClass({displayName:"ComicImage",getInitialState:function(){var t="image/loading.gif";return console.log("in image init"),console.log(this.props),""!=this.props.src&&(t=this.props.src),{src:t}},componentWillMount:function(){console.log(this.props.src),""!=this.props.src&&this.setState({src:this.props.src})},setUrl:function(t){var e=this;$.get(t,function(){e.setState({src:t})}),this.setState({src:"image/loading.gif"})},render:function(){return a["default"].createElement("img",{className:"comicImage",src:this.state.src,onClick:this.props.onClick})}});e["default"]=i,t.exports=e["default"]},function(t,e){},function(t,e,n){"use strict";function r(t,e){var n=t[e];return n?v["default"](n)?n:[n]:[e]}var o=function(t){return t&&t.__esModule?t:{"default":t}},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),c=o(i),u=n(10),s=o(u),l=n(11),f=o(l),p=n(47),d=o(p),h=n(5),v=o(h),y=n(1),g=o(y),m=n(25),b=o(m),_=n(16),x=o(_),j=c["default"].createClass({displayName:"HotKeys",mixins:[f["default"]()],propTypes:{onFocus:c["default"].PropTypes.func,onBlur:c["default"].PropTypes.func,keyMap:c["default"].PropTypes.object,handlers:c["default"].PropTypes.object,focused:c["default"].PropTypes.bool,attach:c["default"].PropTypes.any},contextTypes:{hotKeyParent:c["default"].PropTypes.any},childContextTypes:{hotKeyParent:c["default"].PropTypes.any},getChildContext:function(){return{hotKeyParent:this}},componentDidMount:function(){var t=n(54);this.__mousetrap__=new t(this.props.attach||c["default"].findDOMNode(this)),this.updateHotKeys(!0)},componentDidUpdate:function(t){this.updateHotKeys(!1,t)},componentWillUnmount:function(){this.context.hotKeyParent&&this.context.hotKeyParent.childHandledSequence(null),this.__mousetrap__.reset()},updateHotKeys:function(){var t=this,e=void 0===arguments[0]?!1:arguments[0],n=void 0===arguments[1]?{}:arguments[1],o=this.props.handlers,a=void 0===o?{}:o,i=n.handlers,c=void 0===i?a:i;if(e||!x["default"](a,c)||this.updateMap()){var u=this.getMap(),s=[],l=this.__mousetrap__;b["default"](a,function(e,n){var o=r(u,n);b["default"](o,function(n){var r=void 0,o=function(n,r){var o=d["default"](t.props.focused)?t.props.focused:t.__isFocused__;return o&&r!==t.__lastChildSequence__?(t.context.hotKeyParent&&t.context.hotKeyParent.childHandledSequence(r),e(n,r)):void 0};g["default"](n)&&(r=n.action,n=n.sequence),s.push({callback:o,action:r,sequence:n})})}),l.reset(),b["default"](s,function(t){return l.bind(t.sequence,t.callback,t.action)})}},childHandledSequence:function(){var t=void 0===arguments[0]?null:arguments[0];this.__lastChildSequence__=t,this.context.hotKeyParent&&this.context.hotKeyParent.childHandledSequence(t)},onFocus:function(){if(this.__isFocused__=!0,this.props.onFocus){var t;(t=this.props).onFocus.apply(t,arguments)}},onBlur:function(){if(this.__isFocused__=!1,this.props.onBlur){var t;(t=this.props).onBlur.apply(t,arguments)}},render:function(){return c["default"].createElement(s["default"],a({},this.props,{onFocus:this.onFocus,onBlur:this.onBlur}),this.props.children)}});e["default"]=j,t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t["default"]:t};Object.defineProperty(e,"__esModule",{value:!0});var o=n(23);e.HotKeys=r(o);var a=n(10);e.FocusTrap=r(a);var i=n(11);e.HotKeyMapMixin=r(i)},function(t,e,n){var r=n(27),o=n(32),a=n(41),i=a(r,o);t.exports=i},function(t,e){function n(t,e){if("function"!=typeof t)throw new TypeError(r);return e=o(void 0===e?t.length-1:+e||0,0),function(){for(var n=arguments,r=-1,a=o(n.length-e,0),i=Array(a);++r<a;)i[r]=n[e+r];switch(e){case 0:return t.call(this,i);case 1:return t.call(this,n[0],i);case 2:return t.call(this,n[0],n[1],i)}var c=Array(e+1);for(r=-1;++r<e;)c[r]=n[r];return c[e]=i,t.apply(this,c)}}var r="Expected a function",o=Math.max;t.exports=n},function(t,e){function n(t,e){for(var n=-1,r=t.length;++n<r&&e(t[n],n,t)!==!1;);return t}t.exports=n},function(t,e){function n(t,e){for(var n=-1,r=t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}t.exports=n},function(t,e,n){function r(t,e,n){for(var r=-1,a=o(e),i=a.length;++r<i;){var c=a[r],u=t[c],s=n(u,e[c],c,t,e);(s===s?s===u:u!==u)&&(void 0!==u||c in t)||(t[c]=s)}return t}var o=n(6);t.exports=r},function(t,e,n){function r(t,e){return null==e?t:o(e,a(e),t)}var o=n(31),a=n(6);t.exports=r},function(t,e){function n(t,e,n){n||(n={});for(var r=-1,o=e.length;++r<o;){var a=e[r];n[a]=t[a]}return n}t.exports=n},function(t,e,n){var r=n(34),o=n(39),a=o(r);t.exports=a},function(t,e,n){var r=n(40),o=r();t.exports=o},function(t,e,n){function r(t,e){return o(t,e,a)}var o=n(33),a=n(6);t.exports=r},function(t,e,n){function r(t,e,n,c,u,s){return t===e?!0:null==t||null==e||!a(t)&&!i(e)?t!==t&&e!==e:o(t,e,r,n,c,u,s)}var o=n(36),a=n(1),i=n(4);t.exports=r},function(t,e,n){function r(t,e,n,r,p,v,y){var g=c(t),m=c(e),b=l,_=l;g||(b=h.call(t),b==s?b=f:b!=f&&(g=u(t))),m||(_=h.call(e),_==s?_=f:_!=f&&(m=u(e)));var x=b==f,j=_==f,P=b==_;if(P&&!g&&!x)return a(t,e,b);if(!p){var M=x&&d.call(t,"__wrapped__"),k=j&&d.call(e,"__wrapped__");if(M||k)return n(M?t.value():t,k?e.value():e,r,p,v,y)}if(!P)return!1;v||(v=[]),y||(y=[]);for(var w=v.length;w--;)if(v[w]==t)return y[w]==e;v.push(t),y.push(e);var O=(g?o:i)(t,e,n,r,p,v,y);return v.pop(),y.pop(),O}var o=n(42),a=n(43),i=n(44),c=n(5),u=n(50),s="[object Arguments]",l="[object Array]",f="[object Object]",p=Object.prototype,d=p.hasOwnProperty,h=p.toString;t.exports=r},function(t,e){function n(t){return function(e){return null==e?void 0:e[t]}}t.exports=n},function(t,e,n){function r(t){return i(function(e,n){var r=-1,i=null==e?0:n.length,c=i>2?n[i-2]:void 0,u=i>2?n[2]:void 0,s=i>1?n[i-1]:void 0;for("function"==typeof c?(c=o(c,s,5),i-=2):(c="function"==typeof s?s:void 0,i-=c?1:0),u&&a(n[0],n[1],u)&&(c=3>i?void 0:c,i=1);++r<i;){var l=n[r];l&&t(e,l,c)}return e})}var o=n(7),a=n(45),i=n(26);t.exports=r},function(t,e,n){function r(t,e){return function(n,r){var c=n?o(n):0;if(!a(c))return t(n,r);for(var u=e?c:-1,s=i(n);(e?u--:++u<c)&&r(s[u],u,s)!==!1;);return n}}var o=n(12),a=n(3),i=n(14);t.exports=r},function(t,e,n){function r(t){return function(e,n,r){for(var a=o(e),i=r(e),c=i.length,u=t?c:-1;t?u--:++u<c;){var s=i[u];if(n(a[s],s,a)===!1)break}return e}}var o=n(14);t.exports=r},function(t,e,n){function r(t,e){return function(n,r,i){return"function"==typeof r&&void 0===i&&a(n)?t(n,r):e(n,o(r,i,3))}}var o=n(7),a=n(5);t.exports=r},function(t,e,n){function r(t,e,n,r,a,i,c){var u=-1,s=t.length,l=e.length;if(s!=l&&!(a&&l>s))return!1;for(;++u<s;){var f=t[u],p=e[u],d=r?r(a?p:f,a?f:p,u):void 0;if(void 0!==d){if(d)continue;return!1}if(a){if(!o(e,function(t){return f===t||n(f,t,r,a,i,c)}))return!1}else if(f!==p&&!n(f,p,r,a,i,c))return!1}return!0}var o=n(28);t.exports=r},function(t,e){function n(t,e,n){switch(n){case r:case o:return+t==+e;case a:return t.name==e.name&&t.message==e.message;case i:return t!=+t?e!=+e:t==+e;case c:case u:return t==e+""}return!1}var r="[object Boolean]",o="[object Date]",a="[object Error]",i="[object Number]",c="[object RegExp]",u="[object String]";t.exports=n},function(t,e,n){function r(t,e,n,r,a,c,u){var s=o(t),l=s.length,f=o(e),p=f.length;if(l!=p&&!a)return!1;for(var d=l;d--;){var h=s[d];if(!(a?h in e:i.call(e,h)))return!1}for(var v=a;++d<l;){h=s[d];var y=t[h],g=e[h],m=r?r(a?g:y,a?y:g,h):void 0;if(!(void 0===m?n(y,g,r,a,c,u):m))return!1;v||(v="constructor"==h)}if(!v){var b=t.constructor,_=e.constructor;if(b!=_&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof _&&_ instanceof _))return!1}return!0}var o=n(6),a=Object.prototype,i=a.hasOwnProperty;t.exports=r},function(t,e,n){function r(t,e,n){if(!i(n))return!1;var r=typeof e;if("number"==r?o(n)&&a(e,n.length):"string"==r&&e in n){var c=n[e];return t===t?t===c:c!==c}return!1}var o=n(8),a=n(9),i=n(1);t.exports=r},function(t,e,n){function r(t){for(var e=u(t),n=e.length,r=n&&t.length,s=!!r&&c(r)&&(a(t)||o(t)),f=-1,p=[];++f<n;){var d=e[f];(s&&i(d,r)||l.call(t,d))&&p.push(d)}return p}var o=n(15),a=n(5),i=n(9),c=n(3),u=n(52),s=Object.prototype,l=s.hasOwnProperty;t.exports=r},function(t,e,n){function r(t){return t===!0||t===!1||o(t)&&c.call(t)==a}var o=n(4),a="[object Boolean]",i=Object.prototype,c=i.toString;t.exports=r},function(t,e,n){function r(t){return o(t)&&c.call(t)==a}var o=n(1),a="[object Function]",i=Object.prototype,c=i.toString;t.exports=r},function(t,e,n){function r(t){return null==t?!1:o(t)?l.test(u.call(t)):a(t)&&i.test(t)}var o=n(48),a=n(4),i=/^\[object .+?Constructor\]$/,c=Object.prototype,u=Function.prototype.toString,s=c.hasOwnProperty,l=RegExp("^"+u.call(s).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},function(t,e,n){function r(t){return a(t)&&o(t.length)&&!!K[T.call(t)]}var o=n(3),a=n(4),i="[object Arguments]",c="[object Array]",u="[object Boolean]",s="[object Date]",l="[object Error]",f="[object Function]",p="[object Map]",d="[object Number]",h="[object Object]",v="[object RegExp]",y="[object Set]",g="[object String]",m="[object WeakMap]",b="[object ArrayBuffer]",_="[object Float32Array]",x="[object Float64Array]",j="[object Int8Array]",P="[object Int16Array]",M="[object Int32Array]",k="[object Uint8Array]",w="[object Uint8ClampedArray]",O="[object Uint16Array]",C="[object Uint32Array]",K={};K[_]=K[x]=K[j]=K[P]=K[M]=K[k]=K[w]=K[O]=K[C]=!0,K[i]=K[c]=K[b]=K[u]=K[s]=K[l]=K[f]=K[p]=K[d]=K[h]=K[v]=K[y]=K[g]=K[m]=!1;var E=Object.prototype,T=E.toString;t.exports=r},function(t,e,n){var r=n(29),o=n(30),a=n(38),i=a(function(t,e,n){return n?r(t,e,n):o(t,e)});t.exports=i},function(t,e,n){function r(t){if(null==t)return[];u(t)||(t=Object(t));var e=t.length;e=e&&c(e)&&(a(t)||o(t))&&e||0;for(var n=t.constructor,r=-1,s="function"==typeof n&&n.prototype===t,f=Array(e),p=e>0;++r<e;)f[r]=r+"";for(var d in t)p&&i(d,e)||"constructor"==d&&(s||!l.call(t,d))||f.push(d);return f}var o=n(15),a=n(5),i=n(9),c=n(3),u=n(1),s=Object.prototype,l=s.hasOwnProperty;t.exports=r},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){var r;!function(o,a,i){function c(t,e,n){return t.addEventListener?void t.addEventListener(e,n,!1):void t.attachEvent("on"+e,n)}function u(t){if("keypress"==t.type){var e=String.fromCharCode(t.which);return t.shiftKey||(e=e.toLowerCase()),e}return x[t.which]?x[t.which]:j[t.which]?j[t.which]:String.fromCharCode(t.which).toLowerCase()}function s(t,e){return t.sort().join(",")===e.sort().join(",")}function l(t){var e=[];return t.shiftKey&&e.push("shift"),t.altKey&&e.push("alt"),t.ctrlKey&&e.push("ctrl"),t.metaKey&&e.push("meta"),e}function f(t){return t.preventDefault?void t.preventDefault():void(t.returnValue=!1)}function p(t){return t.stopPropagation?void t.stopPropagation():void(t.cancelBubble=!0)}function d(t){return"shift"==t||"ctrl"==t||"alt"==t||"meta"==t}function h(){if(!_){_={};for(var t in x)t>95&&112>t||x.hasOwnProperty(t)&&(_[x[t]]=t)}return _}function v(t,e,n){return n||(n=h()[t]?"keydown":"keypress"),"keypress"==n&&e.length&&(n="keydown"),n}function y(t){return"+"===t?["+"]:(t=t.replace(/\+{2}/g,"+plus"),t.split("+"))}function g(t,e){var n,r,o,a=[];for(n=y(t),o=0;o<n.length;++o)r=n[o],M[r]&&(r=M[r]),e&&"keypress"!=e&&P[r]&&(r=P[r],a.push("shift")),d(r)&&a.push(r);return e=v(r,a,e),{key:r,modifiers:a,action:e}}function m(t,e){return null===t||t===a?!1:t===e?!0:m(t.parentNode,e)}function b(t){function e(t){t=t||{};var e,n=!1;for(e in _)t[e]?n=!0:_[e]=0;n||(P=!1)}function n(t,e,n,r,o,a){var i,c,u=[],l=n.type;if(!y._callbacks[t])return[];for("keyup"==l&&d(t)&&(e=[t]),i=0;i<y._callbacks[t].length;++i)if(c=y._callbacks[t][i],(r||!c.seq||_[c.seq]==c.level)&&l==c.action&&("keypress"==l&&!n.metaKey&&!n.ctrlKey||s(e,c.modifiers))){var f=!r&&c.combo==o,p=r&&c.seq==r&&c.level==a;(f||p)&&y._callbacks[t].splice(i,1),u.push(c)}return u}function r(t,e,n,r){y.stopCallback(e,e.target||e.srcElement,n,r)||t(e,n)===!1&&(f(e),p(e))}function o(t){"number"!=typeof t.which&&(t.which=t.keyCode);var e=u(t);if(e)return"keyup"==t.type&&x===e?void(x=!1):void y.handleKey(e,l(t),t)}function i(){clearTimeout(m),m=setTimeout(e,1e3)}function h(t,n,o,a){function c(e){return function(){P=e,++_[t],i()}}function s(n){r(o,n,t),"keyup"!==a&&(x=u(n)),setTimeout(e,10)}_[t]=0;for(var l=0;l<n.length;++l){var f=l+1===n.length,p=f?s:c(a||g(n[l+1]).action);v(n[l],p,a,t,l)}}function v(t,e,r,o,a){y._directMap[t+":"+r]=e,t=t.replace(/\s+/g," ");var i,c=t.split(" ");return c.length>1?void h(t,c,e,r):(i=g(t,r),y._callbacks[i.key]=y._callbacks[i.key]||[],n(i.key,i.modifiers,{type:i.action},o,t,a),void y._callbacks[i.key][o?"unshift":"push"]({callback:e,modifiers:i.modifiers,action:i.action,seq:o,level:a,combo:t}))}var y=this;if(t=t||a,!(y instanceof b))return new b(t);y.target=t,y._callbacks={},y._directMap={};var m,_={},x=!1,j=!1,P=!1;y._handleKey=function(t,o,a){var i,c=n(t,o,a),u={},s=0,l=!1;for(i=0;i<c.length;++i)c[i].seq&&(s=Math.max(s,c[i].level));for(i=0;i<c.length;++i)if(c[i].seq){if(c[i].level!=s)continue;l=!0,u[c[i].seq]=1,r(c[i].callback,a,c[i].combo,c[i].seq)}else l||r(c[i].callback,a,c[i].combo);var f="keypress"==a.type&&j;a.type!=P||d(t)||f||e(u),j=l&&"keydown"==a.type},y._bindMultiple=function(t,e,n){for(var r=0;r<t.length;++r)v(t[r],e,n)},c(t,"keypress",o),c(t,"keydown",o),c(t,"keyup",o)}for(var _,x={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},j={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},P={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},M={option:"alt",command:"meta","return":"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},k=1;20>k;++k)x[111+k]="f"+k;for(k=0;9>=k;++k)x[k+96]=k;b.prototype.bind=function(t,e,n){var r=this;return t=t instanceof Array?t:[t],r._bindMultiple.call(r,t,e,n),r},b.prototype.unbind=function(t,e){var n=this;return n.bind.call(n,t,function(){},e)},b.prototype.trigger=function(t,e){var n=this;return n._directMap[t+":"+e]&&n._directMap[t+":"+e]({},t),n},b.prototype.reset=function(){var t=this;return t._callbacks={},t._directMap={},t},b.prototype.stopCallback=function(t,e){var n=this;return(" "+e.className+" ").indexOf(" mousetrap ")>-1?!1:m(e,n.target)?!1:"INPUT"==e.tagName||"SELECT"==e.tagName||"TEXTAREA"==e.tagName||e.isContentEditable},b.prototype.handleKey=function(){var t=this;return t._handleKey.apply(t,arguments)},b.init=function(){var t=b(a);for(var e in t)"_"!==e.charAt(0)&&(b[e]=function(e){return function(){return t[e].apply(t,arguments)}}(e))},b.init(),o.Mousetrap=b,"undefined"!=typeof t&&t.exports&&(t.exports=b),r=function(){return b}.call(e,n,e,t),!(r!==i&&(t.exports=r))}(window,document)}]);
//# sourceMappingURL=index.js.map