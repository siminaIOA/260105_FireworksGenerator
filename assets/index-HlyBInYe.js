(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const $n="161",Zl=0,ls=1,Jl=2,nl=1,Ql=2,ir=3,Ar=0,Ct=1,ar=2,yr=0,yi=1,Er=2,cs=3,hs=4,$l=5,Fr=100,ec=101,tc=102,us=103,ds=104,rc=200,ic=201,ac=202,nc=203,Bn=204,Gn=205,sc=206,oc=207,lc=208,cc=209,hc=210,uc=211,dc=212,pc=213,fc=214,mc=0,gc=1,_c=2,za=3,vc=4,xc=5,Sc=6,Mc=7,sl=0,yc=1,Ec=2,Tr=0,Tc=1,bc=2,wc=3,Ac=4,Rc=5,Cc=6,ol=300,Ti=301,bi=302,Vn=303,Hn=304,qa=306,kn=1e3,Wt=1001,Wn=1002,ct=1003,ps=1004,Di=1005,wt=1006,rn=1007,Gr=1008,br=1009,Lc=1010,Pc=1011,es=1012,ll=1013,Mr=1014,nr=1015,ki=1016,cl=1017,hl=1018,Hr=1020,Dc=1021,Xt=1023,Uc=1024,Ic=1025,kr=1026,wi=1027,Nc=1028,ul=1029,Oc=1030,dl=1031,pl=1033,an=33776,nn=33777,sn=33778,on=33779,fs=35840,ms=35841,gs=35842,_s=35843,fl=36196,vs=37492,xs=37496,Ss=37808,Ms=37809,ys=37810,Es=37811,Ts=37812,bs=37813,ws=37814,As=37815,Rs=37816,Cs=37817,Ls=37818,Ps=37819,Ds=37820,Us=37821,ln=36492,Is=36494,Ns=36495,zc=36283,Os=36284,zs=36285,Fs=36286,ml=3e3,Wr=3001,Fc=3200,Bc=3201,Gc=0,Vc=1,Bt="",gt="srgb",ur="srgb-linear",ts="display-p3",Ya="display-p3-linear",Fa="linear",et="srgb",Ba="rec709",Ga="p3",Jr=7680,Bs=519,Hc=512,kc=513,Wc=514,gl=515,Xc=516,jc=517,qc=518,Yc=519,Xn=35044,Gs="300 es",jn=1035,sr=2e3,Va=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const r=t.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cn=Math.PI/180,qn=180/Math.PI;function wr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[r&255]+xt[r>>8&255]+xt[r>>16&255]+xt[r>>24&255]).toLowerCase()}function At(i,e,t){return Math.max(e,Math.min(t,i))}function Kc(i,e){return(i%e+e)%e}function hn(i,e,t){return(1-t)*i+t*e}function Vs(i){return(i&i-1)===0&&i!==0}function Yn(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Je(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),n=this.x-e.x,l=this.y-e.y;return this.x=n*r-l*a+e.x,this.y=n*a+l*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,r,a,n,l,s,o,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,n,l,s,o,c)}set(e,t,r,a,n,l,s,o,c){const h=this.elements;return h[0]=e,h[1]=a,h[2]=s,h[3]=t,h[4]=n,h[5]=o,h[6]=r,h[7]=l,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,n=this.elements,l=r[0],s=r[3],o=r[6],c=r[1],h=r[4],f=r[7],d=r[2],m=r[5],_=r[8],x=a[0],p=a[3],u=a[6],T=a[1],M=a[4],A=a[7],U=a[2],C=a[5],R=a[8];return n[0]=l*x+s*T+o*U,n[3]=l*p+s*M+o*C,n[6]=l*u+s*A+o*R,n[1]=c*x+h*T+f*U,n[4]=c*p+h*M+f*C,n[7]=c*u+h*A+f*R,n[2]=d*x+m*T+_*U,n[5]=d*p+m*M+_*C,n[8]=d*u+m*A+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],n=e[3],l=e[4],s=e[5],o=e[6],c=e[7],h=e[8];return t*l*h-t*s*c-r*n*h+r*s*o+a*n*c-a*l*o}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],n=e[3],l=e[4],s=e[5],o=e[6],c=e[7],h=e[8],f=h*l-s*c,d=s*o-h*n,m=c*n-l*o,_=t*f+r*d+a*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(a*c-h*r)*x,e[2]=(s*r-a*l)*x,e[3]=d*x,e[4]=(h*t-a*o)*x,e[5]=(a*n-s*t)*x,e[6]=m*x,e[7]=(r*o-c*t)*x,e[8]=(l*t-r*n)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,n,l,s){const o=Math.cos(n),c=Math.sin(n);return this.set(r*o,r*c,-r*(o*l+c*s)+l+e,-a*c,a*o,-a*(-c*l+o*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(un.makeScale(e,t)),this}rotate(e){return this.premultiply(un.makeRotation(-e)),this}translate(e,t){return this.premultiply(un.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const un=new Be;function _l(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ha(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zc(){const i=Ha("canvas");return i.style.display="block",i}const Hs={};function Xr(i){i in Hs||(Hs[i]=!0,console.warn(i))}const ks=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ws=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ta={[ur]:{transfer:Fa,primaries:Ba,toReference:i=>i,fromReference:i=>i},[gt]:{transfer:et,primaries:Ba,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ya]:{transfer:Fa,primaries:Ga,toReference:i=>i.applyMatrix3(Ws),fromReference:i=>i.applyMatrix3(ks)},[ts]:{transfer:et,primaries:Ga,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ws),fromReference:i=>i.applyMatrix3(ks).convertLinearToSRGB()}},Jc=new Set([ur,Ya]),Qe={enabled:!0,_workingColorSpace:ur,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Jc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const r=ta[e].toReference,a=ta[t].fromReference;return a(r(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ta[i].primaries},getTransfer:function(i){return i===Bt?Fa:ta[i].transfer}};function Ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function dn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Qr;class vl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qr===void 0&&(Qr=Ha("canvas")),Qr.width=e.width,Qr.height=e.height;const r=Qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Qr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ha("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),n=a.data;for(let l=0;l<n.length;l++)n[l]=Ei(n[l]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ei(t[r]/255)*255):t[r]=Ei(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qc=0;class xl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=wr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let n;if(Array.isArray(a)){n=[];for(let l=0,s=a.length;l<s;l++)a[l].isDataTexture?n.push(pn(a[l].image)):n.push(pn(a[l]))}else n=pn(a);r.url=n}return t||(e.images[this.uuid]=r),r}}function pn(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $c=0;class Tt extends Ri{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,r=Wt,a=Wt,n=wt,l=Gr,s=Xt,o=br,c=Tt.DEFAULT_ANISOTROPY,h=Bt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=wr(),this.name="",this.source=new xl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=l,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=o,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Wr?gt:Bt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kn:e.x=e.x-Math.floor(e.x);break;case Wt:e.x=e.x<0?0:1;break;case Wn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kn:e.y=e.y-Math.floor(e.y);break;case Wt:e.y=e.y<0?0:1;break;case Wn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?Wr:ml}set encoding(e){Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wr?gt:Bt}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=ol;Tt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,r=0,a=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,n=this.w,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a+l[12]*n,this.y=l[1]*t+l[5]*r+l[9]*a+l[13]*n,this.z=l[2]*t+l[6]*r+l[10]*a+l[14]*n,this.w=l[3]*t+l[7]*r+l[11]*a+l[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,n;const l=e.elements,s=l[0],o=l[4],c=l[8],h=l[1],f=l[5],d=l[9],m=l[2],_=l[6],x=l[10];if(Math.abs(o-h)<.01&&Math.abs(c-m)<.01&&Math.abs(d-_)<.01){if(Math.abs(o+h)<.1&&Math.abs(c+m)<.1&&Math.abs(d+_)<.1&&Math.abs(s+f+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const u=(s+1)/2,T=(f+1)/2,M=(x+1)/2,A=(o+h)/4,U=(c+m)/4,C=(d+_)/4;return u>T&&u>M?u<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(u),a=A/r,n=U/r):T>M?T<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(T),r=A/a,n=C/a):M<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(M),r=U/n,a=C/n),this.set(r,a,n,t),this}let p=Math.sqrt((_-d)*(_-d)+(c-m)*(c-m)+(h-o)*(h-o));return Math.abs(p)<.001&&(p=1),this.x=(_-d)/p,this.y=(c-m)/p,this.z=(h-o)/p,this.w=Math.acos((s+f+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eh extends Ri{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const a={width:e,height:t,depth:1};r.encoding!==void 0&&(Xr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Wr?gt:Bt),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Tt(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends eh{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Sl extends Tt{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=ct,this.minFilter=ct,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class th extends Tt{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=ct,this.minFilter=ct,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ci{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,n,l,s){let o=r[a+0],c=r[a+1],h=r[a+2],f=r[a+3];const d=n[l+0],m=n[l+1],_=n[l+2],x=n[l+3];if(s===0){e[t+0]=o,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(s===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(f!==x||o!==d||c!==m||h!==_){let p=1-s;const u=o*d+c*m+h*_+f*x,T=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const U=Math.sqrt(M),C=Math.atan2(U,u*T);p=Math.sin(p*C)/U,s=Math.sin(s*C)/U}const A=s*T;if(o=o*p+d*A,c=c*p+m*A,h=h*p+_*A,f=f*p+x*A,p===1-s){const U=1/Math.sqrt(o*o+c*c+h*h+f*f);o*=U,c*=U,h*=U,f*=U}}e[t]=o,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,r,a,n,l){const s=r[a],o=r[a+1],c=r[a+2],h=r[a+3],f=n[l],d=n[l+1],m=n[l+2],_=n[l+3];return e[t]=s*_+h*f+o*m-c*d,e[t+1]=o*_+h*d+c*f-s*m,e[t+2]=c*_+h*m+s*d-o*f,e[t+3]=h*_-s*f-o*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,n=e._z,l=e._order,s=Math.cos,o=Math.sin,c=s(r/2),h=s(a/2),f=s(n/2),d=o(r/2),m=o(a/2),_=o(n/2);switch(l){case"XYZ":this._x=d*h*f+c*m*_,this._y=c*m*f-d*h*_,this._z=c*h*_+d*m*f,this._w=c*h*f-d*m*_;break;case"YXZ":this._x=d*h*f+c*m*_,this._y=c*m*f-d*h*_,this._z=c*h*_-d*m*f,this._w=c*h*f+d*m*_;break;case"ZXY":this._x=d*h*f-c*m*_,this._y=c*m*f+d*h*_,this._z=c*h*_+d*m*f,this._w=c*h*f-d*m*_;break;case"ZYX":this._x=d*h*f-c*m*_,this._y=c*m*f+d*h*_,this._z=c*h*_-d*m*f,this._w=c*h*f+d*m*_;break;case"YZX":this._x=d*h*f+c*m*_,this._y=c*m*f+d*h*_,this._z=c*h*_-d*m*f,this._w=c*h*f-d*m*_;break;case"XZY":this._x=d*h*f-c*m*_,this._y=c*m*f-d*h*_,this._z=c*h*_+d*m*f,this._w=c*h*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],n=t[8],l=t[1],s=t[5],o=t[9],c=t[2],h=t[6],f=t[10],d=r+s+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-o)*m,this._y=(n-c)*m,this._z=(l-a)*m}else if(r>s&&r>f){const m=2*Math.sqrt(1+r-s-f);this._w=(h-o)/m,this._x=.25*m,this._y=(a+l)/m,this._z=(n+c)/m}else if(s>f){const m=2*Math.sqrt(1+s-r-f);this._w=(n-c)/m,this._x=(a+l)/m,this._y=.25*m,this._z=(o+h)/m}else{const m=2*Math.sqrt(1+f-r-s);this._w=(l-a)/m,this._x=(n+c)/m,this._y=(o+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,n=e._z,l=e._w,s=t._x,o=t._y,c=t._z,h=t._w;return this._x=r*h+l*s+a*c-n*o,this._y=a*h+l*o+n*s-r*c,this._z=n*h+l*c+r*o-a*s,this._w=l*h-r*s-a*o-n*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,n=this._z,l=this._w;let s=l*e._w+r*e._x+a*e._y+n*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=l,this._x=r,this._y=a,this._z=n,this;const o=1-s*s;if(o<=Number.EPSILON){const m=1-t;return this._w=m*l+t*this._w,this._x=m*r+t*this._x,this._y=m*a+t*this._y,this._z=m*n+t*this._z,this.normalize(),this}const c=Math.sqrt(o),h=Math.atan2(c,s),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=l*f+this._w*d,this._x=r*f+this._x*d,this._y=a*f+this._y*d,this._z=n*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),a=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(a),r*Math.sin(n),r*Math.cos(n),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,r=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6]*a,this.y=n[1]*t+n[4]*r+n[7]*a,this.z=n[2]*t+n[5]*r+n[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,n=e.elements,l=1/(n[3]*t+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*t+n[4]*r+n[8]*a+n[12])*l,this.y=(n[1]*t+n[5]*r+n[9]*a+n[13])*l,this.z=(n[2]*t+n[6]*r+n[10]*a+n[14])*l,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,n=e.x,l=e.y,s=e.z,o=e.w,c=2*(l*a-s*r),h=2*(s*t-n*a),f=2*(n*r-l*t);return this.x=t+o*c+l*f-s*h,this.y=r+o*h+s*c-n*f,this.z=a+o*f+n*h-l*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[4]*r+n[8]*a,this.y=n[1]*t+n[5]*r+n[9]*a,this.z=n[2]*t+n[6]*r+n[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,n=e.z,l=t.x,s=t.y,o=t.z;return this.x=a*o-n*s,this.y=n*l-r*o,this.z=r*s-a*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return fn.copy(this).projectOnVector(e),this.sub(fn)}reflect(e){return this.sub(fn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fn=new w,Xs=new Ci;class ji{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const n=r.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let l=0,s=n.count;l<s;l++)e.isMesh===!0?e.getVertexPosition(l,Gt):Gt.fromBufferAttribute(n,l),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ra.copy(r.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}const a=e.children;for(let n=0,l=a.length;n<l;n++)this.expandByObject(a[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ui),ia.subVectors(this.max,Ui),$r.subVectors(e.a,Ui),ei.subVectors(e.b,Ui),ti.subVectors(e.c,Ui),pr.subVectors(ei,$r),fr.subVectors(ti,ei),Pr.subVectors($r,ti);let t=[0,-pr.z,pr.y,0,-fr.z,fr.y,0,-Pr.z,Pr.y,pr.z,0,-pr.x,fr.z,0,-fr.x,Pr.z,0,-Pr.x,-pr.y,pr.x,0,-fr.y,fr.x,0,-Pr.y,Pr.x,0];return!mn(t,$r,ei,ti,ia)||(t=[1,0,0,0,1,0,0,0,1],!mn(t,$r,ei,ti,ia))?!1:(aa.crossVectors(pr,fr),t=[aa.x,aa.y,aa.z],mn(t,$r,ei,ti,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qt=[new w,new w,new w,new w,new w,new w,new w,new w],Gt=new w,ra=new ji,$r=new w,ei=new w,ti=new w,pr=new w,fr=new w,Pr=new w,Ui=new w,ia=new w,aa=new w,Dr=new w;function mn(i,e,t,r,a){for(let n=0,l=i.length-3;n<=l;n+=3){Dr.fromArray(i,n);const s=a.x*Math.abs(Dr.x)+a.y*Math.abs(Dr.y)+a.z*Math.abs(Dr.z),o=e.dot(Dr),c=t.dot(Dr),h=r.dot(Dr);if(Math.max(-Math.max(o,c,h),Math.min(o,c,h))>s)return!1}return!0}const rh=new ji,Ii=new w,gn=new w;class qi{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):rh.setFromPoints(e).getCenter(r);let a=0;for(let n=0,l=e.length;n<l;n++)a=Math.max(a,r.distanceToSquared(e[n]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ii.subVectors(e,this.center);const t=Ii.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Ii,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ii.copy(e.center).add(gn)),this.expandByPoint(Ii.copy(e.center).sub(gn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $t=new w,_n=new w,na=new w,mr=new w,vn=new w,sa=new w,xn=new w;class rs{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$t)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$t.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($t.copy(this.origin).addScaledVector(this.direction,t),$t.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){_n.copy(e).add(t).multiplyScalar(.5),na.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(_n);const n=e.distanceTo(t)*.5,l=-this.direction.dot(na),s=mr.dot(this.direction),o=-mr.dot(na),c=mr.lengthSq(),h=Math.abs(1-l*l);let f,d,m,_;if(h>0)if(f=l*o-s,d=l*s-o,_=n*h,f>=0)if(d>=-_)if(d<=_){const x=1/h;f*=x,d*=x,m=f*(f+l*d+2*s)+d*(l*f+d+2*o)+c}else d=n,f=Math.max(0,-(l*d+s)),m=-f*f+d*(d+2*o)+c;else d=-n,f=Math.max(0,-(l*d+s)),m=-f*f+d*(d+2*o)+c;else d<=-_?(f=Math.max(0,-(-l*n+s)),d=f>0?-n:Math.min(Math.max(-n,-o),n),m=-f*f+d*(d+2*o)+c):d<=_?(f=0,d=Math.min(Math.max(-n,-o),n),m=d*(d+2*o)+c):(f=Math.max(0,-(l*n+s)),d=f>0?n:Math.min(Math.max(-n,-o),n),m=-f*f+d*(d+2*o)+c);else d=l>0?-n:n,f=Math.max(0,-(l*d+s)),m=-f*f+d*(d+2*o)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(_n).addScaledVector(na,d),m}intersectSphere(e,t){$t.subVectors(e.center,this.origin);const r=$t.dot(this.direction),a=$t.dot($t)-r*r,n=e.radius*e.radius;if(a>n)return null;const l=Math.sqrt(n-a),s=r-l,o=r+l;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,n,l,s,o;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(r=(e.min.x-d.x)*c,a=(e.max.x-d.x)*c):(r=(e.max.x-d.x)*c,a=(e.min.x-d.x)*c),h>=0?(n=(e.min.y-d.y)*h,l=(e.max.y-d.y)*h):(n=(e.max.y-d.y)*h,l=(e.min.y-d.y)*h),r>l||n>a||((n>r||isNaN(r))&&(r=n),(l<a||isNaN(a))&&(a=l),f>=0?(s=(e.min.z-d.z)*f,o=(e.max.z-d.z)*f):(s=(e.max.z-d.z)*f,o=(e.min.z-d.z)*f),r>o||s>a)||((s>r||r!==r)&&(r=s),(o<a||a!==a)&&(a=o),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,$t)!==null}intersectTriangle(e,t,r,a,n){vn.subVectors(t,e),sa.subVectors(r,e),xn.crossVectors(vn,sa);let l=this.direction.dot(xn),s;if(l>0){if(a)return null;s=1}else if(l<0)s=-1,l=-l;else return null;mr.subVectors(this.origin,e);const o=s*this.direction.dot(sa.crossVectors(mr,sa));if(o<0)return null;const c=s*this.direction.dot(vn.cross(mr));if(c<0||o+c>l)return null;const h=-s*mr.dot(xn);return h<0?null:this.at(h/l,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,r,a,n,l,s,o,c,h,f,d,m,_,x,p){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,n,l,s,o,c,h,f,d,m,_,x,p)}set(e,t,r,a,n,l,s,o,c,h,f,d,m,_,x,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=r,u[12]=a,u[1]=n,u[5]=l,u[9]=s,u[13]=o,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/ri.setFromMatrixColumn(e,0).length(),n=1/ri.setFromMatrixColumn(e,1).length(),l=1/ri.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*n,t[5]=r[5]*n,t[6]=r[6]*n,t[7]=0,t[8]=r[8]*l,t[9]=r[9]*l,t[10]=r[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,n=e.z,l=Math.cos(r),s=Math.sin(r),o=Math.cos(a),c=Math.sin(a),h=Math.cos(n),f=Math.sin(n);if(e.order==="XYZ"){const d=l*h,m=l*f,_=s*h,x=s*f;t[0]=o*h,t[4]=-o*f,t[8]=c,t[1]=m+_*c,t[5]=d-x*c,t[9]=-s*o,t[2]=x-d*c,t[6]=_+m*c,t[10]=l*o}else if(e.order==="YXZ"){const d=o*h,m=o*f,_=c*h,x=c*f;t[0]=d+x*s,t[4]=_*s-m,t[8]=l*c,t[1]=l*f,t[5]=l*h,t[9]=-s,t[2]=m*s-_,t[6]=x+d*s,t[10]=l*o}else if(e.order==="ZXY"){const d=o*h,m=o*f,_=c*h,x=c*f;t[0]=d-x*s,t[4]=-l*f,t[8]=_+m*s,t[1]=m+_*s,t[5]=l*h,t[9]=x-d*s,t[2]=-l*c,t[6]=s,t[10]=l*o}else if(e.order==="ZYX"){const d=l*h,m=l*f,_=s*h,x=s*f;t[0]=o*h,t[4]=_*c-m,t[8]=d*c+x,t[1]=o*f,t[5]=x*c+d,t[9]=m*c-_,t[2]=-c,t[6]=s*o,t[10]=l*o}else if(e.order==="YZX"){const d=l*o,m=l*c,_=s*o,x=s*c;t[0]=o*h,t[4]=x-d*f,t[8]=_*f+m,t[1]=f,t[5]=l*h,t[9]=-s*h,t[2]=-c*h,t[6]=m*f+_,t[10]=d-x*f}else if(e.order==="XZY"){const d=l*o,m=l*c,_=s*o,x=s*c;t[0]=o*h,t[4]=-f,t[8]=c*h,t[1]=d*f+x,t[5]=l*h,t[9]=m*f-_,t[2]=_*f-m,t[6]=s*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ih,e,ah)}lookAt(e,t,r){const a=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),gr.crossVectors(r,Dt),gr.lengthSq()===0&&(Math.abs(r.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),gr.crossVectors(r,Dt)),gr.normalize(),oa.crossVectors(Dt,gr),a[0]=gr.x,a[4]=oa.x,a[8]=Dt.x,a[1]=gr.y,a[5]=oa.y,a[9]=Dt.y,a[2]=gr.z,a[6]=oa.z,a[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,n=this.elements,l=r[0],s=r[4],o=r[8],c=r[12],h=r[1],f=r[5],d=r[9],m=r[13],_=r[2],x=r[6],p=r[10],u=r[14],T=r[3],M=r[7],A=r[11],U=r[15],C=a[0],R=a[4],F=a[8],W=a[12],g=a[1],b=a[5],G=a[9],$=a[13],L=a[2],B=a[6],V=a[10],j=a[14],k=a[3],X=a[7],ee=a[11],Z=a[15];return n[0]=l*C+s*g+o*L+c*k,n[4]=l*R+s*b+o*B+c*X,n[8]=l*F+s*G+o*V+c*ee,n[12]=l*W+s*$+o*j+c*Z,n[1]=h*C+f*g+d*L+m*k,n[5]=h*R+f*b+d*B+m*X,n[9]=h*F+f*G+d*V+m*ee,n[13]=h*W+f*$+d*j+m*Z,n[2]=_*C+x*g+p*L+u*k,n[6]=_*R+x*b+p*B+u*X,n[10]=_*F+x*G+p*V+u*ee,n[14]=_*W+x*$+p*j+u*Z,n[3]=T*C+M*g+A*L+U*k,n[7]=T*R+M*b+A*B+U*X,n[11]=T*F+M*G+A*V+U*ee,n[15]=T*W+M*$+A*j+U*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],n=e[12],l=e[1],s=e[5],o=e[9],c=e[13],h=e[2],f=e[6],d=e[10],m=e[14],_=e[3],x=e[7],p=e[11],u=e[15];return _*(+n*o*f-a*c*f-n*s*d+r*c*d+a*s*m-r*o*m)+x*(+t*o*m-t*c*d+n*l*d-a*l*m+a*c*h-n*o*h)+p*(+t*c*f-t*s*m-n*l*f+r*l*m+n*s*h-r*c*h)+u*(-a*s*h-t*o*f+t*s*d+a*l*f-r*l*d+r*o*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],n=e[3],l=e[4],s=e[5],o=e[6],c=e[7],h=e[8],f=e[9],d=e[10],m=e[11],_=e[12],x=e[13],p=e[14],u=e[15],T=f*p*c-x*d*c+x*o*m-s*p*m-f*o*u+s*d*u,M=_*d*c-h*p*c-_*o*m+l*p*m+h*o*u-l*d*u,A=h*x*c-_*f*c+_*s*m-l*x*m-h*s*u+l*f*u,U=_*f*o-h*x*o-_*s*d+l*x*d+h*s*p-l*f*p,C=t*T+r*M+a*A+n*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=T*R,e[1]=(x*d*n-f*p*n-x*a*m+r*p*m+f*a*u-r*d*u)*R,e[2]=(s*p*n-x*o*n+x*a*c-r*p*c-s*a*u+r*o*u)*R,e[3]=(f*o*n-s*d*n-f*a*c+r*d*c+s*a*m-r*o*m)*R,e[4]=M*R,e[5]=(h*p*n-_*d*n+_*a*m-t*p*m-h*a*u+t*d*u)*R,e[6]=(_*o*n-l*p*n-_*a*c+t*p*c+l*a*u-t*o*u)*R,e[7]=(l*d*n-h*o*n+h*a*c-t*d*c-l*a*m+t*o*m)*R,e[8]=A*R,e[9]=(_*f*n-h*x*n-_*r*m+t*x*m+h*r*u-t*f*u)*R,e[10]=(l*x*n-_*s*n+_*r*c-t*x*c-l*r*u+t*s*u)*R,e[11]=(h*s*n-l*f*n-h*r*c+t*f*c+l*r*m-t*s*m)*R,e[12]=U*R,e[13]=(h*x*a-_*f*a+_*r*d-t*x*d-h*r*p+t*f*p)*R,e[14]=(_*s*a-l*x*a-_*r*o+t*x*o+l*r*p-t*s*p)*R,e[15]=(l*f*a-h*s*a+h*r*o-t*f*o-l*r*d+t*s*d)*R,this}scale(e){const t=this.elements,r=e.x,a=e.y,n=e.z;return t[0]*=r,t[4]*=a,t[8]*=n,t[1]*=r,t[5]*=a,t[9]*=n,t[2]*=r,t[6]*=a,t[10]*=n,t[3]*=r,t[7]*=a,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),n=1-r,l=e.x,s=e.y,o=e.z,c=n*l,h=n*s;return this.set(c*l+r,c*s-a*o,c*o+a*s,0,c*s+a*o,h*s+r,h*o-a*l,0,c*o-a*s,h*o+a*l,n*o*o+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,n,l){return this.set(1,r,n,0,e,1,l,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,n=t._x,l=t._y,s=t._z,o=t._w,c=n+n,h=l+l,f=s+s,d=n*c,m=n*h,_=n*f,x=l*h,p=l*f,u=s*f,T=o*c,M=o*h,A=o*f,U=r.x,C=r.y,R=r.z;return a[0]=(1-(x+u))*U,a[1]=(m+A)*U,a[2]=(_-M)*U,a[3]=0,a[4]=(m-A)*C,a[5]=(1-(d+u))*C,a[6]=(p+T)*C,a[7]=0,a[8]=(_+M)*R,a[9]=(p-T)*R,a[10]=(1-(d+x))*R,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let n=ri.set(a[0],a[1],a[2]).length();const l=ri.set(a[4],a[5],a[6]).length(),s=ri.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),e.x=a[12],e.y=a[13],e.z=a[14],Vt.copy(this);const o=1/n,c=1/l,h=1/s;return Vt.elements[0]*=o,Vt.elements[1]*=o,Vt.elements[2]*=o,Vt.elements[4]*=c,Vt.elements[5]*=c,Vt.elements[6]*=c,Vt.elements[8]*=h,Vt.elements[9]*=h,Vt.elements[10]*=h,t.setFromRotationMatrix(Vt),r.x=n,r.y=l,r.z=s,this}makePerspective(e,t,r,a,n,l,s=sr){const o=this.elements,c=2*n/(t-e),h=2*n/(r-a),f=(t+e)/(t-e),d=(r+a)/(r-a);let m,_;if(s===sr)m=-(l+n)/(l-n),_=-2*l*n/(l-n);else if(s===Va)m=-l/(l-n),_=-l*n/(l-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return o[0]=c,o[4]=0,o[8]=f,o[12]=0,o[1]=0,o[5]=h,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=m,o[14]=_,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,r,a,n,l,s=sr){const o=this.elements,c=1/(t-e),h=1/(r-a),f=1/(l-n),d=(t+e)*c,m=(r+a)*h;let _,x;if(s===sr)_=(l+n)*f,x=-2*f;else if(s===Va)_=n*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*h,o[9]=0,o[13]=-m,o[2]=0,o[6]=0,o[10]=x,o[14]=-_,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ri=new w,Vt=new st,ih=new w(0,0,0),ah=new w(1,1,1),gr=new w,oa=new w,Dt=new w,js=new st,qs=new Ci;class Yi{constructor(e=0,t=0,r=0,a=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,n=a[0],l=a[4],s=a[8],o=a[1],c=a[5],h=a[9],f=a[2],d=a[6],m=a[10];switch(t){case"XYZ":this._y=Math.asin(At(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-l,n)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-f,n),this._z=0);break;case"ZXY":this._x=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-l,c)):(this._y=0,this._z=Math.atan2(o,n));break;case"ZYX":this._y=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(o,n)):(this._x=0,this._z=Math.atan2(-l,c));break;case"YZX":this._z=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,n)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,n)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return js.makeRotationFromQuaternion(e),this.setFromRotationMatrix(js,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qs.setFromEuler(this),this.setFromQuaternion(qs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nh=0;const Ys=new w,ii=new Ci,er=new st,la=new w,Ni=new w,sh=new w,oh=new Ci,Ks=new w(1,0,0),Zs=new w(0,1,0),Js=new w(0,0,1),lh={type:"added"},ch={type:"removed"};class Mt extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new w,t=new Yi,r=new Ci,a=new w(1,1,1);function n(){r.setFromEuler(t,!1)}function l(){t.setFromQuaternion(r,void 0,!1)}t._onChange(n),r._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new st},normalMatrix:{value:new Be}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.multiply(ii),this}rotateOnWorldAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.premultiply(ii),this}rotateX(e){return this.rotateOnAxis(Ks,e)}rotateY(e){return this.rotateOnAxis(Zs,e)}rotateZ(e){return this.rotateOnAxis(Js,e)}translateOnAxis(e,t){return Ys.copy(e).applyQuaternion(this.quaternion),this.position.add(Ys.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ks,e)}translateY(e){return this.translateOnAxis(Zs,e)}translateZ(e){return this.translateOnAxis(Js,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?la.copy(e):la.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(Ni,la,this.up):er.lookAt(la,Ni,this.up),this.quaternion.setFromRotationMatrix(er),a&&(er.extractRotation(a.matrixWorld),ii.setFromRotationMatrix(er),this.quaternion.premultiply(ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ch)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const n=this.children[r].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let n=0,l=a.length;n<l;n++)a[n].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,sh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,oh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++){const n=t[r];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let n=0,l=a.length;n<l;n++){const s=a[n];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function n(s,o){return s[o.uuid]===void 0&&(s[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const o=s.shapes;if(Array.isArray(o))for(let c=0,h=o.length;c<h;c++){const f=o[c];n(e.shapes,f)}else n(e.shapes,o)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let o=0,c=this.material.length;o<c;o++)s.push(n(e.materials,this.material[o]));a.material=s}else a.material=n(e.materials,this.material);if(this.children.length>0){a.children=[];for(let s=0;s<this.children.length;s++)a.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let s=0;s<this.animations.length;s++){const o=this.animations[s];a.animations.push(n(e.animations,o))}}if(t){const s=l(e.geometries),o=l(e.materials),c=l(e.textures),h=l(e.images),f=l(e.shapes),d=l(e.skeletons),m=l(e.animations),_=l(e.nodes);s.length>0&&(r.geometries=s),o.length>0&&(r.materials=o),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),f.length>0&&(r.shapes=f),d.length>0&&(r.skeletons=d),m.length>0&&(r.animations=m),_.length>0&&(r.nodes=_)}return r.object=a,r;function l(s){const o=[];for(const c in s){const h=s[c];delete h.metadata,o.push(h)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Mt.DEFAULT_UP=new w(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ht=new w,tr=new w,Sn=new w,rr=new w,ai=new w,ni=new w,Qs=new w,Mn=new w,yn=new w,En=new w;class jt{constructor(e=new w,t=new w,r=new w){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),Ht.subVectors(e,t),a.cross(Ht);const n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(e,t,r,a,n){Ht.subVectors(a,t),tr.subVectors(r,t),Sn.subVectors(e,t);const l=Ht.dot(Ht),s=Ht.dot(tr),o=Ht.dot(Sn),c=tr.dot(tr),h=tr.dot(Sn),f=l*c-s*s;if(f===0)return n.set(0,0,0),null;const d=1/f,m=(c*o-s*h)*d,_=(l*h-s*o)*d;return n.set(1-m-_,_,m)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,r,a,n,l,s,o){return this.getBarycoord(e,t,r,a,rr)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(n,rr.x),o.addScaledVector(l,rr.y),o.addScaledVector(s,rr.z),o)}static isFrontFacing(e,t,r,a){return Ht.subVectors(r,t),tr.subVectors(e,t),Ht.cross(tr).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),Ht.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,n){return jt.getInterpolation(e,this.a,this.b,this.c,t,r,a,n)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,n=this.c;let l,s;ai.subVectors(a,r),ni.subVectors(n,r),Mn.subVectors(e,r);const o=ai.dot(Mn),c=ni.dot(Mn);if(o<=0&&c<=0)return t.copy(r);yn.subVectors(e,a);const h=ai.dot(yn),f=ni.dot(yn);if(h>=0&&f<=h)return t.copy(a);const d=o*f-h*c;if(d<=0&&o>=0&&h<=0)return l=o/(o-h),t.copy(r).addScaledVector(ai,l);En.subVectors(e,n);const m=ai.dot(En),_=ni.dot(En);if(_>=0&&m<=_)return t.copy(n);const x=m*c-o*_;if(x<=0&&c>=0&&_<=0)return s=c/(c-_),t.copy(r).addScaledVector(ni,s);const p=h*_-m*f;if(p<=0&&f-h>=0&&m-_>=0)return Qs.subVectors(n,a),s=(f-h)/(f-h+(m-_)),t.copy(a).addScaledVector(Qs,s);const u=1/(p+x+d);return l=x*u,s=d*u,t.copy(r).addScaledVector(ai,l).addScaledVector(ni,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},ca={h:0,s:0,l:0};function Tn(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=r,Qe.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=Qe.workingColorSpace){if(e=Kc(e,1),t=At(t,0,1),r=At(r,0,1),t===0)this.r=this.g=this.b=r;else{const n=r<=.5?r*(1+t):r+t-r*t,l=2*r-n;this.r=Tn(l,n,e+1/3),this.g=Tn(l,n,e),this.b=Tn(l,n,e-1/3)}return Qe.toWorkingColorSpace(this,a),this}setStyle(e,t=gt){function r(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const l=a[1],s=a[2];switch(l){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=a[1],l=n.length;if(l===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const r=yl[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=dn(e.r),this.g=dn(e.g),this.b=dn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return Qe.fromWorkingColorSpace(St.copy(this),e),Math.round(At(St.r*255,0,255))*65536+Math.round(At(St.g*255,0,255))*256+Math.round(At(St.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(St.copy(this),t);const r=St.r,a=St.g,n=St.b,l=Math.max(r,a,n),s=Math.min(r,a,n);let o,c;const h=(s+l)/2;if(s===l)o=0,c=0;else{const f=l-s;switch(c=h<=.5?f/(l+s):f/(2-l-s),l){case r:o=(a-n)/f+(a<n?6:0);break;case a:o=(n-r)/f+2;break;case n:o=(r-a)/f+4;break}o/=6}return e.h=o,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=gt){Qe.fromWorkingColorSpace(St.copy(this),e);const t=St.r,r=St.g,a=St.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(ca);const r=hn(_r.h,ca.h,t),a=hn(_r.s,ca.s,t),n=hn(_r.l,ca.l,t);return this.setHSL(r,a,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,n=e.elements;return this.r=n[0]*t+n[3]*r+n[6]*a,this.g=n[1]*t+n[4]*r+n[7]*a,this.b=n[2]*t+n[5]*r+n[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new We;We.NAMES=yl;let hh=0;class qr extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=yi,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bn,this.blendDst=Gn,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(r.blending=this.blending),this.side!==Ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Bn&&(r.blendSrc=this.blendSrc),this.blendDst!==Gn&&(r.blendDst=this.blendDst),this.blendEquation!==Fr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==za&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bs&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(n){const l=[];for(const s in n){const o=n[s];delete o.metadata,l.push(o)}return l}if(t){const n=a(e.textures),l=a(e.images);n.length>0&&(r.textures=n),l.length>0&&(r.images=l)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let n=0;n!==a;++n)r[n]=t[n].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class El extends qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new w,ha=new Ve;class ht{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Xn,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Xr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,n=this.itemSize;a<n;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Zt(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Je(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),r=Je(r,this.array),a=Je(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),r=Je(r,this.array),a=Je(a,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xn&&(e.usage=this.usage),e}}class Tl extends ht{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class bl extends ht{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class hr extends ht{constructor(e,t,r){super(new Float32Array(e),t,r)}}let uh=0;const Ot=new st,bn=new Mt,si=new w,Ut=new ji,Oi=new ji,ft=new w;class Lt extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_l(e)?bl:Tl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const n=new Be().getNormalMatrix(e);r.applyNormalMatrix(n),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,r){return Ot.makeTranslation(e,t,r),this.applyMatrix4(Ot),this}scale(e,t,r){return Ot.makeScale(e,t,r),this.applyMatrix4(Ot),this}lookAt(e){return bn.lookAt(e),bn.updateMatrix(),this.applyMatrix4(bn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(e){const t=[];for(let r=0,a=e.length;r<a;r++){const n=e[r];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new hr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const n=t[r];Ut.setFromBufferAttribute(n),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(e){const r=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let n=0,l=t.length;n<l;n++){const s=t[n];Oi.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(Ut.min,Oi.min),Ut.expandByPoint(ft),ft.addVectors(Ut.max,Oi.max),Ut.expandByPoint(ft)):(Ut.expandByPoint(Oi.min),Ut.expandByPoint(Oi.max))}Ut.getCenter(r);let a=0;for(let n=0,l=e.count;n<l;n++)ft.fromBufferAttribute(e,n),a=Math.max(a,r.distanceToSquared(ft));if(t)for(let n=0,l=t.length;n<l;n++){const s=t[n],o=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)ft.fromBufferAttribute(s,c),o&&(si.fromBufferAttribute(e,c),ft.add(si)),a=Math.max(a,r.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,a=t.position.array,n=t.normal.array,l=t.uv.array,s=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ht(new Float32Array(4*s),4));const o=this.getAttribute("tangent").array,c=[],h=[];for(let g=0;g<s;g++)c[g]=new w,h[g]=new w;const f=new w,d=new w,m=new w,_=new Ve,x=new Ve,p=new Ve,u=new w,T=new w;function M(g,b,G){f.fromArray(a,g*3),d.fromArray(a,b*3),m.fromArray(a,G*3),_.fromArray(l,g*2),x.fromArray(l,b*2),p.fromArray(l,G*2),d.sub(f),m.sub(f),x.sub(_),p.sub(_);const $=1/(x.x*p.y-p.x*x.y);isFinite($)&&(u.copy(d).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar($),T.copy(m).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar($),c[g].add(u),c[b].add(u),c[G].add(u),h[g].add(T),h[b].add(T),h[G].add(T))}let A=this.groups;A.length===0&&(A=[{start:0,count:r.length}]);for(let g=0,b=A.length;g<b;++g){const G=A[g],$=G.start,L=G.count;for(let B=$,V=$+L;B<V;B+=3)M(r[B+0],r[B+1],r[B+2])}const U=new w,C=new w,R=new w,F=new w;function W(g){R.fromArray(n,g*3),F.copy(R);const b=c[g];U.copy(b),U.sub(R.multiplyScalar(R.dot(b))).normalize(),C.crossVectors(F,b);const G=C.dot(h[g])<0?-1:1;o[g*4]=U.x,o[g*4+1]=U.y,o[g*4+2]=U.z,o[g*4+3]=G}for(let g=0,b=A.length;g<b;++g){const G=A[g],$=G.start,L=G.count;for(let B=$,V=$+L;B<V;B+=3)W(r[B+0]),W(r[B+1]),W(r[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let d=0,m=r.count;d<m;d++)r.setXYZ(d,0,0,0);const a=new w,n=new w,l=new w,s=new w,o=new w,c=new w,h=new w,f=new w;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);a.fromBufferAttribute(t,_),n.fromBufferAttribute(t,x),l.fromBufferAttribute(t,p),h.subVectors(l,n),f.subVectors(a,n),h.cross(f),s.fromBufferAttribute(r,_),o.fromBufferAttribute(r,x),c.fromBufferAttribute(r,p),s.add(h),o.add(h),c.add(h),r.setXYZ(_,s.x,s.y,s.z),r.setXYZ(x,o.x,o.y,o.z),r.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)a.fromBufferAttribute(t,d+0),n.fromBufferAttribute(t,d+1),l.fromBufferAttribute(t,d+2),h.subVectors(l,n),f.subVectors(a,n),h.cross(f),r.setXYZ(d+0,h.x,h.y,h.z),r.setXYZ(d+1,h.x,h.y,h.z),r.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(s,o){const c=s.array,h=s.itemSize,f=s.normalized,d=new c.constructor(o.length*h);let m=0,_=0;for(let x=0,p=o.length;x<p;x++){s.isInterleavedBufferAttribute?m=o[x]*s.data.stride+s.offset:m=o[x]*h;for(let u=0;u<h;u++)d[_++]=c[m++]}return new ht(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,r=this.index.array,a=this.attributes;for(const s in a){const o=a[s],c=e(o,r);t.setAttribute(s,c)}const n=this.morphAttributes;for(const s in n){const o=[],c=n[s];for(let h=0,f=c.length;h<f;h++){const d=c[h],m=e(d,r);o.push(m)}t.morphAttributes[s]=o}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let s=0,o=l.length;s<o;s++){const c=l[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(e[c]=o[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const o in r){const c=r[o];e.data.attributes[o]=c.toJSON(e.data)}const a={};let n=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],h=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(a[o]=h,n=!0)}n&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(t))}const n=e.morphAttributes;for(const c in n){const h=[],f=n[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let c=0,h=l.length;c<h;c++){const f=l[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $s=new st,Ur=new rs,ua=new qi,eo=new w,oi=new w,li=new w,ci=new w,wn=new w,da=new w,pa=new Ve,fa=new Ve,ma=new Ve,to=new w,ro=new w,io=new w,ga=new w,_a=new w;class or extends Mt{constructor(e=new Lt,t=new El){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=r.length;a<n;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,n=r.morphAttributes.position,l=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const s=this.morphTargetInfluences;if(n&&s){da.set(0,0,0);for(let o=0,c=n.length;o<c;o++){const h=s[o],f=n[o];h!==0&&(wn.fromBufferAttribute(f,e),l?da.addScaledVector(wn,h):da.addScaledVector(wn.sub(t),h))}t.add(da)}return t}raycast(e,t){const r=this.geometry,a=this.material,n=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ua.copy(r.boundingSphere),ua.applyMatrix4(n),Ur.copy(e.ray).recast(e.near),!(ua.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(ua,eo)===null||Ur.origin.distanceToSquared(eo)>(e.far-e.near)**2))&&($s.copy(n).invert(),Ur.copy(e.ray).applyMatrix4($s),!(r.boundingBox!==null&&Ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ur)))}_computeIntersections(e,t,r){let a;const n=this.geometry,l=this.material,s=n.index,o=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv1,f=n.attributes.normal,d=n.groups,m=n.drawRange;if(s!==null)if(Array.isArray(l))for(let _=0,x=d.length;_<x;_++){const p=d[_],u=l[p.materialIndex],T=Math.max(p.start,m.start),M=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let A=T,U=M;A<U;A+=3){const C=s.getX(A),R=s.getX(A+1),F=s.getX(A+2);a=va(this,u,e,r,c,h,f,C,R,F),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const _=Math.max(0,m.start),x=Math.min(s.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const T=s.getX(p),M=s.getX(p+1),A=s.getX(p+2);a=va(this,l,e,r,c,h,f,T,M,A),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(o!==void 0)if(Array.isArray(l))for(let _=0,x=d.length;_<x;_++){const p=d[_],u=l[p.materialIndex],T=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let A=T,U=M;A<U;A+=3){const C=A,R=A+1,F=A+2;a=va(this,u,e,r,c,h,f,C,R,F),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const T=p,M=p+1,A=p+2;a=va(this,l,e,r,c,h,f,T,M,A),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function dh(i,e,t,r,a,n,l,s){let o;if(e.side===Ct?o=r.intersectTriangle(l,n,a,!0,s):o=r.intersectTriangle(a,n,l,e.side===Ar,s),o===null)return null;_a.copy(s),_a.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(_a);return c<t.near||c>t.far?null:{distance:c,point:_a.clone(),object:i}}function va(i,e,t,r,a,n,l,s,o,c){i.getVertexPosition(s,oi),i.getVertexPosition(o,li),i.getVertexPosition(c,ci);const h=dh(i,e,t,r,oi,li,ci,ga);if(h){a&&(pa.fromBufferAttribute(a,s),fa.fromBufferAttribute(a,o),ma.fromBufferAttribute(a,c),h.uv=jt.getInterpolation(ga,oi,li,ci,pa,fa,ma,new Ve)),n&&(pa.fromBufferAttribute(n,s),fa.fromBufferAttribute(n,o),ma.fromBufferAttribute(n,c),h.uv1=jt.getInterpolation(ga,oi,li,ci,pa,fa,ma,new Ve),h.uv2=h.uv1),l&&(to.fromBufferAttribute(l,s),ro.fromBufferAttribute(l,o),io.fromBufferAttribute(l,c),h.normal=jt.getInterpolation(ga,oi,li,ci,to,ro,io,new w),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));const f={a:s,b:o,c,normal:new w,materialIndex:0};jt.getNormal(oi,li,ci,f.normal),h.face=f}return h}class Ki extends Lt{constructor(e=1,t=1,r=1,a=1,n=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:n,depthSegments:l};const s=this;a=Math.floor(a),n=Math.floor(n),l=Math.floor(l);const o=[],c=[],h=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,r,t,e,l,n,0),_("z","y","x",1,-1,r,t,-e,l,n,1),_("x","z","y",1,1,e,r,t,a,l,2),_("x","z","y",1,-1,e,r,-t,a,l,3),_("x","y","z",1,-1,e,t,r,a,n,4),_("x","y","z",-1,-1,e,t,-r,a,n,5),this.setIndex(o),this.setAttribute("position",new hr(c,3)),this.setAttribute("normal",new hr(h,3)),this.setAttribute("uv",new hr(f,2));function _(x,p,u,T,M,A,U,C,R,F,W){const g=A/R,b=U/F,G=A/2,$=U/2,L=C/2,B=R+1,V=F+1;let j=0,k=0;const X=new w;for(let ee=0;ee<V;ee++){const Z=ee*b-$;for(let he=0;he<B;he++){const pe=he*g-G;X[x]=pe*T,X[p]=Z*M,X[u]=L,c.push(X.x,X.y,X.z),X[x]=0,X[p]=0,X[u]=C>0?1:-1,h.push(X.x,X.y,X.z),f.push(he/R),f.push(1-ee/F),j+=1}}for(let ee=0;ee<F;ee++)for(let Z=0;Z<R;Z++){const he=d+Z+B*ee,pe=d+Z+B*(ee+1),H=d+(Z+1)+B*(ee+1),re=d+(Z+1)+B*ee;o.push(he,pe,re),o.push(pe,H,re),k+=6}s.addGroup(m,k,W),m+=k,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ai(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const a=i[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Et(i){const e={};for(let t=0;t<i.length;t++){const r=Ai(i[t]);for(const a in r)e[a]=r[a]}return e}function ph(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wl(i){return i.getRenderTarget()===null?i.outputColorSpace:Qe.workingColorSpace}const fh={clone:Ai,merge:Et};var mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rr extends qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mh,this.fragmentShader=gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=ph(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const n=this.uniforms[a].value;n&&n.isTexture?t.uniforms[a]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[a]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[a]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[a]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[a]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[a]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[a]={type:"m4",value:n.toArray()}:t.uniforms[a]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Al extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new w,ao=new Ve,no=new Ve;class kt extends Al{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qn*2*Math.atan(Math.tan(cn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,ao,no),t.subVectors(no,ao)}setViewOffset(e,t,r,a,n,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=n,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cn*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,n=-.5*a;const l=this.view;if(this.view!==null&&this.view.enabled){const o=l.fullWidth,c=l.fullHeight;n+=l.offsetX*a/o,t-=l.offsetY*r/c,a*=l.width/o,r*=l.height/c}const s=this.filmOffset;s!==0&&(n+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hi=-90,ui=1;class _h extends Mt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new kt(hi,ui,e,t);a.layers=this.layers,this.add(a);const n=new kt(hi,ui,e,t);n.layers=this.layers,this.add(n);const l=new kt(hi,ui,e,t);l.layers=this.layers,this.add(l);const s=new kt(hi,ui,e,t);s.layers=this.layers,this.add(s);const o=new kt(hi,ui,e,t);o.layers=this.layers,this.add(o);const c=new kt(hi,ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,n,l,s,o]=t;for(const c of t)this.remove(c);if(e===sr)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Va)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,l,s,o,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,n),e.setRenderTarget(r,1,a),e.render(t,l),e.setRenderTarget(r,2,a),e.render(t,s),e.setRenderTarget(r,3,a),e.render(t,o),e.setRenderTarget(r,4,a),e.render(t,c),r.texture.generateMipmaps=x,e.setRenderTarget(r,5,a),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class Rl extends Tt{constructor(e,t,r,a,n,l,s,o,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ti,super(e,t,r,a,n,l,s,o,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vh extends jr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];t.encoding!==void 0&&(Xr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Wr?gt:Bt),this.texture=new Rl(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Ki(5,5,5),n=new Rr({name:"CubemapFromEquirect",uniforms:Ai(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ct,blending:yr});n.uniforms.tEquirect.value=t;const l=new or(a,n),s=t.minFilter;return t.minFilter===Gr&&(t.minFilter=wt),new _h(1,10,this).update(e,l),t.minFilter=s,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,r,a){const n=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,r,a);e.setRenderTarget(n)}}const An=new w,xh=new w,Sh=new Be;class Or{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=An.subVectors(r,t).cross(xh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(An),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/a;return n<0||n>1?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Sh.getNormalMatrix(e),a=this.coplanarPoint(An).applyMatrix4(e),n=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new qi,xa=new w;class Cl{constructor(e=new Or,t=new Or,r=new Or,a=new Or,n=new Or,l=new Or){this.planes=[e,t,r,a,n,l]}set(e,t,r,a,n,l){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(a),s[4].copy(n),s[5].copy(l),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=sr){const r=this.planes,a=e.elements,n=a[0],l=a[1],s=a[2],o=a[3],c=a[4],h=a[5],f=a[6],d=a[7],m=a[8],_=a[9],x=a[10],p=a[11],u=a[12],T=a[13],M=a[14],A=a[15];if(r[0].setComponents(o-n,d-c,p-m,A-u).normalize(),r[1].setComponents(o+n,d+c,p+m,A+u).normalize(),r[2].setComponents(o+l,d+h,p+_,A+T).normalize(),r[3].setComponents(o-l,d-h,p-_,A-T).normalize(),r[4].setComponents(o-s,d-f,p-x,A-M).normalize(),t===sr)r[5].setComponents(o+s,d+f,p+x,A+M).normalize();else if(t===Va)r[5].setComponents(s,f,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(xa.x=a.normal.x>0?e.max.x:e.min.x,xa.y=a.normal.y>0?e.max.y:e.min.y,xa.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ll(){let i=null,e=!1,t=null,r=null;function a(n,l){t(n,l),r=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){i=n}}}function Mh(i,e){const t=e.isWebGL2,r=new WeakMap;function a(c,h){const f=c.array,d=c.usage,m=f.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,f,d),c.onUploadCallback();let x;if(f instanceof Float32Array)x=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=i.SHORT;else if(f instanceof Uint32Array)x=i.UNSIGNED_INT;else if(f instanceof Int32Array)x=i.INT;else if(f instanceof Int8Array)x=i.BYTE;else if(f instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,h,f){const d=h.array,m=h._updateRange,_=h.updateRanges;if(i.bindBuffer(f,c),m.count===-1&&_.length===0&&i.bufferSubData(f,0,d),_.length!==0){for(let x=0,p=_.length;x<p;x++){const u=_[x];t?i.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):i.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function l(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=r.get(c);h&&(i.deleteBuffer(h.buffer),r.delete(c))}function o(c,h){if(c.isGLBufferAttribute){const d=r.get(c);(!d||d.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=r.get(c);if(f===void 0)r.set(c,a(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,c,h),f.version=c.version}}return{get:l,remove:s,update:o}}class Ka extends Lt{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const n=e/2,l=t/2,s=Math.floor(r),o=Math.floor(a),c=s+1,h=o+1,f=e/s,d=t/o,m=[],_=[],x=[],p=[];for(let u=0;u<h;u++){const T=u*d-l;for(let M=0;M<c;M++){const A=M*f-n;_.push(A,-T,0),x.push(0,0,1),p.push(M/s),p.push(1-u/o)}}for(let u=0;u<o;u++)for(let T=0;T<s;T++){const M=T+c*u,A=T+c*(u+1),U=T+1+c*(u+1),C=T+1+c*u;m.push(M,A,C),m.push(A,U,C)}this.setIndex(m),this.setAttribute("position",new hr(_,3)),this.setAttribute("normal",new hr(x,3)),this.setAttribute("uv",new hr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var yh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Th=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ah=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ch=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ph=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Dh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ih=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Oh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,eu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ru=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,au=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_u=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Su=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ru=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Du=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ou=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Fu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Bu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ju=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ju=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$u=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ed=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,td=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,id=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ad=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ld=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ud=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,md=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Md=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Td=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ad=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ld=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ud=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Id=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Od=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$d=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:yh,alphahash_pars_fragment:Eh,alphamap_fragment:Th,alphamap_pars_fragment:bh,alphatest_fragment:wh,alphatest_pars_fragment:Ah,aomap_fragment:Rh,aomap_pars_fragment:Ch,batching_pars_vertex:Lh,batching_vertex:Ph,begin_vertex:Dh,beginnormal_vertex:Uh,bsdfs:Ih,iridescence_fragment:Nh,bumpmap_pars_fragment:Oh,clipping_planes_fragment:zh,clipping_planes_pars_fragment:Fh,clipping_planes_pars_vertex:Bh,clipping_planes_vertex:Gh,color_fragment:Vh,color_pars_fragment:Hh,color_pars_vertex:kh,color_vertex:Wh,common:Xh,cube_uv_reflection_fragment:jh,defaultnormal_vertex:qh,displacementmap_pars_vertex:Yh,displacementmap_vertex:Kh,emissivemap_fragment:Zh,emissivemap_pars_fragment:Jh,colorspace_fragment:Qh,colorspace_pars_fragment:$h,envmap_fragment:eu,envmap_common_pars_fragment:tu,envmap_pars_fragment:ru,envmap_pars_vertex:iu,envmap_physical_pars_fragment:mu,envmap_vertex:au,fog_vertex:nu,fog_pars_vertex:su,fog_fragment:ou,fog_pars_fragment:lu,gradientmap_pars_fragment:cu,lightmap_fragment:hu,lightmap_pars_fragment:uu,lights_lambert_fragment:du,lights_lambert_pars_fragment:pu,lights_pars_begin:fu,lights_toon_fragment:gu,lights_toon_pars_fragment:_u,lights_phong_fragment:vu,lights_phong_pars_fragment:xu,lights_physical_fragment:Su,lights_physical_pars_fragment:Mu,lights_fragment_begin:yu,lights_fragment_maps:Eu,lights_fragment_end:Tu,logdepthbuf_fragment:bu,logdepthbuf_pars_fragment:wu,logdepthbuf_pars_vertex:Au,logdepthbuf_vertex:Ru,map_fragment:Cu,map_pars_fragment:Lu,map_particle_fragment:Pu,map_particle_pars_fragment:Du,metalnessmap_fragment:Uu,metalnessmap_pars_fragment:Iu,morphcolor_vertex:Nu,morphnormal_vertex:Ou,morphtarget_pars_vertex:zu,morphtarget_vertex:Fu,normal_fragment_begin:Bu,normal_fragment_maps:Gu,normal_pars_fragment:Vu,normal_pars_vertex:Hu,normal_vertex:ku,normalmap_pars_fragment:Wu,clearcoat_normal_fragment_begin:Xu,clearcoat_normal_fragment_maps:ju,clearcoat_pars_fragment:qu,iridescence_pars_fragment:Yu,opaque_fragment:Ku,packing:Zu,premultiplied_alpha_fragment:Ju,project_vertex:Qu,dithering_fragment:$u,dithering_pars_fragment:ed,roughnessmap_fragment:td,roughnessmap_pars_fragment:rd,shadowmap_pars_fragment:id,shadowmap_pars_vertex:ad,shadowmap_vertex:nd,shadowmask_pars_fragment:sd,skinbase_vertex:od,skinning_pars_vertex:ld,skinning_vertex:cd,skinnormal_vertex:hd,specularmap_fragment:ud,specularmap_pars_fragment:dd,tonemapping_fragment:pd,tonemapping_pars_fragment:fd,transmission_fragment:md,transmission_pars_fragment:gd,uv_pars_fragment:_d,uv_pars_vertex:vd,uv_vertex:xd,worldpos_vertex:Sd,background_vert:Md,background_frag:yd,backgroundCube_vert:Ed,backgroundCube_frag:Td,cube_vert:bd,cube_frag:wd,depth_vert:Ad,depth_frag:Rd,distanceRGBA_vert:Cd,distanceRGBA_frag:Ld,equirect_vert:Pd,equirect_frag:Dd,linedashed_vert:Ud,linedashed_frag:Id,meshbasic_vert:Nd,meshbasic_frag:Od,meshlambert_vert:zd,meshlambert_frag:Fd,meshmatcap_vert:Bd,meshmatcap_frag:Gd,meshnormal_vert:Vd,meshnormal_frag:Hd,meshphong_vert:kd,meshphong_frag:Wd,meshphysical_vert:Xd,meshphysical_frag:jd,meshtoon_vert:qd,meshtoon_frag:Yd,points_vert:Kd,points_frag:Zd,shadow_vert:Jd,shadow_frag:Qd,sprite_vert:$d,sprite_frag:ep},ae={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Kt={basic:{uniforms:Et([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Et([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new We(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Et([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Et([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Et([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new We(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Et([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Et([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Et([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Et([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Et([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Et([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Et([ae.common,ae.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Et([ae.lights,ae.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Kt.physical={uniforms:Et([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Sa={r:0,b:0,g:0};function tp(i,e,t,r,a,n,l){const s=new We(0);let o=n===!0?0:1,c,h,f=null,d=0,m=null;function _(p,u){let T=!1,M=u.isScene===!0?u.background:null;M&&M.isTexture&&(M=(u.backgroundBlurriness>0?t:e).get(M)),M===null?x(s,o):M&&M.isColor&&(x(M,1),T=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?r.buffers.color.setClear(0,0,0,1,l):A==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,l),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===qa)?(h===void 0&&(h=new or(new Ki(1,1,1),new Rr({name:"BackgroundCubeMaterial",uniforms:Ai(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Qe.getTransfer(M.colorSpace)!==et,(f!==M||d!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=M,d=M.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new or(new Ka(2,2),new Rr({name:"BackgroundMaterial",uniforms:Ai(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(M.colorSpace)!==et,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,u){p.getRGB(Sa,wl(i)),r.buffers.color.setClear(Sa.r,Sa.g,Sa.b,u,l)}return{getClearColor:function(){return s},setClearColor:function(p,u=1){s.set(p),o=u,x(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,x(s,o)},render:_}}function rp(i,e,t,r){const a=i.getParameter(i.MAX_VERTEX_ATTRIBS),n=r.isWebGL2?null:e.get("OES_vertex_array_object"),l=r.isWebGL2||n!==null,s={},o=p(null);let c=o,h=!1;function f(L,B,V,j,k){let X=!1;if(l){const ee=x(j,V,B);c!==ee&&(c=ee,m(c.object)),X=u(L,j,V,k),X&&T(L,j,V,k)}else{const ee=B.wireframe===!0;(c.geometry!==j.id||c.program!==V.id||c.wireframe!==ee)&&(c.geometry=j.id,c.program=V.id,c.wireframe=ee,X=!0)}k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,F(L,B,V,j),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function d(){return r.isWebGL2?i.createVertexArray():n.createVertexArrayOES()}function m(L){return r.isWebGL2?i.bindVertexArray(L):n.bindVertexArrayOES(L)}function _(L){return r.isWebGL2?i.deleteVertexArray(L):n.deleteVertexArrayOES(L)}function x(L,B,V){const j=V.wireframe===!0;let k=s[L.id];k===void 0&&(k={},s[L.id]=k);let X=k[B.id];X===void 0&&(X={},k[B.id]=X);let ee=X[j];return ee===void 0&&(ee=p(d()),X[j]=ee),ee}function p(L){const B=[],V=[],j=[];for(let k=0;k<a;k++)B[k]=0,V[k]=0,j[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:j,object:L,attributes:{},index:null}}function u(L,B,V,j){const k=c.attributes,X=B.attributes;let ee=0;const Z=V.getAttributes();for(const he in Z)if(Z[he].location>=0){const pe=k[he];let H=X[he];if(H===void 0&&(he==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),he==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),pe===void 0||pe.attribute!==H||H&&pe.data!==H.data)return!0;ee++}return c.attributesNum!==ee||c.index!==j}function T(L,B,V,j){const k={},X=B.attributes;let ee=0;const Z=V.getAttributes();for(const he in Z)if(Z[he].location>=0){let pe=X[he];pe===void 0&&(he==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),he==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor));const H={};H.attribute=pe,pe&&pe.data&&(H.data=pe.data),k[he]=H,ee++}c.attributes=k,c.attributesNum=ee,c.index=j}function M(){const L=c.newAttributes;for(let B=0,V=L.length;B<V;B++)L[B]=0}function A(L){U(L,0)}function U(L,B){const V=c.newAttributes,j=c.enabledAttributes,k=c.attributeDivisors;V[L]=1,j[L]===0&&(i.enableVertexAttribArray(L),j[L]=1),k[L]!==B&&((r.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),k[L]=B)}function C(){const L=c.newAttributes,B=c.enabledAttributes;for(let V=0,j=B.length;V<j;V++)B[V]!==L[V]&&(i.disableVertexAttribArray(V),B[V]=0)}function R(L,B,V,j,k,X,ee){ee===!0?i.vertexAttribIPointer(L,B,V,k,X):i.vertexAttribPointer(L,B,V,j,k,X)}function F(L,B,V,j){if(r.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const k=j.attributes,X=V.getAttributes(),ee=B.defaultAttributeValues;for(const Z in X){const he=X[Z];if(he.location>=0){let pe=k[Z];if(pe===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor)),pe!==void 0){const H=pe.normalized,re=pe.itemSize,oe=t.get(pe);if(oe===void 0)continue;const Se=oe.buffer,me=oe.type,ue=oe.bytesPerElement,Ge=r.isWebGL2===!0&&(me===i.INT||me===i.UNSIGNED_INT||pe.gpuType===ll);if(pe.isInterleavedBufferAttribute){const Ce=pe.data,D=Ce.stride,at=pe.offset;if(Ce.isInstancedInterleavedBuffer){for(let ve=0;ve<he.locationSize;ve++)U(he.location+ve,Ce.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let ve=0;ve<he.locationSize;ve++)A(he.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let ve=0;ve<he.locationSize;ve++)R(he.location+ve,re/he.locationSize,me,H,D*ue,(at+re/he.locationSize*ve)*ue,Ge)}else{if(pe.isInstancedBufferAttribute){for(let Ce=0;Ce<he.locationSize;Ce++)U(he.location+Ce,pe.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ce=0;Ce<he.locationSize;Ce++)A(he.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Ce=0;Ce<he.locationSize;Ce++)R(he.location+Ce,re/he.locationSize,me,H,re*ue,re/he.locationSize*Ce*ue,Ge)}}else if(ee!==void 0){const H=ee[Z];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(he.location,H);break;case 3:i.vertexAttrib3fv(he.location,H);break;case 4:i.vertexAttrib4fv(he.location,H);break;default:i.vertexAttrib1fv(he.location,H)}}}}C()}function W(){G();for(const L in s){const B=s[L];for(const V in B){const j=B[V];for(const k in j)_(j[k].object),delete j[k];delete B[V]}delete s[L]}}function g(L){if(s[L.id]===void 0)return;const B=s[L.id];for(const V in B){const j=B[V];for(const k in j)_(j[k].object),delete j[k];delete B[V]}delete s[L.id]}function b(L){for(const B in s){const V=s[B];if(V[L.id]===void 0)continue;const j=V[L.id];for(const k in j)_(j[k].object),delete j[k];delete V[L.id]}}function G(){$(),h=!0,c!==o&&(c=o,m(c.object))}function $(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:G,resetDefaultState:$,dispose:W,releaseStatesOfGeometry:g,releaseStatesOfProgram:b,initAttributes:M,enableAttribute:A,disableUnusedAttributes:C}}function ip(i,e,t,r){const a=r.isWebGL2;let n;function l(h){n=h}function s(h,f){i.drawArrays(n,h,f),t.update(f,n,1)}function o(h,f,d){if(d===0)return;let m,_;if(a)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](n,h,f,d),t.update(f,n,d)}function c(h,f,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(h[_],f[_]);else{m.multiDrawArraysWEBGL(n,h,0,f,0,d);let _=0;for(let x=0;x<d;x++)_+=f[x];t.update(_,n,1)}}this.setMode=l,this.render=s,this.renderInstances=o,this.renderMultiDraw=c}function ap(i,e,t){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function n(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const o=n(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);const c=l||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,A=l||e.has("OES_texture_float"),U=M&&A,C=l?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:c,getMaxAnisotropy:a,getMaxPrecision:n,precision:s,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:T,vertexTextures:M,floatFragmentTextures:A,floatVertexTextures:U,maxSamples:C}}function np(i){const e=this;let t=null,r=0,a=!1,n=!1;const l=new Or,s=new Be,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||r!==0||a;return a=d,r=f.length,m},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!a||_===null||_.length===0||n&&!p)n?h(null):c();else{const T=n?0:r,M=T*4;let A=u.clippingState||null;o.value=A,A=h(_,d,M,m);for(let U=0;U!==M;++U)A[U]=t[U];u.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){o.value!==t&&(o.value=t,o.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(f,d,m,_){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=o.value,_!==!0||p===null){const u=m+x*4,T=d.matrixWorldInverse;s.getNormalMatrix(T),(p===null||p.length<u)&&(p=new Float32Array(u));for(let M=0,A=m;M!==x;++M,A+=4)l.copy(f[M]).applyMatrix4(T,s),l.normal.toArray(p,A),p[A+3]=l.constant}o.value=p,o.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function sp(i){let e=new WeakMap;function t(l,s){return s===Vn?l.mapping=Ti:s===Hn&&(l.mapping=bi),l}function r(l){if(l&&l.isTexture){const s=l.mapping;if(s===Vn||s===Hn)if(e.has(l)){const o=e.get(l).texture;return t(o,l.mapping)}else{const o=l.image;if(o&&o.height>0){const c=new vh(o.height);return c.fromEquirectangularTexture(i,l),e.set(l,c),l.addEventListener("dispose",a),t(c.texture,l.mapping)}else return null}}return l}function a(l){const s=l.target;s.removeEventListener("dispose",a);const o=e.get(s);o!==void 0&&(e.delete(s),o.dispose())}function n(){e=new WeakMap}return{get:r,dispose:n}}class Pl extends Al{constructor(e=-1,t=1,r=1,a=-1,n=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=n,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,n,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=n,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let n=r-e,l=r+e,s=a+t,o=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,l=n+c*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(n,l,s,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xi=4,so=[.125,.215,.35,.446,.526,.582],Br=20,Rn=new Pl,oo=new We;let Cn=null,Ln=0,Pn=0;const zr=(1+Math.sqrt(5))/2,di=1/zr,lo=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,zr,di),new w(0,zr,-di),new w(di,0,zr),new w(-di,0,zr),new w(zr,di,0),new w(-zr,di,0)];class co{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){Cn=this._renderer.getRenderTarget(),Ln=this._renderer.getActiveCubeFace(),Pn=this._renderer.getActiveMipmapLevel(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,r,a,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=po(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cn,Ln,Pn),e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cn=this._renderer.getRenderTarget(),Ln=this._renderer.getActiveCubeFace(),Pn=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:ki,format:Xt,colorSpace:ur,depthBuffer:!1},a=ho(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ho(e,t,r);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=op(n)),this._blurMaterial=lp(n,e,t)}return a}_compileMaterial(e){const t=new or(this._lodPlanes[0],e);this._renderer.compile(t,Rn)}_sceneToCubeUV(e,t,r,a){const n=new kt(90,1,t,r),l=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],o=this._renderer,c=o.autoClear,h=o.toneMapping;o.getClearColor(oo),o.toneMapping=Tr,o.autoClear=!1;const f=new El({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),d=new or(new Ki,f);let m=!1;const _=e.background;_?_.isColor&&(f.color.copy(_),e.background=null,m=!0):(f.color.copy(oo),m=!0);for(let x=0;x<6;x++){const p=x%3;p===0?(n.up.set(0,l[x],0),n.lookAt(s[x],0,0)):p===1?(n.up.set(0,0,l[x]),n.lookAt(0,s[x],0)):(n.up.set(0,l[x],0),n.lookAt(0,0,s[x]));const u=this._cubeSize;Ma(a,p*u,x>2?u:0,u,u),o.setRenderTarget(a),m&&o.render(d,n),o.render(e,n)}d.geometry.dispose(),d.material.dispose(),o.toneMapping=h,o.autoClear=c,e.background=_}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Ti||e.mapping===bi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=po()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uo());const n=a?this._cubemapMaterial:this._equirectMaterial,l=new or(this._lodPlanes[0],n),s=n.uniforms;s.envMap.value=e;const o=this._cubeSize;Ma(t,0,0,3*o,2*o),r.setRenderTarget(t),r.render(l,Rn)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const n=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),l=lo[(a-1)%lo.length];this._blur(e,a-1,a,n,l)}t.autoClear=r}_blur(e,t,r,a,n){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,r,a,"latitudinal",n),this._halfBlur(l,e,r,r,a,"longitudinal",n)}_halfBlur(e,t,r,a,n,l,s){const o=this._renderer,c=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new or(this._lodPlanes[a],c),d=c.uniforms,m=this._sizeLods[r]-1,_=isFinite(n)?Math.PI/(2*m):2*Math.PI/(2*Br-1),x=n/_,p=isFinite(n)?1+Math.floor(h*x):Br;p>Br&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Br}`);const u=[];let T=0;for(let R=0;R<Br;++R){const F=R/x,W=Math.exp(-F*F/2);u.push(W),R===0?T+=W:R<p&&(T+=2*W)}for(let R=0;R<u.length;R++)u[R]=u[R]/T;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=l==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-r;const A=this._sizeLods[a],U=3*A*(a>M-xi?a-M+xi:0),C=4*(this._cubeSize-A);Ma(t,U,C,3*A,2*A),o.setRenderTarget(t),o.render(f,Rn)}}function op(i){const e=[],t=[],r=[];let a=i;const n=i-xi+1+so.length;for(let l=0;l<n;l++){const s=Math.pow(2,a);t.push(s);let o=1/s;l>i-xi?o=so[l-i+xi-1]:l===0&&(o=0),r.push(o);const c=1/(s-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,_=6,x=3,p=2,u=1,T=new Float32Array(x*_*m),M=new Float32Array(p*_*m),A=new Float32Array(u*_*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,F=C>2?0:-1,W=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];T.set(W,x*_*C),M.set(d,p*_*C);const g=[C,C,C,C,C,C];A.set(g,u*_*C)}const U=new Lt;U.setAttribute("position",new ht(T,x)),U.setAttribute("uv",new ht(M,p)),U.setAttribute("faceIndex",new ht(A,u)),e.push(U),a>xi&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function ho(i,e,t){const r=new jr(i,e,t);return r.texture.mapping=qa,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ma(i,e,t,r,a){i.viewport.set(e,t,r,a),i.scissor.set(e,t,r,a)}function lp(i,e,t){const r=new Float32Array(Br),a=new w(0,1,0);return new Rr({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function uo(){return new Rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function po(){return new Rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function is(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cp(i){let e=new WeakMap,t=null;function r(s){if(s&&s.isTexture){const o=s.mapping,c=o===Vn||o===Hn,h=o===Ti||o===bi;if(c||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new co(i)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||h&&f&&a(f)){t===null&&(t=new co(i));const d=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",n),d.texture}else return null}}}return s}function a(s){let o=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&o++;return o===c}function n(s){const o=s.target;o.removeEventListener("dispose",n);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:l}}function hp(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const a=t(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function up(i,e,t,r){const a={},n=new WeakMap;function l(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}d.removeEventListener("dispose",l),delete a[d.id];const m=n.get(d);m&&(e.remove(m),n.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(f,d){return a[d.id]===!0||(d.addEventListener("dispose",l),a[d.id]=!0,t.memory.geometries++),d}function o(f){const d=f.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,u=x.length;p<u;p++)e.update(x[p],i.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,_=f.attributes.position;let x=0;if(m!==null){const T=m.array;x=m.version;for(let M=0,A=T.length;M<A;M+=3){const U=T[M+0],C=T[M+1],R=T[M+2];d.push(U,C,C,R,R,U)}}else if(_!==void 0){const T=_.array;x=_.version;for(let M=0,A=T.length/3-1;M<A;M+=3){const U=M+0,C=M+1,R=M+2;d.push(U,C,C,R,R,U)}}else return;const p=new(_l(d)?bl:Tl)(d,1);p.version=x;const u=n.get(f);u&&e.remove(u),n.set(f,p)}function h(f){const d=n.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return n.get(f)}return{get:s,update:o,getWireframeAttribute:h}}function dp(i,e,t,r){const a=r.isWebGL2;let n;function l(m){n=m}let s,o;function c(m){s=m.type,o=m.bytesPerElement}function h(m,_){i.drawElements(n,_,s,m*o),t.update(_,n,1)}function f(m,_,x){if(x===0)return;let p,u;if(a)p=i,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](n,_,s,m*o,x),t.update(_,n,x)}function d(m,_,x){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<x;u++)this.render(m[u]/o,_[u]);else{p.multiDrawElementsWEBGL(n,_,0,s,m,0,x);let u=0;for(let T=0;T<x;T++)u+=_[T];t.update(u,n,1)}}this.setMode=l,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function pp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,l,s){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=s*(n/3);break;case i.LINES:t.lines+=s*(n/2);break;case i.LINE_STRIP:t.lines+=s*(n-1);break;case i.LINE_LOOP:t.lines+=s*n;break;case i.POINTS:t.points+=s*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function fp(i,e){return i[0]-e[0]}function mp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function gp(i,e,t){const r={},a=new Float32Array(8),n=new WeakMap,l=new _t,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function o(c,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0;let x=n.get(h);if(x===void 0||x.count!==_){let T=function(){$.dispose(),n.delete(h),h.removeEventListener("dispose",T)};x!==void 0&&x.texture.dispose();const M=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,U=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let W=0;M===!0&&(W=1),A===!0&&(W=2),U===!0&&(W=3);let g=h.attributes.position.count*W,b=1;g>e.maxTextureSize&&(b=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);const G=new Float32Array(g*b*4*_),$=new Sl(G,g,b,_);$.type=nr,$.needsUpdate=!0;const L=W*4;for(let B=0;B<_;B++){const V=C[B],j=R[B],k=F[B],X=g*b*4*B;for(let ee=0;ee<V.count;ee++){const Z=ee*L;M===!0&&(l.fromBufferAttribute(V,ee),G[X+Z+0]=l.x,G[X+Z+1]=l.y,G[X+Z+2]=l.z,G[X+Z+3]=0),A===!0&&(l.fromBufferAttribute(j,ee),G[X+Z+4]=l.x,G[X+Z+5]=l.y,G[X+Z+6]=l.z,G[X+Z+7]=0),U===!0&&(l.fromBufferAttribute(k,ee),G[X+Z+8]=l.x,G[X+Z+9]=l.y,G[X+Z+10]=l.z,G[X+Z+11]=k.itemSize===4?l.w:1)}}x={count:_,texture:$,size:new Ve(g,b)},n.set(h,x),h.addEventListener("dispose",T)}let p=0;for(let T=0;T<d.length;T++)p+=d[T];const u=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",u),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const m=d===void 0?0:d.length;let _=r[h.id];if(_===void 0||_.length!==m){_=[];for(let M=0;M<m;M++)_[M]=[M,0];r[h.id]=_}for(let M=0;M<m;M++){const A=_[M];A[0]=M,A[1]=d[M]}_.sort(mp);for(let M=0;M<8;M++)M<m&&_[M][1]?(s[M][0]=_[M][0],s[M][1]=_[M][1]):(s[M][0]=Number.MAX_SAFE_INTEGER,s[M][1]=0);s.sort(fp);const x=h.morphAttributes.position,p=h.morphAttributes.normal;let u=0;for(let M=0;M<8;M++){const A=s[M],U=A[0],C=A[1];U!==Number.MAX_SAFE_INTEGER&&C?(x&&h.getAttribute("morphTarget"+M)!==x[U]&&h.setAttribute("morphTarget"+M,x[U]),p&&h.getAttribute("morphNormal"+M)!==p[U]&&h.setAttribute("morphNormal"+M,p[U]),a[M]=C,u+=C):(x&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),p&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),a[M]=0)}const T=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(i,"morphTargetBaseInfluence",T),f.getUniforms().setValue(i,"morphTargetInfluences",a)}}return{update:o}}function _p(i,e,t,r){let a=new WeakMap;function n(o){const c=r.render.frame,h=o.geometry,f=e.get(o,h);if(a.get(f)!==c&&(e.update(f),a.set(f,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",s)===!1&&o.addEventListener("dispose",s),a.get(o)!==c&&(t.update(o.instanceMatrix,i.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,i.ARRAY_BUFFER),a.set(o,c))),o.isSkinnedMesh){const d=o.skeleton;a.get(d)!==c&&(d.update(),a.set(d,c))}return f}function l(){a=new WeakMap}function s(o){const c=o.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:l}}class Dl extends Tt{constructor(e,t,r,a,n,l,s,o,c,h){if(h=h!==void 0?h:kr,h!==kr&&h!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===kr&&(r=Mr),r===void 0&&h===wi&&(r=Hr),super(null,a,n,l,s,o,h,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:ct,this.minFilter=o!==void 0?o:ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ul=new Tt,Il=new Dl(1,1);Il.compareFunction=gl;const Nl=new Sl,Ol=new th,zl=new Rl,fo=[],mo=[],go=new Float32Array(16),_o=new Float32Array(9),vo=new Float32Array(4);function Li(i,e,t){const r=i[0];if(r<=0||r>0)return i;const a=e*t;let n=fo[a];if(n===void 0&&(n=new Float32Array(a),fo[a]=n),e!==0){r.toArray(n,0);for(let l=1,s=0;l!==e;++l)s+=t,i[l].toArray(n,s)}return n}function ut(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Za(i,e){let t=mo[e];t===void 0&&(t=new Int32Array(e),mo[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function vp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function Mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function yp(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,r))return;vo.set(r),i.uniformMatrix2fv(this.addr,!1,vo),dt(t,r)}}function Ep(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,r))return;_o.set(r),i.uniformMatrix3fv(this.addr,!1,_o),dt(t,r)}}function Tp(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,r))return;go.set(r),i.uniformMatrix4fv(this.addr,!1,go),dt(t,r)}}function bp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function Ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function Rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function Cp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function Pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function Dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function Up(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a);const n=this.type===i.SAMPLER_2D_SHADOW?Il:Ul;t.setTexture2D(e||n,a)}function Ip(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Ol,a)}function Np(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||zl,a)}function Op(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Nl,a)}function zp(i){switch(i){case 5126:return vp;case 35664:return xp;case 35665:return Sp;case 35666:return Mp;case 35674:return yp;case 35675:return Ep;case 35676:return Tp;case 5124:case 35670:return bp;case 35667:case 35671:return wp;case 35668:case 35672:return Ap;case 35669:case 35673:return Rp;case 5125:return Cp;case 36294:return Lp;case 36295:return Pp;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Up;case 35679:case 36299:case 36307:return Ip;case 35680:case 36300:case 36308:case 36293:return Np;case 36289:case 36303:case 36311:case 36292:return Op}}function Fp(i,e){i.uniform1fv(this.addr,e)}function Bp(i,e){const t=Li(e,this.size,2);i.uniform2fv(this.addr,t)}function Gp(i,e){const t=Li(e,this.size,3);i.uniform3fv(this.addr,t)}function Vp(i,e){const t=Li(e,this.size,4);i.uniform4fv(this.addr,t)}function Hp(i,e){const t=Li(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function kp(i,e){const t=Li(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Wp(i,e){const t=Li(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Xp(i,e){i.uniform1iv(this.addr,e)}function jp(i,e){i.uniform2iv(this.addr,e)}function qp(i,e){i.uniform3iv(this.addr,e)}function Yp(i,e){i.uniform4iv(this.addr,e)}function Kp(i,e){i.uniform1uiv(this.addr,e)}function Zp(i,e){i.uniform2uiv(this.addr,e)}function Jp(i,e){i.uniform3uiv(this.addr,e)}function Qp(i,e){i.uniform4uiv(this.addr,e)}function $p(i,e,t){const r=this.cache,a=e.length,n=Za(t,a);ut(r,n)||(i.uniform1iv(this.addr,n),dt(r,n));for(let l=0;l!==a;++l)t.setTexture2D(e[l]||Ul,n[l])}function ef(i,e,t){const r=this.cache,a=e.length,n=Za(t,a);ut(r,n)||(i.uniform1iv(this.addr,n),dt(r,n));for(let l=0;l!==a;++l)t.setTexture3D(e[l]||Ol,n[l])}function tf(i,e,t){const r=this.cache,a=e.length,n=Za(t,a);ut(r,n)||(i.uniform1iv(this.addr,n),dt(r,n));for(let l=0;l!==a;++l)t.setTextureCube(e[l]||zl,n[l])}function rf(i,e,t){const r=this.cache,a=e.length,n=Za(t,a);ut(r,n)||(i.uniform1iv(this.addr,n),dt(r,n));for(let l=0;l!==a;++l)t.setTexture2DArray(e[l]||Nl,n[l])}function af(i){switch(i){case 5126:return Fp;case 35664:return Bp;case 35665:return Gp;case 35666:return Vp;case 35674:return Hp;case 35675:return kp;case 35676:return Wp;case 5124:case 35670:return Xp;case 35667:case 35671:return jp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return Kp;case 36294:return Zp;case 36295:return Jp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return ef;case 35680:case 36300:case 36308:case 36293:return tf;case 36289:case 36303:case 36311:case 36292:return rf}}class nf{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=zp(t.type)}}class sf{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=af(t.type)}}class of{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let n=0,l=a.length;n!==l;++n){const s=a[n];s.setValue(e,t[s.id],r)}}}const Dn=/(\w+)(\])?(\[|\.)?/g;function xo(i,e){i.seq.push(e),i.map[e.id]=e}function lf(i,e,t){const r=i.name,a=r.length;for(Dn.lastIndex=0;;){const n=Dn.exec(r),l=Dn.lastIndex;let s=n[1];const o=n[2]==="]",c=n[3];if(o&&(s=s|0),c===void 0||c==="["&&l+2===a){xo(t,c===void 0?new nf(s,i,e):new sf(s,i,e));break}else{let h=t.map[s];h===void 0&&(h=new of(s),xo(t,h)),t=h}}}class Ua{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const n=e.getActiveUniform(t,a),l=e.getUniformLocation(t,n.name);lf(n,l,this)}}setValue(e,t,r,a){const n=this.map[t];n!==void 0&&n.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let n=0,l=t.length;n!==l;++n){const s=t[n],o=r[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,n=e.length;a!==n;++a){const l=e[a];l.id in t&&r.push(l)}return r}}function So(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const cf=37297;let hf=0;function uf(i,e){const t=i.split(`
`),r=[],a=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let l=a;l<n;l++){const s=l+1;r.push(`${s===e?">":" "} ${s}: ${t[l]}`)}return r.join(`
`)}function df(i){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(i);let r;switch(e===t?r="":e===Ga&&t===Ba?r="LinearDisplayP3ToLinearSRGB":e===Ba&&t===Ga&&(r="LinearSRGBToLinearDisplayP3"),i){case ur:case Ya:return[r,"LinearTransferOETF"];case gt:case ts:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[r,"LinearTransferOETF"]}}function Mo(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(r&&a==="")return"";const n=/ERROR: 0:(\d+)/.exec(a);if(n){const l=parseInt(n[1]);return t.toUpperCase()+`

`+a+`

`+uf(i.getShaderSource(e),l)}else return a}function pf(i,e){const t=df(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ff(i,e){let t;switch(e){case Tc:t="Linear";break;case bc:t="Reinhard";break;case wc:t="OptimizedCineon";break;case Ac:t="ACESFilmic";break;case Cc:t="AgX";break;case Rc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Si).join(`
`)}function gf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Si).join(`
`)}function _f(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function vf(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const n=i.getActiveAttrib(e,a),l=n.name;let s=1;n.type===i.FLOAT_MAT2&&(s=2),n.type===i.FLOAT_MAT3&&(s=3),n.type===i.FLOAT_MAT4&&(s=4),t[l]={type:n.type,location:i.getAttribLocation(e,l),locationSize:s}}return t}function Si(i){return i!==""}function yo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kn(i){return i.replace(xf,Mf)}const Sf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Mf(i,e){let t=Oe[e];if(t===void 0){const r=Sf.get(e);if(r!==void 0)t=Oe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Kn(t)}const yf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function To(i){return i.replace(yf,Ef)}function Ef(i,e,t,r){let a="";for(let n=parseInt(e);n<parseInt(t);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function bo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ql?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ir&&(e="SHADOWMAP_TYPE_VSM"),e}function bf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ti:case bi:e="ENVMAP_TYPE_CUBE";break;case qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bi:e="ENVMAP_MODE_REFRACTION";break}return e}function Af(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sl:e="ENVMAP_BLENDING_MULTIPLY";break;case yc:e="ENVMAP_BLENDING_MIX";break;case Ec:e="ENVMAP_BLENDING_ADD";break}return e}function Rf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function Cf(i,e,t,r){const a=i.getContext(),n=t.defines;let l=t.vertexShader,s=t.fragmentShader;const o=Tf(t),c=bf(t),h=wf(t),f=Af(t),d=Rf(t),m=t.isWebGL2?"":mf(t),_=gf(t),x=_f(n),p=a.createProgram();let u,T,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Si).join(`
`),u.length>0&&(u+=`
`),T=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Si).join(`
`),T.length>0&&(T+=`
`)):(u=[bo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Si).join(`
`),T=[m,bo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tr?"#define TONE_MAPPING":"",t.toneMapping!==Tr?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Tr?ff("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,pf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Si).join(`
`)),l=Kn(l),l=yo(l,t),l=Eo(l,t),s=Kn(s),s=yo(s,t),s=Eo(s,t),l=To(l),s=To(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Gs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const A=M+u+l,U=M+T+s,C=So(a,a.VERTEX_SHADER,A),R=So(a,a.FRAGMENT_SHADER,U);a.attachShader(p,C),a.attachShader(p,R),t.index0AttributeName!==void 0?a.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(p,0,"position"),a.linkProgram(p);function F(G){if(i.debug.checkShaderErrors){const $=a.getProgramInfoLog(p).trim(),L=a.getShaderInfoLog(C).trim(),B=a.getShaderInfoLog(R).trim();let V=!0,j=!0;if(a.getProgramParameter(p,a.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,p,C,R);else{const k=Mo(a,C,"vertex"),X=Mo(a,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(p,a.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+$+`
`+k+`
`+X)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(L===""||B==="")&&(j=!1);j&&(G.diagnostics={runnable:V,programLog:$,vertexShader:{log:L,prefix:u},fragmentShader:{log:B,prefix:T}})}a.deleteShader(C),a.deleteShader(R),W=new Ua(a,p),g=vf(a,p)}let W;this.getUniforms=function(){return W===void 0&&F(this),W};let g;this.getAttributes=function(){return g===void 0&&F(this),g};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=a.getProgramParameter(p,cf)),b},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=R,this}let Lf=0;class Pf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),n=this._getShaderStage(r),l=this._getShaderCacheForMaterial(e);return l.has(a)===!1&&(l.add(a),a.usedTimes++),l.has(n)===!1&&(l.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Df(e),t.set(e,r)),r}}class Df{constructor(e){this.id=Lf++,this.code=e,this.usedTimes=0}}function Uf(i,e,t,r,a,n,l){const s=new Ml,o=new Pf,c=new Set,h=[],f=a.isWebGL2,d=a.logarithmicDepthBuffer,m=a.vertexTextures;let _=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return c.add(g),g===0?"uv":`uv${g}`}function u(g,b,G,$,L){const B=$.fog,V=L.geometry,j=g.isMeshStandardMaterial?$.environment:null,k=(g.isMeshStandardMaterial?t:e).get(g.envMap||j),X=k&&k.mapping===qa?k.image.height:null,ee=x[g.type];g.precision!==null&&(_=a.getMaxPrecision(g.precision),_!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",_,"instead."));const Z=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,he=Z!==void 0?Z.length:0;let pe=0;V.morphAttributes.position!==void 0&&(pe=1),V.morphAttributes.normal!==void 0&&(pe=2),V.morphAttributes.color!==void 0&&(pe=3);let H,re,oe,Se;if(ee){const Ke=Kt[ee];H=Ke.vertexShader,re=Ke.fragmentShader}else H=g.vertexShader,re=g.fragmentShader,o.update(g),oe=o.getVertexShaderID(g),Se=o.getFragmentShaderID(g);const me=i.getRenderTarget(),ue=L.isInstancedMesh===!0,Ge=L.isBatchedMesh===!0,Ce=!!g.map,D=!!g.matcap,at=!!k,ve=!!g.aoMap,Ae=!!g.lightMap,fe=!!g.bumpMap,ke=!!g.normalMap,De=!!g.displacementMap,y=!!g.emissiveMap,v=!!g.metalnessMap,I=!!g.roughnessMap,J=g.anisotropy>0,q=g.clearcoat>0,Q=g.iridescence>0,de=g.sheen>0,se=g.transmission>0,le=J&&!!g.anisotropyMap,Me=q&&!!g.clearcoatMap,Ie=q&&!!g.clearcoatNormalMap,K=q&&!!g.clearcoatRoughnessMap,qe=Q&&!!g.iridescenceMap,Ue=Q&&!!g.iridescenceThicknessMap,Te=de&&!!g.sheenColorMap,ge=de&&!!g.sheenRoughnessMap,ce=!!g.specularMap,Pe=!!g.specularColorMap,Xe=!!g.specularIntensityMap,He=se&&!!g.transmissionMap,ze=se&&!!g.thicknessMap,Ye=!!g.gradientMap,E=!!g.alphaMap,te=g.alphaTest>0,Y=!!g.alphaHash,Ee=!!g.extensions;let xe=Tr;g.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(xe=i.toneMapping);const je={isWebGL2:f,shaderID:ee,shaderType:g.type,shaderName:g.name,vertexShader:H,fragmentShader:re,defines:g.defines,customVertexShaderID:oe,customFragmentShaderID:Se,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:_,batching:Ge,instancing:ue,instancingColor:ue&&L.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:ur,alphaToCoverage:!!g.alphaToCoverage,map:Ce,matcap:D,envMap:at,envMapMode:at&&k.mapping,envMapCubeUVHeight:X,aoMap:ve,lightMap:Ae,bumpMap:fe,normalMap:ke,displacementMap:m&&De,emissiveMap:y,normalMapObjectSpace:ke&&g.normalMapType===Vc,normalMapTangentSpace:ke&&g.normalMapType===Gc,metalnessMap:v,roughnessMap:I,anisotropy:J,anisotropyMap:le,clearcoat:q,clearcoatMap:Me,clearcoatNormalMap:Ie,clearcoatRoughnessMap:K,iridescence:Q,iridescenceMap:qe,iridescenceThicknessMap:Ue,sheen:de,sheenColorMap:Te,sheenRoughnessMap:ge,specularMap:ce,specularColorMap:Pe,specularIntensityMap:Xe,transmission:se,transmissionMap:He,thicknessMap:ze,gradientMap:Ye,opaque:g.transparent===!1&&g.blending===yi&&g.alphaToCoverage===!1,alphaMap:E,alphaTest:te,alphaHash:Y,combine:g.combine,mapUv:Ce&&p(g.map.channel),aoMapUv:ve&&p(g.aoMap.channel),lightMapUv:Ae&&p(g.lightMap.channel),bumpMapUv:fe&&p(g.bumpMap.channel),normalMapUv:ke&&p(g.normalMap.channel),displacementMapUv:De&&p(g.displacementMap.channel),emissiveMapUv:y&&p(g.emissiveMap.channel),metalnessMapUv:v&&p(g.metalnessMap.channel),roughnessMapUv:I&&p(g.roughnessMap.channel),anisotropyMapUv:le&&p(g.anisotropyMap.channel),clearcoatMapUv:Me&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&p(g.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:ge&&p(g.sheenRoughnessMap.channel),specularMapUv:ce&&p(g.specularMap.channel),specularColorMapUv:Pe&&p(g.specularColorMap.channel),specularIntensityMapUv:Xe&&p(g.specularIntensityMap.channel),transmissionMapUv:He&&p(g.transmissionMap.channel),thicknessMapUv:ze&&p(g.thicknessMap.channel),alphaMapUv:E&&p(g.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ke||J),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(Ce||E),fog:!!B,useFog:g.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:pe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ce&&g.map.isVideoTexture===!0&&Qe.getTransfer(g.map.colorSpace)===et,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ar,flipSided:g.side===Ct,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:Ee&&g.extensions.derivatives===!0,extensionFragDepth:Ee&&g.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&g.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&g.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&g.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ee&&g.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function T(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const G in g.defines)b.push(G),b.push(g.defines[G]);return g.isRawShaderMaterial===!1&&(M(b,g),A(b,g),b.push(i.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function M(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function A(g,b){s.disableAll(),b.isWebGL2&&s.enable(0),b.supportsVertexTextures&&s.enable(1),b.instancing&&s.enable(2),b.instancingColor&&s.enable(3),b.matcap&&s.enable(4),b.envMap&&s.enable(5),b.normalMapObjectSpace&&s.enable(6),b.normalMapTangentSpace&&s.enable(7),b.clearcoat&&s.enable(8),b.iridescence&&s.enable(9),b.alphaTest&&s.enable(10),b.vertexColors&&s.enable(11),b.vertexAlphas&&s.enable(12),b.vertexUv1s&&s.enable(13),b.vertexUv2s&&s.enable(14),b.vertexUv3s&&s.enable(15),b.vertexTangents&&s.enable(16),b.anisotropy&&s.enable(17),b.alphaHash&&s.enable(18),b.batching&&s.enable(19),g.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.skinning&&s.enable(4),b.morphTargets&&s.enable(5),b.morphNormals&&s.enable(6),b.morphColors&&s.enable(7),b.premultipliedAlpha&&s.enable(8),b.shadowMapEnabled&&s.enable(9),b.useLegacyLights&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.alphaToCoverage&&s.enable(20),g.push(s.mask)}function U(g){const b=x[g.type];let G;if(b){const $=Kt[b];G=fh.clone($.uniforms)}else G=g.uniforms;return G}function C(g,b){let G;for(let $=0,L=h.length;$<L;$++){const B=h[$];if(B.cacheKey===b){G=B,++G.usedTimes;break}}return G===void 0&&(G=new Cf(i,b,g,n),h.push(G)),G}function R(g){if(--g.usedTimes===0){const b=h.indexOf(g);h[b]=h[h.length-1],h.pop(),g.destroy()}}function F(g){o.remove(g)}function W(){o.dispose()}return{getParameters:u,getProgramCacheKey:T,getUniforms:U,acquireProgram:C,releaseProgram:R,releaseShaderCache:F,programs:h,dispose:W}}function If(){let i=new WeakMap;function e(n){let l=i.get(n);return l===void 0&&(l={},i.set(n,l)),l}function t(n){i.delete(n)}function r(n,l,s){i.get(n)[l]=s}function a(){i=new WeakMap}return{get:e,remove:t,update:r,dispose:a}}function Nf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ao(){const i=[];let e=0;const t=[],r=[],a=[];function n(){e=0,t.length=0,r.length=0,a.length=0}function l(f,d,m,_,x,p){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:x,group:p},i[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=x,u.group=p),e++,u}function s(f,d,m,_,x,p){const u=l(f,d,m,_,x,p);m.transmission>0?r.push(u):m.transparent===!0?a.push(u):t.push(u)}function o(f,d,m,_,x,p){const u=l(f,d,m,_,x,p);m.transmission>0?r.unshift(u):m.transparent===!0?a.unshift(u):t.unshift(u)}function c(f,d){t.length>1&&t.sort(f||Nf),r.length>1&&r.sort(d||wo),a.length>1&&a.sort(d||wo)}function h(){for(let f=e,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:r,transparent:a,init:n,push:s,unshift:o,finish:h,sort:c}}function Of(){let i=new WeakMap;function e(r,a){const n=i.get(r);let l;return n===void 0?(l=new Ao,i.set(r,[l])):a>=n.length?(l=new Ao,n.push(l)):l=n[a],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function zf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new We};break;case"SpotLight":t={position:new w,direction:new w,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new w,halfWidth:new w,halfHeight:new w};break}return i[e.id]=t,t}}}function Ff(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Bf=0;function Gf(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vf(i,e){const t=new zf,r=Ff(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new w);const n=new w,l=new st,s=new st;function o(h,f){let d=0,m=0,_=0;for(let G=0;G<9;G++)a.probe[G].set(0,0,0);let x=0,p=0,u=0,T=0,M=0,A=0,U=0,C=0,R=0,F=0,W=0;h.sort(Gf);const g=f===!0?Math.PI:1;for(let G=0,$=h.length;G<$;G++){const L=h[G],B=L.color,V=L.intensity,j=L.distance,k=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=B.r*V*g,m+=B.g*V*g,_+=B.b*V*g;else if(L.isLightProbe){for(let X=0;X<9;X++)a.probe[X].addScaledVector(L.sh.coefficients[X],V);W++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*g),L.castShadow){const ee=L.shadow,Z=r.get(L);Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,a.directionalShadow[x]=Z,a.directionalShadowMap[x]=k,a.directionalShadowMatrix[x]=L.shadow.matrix,A++}a.directional[x]=X,x++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(B).multiplyScalar(V*g),X.distance=j,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,a.spot[u]=X;const ee=L.shadow;if(L.map&&(a.spotLightMap[R]=L.map,R++,ee.updateMatrices(L),L.castShadow&&F++),a.spotLightMatrix[u]=ee.matrix,L.castShadow){const Z=r.get(L);Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,a.spotShadow[u]=Z,a.spotShadowMap[u]=k,C++}u++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(B).multiplyScalar(V),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),a.rectArea[T]=X,T++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*g),X.distance=L.distance,X.decay=L.decay,L.castShadow){const ee=L.shadow,Z=r.get(L);Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,Z.shadowCameraNear=ee.camera.near,Z.shadowCameraFar=ee.camera.far,a.pointShadow[p]=Z,a.pointShadowMap[p]=k,a.pointShadowMatrix[p]=L.shadow.matrix,U++}a.point[p]=X,p++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(V*g),X.groundColor.copy(L.groundColor).multiplyScalar(V*g),a.hemi[M]=X,M++}}T>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ae.LTC_FLOAT_1,a.rectAreaLTC2=ae.LTC_FLOAT_2):(a.rectAreaLTC1=ae.LTC_HALF_1,a.rectAreaLTC2=ae.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ae.LTC_FLOAT_1,a.rectAreaLTC2=ae.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=ae.LTC_HALF_1,a.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=d,a.ambient[1]=m,a.ambient[2]=_;const b=a.hash;(b.directionalLength!==x||b.pointLength!==p||b.spotLength!==u||b.rectAreaLength!==T||b.hemiLength!==M||b.numDirectionalShadows!==A||b.numPointShadows!==U||b.numSpotShadows!==C||b.numSpotMaps!==R||b.numLightProbes!==W)&&(a.directional.length=x,a.spot.length=u,a.rectArea.length=T,a.point.length=p,a.hemi.length=M,a.directionalShadow.length=A,a.directionalShadowMap.length=A,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=A,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=C+R-F,a.spotLightMap.length=R,a.numSpotLightShadowsWithMaps=F,a.numLightProbes=W,b.directionalLength=x,b.pointLength=p,b.spotLength=u,b.rectAreaLength=T,b.hemiLength=M,b.numDirectionalShadows=A,b.numPointShadows=U,b.numSpotShadows=C,b.numSpotMaps=R,b.numLightProbes=W,a.version=Bf++)}function c(h,f){let d=0,m=0,_=0,x=0,p=0;const u=f.matrixWorldInverse;for(let T=0,M=h.length;T<M;T++){const A=h[T];if(A.isDirectionalLight){const U=a.directional[d];U.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),U.direction.sub(n),U.direction.transformDirection(u),d++}else if(A.isSpotLight){const U=a.spot[_];U.position.setFromMatrixPosition(A.matrixWorld),U.position.applyMatrix4(u),U.direction.setFromMatrixPosition(A.matrixWorld),n.setFromMatrixPosition(A.target.matrixWorld),U.direction.sub(n),U.direction.transformDirection(u),_++}else if(A.isRectAreaLight){const U=a.rectArea[x];U.position.setFromMatrixPosition(A.matrixWorld),U.position.applyMatrix4(u),s.identity(),l.copy(A.matrixWorld),l.premultiply(u),s.extractRotation(l),U.halfWidth.set(A.width*.5,0,0),U.halfHeight.set(0,A.height*.5,0),U.halfWidth.applyMatrix4(s),U.halfHeight.applyMatrix4(s),x++}else if(A.isPointLight){const U=a.point[m];U.position.setFromMatrixPosition(A.matrixWorld),U.position.applyMatrix4(u),m++}else if(A.isHemisphereLight){const U=a.hemi[p];U.direction.setFromMatrixPosition(A.matrixWorld),U.direction.transformDirection(u),p++}}}return{setup:o,setupView:c,state:a}}function Ro(i,e){const t=new Vf(i,e),r=[],a=[];function n(){r.length=0,a.length=0}function l(h){r.push(h)}function s(h){a.push(h)}function o(h){t.setup(r,h)}function c(h){t.setupView(r,h)}return{init:n,state:{lightsArray:r,shadowsArray:a,lights:t},setupLights:o,setupLightsView:c,pushLight:l,pushShadow:s}}function Hf(i,e){let t=new WeakMap;function r(n,l=0){const s=t.get(n);let o;return s===void 0?(o=new Ro(i,e),t.set(n,[o])):l>=s.length?(o=new Ro(i,e),s.push(o)):o=s[l],o}function a(){t=new WeakMap}return{get:r,dispose:a}}class kf extends qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wf extends qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qf(i,e,t){let r=new Cl;const a=new Ve,n=new Ve,l=new _t,s=new kf({depthPacking:Bc}),o=new Wf,c={},h=t.maxTextureSize,f={[Ar]:Ct,[Ct]:Ar,[ar]:ar},d=new Rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Xf,fragmentShader:jf}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Lt;_.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new or(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let u=this.type;this.render=function(C,R,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const W=i.getRenderTarget(),g=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),G=i.state;G.setBlending(yr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const $=u!==ir&&this.type===ir,L=u===ir&&this.type!==ir;for(let B=0,V=C.length;B<V;B++){const j=C[B],k=j.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const X=k.getFrameExtents();if(a.multiply(X),n.copy(k.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(n.x=Math.floor(h/X.x),a.x=n.x*X.x,k.mapSize.x=n.x),a.y>h&&(n.y=Math.floor(h/X.y),a.y=n.y*X.y,k.mapSize.y=n.y)),k.map===null||$===!0||L===!0){const Z=this.type!==ir?{minFilter:ct,magFilter:ct}:{};k.map!==null&&k.map.dispose(),k.map=new jr(a.x,a.y,Z),k.map.texture.name=j.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const ee=k.getViewportCount();for(let Z=0;Z<ee;Z++){const he=k.getViewport(Z);l.set(n.x*he.x,n.y*he.y,n.x*he.z,n.y*he.w),G.viewport(l),k.updateMatrices(j,Z),r=k.getFrustum(),A(R,F,k.camera,j,this.type)}k.isPointLightShadow!==!0&&this.type===ir&&T(k,F),k.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(W,g,b)};function T(C,R){const F=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new jr(a.x,a.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,F,d,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,F,m,x,null)}function M(C,R,F,W){let g=null;const b=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)g=b;else if(g=F.isPointLight===!0?o:s,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=g.uuid,$=R.uuid;let L=c[G];L===void 0&&(L={},c[G]=L);let B=L[$];B===void 0&&(B=g.clone(),L[$]=B,R.addEventListener("dispose",U)),g=B}if(g.visible=R.visible,g.wireframe=R.wireframe,W===ir?g.side=R.shadowSide!==null?R.shadowSide:R.side:g.side=R.shadowSide!==null?R.shadowSide:f[R.side],g.alphaMap=R.alphaMap,g.alphaTest=R.alphaTest,g.map=R.map,g.clipShadows=R.clipShadows,g.clippingPlanes=R.clippingPlanes,g.clipIntersection=R.clipIntersection,g.displacementMap=R.displacementMap,g.displacementScale=R.displacementScale,g.displacementBias=R.displacementBias,g.wireframeLinewidth=R.wireframeLinewidth,g.linewidth=R.linewidth,F.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const G=i.properties.get(g);G.light=F}return g}function A(C,R,F,W,g){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&g===ir)&&(!C.frustumCulled||r.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const G=e.update(C),$=C.material;if(Array.isArray($)){const L=G.groups;for(let B=0,V=L.length;B<V;B++){const j=L[B],k=$[j.materialIndex];if(k&&k.visible){const X=M(C,k,W,g);C.onBeforeShadow(i,C,R,F,G,X,j),i.renderBufferDirect(F,null,G,X,C,j),C.onAfterShadow(i,C,R,F,G,X,j)}}}else if($.visible){const L=M(C,$,W,g);C.onBeforeShadow(i,C,R,F,G,L,null),i.renderBufferDirect(F,null,G,L,C,null),C.onAfterShadow(i,C,R,F,G,L,null)}}const b=C.children;for(let G=0,$=b.length;G<$;G++)A(b[G],R,F,W,g)}function U(C){C.target.removeEventListener("dispose",U);for(const R in c){const F=c[R],W=C.target.uuid;W in F&&(F[W].dispose(),delete F[W])}}}function Yf(i,e,t){const r=t.isWebGL2;function a(){let E=!1;const te=new _t;let Y=null;const Ee=new _t(0,0,0,0);return{setMask:function(xe){Y!==xe&&!E&&(i.colorMask(xe,xe,xe,xe),Y=xe)},setLocked:function(xe){E=xe},setClear:function(xe,je,Ke,ot,vt){vt===!0&&(xe*=ot,je*=ot,Ke*=ot),te.set(xe,je,Ke,ot),Ee.equals(te)===!1&&(i.clearColor(xe,je,Ke,ot),Ee.copy(te))},reset:function(){E=!1,Y=null,Ee.set(-1,0,0,0)}}}function n(){let E=!1,te=null,Y=null,Ee=null;return{setTest:function(xe){xe?ue(i.DEPTH_TEST):Ge(i.DEPTH_TEST)},setMask:function(xe){te!==xe&&!E&&(i.depthMask(xe),te=xe)},setFunc:function(xe){if(Y!==xe){switch(xe){case mc:i.depthFunc(i.NEVER);break;case gc:i.depthFunc(i.ALWAYS);break;case _c:i.depthFunc(i.LESS);break;case za:i.depthFunc(i.LEQUAL);break;case vc:i.depthFunc(i.EQUAL);break;case xc:i.depthFunc(i.GEQUAL);break;case Sc:i.depthFunc(i.GREATER);break;case Mc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=xe}},setLocked:function(xe){E=xe},setClear:function(xe){Ee!==xe&&(i.clearDepth(xe),Ee=xe)},reset:function(){E=!1,te=null,Y=null,Ee=null}}}function l(){let E=!1,te=null,Y=null,Ee=null,xe=null,je=null,Ke=null,ot=null,vt=null;return{setTest:function(Ze){E||(Ze?ue(i.STENCIL_TEST):Ge(i.STENCIL_TEST))},setMask:function(Ze){te!==Ze&&!E&&(i.stencilMask(Ze),te=Ze)},setFunc:function(Ze,mt,It){(Y!==Ze||Ee!==mt||xe!==It)&&(i.stencilFunc(Ze,mt,It),Y=Ze,Ee=mt,xe=It)},setOp:function(Ze,mt,It){(je!==Ze||Ke!==mt||ot!==It)&&(i.stencilOp(Ze,mt,It),je=Ze,Ke=mt,ot=It)},setLocked:function(Ze){E=Ze},setClear:function(Ze){vt!==Ze&&(i.clearStencil(Ze),vt=Ze)},reset:function(){E=!1,te=null,Y=null,Ee=null,xe=null,je=null,Ke=null,ot=null,vt=null}}}const s=new a,o=new n,c=new l,h=new WeakMap,f=new WeakMap;let d={},m={},_=new WeakMap,x=[],p=null,u=!1,T=null,M=null,A=null,U=null,C=null,R=null,F=null,W=new We(0,0,0),g=0,b=!1,G=null,$=null,L=null,B=null,V=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(ee)[1]),k=X>=1):ee.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),k=X>=2);let Z=null,he={};const pe=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),re=new _t().fromArray(pe),oe=new _t().fromArray(H);function Se(E,te,Y,Ee){const xe=new Uint8Array(4),je=i.createTexture();i.bindTexture(E,je),i.texParameteri(E,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(E,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<Y;Ke++)r&&(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)?i.texImage3D(te,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(te+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return je}const me={};me[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(me[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),o.setClear(1),c.setClear(0),ue(i.DEPTH_TEST),o.setFunc(za),De(!1),y(ls),ue(i.CULL_FACE),fe(yr);function ue(E){d[E]!==!0&&(i.enable(E),d[E]=!0)}function Ge(E){d[E]!==!1&&(i.disable(E),d[E]=!1)}function Ce(E,te){return m[E]!==te?(i.bindFramebuffer(E,te),m[E]=te,r&&(E===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=te),E===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=te)),!0):!1}function D(E,te){let Y=x,Ee=!1;if(E)if(Y=_.get(te),Y===void 0&&(Y=[],_.set(te,Y)),E.isWebGLMultipleRenderTargets){const xe=E.texture;if(Y.length!==xe.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let je=0,Ke=xe.length;je<Ke;je++)Y[je]=i.COLOR_ATTACHMENT0+je;Y.length=xe.length,Ee=!0}}else Y[0]!==i.COLOR_ATTACHMENT0&&(Y[0]=i.COLOR_ATTACHMENT0,Ee=!0);else Y[0]!==i.BACK&&(Y[0]=i.BACK,Ee=!0);Ee&&(t.isWebGL2?i.drawBuffers(Y):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function at(E){return p!==E?(i.useProgram(E),p=E,!0):!1}const ve={[Fr]:i.FUNC_ADD,[ec]:i.FUNC_SUBTRACT,[tc]:i.FUNC_REVERSE_SUBTRACT};if(r)ve[us]=i.MIN,ve[ds]=i.MAX;else{const E=e.get("EXT_blend_minmax");E!==null&&(ve[us]=E.MIN_EXT,ve[ds]=E.MAX_EXT)}const Ae={[rc]:i.ZERO,[ic]:i.ONE,[ac]:i.SRC_COLOR,[Bn]:i.SRC_ALPHA,[hc]:i.SRC_ALPHA_SATURATE,[lc]:i.DST_COLOR,[sc]:i.DST_ALPHA,[nc]:i.ONE_MINUS_SRC_COLOR,[Gn]:i.ONE_MINUS_SRC_ALPHA,[cc]:i.ONE_MINUS_DST_COLOR,[oc]:i.ONE_MINUS_DST_ALPHA,[uc]:i.CONSTANT_COLOR,[dc]:i.ONE_MINUS_CONSTANT_COLOR,[pc]:i.CONSTANT_ALPHA,[fc]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(E,te,Y,Ee,xe,je,Ke,ot,vt,Ze){if(E===yr){u===!0&&(Ge(i.BLEND),u=!1);return}if(u===!1&&(ue(i.BLEND),u=!0),E!==$l){if(E!==T||Ze!==b){if((M!==Fr||C!==Fr)&&(i.blendEquation(i.FUNC_ADD),M=Fr,C=Fr),Ze)switch(E){case yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Er:i.blendFunc(i.ONE,i.ONE);break;case cs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hs:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Er:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hs:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}A=null,U=null,R=null,F=null,W.set(0,0,0),g=0,T=E,b=Ze}return}xe=xe||te,je=je||Y,Ke=Ke||Ee,(te!==M||xe!==C)&&(i.blendEquationSeparate(ve[te],ve[xe]),M=te,C=xe),(Y!==A||Ee!==U||je!==R||Ke!==F)&&(i.blendFuncSeparate(Ae[Y],Ae[Ee],Ae[je],Ae[Ke]),A=Y,U=Ee,R=je,F=Ke),(ot.equals(W)===!1||vt!==g)&&(i.blendColor(ot.r,ot.g,ot.b,vt),W.copy(ot),g=vt),T=E,b=!1}function ke(E,te){E.side===ar?Ge(i.CULL_FACE):ue(i.CULL_FACE);let Y=E.side===Ct;te&&(Y=!Y),De(Y),E.blending===yi&&E.transparent===!1?fe(yr):fe(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),o.setFunc(E.depthFunc),o.setTest(E.depthTest),o.setMask(E.depthWrite),s.setMask(E.colorWrite);const Ee=E.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(E.stencilWriteMask),c.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),c.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),I(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):Ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(E){G!==E&&(E?i.frontFace(i.CW):i.frontFace(i.CCW),G=E)}function y(E){E!==Zl?(ue(i.CULL_FACE),E!==$&&(E===ls?i.cullFace(i.BACK):E===Jl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ge(i.CULL_FACE),$=E}function v(E){E!==L&&(k&&i.lineWidth(E),L=E)}function I(E,te,Y){E?(ue(i.POLYGON_OFFSET_FILL),(B!==te||V!==Y)&&(i.polygonOffset(te,Y),B=te,V=Y)):Ge(i.POLYGON_OFFSET_FILL)}function J(E){E?ue(i.SCISSOR_TEST):Ge(i.SCISSOR_TEST)}function q(E){E===void 0&&(E=i.TEXTURE0+j-1),Z!==E&&(i.activeTexture(E),Z=E)}function Q(E,te,Y){Y===void 0&&(Z===null?Y=i.TEXTURE0+j-1:Y=Z);let Ee=he[Y];Ee===void 0&&(Ee={type:void 0,texture:void 0},he[Y]=Ee),(Ee.type!==E||Ee.texture!==te)&&(Z!==Y&&(i.activeTexture(Y),Z=Y),i.bindTexture(E,te||me[E]),Ee.type=E,Ee.texture=te)}function de(){const E=he[Z];E!==void 0&&E.type!==void 0&&(i.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Me(){try{i.texSubImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ie(){try{i.texSubImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function qe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ue(){try{i.texStorage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Te(){try{i.texStorage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ce(){try{i.texImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Pe(E){re.equals(E)===!1&&(i.scissor(E.x,E.y,E.z,E.w),re.copy(E))}function Xe(E){oe.equals(E)===!1&&(i.viewport(E.x,E.y,E.z,E.w),oe.copy(E))}function He(E,te){let Y=f.get(te);Y===void 0&&(Y=new WeakMap,f.set(te,Y));let Ee=Y.get(E);Ee===void 0&&(Ee=i.getUniformBlockIndex(te,E.name),Y.set(E,Ee))}function ze(E,te){const Y=f.get(te).get(E);h.get(te)!==Y&&(i.uniformBlockBinding(te,Y,E.__bindingPointIndex),h.set(te,Y))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),r===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Z=null,he={},m={},_=new WeakMap,x=[],p=null,u=!1,T=null,M=null,A=null,U=null,C=null,R=null,F=null,W=new We(0,0,0),g=0,b=!1,G=null,$=null,L=null,B=null,V=null,re.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),c.reset()}return{buffers:{color:s,depth:o,stencil:c},enable:ue,disable:Ge,bindFramebuffer:Ce,drawBuffers:D,useProgram:at,setBlending:fe,setMaterial:ke,setFlipSided:De,setCullFace:y,setLineWidth:v,setPolygonOffset:I,setScissorTest:J,activeTexture:q,bindTexture:Q,unbindTexture:de,compressedTexImage2D:se,compressedTexImage3D:le,texImage2D:ge,texImage3D:ce,updateUBOMapping:He,uniformBlockBinding:ze,texStorage2D:Ue,texStorage3D:Te,texSubImage2D:Me,texSubImage3D:Ie,compressedTexSubImage2D:K,compressedTexSubImage3D:qe,scissor:Pe,viewport:Xe,reset:Ye}}function Kf(i,e,t,r,a,n,l){const s=a.isWebGL2,o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,v){return m?new OffscreenCanvas(y,v):Ha("canvas")}function x(y,v,I,J){let q=1;if((y.width>J||y.height>J)&&(q=J/Math.max(y.width,y.height)),q<1||v===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const Q=v?Yn:Math.floor,de=Q(q*y.width),se=Q(q*y.height);f===void 0&&(f=_(de,se));const le=I?_(de,se):f;return le.width=de,le.height=se,le.getContext("2d").drawImage(y,0,0,de,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+de+"x"+se+")."),le}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function p(y){return Vs(y.width)&&Vs(y.height)}function u(y){return s?!1:y.wrapS!==Wt||y.wrapT!==Wt||y.minFilter!==ct&&y.minFilter!==wt}function T(y,v){return y.generateMipmaps&&v&&y.minFilter!==ct&&y.minFilter!==wt}function M(y){i.generateMipmap(y)}function A(y,v,I,J,q=!1){if(s===!1)return v;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Q=v;if(v===i.RED&&(I===i.FLOAT&&(Q=i.R32F),I===i.HALF_FLOAT&&(Q=i.R16F),I===i.UNSIGNED_BYTE&&(Q=i.R8)),v===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(Q=i.R8UI),I===i.UNSIGNED_SHORT&&(Q=i.R16UI),I===i.UNSIGNED_INT&&(Q=i.R32UI),I===i.BYTE&&(Q=i.R8I),I===i.SHORT&&(Q=i.R16I),I===i.INT&&(Q=i.R32I)),v===i.RG&&(I===i.FLOAT&&(Q=i.RG32F),I===i.HALF_FLOAT&&(Q=i.RG16F),I===i.UNSIGNED_BYTE&&(Q=i.RG8)),v===i.RGBA){const de=q?Fa:Qe.getTransfer(J);I===i.FLOAT&&(Q=i.RGBA32F),I===i.HALF_FLOAT&&(Q=i.RGBA16F),I===i.UNSIGNED_BYTE&&(Q=de===et?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function U(y,v,I){return T(y,I)===!0||y.isFramebufferTexture&&y.minFilter!==ct&&y.minFilter!==wt?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function C(y){return y===ct||y===ps||y===Di?i.NEAREST:i.LINEAR}function R(y){const v=y.target;v.removeEventListener("dispose",R),W(v),v.isVideoTexture&&h.delete(v)}function F(y){const v=y.target;v.removeEventListener("dispose",F),b(v)}function W(y){const v=r.get(y);if(v.__webglInit===void 0)return;const I=y.source,J=d.get(I);if(J){const q=J[v.__cacheKey];q.usedTimes--,q.usedTimes===0&&g(y),Object.keys(J).length===0&&d.delete(I)}r.remove(y)}function g(y){const v=r.get(y);i.deleteTexture(v.__webglTexture);const I=y.source,J=d.get(I);delete J[v.__cacheKey],l.memory.textures--}function b(y){const v=y.texture,I=r.get(y),J=r.get(v);if(J.__webglTexture!==void 0&&(i.deleteTexture(J.__webglTexture),l.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(I.__webglFramebuffer[q]))for(let Q=0;Q<I.__webglFramebuffer[q].length;Q++)i.deleteFramebuffer(I.__webglFramebuffer[q][Q]);else i.deleteFramebuffer(I.__webglFramebuffer[q]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[q])}else{if(Array.isArray(I.__webglFramebuffer))for(let q=0;q<I.__webglFramebuffer.length;q++)i.deleteFramebuffer(I.__webglFramebuffer[q]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let q=0;q<I.__webglColorRenderbuffer.length;q++)I.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[q]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let q=0,Q=v.length;q<Q;q++){const de=r.get(v[q]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),l.memory.textures--),r.remove(v[q])}r.remove(v),r.remove(y)}let G=0;function $(){G=0}function L(){const y=G;return y>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+a.maxTextures),G+=1,y}function B(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function V(y,v){const I=r.get(y);if(y.isVideoTexture&&ke(y),y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){const J=y.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(I,y,v);return}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+v)}function j(y,v){const I=r.get(y);if(y.version>0&&I.__version!==y.version){re(I,y,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+v)}function k(y,v){const I=r.get(y);if(y.version>0&&I.__version!==y.version){re(I,y,v);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+v)}function X(y,v){const I=r.get(y);if(y.version>0&&I.__version!==y.version){oe(I,y,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+v)}const ee={[kn]:i.REPEAT,[Wt]:i.CLAMP_TO_EDGE,[Wn]:i.MIRRORED_REPEAT},Z={[ct]:i.NEAREST,[ps]:i.NEAREST_MIPMAP_NEAREST,[Di]:i.NEAREST_MIPMAP_LINEAR,[wt]:i.LINEAR,[rn]:i.LINEAR_MIPMAP_NEAREST,[Gr]:i.LINEAR_MIPMAP_LINEAR},he={[Hc]:i.NEVER,[Yc]:i.ALWAYS,[kc]:i.LESS,[gl]:i.LEQUAL,[Wc]:i.EQUAL,[qc]:i.GEQUAL,[Xc]:i.GREATER,[jc]:i.NOTEQUAL};function pe(y,v,I){if(v.type===nr&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===wt||v.magFilter===rn||v.magFilter===Di||v.magFilter===Gr||v.minFilter===wt||v.minFilter===rn||v.minFilter===Di||v.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),I?(i.texParameteri(y,i.TEXTURE_WRAP_S,ee[v.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,ee[v.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,ee[v.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,Z[v.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,Z[v.minFilter])):(i.texParameteri(y,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(y,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Wt||v.wrapT!==Wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,i.TEXTURE_MAG_FILTER,C(v.magFilter)),i.texParameteri(y,i.TEXTURE_MIN_FILTER,C(v.minFilter)),v.minFilter!==ct&&v.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,he[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===ct||v.minFilter!==Di&&v.minFilter!==Gr||v.type===nr&&e.has("OES_texture_float_linear")===!1||s===!1&&v.type===ki&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||r.get(v).__currentAnisotropy)&&(i.texParameterf(y,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),r.get(v).__currentAnisotropy=v.anisotropy)}}function H(y,v){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",R));const J=v.source;let q=d.get(J);q===void 0&&(q={},d.set(J,q));const Q=B(v);if(Q!==y.__cacheKey){q[Q]===void 0&&(q[Q]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,I=!0),q[Q].usedTimes++;const de=q[y.__cacheKey];de!==void 0&&(q[y.__cacheKey].usedTimes--,de.usedTimes===0&&g(v)),y.__cacheKey=Q,y.__webglTexture=q[Q].texture}return I}function re(y,v,I){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);const q=H(y,v),Q=v.source;t.bindTexture(J,y.__webglTexture,i.TEXTURE0+I);const de=r.get(Q);if(Q.version!==de.__version||q===!0){t.activeTexture(i.TEXTURE0+I);const se=Qe.getPrimaries(Qe.workingColorSpace),le=v.colorSpace===Bt?null:Qe.getPrimaries(v.colorSpace),Me=v.colorSpace===Bt||se===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ie=u(v)&&p(v.image)===!1;let K=x(v.image,Ie,!1,a.maxTextureSize);K=De(v,K);const qe=p(K)||s,Ue=n.convert(v.format,v.colorSpace);let Te=n.convert(v.type),ge=A(v.internalFormat,Ue,Te,v.colorSpace,v.isVideoTexture);pe(J,v,qe);let ce;const Pe=v.mipmaps,Xe=s&&v.isVideoTexture!==!0&&ge!==fl,He=de.__version===void 0||q===!0,ze=Q.dataReady,Ye=U(v,K,qe);if(v.isDepthTexture)ge=i.DEPTH_COMPONENT,s?v.type===nr?ge=i.DEPTH_COMPONENT32F:v.type===Mr?ge=i.DEPTH_COMPONENT24:v.type===Hr?ge=i.DEPTH24_STENCIL8:ge=i.DEPTH_COMPONENT16:v.type===nr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===kr&&ge===i.DEPTH_COMPONENT&&v.type!==es&&v.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Mr,Te=n.convert(v.type)),v.format===wi&&ge===i.DEPTH_COMPONENT&&(ge=i.DEPTH_STENCIL,v.type!==Hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Hr,Te=n.convert(v.type))),He&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,ge,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,ge,K.width,K.height,0,Ue,Te,null));else if(v.isDataTexture)if(Pe.length>0&&qe){Xe&&He&&t.texStorage2D(i.TEXTURE_2D,Ye,ge,Pe[0].width,Pe[0].height);for(let E=0,te=Pe.length;E<te;E++)ce=Pe[E],Xe?ze&&t.texSubImage2D(i.TEXTURE_2D,E,0,0,ce.width,ce.height,Ue,Te,ce.data):t.texImage2D(i.TEXTURE_2D,E,ge,ce.width,ce.height,0,Ue,Te,ce.data);v.generateMipmaps=!1}else Xe?(He&&t.texStorage2D(i.TEXTURE_2D,Ye,ge,K.width,K.height),ze&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,Ue,Te,K.data)):t.texImage2D(i.TEXTURE_2D,0,ge,K.width,K.height,0,Ue,Te,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xe&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,ge,Pe[0].width,Pe[0].height,K.depth);for(let E=0,te=Pe.length;E<te;E++)ce=Pe[E],v.format!==Xt?Ue!==null?Xe?ze&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,E,0,0,0,ce.width,ce.height,K.depth,Ue,ce.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,E,ge,ce.width,ce.height,K.depth,0,ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?ze&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,E,0,0,0,ce.width,ce.height,K.depth,Ue,Te,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,E,ge,ce.width,ce.height,K.depth,0,Ue,Te,ce.data)}else{Xe&&He&&t.texStorage2D(i.TEXTURE_2D,Ye,ge,Pe[0].width,Pe[0].height);for(let E=0,te=Pe.length;E<te;E++)ce=Pe[E],v.format!==Xt?Ue!==null?Xe?ze&&t.compressedTexSubImage2D(i.TEXTURE_2D,E,0,0,ce.width,ce.height,Ue,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,E,ge,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?ze&&t.texSubImage2D(i.TEXTURE_2D,E,0,0,ce.width,ce.height,Ue,Te,ce.data):t.texImage2D(i.TEXTURE_2D,E,ge,ce.width,ce.height,0,Ue,Te,ce.data)}else if(v.isDataArrayTexture)Xe?(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,ge,K.width,K.height,K.depth),ze&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Ue,Te,K.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,K.width,K.height,K.depth,0,Ue,Te,K.data);else if(v.isData3DTexture)Xe?(He&&t.texStorage3D(i.TEXTURE_3D,Ye,ge,K.width,K.height,K.depth),ze&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Ue,Te,K.data)):t.texImage3D(i.TEXTURE_3D,0,ge,K.width,K.height,K.depth,0,Ue,Te,K.data);else if(v.isFramebufferTexture){if(He)if(Xe)t.texStorage2D(i.TEXTURE_2D,Ye,ge,K.width,K.height);else{let E=K.width,te=K.height;for(let Y=0;Y<Ye;Y++)t.texImage2D(i.TEXTURE_2D,Y,ge,E,te,0,Ue,Te,null),E>>=1,te>>=1}}else if(Pe.length>0&&qe){Xe&&He&&t.texStorage2D(i.TEXTURE_2D,Ye,ge,Pe[0].width,Pe[0].height);for(let E=0,te=Pe.length;E<te;E++)ce=Pe[E],Xe?ze&&t.texSubImage2D(i.TEXTURE_2D,E,0,0,Ue,Te,ce):t.texImage2D(i.TEXTURE_2D,E,ge,Ue,Te,ce);v.generateMipmaps=!1}else Xe?(He&&t.texStorage2D(i.TEXTURE_2D,Ye,ge,K.width,K.height),ze&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ue,Te,K)):t.texImage2D(i.TEXTURE_2D,0,ge,Ue,Te,K);T(v,qe)&&M(J),de.__version=Q.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function oe(y,v,I){if(v.image.length!==6)return;const J=H(y,v),q=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+I);const Q=r.get(q);if(q.version!==Q.__version||J===!0){t.activeTexture(i.TEXTURE0+I);const de=Qe.getPrimaries(Qe.workingColorSpace),se=v.colorSpace===Bt?null:Qe.getPrimaries(v.colorSpace),le=v.colorSpace===Bt||de===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Me=v.isCompressedTexture||v.image[0].isCompressedTexture,Ie=v.image[0]&&v.image[0].isDataTexture,K=[];for(let E=0;E<6;E++)!Me&&!Ie?K[E]=x(v.image[E],!1,!0,a.maxCubemapSize):K[E]=Ie?v.image[E].image:v.image[E],K[E]=De(v,K[E]);const qe=K[0],Ue=p(qe)||s,Te=n.convert(v.format,v.colorSpace),ge=n.convert(v.type),ce=A(v.internalFormat,Te,ge,v.colorSpace),Pe=s&&v.isVideoTexture!==!0,Xe=Q.__version===void 0||J===!0,He=q.dataReady;let ze=U(v,qe,Ue);pe(i.TEXTURE_CUBE_MAP,v,Ue);let Ye;if(Me){Pe&&Xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,ce,qe.width,qe.height);for(let E=0;E<6;E++){Ye=K[E].mipmaps;for(let te=0;te<Ye.length;te++){const Y=Ye[te];v.format!==Xt?Te!==null?Pe?He&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,te,0,0,Y.width,Y.height,Te,Y.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,te,ce,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,te,0,0,Y.width,Y.height,Te,ge,Y.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,te,ce,Y.width,Y.height,0,Te,ge,Y.data)}}}else{Ye=v.mipmaps,Pe&&Xe&&(Ye.length>0&&ze++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,ce,K[0].width,K[0].height));for(let E=0;E<6;E++)if(Ie){Pe?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,0,0,K[E].width,K[E].height,Te,ge,K[E].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,ce,K[E].width,K[E].height,0,Te,ge,K[E].data);for(let te=0;te<Ye.length;te++){const Y=Ye[te].image[E].image;Pe?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,te+1,0,0,Y.width,Y.height,Te,ge,Y.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,te+1,ce,Y.width,Y.height,0,Te,ge,Y.data)}}else{Pe?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,0,0,Te,ge,K[E]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,ce,Te,ge,K[E]);for(let te=0;te<Ye.length;te++){const Y=Ye[te];Pe?He&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,te+1,0,0,Te,ge,Y.image[E]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+E,te+1,ce,Te,ge,Y.image[E])}}}T(v,Ue)&&M(i.TEXTURE_CUBE_MAP),Q.__version=q.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function Se(y,v,I,J,q,Q){const de=n.convert(I.format,I.colorSpace),se=n.convert(I.type),le=A(I.internalFormat,de,se,I.colorSpace);if(!r.get(v).__hasExternalTextures){const Me=Math.max(1,v.width>>Q),Ie=Math.max(1,v.height>>Q);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,Q,le,Me,Ie,v.depth,0,de,se,null):t.texImage2D(q,Q,le,Me,Ie,0,de,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),fe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,q,r.get(I).__webglTexture,0,Ae(v)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,q,r.get(I).__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(y,v,I){if(i.bindRenderbuffer(i.RENDERBUFFER,y),v.depthBuffer&&!v.stencilBuffer){let J=s===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(I||fe(v)){const q=v.depthTexture;q&&q.isDepthTexture&&(q.type===nr?J=i.DEPTH_COMPONENT32F:q.type===Mr&&(J=i.DEPTH_COMPONENT24));const Q=Ae(v);fe(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,J,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,J,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,y)}else if(v.depthBuffer&&v.stencilBuffer){const J=Ae(v);I&&fe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,v.width,v.height):fe(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,y)}else{const J=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let q=0;q<J.length;q++){const Q=J[q],de=n.convert(Q.format,Q.colorSpace),se=n.convert(Q.type),le=A(Q.internalFormat,de,se,Q.colorSpace),Me=Ae(v);I&&fe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,le,v.width,v.height):fe(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,le,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,le,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const I=r.get(v.depthTexture).__webglTexture,J=Ae(v);if(v.depthTexture.format===kr)fe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,I,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,I,0);else if(v.depthTexture.format===wi)fe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,I,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function Ge(y){const v=r.get(y),I=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");ue(v.__webglFramebuffer,y)}else if(I){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]=i.createRenderbuffer(),me(v.__webglDepthbuffer[J],y,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),me(v.__webglDepthbuffer,y,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(y,v,I){const J=r.get(y);v!==void 0&&Se(J.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Ge(y)}function D(y){const v=y.texture,I=r.get(y),J=r.get(v);y.addEventListener("dispose",F),y.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,l.memory.textures++);const q=y.isWebGLCubeRenderTarget===!0,Q=y.isWebGLMultipleRenderTargets===!0,de=p(y)||s;if(q){I.__webglFramebuffer=[];for(let se=0;se<6;se++)if(s&&v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[se]=[];for(let le=0;le<v.mipmaps.length;le++)I.__webglFramebuffer[se][le]=i.createFramebuffer()}else I.__webglFramebuffer[se]=i.createFramebuffer()}else{if(s&&v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)I.__webglFramebuffer[se]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(Q)if(a.drawBuffers){const se=y.texture;for(let le=0,Me=se.length;le<Me;le++){const Ie=r.get(se[le]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&y.samples>0&&fe(y)===!1){const se=Q?v:[v];I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let le=0;le<se.length;le++){const Me=se[le];I.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[le]);const Ie=n.convert(Me.format,Me.colorSpace),K=n.convert(Me.type),qe=A(Me.internalFormat,Ie,K,Me.colorSpace,y.isXRRenderTarget===!0),Ue=Ae(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,qe,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,I.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),me(I.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),pe(i.TEXTURE_CUBE_MAP,v,de);for(let se=0;se<6;se++)if(s&&v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)Se(I.__webglFramebuffer[se][le],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,le);else Se(I.__webglFramebuffer[se],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);T(v,de)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const se=y.texture;for(let le=0,Me=se.length;le<Me;le++){const Ie=se[le],K=r.get(Ie);t.bindTexture(i.TEXTURE_2D,K.__webglTexture),pe(i.TEXTURE_2D,Ie,de),Se(I.__webglFramebuffer,y,Ie,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),T(Ie,de)&&M(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(s?se=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,J.__webglTexture),pe(se,v,de),s&&v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)Se(I.__webglFramebuffer[le],y,v,i.COLOR_ATTACHMENT0,se,le);else Se(I.__webglFramebuffer,y,v,i.COLOR_ATTACHMENT0,se,0);T(v,de)&&M(se),t.unbindTexture()}y.depthBuffer&&Ge(y)}function at(y){const v=p(y)||s,I=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let J=0,q=I.length;J<q;J++){const Q=I[J];if(T(Q,v)){const de=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,se=r.get(Q).__webglTexture;t.bindTexture(de,se),M(de),t.unbindTexture()}}}function ve(y){if(s&&y.samples>0&&fe(y)===!1){const v=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],I=y.width,J=y.height;let q=i.COLOR_BUFFER_BIT;const Q=[],de=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=r.get(y),le=y.isWebGLMultipleRenderTargets===!0;if(le)for(let Me=0;Me<v.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Me=0;Me<v.length;Me++){Q.push(i.COLOR_ATTACHMENT0+Me),y.depthBuffer&&Q.push(de);const Ie=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Ie===!1&&(y.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),le&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[Me]),Ie===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[de]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[de])),le){const K=r.get(v[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,I,J,0,0,I,J,q,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Me=0;Me<v.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,se.__webglColorRenderbuffer[Me]);const Ie=r.get(v[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Ae(y){return Math.min(a.maxSamples,y.samples)}function fe(y){const v=r.get(y);return s&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ke(y){const v=l.render.frame;h.get(y)!==v&&(h.set(y,v),y.update())}function De(y,v){const I=y.colorSpace,J=y.format,q=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===jn||I!==ur&&I!==Bt&&(Qe.getTransfer(I)===et?s===!1?e.has("EXT_sRGB")===!0&&J===Xt?(y.format=jn,y.minFilter=wt,y.generateMipmaps=!1):v=vl.sRGBToLinear(v):(J!==Xt||q!==br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),v}this.allocateTextureUnit=L,this.resetTextureUnits=$,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=k,this.setTextureCube=X,this.rebindTextures=Ce,this.setupRenderTarget=D,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=fe}function Zf(i,e,t){const r=t.isWebGL2;function a(n,l=Bt){let s;const o=Qe.getTransfer(l);if(n===br)return i.UNSIGNED_BYTE;if(n===cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lc)return i.BYTE;if(n===Pc)return i.SHORT;if(n===es)return i.UNSIGNED_SHORT;if(n===ll)return i.INT;if(n===Mr)return i.UNSIGNED_INT;if(n===nr)return i.FLOAT;if(n===ki)return r?i.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(n===Dc)return i.ALPHA;if(n===Xt)return i.RGBA;if(n===Uc)return i.LUMINANCE;if(n===Ic)return i.LUMINANCE_ALPHA;if(n===kr)return i.DEPTH_COMPONENT;if(n===wi)return i.DEPTH_STENCIL;if(n===jn)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(n===Nc)return i.RED;if(n===ul)return i.RED_INTEGER;if(n===Oc)return i.RG;if(n===dl)return i.RG_INTEGER;if(n===pl)return i.RGBA_INTEGER;if(n===an||n===nn||n===sn||n===on)if(o===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===an)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===on)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===an)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nn)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sn)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===on)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fs||n===ms||n===gs||n===_s)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ms)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_s)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fl)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===vs||n===xs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===vs)return o===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xs)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ss||n===Ms||n===ys||n===Es||n===Ts||n===bs||n===ws||n===As||n===Rs||n===Cs||n===Ls||n===Ps||n===Ds||n===Us)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ss)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ms)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ys)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Es)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ts)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bs)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ws)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===As)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rs)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cs)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ls)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ps)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ds)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Us)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ln||n===Is||n===Ns)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ln)return o===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Is)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ns)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zc||n===Os||n===zs||n===Fs)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ln)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Os)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hr?r?i.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[n]!==void 0?i[n]:null}return{convert:a}}class Jf extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ya extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qf={type:"move"};class Un{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,n=null,l=null;const s=this._targetRay,o=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){l=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,r),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&n!==null&&(a=n),a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,a.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(a.linearVelocity)):s.hasLinearVelocity=!1,a.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(a.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Qf)))}return s!==null&&(s.visible=a!==null),o!==null&&(o.visible=n!==null),c!==null&&(c.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ya;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const $f=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,em=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new Tt,n=e.properties.get(a);n.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}render(e,t){if(this.texture!==null){if(this.mesh===null){const r=t.cameras[0].viewport,a=new Rr({extensions:{fragDepth:!0},vertexShader:$f,fragmentShader:em,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new or(new Ka(20,20),a)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class rm extends Ri{constructor(e,t){super();const r=this;let a=null,n=1,l=null,s="local-floor",o=1,c=null,h=null,f=null,d=null,m=null,_=null;const x=new tm,p=t.getContextAttributes();let u=null,T=null;const M=[],A=[],U=new Ve;let C=null;const R=new kt;R.layers.enable(1),R.viewport=new _t;const F=new kt;F.layers.enable(2),F.viewport=new _t;const W=[R,F],g=new Jf;g.layers.enable(1),g.layers.enable(2);let b=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let re=M[H];return re===void 0&&(re=new Un,M[H]=re),re.getTargetRaySpace()},this.getControllerGrip=function(H){let re=M[H];return re===void 0&&(re=new Un,M[H]=re),re.getGripSpace()},this.getHand=function(H){let re=M[H];return re===void 0&&(re=new Un,M[H]=re),re.getHandSpace()};function $(H){const re=A.indexOf(H.inputSource);if(re===-1)return;const oe=M[re];oe!==void 0&&(oe.update(H.inputSource,H.frame,c||l),oe.dispatchEvent({type:H.type,data:H.inputSource}))}function L(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",L),a.removeEventListener("inputsourceschange",B);for(let H=0;H<M.length;H++){const re=A[H];re!==null&&(A[H]=null,M[H].disconnect(re))}b=null,G=null,x.reset(),e.setRenderTarget(u),m=null,d=null,f=null,a=null,T=null,pe.stop(),r.isPresenting=!1,e.setPixelRatio(C),e.setSize(U.width,U.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){n=H,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){s=H,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||l},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(H){if(a=H,a!==null){if(u=e.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",L),a.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(U),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:a.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:n};m=new XRWebGLLayer(a,t,re),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new jr(m.framebufferWidth,m.framebufferHeight,{format:Xt,type:br,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let re=null,oe=null,Se=null;p.depth&&(Se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=p.stencil?wi:kr,oe=p.stencil?Hr:Mr);const me={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:n};f=new XRWebGLBinding(a,t),d=f.createProjectionLayer(me),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new jr(d.textureWidth,d.textureHeight,{format:Xt,type:br,depthTexture:new Dl(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const ue=e.properties.get(T);ue.__ignoreDepthValues=d.ignoreDepthValues}T.isXRRenderTarget=!0,this.setFoveation(o),c=null,l=await a.requestReferenceSpace(s),pe.setContext(a),pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function B(H){for(let re=0;re<H.removed.length;re++){const oe=H.removed[re],Se=A.indexOf(oe);Se>=0&&(A[Se]=null,M[Se].disconnect(oe))}for(let re=0;re<H.added.length;re++){const oe=H.added[re];let Se=A.indexOf(oe);if(Se===-1){for(let ue=0;ue<M.length;ue++)if(ue>=A.length){A.push(oe),Se=ue;break}else if(A[ue]===null){A[ue]=oe,Se=ue;break}if(Se===-1)break}const me=M[Se];me&&me.connect(oe)}}const V=new w,j=new w;function k(H,re,oe){V.setFromMatrixPosition(re.matrixWorld),j.setFromMatrixPosition(oe.matrixWorld);const Se=V.distanceTo(j),me=re.projectionMatrix.elements,ue=oe.projectionMatrix.elements,Ge=me[14]/(me[10]-1),Ce=me[14]/(me[10]+1),D=(me[9]+1)/me[5],at=(me[9]-1)/me[5],ve=(me[8]-1)/me[0],Ae=(ue[8]+1)/ue[0],fe=Ge*ve,ke=Ge*Ae,De=Se/(-ve+Ae),y=De*-ve;re.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(y),H.translateZ(De),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const v=Ge+De,I=Ce+De,J=fe-y,q=ke+(Se-y),Q=D*Ce/I*v,de=at*Ce/I*v;H.projectionMatrix.makePerspective(J,q,Q,de,v,I),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function X(H,re){re===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(re.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(a===null)return;x.texture!==null&&(H.near=x.depthNear,H.far=x.depthFar),g.near=F.near=R.near=H.near,g.far=F.far=R.far=H.far,(b!==g.near||G!==g.far)&&(a.updateRenderState({depthNear:g.near,depthFar:g.far}),b=g.near,G=g.far,R.near=b,R.far=G,F.near=b,F.far=G,R.updateProjectionMatrix(),F.updateProjectionMatrix(),H.updateProjectionMatrix());const re=H.parent,oe=g.cameras;X(g,re);for(let Se=0;Se<oe.length;Se++)X(oe[Se],re);oe.length===2?k(g,R,F):g.projectionMatrix.copy(R.projectionMatrix),ee(H,g,re)};function ee(H,re,oe){oe===null?H.matrix.copy(re.matrixWorld):(H.matrix.copy(oe.matrixWorld),H.matrix.invert(),H.matrix.multiply(re.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(re.projectionMatrix),H.projectionMatrixInverse.copy(re.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=qn*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(d===null&&m===null))return o},this.setFoveation=function(H){o=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null};let Z=null;function he(H,re){if(h=re.getViewerPose(c||l),_=re,h!==null){const oe=h.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let Se=!1;oe.length!==g.cameras.length&&(g.cameras.length=0,Se=!0);for(let ue=0;ue<oe.length;ue++){const Ge=oe[ue];let Ce=null;if(m!==null)Ce=m.getViewport(Ge);else{const at=f.getViewSubImage(d,Ge);Ce=at.viewport,ue===0&&(e.setRenderTargetTextures(T,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(T))}let D=W[ue];D===void 0&&(D=new kt,D.layers.enable(ue),D.viewport=new _t,W[ue]=D),D.matrix.fromArray(Ge.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Ge.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ue===0&&(g.matrix.copy(D.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),Se===!0&&g.cameras.push(D)}const me=a.enabledFeatures;if(me&&me.includes("depth-sensing")){const ue=f.getDepthInformation(oe[0]);ue&&ue.isValid&&ue.texture&&x.init(e,ue,a.renderState)}}for(let oe=0;oe<M.length;oe++){const Se=A[oe],me=M[oe];Se!==null&&me!==void 0&&me.update(Se,re,c||l)}x.render(e,g),Z&&Z(H,re),re.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:re}),_=null}const pe=new Ll;pe.setAnimationLoop(he),this.setAnimationLoop=function(H){Z=H},this.dispose=function(){}}}function im(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function r(p,u){u.color.getRGB(p.fogColor.value,wl(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function a(p,u,T,M,A){u.isMeshBasicMaterial||u.isMeshLambertMaterial?n(p,u):u.isMeshToonMaterial?(n(p,u),f(p,u)):u.isMeshPhongMaterial?(n(p,u),h(p,u)):u.isMeshStandardMaterial?(n(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,A)):u.isMeshMatcapMaterial?(n(p,u),_(p,u)):u.isMeshDepthMaterial?n(p,u):u.isMeshDistanceMaterial?(n(p,u),x(p,u)):u.isMeshNormalMaterial?n(p,u):u.isLineBasicMaterial?(l(p,u),u.isLineDashedMaterial&&s(p,u)):u.isPointsMaterial?o(p,u,T,M):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function n(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ct&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ct&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const T=e.get(u).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const M=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*M,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function s(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function o(p,u,T,M){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*T,p.scale.value=M*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,T){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ct&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const T=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function am(i,e,t,r){let a={},n={},l=[];const s=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function o(T,M){const A=M.program;r.uniformBlockBinding(T,A)}function c(T,M){let A=a[T.id];A===void 0&&(_(T),A=h(T),a[T.id]=A,T.addEventListener("dispose",p));const U=M.program;r.updateUBOMapping(T,U);const C=e.render.frame;n[T.id]!==C&&(d(T),n[T.id]=C)}function h(T){const M=f();T.__bindingPointIndex=M;const A=i.createBuffer(),U=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,U,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,A),A}function f(){for(let T=0;T<s;T++)if(l.indexOf(T)===-1)return l.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const M=a[T.id],A=T.uniforms,U=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let C=0,R=A.length;C<R;C++){const F=Array.isArray(A[C])?A[C]:[A[C]];for(let W=0,g=F.length;W<g;W++){const b=F[W];if(m(b,C,W,U)===!0){const G=b.__offset,$=Array.isArray(b.value)?b.value:[b.value];let L=0;for(let B=0;B<$.length;B++){const V=$[B],j=x(V);typeof V=="number"||typeof V=="boolean"?(b.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,G+L,b.__data)):V.isMatrix3?(b.__data[0]=V.elements[0],b.__data[1]=V.elements[1],b.__data[2]=V.elements[2],b.__data[3]=0,b.__data[4]=V.elements[3],b.__data[5]=V.elements[4],b.__data[6]=V.elements[5],b.__data[7]=0,b.__data[8]=V.elements[6],b.__data[9]=V.elements[7],b.__data[10]=V.elements[8],b.__data[11]=0):(V.toArray(b.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,M,A,U){const C=T.value,R=M+"_"+A;if(U[R]===void 0)return typeof C=="number"||typeof C=="boolean"?U[R]=C:U[R]=C.clone(),!0;{const F=U[R];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return U[R]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function _(T){const M=T.uniforms;let A=0;const U=16;for(let R=0,F=M.length;R<F;R++){const W=Array.isArray(M[R])?M[R]:[M[R]];for(let g=0,b=W.length;g<b;g++){const G=W[g],$=Array.isArray(G.value)?G.value:[G.value];for(let L=0,B=$.length;L<B;L++){const V=$[L],j=x(V),k=A%U;k!==0&&U-k<j.boundary&&(A+=U-k),G.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=A,A+=j.storage}}}const C=A%U;return C>0&&(A+=U-C),T.__size=A,T.__cache={},this}function x(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function p(T){const M=T.target;M.removeEventListener("dispose",p);const A=l.indexOf(M.__bindingPointIndex);l.splice(A,1),i.deleteBuffer(a[M.id]),delete a[M.id],delete n[M.id]}function u(){for(const T in a)i.deleteBuffer(a[T]);l=[],a={},n={}}return{bind:o,update:c,dispose:u}}class Fl{constructor(e={}){const{canvas:t=Zc(),context:r=null,depth:a=!0,stencil:n=!0,alpha:l=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;r!==null?d=r.getContextAttributes().alpha:d=l;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const u=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=Tr,this.toneMappingExposure=1;const M=this;let A=!1,U=0,C=0,R=null,F=-1,W=null;const g=new _t,b=new _t;let G=null;const $=new We(0);let L=0,B=t.width,V=t.height,j=1,k=null,X=null;const ee=new _t(0,0,B,V),Z=new _t(0,0,B,V);let he=!1;const pe=new Cl;let H=!1,re=!1,oe=null;const Se=new st,me=new Ve,ue=new w,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return R===null?j:1}let D=r;function at(S,P){for(let O=0;O<S.length;O++){const z=S[O],N=t.getContext(z,P);if(N!==null)return N}return null}try{const S={alpha:!0,depth:a,stencil:n,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$n}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",E,!1),t.addEventListener("webglcontextcreationerror",te,!1),D===null){const P=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&P.shift(),D=at(P,S),D===null)throw at(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ve,Ae,fe,ke,De,y,v,I,J,q,Q,de,se,le,Me,Ie,K,qe,Ue,Te,ge,ce,Pe,Xe;function He(){ve=new hp(D),Ae=new ap(D,ve,e),ve.init(Ae),ce=new Zf(D,ve,Ae),fe=new Yf(D,ve,Ae),ke=new pp(D),De=new If,y=new Kf(D,ve,fe,De,Ae,ce,ke),v=new sp(M),I=new cp(M),J=new Mh(D,Ae),Pe=new rp(D,ve,J,Ae),q=new up(D,J,ke,Pe),Q=new _p(D,q,J,ke),Ue=new gp(D,Ae,y),Ie=new np(De),de=new Uf(M,v,I,ve,Ae,Pe,Ie),se=new im(M,De),le=new Of,Me=new Hf(ve,Ae),qe=new tp(M,v,I,fe,Q,d,o),K=new qf(M,Q,Ae),Xe=new am(D,ke,Ae,fe),Te=new ip(D,ve,ke,Ae),ge=new dp(D,ve,ke,Ae),ke.programs=de.programs,M.capabilities=Ae,M.extensions=ve,M.properties=De,M.renderLists=le,M.shadowMap=K,M.state=fe,M.info=ke}He();const ze=new rm(M,D);this.xr=ze,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=ve.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ve.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(B,V,!1))},this.getSize=function(S){return S.set(B,V)},this.setSize=function(S,P,O=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,V=P,t.width=Math.floor(S*j),t.height=Math.floor(P*j),O===!0&&(t.style.width=S+"px",t.style.height=P+"px"),this.setViewport(0,0,S,P)},this.getDrawingBufferSize=function(S){return S.set(B*j,V*j).floor()},this.setDrawingBufferSize=function(S,P,O){B=S,V=P,j=O,t.width=Math.floor(S*O),t.height=Math.floor(P*O),this.setViewport(0,0,S,P)},this.getCurrentViewport=function(S){return S.copy(g)},this.getViewport=function(S){return S.copy(ee)},this.setViewport=function(S,P,O,z){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,P,O,z),fe.viewport(g.copy(ee).multiplyScalar(j).floor())},this.getScissor=function(S){return S.copy(Z)},this.setScissor=function(S,P,O,z){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,P,O,z),fe.scissor(b.copy(Z).multiplyScalar(j).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(S){fe.setScissorTest(he=S)},this.setOpaqueSort=function(S){k=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(S=!0,P=!0,O=!0){let z=0;if(S){let N=!1;if(R!==null){const ne=R.texture.format;N=ne===pl||ne===dl||ne===ul}if(N){const ne=R.texture.type,_e=ne===br||ne===Mr||ne===es||ne===Hr||ne===cl||ne===hl,ye=qe.getClearColor(),Re=qe.getClearAlpha(),Fe=ye.r,Le=ye.g,be=ye.b;_e?(m[0]=Fe,m[1]=Le,m[2]=be,m[3]=Re,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Fe,_[1]=Le,_[2]=be,_[3]=Re,D.clearBufferiv(D.COLOR,0,_))}else z|=D.COLOR_BUFFER_BIT}P&&(z|=D.DEPTH_BUFFER_BIT),O&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",E,!1),t.removeEventListener("webglcontextcreationerror",te,!1),le.dispose(),Me.dispose(),De.dispose(),v.dispose(),I.dispose(),Q.dispose(),Pe.dispose(),Xe.dispose(),de.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",vt),ze.removeEventListener("sessionend",Ze),oe&&(oe.dispose(),oe=null),mt.stop()};function Ye(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function E(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=ke.autoReset,P=K.enabled,O=K.autoUpdate,z=K.needsUpdate,N=K.type;He(),ke.autoReset=S,K.enabled=P,K.autoUpdate=O,K.needsUpdate=z,K.type=N}function te(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Y(S){const P=S.target;P.removeEventListener("dispose",Y),Ee(P)}function Ee(S){xe(S),De.remove(S)}function xe(S){const P=De.get(S).programs;P!==void 0&&(P.forEach(function(O){de.releaseProgram(O)}),S.isShaderMaterial&&de.releaseShaderCache(S))}this.renderBufferDirect=function(S,P,O,z,N,ne){P===null&&(P=Ge);const _e=N.isMesh&&N.matrixWorld.determinant()<0,ye=qt(S,P,O,z,N);fe.setMaterial(z,_e);let Re=O.index,Fe=1;if(z.wireframe===!0){if(Re=q.getWireframeAttribute(O),Re===void 0)return;Fe=2}const Le=O.drawRange,be=O.attributes.position;let pt=Le.start*Fe,it=(Le.start+Le.count)*Fe;ne!==null&&(pt=Math.max(pt,ne.start*Fe),it=Math.min(it,(ne.start+ne.count)*Fe)),Re!==null?(pt=Math.max(pt,0),it=Math.min(it,Re.count)):be!=null&&(pt=Math.max(pt,0),it=Math.min(it,be.count));const bt=it-pt;if(bt<0||bt===1/0)return;Pe.setup(N,z,ye,O,Re);let Pt,rt=Te;if(Re!==null&&(Pt=J.get(Re),rt=ge,rt.setIndex(Pt)),N.isMesh)z.wireframe===!0?(fe.setLineWidth(z.wireframeLinewidth*Ce()),rt.setMode(D.LINES)):rt.setMode(D.TRIANGLES);else if(N.isLine){let Ne=z.linewidth;Ne===void 0&&(Ne=1),fe.setLineWidth(Ne*Ce()),N.isLineSegments?rt.setMode(D.LINES):N.isLineLoop?rt.setMode(D.LINE_LOOP):rt.setMode(D.LINE_STRIP)}else N.isPoints?rt.setMode(D.POINTS):N.isSprite&&rt.setMode(D.TRIANGLES);if(N.isBatchedMesh)rt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)rt.renderInstances(pt,bt,N.count);else if(O.isInstancedBufferGeometry){const Ne=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Jt=Math.min(O.instanceCount,Ne);rt.renderInstances(pt,bt,Jt)}else rt.render(pt,bt)};function je(S,P,O){S.transparent===!0&&S.side===ar&&S.forceSinglePass===!1?(S.side=Ct,S.needsUpdate=!0,Kr(S,P,O),S.side=Ar,S.needsUpdate=!0,Kr(S,P,O),S.side=ar):Kr(S,P,O)}this.compile=function(S,P,O=null){O===null&&(O=S),p=Me.get(O),p.init(),T.push(p),O.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==O&&S.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(M._useLegacyLights);const z=new Set;return S.traverse(function(N){const ne=N.material;if(ne)if(Array.isArray(ne))for(let _e=0;_e<ne.length;_e++){const ye=ne[_e];je(ye,O,N),z.add(ye)}else je(ne,O,N),z.add(ne)}),T.pop(),p=null,z},this.compileAsync=function(S,P,O=null){const z=this.compile(S,P,O);return new Promise(N=>{function ne(){if(z.forEach(function(_e){De.get(_e).currentProgram.isReady()&&z.delete(_e)}),z.size===0){N(S);return}setTimeout(ne,10)}ve.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Ke=null;function ot(S){Ke&&Ke(S)}function vt(){mt.stop()}function Ze(){mt.start()}const mt=new Ll;mt.setAnimationLoop(ot),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(S){Ke=S,ze.setAnimationLoop(S),S===null?mt.stop():mt.start()},ze.addEventListener("sessionstart",vt),ze.addEventListener("sessionend",Ze),this.render=function(S,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(P),P=ze.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,P,R),p=Me.get(S,T.length),p.init(),T.push(p),Se.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),pe.setFromProjectionMatrix(Se),re=this.localClippingEnabled,H=Ie.init(this.clippingPlanes,re),x=le.get(S,u.length),x.init(),u.push(x),It(S,P,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(k,X),this.info.render.frame++,H===!0&&Ie.beginShadows();const O=p.state.shadowsArray;if(K.render(O,S,P),H===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1)&&qe.render(x,S),p.setupLights(M._useLegacyLights),P.isArrayCamera){const z=P.cameras;for(let N=0,ne=z.length;N<ne;N++){const _e=z[N];Ji(x,S,_e,_e.viewport)}}else Ji(x,S,P);R!==null&&(y.updateMultisampleRenderTarget(R),y.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(M,S,P),Pe.resetDefaultState(),F=-1,W=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function It(S,P,O,z){if(S.visible===!1)return;if(S.layers.test(P.layers)){if(S.isGroup)O=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(P);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||pe.intersectsSprite(S)){z&&ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Se);const ne=Q.update(S),_e=S.material;_e.visible&&x.push(S,ne,_e,O,ue.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||pe.intersectsObject(S))){const ne=Q.update(S),_e=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ue.copy(S.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),ue.copy(ne.boundingSphere.center)),ue.applyMatrix4(S.matrixWorld).applyMatrix4(Se)),Array.isArray(_e)){const ye=ne.groups;for(let Re=0,Fe=ye.length;Re<Fe;Re++){const Le=ye[Re],be=_e[Le.materialIndex];be&&be.visible&&x.push(S,ne,be,O,ue.z,Le)}}else _e.visible&&x.push(S,ne,_e,O,ue.z,null)}}const N=S.children;for(let ne=0,_e=N.length;ne<_e;ne++)It(N[ne],P,O,z)}function Ji(S,P,O,z){const N=S.opaque,ne=S.transmissive,_e=S.transparent;p.setupLightsView(O),H===!0&&Ie.setGlobalState(M.clippingPlanes,O),ne.length>0&&Ja(N,ne,P,O),z&&fe.viewport(g.copy(z)),N.length>0&&Yr(N,P,O),ne.length>0&&Yr(ne,P,O),_e.length>0&&Yr(_e,P,O),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Ja(S,P,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const N=Ae.isWebGL2;oe===null&&(oe=new jr(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?ki:br,minFilter:Gr,samples:N?4:0})),M.getDrawingBufferSize(me),N?oe.setSize(me.x,me.y):oe.setSize(Yn(me.x),Yn(me.y));const ne=M.getRenderTarget();M.setRenderTarget(oe),M.getClearColor($),L=M.getClearAlpha(),L<1&&M.setClearColor(16777215,.5),M.clear();const _e=M.toneMapping;M.toneMapping=Tr,Yr(S,O,z),y.updateMultisampleRenderTarget(oe),y.updateRenderTargetMipmap(oe);let ye=!1;for(let Re=0,Fe=P.length;Re<Fe;Re++){const Le=P[Re],be=Le.object,pt=Le.geometry,it=Le.material,bt=Le.group;if(it.side===ar&&be.layers.test(z.layers)){const Pt=it.side;it.side=Ct,it.needsUpdate=!0,Qi(be,O,z,pt,it,bt),it.side=Pt,it.needsUpdate=!0,ye=!0}}ye===!0&&(y.updateMultisampleRenderTarget(oe),y.updateRenderTargetMipmap(oe)),M.setRenderTarget(ne),M.setClearColor($,L),M.toneMapping=_e}function Yr(S,P,O){const z=P.isScene===!0?P.overrideMaterial:null;for(let N=0,ne=S.length;N<ne;N++){const _e=S[N],ye=_e.object,Re=_e.geometry,Fe=z===null?_e.material:z,Le=_e.group;ye.layers.test(O.layers)&&Qi(ye,P,O,Re,Fe,Le)}}function Qi(S,P,O,z,N,ne){S.onBeforeRender(M,P,O,z,N,ne),S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(M,P,O,z,S,ne),N.transparent===!0&&N.side===ar&&N.forceSinglePass===!1?(N.side=Ct,N.needsUpdate=!0,M.renderBufferDirect(O,P,z,N,S,ne),N.side=Ar,N.needsUpdate=!0,M.renderBufferDirect(O,P,z,N,S,ne),N.side=ar):M.renderBufferDirect(O,P,z,N,S,ne),S.onAfterRender(M,P,O,z,N,ne)}function Kr(S,P,O){P.isScene!==!0&&(P=Ge);const z=De.get(S),N=p.state.lights,ne=p.state.shadowsArray,_e=N.state.version,ye=de.getParameters(S,N.state,ne,P,O),Re=de.getProgramCacheKey(ye);let Fe=z.programs;z.environment=S.isMeshStandardMaterial?P.environment:null,z.fog=P.fog,z.envMap=(S.isMeshStandardMaterial?I:v).get(S.envMap||z.environment),Fe===void 0&&(S.addEventListener("dispose",Y),Fe=new Map,z.programs=Fe);let Le=Fe.get(Re);if(Le!==void 0){if(z.currentProgram===Le&&z.lightsStateVersion===_e)return Cr(S,ye),Le}else ye.uniforms=de.getUniforms(S),S.onBuild(O,ye,M),S.onBeforeCompile(ye,M),Le=de.acquireProgram(ye,Re),Fe.set(Re,Le),z.uniforms=ye.uniforms;const be=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(be.clippingPlanes=Ie.uniform),Cr(S,ye),z.needsLights=$a(S),z.lightsStateVersion=_e,z.needsLights&&(be.ambientLightColor.value=N.state.ambient,be.lightProbe.value=N.state.probe,be.directionalLights.value=N.state.directional,be.directionalLightShadows.value=N.state.directionalShadow,be.spotLights.value=N.state.spot,be.spotLightShadows.value=N.state.spotShadow,be.rectAreaLights.value=N.state.rectArea,be.ltc_1.value=N.state.rectAreaLTC1,be.ltc_2.value=N.state.rectAreaLTC2,be.pointLights.value=N.state.point,be.pointLightShadows.value=N.state.pointShadow,be.hemisphereLights.value=N.state.hemi,be.directionalShadowMap.value=N.state.directionalShadowMap,be.directionalShadowMatrix.value=N.state.directionalShadowMatrix,be.spotShadowMap.value=N.state.spotShadowMap,be.spotLightMatrix.value=N.state.spotLightMatrix,be.spotLightMap.value=N.state.spotLightMap,be.pointShadowMap.value=N.state.pointShadowMap,be.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Le,z.uniformsList=null,Le}function $i(S){if(S.uniformsList===null){const P=S.currentProgram.getUniforms();S.uniformsList=Ua.seqWithValue(P.seq,S.uniforms)}return S.uniformsList}function Cr(S,P){const O=De.get(S);O.outputColorSpace=P.outputColorSpace,O.batching=P.batching,O.instancing=P.instancing,O.instancingColor=P.instancingColor,O.skinning=P.skinning,O.morphTargets=P.morphTargets,O.morphNormals=P.morphNormals,O.morphColors=P.morphColors,O.morphTargetsCount=P.morphTargetsCount,O.numClippingPlanes=P.numClippingPlanes,O.numIntersection=P.numClipIntersection,O.vertexAlphas=P.vertexAlphas,O.vertexTangents=P.vertexTangents,O.toneMapping=P.toneMapping}function qt(S,P,O,z,N){P.isScene!==!0&&(P=Ge),y.resetTextureUnits();const ne=P.fog,_e=z.isMeshStandardMaterial?P.environment:null,ye=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ur,Re=(z.isMeshStandardMaterial?I:v).get(z.envMap||_e),Fe=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Le=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),be=!!O.morphAttributes.position,pt=!!O.morphAttributes.normal,it=!!O.morphAttributes.color;let bt=Tr;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(bt=M.toneMapping);const Pt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,rt=Pt!==void 0?Pt.length:0,Ne=De.get(z),Jt=p.state.lights;if(H===!0&&(re===!0||S!==W)){const Nt=S===W&&z.id===F;Ie.setState(z,S,Nt)}let Zr=!1;z.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Jt.state.version||Ne.outputColorSpace!==ye||N.isBatchedMesh&&Ne.batching===!1||!N.isBatchedMesh&&Ne.batching===!0||N.isInstancedMesh&&Ne.instancing===!1||!N.isInstancedMesh&&Ne.instancing===!0||N.isSkinnedMesh&&Ne.skinning===!1||!N.isSkinnedMesh&&Ne.skinning===!0||N.isInstancedMesh&&Ne.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ne.instancingColor===!1&&N.instanceColor!==null||Ne.envMap!==Re||z.fog===!0&&Ne.fog!==ne||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Ie.numPlanes||Ne.numIntersection!==Ie.numIntersection)||Ne.vertexAlphas!==Fe||Ne.vertexTangents!==Le||Ne.morphTargets!==be||Ne.morphNormals!==pt||Ne.morphColors!==it||Ne.toneMapping!==bt||Ae.isWebGL2===!0&&Ne.morphTargetsCount!==rt)&&(Zr=!0):(Zr=!0,Ne.__version=z.version);let Yt=Ne.currentProgram;Zr===!0&&(Yt=Kr(z,P,N));let ea=!1,dr=!1,Pi=!1;const $e=Yt.getUniforms(),Lr=Ne.uniforms;if(fe.useProgram(Yt.program)&&(ea=!0,dr=!0,Pi=!0),z.id!==F&&(F=z.id,dr=!0),ea||W!==S){$e.setValue(D,"projectionMatrix",S.projectionMatrix),$e.setValue(D,"viewMatrix",S.matrixWorldInverse);const Nt=$e.map.cameraPosition;Nt!==void 0&&Nt.setValue(D,ue.setFromMatrixPosition(S.matrixWorld)),Ae.logarithmicDepthBuffer&&$e.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&$e.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),W!==S&&(W=S,dr=!0,Pi=!0)}if(N.isSkinnedMesh){$e.setOptional(D,N,"bindMatrix"),$e.setOptional(D,N,"bindMatrixInverse");const Nt=N.skeleton;Nt&&(Ae.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),$e.setValue(D,"boneTexture",Nt.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&($e.setOptional(D,N,"batchingTexture"),$e.setValue(D,"batchingTexture",N._matricesTexture,y));const en=O.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0&&Ae.isWebGL2===!0)&&Ue.update(N,O,Yt),(dr||Ne.receiveShadow!==N.receiveShadow)&&(Ne.receiveShadow=N.receiveShadow,$e.setValue(D,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Lr.envMap.value=Re,Lr.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),dr&&($e.setValue(D,"toneMappingExposure",M.toneMappingExposure),Ne.needsLights&&Qa(Lr,Pi),ne&&z.fog===!0&&se.refreshFogUniforms(Lr,ne),se.refreshMaterialUniforms(Lr,z,j,V,oe),Ua.upload(D,$i(Ne),Lr,y)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ua.upload(D,$i(Ne),Lr,y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&$e.setValue(D,"center",N.center),$e.setValue(D,"modelViewMatrix",N.modelViewMatrix),$e.setValue(D,"normalMatrix",N.normalMatrix),$e.setValue(D,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Nt=z.uniformsGroups;for(let tn=0,Kl=Nt.length;tn<Kl;tn++)if(Ae.isWebGL2){const os=Nt[tn];Xe.update(os,Yt),Xe.bind(os,Yt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yt}function Qa(S,P){S.ambientLightColor.needsUpdate=P,S.lightProbe.needsUpdate=P,S.directionalLights.needsUpdate=P,S.directionalLightShadows.needsUpdate=P,S.pointLights.needsUpdate=P,S.pointLightShadows.needsUpdate=P,S.spotLights.needsUpdate=P,S.spotLightShadows.needsUpdate=P,S.rectAreaLights.needsUpdate=P,S.hemisphereLights.needsUpdate=P}function $a(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,P,O){De.get(S.texture).__webglTexture=P,De.get(S.depthTexture).__webglTexture=O;const z=De.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,P){const O=De.get(S);O.__webglFramebuffer=P,O.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(S,P=0,O=0){R=S,U=P,C=O;let z=!0,N=null,ne=!1,_e=!1;if(S){const ye=De.get(S);ye.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(D.FRAMEBUFFER,null),z=!1):ye.__webglFramebuffer===void 0?y.setupRenderTarget(S):ye.__hasExternalTextures&&y.rebindTextures(S,De.get(S.texture).__webglTexture,De.get(S.depthTexture).__webglTexture);const Re=S.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(_e=!0);const Fe=De.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Fe[P])?N=Fe[P][O]:N=Fe[P],ne=!0):Ae.isWebGL2&&S.samples>0&&y.useMultisampledRTT(S)===!1?N=De.get(S).__webglMultisampledFramebuffer:Array.isArray(Fe)?N=Fe[O]:N=Fe,g.copy(S.viewport),b.copy(S.scissor),G=S.scissorTest}else g.copy(ee).multiplyScalar(j).floor(),b.copy(Z).multiplyScalar(j).floor(),G=he;if(fe.bindFramebuffer(D.FRAMEBUFFER,N)&&Ae.drawBuffers&&z&&fe.drawBuffers(S,N),fe.viewport(g),fe.scissor(b),fe.setScissorTest(G),ne){const ye=De.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,ye.__webglTexture,O)}else if(_e){const ye=De.get(S.texture),Re=P||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.__webglTexture,O||0,Re)}F=-1},this.readRenderTargetPixels=function(S,P,O,z,N,ne,_e){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=De.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye){fe.bindFramebuffer(D.FRAMEBUFFER,ye);try{const Re=S.texture,Fe=Re.format,Le=Re.type;if(Fe!==Xt&&ce.convert(Fe)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const be=Le===ki&&(ve.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Le!==br&&ce.convert(Le)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===nr&&(Ae.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=S.width-z&&O>=0&&O<=S.height-N&&D.readPixels(P,O,z,N,ce.convert(Fe),ce.convert(Le),ne)}finally{const Re=R!==null?De.get(R).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(S,P,O=0){const z=Math.pow(2,-O),N=Math.floor(P.image.width*z),ne=Math.floor(P.image.height*z);y.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,O,0,0,S.x,S.y,N,ne),fe.unbindTexture()},this.copyTextureToTexture=function(S,P,O,z=0){const N=P.image.width,ne=P.image.height,_e=ce.convert(O.format),ye=ce.convert(O.type);y.setTexture2D(O,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment),P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,S.x,S.y,N,ne,_e,ye,P.image.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,S.x,S.y,P.mipmaps[0].width,P.mipmaps[0].height,_e,P.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,z,S.x,S.y,_e,ye,P.image),z===0&&O.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(S,P,O,z,N=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ne=S.max.x-S.min.x+1,_e=S.max.y-S.min.y+1,ye=S.max.z-S.min.z+1,Re=ce.convert(z.format),Fe=ce.convert(z.type);let Le;if(z.isData3DTexture)y.setTexture3D(z,0),Le=D.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)y.setTexture2DArray(z,0),Le=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const be=D.getParameter(D.UNPACK_ROW_LENGTH),pt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),it=D.getParameter(D.UNPACK_SKIP_PIXELS),bt=D.getParameter(D.UNPACK_SKIP_ROWS),Pt=D.getParameter(D.UNPACK_SKIP_IMAGES),rt=O.isCompressedTexture?O.mipmaps[N]:O.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,rt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,S.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,S.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,S.min.z),O.isDataTexture||O.isData3DTexture?D.texSubImage3D(Le,N,P.x,P.y,P.z,ne,_e,ye,Re,Fe,rt.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Le,N,P.x,P.y,P.z,ne,_e,ye,Re,rt.data)):D.texSubImage3D(Le,N,P.x,P.y,P.z,ne,_e,ye,Re,Fe,rt),D.pixelStorei(D.UNPACK_ROW_LENGTH,be),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,it),D.pixelStorei(D.UNPACK_SKIP_ROWS,bt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pt),N===0&&z.generateMipmaps&&D.generateMipmap(Le),fe.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?y.setTextureCube(S,0):S.isData3DTexture?y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?y.setTexture2DArray(S,0):y.setTexture2D(S,0),fe.unbindTexture()},this.resetState=function(){U=0,C=0,R=null,fe.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ts?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===Ya?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?Wr:ml}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wr?gt:ur}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class nm extends Fl{}nm.prototype.isWebGL1Renderer=!0;class sm extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class om{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xn,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Xr("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let a=0,n=this.stride;a<n;a++)this.array[e+a]=t.array[r+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const yt=new w;class ka{constructor(e,t,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Zt(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Je(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zt(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),r=Je(r,this.array),a=Je(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,t,r,a,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),r=Je(r,this.array),a=Je(a,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=n,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[a+n])}return new ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ka(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Bl extends qr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let pi;const zi=new w,fi=new w,mi=new w,gi=new Ve,Fi=new Ve,Gl=new st,Ea=new w,Bi=new w,Ta=new w,Co=new Ve,In=new Ve,Lo=new Ve;class lm extends Mt{constructor(e=new Bl){if(super(),this.isSprite=!0,this.type="Sprite",pi===void 0){pi=new Lt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new om(t,5);pi.setIndex([0,1,2,0,2,3]),pi.setAttribute("position",new ka(r,3,0,!1)),pi.setAttribute("uv",new ka(r,2,3,!1))}this.geometry=pi,this.material=e,this.center=new Ve(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fi.setFromMatrixScale(this.matrixWorld),Gl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fi.multiplyScalar(-mi.z);const r=this.material.rotation;let a,n;r!==0&&(n=Math.cos(r),a=Math.sin(r));const l=this.center;ba(Ea.set(-.5,-.5,0),mi,l,fi,a,n),ba(Bi.set(.5,-.5,0),mi,l,fi,a,n),ba(Ta.set(.5,.5,0),mi,l,fi,a,n),Co.set(0,0),In.set(1,0),Lo.set(1,1);let s=e.ray.intersectTriangle(Ea,Bi,Ta,!1,zi);if(s===null&&(ba(Bi.set(-.5,.5,0),mi,l,fi,a,n),In.set(0,1),s=e.ray.intersectTriangle(Ea,Ta,Bi,!1,zi),s===null))return;const o=e.ray.origin.distanceTo(zi);o<e.near||o>e.far||t.push({distance:o,point:zi.clone(),uv:jt.getInterpolation(zi,Ea,Bi,Ta,Co,In,Lo,new Ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ba(i,e,t,r,a,n){gi.subVectors(i,t).addScalar(.5).multiply(r),a!==void 0?(Fi.x=n*gi.x-a*gi.y,Fi.y=a*gi.x+n*gi.y):Fi.copy(gi),i.copy(e),i.x+=Fi.x,i.y+=Fi.y,i.applyMatrix4(Gl)}class Vl extends qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Po=new w,Do=new w,Uo=new st,Nn=new rs,wa=new qi;class cm extends Mt{constructor(e=new Lt,t=new Vl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,n=t.count;a<n;a++)Po.fromBufferAttribute(t,a-1),Do.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=Po.distanceTo(Do);e.setAttribute("lineDistance",new hr(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,n=e.params.Line.threshold,l=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),wa.copy(r.boundingSphere),wa.applyMatrix4(a),wa.radius+=n,e.ray.intersectsSphere(wa)===!1)return;Uo.copy(a).invert(),Nn.copy(e.ray).applyMatrix4(Uo);const s=n/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,c=new w,h=new w,f=new w,d=new w,m=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const p=Math.max(0,l.start),u=Math.min(_.count,l.start+l.count);for(let T=p,M=u-1;T<M;T+=m){const A=_.getX(T),U=_.getX(T+1);if(c.fromBufferAttribute(x,A),h.fromBufferAttribute(x,U),Nn.distanceSqToSegment(c,h,d,f)>o)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,l.start),u=Math.min(x.count,l.start+l.count);for(let T=p,M=u-1;T<M;T+=m){if(c.fromBufferAttribute(x,T),h.fromBufferAttribute(x,T+1),Nn.distanceSqToSegment(c,h,d,f)>o)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=r.length;a<n;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}const Io=new w,No=new w;class hm extends cm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,n=t.count;a<n;a+=2)Io.fromBufferAttribute(t,a),No.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Io.distanceTo(No);e.setAttribute("lineDistance",new hr(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wi extends qr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Oo=new st,Zn=new rs,Aa=new qi,Ra=new w;class Wa extends Mt{constructor(e=new Lt,t=new Wi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,n=e.params.Points.threshold,l=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Aa.copy(r.boundingSphere),Aa.applyMatrix4(a),Aa.radius+=n,e.ray.intersectsSphere(Aa)===!1)return;Oo.copy(a).invert(),Zn.copy(e.ray).applyMatrix4(Oo);const s=n/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,c=r.index,h=r.attributes.position;if(c!==null){const f=Math.max(0,l.start),d=Math.min(c.count,l.start+l.count);for(let m=f,_=d;m<_;m++){const x=c.getX(m);Ra.fromBufferAttribute(h,x),zo(Ra,x,o,a,e,t,this)}}else{const f=Math.max(0,l.start),d=Math.min(h.count,l.start+l.count);for(let m=f,_=d;m<_;m++)Ra.fromBufferAttribute(h,m),zo(Ra,m,o,a,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=r.length;a<n;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function zo(i,e,t,r,a,n,l){const s=Zn.distanceSqToPoint(i);if(s<t){const o=new w;Zn.closestPointToPoint(i,o),o.applyMatrix4(r);const c=a.ray.origin.distanceTo(o);if(c<a.near||c>a.far)return;n.push({distance:c,distanceToRay:Math.sqrt(s),point:o,index:e,face:null,object:l})}}class Hl extends Tt{constructor(e,t,r,a,n,l,s,o,c){super(e,t,r,a,n,l,s,o,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class um{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Fo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Fo(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$n}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$n);const as=document.querySelector("#canvas"),Zi=new Fl({canvas:as,antialias:!1});Zi.setPixelRatio(1);Zi.setSize(window.innerWidth,window.innerHeight);Zi.setClearColor(0,1);const Ft=new sm,Xa=(()=>{const i=document.createElement("canvas");i.width=64,i.height=64;const e=i.getContext("2d"),t=64/2,r=e.createRadialGradient(t,t,0,t,t,t);r.addColorStop(0,"rgba(255, 255, 255, 1)"),r.addColorStop(.25,"rgba(255, 255, 255, 1)"),r.addColorStop(.45,"rgba(255, 255, 255, 0.7)"),r.addColorStop(.6,"rgba(255, 255, 255, 0.25)"),r.addColorStop(.7,"rgba(255, 255, 255, 0)"),e.fillStyle=r,e.fillRect(0,0,64,64);const a=new Hl(i);return a.minFilter=ct,a.magFilter=ct,a.generateMipmaps=!1,a})(),dm=(()=>{const i=document.createElement("canvas");i.width=64,i.height=64;const e=i.getContext("2d"),t=64/2;e.clearRect(0,0,64,64),e.strokeStyle="rgba(255, 255, 255, 1)",e.lineWidth=2.6,e.lineCap="round",e.shadowColor="rgba(255, 255, 255, 0.9)",e.shadowBlur=10,[[0,-13,0,13],[-11,-5,11,5],[-7,9,7,-9],[-4,-12,8,-3],[-10,2,10,-2]].forEach(([a,n,l,s])=>{e.beginPath(),e.moveTo(t+a,t+n),e.lineTo(t+l,t+s),e.stroke()});const r=new Hl(i);return r.minFilter=ct,r.magFilter=ct,r.generateMipmaps=!1,r})();let lr=window.innerWidth,cr=window.innerHeight;const Sr=new Pl(-lr/2,lr/2,cr/2,-cr/2,.1,1e3);Sr.position.z=200;const pm=new um,On=new w(0,-96,0);let Xi=0,Ia="",Ca=!0;const Na=[],Oa=[],Vi=[],Mi=[],fm=33.777331,mm=.85,gm=28.82666475,_m=.5265,vm=.8,xm=1.0625,Sm=1.75,Mm=.3,ym=.9,Em=3.6,Tm=1.4,bm=.175,wm=2.6,Am=1.2,Rm=1.1,Cm=[5,9],Lm=.25,Bo=1,Pm=.25,Dm=[.6,.9],Um=[220,380],La=[-18,18],Im=2.4,Nm=[.7,1.4],Om=3,zm=[.85,1.2],Fm=1.6,Go=.08,Vo=[18,28],Bm=[.45,.65],Gm=[.35,.85],Vm=[1.05,1.45],Hm=1.4,km=.15,Wm=.55,Xm=.16,jm=24,Pa=.06,qm=.65,Ho=[2,4],Ym=[.05,.18],ko=[30,120],Km=.65,Wo=.7,Zm=.45,Jm=1.45,Qm=3,$m=1,eg=.3,tg=[.02,.06],rg=.1,ig=.15,ag=[.01,.03],ng=.04,sg=.1,og=.01,lg=.02,cg=2,hg=1.35,ug=1.35,dg=1.35,pg=1.25,fg=1.6,mg=1.4,gg=18,_g=1.4,Xo=[.98,1],jo=[.62,.72],vg=3,xg=.5,Sg=.15,Mg=.7,yg=3,Eg=1.15,Tg=1.1,Hi=1.25,bg=.4,wg=2.8,Ag=1.35,Rg=2.6,Cg=.8,Lg=.33,Pg=1.5,Dg=2.5,Ug=.55,Ig=2.5,Ng=.4,Og=4,zg=.5,Fg=100,Bg=1,Gg=.35,Vg=.35,Hg=[8,18],kg=[5,12],Wg=.85,Xg=[16,30],jg=[9,18],qg=.15,Yg=[18,30],Kg=[10,18],Zg=.5,Jg=.45,Qg=[48,72],$g=1.35,e_=.85,t_=1.1,r_=.6,i_=.01,a_=.35,n_=[50,75],s_=1.1,o_=1.4,l_=1.6,c_=1.3,h_=.02,u_=1.4,d_=.15,p_=3,f_=1.25,m_=.85,g_=.1,__=5,v_=1.6,x_=2,S_=2.5,M_=1.4,y_=.9,E_=2.6,T_=5,b_=.7,w_=.03,A_=.15,R_=5,C_=1.2,L_=.24,P_=.4,D_=.4,U_=.5,I_=.2,N_=.6,O_=1.4,z_=[1.15,1.8],F_=1.6,B_=.0165,G_=.6,qo=1,V_=20,H_=1,k_=1.35,W_=1.04,X_=.55,j_=2.4,q_=4.6,Y_=.85,K_=1.6,Z_=1.35,J_=.5,Q_=.03,$_=.392,ev=.1,tv=[6,14],rv=[1.2,2.4],_i=.6,iv=.02,av=50,nv=4.5,sv=6,ov=.3,lv=[{name:"zigzag",strength:[8,16],speed:[6,12]},{name:"corkscrew",strength:[6,12],speed:[6,10]},{name:"flutter",strength:[4,10],speed:[8,14]}],cv=.1875,hv=[20,36],uv=[.006,.012],dv=[.8,1.6],pv=14,fv=12,mv=5.2,gv=.2,_v=1.8,vv=[{name:"tight",strength:1.4,scale:1.5,speed:1.2,twist:1.6},{name:"loose",strength:1.1,scale:1,speed:.85,twist:1.2},{name:"snaking",strength:1.8,scale:1.9,speed:1.35,twist:2},{name:"whirl",strength:2.2,scale:2.3,speed:1.6,twist:2.6}],xv=1.4,Sv=.02,Mv=.35,yv=12,Ev=1.6,Tv=[22,34],bv=1.4,wv=1.2,Av=1.1,Rv=1.2,Cv=[14,22],Yo=.18,kl=1.9,Lv=.35,Pv=1.2,Dv=5.8,Uv=.8,Iv=1.2,Nv=[.35,4.2],Ov=.6,zv=.25,Fv=600,Bv=.8,Gv=.98,Vv=[.625,2.25],Hv=.7,Ko=.06,kv=.7,Wv=[.15,.75],zn=[.8,1.25],Xv=.3,jv=.3,qv=3,Yv=.8,Kv=.8,Zv=75,Wl=[0,1/12,1/6,1/3,1/2,2/3,5/6,11/12],Jv=[0,1/12,1/6,.5,7/12,2/3],Qv=Array.from({length:16},(i,e)=>e/16),$v=.7,e0="rosette",Zo=[90,180],t0=[80,180],r0=[1.2,2.1],i0=[3.2,6.2],a0=[.965,.99],n0={x:[-1.2,1.2],y:[-.8,.8],z:[-1.2,1.2]},s0=[1.1,2.2],o0=[1.05,1.4],l0=.12,c0=2.6,h0=[16,32],u0=[.5,.95],d0=[1,1.6],p0=.7,f0=[9,16],m0=1.45,g0=2.75,_0=1.35,v0=165,x0=1.35,S0=2.2,M0=.12,y0=1.7,E0=[12,22],T0=[4.5,7.5],b0=.65,w0=[.04,.08],A0=[5.5,9.5],R0=[14,28],C0=.35,L0=.2,P0=[.65,.9],D0=[1.6,2.3],U0=[.55,.8],I0=[1.4,2.1],N0=.7,O0=32,Jo=[.9,1],Qo=[.78,.92],$o=.08,z0=1.65,el=[2,4],tl=[4,12],F0=[.95,2],B0=[.6,1],G0=[.6,1.05],Vr=[{pattern:"burst",count:[180,360],radius:[90,220],life:[1.5,2.6],trailStretch:[1.8,4.4],drag:[.94,.985],drift:{x:[-2.2,2.2],y:[-1.6,1.6],z:[-2.2,2.2]},pointSize:[1.4,3],gravityScale:[.9,1.1],hueVariance:.1,trailBoost:2.1,curveStrength:[14,28],curveDecay:[.6,1.1],gravityRamp:[.8,1.4],spherical:!0},{pattern:"ring",count:[140,280],radius:[110,240],life:[1.4,2.2],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.4,2.8],gravityScale:[.8,1],hueVariance:.08,trailBoost:2,curveStrength:[12,24],curveDecay:[.6,1],gravityRamp:[.7,1.2],spherical:!0},{pattern:"fan",count:[120,260],radius:[90,210],life:[1.3,2.2],trailStretch:[1.8,4.6],drag:[.94,.98],drift:{x:[-2.6,2.6],y:[-1.4,1.4],z:[-2.6,2.6]},pointSize:[1.2,2.6],gravityScale:[1,1.25],hueVariance:.12},{pattern:"spiral",count:[180,360],radius:[100,230],life:[1.6,2.6],trailStretch:[2.2,4.8],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.8],gravityScale:[.85,1.1],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.5,1],gravityRamp:[.8,1.3],spherical:!0},{pattern:"palm",count:[120,260],radius:[100,220],life:[1.8,3],trailStretch:[2.8,5.6],drag:[.96,.99],drift:{x:[-1.4,1.4],y:[-1,1],z:[-1.4,1.4]},pointSize:[1.6,3],gravityScale:[1.1,1.45],hueVariance:.05},{pattern:"flower",count:[200,400],radius:[100,240],life:[1.5,2.6],trailStretch:[2.2,4.4],drag:[.95,.98],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.8,1.4],spherical:!0},{pattern:"sphere",count:[320,560],radius:[110,260],life:[1.6,2.8],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.15],hueVariance:.08,trailBoost:2.1,curveStrength:[10,22],curveDecay:[.7,1.2],gravityRamp:[.8,1.2],spherical:!0},{pattern:"dahlia",count:[300,520],radius:[110,260],life:[1.6,2.8],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.08,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.7,1.2],gravityRamp:[.9,1.3],spherical:!0},{pattern:"globe",count:[320,560],radius:[120,280],life:[1.6,2.8],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.15],hueVariance:.08,trailBoost:2.2,curveStrength:[10,22],curveDecay:[.7,1.2],gravityRamp:[.8,1.2],dotTrailChance:.5,dotTrailSamples:[7,12],spherical:!0},{pattern:"pearl",count:[300,520],radius:[120,270],life:[1.6,2.8],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.7,1.2],gravityRamp:[.9,1.3],dotTrailChance:.25,dotTrailSamples:[5,9],spherical:!0},{pattern:"shell",count:[320,560],radius:[120,280],life:[1.5,2.6],trailStretch:[2.2,5],drag:[.94,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2,curveStrength:[10,22],curveDecay:[.7,1.2],gravityRamp:[.8,1.2],dotTrailChance:.4,dotTrailSamples:[6,11],spherical:!0},{pattern:"orbital",count:[280,520],radius:[120,270],life:[1.6,2.8],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.08,trailBoost:2.3,curveStrength:[14,28],curveDecay:[.7,1.2],gravityRamp:[.9,1.3],dotTrailChance:.6,dotTrailSamples:[8,14],spherical:!0},{pattern:"bloom",count:[320,560],radius:[120,280],life:[1.6,2.8],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.08,trailBoost:2.3,curveStrength:[14,28],curveDecay:[.7,1.2],gravityRamp:[.9,1.3],dotTrailChance:.35,dotTrailSamples:[6,12],spherical:!0},{pattern:"cross",count:[120,240],radius:[90,210],life:[1.4,2.3],trailStretch:[2.4,5],drag:[.95,.985],drift:{x:[-1.4,1.4],y:[-1.2,1.2],z:[-1.4,1.4]},pointSize:[1.4,2.8],gravityScale:[.9,1.1],hueVariance:.08},{pattern:"cross",count:[120,240],radius:[90,210],life:[1.4,2.3],trailStretch:[2.4,5],drag:[.95,.985],drift:{x:[-1.4,1.4],y:[-1.2,1.2],z:[-1.4,1.4]},pointSize:[1.4,2.8],gravityScale:[.9,1.1],hueVariance:.08},{pattern:"comet",count:[80,180],radius:[120,260],life:[2,3.4],trailStretch:[3.2,6.8],drag:[.965,.99],drift:{x:[-2.4,2.4],y:[-1.4,1.4],z:[-2.4,2.4]},pointSize:[1.6,3.2],gravityScale:[1.1,1.5],hueVariance:.06,trailBoost:2.4,curveStrength:[16,30],curveDecay:[.4,.9],gravityRamp:[1,1.6]},{pattern:"crown",count:[140,260],radius:[90,220],life:[1.6,2.6],trailStretch:[2,4.6],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.4,2.8],gravityScale:[1,1.3],hueVariance:.08,trailBoost:1.9,curveStrength:[10,20],curveDecay:[.6,1],gravityRamp:[.7,1.2]},{pattern:"willow",count:[160,320],radius:[110,260],life:[2.2,3.6],trailStretch:[3,6.4],drag:[.965,.99],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.4,2.8],gravityScale:[1.2,1.6],hueVariance:.08,trailBoost:2.4,curveStrength:[18,36],curveDecay:[.4,.9],gravityRamp:[1.2,1.8]},{pattern:"star",count:[140,280],radius:[110,250],life:[1.5,2.6],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1,1],z:[-1.6,1.6]},pointSize:[1.4,2.8],gravityScale:[.95,1.2],hueVariance:.1,trailBoost:2,curveStrength:[10,22],curveDecay:[.6,1.1],gravityRamp:[.8,1.3]},{pattern:"wave",count:[160,320],radius:[120,260],life:[1.6,2.8],trailStretch:[2.6,5.4],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.6,1],gravityRamp:[.9,1.4]},{pattern:"scatter",count:[220,420],radius:[120,280],life:[1.4,2.4],trailStretch:[2.2,5],drag:[.94,.985],drift:{x:[-2.4,2.4],y:[-1.6,1.6],z:[-2.4,2.4]},pointSize:[1.3,2.6],gravityScale:[.9,1.15],hueVariance:.14},{pattern:"umbrella",count:[140,260],radius:[110,240],life:[1.6,2.8],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.4,2.8],gravityScale:[1,1.3],hueVariance:.08,trailBoost:2.1,curveStrength:[10,22],curveDecay:[.6,1],gravityRamp:[.9,1.4]},{pattern:"peony",count:[200,420],radius:[120,280],life:[1.6,2.8],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.4,2.8],gravityScale:[.9,1.15],hueVariance:.08,trailBoost:2.2,curveStrength:[12,26],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],spherical:!0},{pattern:"chrysanthemum",count:[180,360],radius:[120,270],life:[1.7,2.8],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.4,2.8],gravityScale:[.9,1.2],hueVariance:.08,trailBoost:2.3,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.4],spherical:!0},{pattern:"nova",count:[160,320],radius:[120,260],life:[1.5,2.6],trailStretch:[2.4,5],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.95,1.2],hueVariance:.1,trailBoost:2,curveStrength:[10,22],curveDecay:[.6,1.1],gravityRamp:[.8,1.3],spherical:!0},{pattern:"double",count:[140,280],radius:[120,260],life:[1.6,2.8],trailStretch:[2.4,5.6],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.4,2.8],gravityScale:[.95,1.2],hueVariance:.1,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.4]},{pattern:"fountain",count:[140,280],radius:[80,180],life:[1.4,2.4],trailStretch:[2.6,5.8],drag:[.95,.985],drift:{x:[-1.2,1.2],y:[-.8,.8],z:[-1.2,1.2]},pointSize:[1.4,2.8],gravityScale:[1.1,1.4],hueVariance:.12,trailBoost:2.5,curveStrength:[14,28],curveDecay:[.5,1],gravityRamp:[1,1.5]},{pattern:"cylinder",count:[180,360],radius:[110,250],life:[1.5,2.6],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2,curveStrength:[10,20],curveDecay:[.6,1],gravityRamp:[.8,1.2]},{pattern:"tornado",count:[160,300],radius:[110,240],life:[1.6,2.8],trailStretch:[2.8,5.6],drag:[.95,.985],drift:{x:[-2,2],y:[-1.2,1.2],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.95,1.25],hueVariance:.12,trailBoost:2.2,curveStrength:[14,26],curveDecay:[.5,1],gravityRamp:[1,1.4]},{pattern:"vortex",count:[160,320],radius:[110,260],life:[1.6,2.8],trailStretch:[2.6,5.4],drag:[.95,.985],drift:{x:[-2,2],y:[-1.2,1.2],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.1,curveStrength:[14,26],curveDecay:[.5,1],gravityRamp:[.9,1.3]},{pattern:"halo",count:[140,260],radius:[120,260],life:[1.4,2.4],trailStretch:[2.2,4.8],drag:[.95,.985],drift:{x:[-1.4,1.4],y:[-1,1],z:[-1.4,1.4]},pointSize:[1.3,2.6],gravityScale:[.85,1.1],hueVariance:.1,trailBoost:2,curveStrength:[10,22],curveDecay:[.6,1],gravityRamp:[.8,1.2],spherical:!0},{pattern:"sheaf",count:[140,260],radius:[110,230],life:[1.4,2.6],trailStretch:[2.6,5.4],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1,1],z:[-1.6,1.6]},pointSize:[1.3,2.6],gravityScale:[1,1.3],hueVariance:.12,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.5,1],gravityRamp:[.9,1.3]},{pattern:"pinwheel",count:[160,320],radius:[120,260],life:[1.6,2.8],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-2,2],y:[-1.2,1.2],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]},{pattern:"petal",count:[160,320],radius:[120,260],life:[1.6,2.8],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],spherical:!0},{pattern:"starburst",count:[180,360],radius:[120,280],life:[1.6,2.8],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],spherical:!0},{pattern:"ripple",count:[160,320],radius:[120,260],life:[1.6,2.8],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],spherical:!0},{pattern:"burstlet",count:[240,480],radius:[120,280],life:[1.4,2.4],trailStretch:[2,4.6],drag:[.94,.985],drift:{x:[-2.2,2.2],y:[-1.4,1.4],z:[-2.2,2.2]},pointSize:[1.3,2.6],gravityScale:[.9,1.15],hueVariance:.14,trailBoost:2,curveStrength:[10,22],curveDecay:[.6,1],gravityRamp:[.8,1.2]},{pattern:"saturn",count:[220,420],radius:[120,280],life:[1.6,2.8],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],spherical:!0},{pattern:"crossette",count:[180,360],radius:[110,250],life:[1.5,2.6],trailStretch:[2.2,5],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2,curveStrength:[10,22],curveDecay:[.6,1.1],gravityRamp:[.8,1.2]},{pattern:"spokes",count:[200,380],radius:[120,270],life:[1.5,2.6],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.1,curveStrength:[10,22],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]},{pattern:"helix",count:[180,360],radius:[120,260],life:[1.6,2.8],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-2,2],y:[-1.2,1.2],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]},{pattern:"crescent",count:[180,340],radius:[120,270],life:[1.5,2.7],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[10,22],curveDecay:[.6,1.1],gravityRamp:[.8,1.3]},{pattern:"diamond",count:[160,320],radius:[110,250],life:[1.4,2.5],trailStretch:[2.2,5],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.1,curveStrength:[10,22],curveDecay:[.6,1.1],gravityRamp:[.8,1.3]},{pattern:"lattice",count:[220,420],radius:[130,290],life:[1.6,2.9],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-2,2],y:[-1.2,1.2],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.3,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]},{pattern:"arcburst",count:[140,300],radius:[120,260],life:[1.5,2.7],trailStretch:[2.6,5.4],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,26],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],dotTrailChance:.4,dotTrailSamples:[6,12]},{pattern:"braid",count:[160,320],radius:[110,250],life:[1.6,2.8],trailStretch:[2.8,5.8],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.95,1.25],hueVariance:.12,trailBoost:2.3,curveStrength:[14,28],curveDecay:[.5,1],gravityRamp:[1,1.4]},{pattern:"lotus",count:[180,340],radius:[120,260],life:[1.5,2.7],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]},{pattern:"spire",count:[120,240],radius:[100,220],life:[1.6,2.8],trailStretch:[2.8,6.2],drag:[.955,.99],drift:{x:[-1.4,1.4],y:[-1,1],z:[-1.4,1.4]},pointSize:[1.3,2.6],gravityScale:[1,1.35],hueVariance:.08,trailBoost:2.4,curveStrength:[14,28],curveDecay:[.5,1],gravityRamp:[1,1.5]},{pattern:"fanwave",count:[160,320],radius:[120,260],life:[1.5,2.6],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.2,curveStrength:[12,26],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]},{pattern:"sparkburst",count:[24,48],radius:[35,70],life:[.7,1.2],trailStretch:[1.4,2.4],drag:[.94,.98],drift:{x:[-1.2,1.2],y:[-.8,.8],z:[-1.2,1.2]},pointSize:[1,2],gravityScale:[1,1.25],hueVariance:.08,trailBoost:1.4,curveStrength:[8,14],curveDecay:[.5,.9],gravityRamp:[1,1.3]},{pattern:"arcflower",count:[160,320],radius:[120,260],life:[1.5,2.7],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,26],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],dotTrailChance:.35,dotTrailSamples:[6,12],spherical:!0},{pattern:"lissajous",count:[180,360],radius:[120,270],life:[1.6,2.9],trailStretch:[2.6,5.8],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.3,curveStrength:[14,28],curveDecay:[.5,1],gravityRamp:[1,1.4]},{pattern:"crownburst",count:[140,280],radius:[110,240],life:[1.6,2.8],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.3,2.6],gravityScale:[1,1.35],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.5,1],gravityRamp:[1,1.5]},{pattern:"sprayburst",count:[140,280],radius:[110,240],life:[1.5,2.6],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[1,1.4],hueVariance:.12,trailBoost:2.1,curveStrength:[12,26],curveDecay:[.5,1],gravityRamp:[1,1.6]},{pattern:"ribbon",count:[160,320],radius:[120,260],life:[1.6,2.8],trailStretch:[2.6,5.4],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]}];function ie(i,e){return i+Math.random()*(e-i)}function tt(i,e){return Math.floor(ie(i,e+1))}function Rt(i){return i[Math.floor(Math.random()*i.length)]}function we(i){return ie(i[0],i[1])}function Da(){return new Ci().setFromEuler(new Yi(ie(0,Math.PI*2),ie(0,Math.PI*2),ie(0,Math.PI*2)))}function Jn(i=Bv){const e=()=>Math.random()<i?-1:1;return new w(e(),e(),e())}function Xl(i){return new w(ie(i[0],i[1]),ie(i[0],i[1]),ie(i[0],i[1]))}function V0(i,e){const t=[];for(const r of i){const a=e[r.pattern]??1,n=Math.max(1,Math.floor(a)),l=a-Math.floor(a);for(let s=0;s<n;s+=1)t.push(r);l>0&&Math.random()<l&&t.push(r)}return t.length?t:i}function Nr(i,e,t){return i+(e-i)*t}function Fn(i){return i*i*(3-2*i)}function xr(i,e,t){const r=Math.sin(i*127.1+e*311.7+t*74.7)*43758.5453;return r-Math.floor(r)}function zt(i,e,t){const r=Math.floor(i),a=Math.floor(e),n=Math.floor(t),l=i-r,s=e-a,o=t-n,c=Fn(l),h=Fn(s),f=Fn(o),d=xr(r,a,n),m=xr(r+1,a,n),_=xr(r,a+1,n),x=xr(r+1,a+1,n),p=xr(r,a,n+1),u=xr(r+1,a,n+1),T=xr(r,a+1,n+1),M=xr(r+1,a+1,n+1),A=Nr(d,m,c),U=Nr(_,x,c),C=Nr(p,u,c),R=Nr(T,M,c),F=Nr(A,U,h),W=Nr(C,R,h);return Nr(F,W,f)}function H0(i,e,t,r){const a=i+31.4,n=e+47.2,l=t+11.9,s=i+17.1,o=e+83.6,c=t+29.5,h=i+53.7,f=e+19.3,d=t+61.2,m=(zt(h,f+r,d)-zt(h,f-r,d))/(2*r),_=(zt(s,o,c+r)-zt(s,o,c-r))/(2*r),x=(zt(a,n,l+r)-zt(a,n,l-r))/(2*r),p=(zt(h+r,f,d)-zt(h-r,f,d))/(2*r),u=(zt(s+r,o,c)-zt(s-r,o,c))/(2*r),T=(zt(a,n+r,l)-zt(a,n-r,l))/(2*r);return new w(m-_,x-p,u-T)}function Gi(i){const e=Math.max(2,Math.round(i[0]*Bo)),t=Math.max(e,Math.round(i[1]*Bo));return[e,t]}function k0(i){return new w(ie(i.x[0],i.x[1]),ie(i.y[0],i.y[1]),ie(i.z[0],i.z[1]))}function Qn(i,e,t){return Math.min(Math.max(i,e),t)}function ns(i,e,t){const r=new We;return r.setHSL(i,e,t),r}function lt(){const i=Math.random(),e=Math.random(),t=2*Math.PI*i,r=Math.acos(2*e-1),a=Math.sin(r);return new w(Math.cos(t)*a,Math.sin(t)*a,Math.cos(r))}function W0(){const i=ie(0,Math.PI*2);return new w(Math.cos(i),0,Math.sin(i))}function vi(i,e){const t=2/e,r=i*t-1+t/2,a=Math.sqrt(Math.max(0,1-r*r)),n=Math.PI*(3-Math.sqrt(5)),l=i*n;return new w(Math.cos(l)*a,r,Math.sin(l)*a)}function rl(i){const e=Math.abs(i.y)>.8?new w(1,0,0):new w(0,1,0),t=new w().crossVectors(i,e).normalize(),r=new w().crossVectors(i,t).normalize();return{axis:i,tangent:t,bitangent:r}}function X0(i){if(i==="ring"||i==="cross"||i==="comet"||i==="double"||i==="nova"||i==="saturn"||i==="crossette")return rl(lt());if(i==="sprayburst"){const e=lt();return e.y=Math.abs(e.y)*.7+.3,e.normalize(),rl(e)}return i==="lissajous"?{a:tt(2,4),b:tt(3,6),c:tt(2,5),phase:ie(0,Math.PI*2)}:i==="crownburst"?{spikes:tt(6,10)}:i==="arcflower"?{petals:tt(5,9)}:null}function j0(i,e,t,r){if(i==="burst")return lt();if(i==="ring"){const s=Math.random()*Math.PI*2;if(r){const o=r.tangent.clone().multiplyScalar(Math.cos(s)).add(r.bitangent.clone().multiplyScalar(Math.sin(s)));return o.addScaledVector(r.axis,ie(-.08,.08)),o.normalize()}return new w(Math.cos(s),Math.sin(s),ie(-.15,.15)).normalize()}if(i==="fan"){const s=ie(-Math.PI/2,Math.PI/2),o=ie(.1,Math.PI/2.4);return new w(Math.cos(s)*Math.cos(o),Math.sin(o),Math.sin(s)*Math.cos(o)).normalize()}if(i==="spiral"){const s=ie(6,10),o=e/t*Math.PI*s,c=.6+.4*Math.sin(o*.35);return new w(Math.cos(o)*c,Math.sin(o)*c,Math.cos(o*.3)*.35).normalize()}if(i==="rosette"){const s=e/t*Math.PI*2,o=.45+.45*Math.abs(Math.cos(s*8));return new w(Math.cos(s)*o,Math.sin(s)*o,ie(-.12,.12)).normalize()}if(i==="arcburst"){const s=t>1?e/(t-1):.5,o=(-.75+.5*s)*Math.PI,c=.5+.35*Math.sin(s*Math.PI),h=Math.cos(o)*c,f=Math.sin(o)*c+.15,d=Math.sin(s*Math.PI*2)*.2;return new w(h,f,d).normalize()}if(i==="braid"){const s=e/t,o=s*Math.PI*6+(e%2===0?0:Math.PI),c=.45+.25*Math.sin(s*Math.PI*2),h=.2+s*.8;return new w(Math.cos(o)*c,h,Math.sin(o)*c).normalize()}if(i==="lotus"){const s=e/t*Math.PI*2,o=.45+.45*Math.abs(Math.sin(s*10)),c=.2+.25*Math.cos(s*10*.5),h=.15*Math.sin(s*10*.5);return new w(Math.cos(s)*o,c,Math.sin(s)*o+h).normalize()}if(i==="spire"){const s=e/t,o=s*Math.PI*8,c=.2+.6*(1-s),h=.25+.7*s;return new w(Math.cos(o)*c,h,Math.sin(o)*c).normalize()}if(i==="fanwave"){const s=e/t,o=-Math.PI/2+s*Math.PI,c=.2+.6*Math.sin(s*Math.PI);return new w(Math.cos(o)*Math.cos(c),Math.sin(c),Math.sin(o)*Math.cos(c)).normalize()}if(i==="sparkburst"){const s=lt();return s.y=s.y*.5+.35,s.normalize()}if(i==="arcflower"){const s=(r==null?void 0:r.petals)??7,o=e/t*Math.PI*2,c=.45+.45*Math.abs(Math.sin(o*s)),h=.1+.35*Math.cos(o*s*.5);return new w(Math.cos(o)*c,h,Math.sin(o)*c).normalize()}if(i==="lissajous"){const s=e/t*Math.PI*2,o=(r==null?void 0:r.a)??3,c=(r==null?void 0:r.b)??4,h=(r==null?void 0:r.c)??2,f=(r==null?void 0:r.phase)??0,d=Math.sin(o*s+f),m=Math.sin(c*s),_=Math.sin(h*s+f*.6)*.8;return new w(d,m,_).normalize()}if(i==="crownburst"){const s=(r==null?void 0:r.spikes)??8,o=e/t*Math.PI*2,c=.25+.45*(.35+.6*Math.abs(Math.cos(o*s))),h=Math.sqrt(Math.max(0,1-c*c));return new w(Math.cos(o)*h,c,Math.sin(o)*h).normalize()}if(i==="sprayburst"){const s=(r==null?void 0:r.axis)??new w(0,1,0),o=(r==null?void 0:r.tangent)??new w(1,0,0),c=(r==null?void 0:r.bitangent)??new w(0,0,1),h=e/t*Math.PI*2,f=.35+.25*Math.sin(h*2);return s.clone().addScaledVector(o,Math.cos(h)*f).addScaledVector(c,Math.sin(h)*f).normalize()}if(i==="ribbon"){const s=e/t,o=s*Math.PI*6,c=.45+.3*Math.sin(s*Math.PI*2),h=.15+.7*Math.sin(s*Math.PI),f=.25*Math.cos(o*.5);return new w(Math.cos(o)*c,h,Math.sin(o)*c+f).normalize()}if(i==="crescent"){const s=e/t*Math.PI*1.6-Math.PI*.8,o=.65+.25*Math.cos(s*.6),c=Math.cos(s)*o+.35,h=Math.sin(s)*o;return new w(c,h,ie(-.15,.15)).normalize()}if(i==="diamond"){const s=e/t*Math.PI*2,o=Math.cos(s),c=Math.sin(s),h=1/(Math.abs(o)+Math.abs(c)),f=.75+.15*Math.sin(s*4);return new w(o*h*f,c*h*f,ie(-.12,.12)).normalize()}if(i==="lattice"){const s=e%5,o=s/4-.5,c=e/t*Math.PI*6,h=.55+.25*Math.sin(c*1.5+s);return new w(Math.cos(c)*h,o*.85,Math.sin(c)*h).normalize()}if(i==="sphere")return vi(e,t);if(i==="dahlia")return vi(e,t).add(lt().multiplyScalar(.08)).normalize();if(i==="globe")return vi(e,t).add(lt().multiplyScalar(.04)).normalize();if(i==="pearl")return vi(e,t).add(lt().multiplyScalar(.12)).normalize();if(i==="shell")return lt().add(lt().multiplyScalar(.06)).normalize();if(i==="orbital"){const s=vi(e,t),o=new w(-s.z,0,s.x).multiplyScalar(.2);return s.add(o).normalize()}if(i==="bloom"){const s=vi(e,t),o=.2+.3*Math.sin(e/t*Math.PI*6);return s.add(lt().multiplyScalar(o)).normalize()}if(i==="flower"){const s=tt(5,8),o=e/t*Math.PI*2,c=.6+.35*Math.sin(o*s);return new w(Math.cos(o)*c,Math.sin(o)*c,ie(-.2,.2)).normalize()}if(i==="cross"&&r){const s=(Math.random()<.5?r.tangent:r.bitangent).clone().multiplyScalar(Math.random()<.5?-1:1);return s.addScaledVector(r.axis,ie(-.18,.18)),s.addScaledVector(lt(),.05),s.normalize()}if(i==="comet")return((r==null?void 0:r.axis)??lt()).clone().add(lt().multiplyScalar(.35)).normalize();if(i==="crown"){const s=ie(0,Math.PI*2),o=ie(.15,.45),c=Math.sqrt(1-o*o);return new w(Math.cos(s)*c,o,Math.sin(s)*c).normalize()}if(i==="palm"){const s=ie(0,Math.PI*2),o=ie(.55,.95),c=Math.sqrt(1-o*o);return new w(Math.cos(s)*c,o,Math.sin(s)*c).normalize()}if(i==="willow"){const s=ie(0,Math.PI*2),o=ie(.2,.45),c=Math.sqrt(1-o*o);return new w(Math.cos(s)*c,o,Math.sin(s)*c).normalize()}if(i==="star"){const s=tt(5,7),o=e/t*Math.PI*2,c=.45+.5*Math.abs(Math.cos(o*s));return new w(Math.cos(o)*c,Math.sin(o)*c,ie(-.18,.18)).normalize()}if(i==="wave"){const s=e/t*Math.PI*2,o=Math.sin(s*3)*.35;return new w(Math.cos(s),o,Math.sin(s)).normalize()}if(i==="scatter"){const s=lt();return s.y=Math.abs(s.y)*.75+.25,s.normalize()}if(i==="umbrella"){const s=ie(0,Math.PI*2),o=ie(.65,.95),c=Math.sqrt(1-o*o);return new w(Math.cos(s)*c,o,Math.sin(s)*c).normalize()}if(i==="peony"){const s=lt();return s.y=Math.abs(s.y)*.7+.3,s.normalize()}if(i==="chrysanthemum"){const s=tt(8,12),o=e/t*Math.PI*2,c=.5+.45*Math.sin(o*s),h=.15+.35*Math.cos(o*s);return new w(Math.cos(o)*c,h,Math.sin(o)*c).normalize()}if(i==="double"&&r){const s=e/t*Math.PI*2,o=e%2===0?1:-1,c=r.tangent.clone().multiplyScalar(Math.cos(s)*.6).add(r.bitangent.clone().multiplyScalar(Math.sin(s)*.6*o));return c.addScaledVector(r.axis,ie(.2,.7)),c.addScaledVector(lt(),.05),c.normalize()}if(i==="nova"){const s=tt(10,16),o=e/t*Math.PI*2,c=.35+.65*Math.abs(Math.sin(o*s));if(r){const h=r.tangent.clone().multiplyScalar(Math.cos(o)*c).add(r.bitangent.clone().multiplyScalar(Math.sin(o)*c));return h.addScaledVector(r.axis,.15+c*.5),h.normalize()}return new w(Math.cos(o)*c,.15+c*.5,Math.sin(o)*c).normalize()}if(i==="fountain"){const s=ie(0,Math.PI*2),o=ie(.8,1),c=Math.sqrt(1-o*o);return new w(Math.cos(s)*c,o,Math.sin(s)*c).normalize()}if(i==="cylinder"){const s=ie(0,Math.PI*2),o=ie(.1,.35),c=Math.sqrt(1-o*o);return new w(Math.cos(s)*c,o,Math.sin(s)*c).normalize()}if(i==="tornado"){const s=e/t,o=s*Math.PI*6,c=.2+s*.8,h=.4+.4*s;return new w(Math.cos(o)*h,c,Math.sin(o)*h).normalize()}if(i==="vortex"){const s=e/t,o=s*Math.PI*10,c=.4+.5*Math.sin(s*Math.PI),h=.2+.6*(1-s);return new w(Math.cos(o)*c,h,Math.sin(o)*c).normalize()}if(i==="halo"){const s=ie(0,Math.PI*2),o=ie(.35,.55),c=Math.sqrt(1-o*o);return new w(Math.cos(s)*c,o,Math.sin(s)*c).normalize()}if(i==="sheaf"){const s=ie(-Math.PI/6,Math.PI/6),o=ie(.4,.9);return new w(Math.cos(s)*Math.cos(o),Math.sin(o),Math.sin(s)*Math.cos(o)).normalize()}if(i==="pinwheel"){const s=e/t,o=s*Math.PI*8,c=.5+.4*Math.sin(s*Math.PI);return new w(Math.cos(o)*c,Math.sin(o)*.35,Math.sin(o)*c).normalize()}if(i==="petal"){const s=tt(6,10),o=e/t*Math.PI*2,c=.55+.35*Math.cos(o*s),h=.25+.35*Math.sin(o*s);return new w(Math.cos(o)*c,h,Math.sin(o)*c).normalize()}if(i==="starburst"){const s=tt(8,14),o=e/t*Math.PI*2,c=.4+.6*Math.abs(Math.cos(o*s));return new w(Math.cos(o)*c,.25+c*.5,Math.sin(o)*c).normalize()}if(i==="ripple"){const s=e/t,o=s*Math.PI*2,c=.5+.45*Math.sin(s*Math.PI*4);return new w(Math.cos(o)*c,Math.sin(o)*.2,Math.sin(o)*c).normalize()}if(i==="burstlet"){const s=lt();return s.y=Math.abs(s.y)*.55+.25,s.normalize()}if(i==="saturn"){const s=Math.floor(t*.7);if(e<s){const o=e/s*Math.PI*2;if(r){const c=r.tangent.clone().multiplyScalar(Math.cos(o)).add(r.bitangent.clone().multiplyScalar(Math.sin(o)));return c.addScaledVector(r.axis,ie(-.08,.08)),c.normalize()}return new w(Math.cos(o),Math.sin(o),ie(-.12,.12)).normalize()}return lt().normalize()}if(i==="crossette"&&r){const s=(Math.random()<.5?r.tangent:r.bitangent).clone().multiplyScalar(Math.random()<.5?-1:1);return s.addScaledVector(r.axis,ie(-.15,.15)),s.normalize()}if(i==="spokes"){const s=tt(8,14),o=Math.PI*2/s,c=Math.round(e/t*s)*o+ie(-.18,.18),h=ie(.2,.6),f=Math.sqrt(1-h*h);return new w(Math.cos(c)*f,h,Math.sin(c)*f).normalize()}if(i==="helix"){const s=ie(4,7),o=e/t,c=o*Math.PI*2*s,h=.45+.25*Math.sin(o*Math.PI*2),f=.2+.8*o;return new w(Math.cos(c)*h,f,Math.sin(c)*h).normalize()}const a=ie(0,Math.PI*2),n=ie(.35,.9),l=Math.sqrt(1-n*n);return new w(Math.cos(a)*l,n,Math.sin(a)*l).normalize()}class il{constructor(e,t,r={}){const{sizeScale:a=1,opacityScale:n=1,lifeScale:l=1,offset:s=null}=r;this.life=we(w0)*l,this.lifeMax=this.life;const o=Math.random();let c=1,h=1;o<C0?(c=we(P0),h=we(U0)):o>1-L0&&(c=we(D0),h=we(I0)),c*=a,h*=n,this.baseOpacity=Qn(we(R0)*h,N0,O0),this.size=we(A0)*c,this.material=new Bl({map:dm,color:t,transparent:!0,opacity:this.baseOpacity,depthWrite:!1,blending:Er,alphaTest:.5}),this.material.rotation=ie(0,Math.PI*2);const f=s?e.clone().add(s):e;this.sprite=new lm(this.material),this.sprite.position.copy(f),this.sprite.scale.set(this.size,this.size,1)}update(e){if(this.life-=e,this.life<=0)return!1;const t=this.life/this.lifeMax,r=t*t;this.material.opacity=this.baseOpacity*r;const a=this.size*(1+(1-t)*.2);return this.sprite.scale.set(a,a,1),!0}dispose(){this.material.dispose()}}class q0{constructor(e,t){this.position=e.clone(),this.velocity=t.velocity.clone(),this.life=t.life,this.targetY=t.targetY,this.profile=t.profile,this.hue=t.hue,this.rocketHue=t.rocketHue,this.size=t.size,this.clickDroop=t.clickDroop,this.clickCurly=t.clickCurly,this.forceShowcase=t.forceShowcase,this.forceStraight=t.forceStraight,this.trailSamples=t.trailSamples,this.trailOpacity=t.trailOpacity,this.trailSizeScale=t.trailSizeScale,this.trailBrightness=t.trailBrightness,this.trailFadePower=t.trailFadePower,this.trailHistoryIndex=0;const r=ns(this.rocketHue,ie(.9,1),ie(.55,.75));r.multiplyScalar(Fm),this.baseColor=r,this.positions=new Float32Array([this.position.x,this.position.y,this.position.z]),this.colors=new Float32Array([r.r,r.g,r.b]),this.trailPositions=new Float32Array(this.trailSamples*3),this.trailColors=new Float32Array(this.trailSamples*3),this.geometry=new Lt,this.geometry.setAttribute("position",new ht(this.positions,3)),this.geometry.setAttribute("color",new ht(this.colors,3)),this.material=new Wi({size:this.size*Hi,vertexColors:!0,map:Xa,alphaTest:.35,transparent:!0,opacity:1,depthWrite:!1,blending:Er}),this.points=new Wa(this.geometry,this.material);for(let a=0;a<this.trailSamples;a+=1){const n=a*3;this.trailPositions[n]=this.position.x,this.trailPositions[n+1]=this.position.y,this.trailPositions[n+2]=this.position.z,this.trailColors[n]=this.baseColor.r*this.trailBrightness,this.trailColors[n+1]=this.baseColor.g*this.trailBrightness,this.trailColors[n+2]=this.baseColor.b*this.trailBrightness}this.trailGeometry=new Lt,this.trailGeometry.setAttribute("position",new ht(this.trailPositions,3)),this.trailGeometry.setAttribute("color",new ht(this.trailColors,3)),this.trailMaterial=new Wi({size:this.size*this.trailSizeScale*Hi,vertexColors:!0,map:Xa,alphaTest:.35,transparent:!0,opacity:this.trailOpacity,depthWrite:!1,blending:Er}),this.trail=new Wa(this.trailGeometry,this.trailMaterial)}update(e){this.life-=e,this.position.addScaledVector(this.velocity,e),this.positions[0]=this.position.x,this.positions[1]=this.position.y,this.positions[2]=this.position.z,this.geometry.attributes.position.needsUpdate=!0,this.trailHistoryIndex=(this.trailHistoryIndex+1)%this.trailSamples;const t=this.trailHistoryIndex*3;this.trailPositions[t]=this.position.x,this.trailPositions[t+1]=this.position.y,this.trailPositions[t+2]=this.position.z;const r=this.trailSamples>1?this.trailSamples-1:1;for(let a=0;a<this.trailSamples;a+=1){const n=(this.trailHistoryIndex-a+this.trailSamples)%this.trailSamples*3,l=Math.pow(1-a/r,this.trailFadePower),s=this.trailOpacity*this.trailBrightness*l;this.trailColors[n]=this.baseColor.r*s,this.trailColors[n+1]=this.baseColor.g*s,this.trailColors[n+2]=this.baseColor.b*s}if(this.trailGeometry.attributes.position.needsUpdate=!0,this.trailGeometry.attributes.color.needsUpdate=!0,this.life<=0||this.position.y>=this.targetY){const a=ss(this.position);return jl(a,this.hue,{spherical:!0}),ja(a,this.profile,this.hue,!0,this.clickDroop,this.clickCurly,this.forceStraight,this.forceShowcase),!1}return!0}dispose(){this.geometry.dispose(),this.material.dispose(),this.trailGeometry.dispose(),this.trailMaterial.dispose()}}class Y0{constructor(e,t){this.count=t.count,this.pattern=t.pattern,this.radius=t.radius,this.lifeBase=t.life,this.trailStretch=t.trailStretch,this.trailGrowth=t.trailGrowth??0,this.drag=t.drag,this.drift=t.drift,this.pointSize=t.pointSize,this.trailMode=t.trailMode??"lines",this.trailSamples=t.trailSamples??2,this.trailPointScale=t.trailPointScale??1,this.trailWidthScale=t.trailWidthScale??1,this.trailBrightness=t.trailBrightness??1,this.trailFadePower=t.trailFadePower??kl,this.trailVisible=t.trailVisible??!0,this.trailOpacity=t.trailOpacity??.9,this.trailHistory=t.trailHistory??!1,this.spiralStrength=t.spiralStrength??0,this.spiralSpeed=t.spiralSpeed??0,this.swirlStrength=t.swirlStrength??0,this.swirlSpeed=t.swirlSpeed??0,this.snowflake=t.snowflake??!1,this.snowflakeSwayStrength=t.snowflakeSwayStrength??0,this.snowflakeSwaySpeed=t.snowflakeSwaySpeed??0,this.snowflakePhase=null,this.trajectoryMode=t.trajectoryMode??null,this.trajectoryStrength=t.trajectoryStrength??0,this.trajectorySpeed=t.trajectorySpeed??0,this.trajectoryPhase=null,this.trajectoryVectors=null,this.curlNoise=t.curlNoise??!1,this.curlNoiseStrength=t.curlNoiseStrength??0,this.curlNoiseScale=t.curlNoiseScale??1,this.curlNoiseSpeed=t.curlNoiseSpeed??0,this.curlNoiseOffset=null,this.curlNoiseTwist=t.curlNoiseTwist??1,this.curlNoiseYAxis=t.curlNoiseYAxis??1,this.subBurst=t.subBurst??!1,this.subBurstProfile=t.subBurstProfile??null,this.subBurstHue=t.subBurstHue??t.hue,this.subBurstTriggered=!1,this.directionRotation=t.directionRotation??null,this.directionMirror=t.directionMirror??null,this.directionScale=t.directionScale??null,this.directionChaosChance=t.directionChaosChance??0,this.directionChaosAngle=t.directionChaosAngle??null,this.directionChaosScaleRange=t.directionChaosScaleRange??null,this.directionChaosMirrorChance=t.directionChaosMirrorChance??0,this.gravityScale=t.gravityScale??1,this.gravityRamp=t.gravityRamp??0,this.curveStrength=t.curveStrength??0,this.curveDecay=t.curveDecay??1,this.patternData=X0(this.pattern),this.curveVectors=null,this.trailHistoryIndex=null,this.spiralPhase=null,this.swirlPhase=null,this.trailMode!=="dots"&&(this.trailSamples=2,this.trailHistory=!1);const r=this.radius/this.lifeBase;if(this.positions=new Float32Array(this.count*3),this.trailPositions=new Float32Array(this.count*this.trailSamples*3),this.colors=new Float32Array(this.count*3),this.baseColors=new Float32Array(this.count*3),this.trailColors=new Float32Array(this.count*this.trailSamples*3),this.velocities=new Float32Array(this.count*3),this.life=new Float32Array(this.count),this.lifeMax=new Float32Array(this.count),this.curveStrength>0){this.curveVectors=new Float32Array(this.count*2);for(let l=0;l<this.count;l+=1){const s=ie(0,Math.PI*2),o=this.curveStrength*ie(.6,1.4),c=l*2;this.curveVectors[c]=Math.cos(s)*o,this.curveVectors[c+1]=Math.sin(s)*o}}if(this.trailHistory&&(this.trailHistoryIndex=new Uint16Array(this.count)),this.spiralStrength>0){this.spiralPhase=new Float32Array(this.count);for(let l=0;l<this.count;l+=1)this.spiralPhase[l]=ie(0,Math.PI*2)}if(this.swirlStrength>0){this.swirlPhase=new Float32Array(this.count);for(let l=0;l<this.count;l+=1)this.swirlPhase[l]=ie(0,Math.PI*2)}if(this.snowflake){this.snowflakePhase=new Float32Array(this.count);for(let l=0;l<this.count;l+=1)this.snowflakePhase[l]=ie(0,Math.PI*2)}if(this.curlNoise&&(this.curlNoiseOffset=new w(ie(-100,100),ie(-100,100),ie(-100,100))),this.trajectoryMode){this.trajectoryPhase=new Float32Array(this.count),(this.trajectoryMode==="zigzag"||this.trajectoryMode==="flutter")&&(this.trajectoryVectors=new Float32Array(this.count*3));for(let l=0;l<this.count;l+=1)if(this.trajectoryPhase[l]=ie(0,Math.PI*2),this.trajectoryVectors){const s=W0(),o=l*3;this.trajectoryVectors[o]=s.x,this.trajectoryVectors[o+1]=s.y,this.trajectoryVectors[o+2]=s.z}}for(let l=0;l<this.count;l+=1){const s=j0(this.pattern,l,this.count,this.patternData);this.directionScale&&s.multiply(this.directionScale).normalize(),this.directionMirror&&s.multiply(this.directionMirror),this.directionRotation&&s.applyQuaternion(this.directionRotation),this.directionChaosChance>0&&Math.random()<this.directionChaosChance&&(this.directionChaosScaleRange&&s.multiply(Xl(this.directionChaosScaleRange)).normalize(),this.directionChaosMirrorChance>0&&Math.random()<this.directionChaosMirrorChance&&s.multiply(Jn(.5)),this.directionChaosAngle&&(s.applyAxisAngle(lt(),we(this.directionChaosAngle)),s.normalize()));const o=r*ie(.6,1.2),c=l*3;this.positions[c]=e.x,this.positions[c+1]=e.y,this.positions[c+2]=e.z,this.velocities[c]=s.x*o,this.velocities[c+1]=s.y*o,this.velocities[c+2]=s.z*o;const h=this.lifeBase*ie(.7,1.3);this.life[l]=h,this.lifeMax[l]=h;const f=((t.hues?Rt(t.hues):t.hue)+ie(-t.hueVariance,t.hueVariance)+1)%1,d=ie(Xo[0],Xo[1]),m=ie(jo[0],jo[1]),_=ns(f,d,m);_.multiplyScalar(vg),m>=xg?_.multiplyScalar(Sg):m<=Mg&&_.multiplyScalar(yg);const x=this.pattern==="cross"?hg:1;this.colors[c]=_.r*x,this.colors[c+1]=_.g*x,this.colors[c+2]=_.b*x,this.baseColors[c]=_.r*x,this.baseColors[c+1]=_.g*x,this.baseColors[c+2]=_.b*x;const p=l*this.trailSamples*3;for(let u=0;u<this.trailSamples;u+=1){const T=p+u*3;this.trailColors[T]=_.r*this.trailBrightness,this.trailColors[T+1]=_.g*this.trailBrightness,this.trailColors[T+2]=_.b*this.trailBrightness,this.trailHistory&&(this.trailPositions[T]=e.x,this.trailPositions[T+1]=e.y,this.trailPositions[T+2]=e.z)}}this.pointsGeometry=new Lt,this.pointsGeometry.setAttribute("position",new ht(this.positions,3)),this.pointsGeometry.setAttribute("color",new ht(this.colors,3));const a=this.pointSize*this.trailPointScale*this.trailWidthScale*Hi,n=Math.max(this.pointSize,a*Tg);this.pointsMaterial=new Wi({size:n*Hi,vertexColors:!0,map:Xa,alphaTest:.35,transparent:!0,opacity:1,depthWrite:!1,blending:Er}),this.points=new Wa(this.pointsGeometry,this.pointsMaterial),this.trailGeometry=new Lt,this.trailGeometry.setAttribute("position",new ht(this.trailPositions,3)),this.trailGeometry.setAttribute("color",new ht(this.trailColors,3)),this.trailMode==="dots"?(this.trailMaterial=new Wi({size:this.pointSize*this.trailPointScale*this.trailWidthScale,vertexColors:!0,map:Xa,alphaTest:.35,transparent:!0,opacity:this.trailOpacity,depthWrite:!1,blending:Er}),this.trail=new Wa(this.trailGeometry,this.trailMaterial)):(this.trailMaterial=new Vl({vertexColors:!0,transparent:!0,opacity:this.trailOpacity,depthWrite:!1,blending:Er,linewidth:this.trailWidthScale*Hi}),this.trail=new hm(this.trailGeometry,this.trailMaterial))}update(e){let t=0;for(let r=0;r<this.count;r+=1){let a=this.life[r]-e;this.life[r]=a;const n=r*3,l=r*this.trailSamples*3;if(a<=0){this.colors[n]=0,this.colors[n+1]=0,this.colors[n+2]=0;for(let F=0;F<this.trailSamples;F+=1){const W=l+F*3;this.trailColors[W]=0,this.trailColors[W+1]=0,this.trailColors[W+2]=0}continue}t+=1;const s=Math.max(a/this.lifeMax[r],0),o=1-s,c=this.gravityScale*(1+this.gravityRamp*o);let h=this.velocities[n],f=this.velocities[n+1],d=this.velocities[n+2];if(h+=(On.x*c+this.drift.x)*e,f+=(On.y*c+this.drift.y)*e,d+=(On.z*c+this.drift.z)*e,this.curveVectors){const F=r*2,W=Math.pow(s,this.curveDecay);h+=this.curveVectors[F]*W*e,d+=this.curveVectors[F+1]*W*e}if(this.spiralStrength>0&&this.spiralPhase){const F=this.spiralPhase[r]+this.spiralSpeed*o+s*.6;h+=Math.cos(F)*this.spiralStrength*e,d+=Math.sin(F)*this.spiralStrength*e}if(this.swirlStrength>0&&this.swirlPhase){const F=this.swirlPhase[r]+this.swirlSpeed*o+s*1.2,W=.35+.65*o;h+=Math.sin(F)*this.swirlStrength*W*e,d+=Math.cos(F)*this.swirlStrength*W*e}if(this.snowflake&&this.snowflakePhase){const F=this.snowflakePhase[r]+this.snowflakeSwaySpeed*o+s*.5,W=.4+.6*o;h+=Math.sin(F)*this.snowflakeSwayStrength*W*e,d+=Math.cos(F)*this.snowflakeSwayStrength*W*e,f*=.99}if(this.trajectoryMode&&this.trajectoryPhase){const F=this.trajectoryPhase[r]+this.trajectorySpeed*o;if(this.trajectoryMode==="zigzag"&&this.trajectoryVectors){const W=r*3,g=Math.sin(F)*this.trajectoryStrength;h+=this.trajectoryVectors[W]*g*e,f+=this.trajectoryVectors[W+1]*g*e,d+=this.trajectoryVectors[W+2]*g*e}else if(this.trajectoryMode==="corkscrew"){const W=this.trajectoryStrength*e;h+=Math.cos(F)*W,d+=Math.sin(F)*W}else if(this.trajectoryMode==="flutter"&&this.trajectoryVectors){const W=r*3,g=Math.sin(F*1.6)*this.trajectoryStrength;h+=this.trajectoryVectors[W]*g*.6*e,d+=this.trajectoryVectors[W+2]*g*.6*e,f+=g*.35*e}}const m=this.positions[n],_=this.positions[n+1],x=this.positions[n+2];if(this.curlNoise&&this.curlNoiseOffset){const F=Xi*this.curlNoiseSpeed,W=m*this.curlNoiseScale+this.curlNoiseOffset.x,g=_*this.curlNoiseScale+this.curlNoiseOffset.y,b=x*this.curlNoiseScale+this.curlNoiseOffset.z+F,G=H0(W,g,b,Sv),$=this.curlNoiseTwist;if(h+=G.x*this.curlNoiseStrength*e,f+=G.y*this.curlNoiseStrength*this.curlNoiseYAxis*e,d+=G.z*this.curlNoiseStrength*e,$!==1){const L=$*e*(.4+o),B=h*Math.cos(L)-d*Math.sin(L),V=h*Math.sin(L)+d*Math.cos(L);h=B,d=V}}h*=this.drag,f*=this.drag,d*=this.drag,this.velocities[n]=h,this.velocities[n+1]=f,this.velocities[n+2]=d;const p=m+h*e,u=_+f*e,T=x+d*e;this.positions[n]=p,this.positions[n+1]=u,this.positions[n+2]=T;const M=p-m,A=u-_,U=T-x;this.colors[n]=this.baseColors[n]*s,this.colors[n+1]=this.baseColors[n+1]*s,this.colors[n+2]=this.baseColors[n+2]*s;const C=Math.max((s-Yo)/(1-Yo),0),R=Math.pow(C,this.trailFadePower)*this.trailBrightness;if(this.trailHistory){let F=this.trailHistoryIndex[r];F=(F+1)%this.trailSamples,this.trailHistoryIndex[r]=F;const W=l+F*3;this.trailPositions[W]=p,this.trailPositions[W+1]=u,this.trailPositions[W+2]=T;const g=this.trailSamples>1?this.trailSamples-1:1;for(let b=0;b<this.trailSamples;b+=1){const G=(F-b+this.trailSamples)%this.trailSamples,$=l+G*3,L=Math.pow(1-b/g,1.6),B=R*L;this.trailColors[$]=this.baseColors[n]*B,this.trailColors[$+1]=this.baseColors[n+1]*B,this.trailColors[$+2]=this.baseColors[n+2]*B}}else{const F=this.trailStretch*(1+this.trailGrowth*o),W=p-M*F,g=u-A*F,b=T-U*F,G=this.trailSamples,$=G>1?G-1:1;for(let L=0;L<G;L+=1){const B=L/$,V=l+L*3;this.trailPositions[V]=W+(p-W)*B,this.trailPositions[V+1]=g+(u-g)*B,this.trailPositions[V+2]=b+(T-b)*B,this.trailColors[V]=this.baseColors[n]*R,this.trailColors[V+1]=this.baseColors[n+1]*R,this.trailColors[V+2]=this.baseColors[n+2]*R}}}if(this.pointsGeometry.attributes.position.needsUpdate=!0,this.pointsGeometry.attributes.color.needsUpdate=!0,this.trailGeometry.attributes.position.needsUpdate=!0,this.trailGeometry.attributes.color.needsUpdate=!0,this.subBurst&&!this.subBurstTriggered){let r=0,a=[];for(let n=0;n<this.count;n+=1){const l=n*3,s=Math.max(this.life[n]/this.lifeMax[n],0),o=this.velocities[l+1];if(s>Wm||o>=0||(a.push(n),Math.random()>Xm))continue;const c=new w(this.positions[l],this.positions[l+1],this.positions[l+2]),h=(this.subBurstHue+ie(-Pa,Pa)+1)%1;if(ja(c,this.subBurstProfile,h,!1,!1,!1,!1,!1),r+=1,r>=jm)break}if(r===0&&a.length){const n=Rt(a)*3,l=new w(this.positions[n],this.positions[n+1],this.positions[n+2]),s=(this.subBurstHue+ie(-Pa,Pa)+1)%1;ja(l,this.subBurstProfile,s,!1,!1,!1,!1,!1),r=1}r>0&&(this.subBurstTriggered=!0)}return t>0}dispose(){this.pointsGeometry.dispose(),this.pointsMaterial.dispose(),this.trailGeometry.dispose(),this.trailMaterial.dispose()}}function K0(i,e,t=!1,r=!1,a=!1,n=!1){const l=i.scale??1;let s=a,o=e??Math.random();const c=!s&&Math.random()<N_,h=c?we(z_):1;let f=i.hueVariance??.1;const d=!i.spherical,m=i.spherical&&Math.random()<sg;m&&(o=og,f=Math.min(f,lg)),d&&Math.random()<Hv&&(o=(Rt(Wl)+ie(-Ko,Ko)+1)%1);const _=i.trailBoost??1,x=i.curveStrength?we(i.curveStrength):0,p=i.curveDecay?we(i.curveDecay):1,u=i.gravityRamp?we(i.gravityRamp):0,T=Math.random()<Mm?Sm:1,M=Math.random()<vm,A=Math.random()<Mv,U=A||Math.random()<Bg,C=Math.random()<Jg,R=Math.random(),F=R<d_,W=Math.random()<g_,g=i.spherical&&Math.random()<y_,b=c&&Math.random()<Y_,G=R<a_||W||g||t||b,$=g?E_:1,L=g?T_:1,B=!s&&(!i.spherical||r||c),V=B&&Math.random()<Gg,j=B&&i.spherical&&Math.random()<M0;let k=V||j||r||c,X=!1;!c&&k&&Math.random()<D_&&(k=!1,X=!0,Math.random()<U_&&(s=!0));const ee=(k?Dv*(j?y0:1)*xv:1)*(c?O_:1),Z=k?Uv:0,he=(k?Iv:0)+(c?G_:0),pe=i.spherical&&Math.random()<ym?Em:1,H=Math.random()<Zm,re=H?Jm:1,oe=H?Qm:1,Se=H?$m:1,me=U||C||G,ue=i.dotTrailChance??bm,Ge=me||Math.random()<ue,Ce=n?!1:Math.random()<Lm,D=Gi(i.dotTrailSamples??Cm),at=Gi(Tv),ve=Gi(Cv),Ae=Gi(Qg),fe=Gi(n_);let ke=A?tt(at[0],at[1]):me?tt(ve[0],ve[1]):Ge?tt(D[0],D[1]):2;if(C&&(ke=tt(Ae[0],Ae[1])),G){const $e=tt(fe[0],fe[1]);ke=Math.max(ke,$e)}c&&(ke=Math.max(2,Math.round(ke*q_))),n&&(ke=Math.max(ke,gg));const De=Ge?Am*(A?bv:1)*(C?e_:1)*(G?s_:1):1,y=we(Nv)*(i.spherical?Tm:1),v=(Ge?Rm:1)*Se*Ov,I=Ge?wm:1,J=Math.random()<bg,q=Math.random()<zv?Fv:1,Q=F?p_:1,de=W?__*(i.spherical?M_:1):1,se=b?K_:1,le=t?R_:1,Me=r?av:1,Ie=Math.random()<Ug?Ig:1,K=Math.random()<Ng?Og:1,qe=Math.random()<zg?Fg:1,Ue=!s&&Math.random()<qg,Te=!s&&k&&Math.random()<Wg;let ge=!s&&(Ue||Te||Math.random()<Vg);c&&!s&&(ge=!0);const ce=Math.random()<Lv,Pe=Math.random()<Lg,Xe=Pe?Dg:1;let He=(J?Ag:1)*(Pe?Pg:1)*(me?Av:1)*(A?Ev:1);C&&(He*=$g),G&&(He*=u_),F&&(He*=f_),W&&(He*=v_),t&&(He*=C_),r&&(He*=nv),c&&(He*=B_),g&&(He*=L);const ze=Math.max(J?Rg:0,me?Rv:0)+he,Ye=J?Cg:0,E=C?r_:0,te=G?c_:0,Y=W?S_:0,Ee=Ue?Zg:0,xe=g?b_:0,je=J?wg:1,Ke=me?wv:1,ot=A?yv:1,vt=!d&&!m&&Math.random()<eg,Ze=!vt&&Math.random()<ig?we(ag):0,mt=vt?Math.min(f+we(tg),rg):Math.min(f+Ze,ng),It=vt?Math.random()<$v?Array.from({length:tt(2,3)},()=>Rt(Jv)):[o,(o+ie(.1,.3))%1,(o+ie(.55,.85))%1].slice(0,tt(2,3)):null,Ji=j?we(E0):0,Ja=j?we(T0):0,Yr=Ue?we(Yg):Te?we(Xg):ge?we(Hg):0,Qi=Ue?we(Kg):Te?we(jg):ge?we(kg):0,Kr=Yr*(c?qo:1),$i=Qi*(c?qo:1),Cr=!s&&!Ce&&(Math.random()<cv||k),qt=k?Rt(vv):null,Qa=k&&Math.random()<(c?X_:gv)?c?j_:_v:1,$a=Math.min(1,ov+(X?I_:0)),S=!s&&Math.random()<$a?Rt(lv):null,P=S?S.name:null,O=S?we(S.strength):0,z=S?we(S.speed):0,N=i.spherical?m0:1,ne=i.spherical?g0:1,_e=i.spherical?v0:1,ye=i.spherical?x0:1,Re=i.spherical?S0:1,Fe=i.spherical&&Math.random()<Kv?Zv:1,Le=Da();Le.multiply(Da()),d&&Le.multiply(Da());const be=d?Jn(Gv):Jn();if(i.pattern==="cross"){for(let $e=0;$e<cg;$e+=1)Le.multiply(Da());if(be.x>0&&be.y>0&&be.z>0){const $e=tt(0,2);$e===0?be.x=-1:$e===1?be.y=-1:be.z=-1}}const pt=d?Xl(Vv):null,it=d?jv:kv,bt=d?[zn[0]*.9,zn[1]*1.1]:zn,Pt=(G?o_:1)*Eg,rt=i.pattern==="cross"?Pt*ug:Pt,Ne=n?Pt*_g:rt,Jt=Math.random()<ev,Zr=we(i.drag),Yt=(C?i_:0)+(G?h_:0)+(g?w_:0)+(b?Q_:0)+(Jt?iv:0),ea=Yt>0?Math.min(Zr+Yt,.995):Zr,dr=Vr.find($e=>$e.pattern==="sparkburst"),Pi=Math.random()<km&&!!dr;return{pattern:i.pattern,count:Math.round(tt(i.count[0],i.count[1])*N*mm*(n?dg:1)),radius:we(i.radius)*fm*l*T*(M?xm:1)*re*ne*(i.spherical?_0:1)*(n?pg:1)*(c?$_:1),life:we(i.life)*He*_m*Re*(n?mg:1),trailStretch:we(i.trailStretch)*gm*_*pe*_e*I*je*Ie*Xe*oe*Ke*ot*q*qe*(c?F_:1)*K*Fe*Q*de*se*le*$*Me*(n?fg:1),drag:ea,drift:k0(Jt?{x:[i.drift.x[0]*_i,i.drift.x[1]*_i],y:[i.drift.y[0]*_i,i.drift.y[1]*_i],z:[i.drift.z[0]*_i,i.drift.z[1]*_i]}:i.drift),pointSize:we(i.pointSize)*v,hue:o,hues:It,hueVariance:mt,gravityScale:we(i.gravityScale)*ye*(C?t_:1)*(G?l_:1)*(W?x_:1)*(b?Z_:1),gravityRamp:u+Ye+Z+E+te+Ee+Y+(b?J_:0)+xe,curveStrength:x*ee,curveDecay:p,trailGrowth:ze,trailHistory:me,trailMode:Ge?"dots":"lines",trailSamples:ke,trailPointScale:De,trailWidthScale:y,trailBrightness:Ne,trailFadePower:F?m_:ce?Pv:kl,trailVisible:!Ce,trailOpacity:Ce?0:.9,directionRotation:Le,directionMirror:be,directionScale:pt,directionChaosChance:it,directionChaosAngle:Wv,directionChaosScaleRange:bt,directionChaosMirrorChance:Xv,spiralStrength:Ji,spiralSpeed:Ja,swirlStrength:Kr,swirlSpeed:$i,snowflake:Jt,snowflakeSwayStrength:Jt?we(tv):0,snowflakeSwaySpeed:Jt?we(rv):0,trajectoryMode:P,trajectoryStrength:O,trajectorySpeed:z,curlNoise:Cr,curlNoiseStrength:Cr?we(hv)*(k?pv:1)*(qt?qt.strength:1)*(c?V_:1)*h:0,curlNoiseScale:Cr?we(uv)*(k?fv:1)*(qt?qt.scale:1)*(c?H_:1)*h:0,curlNoiseSpeed:Cr?we(dv)*(k?mv:1)*(qt?qt.speed:1)*(c?k_:1)*h:0,curlNoiseYAxis:Qa,curlNoiseTwist:k?sv*(qt?qt.twist:1)*(c?W_:1)*h:1,subBurst:Pi,subBurstProfile:dr,subBurstHue:o}}function al(i){const e=((i??Math.random())+ie(-$o,$o)+1)%1;return ns(e,ie(Jo[0],Jo[1]),ie(Qo[0],Qo[1]))}function jl(i,e,t={}){if(Math.random()>b0)return;const r=t.spherical?z0:1,a=new il(i,al(e),{opacityScale:r});Vi.push(a),Ft.add(a.sprite);const n=tt(el[0],el[1]);for(let l=0;l<n;l+=1){const s=ie(0,Math.PI*2),o=ie(tl[0],tl[1]),c=new w(Math.cos(s)*o,Math.sin(s)*o,0),h=new il(i,al(e),{sizeScale:we(F0),opacityScale:we(B0)*r,lifeScale:we(G0),offset:c});Vi.push(h),Ft.add(h.sprite)}}function Z0(){const i=Math.max(10,Math.round(Zo[0]*Wo)),e=Math.max(i,Math.round(Zo[1]*Wo));return{pattern:e0,count:[i,e],radius:t0,life:r0,trailStretch:i0,drag:a0,drift:n0,pointSize:s0,gravityScale:o0,hueVariance:l0,trailBoost:c0,curveStrength:h0,curveDecay:u0,gravityRamp:d0,dotTrailChance:p0,dotTrailSamples:f0,scale:Km}}function J0(i,e,t,r=!1,a=!1,n=!1){if(Math.random()>=qm)return;const l=tt(Ho[0],Ho[1]),s=Z0();for(let o=0;o<l;o+=1){const c=ie(ko[0],ko[1]),h=ie(0,Math.PI*2),f=new w(Math.cos(h)*c,Math.sin(h)*c*.7,0),d=we(Ym)+o*ie(.04,.12),m=ss(i.clone().add(f));Mi.push({time:Xi+d,position:m,profile:s,hue:t,allowMultiBlast:!1,clickDroop:r,clickCurly:a,forceStraight:n})}}function ja(i,e,t,r=!0,a=!1,n=!1,l=!1,s=!1){const o=e??Rt(Vr),c=new Y0(i,K0(o,t,a,n,l,s));Na.push(c),Ft.add(c.points),c.trailVisible&&c.trail&&Ft.add(c.trail),r&&J0(i,o,t,a,n,l)}function Q0(i,e){const t=new w(i/lr*2-1,-(e/cr)*2+1,0);return t.unproject(Sr),new w(t.x,t.y,0)}function ss(i){return new w(Qn(i.x,-lr/2+40,lr/2-40),Qn(i.y,-cr/2+120,cr/2-80),0)}function ql(i=!1){const e=new Set(Ia?Ia.split("|"):[]),t=Vr.filter(s=>s.spherical&&!e.has(s.pattern)),r=Vr.filter(s=>!s.spherical&&!e.has(s.pattern)),a=Vr.filter(s=>!e.has(s.pattern)),n=V0(r,{cross:qv});let l=null;return i&&t.length||Math.random()<Yv&&t.length?l=Rt(t):n.length?l=Rt(n):a.length?l=Rt(a):l=Rt(Vr),Ia=l.pattern,l}function $0(i,e,t=!1,r=!1,a=!1,n=!1){let l=ql(a),s=!1;if(r&&Math.random()<P_){const o=Vr.filter(c=>c.pattern==="cross");o.length&&(l=Rt(o),r=!1,s=!0,Ia=l.pattern)}jl(i,e,{spherical:l.spherical}),Mi.push({time:Xi,position:i,profile:l,hue:e,clickDroop:t,clickCurly:r,forceShowcase:n,forceStraight:s})}function ex(i){const e=Rt(Qv),t=Math.random()<A_,r=Math.random()<L_,a=Ca,n=Ca,l=!Ca&&Math.random()<Pm;if(Ca=!1,l){const s=ql(!0),o=we(Dm),c=we(Um),h=we(zm),f=(Rt(Wl)+ie(-Go,Go)+1)%1,d=new w(ie(La[0],La[1]),c/o*h,ie(La[0],La[1])),m=new q0(i,{velocity:d,life:o,targetY:i.y+c,profile:s,hue:e,rocketHue:f,size:Im*we(Nm)*Om,trailSamples:tt(Vo[0],Vo[1]),trailSizeScale:we(Bm),trailOpacity:we(Gm),trailBrightness:we(Vm),trailFadePower:Hm,clickDroop:t,clickCurly:!1,forceShowcase:n,forceStraight:!0});Oa.push(m),Ft.add(m.points),Ft.add(m.trail)}else $0(i,e,t,r,a,n)}function tx(i){const e=Q0(i.clientX,i.clientY),t=ss(e);ex(t);const r=document.querySelector("#hint");r&&r.classList.add("hidden")}function rx(){lr=window.innerWidth,cr=window.innerHeight,Sr.left=-lr/2,Sr.right=lr/2,Sr.top=cr/2,Sr.bottom=-cr/2,Sr.updateProjectionMatrix(),Zi.setSize(lr,cr)}as.addEventListener("pointerdown",tx);as.addEventListener("contextmenu",i=>i.preventDefault());window.addEventListener("resize",rx);function Yl(){const i=Math.min(pm.getDelta(),.033);if(Xi+=i,Mi.length)for(let e=Mi.length-1;e>=0;e-=1){const t=Mi[e];t.time<=Xi&&(ja(t.position,t.profile,t.hue,t.allowMultiBlast??!0,t.clickDroop??!1,t.clickCurly??!1,t.forceStraight??!1,t.forceShowcase??!1),Mi.splice(e,1))}for(let e=Vi.length-1;e>=0;e-=1){const t=Vi[e];t.update(i)||(Ft.remove(t.sprite),t.dispose(),Vi.splice(e,1))}for(let e=Oa.length-1;e>=0;e-=1){const t=Oa[e];t.update(i)||(Ft.remove(t.points),Ft.remove(t.trail),t.dispose(),Oa.splice(e,1))}for(let e=Na.length-1;e>=0;e-=1){const t=Na[e];t.update(i)||(Ft.remove(t.points),t.trailVisible&&t.trail&&Ft.remove(t.trail),t.dispose(),Na.splice(e,1))}Zi.render(Ft,Sr),requestAnimationFrame(Yl)}Yl();
