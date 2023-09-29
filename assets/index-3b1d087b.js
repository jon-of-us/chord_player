var Ze=Object.defineProperty;var Qe=(e,t,n)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var F=(e,t,n)=>(Qe(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function T(){}function $e(e){return e()}function pe(){return Object.create(null)}function I(e){e.forEach($e)}function Me(e){return typeof e=="function"}function P(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function We(e){return Object.keys(e).length===0}function et(e,...t){if(e==null){for(const r of t)r(void 0);return T}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ee(e,t,n){e.$$.on_destroy.push(et(t,n))}function w(e,t){e.appendChild(t)}function J(e,t,n){e.insertBefore(t,n||null)}function V(e){e.parentNode&&e.parentNode.removeChild(e)}function tt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function D(e){return document.createElement(e)}function H(e){return document.createTextNode(e)}function N(){return H(" ")}function X(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function $(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function nt(e){return Array.from(e.childNodes)}function W(e,t){t=""+t,e.data!==t&&(e.data=t)}function x(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let Z;function Y(e){Z=e}function De(){if(!Z)throw new Error("Function called outside component initialization");return Z}function ke(e){De().$$.on_mount.push(e)}function rt(e){De().$$.on_destroy.push(e)}const G=[],ne=[];let z=[];const ae=[],ot=Promise.resolve();let ce=!1;function it(){ce||(ce=!0,ot.then(Oe))}function le(e){z.push(e)}function xe(e){ae.push(e)}const oe=new Set;let U=0;function Oe(){if(U!==0)return;const e=Z;do{try{for(;U<G.length;){const t=G[U];U++,Y(t),st(t.$$)}}catch(t){throw G.length=0,U=0,t}for(Y(null),G.length=0,U=0;ne.length;)ne.pop()();for(let t=0;t<z.length;t+=1){const n=z[t];oe.has(n)||(oe.add(n),n())}z.length=0}while(G.length);for(;ae.length;)ae.pop()();ce=!1,oe.clear(),Y(e)}function st(e){if(e.fragment!==null){e.update(),I(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(le)}}function ut(e){const t=[],n=[];z.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),z=t}const ee=new Set;let L;function at(){L={r:0,c:[],p:L}}function ct(){L.r||I(L.c),L=L.p}function A(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function S(e,t,n,r){if(e&&e.o){if(ee.has(e))return;ee.add(e),L.c.push(()=>{ee.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ve(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Pe(e,t,n){const r=e.$$.props[t];r!==void 0&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function O(e){e&&e.c()}function M(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),le(()=>{const i=e.$$.on_mount.map($e).filter(Me);e.$$.on_destroy?e.$$.on_destroy.push(...i):I(i),e.$$.on_mount=[]}),o.forEach(le)}function E(e,t){const n=e.$$;n.fragment!==null&&(ut(n.after_update),I(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(e,t){e.$$.dirty[0]===-1&&(G.push(e),it(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(e,t,n,r,o,i,c,s=[-1]){const u=Z;Y(e);const a=e.$$={fragment:null,ctx:[],props:i,update:T,not_equal:o,bound:pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:pe(),dirty:s,skip_bound:!1,root:t.target||u.$$.root};c&&c(a.root);let d=!1;if(a.ctx=n?n(e,t.props||{},(f,l,...h)=>{const p=h.length?h[0]:l;return a.ctx&&o(a.ctx[f],a.ctx[f]=p)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](p),d&&lt(e,f)),l}):[],a.update(),d=!0,I(a.before_update),a.fragment=r?r(a.ctx):!1,t.target){if(t.hydrate){const f=nt(t.target);a.fragment&&a.fragment.l(f),f.forEach(V)}else a.fragment&&a.fragment.c();t.intro&&A(e.$$.fragment),M(e,t.target,t.anchor),Oe()}Y(u)}class R{constructor(){F(this,"$$");F(this,"$$set")}$destroy(){E(this,1),this.$destroy=T}$on(t,n){if(!Me(n))return T;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!We(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ft="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ft);function dt(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var je={exports:{}},Le={exports:{}};function ht(e){return e>64&&e<91?e-65:e>96&&e<123?e-71:e>47&&e<58?e+4:e===43?62:e===47?63:0}function mt(e,t){for(var n=e.replace(/[^A-Za-z0-9\+\/]/g,""),r=n.length,o=t?Math.ceil((r*3+1>>2)/t)*t:r*3+1>>2,i=new Uint8Array(o),c,s,u=0,a=0,d=0;d<r;d++)if(s=d&3,u|=ht(n.charCodeAt(d))<<18-6*s,s===3||r-d===1){for(c=0;c<3&&a<o;c++,a++)i[a]=u>>>(16>>>c&24)&255;u=0}return i}var pt={decode:mt},vt=function(e,t){return new Promise(function(n,r){var o=new XMLHttpRequest;t&&(o.responseType=t),o.open("GET",e),o.onload=function(){o.status===200?n(o.response):r(Error(o.statusText))},o.onerror=function(){r(Error("Network Error"))},o.send()})};(function(e){var t=pt,n=vt;function r(g){return function(v){return typeof v=="string"&&g.test(v)}}function o(g,v){return typeof g=="string"?g+v:typeof g=="function"?g(v):v}function i(g,v,y,b){var q=c(v)?s:u(v)?a:d(v)?f:l(v)?h:p(v)?m:_(v)?re:ze(v)?Ie:Je(v)?Xe:null,j=y||{};return q?q(g,v,j):b?Promise.resolve(b):Promise.reject("Source not valid ("+v+")")}i.fetch=n;function c(g){return g instanceof ArrayBuffer}function s(g,v,y){return new Promise(function(b,q){g.decodeAudioData(v,function(j){b(j)},function(){q("Can't decode audio data ("+v.slice(0,30)+"...)")})})}var u=r(/\.(mp3|wav|ogg)(\?.*)?$/i);function a(g,v,y){var b=o(y.from,v);return i(g,i.fetch(b,"arraybuffer"),y)}function d(g){return g&&typeof g.then=="function"}function f(g,v,y){return v.then(function(b){return i(g,b,y)})}var l=Array.isArray;function h(g,v,y){return Promise.all(v.map(function(b){return i(g,b,y,b)}))}function p(g){return g&&typeof g=="object"}function m(g,v,y){var b={},q=Object.keys(v).map(function(j){if(y.only&&y.only.indexOf(j)===-1)return null;var me=v[j];return i(g,me,y,me).then(function(Ye){b[j]=Ye})});return Promise.all(q).then(function(){return b})}var _=r(/\.json(\?.*)?$/i);function re(g,v,y){var b=o(y.from,v);return i(g,i.fetch(b,"text").then(JSON.parse),y)}var ze=r(/^data:audio/);function Ie(g,v,y){var b=v.indexOf(",");return i(g,t.decode(v.slice(b+1)).buffer,y)}var Je=r(/\.js(\?.*)?$/i);function Xe(g,v,y){var b=o(y.from,v);return i(g,i.fetch(b,"text").then(He),y)}function He(g){var v=g.indexOf("MIDI.Soundfont.");if(v<0)throw Error("Invalid MIDI.js Soundfont format");v=g.indexOf("=",v)+2;var y=g.lastIndexOf(",");return JSON.parse(g.slice(v,y)+"}")}e.exports&&(e.exports=i),typeof window<"u"&&(window.loadAudio=i)})(Le);var gt=Le.exports,Ne={exports:{}},yt=bt;function bt(e){var t=e.createGain(),n=t._voltage=At(e),r=K(n),o=K(n),i=K(n);return t._startAmount=K(o),t._endAmount=K(i),t._multiplier=K(r),t._multiplier.connect(t),t._startAmount.connect(t),t._endAmount.connect(t),t.value=r.gain,t.startValue=o.gain,t.endValue=i.gain,t.startValue.value=0,t.endValue.value=0,Object.defineProperties(t,_t),t}var _t={attack:{value:0,writable:!0},decay:{value:0,writable:!0},sustain:{value:1,writable:!0},release:{value:0,writable:!0},getReleaseDuration:{value:function(){return this.release}},start:{value:function(e){var t=this._multiplier.gain,n=this._startAmount.gain,r=this._endAmount.gain;this._voltage.start(e),this._decayFrom=this._decayFrom=e+this.attack,this._startedAt=e;var o=this.sustain;t.cancelScheduledValues(e),n.cancelScheduledValues(e),r.cancelScheduledValues(e),r.setValueAtTime(0,e),this.attack?(t.setValueAtTime(0,e),t.linearRampToValueAtTime(1,e+this.attack),n.setValueAtTime(1,e),n.linearRampToValueAtTime(0,e+this.attack)):(t.setValueAtTime(1,e),n.setValueAtTime(0,e)),this.decay&&t.setTargetAtTime(o,this._decayFrom,ge(this.decay))}},stop:{value:function(e,t){t&&(e=e-this.release);var n=e+this.release;if(this.release){var r=this._multiplier.gain,o=this._startAmount.gain,i=this._endAmount.gain;r.cancelScheduledValues(e),o.cancelScheduledValues(e),i.cancelScheduledValues(e);var c=ge(this.release);if(this.attack&&e<this._decayFrom){var s=Tt(0,1,this._startedAt,this._decayFrom,e);r.linearRampToValueAtTime(s,e),o.linearRampToValueAtTime(1-s,e),o.setTargetAtTime(0,e,c)}i.setTargetAtTime(1,e,c),r.setTargetAtTime(0,e,c)}return this._voltage.stop(n),n}},onended:{get:function(){return this._voltage.onended},set:function(e){this._voltage.onended=e}}},wt=new Float32Array([1,1]);function At(e){var t=e.createBufferSource(),n=e.createBuffer(1,2,e.sampleRate);return n.getChannelData(0).set(wt),t.buffer=n,t.loop=!0,t}function K(e){var t=e.context.createGain();return e.connect(t),t}function ge(e){return Math.log(e+1)/Math.log(100)}function Tt(e,t,n,r,o){var i=t-e,c=r-n,s=o-n,u=s/c,a=e+u*i;return a<=e&&(a=e),a>=t&&(a=t),a}var St=yt,$t={},Mt={gain:1,attack:.01,decay:.1,sustain:.9,release:.3,loop:!1,cents:0,loopStart:0,loopEnd:0};function Et(e,t,n){var r=!1,o=0,i={},c=e.createGain();c.gain.value=1;var s=Object.assign({},Mt,n),u={context:e,out:c,opts:s};return t instanceof AudioBuffer?u.buffer=t:u.buffers=t,u.start=function(f,l,h){if(u.buffer&&f!==null)return u.start(null,f,l);var p=f?u.buffers[f]:u.buffer;if(p){if(!r){console.warn("SamplePlayer not connected to any node.");return}}else{console.warn("Buffer "+f+" not found.");return}var m=h||$t;l=Math.max(e.currentTime,l||0),u.emit("start",l,f,m);var _=d(f,p,m);return _.id=a(f,_),_.env.start(l),_.source.start(l),u.emit("started",l,_.id,_),m.duration&&_.stop(l+m.duration),_},u.play=function(f,l,h){return u.start(f,l,h)},u.stop=function(f,l){var h;return l=l||Object.keys(i),l.map(function(p){return h=i[p],h?(h.stop(f),h.id):null})},u.connect=function(f){return r=!0,c.connect(f),u},u.emit=function(f,l,h,p){u.onevent&&u.onevent(f,l,h,p);var m=u["on"+f];m&&m(l,h,p)},u;function a(f,l){return l.id=o++,i[l.id]=l,l.source.onended=function(){var h=e.currentTime;l.source.disconnect(),l.env.disconnect(),l.disconnect(),u.emit("ended",h,l.id,l)},l.id}function d(f,l,h){var p=e.createGain();return p.gain.value=0,p.connect(c),p.env=kt(e,h,s),p.env.connect(p.gain),p.source=e.createBufferSource(),p.source.buffer=l,p.source.connect(p),p.source.loop=h.loop||s.loop,p.source.playbackRate.value=xt(h.cents||s.cents),p.source.loopStart=h.loopStart||s.loopStart,p.source.loopEnd=h.loopEnd||s.loopEnd,p.stop=function(m){var _=m||e.currentTime;u.emit("stop",_,f);var re=p.env.stop(_);p.source.stop(re)},p}}function ye(e){return typeof e=="number"}var Dt=["attack","decay","sustain","release"];function kt(e,t,n){var r=St(e),o=t.adsr||n.adsr;return Dt.forEach(function(i,c){o?r[i]=o[c]:r[i]=t[i]||n[i]}),r.value.value=ye(t.gain)?t.gain:ye(n.gain)?n.gain:1,r}function xt(e){return e?Math.pow(2,e/1200):1}var Ot=Et,Pt=function(e){return e.on=function(t,n){if(arguments.length===1&&typeof t=="function")return e.on("event",t);var r="on"+t,o=e[r];return e[r]=o?jt(o,n):n,e},e};function jt(e,t){return function(n,r,o,i){e(n,r,o,i),t(n,r,o,i)}}var Ve=/^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;function Lt(){return Ve}var Nt=[0,2,4,5,7,9,11];function Be(e,t,n){if(typeof e!="string")return null;var r=Ve.exec(e);if(!r||!t&&r[4])return null;var o={letter:r[1].toUpperCase(),acc:r[2].replace(/x/g,"##")};return o.pc=o.letter+o.acc,o.step=(o.letter.charCodeAt(0)+3)%7,o.alt=o.acc[0]==="b"?-o.acc.length:o.acc.length,o.chroma=Nt[o.step]+o.alt,r[3]&&(o.oct=+r[3],o.midi=o.chroma+12*(o.oct+1),o.freq=Re(o.midi,n)),t&&(o.tonicOf=r[4]),o}function Re(e,t){return Math.pow(2,(e-69)/12)*(t||440)}var qe={parse:Be,regex:Lt,midiToFreq:Re},Vt=["letter","acc","pc","step","alt","chroma","oct","midi","freq"];Vt.forEach(function(e){qe[e]=function(t){var n=Be(t);return n&&typeof n[e]<"u"?n[e]:null}});var Bt=qe,Rt=Bt,qt=function(e){return e!==null&&e!==[]&&e>=0&&e<129},Ft=function(e){return qt(e)?+e:Rt.midi(e)},Ut=function(e){if(e.buffers){var t=e.opts.map,n=typeof t=="function"?t:Ft,r=function(i){return i?n(i)||i:null};e.buffers=Kt(e.buffers,r);var o=e.start;e.start=function(i,c,s){var u=r(i),a=u%1;return a&&(u=Math.floor(u),s=Object.assign(s||{},{cents:Math.floor(a*100)})),o(u,c,s)}}return e};function Kt(e,t){return Object.keys(e).reduce(function(n,r){return n[t(r)]=e[r],n},{})}var Ct=Array.isArray,Gt=function(e){return e&&typeof e=="object"},zt={},It=function(e){return e.schedule=function(t,n){var r=e.context.currentTime,o=t<r?r:t;e.emit("schedule",o,n);var i,c,s,u;return n.map(function(a){if(a)Ct(a)?(i=a[0],c=a[1]):(i=a.time,c=a);else return null;return Gt(c)?(s=c.name||c.key||c.note||c.midi||null,u=c):(s=c,u=zt),e.start(s,o+(i||0),u)})},e};function Q(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Fe={exports:{}};(function(e,t){(function(n){e.exports=n()})(function(){return function n(r,o,i){function c(a,d){if(!o[a]){if(!r[a]){var f=typeof Q=="function"&&Q;if(!d&&f)return f(a,!0);if(s)return s(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var h=o[a]={exports:{}};r[a][0].call(h.exports,function(p){var m=r[a][1][p];return c(m||p)},h,h.exports,n,r,o,i)}return o[a].exports}for(var s=typeof Q=="function"&&Q,u=0;u<i.length;u++)c(i[u]);return c}({1:[function(n,r,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(i){function c(s){if(this._event=s,this._data=s.data,this.receivedTime=s.receivedTime,this._data&&this._data.length<2){console.warn("Illegal MIDI message of length",this._data.length);return}switch(this._messageCode=s.data[0]&240,this.channel=s.data[0]&15,this._messageCode){case 128:this.messageType="noteoff",this.key=s.data[1]&127,this.velocity=s.data[2]&127;break;case 144:this.messageType="noteon",this.key=s.data[1]&127,this.velocity=s.data[2]&127;break;case 160:this.messageType="keypressure",this.key=s.data[1]&127,this.pressure=s.data[2]&127;break;case 176:this.messageType="controlchange",this.controllerNumber=s.data[1]&127,this.controllerValue=s.data[2]&127,this.controllerNumber===120&&this.controllerValue===0?this.channelModeMessage="allsoundoff":this.controllerNumber===121?this.channelModeMessage="resetallcontrollers":this.controllerNumber===122?this.controllerValue===0?this.channelModeMessage="localcontroloff":this.channelModeMessage="localcontrolon":this.controllerNumber===123&&this.controllerValue===0?this.channelModeMessage="allnotesoff":this.controllerNumber===124&&this.controllerValue===0?this.channelModeMessage="omnimodeoff":this.controllerNumber===125&&this.controllerValue===0?this.channelModeMessage="omnimodeon":this.controllerNumber===126?this.channelModeMessage="monomodeon":this.controllerNumber===127&&(this.channelModeMessage="polymodeon");break;case 192:this.messageType="programchange",this.program=s.data[1];break;case 208:this.messageType="channelpressure",this.pressure=s.data[1]&127;break;case 224:this.messageType="pitchbendchange";var u=s.data[2]&127,a=s.data[1]&127;this.pitchBend=(u<<8)+a;break}}return new c(i)},r.exports=o.default},{}]},{},[1])(1)})})(Fe);var Jt=Fe.exports,Xt=Jt,Ht=function(e){return e.listenToMidi=function(t,n){var r={},o=n||{},i=o.gain||function(c){return c/127};return t.onmidimessage=function(c){var s=c.messageType?c:Xt(c);if(s.messageType==="noteon"&&s.velocity===0&&(s.messageType="noteoff"),!(o.channel&&s.channel!==o.channel))switch(s.messageType){case"noteon":r[s.key]=e.play(s.key,0,{gain:i(s.velocity)});break;case"noteoff":r[s.key]&&(r[s.key].stop(),delete r[s.key]);break}},e},e};(function(e){var t=Ot,n=Pt,r=Ut,o=It,i=Ht;function c(s,u,a){return i(o(r(n(t(s,u,a)))))}e.exports&&(e.exports=c),typeof window<"u"&&(window.SamplePlayer=c)})(Ne);var Yt=Ne.exports;function be(e,t){return Array(t+1).join(e)}function he(e){return typeof e=="number"}function Zt(e){return typeof e=="string"}function Qt(e){return typeof e<"u"}function Ue(e,t){return Math.pow(2,(e-69)/12)*(t||440)}var Ke=/^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;function Wt(){return Ke}var en=[0,2,4,5,7,9,11];function k(e,t,n){if(typeof e!="string")return null;var r=Ke.exec(e);if(!r||!t&&r[4])return null;var o={letter:r[1].toUpperCase(),acc:r[2].replace(/x/g,"##")};o.pc=o.letter+o.acc,o.step=(o.letter.charCodeAt(0)+3)%7,o.alt=o.acc[0]==="b"?-o.acc.length:o.acc.length;var i=en[o.step]+o.alt;return o.chroma=i<0?12+i:i%12,r[3]&&(o.oct=+r[3],o.midi=i+12*(o.oct+1),o.freq=Ue(o.midi,n)),t&&(o.tonicOf=r[4]),o}var tn="CDEFGAB";function nn(e){return he(e)?e<0?be("b",-e):be("#",e):""}function rn(e){return he(e)?""+e:""}function Ce(e,t,n){return e===null||typeof e>"u"?null:e.step?Ce(e.step,e.alt,e.oct):e<0||e>6?null:tn.charAt(e)+nn(t)+rn(n)}function Ge(e){if((he(e)||Zt(e))&&e>=0&&e<128)return+e;var t=k(e);return t&&Qt(t.midi)?t.midi:null}function on(e,t){var n=Ge(e);return n===null?null:Ue(n,t)}function sn(e){return(k(e)||{}).letter}function un(e){return(k(e)||{}).acc}function an(e){return(k(e)||{}).pc}function cn(e){return(k(e)||{}).step}function ln(e){return(k(e)||{}).alt}function fn(e){return(k(e)||{}).chroma}function dn(e){return(k(e)||{}).oct}const hn=Object.freeze(Object.defineProperty({__proto__:null,acc:un,alt:ln,build:Ce,chroma:fn,freq:on,letter:sn,midi:Ge,oct:dn,parse:k,pc:an,regex:Wt,step:cn},Symbol.toStringTag,{value:"Module"})),mn=dt(hn);var ie,_e;function pn(){if(_e)return ie;_e=1;var e=mn;function t(o,i){if(console.warn("new Soundfont() is deprected"),console.log("Please use Soundfont.instrument() instead of new Soundfont().instrument()"),!(this instanceof t))return new t(o);this.nameToUrl=i||t.nameToUrl,this.ctx=o,this.instruments={},this.promises=[]}t.prototype.onready=function(o){console.warn("deprecated API"),console.log("Please use Promise.all(Soundfont.instrument(), Soundfont.instrument()).then() instead of new Soundfont().onready()"),Promise.all(this.promises).then(o)},t.prototype.instrument=function(o,i){console.warn("new Soundfont().instrument() is deprecated."),console.log("Please use Soundfont.instrument() instead.");var c=this.ctx;if(o=o||"default",o in this.instruments)return this.instruments[o];var s={name:o,play:r(c,i)};if(this.instruments[o]=s,o!=="default"){var u=t.instrument(c,o,i).then(function(a){return s.play=a.play,s});this.promises.push(u),s.onready=function(a){console.warn("onready is deprecated. Use Soundfont.instrument().then()"),u.then(a)}}else s.onready=function(a){console.warn("onready is deprecated. Use Soundfont.instrument().then()"),a()};return s};function n(o,i,c){return console.warn("Soundfont.loadBuffers is deprecate."),console.log("Use Soundfont.instrument(..) and get buffers properties from the result."),t.instrument(o,i,c).then(function(s){return s.buffers})}t.loadBuffers=n;function r(o,i){return i=i||{},function(c,s,u,a){console.warn("The oscillator player is deprecated."),console.log("Starting with version 0.9.0 you will have to wait until the soundfont is loaded to play sounds.");var d=c>0&&c<129?+c:e.midi(c),f=d?e.midiToFreq(d,440):null;if(f){u=u||.2,a=a||{};var l=a.destination||i.destination||o.destination,h=a.vcoType||i.vcoType||"sine",p=a.gain||i.gain||.4,m=o.createOscillator();m.type=h,m.frequency.value=f;var _=o.createGain();return _.gain.value=p,m.connect(_),_.connect(l),m.start(s),u>0&&m.stop(s+u),m}}}return t.noteToMidi=e.midi,ie=t,ie}(function(e){var t=gt,n=Yt;function r(s,u,a){if(arguments.length===1)return function(p,m){return r(s,p,m)};var d=a||{},f=d.isSoundfontURL||o,l=d.nameToUrl||i,h=f(u)?u:l(u,d.soundfont,d.format);return t(s,h,{only:d.only||d.notes}).then(function(p){var m=n(s,p,d).connect(d.destination?d.destination:s.destination);return m.url=h,m.name=u,m})}function o(s){return/\.js(\?.*)?$/i.test(s)}function i(s,u,a){return a=a==="ogg"?a:"mp3",u=u==="FluidR3_GM"?u:"MusyngKite","https://gleitz.github.io/midi-js-soundfonts/"+u+"/"+s+"-"+a+".js"}var c=pn();c.instrument=r,c.nameToUrl=i,e.exports&&(e.exports=c),typeof window<"u"&&(window.Soundfont=c)})(je);var vn=je.exports;class gn{constructor(t,n){F(this,"sound",null);this.instrument=t,this.note=n}async start(){this.stop(),this.sound=await this.instrument.play(this.note)}stop(){this.sound!=null&&(this.sound.stop(),this.sound=null)}}const we=12*4,se=49,yn=1.7,fe="80px",bn="4px";class _n{constructor(t=()=>{}){F(this,"instrument",null);this.initalizeCallback=t}async play(t){if(this.instrument==null){this.initalizeCallback();let n=new(window.AudioContext||window.webkitAudioContext);this.instrument=await vn.instrument(n,"acoustic_grand_piano");let r=n.createGain();return r.connect(n.destination),this.instrument.connect(r),r.gain.value=yn,null}else return this.instrument.play(t.toString())}}var te=(e=>(e.major="maj",e.minor="min",e.diminished="dim",e))(te||{});function wn(e,t){let n=[];switch(t){case"maj":n=[e,e+4,e+7];break;case"min":n=[e,e+3,e+7];break;case"dim":n=[e,e+3,e+6];break}n=n.map(o=>o%12+we);let r=[e%12+we-12];return n.concat(r)}class Ae{constructor(t,n,r){F(this,"tones",[]);this.tones=wn(n,r).map(o=>new gn(t,o))}start(){this.tones.forEach(t=>t.start())}stop(){this.tones.forEach(t=>t.stop())}}const C=[];function An(e,t=T){let n;const r=new Set;function o(s){if(P(e,s)&&(e=s,n)){const u=!C.length;for(const a of r)a[1](),C.push(a,e);if(u){for(let a=0;a<C.length;a+=2)C[a][0](C[a+1]);C.length=0}}}function i(s){o(s(e))}function c(s,u=T){const a=[s,u];return r.add(a),r.size===1&&(n=t(o,i)||T),s(e),()=>{r.delete(a),r.size===0&&n&&(n(),n=null)}}return{set:o,update:i,subscribe:c}}const de=An({mouse:{isDown:!1}});function Tn(e){let t,n,r,o,i,c,s,u,a,d;return{c(){t=D("button"),n=H(e[0]),r=N(),o=D("p"),i=H(e[1]),c=N(),s=D("p"),u=H(e[2]),$(o,"class","descriptionlabel svelte-12fjv3s"),$(o,"id","topDescriptionLabel"),$(s,"class","descriptionlabel svelte-12fjv3s"),$(s,"id","bottomDescriptionLabel"),$(t,"class","svelte-12fjv3s"),x(t,"background-color",e[3]?"#606060":"#404040"),x(t,"width",fe),x(t,"height",fe),x(t,"margin",bn)},m(f,l){J(f,t,l),w(t,n),w(t,r),w(t,o),w(o,i),w(t,c),w(t,s),w(s,u),a||(d=[X(t,"mousedown",e[4]),X(t,"touchstart",e[4],{passive:!0}),X(t,"pointerenter",e[6]),X(t,"pointerleave",e[5]),X(t,"pointerup",e[5])],a=!0)},p(f,[l]){l&1&&W(n,f[0]),l&2&&W(i,f[1]),l&4&&W(u,f[2]),l&8&&x(t,"background-color",f[3]?"#606060":"#404040")},i:T,o:T,d(f){f&&V(t),a=!1,I(d)}}}function Sn(e,t,n){let r;Ee(e,de,m=>n(9,r=m));let{sound:o}=t,{shortcutKey:i}=t,{label:c}=t,{topDescriptionLabel:s=""}=t,{bottomDescriptionLabel:u=""}=t,a=!1;function d(){n(3,a=!0),o.start()}function f(){n(3,a=!1),o.stop()}function l(){n(3,a=!0),r.mouse.isDown&&setTimeout(()=>{a&&d()},200)}function h(m){m.key===i&&!a&&d()}function p(m){m.key===i&&f()}return ke(()=>(window.addEventListener("keydown",h),window.addEventListener("keyup",p),()=>{window.removeEventListener("keydown",h),window.removeEventListener("keyup",p),f()})),rt(()=>{f()}),e.$$set=m=>{"sound"in m&&n(7,o=m.sound),"shortcutKey"in m&&n(8,i=m.shortcutKey),"label"in m&&n(0,c=m.label),"topDescriptionLabel"in m&&n(1,s=m.topDescriptionLabel),"bottomDescriptionLabel"in m&&n(2,u=m.bottomDescriptionLabel)},[c,s,u,a,d,f,l,o,i]}class $n extends R{constructor(t){super(),B(this,t,Sn,Tn,P,{sound:7,shortcutKey:8,label:0,topDescriptionLabel:1,bottomDescriptionLabel:2})}}function Mn(e){return(7*(e+3)%12).toString()}function En(e){return["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"][e%12]}function Te(e,t,n){const r=e.slice();return r[5]=t[n],r[7]=n,r}function Se(e){let t,n;return t=new $n({props:{label:Mn(e[3](e[7])),topDescriptionLabel:En(e[3](e[7])),bottomDescriptionLabel:`press ${e[5]}`,sound:new Ae(e[2],e[3](e[7]),e[0]),shortcutKey:e[5]}}),{c(){O(t.$$.fragment)},m(r,o){M(t,r,o),n=!0},p(r,o){const i={};o&2&&(i.bottomDescriptionLabel=`press ${r[5]}`),o&5&&(i.sound=new Ae(r[2],r[3](r[7]),r[0])),o&2&&(i.shortcutKey=r[5]),t.$set(i)},i(r){n||(A(t.$$.fragment,r),n=!0)},o(r){S(t.$$.fragment,r),n=!1},d(r){E(t,r)}}}function Dn(e){let t,n,r=e[0].toString()+"",o,i,c,s=ve(e[1]),u=[];for(let d=0;d<s.length;d+=1)u[d]=Se(Te(e,s,d));const a=d=>S(u[d],1,1,()=>{u[d]=null});return{c(){t=D("div"),n=D("h1"),o=H(r),i=N();for(let d=0;d<u.length;d+=1)u[d].c();x(n,"width",fe),$(t,"class","button-row svelte-14vrr43")},m(d,f){J(d,t,f),w(t,n),w(n,o),w(t,i);for(let l=0;l<u.length;l+=1)u[l]&&u[l].m(t,null);c=!0},p(d,[f]){if((!c||f&1)&&r!==(r=d[0].toString()+"")&&W(o,r),f&15){s=ve(d[1]);let l;for(l=0;l<s.length;l+=1){const h=Te(d,s,l);u[l]?(u[l].p(h,f),A(u[l],1)):(u[l]=Se(h),u[l].c(),A(u[l],1),u[l].m(t,null))}for(at(),l=s.length;l<u.length;l+=1)a(l);ct()}},i(d){if(!c){for(let f=0;f<s.length;f+=1)A(u[f]);c=!0}},o(d){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)S(u[f]);c=!1},d(d){d&&V(t),tt(u,d)}}}function kn(e,t,n){let{startTone:r}=t,{chrdType:o}=t,{shortcutKeys:i}=t,{instrument:c}=t;function s(u){return r+7*u}return e.$$set=u=>{"startTone"in u&&n(4,r=u.startTone),"chrdType"in u&&n(0,o=u.chrdType),"shortcutKeys"in u&&n(1,i=u.shortcutKeys),"instrument"in u&&n(2,c=u.instrument)},[o,i,c,s,r]}class ue extends R{constructor(t){super(),B(this,t,kn,Dn,P,{startTone:4,chrdType:0,shortcutKeys:1,instrument:2})}}function xn(e){let t;return{c(){t=D("h1"),t.textContent="audio activates...",$(t,"class","svelte-5fc3z"),x(t,"opacity",e[0]?1:0)},m(n,r){J(n,t,r)},p(n,[r]){r&1&&x(t,"opacity",n[0]?1:0)},i:T,o:T,d(n){n&&V(t)}}}function On(e,t,n){let{showAudioActivate:r}=t;return e.$$set=o=>{"showAudioActivate"in o&&n(0,r=o.showAudioActivate)},[r]}class Pn extends R{constructor(t){super(),B(this,t,On,xn,P,{showAudioActivate:0})}}function jn(e){let t,n,r,o,i,c,s,u,a,d;function f(h){e[2](h)}let l={};return e[0]!==void 0&&(l.showAudioActivate=e[0]),n=new Pn({props:l}),ne.push(()=>Pe(n,"showAudioActivate",f)),i=new ue({props:{startTone:se,shortcutKeys:["q","w","e","r","t","z","u","i","o","p","ü"],chrdType:te.major,instrument:e[1]}}),s=new ue({props:{startTone:se+9,shortcutKeys:["a","s","d","f","g","h","j","k","l","ö","ä"],chrdType:te.minor,instrument:e[1]}}),a=new ue({props:{startTone:se+2*9,shortcutKeys:["y","x","c","v","b","n","m",",",".","-","_"],chrdType:te.diminished,instrument:e[1]}}),{c(){t=D("main"),O(n.$$.fragment),o=N(),O(i.$$.fragment),c=N(),O(s.$$.fragment),u=N(),O(a.$$.fragment),$(t,"class","svelte-10qjjto")},m(h,p){J(h,t,p),M(n,t,null),w(t,o),M(i,t,null),w(t,c),M(s,t,null),w(t,u),M(a,t,null),d=!0},p(h,[p]){const m={};!r&&p&1&&(r=!0,m.showAudioActivate=h[0],xe(()=>r=!1)),n.$set(m)},i(h){d||(A(n.$$.fragment,h),A(i.$$.fragment,h),A(s.$$.fragment,h),A(a.$$.fragment,h),d=!0)},o(h){S(n.$$.fragment,h),S(i.$$.fragment,h),S(s.$$.fragment,h),S(a.$$.fragment,h),d=!1},d(h){h&&V(t),E(n),E(i),E(s),E(a)}}}function Ln(e,t,n){let r=!1;function o(){n(0,r=!0),setTimeout(()=>{n(0,r=!1)},1e3)}let i=new _n(o);function c(s){r=s,n(0,r)}return[r,i,c]}class Nn extends R{constructor(t){super(),B(this,t,Ln,jn,P,{})}}function Vn(e,t,n){let{isMouseDown:r}=t;return ke(()=>{window.addEventListener("mousedown",()=>{n(0,r=!0)}),window.addEventListener("mouseup",()=>{n(0,r=!1)}),window.addEventListener("touchstart",()=>{n(0,r=!0)}),window.addEventListener("touchend",()=>{n(0,r=!1)})}),e.$$set=o=>{"isMouseDown"in o&&n(0,r=o.isMouseDown)},[r]}class Bn extends R{constructor(t){super(),B(this,t,Vn,null,P,{isMouseDown:0})}}function Rn(e){let t,n,r,o;function i(s){e[1](s)}let c={};return e[0].mouse.isDown!==void 0&&(c.isMouseDown=e[0].mouse.isDown),n=new Bn({props:c}),ne.push(()=>Pe(n,"isMouseDown",i)),{c(){t=D("div"),O(n.$$.fragment)},m(s,u){J(s,t,u),M(n,t,null),o=!0},p(s,[u]){const a={};!r&&u&1&&(r=!0,a.isMouseDown=s[0].mouse.isDown,xe(()=>r=!1)),n.$set(a)},i(s){o||(A(n.$$.fragment,s),o=!0)},o(s){S(n.$$.fragment,s),o=!1},d(s){s&&V(t),E(n)}}}function qn(e,t,n){let r;Ee(e,de,i=>n(0,r=i));function o(i){e.$$.not_equal(r.mouse.isDown,i)&&(r.mouse.isDown=i,de.set(r))}return[r,o]}class Fn extends R{constructor(t){super(),B(this,t,qn,Rn,P,{})}}function Un(e){let t,n,r,o,i;return n=new Nn({}),o=new Fn({}),{c(){t=D("main"),O(n.$$.fragment),r=N(),O(o.$$.fragment),$(t,"class","svelte-zs3zob")},m(c,s){J(c,t,s),M(n,t,null),w(t,r),M(o,t,null),i=!0},p:T,i(c){i||(A(n.$$.fragment,c),A(o.$$.fragment,c),i=!0)},o(c){S(n.$$.fragment,c),S(o.$$.fragment,c),i=!1},d(c){c&&V(t),E(n),E(o)}}}class Kn extends R{constructor(t){super(),B(this,t,null,Un,P,{})}}getComputedStyle(document.body).getPropertyValue("background-color");new Kn({target:document.body});
