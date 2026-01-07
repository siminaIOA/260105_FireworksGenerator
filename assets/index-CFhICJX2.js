(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qs="161",$c=0,ca=1,Jc=2,ac=1,Qc=2,sn=3,Ln=0,Pe=1,an=2,An=0,Ai=1,Rn=2,la=3,ha=4,tl=5,Hn=100,el=101,nl=102,ua=103,da=104,il=200,rl=201,sl=202,al=203,zs=204,Hs=205,ol=206,cl=207,ll=208,hl=209,ul=210,dl=211,fl=212,pl=213,ml=214,_l=0,gl=1,Sl=2,Hr=3,vl=4,Ml=5,xl=6,El=7,oc=0,yl=1,Tl=2,bn=0,Al=1,Rl=2,bl=3,Cl=4,wl=5,Ll=6,cc=300,bi=301,Ci=302,Gs=303,Vs=304,Zr=306,ks=1e3,Xe=1001,Ws=1002,de=1003,fa=1004,Ni=1005,we=1006,is=1007,Vn=1008,Cn=1009,Pl=1010,Il=1011,ta=1012,lc=1013,Tn=1014,on=1015,Yi=1016,hc=1017,uc=1018,Wn=1020,Dl=1021,Ye=1023,Ul=1024,Nl=1025,Xn=1026,wi=1027,Ol=1028,dc=1029,Fl=1030,fc=1031,pc=1033,rs=33776,ss=33777,as=33778,os=33779,pa=35840,ma=35841,_a=35842,ga=35843,mc=36196,Sa=37492,va=37496,Ma=37808,xa=37809,Ea=37810,ya=37811,Ta=37812,Aa=37813,Ra=37814,ba=37815,Ca=37816,wa=37817,La=37818,Pa=37819,Ia=37820,Da=37821,cs=36492,Ua=36494,Na=36495,Bl=36283,Oa=36284,Fa=36285,Ba=36286,_c=3e3,Yn=3001,zl=3200,Hl=3201,Gl=0,Vl=1,ze="",ve="srgb",fn="srgb-linear",ea="display-p3",$r="display-p3-linear",Gr="linear",ee="srgb",Vr="rec709",kr="p3",ti=7680,za=519,kl=512,Wl=513,Xl=514,gc=515,Yl=516,ql=517,jl=518,Kl=519,Xs=35044,Ha="300 es",Ys=1035,cn=2e3,Wr=2001;class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,c=r.length;s<c;s++)r[s].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ls=Math.PI/180,qs=180/Math.PI;function wn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[i&255]+xe[i>>8&255]+xe[i>>16&255]+xe[i>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function Le(i,t,e){return Math.max(t,Math.min(e,i))}function Zl(i,t){return(i%t+t)%t}function hs(i,t,e){return(1-e)*i+e*t}function Ga(i){return(i&i-1)===0&&i!==0}function js(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,c=this.y-t.y;return this.x=s*n-c*r+t.x,this.y=s*r+c*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,r,s,c,a,o,l){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,c,a,o,l)}set(t,e,n,r,s,c,a,o,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=o,h[6]=n,h[7]=c,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,c=n[0],a=n[3],o=n[6],l=n[1],h=n[4],u=n[7],p=n[2],m=n[5],S=n[8],v=r[0],f=r[3],d=r[6],R=r[1],x=r[4],A=r[7],D=r[2],w=r[5],C=r[8];return s[0]=c*v+a*R+o*D,s[3]=c*f+a*x+o*w,s[6]=c*d+a*A+o*C,s[1]=l*v+h*R+u*D,s[4]=l*f+h*x+u*w,s[7]=l*d+h*A+u*C,s[2]=p*v+m*R+S*D,s[5]=p*f+m*x+S*w,s[8]=p*d+m*A+S*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],c=t[4],a=t[5],o=t[6],l=t[7],h=t[8];return e*c*h-e*a*l-n*s*h+n*a*o+r*s*l-r*c*o}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],c=t[4],a=t[5],o=t[6],l=t[7],h=t[8],u=h*c-a*l,p=a*o-h*s,m=l*s-c*o,S=e*u+n*p+r*m;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/S;return t[0]=u*v,t[1]=(r*l-h*n)*v,t[2]=(a*n-r*c)*v,t[3]=p*v,t[4]=(h*e-r*o)*v,t[5]=(r*s-a*e)*v,t[6]=m*v,t[7]=(n*o-l*e)*v,t[8]=(c*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,c,a){const o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*c+l*a)+c+t,-r*l,r*o,-r*(-l*c+o*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(us.makeScale(t,e)),this}rotate(t){return this.premultiply(us.makeRotation(-t)),this}translate(t,e){return this.premultiply(us.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const us=new zt;function Sc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $l(){const i=Xr("canvas");return i.style.display="block",i}const Va={};function qn(i){i in Va||(Va[i]=!0,console.warn(i))}const ka=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wa=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rr={[fn]:{transfer:Gr,primaries:Vr,toReference:i=>i,fromReference:i=>i},[ve]:{transfer:ee,primaries:Vr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$r]:{transfer:Gr,primaries:kr,toReference:i=>i.applyMatrix3(Wa),fromReference:i=>i.applyMatrix3(ka)},[ea]:{transfer:ee,primaries:kr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wa),fromReference:i=>i.applyMatrix3(ka).convertLinearToSRGB()}},Jl=new Set([fn,$r]),$t={enabled:!0,_workingColorSpace:fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Jl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=rr[t].toReference,r=rr[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return rr[i].primaries},getTransfer:function(i){return i===ze?Gr:rr[i].transfer}};function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ei;class vc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ei===void 0&&(ei=Xr("canvas")),ei.width=t.width,ei.height=t.height;const n=ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let c=0;c<s.length;c++)s[c]=Ri(s[c]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ri(e[n]/255)*255):e[n]=Ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ql=0;class Mc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=wn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let c=0,a=r.length;c<a;c++)r[c].isDataTexture?s.push(fs(r[c].image)):s.push(fs(r[c]))}else s=fs(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function fs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let th=0;class be extends Pi{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=Xe,r=Xe,s=we,c=Vn,a=Ye,o=Cn,l=be.DEFAULT_ANISOTROPY,h=ze){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=wn(),this.name="",this.source=new Mc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=c,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(qn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Yn?ve:ze),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ks:t.x=t.x-Math.floor(t.x);break;case Xe:t.x=t.x<0?0:1;break;case Ws:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ks:t.y=t.y-Math.floor(t.y);break;case Xe:t.y=t.y<0?0:1;break;case Ws:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return qn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ve?Yn:_c}set encoding(t){qn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Yn?ve:ze}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=cc;be.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,r=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,c=t.elements;return this.x=c[0]*e+c[4]*n+c[8]*r+c[12]*s,this.y=c[1]*e+c[5]*n+c[9]*r+c[13]*s,this.z=c[2]*e+c[6]*n+c[10]*r+c[14]*s,this.w=c[3]*e+c[7]*n+c[11]*r+c[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const o=t.elements,l=o[0],h=o[4],u=o[8],p=o[1],m=o[5],S=o[9],v=o[2],f=o[6],d=o[10];if(Math.abs(h-p)<.01&&Math.abs(u-v)<.01&&Math.abs(S-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+v)<.1&&Math.abs(S+f)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,A=(m+1)/2,D=(d+1)/2,w=(h+p)/4,C=(u+v)/4,W=(S+f)/4;return x>A&&x>D?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=w/n,s=C/n):A>D?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=w/r,s=W/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=C/s,r=W/s),this.set(n,r,s,e),this}let R=Math.sqrt((f-S)*(f-S)+(u-v)*(u-v)+(p-h)*(p-h));return Math.abs(R)<.001&&(R=1),this.x=(f-S)/R,this.y=(u-v)/R,this.z=(p-h)/R,this.w=Math.acos((l+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eh extends Pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(qn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yn?ve:ze),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:we,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new be(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends eh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xc extends be{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=de,this.minFilter=de,this.wrapR=Xe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nh extends be{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=de,this.minFilter=de,this.wrapR=Xe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,c,a){let o=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3];const p=s[c+0],m=s[c+1],S=s[c+2],v=s[c+3];if(a===0){t[e+0]=o,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=S,t[e+3]=v;return}if(u!==v||o!==p||l!==m||h!==S){let f=1-a;const d=o*p+l*m+h*S+u*v,R=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const D=Math.sqrt(x),w=Math.atan2(D,d*R);f=Math.sin(f*w)/D,a=Math.sin(a*w)/D}const A=a*R;if(o=o*f+p*A,l=l*f+m*A,h=h*f+S*A,u=u*f+v*A,f===1-a){const D=1/Math.sqrt(o*o+l*l+h*h+u*u);o*=D,l*=D,h*=D,u*=D}}t[e]=o,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,c){const a=n[r],o=n[r+1],l=n[r+2],h=n[r+3],u=s[c],p=s[c+1],m=s[c+2],S=s[c+3];return t[e]=a*S+h*u+o*m-l*p,t[e+1]=o*S+h*p+l*u-a*m,t[e+2]=l*S+h*m+a*p-o*u,t[e+3]=h*S-a*u-o*p-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,c=t._order,a=Math.cos,o=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),p=o(n/2),m=o(r/2),S=o(s/2);switch(c){case"XYZ":this._x=p*h*u+l*m*S,this._y=l*m*u-p*h*S,this._z=l*h*S+p*m*u,this._w=l*h*u-p*m*S;break;case"YXZ":this._x=p*h*u+l*m*S,this._y=l*m*u-p*h*S,this._z=l*h*S-p*m*u,this._w=l*h*u+p*m*S;break;case"ZXY":this._x=p*h*u-l*m*S,this._y=l*m*u+p*h*S,this._z=l*h*S+p*m*u,this._w=l*h*u-p*m*S;break;case"ZYX":this._x=p*h*u-l*m*S,this._y=l*m*u+p*h*S,this._z=l*h*S-p*m*u,this._w=l*h*u+p*m*S;break;case"YZX":this._x=p*h*u+l*m*S,this._y=l*m*u+p*h*S,this._z=l*h*S-p*m*u,this._w=l*h*u-p*m*S;break;case"XZY":this._x=p*h*u-l*m*S,this._y=l*m*u-p*h*S,this._z=l*h*S+p*m*u,this._w=l*h*u+p*m*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],c=e[1],a=e[5],o=e[9],l=e[2],h=e[6],u=e[10],p=n+a+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-o)*m,this._y=(s-l)*m,this._z=(c-r)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-o)/m,this._x=.25*m,this._y=(r+c)/m,this._z=(s+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(r+c)/m,this._y=.25*m,this._z=(o+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(c-r)/m,this._x=(s+l)/m,this._y=(o+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,c=t._w,a=e._x,o=e._y,l=e._z,h=e._w;return this._x=n*h+c*a+r*l-s*o,this._y=r*h+c*o+s*a-n*l,this._z=s*h+c*l+n*o-r*a,this._w=c*h-n*a-r*o-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,c=this._w;let a=c*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=c,this._x=n,this._y=r,this._z=s,this;const o=1-a*a;if(o<=Number.EPSILON){const m=1-e;return this._w=m*c+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const l=Math.sqrt(o),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=c*u+this._w*p,this._x=n*u+this._x*p,this._y=r*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,n=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,c=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*c,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*c,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*c,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,c=t.y,a=t.z,o=t.w,l=2*(c*r-a*n),h=2*(a*e-s*r),u=2*(s*n-c*e);return this.x=e+o*l+c*u-a*h,this.y=n+o*h+a*l-s*u,this.z=r+o*u+s*h-c*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,c=e.x,a=e.y,o=e.z;return this.x=r*o-s*a,this.y=s*c-n*o,this.z=n*a-r*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ps.copy(this).projectOnVector(t),this.sub(ps)}reflect(t){return this.sub(ps.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ps=new b,Xa=new Ii;class Ki{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let c=0,a=s.count;c<a;c++)t.isMesh===!0?t.getVertexPosition(c,Ge):Ge.fromBufferAttribute(s,c),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}const r=t.children;for(let s=0,c=r.length;s<c;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oi),ar.subVectors(this.max,Oi),ni.subVectors(t.a,Oi),ii.subVectors(t.b,Oi),ri.subVectors(t.c,Oi),_n.subVectors(ii,ni),gn.subVectors(ri,ii),Dn.subVectors(ni,ri);let e=[0,-_n.z,_n.y,0,-gn.z,gn.y,0,-Dn.z,Dn.y,_n.z,0,-_n.x,gn.z,0,-gn.x,Dn.z,0,-Dn.x,-_n.y,_n.x,0,-gn.y,gn.x,0,-Dn.y,Dn.x,0];return!ms(e,ni,ii,ri,ar)||(e=[1,0,0,0,1,0,0,0,1],!ms(e,ni,ii,ri,ar))?!1:(or.crossVectors(_n,gn),e=[or.x,or.y,or.z],ms(e,ni,ii,ri,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qe=[new b,new b,new b,new b,new b,new b,new b,new b],Ge=new b,sr=new Ki,ni=new b,ii=new b,ri=new b,_n=new b,gn=new b,Dn=new b,Oi=new b,ar=new b,or=new b,Un=new b;function ms(i,t,e,n,r){for(let s=0,c=i.length-3;s<=c;s+=3){Un.fromArray(i,s);const a=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),o=t.dot(Un),l=e.dot(Un),h=n.dot(Un);if(Math.max(-Math.max(o,l,h),Math.min(o,l,h))>a)return!1}return!0}const ih=new Ki,Fi=new b,_s=new b;class Zi{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ih.setFromPoints(t).getCenter(n);let r=0;for(let s=0,c=t.length;s<c;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fi.subVectors(t,this.center);const e=Fi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Fi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_s.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fi.copy(t.center).add(_s)),this.expandByPoint(Fi.copy(t.center).sub(_s))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new b,gs=new b,cr=new b,Sn=new b,Ss=new b,lr=new b,vs=new b;class na{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tn.copy(this.origin).addScaledVector(this.direction,e),tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){gs.copy(t).add(e).multiplyScalar(.5),cr.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(gs);const s=t.distanceTo(e)*.5,c=-this.direction.dot(cr),a=Sn.dot(this.direction),o=-Sn.dot(cr),l=Sn.lengthSq(),h=Math.abs(1-c*c);let u,p,m,S;if(h>0)if(u=c*o-a,p=c*a-o,S=s*h,u>=0)if(p>=-S)if(p<=S){const v=1/h;u*=v,p*=v,m=u*(u+c*p+2*a)+p*(c*u+p+2*o)+l}else p=s,u=Math.max(0,-(c*p+a)),m=-u*u+p*(p+2*o)+l;else p=-s,u=Math.max(0,-(c*p+a)),m=-u*u+p*(p+2*o)+l;else p<=-S?(u=Math.max(0,-(-c*s+a)),p=u>0?-s:Math.min(Math.max(-s,-o),s),m=-u*u+p*(p+2*o)+l):p<=S?(u=0,p=Math.min(Math.max(-s,-o),s),m=p*(p+2*o)+l):(u=Math.max(0,-(c*s+a)),p=u>0?s:Math.min(Math.max(-s,-o),s),m=-u*u+p*(p+2*o)+l);else p=c>0?-s:s,u=Math.max(0,-(c*p+a)),m=-u*u+p*(p+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(gs).addScaledVector(cr,p),m}intersectSphere(t,e){tn.subVectors(t.center,this.origin);const n=tn.dot(this.direction),r=tn.dot(tn)-n*n,s=t.radius*t.radius;if(r>s)return null;const c=Math.sqrt(s-r),a=n-c,o=n+c;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,c,a,o;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,r=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,r=(t.min.x-p.x)*l),h>=0?(s=(t.min.y-p.y)*h,c=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,c=(t.min.y-p.y)*h),n>c||s>r||((s>n||isNaN(n))&&(n=s),(c<r||isNaN(r))&&(r=c),u>=0?(a=(t.min.z-p.z)*u,o=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,o=(t.min.z-p.z)*u),n>o||a>r)||((a>n||n!==n)&&(n=a),(o<r||r!==r)&&(r=o),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,tn)!==null}intersectTriangle(t,e,n,r,s){Ss.subVectors(e,t),lr.subVectors(n,t),vs.crossVectors(Ss,lr);let c=this.direction.dot(vs),a;if(c>0){if(r)return null;a=1}else if(c<0)a=-1,c=-c;else return null;Sn.subVectors(this.origin,t);const o=a*this.direction.dot(lr.crossVectors(Sn,lr));if(o<0)return null;const l=a*this.direction.dot(Ss.cross(Sn));if(l<0||o+l>c)return null;const h=-a*Sn.dot(vs);return h<0?null:this.at(h/c,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,r,s,c,a,o,l,h,u,p,m,S,v,f){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,c,a,o,l,h,u,p,m,S,v,f)}set(t,e,n,r,s,c,a,o,l,h,u,p,m,S,v,f){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=c,d[9]=a,d[13]=o,d[2]=l,d[6]=h,d[10]=u,d[14]=p,d[3]=m,d[7]=S,d[11]=v,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/si.setFromMatrixColumn(t,0).length(),s=1/si.setFromMatrixColumn(t,1).length(),c=1/si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*c,e[9]=n[9]*c,e[10]=n[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,c=Math.cos(n),a=Math.sin(n),o=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const p=c*h,m=c*u,S=a*h,v=a*u;e[0]=o*h,e[4]=-o*u,e[8]=l,e[1]=m+S*l,e[5]=p-v*l,e[9]=-a*o,e[2]=v-p*l,e[6]=S+m*l,e[10]=c*o}else if(t.order==="YXZ"){const p=o*h,m=o*u,S=l*h,v=l*u;e[0]=p+v*a,e[4]=S*a-m,e[8]=c*l,e[1]=c*u,e[5]=c*h,e[9]=-a,e[2]=m*a-S,e[6]=v+p*a,e[10]=c*o}else if(t.order==="ZXY"){const p=o*h,m=o*u,S=l*h,v=l*u;e[0]=p-v*a,e[4]=-c*u,e[8]=S+m*a,e[1]=m+S*a,e[5]=c*h,e[9]=v-p*a,e[2]=-c*l,e[6]=a,e[10]=c*o}else if(t.order==="ZYX"){const p=c*h,m=c*u,S=a*h,v=a*u;e[0]=o*h,e[4]=S*l-m,e[8]=p*l+v,e[1]=o*u,e[5]=v*l+p,e[9]=m*l-S,e[2]=-l,e[6]=a*o,e[10]=c*o}else if(t.order==="YZX"){const p=c*o,m=c*l,S=a*o,v=a*l;e[0]=o*h,e[4]=v-p*u,e[8]=S*u+m,e[1]=u,e[5]=c*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+S,e[10]=p-v*u}else if(t.order==="XZY"){const p=c*o,m=c*l,S=a*o,v=a*l;e[0]=o*h,e[4]=-u,e[8]=l*h,e[1]=p*u+v,e[5]=c*h,e[9]=m*u-S,e[2]=S*u-m,e[6]=a*h,e[10]=v*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rh,t,sh)}lookAt(t,e,n){const r=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),vn.crossVectors(n,De),vn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),vn.crossVectors(n,De)),vn.normalize(),hr.crossVectors(De,vn),r[0]=vn.x,r[4]=hr.x,r[8]=De.x,r[1]=vn.y,r[5]=hr.y,r[9]=De.y,r[2]=vn.z,r[6]=hr.z,r[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,c=n[0],a=n[4],o=n[8],l=n[12],h=n[1],u=n[5],p=n[9],m=n[13],S=n[2],v=n[6],f=n[10],d=n[14],R=n[3],x=n[7],A=n[11],D=n[15],w=r[0],C=r[4],W=r[8],k=r[12],_=r[1],y=r[5],G=r[9],j=r[13],L=r[2],z=r[6],B=r[10],X=r[14],V=r[3],Y=r[7],K=r[11],tt=r[15];return s[0]=c*w+a*_+o*L+l*V,s[4]=c*C+a*y+o*z+l*Y,s[8]=c*W+a*G+o*B+l*K,s[12]=c*k+a*j+o*X+l*tt,s[1]=h*w+u*_+p*L+m*V,s[5]=h*C+u*y+p*z+m*Y,s[9]=h*W+u*G+p*B+m*K,s[13]=h*k+u*j+p*X+m*tt,s[2]=S*w+v*_+f*L+d*V,s[6]=S*C+v*y+f*z+d*Y,s[10]=S*W+v*G+f*B+d*K,s[14]=S*k+v*j+f*X+d*tt,s[3]=R*w+x*_+A*L+D*V,s[7]=R*C+x*y+A*z+D*Y,s[11]=R*W+x*G+A*B+D*K,s[15]=R*k+x*j+A*X+D*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],c=t[1],a=t[5],o=t[9],l=t[13],h=t[2],u=t[6],p=t[10],m=t[14],S=t[3],v=t[7],f=t[11],d=t[15];return S*(+s*o*u-r*l*u-s*a*p+n*l*p+r*a*m-n*o*m)+v*(+e*o*m-e*l*p+s*c*p-r*c*m+r*l*h-s*o*h)+f*(+e*l*u-e*a*m-s*c*u+n*c*m+s*a*h-n*l*h)+d*(-r*a*h-e*o*u+e*a*p+r*c*u-n*c*p+n*o*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],c=t[4],a=t[5],o=t[6],l=t[7],h=t[8],u=t[9],p=t[10],m=t[11],S=t[12],v=t[13],f=t[14],d=t[15],R=u*f*l-v*p*l+v*o*m-a*f*m-u*o*d+a*p*d,x=S*p*l-h*f*l-S*o*m+c*f*m+h*o*d-c*p*d,A=h*v*l-S*u*l+S*a*m-c*v*m-h*a*d+c*u*d,D=S*u*o-h*v*o-S*a*p+c*v*p+h*a*f-c*u*f,w=e*R+n*x+r*A+s*D;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=R*C,t[1]=(v*p*s-u*f*s-v*r*m+n*f*m+u*r*d-n*p*d)*C,t[2]=(a*f*s-v*o*s+v*r*l-n*f*l-a*r*d+n*o*d)*C,t[3]=(u*o*s-a*p*s-u*r*l+n*p*l+a*r*m-n*o*m)*C,t[4]=x*C,t[5]=(h*f*s-S*p*s+S*r*m-e*f*m-h*r*d+e*p*d)*C,t[6]=(S*o*s-c*f*s-S*r*l+e*f*l+c*r*d-e*o*d)*C,t[7]=(c*p*s-h*o*s+h*r*l-e*p*l-c*r*m+e*o*m)*C,t[8]=A*C,t[9]=(S*u*s-h*v*s-S*n*m+e*v*m+h*n*d-e*u*d)*C,t[10]=(c*v*s-S*a*s+S*n*l-e*v*l-c*n*d+e*a*d)*C,t[11]=(h*a*s-c*u*s-h*n*l+e*u*l+c*n*m-e*a*m)*C,t[12]=D*C,t[13]=(h*v*r-S*u*r+S*n*p-e*v*p-h*n*f+e*u*f)*C,t[14]=(S*a*r-c*v*r-S*n*o+e*v*o+c*n*f-e*a*f)*C,t[15]=(c*u*r-h*a*r+h*n*o-e*u*o-c*n*p+e*a*p)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,c=t.x,a=t.y,o=t.z,l=s*c,h=s*a;return this.set(l*c+n,l*a-r*o,l*o+r*a,0,l*a+r*o,h*a+n,h*o-r*c,0,l*o-r*a,h*o+r*c,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,c){return this.set(1,n,s,0,t,1,c,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,c=e._y,a=e._z,o=e._w,l=s+s,h=c+c,u=a+a,p=s*l,m=s*h,S=s*u,v=c*h,f=c*u,d=a*u,R=o*l,x=o*h,A=o*u,D=n.x,w=n.y,C=n.z;return r[0]=(1-(v+d))*D,r[1]=(m+A)*D,r[2]=(S-x)*D,r[3]=0,r[4]=(m-A)*w,r[5]=(1-(p+d))*w,r[6]=(f+R)*w,r[7]=0,r[8]=(S+x)*C,r[9]=(f-R)*C,r[10]=(1-(p+v))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=si.set(r[0],r[1],r[2]).length();const c=si.set(r[4],r[5],r[6]).length(),a=si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ve.copy(this);const l=1/s,h=1/c,u=1/a;return Ve.elements[0]*=l,Ve.elements[1]*=l,Ve.elements[2]*=l,Ve.elements[4]*=h,Ve.elements[5]*=h,Ve.elements[6]*=h,Ve.elements[8]*=u,Ve.elements[9]*=u,Ve.elements[10]*=u,e.setFromRotationMatrix(Ve),n.x=s,n.y=c,n.z=a,this}makePerspective(t,e,n,r,s,c,a=cn){const o=this.elements,l=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),p=(n+r)/(n-r);let m,S;if(a===cn)m=-(c+s)/(c-s),S=-2*c*s/(c-s);else if(a===Wr)m=-c/(c-s),S=-c*s/(c-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=h,o[9]=p,o[13]=0,o[2]=0,o[6]=0,o[10]=m,o[14]=S,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,r,s,c,a=cn){const o=this.elements,l=1/(e-t),h=1/(n-r),u=1/(c-s),p=(e+t)*l,m=(n+r)*h;let S,v;if(a===cn)S=(c+s)*u,v=-2*u;else if(a===Wr)S=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-p,o[1]=0,o[5]=2*h,o[9]=0,o[13]=-m,o[2]=0,o[6]=0,o[10]=v,o[14]=-S,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const si=new b,Ve=new ce,rh=new b(0,0,0),sh=new b(1,1,1),vn=new b,hr=new b,De=new b,Ya=new ce,qa=new Ii;class $i{constructor(t=0,e=0,n=0,r=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],c=r[4],a=r[8],o=r[1],l=r[5],h=r[9],u=r[2],p=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Le(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-c,l)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-c,l));break;case"YZX":this._z=Math.asin(Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ya.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ya,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qa.setFromEuler(this),this.setFromQuaternion(qa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class Ec{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ah=0;const ja=new b,ai=new Ii,en=new ce,ur=new b,Bi=new b,oh=new b,ch=new Ii,Ka=new b(1,0,0),Za=new b(0,1,0),$a=new b(0,0,1),lh={type:"added"},hh={type:"removed"};class ye extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new b,e=new $i,n=new Ii,r=new b(1,1,1);function s(){n.setFromEuler(e,!1)}function c(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ce},normalMatrix:{value:new zt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.multiply(ai),this}rotateOnWorldAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.premultiply(ai),this}rotateX(t){return this.rotateOnAxis(Ka,t)}rotateY(t){return this.rotateOnAxis(Za,t)}rotateZ(t){return this.rotateOnAxis($a,t)}translateOnAxis(t,e){return ja.copy(t).applyQuaternion(this.quaternion),this.position.add(ja.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ka,t)}translateY(t){return this.translateOnAxis(Za,t)}translateZ(t){return this.translateOnAxis($a,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ur.copy(t):ur.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Bi,ur,this.up):en.lookAt(ur,Bi,this.up),this.quaternion.setFromRotationMatrix(en),r&&(en.extractRotation(r.matrixWorld),ai.setFromRotationMatrix(en),this.quaternion.premultiply(ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(lh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,c=r.length;s<c;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,t,oh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,ch,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,c=r.length;s<c;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let l=0,h=o.length;l<h;l++){const u=o[l];s(t.shapes,u)}else s(t.shapes,o)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];r.animations.push(s(t.animations,o))}}if(e){const a=c(t.geometries),o=c(t.materials),l=c(t.textures),h=c(t.images),u=c(t.shapes),p=c(t.skeletons),m=c(t.animations),S=c(t.nodes);a.length>0&&(n.geometries=a),o.length>0&&(n.materials=o),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),S.length>0&&(n.nodes=S)}return n.object=r,n;function c(a){const o=[];for(const l in a){const h=a[l];delete h.metadata,o.push(h)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ye.DEFAULT_UP=new b(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ke=new b,nn=new b,Ms=new b,rn=new b,oi=new b,ci=new b,Ja=new b,xs=new b,Es=new b,ys=new b;class qe{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ke.subVectors(t,e),r.cross(ke);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ke.subVectors(r,e),nn.subVectors(n,e),Ms.subVectors(t,e);const c=ke.dot(ke),a=ke.dot(nn),o=ke.dot(Ms),l=nn.dot(nn),h=nn.dot(Ms),u=c*l-a*a;if(u===0)return s.set(0,0,0),null;const p=1/u,m=(l*o-a*h)*p,S=(c*h-a*o)*p;return s.set(1-m-S,S,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(t,e,n,r,s,c,a,o){return this.getBarycoord(t,e,n,r,rn)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(s,rn.x),o.addScaledVector(c,rn.y),o.addScaledVector(a,rn.z),o)}static isFrontFacing(t,e,n,r){return ke.subVectors(n,e),nn.subVectors(t,e),ke.cross(nn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ke.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),ke.cross(nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return qe.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let c,a;oi.subVectors(r,n),ci.subVectors(s,n),xs.subVectors(t,n);const o=oi.dot(xs),l=ci.dot(xs);if(o<=0&&l<=0)return e.copy(n);Es.subVectors(t,r);const h=oi.dot(Es),u=ci.dot(Es);if(h>=0&&u<=h)return e.copy(r);const p=o*u-h*l;if(p<=0&&o>=0&&h<=0)return c=o/(o-h),e.copy(n).addScaledVector(oi,c);ys.subVectors(t,s);const m=oi.dot(ys),S=ci.dot(ys);if(S>=0&&m<=S)return e.copy(s);const v=m*l-o*S;if(v<=0&&l>=0&&S<=0)return a=l/(l-S),e.copy(n).addScaledVector(ci,a);const f=h*S-m*u;if(f<=0&&u-h>=0&&m-S>=0)return Ja.subVectors(s,r),a=(u-h)/(u-h+(m-S)),e.copy(r).addScaledVector(Ja,a);const d=1/(f+v+p);return c=v*d,a=p*d,e.copy(n).addScaledVector(oi,c).addScaledVector(ci,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function Ts(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=$t.workingColorSpace){if(t=Zl(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,c=2*n-s;this.r=Ts(c,s,t+1/3),this.g=Ts(c,s,t),this.b=Ts(c,s,t-1/3)}return $t.toWorkingColorSpace(this,r),this}setStyle(t,e=ve){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const c=r[1],a=r[2];switch(c){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],c=s.length;if(c===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){const n=yc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return $t.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Le(Ee.r*255,0,255))*65536+Math.round(Le(Ee.g*255,0,255))*256+Math.round(Le(Ee.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,r=Ee.g,s=Ee.b,c=Math.max(n,r,s),a=Math.min(n,r,s);let o,l;const h=(a+c)/2;if(a===c)o=0,l=0;else{const u=c-a;switch(l=h<=.5?u/(c+a):u/(2-c-a),c){case n:o=(r-s)/u+(r<s?6:0);break;case r:o=(s-n)/u+2;break;case s:o=(n-r)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=ve){$t.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,r=Ee.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Mn),this.setHSL(Mn.h+t,Mn.s+e,Mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mn),t.getHSL(dr);const n=hs(Mn.h,dr.h,e),r=hs(Mn.s,dr.s,e),s=hs(Mn.l,dr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new kt;kt.NAMES=yc;let uh=0;class Kn extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=Ai,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zs,this.blendDst=Hs,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=za,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zs&&(n.blendSrc=this.blendSrc),this.blendDst!==Hs&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==za&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const c=[];for(const a in s){const o=s[a];delete o.metadata,c.push(o)}return c}if(e){const s=r(t.textures),c=r(t.images);s.length>0&&(n.textures=s),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Tc extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const oe=new b,fr=new Gt;class fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return qn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$e(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$e(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$e(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$e(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$e(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xs&&(t.usage=this.usage),t}}class Ac extends fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Rc extends fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class dn extends fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let dh=0;const Oe=new ce,As=new ye,li=new b,Ue=new Ki,zi=new Ki,Se=new b;class Ie extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sc(t)?Rc:Ac)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oe.makeRotationFromQuaternion(t),this.applyMatrix4(Oe),this}rotateX(t){return Oe.makeRotationX(t),this.applyMatrix4(Oe),this}rotateY(t){return Oe.makeRotationY(t),this.applyMatrix4(Oe),this}rotateZ(t){return Oe.makeRotationZ(t),this.applyMatrix4(Oe),this}translate(t,e,n){return Oe.makeTranslation(t,e,n),this.applyMatrix4(Oe),this}scale(t,e,n){return Oe.makeScale(t,e,n),this.applyMatrix4(Oe),this}lookAt(t){return As.lookAt(t),As.updateMatrix(),this.applyMatrix4(As.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ue.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new b,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let s=0,c=e.length;s<c;s++){const a=e[s];zi.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Ue.min,zi.min),Ue.expandByPoint(Se),Se.addVectors(Ue.max,zi.max),Ue.expandByPoint(Se)):(Ue.expandByPoint(zi.min),Ue.expandByPoint(zi.max))}Ue.getCenter(n);let r=0;for(let s=0,c=t.count;s<c;s++)Se.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Se));if(e)for(let s=0,c=e.length;s<c;s++){const a=e[s],o=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Se.fromBufferAttribute(a,l),o&&(li.fromBufferAttribute(t,l),Se.add(li)),r=Math.max(r,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,c=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*a),4));const o=this.getAttribute("tangent").array,l=[],h=[];for(let _=0;_<a;_++)l[_]=new b,h[_]=new b;const u=new b,p=new b,m=new b,S=new Gt,v=new Gt,f=new Gt,d=new b,R=new b;function x(_,y,G){u.fromArray(r,_*3),p.fromArray(r,y*3),m.fromArray(r,G*3),S.fromArray(c,_*2),v.fromArray(c,y*2),f.fromArray(c,G*2),p.sub(u),m.sub(u),v.sub(S),f.sub(S);const j=1/(v.x*f.y-f.x*v.y);isFinite(j)&&(d.copy(p).multiplyScalar(f.y).addScaledVector(m,-v.y).multiplyScalar(j),R.copy(m).multiplyScalar(v.x).addScaledVector(p,-f.x).multiplyScalar(j),l[_].add(d),l[y].add(d),l[G].add(d),h[_].add(R),h[y].add(R),h[G].add(R))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let _=0,y=A.length;_<y;++_){const G=A[_],j=G.start,L=G.count;for(let z=j,B=j+L;z<B;z+=3)x(n[z+0],n[z+1],n[z+2])}const D=new b,w=new b,C=new b,W=new b;function k(_){C.fromArray(s,_*3),W.copy(C);const y=l[_];D.copy(y),D.sub(C.multiplyScalar(C.dot(y))).normalize(),w.crossVectors(W,y);const j=w.dot(h[_])<0?-1:1;o[_*4]=D.x,o[_*4+1]=D.y,o[_*4+2]=D.z,o[_*4+3]=j}for(let _=0,y=A.length;_<y;++_){const G=A[_],j=G.start,L=G.count;for(let z=j,B=j+L;z<B;z+=3)k(n[z+0]),k(n[z+1]),k(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new b,s=new b,c=new b,a=new b,o=new b,l=new b,h=new b,u=new b;if(t)for(let p=0,m=t.count;p<m;p+=3){const S=t.getX(p+0),v=t.getX(p+1),f=t.getX(p+2);r.fromBufferAttribute(e,S),s.fromBufferAttribute(e,v),c.fromBufferAttribute(e,f),h.subVectors(c,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,S),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,f),a.add(h),o.add(h),l.add(h),n.setXYZ(S,a.x,a.y,a.z),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let p=0,m=e.count;p<m;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),c.fromBufferAttribute(e,p+2),h.subVectors(c,s),u.subVectors(r,s),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,o){const l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(o.length*h);let m=0,S=0;for(let v=0,f=o.length;v<f;v++){a.isInterleavedBufferAttribute?m=o[v]*a.data.stride+a.offset:m=o[v]*h;for(let d=0;d<h;d++)p[S++]=l[m++]}return new fe(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,n=this.index.array,r=this.attributes;for(const a in r){const o=r[a],l=t(o,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const o=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const p=l[h],m=t(p,n);o.push(m)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let a=0,o=c.length;a<o;a++){const l=c[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(t[l]=o[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const o in n){const l=n[o];t.data.attributes[o]=l.toJSON(t.data)}const r={};let s=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],h=[];for(let u=0,p=l.length;u<p;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(r[o]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let l=0,h=c.length;l<h;l++){const u=c[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qa=new ce,Nn=new na,pr=new Zi,to=new b,hi=new b,ui=new b,di=new b,Rs=new b,mr=new b,_r=new Gt,gr=new Gt,Sr=new Gt,eo=new b,no=new b,io=new b,vr=new b,Mr=new b;class ln extends ye{constructor(t=new Ie,e=new Tc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=r.length;s<c;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,c=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){mr.set(0,0,0);for(let o=0,l=s.length;o<l;o++){const h=a[o],u=s[o];h!==0&&(Rs.fromBufferAttribute(u,t),c?mr.addScaledVector(Rs,h):mr.addScaledVector(Rs.sub(e),h))}e.add(mr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(s),Nn.copy(t.ray).recast(t.near),!(pr.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(pr,to)===null||Nn.origin.distanceToSquared(to)>(t.far-t.near)**2))&&(Qa.copy(s).invert(),Nn.copy(t.ray).applyMatrix4(Qa),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,c=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(c))for(let S=0,v=p.length;S<v;S++){const f=p[S],d=c[f.materialIndex],R=Math.max(f.start,m.start),x=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let A=R,D=x;A<D;A+=3){const w=a.getX(A),C=a.getX(A+1),W=a.getX(A+2);r=xr(this,d,t,n,l,h,u,w,C,W),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const S=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let f=S,d=v;f<d;f+=3){const R=a.getX(f),x=a.getX(f+1),A=a.getX(f+2);r=xr(this,c,t,n,l,h,u,R,x,A),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(o!==void 0)if(Array.isArray(c))for(let S=0,v=p.length;S<v;S++){const f=p[S],d=c[f.materialIndex],R=Math.max(f.start,m.start),x=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let A=R,D=x;A<D;A+=3){const w=A,C=A+1,W=A+2;r=xr(this,d,t,n,l,h,u,w,C,W),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const S=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let f=S,d=v;f<d;f+=3){const R=f,x=f+1,A=f+2;r=xr(this,c,t,n,l,h,u,R,x,A),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function fh(i,t,e,n,r,s,c,a){let o;if(t.side===Pe?o=n.intersectTriangle(c,s,r,!0,a):o=n.intersectTriangle(r,s,c,t.side===Ln,a),o===null)return null;Mr.copy(a),Mr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Mr);return l<e.near||l>e.far?null:{distance:l,point:Mr.clone(),object:i}}function xr(i,t,e,n,r,s,c,a,o,l){i.getVertexPosition(a,hi),i.getVertexPosition(o,ui),i.getVertexPosition(l,di);const h=fh(i,t,e,n,hi,ui,di,vr);if(h){r&&(_r.fromBufferAttribute(r,a),gr.fromBufferAttribute(r,o),Sr.fromBufferAttribute(r,l),h.uv=qe.getInterpolation(vr,hi,ui,di,_r,gr,Sr,new Gt)),s&&(_r.fromBufferAttribute(s,a),gr.fromBufferAttribute(s,o),Sr.fromBufferAttribute(s,l),h.uv1=qe.getInterpolation(vr,hi,ui,di,_r,gr,Sr,new Gt),h.uv2=h.uv1),c&&(eo.fromBufferAttribute(c,a),no.fromBufferAttribute(c,o),io.fromBufferAttribute(c,l),h.normal=qe.getInterpolation(vr,hi,ui,di,eo,no,io,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:o,c:l,normal:new b,materialIndex:0};qe.getNormal(hi,ui,di,u.normal),h.face=u}return h}class Ji extends Ie{constructor(t=1,e=1,n=1,r=1,s=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:c};const a=this;r=Math.floor(r),s=Math.floor(s),c=Math.floor(c);const o=[],l=[],h=[],u=[];let p=0,m=0;S("z","y","x",-1,-1,n,e,t,c,s,0),S("z","y","x",1,-1,n,e,-t,c,s,1),S("x","z","y",1,1,t,n,e,r,c,2),S("x","z","y",1,-1,t,n,-e,r,c,3),S("x","y","z",1,-1,t,e,n,r,s,4),S("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(o),this.setAttribute("position",new dn(l,3)),this.setAttribute("normal",new dn(h,3)),this.setAttribute("uv",new dn(u,2));function S(v,f,d,R,x,A,D,w,C,W,k){const _=A/C,y=D/W,G=A/2,j=D/2,L=w/2,z=C+1,B=W+1;let X=0,V=0;const Y=new b;for(let K=0;K<B;K++){const tt=K*y-j;for(let st=0;st<z;st++){const bt=st*_-G;Y[v]=bt*R,Y[f]=tt*x,Y[d]=L,l.push(Y.x,Y.y,Y.z),Y[v]=0,Y[f]=0,Y[d]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(st/C),u.push(1-K/W),X+=1}}for(let K=0;K<W;K++)for(let tt=0;tt<C;tt++){const st=p+tt+z*K,bt=p+tt+z*(K+1),H=p+(tt+1)+z*(K+1),Z=p+(tt+1)+z*K;o.push(st,bt,Z),o.push(bt,H,Z),V+=6}a.addGroup(m,V,k),m+=V,p+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Li(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ae(i){const t={};for(let e=0;e<i.length;e++){const n=Li(i[e]);for(const r in n)t[r]=n[r]}return t}function ph(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bc(i){return i.getRenderTarget()===null?i.outputColorSpace:$t.workingColorSpace}const mh={clone:Li,merge:Ae};var _h=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_h,this.fragmentShader=gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=ph(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?e.uniforms[r]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[r]={type:"m4",value:c.toArray()}:e.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Cc extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xn=new b,ro=new Gt,so=new Gt;class We extends Cc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xn.x,xn.y).multiplyScalar(-t/xn.z),xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xn.x,xn.y).multiplyScalar(-t/xn.z)}getViewSize(t,e){return this.getViewBounds(t,ro,so),e.subVectors(so,ro)}setViewOffset(t,e,n,r,s,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ls*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const o=c.fullWidth,l=c.fullHeight;s+=c.offsetX*r/o,e-=c.offsetY*n/l,r*=c.width/o,n*=c.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fi=-90,pi=1;class Sh extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new We(fi,pi,t,e);r.layers=this.layers,this.add(r);const s=new We(fi,pi,t,e);s.layers=this.layers,this.add(s);const c=new We(fi,pi,t,e);c.layers=this.layers,this.add(c);const a=new We(fi,pi,t,e);a.layers=this.layers,this.add(a);const o=new We(fi,pi,t,e);o.layers=this.layers,this.add(o);const l=new We(fi,pi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,c,a,o]=e;for(const l of e)this.remove(l);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,c,a,o,l,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,c),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,o),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,p,m),t.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class wc extends be{constructor(t,e,n,r,s,c,a,o,l,h){t=t!==void 0?t:[],e=e!==void 0?e:bi,super(t,e,n,r,s,c,a,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vh extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(qn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Yn?ve:ze),this.texture=new wc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:we}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ji(5,5,5),s=new Pn({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:An});s.uniforms.tEquirect.value=e;const c=new ln(r,s),a=e.minFilter;return e.minFilter===Vn&&(e.minFilter=we),new Sh(1,10,this).update(t,c),e.minFilter=a,c.geometry.dispose(),c.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,n,r);t.setRenderTarget(s)}}const bs=new b,Mh=new b,xh=new zt;class Bn{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=bs.subVectors(n,e).cross(Mh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(bs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xh.getNormalMatrix(t),r=this.coplanarPoint(bs).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new Zi,Er=new b;class Lc{constructor(t=new Bn,e=new Bn,n=new Bn,r=new Bn,s=new Bn,c=new Bn){this.planes=[t,e,n,r,s,c]}set(t,e,n,r,s,c){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(c),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn){const n=this.planes,r=t.elements,s=r[0],c=r[1],a=r[2],o=r[3],l=r[4],h=r[5],u=r[6],p=r[7],m=r[8],S=r[9],v=r[10],f=r[11],d=r[12],R=r[13],x=r[14],A=r[15];if(n[0].setComponents(o-s,p-l,f-m,A-d).normalize(),n[1].setComponents(o+s,p+l,f+m,A+d).normalize(),n[2].setComponents(o+c,p+h,f+S,A+R).normalize(),n[3].setComponents(o-c,p-h,f-S,A-R).normalize(),n[4].setComponents(o-a,p-u,f-v,A-x).normalize(),e===cn)n[5].setComponents(o+a,p+u,f+v,A+x).normalize();else if(e===Wr)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Er.x=r.normal.x>0?t.max.x:t.min.x,Er.y=r.normal.y>0?t.max.y:t.min.y,Er.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pc(){let i=null,t=!1,e=null,n=null;function r(s,c){e(s,c),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Eh(i,t){const e=t.isWebGL2,n=new WeakMap;function r(l,h){const u=l.array,p=l.usage,m=u.byteLength,S=i.createBuffer();i.bindBuffer(h,S),i.bufferData(h,u,p),l.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:S,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,h,u){const p=h.array,m=h._updateRange,S=h.updateRanges;if(i.bindBuffer(u,l),m.count===-1&&S.length===0&&i.bufferSubData(u,0,p),S.length!==0){for(let v=0,f=S.length;v<f;v++){const d=S[v];e?i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function c(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function o(l,h){if(l.isGLBufferAttribute){const p=n.get(l);(!p||p.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,r(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,l,h),u.version=l.version}}return{get:c,remove:a,update:o}}class Jr extends Ie{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,c=e/2,a=Math.floor(n),o=Math.floor(r),l=a+1,h=o+1,u=t/a,p=e/o,m=[],S=[],v=[],f=[];for(let d=0;d<h;d++){const R=d*p-c;for(let x=0;x<l;x++){const A=x*u-s;S.push(A,-R,0),v.push(0,0,1),f.push(x/a),f.push(1-d/o)}}for(let d=0;d<o;d++)for(let R=0;R<a;R++){const x=R+l*d,A=R+l*(d+1),D=R+1+l*(d+1),w=R+1+l*d;m.push(x,A,w),m.push(A,D,w)}this.setIndex(m),this.setAttribute("position",new dn(S,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.width,t.height,t.widthSegments,t.heightSegments)}}var yh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Th=`#ifdef USE_ALPHAHASH
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
#endif`,Ah=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wh=`#ifdef USE_AOMAP
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
#endif`,Lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ph=`#ifdef USE_BATCHING
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
#endif`,Ih=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Dh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Oh=`#ifdef USE_IRIDESCENCE
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
#endif`,Fh=`#ifdef USE_BUMPMAP
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
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yh=`#define PI 3.141592653589793
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
} // validated`,qh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jh=`vec3 transformedNormal = objectNormal;
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
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$h=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",tu=`
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
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iu=`#ifdef USE_ENVMAP
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
#endif`,ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,su=`#ifdef USE_ENVMAP
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
#endif`,au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ou=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cu=`#ifdef USE_FOG
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
#endif`,hu=`#ifdef USE_GRADIENTMAP
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
}`,uu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,du=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fu=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mu=`uniform bool receiveShadow;
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
#endif`,_u=`#ifdef USE_ENVMAP
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
material.diffuseColor = diffuseColor.rgb;`,Su=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,Mu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xu=`PhysicalMaterial material;
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
#endif`,Eu=`struct PhysicalMaterial {
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
#endif`,Tu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Au=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ru=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ou=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fu=`#ifdef USE_MORPHNORMALS
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
#endif`,Bu=`#ifdef USE_MORPHTARGETS
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
#endif`,zu=`#ifdef USE_MORPHTARGETS
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
#endif`,Hu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,ku=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xu=`#ifdef USE_NORMALMAP
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
#endif`,Yu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ju=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ku=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$u=`vec3 packNormalToRGB( const in vec3 normal ) {
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
gl_Position = projectionMatrix * mvPosition;`,td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ed=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,id=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ad=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,od=`float getShadowMask() {
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
}`,cd=`#ifdef USE_SKINNING
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
#endif`,hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ud=`#ifdef USE_SKINNING
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
#endif`,dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,md=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_d=`#ifdef USE_TRANSMISSION
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
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ed=`varying vec2 vUv;
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
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ad=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cd=`#include <common>
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
}`,wd=`#if DEPTH_PACKING == 3200
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
}`,Ld=`#define DISTANCE
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
}`,Pd=`#define DISTANCE
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
}`,Id=`varying vec3 vWorldDirection;
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
}`,Nd=`uniform vec3 diffuse;
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
}`,Od=`#include <common>
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
}`,Fd=`uniform vec3 diffuse;
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
}`,Bd=`#define LAMBERT
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
}`,zd=`#define LAMBERT
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
}`,Hd=`#define MATCAP
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
}`,kd=`#define NORMAL
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
}`,Wd=`#define PHONG
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
}`,Xd=`#define PHONG
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
}`,Yd=`#define STANDARD
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
}`,qd=`#define STANDARD
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
}`,jd=`#define TOON
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
}`,Kd=`#define TOON
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
}`,Zd=`uniform float size;
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
}`,$d=`uniform vec3 diffuse;
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
}`,tf=`uniform float rotation;
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
}`,ef=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:yh,alphahash_pars_fragment:Th,alphamap_fragment:Ah,alphamap_pars_fragment:Rh,alphatest_fragment:bh,alphatest_pars_fragment:Ch,aomap_fragment:wh,aomap_pars_fragment:Lh,batching_pars_vertex:Ph,batching_vertex:Ih,begin_vertex:Dh,beginnormal_vertex:Uh,bsdfs:Nh,iridescence_fragment:Oh,bumpmap_pars_fragment:Fh,clipping_planes_fragment:Bh,clipping_planes_pars_fragment:zh,clipping_planes_pars_vertex:Hh,clipping_planes_vertex:Gh,color_fragment:Vh,color_pars_fragment:kh,color_pars_vertex:Wh,color_vertex:Xh,common:Yh,cube_uv_reflection_fragment:qh,defaultnormal_vertex:jh,displacementmap_pars_vertex:Kh,displacementmap_vertex:Zh,emissivemap_fragment:$h,emissivemap_pars_fragment:Jh,colorspace_fragment:Qh,colorspace_pars_fragment:tu,envmap_fragment:eu,envmap_common_pars_fragment:nu,envmap_pars_fragment:iu,envmap_pars_vertex:ru,envmap_physical_pars_fragment:_u,envmap_vertex:su,fog_vertex:au,fog_pars_vertex:ou,fog_fragment:cu,fog_pars_fragment:lu,gradientmap_pars_fragment:hu,lightmap_fragment:uu,lightmap_pars_fragment:du,lights_lambert_fragment:fu,lights_lambert_pars_fragment:pu,lights_pars_begin:mu,lights_toon_fragment:gu,lights_toon_pars_fragment:Su,lights_phong_fragment:vu,lights_phong_pars_fragment:Mu,lights_physical_fragment:xu,lights_physical_pars_fragment:Eu,lights_fragment_begin:yu,lights_fragment_maps:Tu,lights_fragment_end:Au,logdepthbuf_fragment:Ru,logdepthbuf_pars_fragment:bu,logdepthbuf_pars_vertex:Cu,logdepthbuf_vertex:wu,map_fragment:Lu,map_pars_fragment:Pu,map_particle_fragment:Iu,map_particle_pars_fragment:Du,metalnessmap_fragment:Uu,metalnessmap_pars_fragment:Nu,morphcolor_vertex:Ou,morphnormal_vertex:Fu,morphtarget_pars_vertex:Bu,morphtarget_vertex:zu,normal_fragment_begin:Hu,normal_fragment_maps:Gu,normal_pars_fragment:Vu,normal_pars_vertex:ku,normal_vertex:Wu,normalmap_pars_fragment:Xu,clearcoat_normal_fragment_begin:Yu,clearcoat_normal_fragment_maps:qu,clearcoat_pars_fragment:ju,iridescence_pars_fragment:Ku,opaque_fragment:Zu,packing:$u,premultiplied_alpha_fragment:Ju,project_vertex:Qu,dithering_fragment:td,dithering_pars_fragment:ed,roughnessmap_fragment:nd,roughnessmap_pars_fragment:id,shadowmap_pars_fragment:rd,shadowmap_pars_vertex:sd,shadowmap_vertex:ad,shadowmask_pars_fragment:od,skinbase_vertex:cd,skinning_pars_vertex:ld,skinning_vertex:hd,skinnormal_vertex:ud,specularmap_fragment:dd,specularmap_pars_fragment:fd,tonemapping_fragment:pd,tonemapping_pars_fragment:md,transmission_fragment:_d,transmission_pars_fragment:gd,uv_pars_fragment:Sd,uv_pars_vertex:vd,uv_vertex:Md,worldpos_vertex:xd,background_vert:Ed,background_frag:yd,backgroundCube_vert:Td,backgroundCube_frag:Ad,cube_vert:Rd,cube_frag:bd,depth_vert:Cd,depth_frag:wd,distanceRGBA_vert:Ld,distanceRGBA_frag:Pd,equirect_vert:Id,equirect_frag:Dd,linedashed_vert:Ud,linedashed_frag:Nd,meshbasic_vert:Od,meshbasic_frag:Fd,meshlambert_vert:Bd,meshlambert_frag:zd,meshmatcap_vert:Hd,meshmatcap_frag:Gd,meshnormal_vert:Vd,meshnormal_frag:kd,meshphong_vert:Wd,meshphong_frag:Xd,meshphysical_vert:Yd,meshphysical_frag:qd,meshtoon_vert:jd,meshtoon_frag:Kd,points_vert:Zd,points_frag:$d,shadow_vert:Jd,shadow_frag:Qd,sprite_vert:tf,sprite_frag:ef},rt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Ze={basic:{uniforms:Ae([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ae([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ae([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ae([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ae([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ae([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ae([rt.points,rt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ae([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ae([rt.common,rt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ae([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ae([rt.sprite,rt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ae([rt.common,rt.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ae([rt.lights,rt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Ze.physical={uniforms:Ae([Ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const yr={r:0,b:0,g:0};function nf(i,t,e,n,r,s,c){const a=new kt(0);let o=s===!0?0:1,l,h,u=null,p=0,m=null;function S(f,d){let R=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?v(a,o):x&&x.isColor&&(v(x,1),R=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,c):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||R)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Zr)?(h===void 0&&(h=new ln(new Ji(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Li(Ze.backgroundCube.uniforms),vertexShader:Ze.backgroundCube.vertexShader,fragmentShader:Ze.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=$t.getTransfer(x.colorSpace)!==ee,(u!==x||p!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,p=x.version,m=i.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ln(new Jr(2,2),new Pn({name:"BackgroundMaterial",uniforms:Li(Ze.background.uniforms),vertexShader:Ze.background.vertexShader,fragmentShader:Ze.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=$t.getTransfer(x.colorSpace)!==ee,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||p!==x.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,p=x.version,m=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function v(f,d){f.getRGB(yr,bc(i)),n.buffers.color.setClear(yr.r,yr.g,yr.b,d,c)}return{getClearColor:function(){return a},setClearColor:function(f,d=1){a.set(f),o=d,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(f){o=f,v(a,o)},render:S}}function rf(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),c=n.isWebGL2||s!==null,a={},o=f(null);let l=o,h=!1;function u(L,z,B,X,V){let Y=!1;if(c){const K=v(X,B,z);l!==K&&(l=K,m(l.object)),Y=d(L,X,B,V),Y&&R(L,X,B,V)}else{const K=z.wireframe===!0;(l.geometry!==X.id||l.program!==B.id||l.wireframe!==K)&&(l.geometry=X.id,l.program=B.id,l.wireframe=K,Y=!0)}V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,W(L,z,B,X),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function p(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function S(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function v(L,z,B){const X=B.wireframe===!0;let V=a[L.id];V===void 0&&(V={},a[L.id]=V);let Y=V[z.id];Y===void 0&&(Y={},V[z.id]=Y);let K=Y[X];return K===void 0&&(K=f(p()),Y[X]=K),K}function f(L){const z=[],B=[],X=[];for(let V=0;V<r;V++)z[V]=0,B[V]=0,X[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:B,attributeDivisors:X,object:L,attributes:{},index:null}}function d(L,z,B,X){const V=l.attributes,Y=z.attributes;let K=0;const tt=B.getAttributes();for(const st in tt)if(tt[st].location>=0){const H=V[st];let Z=Y[st];if(Z===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),H===void 0||H.attribute!==Z||Z&&H.data!==Z.data)return!0;K++}return l.attributesNum!==K||l.index!==X}function R(L,z,B,X){const V={},Y=z.attributes;let K=0;const tt=B.getAttributes();for(const st in tt)if(tt[st].location>=0){let H=Y[st];H===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(H=L.instanceColor));const Z={};Z.attribute=H,H&&H.data&&(Z.data=H.data),V[st]=Z,K++}l.attributes=V,l.attributesNum=K,l.index=X}function x(){const L=l.newAttributes;for(let z=0,B=L.length;z<B;z++)L[z]=0}function A(L){D(L,0)}function D(L,z){const B=l.newAttributes,X=l.enabledAttributes,V=l.attributeDivisors;B[L]=1,X[L]===0&&(i.enableVertexAttribArray(L),X[L]=1),V[L]!==z&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,z),V[L]=z)}function w(){const L=l.newAttributes,z=l.enabledAttributes;for(let B=0,X=z.length;B<X;B++)z[B]!==L[B]&&(i.disableVertexAttribArray(B),z[B]=0)}function C(L,z,B,X,V,Y,K){K===!0?i.vertexAttribIPointer(L,z,B,V,Y):i.vertexAttribPointer(L,z,B,X,V,Y)}function W(L,z,B,X){if(n.isWebGL2===!1&&(L.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const V=X.attributes,Y=B.getAttributes(),K=z.defaultAttributeValues;for(const tt in Y){const st=Y[tt];if(st.location>=0){let bt=V[tt];if(bt===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(bt=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(bt=L.instanceColor)),bt!==void 0){const H=bt.normalized,Z=bt.itemSize,lt=e.get(bt);if(lt===void 0)continue;const vt=lt.buffer,Mt=lt.type,ht=lt.bytesPerElement,Vt=n.isWebGL2===!0&&(Mt===i.INT||Mt===i.UNSIGNED_INT||bt.gpuType===lc);if(bt.isInterleavedBufferAttribute){const Tt=bt.data,I=Tt.stride,ae=bt.offset;if(Tt.isInstancedInterleavedBuffer){for(let gt=0;gt<st.locationSize;gt++)D(st.location+gt,Tt.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let gt=0;gt<st.locationSize;gt++)A(st.location+gt);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let gt=0;gt<st.locationSize;gt++)C(st.location+gt,Z/st.locationSize,Mt,H,I*ht,(ae+Z/st.locationSize*gt)*ht,Vt)}else{if(bt.isInstancedBufferAttribute){for(let Tt=0;Tt<st.locationSize;Tt++)D(st.location+Tt,bt.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Tt=0;Tt<st.locationSize;Tt++)A(st.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let Tt=0;Tt<st.locationSize;Tt++)C(st.location+Tt,Z/st.locationSize,Mt,H,Z*ht,Z/st.locationSize*Tt*ht,Vt)}}else if(K!==void 0){const H=K[tt];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(st.location,H);break;case 3:i.vertexAttrib3fv(st.location,H);break;case 4:i.vertexAttrib4fv(st.location,H);break;default:i.vertexAttrib1fv(st.location,H)}}}}w()}function k(){G();for(const L in a){const z=a[L];for(const B in z){const X=z[B];for(const V in X)S(X[V].object),delete X[V];delete z[B]}delete a[L]}}function _(L){if(a[L.id]===void 0)return;const z=a[L.id];for(const B in z){const X=z[B];for(const V in X)S(X[V].object),delete X[V];delete z[B]}delete a[L.id]}function y(L){for(const z in a){const B=a[z];if(B[L.id]===void 0)continue;const X=B[L.id];for(const V in X)S(X[V].object),delete X[V];delete B[L.id]}}function G(){j(),h=!0,l!==o&&(l=o,m(l.object))}function j(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:G,resetDefaultState:j,dispose:k,releaseStatesOfGeometry:_,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:A,disableUnusedAttributes:w}}function sf(i,t,e,n){const r=n.isWebGL2;let s;function c(h){s=h}function a(h,u){i.drawArrays(s,h,u),e.update(u,s,1)}function o(h,u,p){if(p===0)return;let m,S;if(r)m=i,S="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[S](s,h,u,p),e.update(u,s,p)}function l(h,u,p){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let S=0;S<p;S++)this.render(h[S],u[S]);else{m.multiDrawArraysWEBGL(s,h,0,u,0,p);let S=0;for(let v=0;v<p;v++)S+=u[v];e.update(S,s,1)}}this.setMode=c,this.render=a,this.renderInstances=o,this.renderMultiDraw=l}function af(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=c||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,A=c||t.has("OES_texture_float"),D=x&&A,w=c?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:f,maxVaryings:d,maxFragmentUniforms:R,vertexTextures:x,floatFragmentTextures:A,floatVertexTextures:D,maxSamples:w}}function of(i){const t=this;let e=null,n=0,r=!1,s=!1;const c=new Bn,a=new zt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||n!==0||r;return r=p,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,m){const S=u.clippingPlanes,v=u.clipIntersection,f=u.clipShadows,d=i.get(u);if(!r||S===null||S.length===0||s&&!f)s?h(null):l();else{const R=s?0:n,x=R*4;let A=d.clippingState||null;o.value=A,A=h(S,p,x,m);for(let D=0;D!==x;++D)A[D]=e[D];d.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=R}};function l(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,m,S){const v=u!==null?u.length:0;let f=null;if(v!==0){if(f=o.value,S!==!0||f===null){const d=m+v*4,R=p.matrixWorldInverse;a.getNormalMatrix(R),(f===null||f.length<d)&&(f=new Float32Array(d));for(let x=0,A=m;x!==v;++x,A+=4)c.copy(u[x]).applyMatrix4(R,a),c.normal.toArray(f,A),f[A+3]=c.constant}o.value=f,o.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function cf(i){let t=new WeakMap;function e(c,a){return a===Gs?c.mapping=bi:a===Vs&&(c.mapping=Ci),c}function n(c){if(c&&c.isTexture){const a=c.mapping;if(a===Gs||a===Vs)if(t.has(c)){const o=t.get(c).texture;return e(o,c.mapping)}else{const o=c.image;if(o&&o.height>0){const l=new vh(o.height);return l.fromEquirectangularTexture(i,c),t.set(c,l),c.addEventListener("dispose",r),e(l.texture,c.mapping)}else return null}}return c}function r(c){const a=c.target;a.removeEventListener("dispose",r);const o=t.get(a);o!==void 0&&(t.delete(a),o.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ic extends Cc{constructor(t=-1,e=1,n=1,r=-1,s=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,c=n+t,a=r+e,o=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,c=s+l*this.view.width,a-=h*this.view.offsetY,o=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,c,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ei=4,ao=[.125,.215,.35,.446,.526,.582],Gn=20,Cs=new Ic,oo=new kt;let ws=null,Ls=0,Ps=0;const zn=(1+Math.sqrt(5))/2,mi=1/zn,co=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,zn,mi),new b(0,zn,-mi),new b(mi,0,zn),new b(-mi,0,zn),new b(zn,mi,0),new b(-zn,mi,0)];class lo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ws=this._renderer.getRenderTarget(),Ls=this._renderer.getActiveCubeFace(),Ps=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ws,Ls,Ps),t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bi||t.mapping===Ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ws=this._renderer.getRenderTarget(),Ls=this._renderer.getActiveCubeFace(),Ps=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:we,minFilter:we,generateMipmaps:!1,type:Yi,format:Ye,colorSpace:fn,depthBuffer:!1},r=ho(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ho(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lf(s)),this._blurMaterial=hf(s,t,e)}return r}_compileMaterial(t){const e=new ln(this._lodPlanes[0],t);this._renderer.compile(e,Cs)}_sceneToCubeUV(t,e,n,r){const a=new We(90,1,e,n),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(oo),h.toneMapping=bn,h.autoClear=!1;const m=new Tc({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),S=new ln(new Ji,m);let v=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,v=!0):(m.color.copy(oo),v=!0);for(let d=0;d<6;d++){const R=d%3;R===0?(a.up.set(0,o[d],0),a.lookAt(l[d],0,0)):R===1?(a.up.set(0,0,o[d]),a.lookAt(0,l[d],0)):(a.up.set(0,o[d],0),a.lookAt(0,0,l[d]));const x=this._cubeSize;Tr(r,R*x,d>2?x:0,x,x),h.setRenderTarget(r),v&&h.render(S,a),h.render(t,a)}S.geometry.dispose(),S.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===bi||t.mapping===Ci;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uo());const s=r?this._cubemapMaterial:this._equirectMaterial,c=new ln(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const o=this._cubeSize;Tr(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(c,Cs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=co[(r-1)%co.length];this._blur(t,r-1,r,s,c)}e.autoClear=n}_blur(t,e,n,r,s){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,n,r,"latitudinal",s),this._halfBlur(c,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,c,a){const o=this._renderer,l=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ln(this._lodPlanes[r],l),p=l.uniforms,m=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Gn-1),v=s/S,f=isFinite(s)?1+Math.floor(h*v):Gn;f>Gn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Gn}`);const d=[];let R=0;for(let C=0;C<Gn;++C){const W=C/v,k=Math.exp(-W*W/2);d.push(k),C===0?R+=k:C<f&&(R+=2*k)}for(let C=0;C<d.length;C++)d[C]=d[C]/R;p.envMap.value=t.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=c==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:x}=this;p.dTheta.value=S,p.mipInt.value=x-n;const A=this._sizeLods[r],D=3*A*(r>x-Ei?r-x+Ei:0),w=4*(this._cubeSize-A);Tr(e,D,w,3*A,2*A),o.setRenderTarget(e),o.render(u,Cs)}}function lf(i){const t=[],e=[],n=[];let r=i;const s=i-Ei+1+ao.length;for(let c=0;c<s;c++){const a=Math.pow(2,r);e.push(a);let o=1/a;c>i-Ei?o=ao[c-i+Ei-1]:c===0&&(o=0),n.push(o);const l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,S=6,v=3,f=2,d=1,R=new Float32Array(v*S*m),x=new Float32Array(f*S*m),A=new Float32Array(d*S*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,W=w>2?0:-1,k=[C,W,0,C+2/3,W,0,C+2/3,W+1,0,C,W,0,C+2/3,W+1,0,C,W+1,0];R.set(k,v*S*w),x.set(p,f*S*w);const _=[w,w,w,w,w,w];A.set(_,d*S*w)}const D=new Ie;D.setAttribute("position",new fe(R,v)),D.setAttribute("uv",new fe(x,f)),D.setAttribute("faceIndex",new fe(A,d)),t.push(D),r>Ei&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ho(i,t,e){const n=new jn(i,t,e);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function hf(i,t,e){const n=new Float32Array(Gn),r=new b(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ia(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function uo(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ia(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function fo(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function ia(){return`

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
	`}function uf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const o=a.mapping,l=o===Gs||o===Vs,h=o===bi||o===Ci;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new lo(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&r(u)){e===null&&(e=new lo(i));const p=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let o=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&o++;return o===l}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:c}}function df(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ff(i,t,e,n){const r={},s=new WeakMap;function c(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const S in p.attributes)t.remove(p.attributes[S]);for(const S in p.morphAttributes){const v=p.morphAttributes[S];for(let f=0,d=v.length;f<d;f++)t.remove(v[f])}p.removeEventListener("dispose",c),delete r[p.id];const m=s.get(p);m&&(t.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return r[p.id]===!0||(p.addEventListener("dispose",c),r[p.id]=!0,e.memory.geometries++),p}function o(u){const p=u.attributes;for(const S in p)t.update(p[S],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const S in m){const v=m[S];for(let f=0,d=v.length;f<d;f++)t.update(v[f],i.ARRAY_BUFFER)}}function l(u){const p=[],m=u.index,S=u.attributes.position;let v=0;if(m!==null){const R=m.array;v=m.version;for(let x=0,A=R.length;x<A;x+=3){const D=R[x+0],w=R[x+1],C=R[x+2];p.push(D,w,w,C,C,D)}}else if(S!==void 0){const R=S.array;v=S.version;for(let x=0,A=R.length/3-1;x<A;x+=3){const D=x+0,w=x+1,C=x+2;p.push(D,w,w,C,C,D)}}else return;const f=new(Sc(p)?Rc:Ac)(p,1);f.version=v;const d=s.get(u);d&&t.remove(d),s.set(u,f)}function h(u){const p=s.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:o,getWireframeAttribute:h}}function pf(i,t,e,n){const r=n.isWebGL2;let s;function c(m){s=m}let a,o;function l(m){a=m.type,o=m.bytesPerElement}function h(m,S){i.drawElements(s,S,a,m*o),e.update(S,s,1)}function u(m,S,v){if(v===0)return;let f,d;if(r)f=i,d="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,S,a,m*o,v),e.update(S,s,v)}function p(m,S,v){if(v===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<v;d++)this.render(m[d]/o,S[d]);else{f.multiDrawElementsWEBGL(s,S,0,a,m,0,v);let d=0;for(let R=0;R<v;R++)d+=S[R];e.update(d,s,1)}}this.setMode=c,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function mf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,c,a){switch(e.calls++,c){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function _f(i,t){return i[0]-t[0]}function gf(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Sf(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,c=new Me,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function o(l,h,u){const p=l.morphTargetInfluences;if(t.isWebGL2===!0){const S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=S!==void 0?S.length:0;let f=s.get(h);if(f===void 0||f.count!==v){let z=function(){j.dispose(),s.delete(h),h.removeEventListener("dispose",z)};var m=z;f!==void 0&&f.texture.dispose();const x=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,D=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],W=h.morphAttributes.color||[];let k=0;x===!0&&(k=1),A===!0&&(k=2),D===!0&&(k=3);let _=h.attributes.position.count*k,y=1;_>t.maxTextureSize&&(y=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const G=new Float32Array(_*y*4*v),j=new xc(G,_,y,v);j.type=on,j.needsUpdate=!0;const L=k*4;for(let B=0;B<v;B++){const X=w[B],V=C[B],Y=W[B],K=_*y*4*B;for(let tt=0;tt<X.count;tt++){const st=tt*L;x===!0&&(c.fromBufferAttribute(X,tt),G[K+st+0]=c.x,G[K+st+1]=c.y,G[K+st+2]=c.z,G[K+st+3]=0),A===!0&&(c.fromBufferAttribute(V,tt),G[K+st+4]=c.x,G[K+st+5]=c.y,G[K+st+6]=c.z,G[K+st+7]=0),D===!0&&(c.fromBufferAttribute(Y,tt),G[K+st+8]=c.x,G[K+st+9]=c.y,G[K+st+10]=c.z,G[K+st+11]=Y.itemSize===4?c.w:1)}}f={count:v,texture:j,size:new Gt(_,y)},s.set(h,f),h.addEventListener("dispose",z)}let d=0;for(let x=0;x<p.length;x++)d+=p[x];const R=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",R),u.getUniforms().setValue(i,"morphTargetInfluences",p),u.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{const S=p===void 0?0:p.length;let v=n[h.id];if(v===void 0||v.length!==S){v=[];for(let A=0;A<S;A++)v[A]=[A,0];n[h.id]=v}for(let A=0;A<S;A++){const D=v[A];D[0]=A,D[1]=p[A]}v.sort(gf);for(let A=0;A<8;A++)A<S&&v[A][1]?(a[A][0]=v[A][0],a[A][1]=v[A][1]):(a[A][0]=Number.MAX_SAFE_INTEGER,a[A][1]=0);a.sort(_f);const f=h.morphAttributes.position,d=h.morphAttributes.normal;let R=0;for(let A=0;A<8;A++){const D=a[A],w=D[0],C=D[1];w!==Number.MAX_SAFE_INTEGER&&C?(f&&h.getAttribute("morphTarget"+A)!==f[w]&&h.setAttribute("morphTarget"+A,f[w]),d&&h.getAttribute("morphNormal"+A)!==d[w]&&h.setAttribute("morphNormal"+A,d[w]),r[A]=C,R+=C):(f&&h.hasAttribute("morphTarget"+A)===!0&&h.deleteAttribute("morphTarget"+A),d&&h.hasAttribute("morphNormal"+A)===!0&&h.deleteAttribute("morphNormal"+A),r[A]=0)}const x=h.morphTargetsRelative?1:1-R;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:o}}function vf(i,t,e,n){let r=new WeakMap;function s(o){const l=n.render.frame,h=o.geometry,u=t.get(o,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),r.get(o)!==l&&(e.update(o.instanceMatrix,i.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,i.ARRAY_BUFFER),r.set(o,l))),o.isSkinnedMesh){const p=o.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return u}function c(){r=new WeakMap}function a(o){const l=o.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:c}}class Dc extends be{constructor(t,e,n,r,s,c,a,o,l,h){if(h=h!==void 0?h:Xn,h!==Xn&&h!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xn&&(n=Tn),n===void 0&&h===wi&&(n=Wn),super(null,r,s,c,a,o,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:de,this.minFilter=o!==void 0?o:de,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Uc=new be,Nc=new Dc(1,1);Nc.compareFunction=gc;const Oc=new xc,Fc=new nh,Bc=new wc,po=[],mo=[],_o=new Float32Array(16),go=new Float32Array(9),So=new Float32Array(4);function Di(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=po[r];if(s===void 0&&(s=new Float32Array(r),po[r]=s),t!==0){n.toArray(s,0);for(let c=1,a=0;c!==t;++c)a+=e,i[c].toArray(s,a)}return s}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qr(i,t){let e=mo[t];e===void 0&&(e=new Int32Array(t),mo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function Ef(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function yf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function Tf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;So.set(n),i.uniformMatrix2fv(this.addr,!1,So),me(e,n)}}function Af(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;go.set(n),i.uniformMatrix3fv(this.addr,!1,go),me(e,n)}}function Rf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;_o.set(n),i.uniformMatrix4fv(this.addr,!1,_o),me(e,n)}}function bf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function Lf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function Pf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function If(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function Df(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function Uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function Nf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Nc:Uc;e.setTexture2D(t||s,r)}function Of(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Fc,r)}function Ff(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Bc,r)}function Bf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Oc,r)}function zf(i){switch(i){case 5126:return Mf;case 35664:return xf;case 35665:return Ef;case 35666:return yf;case 35674:return Tf;case 35675:return Af;case 35676:return Rf;case 5124:case 35670:return bf;case 35667:case 35671:return Cf;case 35668:case 35672:return wf;case 35669:case 35673:return Lf;case 5125:return Pf;case 36294:return If;case 36295:return Df;case 36296:return Uf;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return Of;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Bf}}function Hf(i,t){i.uniform1fv(this.addr,t)}function Gf(i,t){const e=Di(t,this.size,2);i.uniform2fv(this.addr,e)}function Vf(i,t){const e=Di(t,this.size,3);i.uniform3fv(this.addr,e)}function kf(i,t){const e=Di(t,this.size,4);i.uniform4fv(this.addr,e)}function Wf(i,t){const e=Di(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xf(i,t){const e=Di(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yf(i,t){const e=Di(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qf(i,t){i.uniform1iv(this.addr,t)}function jf(i,t){i.uniform2iv(this.addr,t)}function Kf(i,t){i.uniform3iv(this.addr,t)}function Zf(i,t){i.uniform4iv(this.addr,t)}function $f(i,t){i.uniform1uiv(this.addr,t)}function Jf(i,t){i.uniform2uiv(this.addr,t)}function Qf(i,t){i.uniform3uiv(this.addr,t)}function tp(i,t){i.uniform4uiv(this.addr,t)}function ep(i,t,e){const n=this.cache,r=t.length,s=Qr(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let c=0;c!==r;++c)e.setTexture2D(t[c]||Uc,s[c])}function np(i,t,e){const n=this.cache,r=t.length,s=Qr(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let c=0;c!==r;++c)e.setTexture3D(t[c]||Fc,s[c])}function ip(i,t,e){const n=this.cache,r=t.length,s=Qr(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let c=0;c!==r;++c)e.setTextureCube(t[c]||Bc,s[c])}function rp(i,t,e){const n=this.cache,r=t.length,s=Qr(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let c=0;c!==r;++c)e.setTexture2DArray(t[c]||Oc,s[c])}function sp(i){switch(i){case 5126:return Hf;case 35664:return Gf;case 35665:return Vf;case 35666:return kf;case 35674:return Wf;case 35675:return Xf;case 35676:return Yf;case 5124:case 35670:return qf;case 35667:case 35671:return jf;case 35668:case 35672:return Kf;case 35669:case 35673:return Zf;case 5125:return $f;case 36294:return Jf;case 36295:return Qf;case 36296:return tp;case 35678:case 36198:case 36298:case 36306:case 35682:return ep;case 35679:case 36299:case 36307:return np;case 35680:case 36300:case 36308:case 36293:return ip;case 36289:case 36303:case 36311:case 36292:return rp}}class ap{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zf(e.type)}}class op{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sp(e.type)}}class cp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,c=r.length;s!==c;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Is=/(\w+)(\])?(\[|\.)?/g;function vo(i,t){i.seq.push(t),i.map[t.id]=t}function lp(i,t,e){const n=i.name,r=n.length;for(Is.lastIndex=0;;){const s=Is.exec(n),c=Is.lastIndex;let a=s[1];const o=s[2]==="]",l=s[3];if(o&&(a=a|0),l===void 0||l==="["&&c+2===r){vo(e,l===void 0?new ap(a,i,t):new op(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new cp(a),vo(e,u)),e=u}}}class Or{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),c=t.getUniformLocation(e,s.name);lp(s,c,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,c=e.length;s!==c;++s){const a=e[s],o=n[a.id];o.needsUpdate!==!1&&a.setValue(t,o.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const c=t[r];c.id in e&&n.push(c)}return n}}function Mo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const hp=37297;let up=0;function dp(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let c=r;c<s;c++){const a=c+1;n.push(`${a===t?">":" "} ${a}: ${e[c]}`)}return n.join(`
`)}function fp(i){const t=$t.getPrimaries($t.workingColorSpace),e=$t.getPrimaries(i);let n;switch(t===e?n="":t===kr&&e===Vr?n="LinearDisplayP3ToLinearSRGB":t===Vr&&e===kr&&(n="LinearSRGBToLinearDisplayP3"),i){case fn:case $r:return[n,"LinearTransferOETF"];case ve:case ea:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function xo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const c=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+dp(i.getShaderSource(t),c)}else return r}function pp(i,t){const e=fp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function mp(i,t){let e;switch(t){case Al:e="Linear";break;case Rl:e="Reinhard";break;case bl:e="OptimizedCineon";break;case Cl:e="ACESFilmic";break;case Ll:e="AgX";break;case wl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function _p(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(yi).join(`
`)}function gp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yi).join(`
`)}function Sp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),c=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[c]={type:s.type,location:i.getAttribLocation(t,c),locationSize:a}}return e}function yi(i){return i!==""}function Eo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ks(i){return i.replace(Mp,Ep)}const xp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ep(i,t){let e=Ot[t];if(e===void 0){const n=xp.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ks(e)}const yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function To(i){return i.replace(yp,Tp)}function Tp(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ao(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(t+=`precision ${i.precision} sampler3D;
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
		`),i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ap(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ac?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===sn&&(t="SHADOWMAP_TYPE_VSM"),t}function Rp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bi:case Ci:t="ENVMAP_TYPE_CUBE";break;case Zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ci:t="ENVMAP_MODE_REFRACTION";break}return t}function Cp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case oc:t="ENVMAP_BLENDING_MULTIPLY";break;case yl:t="ENVMAP_BLENDING_MIX";break;case Tl:t="ENVMAP_BLENDING_ADD";break}return t}function wp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Lp(i,t,e,n){const r=i.getContext(),s=e.defines;let c=e.vertexShader,a=e.fragmentShader;const o=Ap(e),l=Rp(e),h=bp(e),u=Cp(e),p=wp(e),m=e.isWebGL2?"":_p(e),S=gp(e),v=Sp(s),f=r.createProgram();let d,R,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(yi).join(`
`),d.length>0&&(d+=`
`),R=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(yi).join(`
`),R.length>0&&(R+=`
`)):(d=[Ao(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yi).join(`
`),R=[m,Ao(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==bn?mp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,pp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yi).join(`
`)),c=Ks(c),c=Eo(c,e),c=yo(c,e),a=Ks(a),a=Eo(a,e),a=yo(a,e),c=To(c),a=To(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,R=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+R);const A=x+d+c,D=x+R+a,w=Mo(r,r.VERTEX_SHADER,A),C=Mo(r,r.FRAGMENT_SHADER,D);r.attachShader(f,w),r.attachShader(f,C),e.index0AttributeName!==void 0?r.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function W(G){if(i.debug.checkShaderErrors){const j=r.getProgramInfoLog(f).trim(),L=r.getShaderInfoLog(w).trim(),z=r.getShaderInfoLog(C).trim();let B=!0,X=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,f,w,C);else{const V=xo(r,w,"vertex"),Y=xo(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+j+`
`+V+`
`+Y)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(L===""||z==="")&&(X=!1);X&&(G.diagnostics={runnable:B,programLog:j,vertexShader:{log:L,prefix:d},fragmentShader:{log:z,prefix:R}})}r.deleteShader(w),r.deleteShader(C),k=new Or(r,f),_=vp(r,f)}let k;this.getUniforms=function(){return k===void 0&&W(this),k};let _;this.getAttributes=function(){return _===void 0&&W(this),_};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(f,hp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=up++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=w,this.fragmentShader=C,this}let Pp=0;class Ip{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),c=this._getShaderCacheForMaterial(t);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Dp(t),e.set(t,n)),n}}class Dp{constructor(t){this.id=Pp++,this.code=t,this.usedTimes=0}}function Up(i,t,e,n,r,s,c){const a=new Ec,o=new Ip,l=new Set,h=[],u=r.isWebGL2,p=r.logarithmicDepthBuffer,m=r.vertexTextures;let S=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function d(_,y,G,j,L){const z=j.fog,B=L.geometry,X=_.isMeshStandardMaterial?j.environment:null,V=(_.isMeshStandardMaterial?e:t).get(_.envMap||X),Y=V&&V.mapping===Zr?V.image.height:null,K=v[_.type];_.precision!==null&&(S=r.getMaxPrecision(_.precision),S!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",S,"instead."));const tt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,st=tt!==void 0?tt.length:0;let bt=0;B.morphAttributes.position!==void 0&&(bt=1),B.morphAttributes.normal!==void 0&&(bt=2),B.morphAttributes.color!==void 0&&(bt=3);let H,Z,lt,vt;if(K){const jt=Ze[K];H=jt.vertexShader,Z=jt.fragmentShader}else H=_.vertexShader,Z=_.fragmentShader,o.update(_),lt=o.getVertexShaderID(_),vt=o.getFragmentShaderID(_);const Mt=i.getRenderTarget(),ht=L.isInstancedMesh===!0,Vt=L.isBatchedMesh===!0,Tt=!!_.map,I=!!_.matcap,ae=!!V,gt=!!_.aoMap,Ct=!!_.lightMap,mt=!!_.bumpMap,Jt=!!_.normalMap,Et=!!_.displacementMap,E=!!_.emissiveMap,g=!!_.metalnessMap,U=!!_.roughnessMap,Q=_.anisotropy>0,q=_.clearcoat>0,J=_.iridescence>0,ft=_.sheen>0,at=_.transmission>0,ut=Q&&!!_.anisotropyMap,yt=q&&!!_.clearcoatMap,Dt=q&&!!_.clearcoatNormalMap,$=q&&!!_.clearcoatRoughnessMap,Yt=J&&!!_.iridescenceMap,Ft=J&&!!_.iridescenceThicknessMap,wt=ft&&!!_.sheenColorMap,_t=ft&&!!_.sheenRoughnessMap,ct=!!_.specularMap,Lt=!!_.specularColorMap,Wt=!!_.specularIntensityMap,qt=at&&!!_.transmissionMap,Bt=at&&!!_.thicknessMap,Ht=!!_.gradientMap,T=!!_.alphaMap,et=_.alphaTest>0,nt=!!_.alphaHash,dt=!!_.extensions;let St=bn;_.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(St=i.toneMapping);const Xt={isWebGL2:u,shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:H,fragmentShader:Z,defines:_.defines,customVertexShaderID:lt,customFragmentShaderID:vt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:S,batching:Vt,instancing:ht,instancingColor:ht&&L.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Mt===null?i.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:fn,alphaToCoverage:!!_.alphaToCoverage,map:Tt,matcap:I,envMap:ae,envMapMode:ae&&V.mapping,envMapCubeUVHeight:Y,aoMap:gt,lightMap:Ct,bumpMap:mt,normalMap:Jt,displacementMap:m&&Et,emissiveMap:E,normalMapObjectSpace:Jt&&_.normalMapType===Vl,normalMapTangentSpace:Jt&&_.normalMapType===Gl,metalnessMap:g,roughnessMap:U,anisotropy:Q,anisotropyMap:ut,clearcoat:q,clearcoatMap:yt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:$,iridescence:J,iridescenceMap:Yt,iridescenceThicknessMap:Ft,sheen:ft,sheenColorMap:wt,sheenRoughnessMap:_t,specularMap:ct,specularColorMap:Lt,specularIntensityMap:Wt,transmission:at,transmissionMap:qt,thicknessMap:Bt,gradientMap:Ht,opaque:_.transparent===!1&&_.blending===Ai&&_.alphaToCoverage===!1,alphaMap:T,alphaTest:et,alphaHash:nt,combine:_.combine,mapUv:Tt&&f(_.map.channel),aoMapUv:gt&&f(_.aoMap.channel),lightMapUv:Ct&&f(_.lightMap.channel),bumpMapUv:mt&&f(_.bumpMap.channel),normalMapUv:Jt&&f(_.normalMap.channel),displacementMapUv:Et&&f(_.displacementMap.channel),emissiveMapUv:E&&f(_.emissiveMap.channel),metalnessMapUv:g&&f(_.metalnessMap.channel),roughnessMapUv:U&&f(_.roughnessMap.channel),anisotropyMapUv:ut&&f(_.anisotropyMap.channel),clearcoatMapUv:yt&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&f(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:_t&&f(_.sheenRoughnessMap.channel),specularMapUv:ct&&f(_.specularMap.channel),specularColorMapUv:Lt&&f(_.specularColorMap.channel),specularIntensityMapUv:Wt&&f(_.specularIntensityMap.channel),transmissionMapUv:qt&&f(_.transmissionMap.channel),thicknessMapUv:Bt&&f(_.thicknessMap.channel),alphaMapUv:T&&f(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Jt||Q),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Tt||T),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:bt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Tt&&_.map.isVideoTexture===!0&&$t.getTransfer(_.map.colorSpace)===ee,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===an,flipSided:_.side===Pe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:dt&&_.extensions.derivatives===!0,extensionFragDepth:dt&&_.extensions.fragDepth===!0,extensionDrawBuffers:dt&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:dt&&_.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function R(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const G in _.defines)y.push(G),y.push(_.defines[G]);return _.isRawShaderMaterial===!1&&(x(y,_),A(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function x(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function A(_,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),_.push(a.mask)}function D(_){const y=v[_.type];let G;if(y){const j=Ze[y];G=mh.clone(j.uniforms)}else G=_.uniforms;return G}function w(_,y){let G;for(let j=0,L=h.length;j<L;j++){const z=h[j];if(z.cacheKey===y){G=z,++G.usedTimes;break}}return G===void 0&&(G=new Lp(i,y,_,s),h.push(G)),G}function C(_){if(--_.usedTimes===0){const y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function W(_){o.remove(_)}function k(){o.dispose()}return{getParameters:d,getProgramCacheKey:R,getUniforms:D,acquireProgram:w,releaseProgram:C,releaseShaderCache:W,programs:h,dispose:k}}function Np(){let i=new WeakMap;function t(s){let c=i.get(s);return c===void 0&&(c={},i.set(s,c)),c}function e(s){i.delete(s)}function n(s,c,a){i.get(s)[c]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Op(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ro(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bo(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function c(u,p,m,S,v,f){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:p,material:m,groupOrder:S,renderOrder:u.renderOrder,z:v,group:f},i[t]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=m,d.groupOrder=S,d.renderOrder=u.renderOrder,d.z=v,d.group=f),t++,d}function a(u,p,m,S,v,f){const d=c(u,p,m,S,v,f);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):e.push(d)}function o(u,p,m,S,v,f){const d=c(u,p,m,S,v,f);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):e.unshift(d)}function l(u,p){e.length>1&&e.sort(u||Op),n.length>1&&n.sort(p||Ro),r.length>1&&r.sort(p||Ro)}function h(){for(let u=t,p=i.length;u<p;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:o,finish:h,sort:l}}function Fp(){let i=new WeakMap;function t(n,r){const s=i.get(n);let c;return s===void 0?(c=new bo,i.set(n,[c])):r>=s.length?(c=new bo,s.push(c)):c=s[r],c}function e(){i=new WeakMap}return{get:t,dispose:e}}function Bp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new kt};break;case"SpotLight":e={position:new b,direction:new b,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new b,halfWidth:new b,halfHeight:new b};break}return i[t.id]=e,e}}}function zp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Hp=0;function Gp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vp(i,t){const e=new Bp,n=zp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new b);const s=new b,c=new ce,a=new ce;function o(h,u){let p=0,m=0,S=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let v=0,f=0,d=0,R=0,x=0,A=0,D=0,w=0,C=0,W=0,k=0;h.sort(Gp);const _=u===!0?Math.PI:1;for(let G=0,j=h.length;G<j;G++){const L=h[G],z=L.color,B=L.intensity,X=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=z.r*B*_,m+=z.g*B*_,S+=z.b*B*_;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(L.sh.coefficients[Y],B);k++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*_),L.castShadow){const K=L.shadow,tt=n.get(L);tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,r.directionalShadow[v]=tt,r.directionalShadowMap[v]=V,r.directionalShadowMatrix[v]=L.shadow.matrix,A++}r.directional[v]=Y,v++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(z).multiplyScalar(B*_),Y.distance=X,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,r.spot[d]=Y;const K=L.shadow;if(L.map&&(r.spotLightMap[C]=L.map,C++,K.updateMatrices(L),L.castShadow&&W++),r.spotLightMatrix[d]=K.matrix,L.castShadow){const tt=n.get(L);tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,r.spotShadow[d]=tt,r.spotShadowMap[d]=V,w++}d++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(z).multiplyScalar(B),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),r.rectArea[R]=Y,R++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*_),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const K=L.shadow,tt=n.get(L);tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,tt.shadowCameraNear=K.camera.near,tt.shadowCameraFar=K.camera.far,r.pointShadow[f]=tt,r.pointShadowMap[f]=V,r.pointShadowMatrix[f]=L.shadow.matrix,D++}r.point[f]=Y,f++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(B*_),Y.groundColor.copy(L.groundColor).multiplyScalar(B*_),r.hemi[x]=Y,x++}}R>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=rt.LTC_FLOAT_1,r.rectAreaLTC2=rt.LTC_FLOAT_2):(r.rectAreaLTC1=rt.LTC_HALF_1,r.rectAreaLTC2=rt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=rt.LTC_FLOAT_1,r.rectAreaLTC2=rt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=rt.LTC_HALF_1,r.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=S;const y=r.hash;(y.directionalLength!==v||y.pointLength!==f||y.spotLength!==d||y.rectAreaLength!==R||y.hemiLength!==x||y.numDirectionalShadows!==A||y.numPointShadows!==D||y.numSpotShadows!==w||y.numSpotMaps!==C||y.numLightProbes!==k)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=R,r.point.length=f,r.hemi.length=x,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=w+C-W,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=W,r.numLightProbes=k,y.directionalLength=v,y.pointLength=f,y.spotLength=d,y.rectAreaLength=R,y.hemiLength=x,y.numDirectionalShadows=A,y.numPointShadows=D,y.numSpotShadows=w,y.numSpotMaps=C,y.numLightProbes=k,r.version=Hp++)}function l(h,u){let p=0,m=0,S=0,v=0,f=0;const d=u.matrixWorldInverse;for(let R=0,x=h.length;R<x;R++){const A=h[R];if(A.isDirectionalLight){const D=r.directional[p];D.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(d),p++}else if(A.isSpotLight){const D=r.spot[S];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(d),D.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(d),S++}else if(A.isRectAreaLight){const D=r.rectArea[v];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(d),a.identity(),c.copy(A.matrixWorld),c.premultiply(d),a.extractRotation(c),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){const D=r.point[m];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(d),m++}else if(A.isHemisphereLight){const D=r.hemi[f];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(d),f++}}}return{setup:o,setupView:l,state:r}}function Co(i,t){const e=new Vp(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function c(u){n.push(u)}function a(u){r.push(u)}function o(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:o,setupLightsView:l,pushLight:c,pushShadow:a}}function kp(i,t){let e=new WeakMap;function n(s,c=0){const a=e.get(s);let o;return a===void 0?(o=new Co(i,t),e.set(s,[o])):c>=a.length?(o=new Co(i,t),a.push(o)):o=a[c],o}function r(){e=new WeakMap}return{get:n,dispose:r}}class Wp extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xp extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Yp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qp=`uniform sampler2D shadow_pass;
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
}`;function jp(i,t,e){let n=new Lc;const r=new Gt,s=new Gt,c=new Me,a=new Wp({depthPacking:Hl}),o=new Xp,l={},h=e.maxTextureSize,u={[Ln]:Pe,[Pe]:Ln,[an]:an},p=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:Yp,fragmentShader:qp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const S=new Ie;S.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ln(S,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let d=this.type;this.render=function(w,C,W){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const k=i.getRenderTarget(),_=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),G=i.state;G.setBlending(An),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const j=d!==sn&&this.type===sn,L=d===sn&&this.type!==sn;for(let z=0,B=w.length;z<B;z++){const X=w[z],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const Y=V.getFrameExtents();if(r.multiply(Y),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Y.x),r.x=s.x*Y.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Y.y),r.y=s.y*Y.y,V.mapSize.y=s.y)),V.map===null||j===!0||L===!0){const tt=this.type!==sn?{minFilter:de,magFilter:de}:{};V.map!==null&&V.map.dispose(),V.map=new jn(r.x,r.y,tt),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const K=V.getViewportCount();for(let tt=0;tt<K;tt++){const st=V.getViewport(tt);c.set(s.x*st.x,s.y*st.y,s.x*st.z,s.y*st.w),G.viewport(c),V.updateMatrices(X,tt),n=V.getFrustum(),A(C,W,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===sn&&R(V,W),V.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(k,_,y)};function R(w,C){const W=t.update(v);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new jn(r.x,r.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,W,p,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,W,m,v,null)}function x(w,C,W,k){let _=null;const y=W.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(y!==void 0)_=y;else if(_=W.isPointLight===!0?o:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=_.uuid,j=C.uuid;let L=l[G];L===void 0&&(L={},l[G]=L);let z=L[j];z===void 0&&(z=_.clone(),L[j]=z,C.addEventListener("dispose",D)),_=z}if(_.visible=C.visible,_.wireframe=C.wireframe,k===sn?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:u[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,W.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const G=i.properties.get(_);G.light=W}return _}function A(w,C,W,k,_){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===sn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld);const j=t.update(w),L=w.material;if(Array.isArray(L)){const z=j.groups;for(let B=0,X=z.length;B<X;B++){const V=z[B],Y=L[V.materialIndex];if(Y&&Y.visible){const K=x(w,Y,k,_);w.onBeforeShadow(i,w,C,W,j,K,V),i.renderBufferDirect(W,null,j,K,w,V),w.onAfterShadow(i,w,C,W,j,K,V)}}}else if(L.visible){const z=x(w,L,k,_);w.onBeforeShadow(i,w,C,W,j,z,null),i.renderBufferDirect(W,null,j,z,w,null),w.onAfterShadow(i,w,C,W,j,z,null)}}const G=w.children;for(let j=0,L=G.length;j<L;j++)A(G[j],C,W,k,_)}function D(w){w.target.removeEventListener("dispose",D);for(const W in l){const k=l[W],_=w.target.uuid;_ in k&&(k[_].dispose(),delete k[_])}}}function Kp(i,t,e){const n=e.isWebGL2;function r(){let T=!1;const et=new Me;let nt=null;const dt=new Me(0,0,0,0);return{setMask:function(St){nt!==St&&!T&&(i.colorMask(St,St,St,St),nt=St)},setLocked:function(St){T=St},setClear:function(St,Xt,jt,le,Ce){Ce===!0&&(St*=le,Xt*=le,jt*=le),et.set(St,Xt,jt,le),dt.equals(et)===!1&&(i.clearColor(St,Xt,jt,le),dt.copy(et))},reset:function(){T=!1,nt=null,dt.set(-1,0,0,0)}}}function s(){let T=!1,et=null,nt=null,dt=null;return{setTest:function(St){St?ht(i.DEPTH_TEST):Vt(i.DEPTH_TEST)},setMask:function(St){et!==St&&!T&&(i.depthMask(St),et=St)},setFunc:function(St){if(nt!==St){switch(St){case _l:i.depthFunc(i.NEVER);break;case gl:i.depthFunc(i.ALWAYS);break;case Sl:i.depthFunc(i.LESS);break;case Hr:i.depthFunc(i.LEQUAL);break;case vl:i.depthFunc(i.EQUAL);break;case Ml:i.depthFunc(i.GEQUAL);break;case xl:i.depthFunc(i.GREATER);break;case El:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=St}},setLocked:function(St){T=St},setClear:function(St){dt!==St&&(i.clearDepth(St),dt=St)},reset:function(){T=!1,et=null,nt=null,dt=null}}}function c(){let T=!1,et=null,nt=null,dt=null,St=null,Xt=null,jt=null,le=null,Ce=null;return{setTest:function(Kt){T||(Kt?ht(i.STENCIL_TEST):Vt(i.STENCIL_TEST))},setMask:function(Kt){et!==Kt&&!T&&(i.stencilMask(Kt),et=Kt)},setFunc:function(Kt,he,Ne){(nt!==Kt||dt!==he||St!==Ne)&&(i.stencilFunc(Kt,he,Ne),nt=Kt,dt=he,St=Ne)},setOp:function(Kt,he,Ne){(Xt!==Kt||jt!==he||le!==Ne)&&(i.stencilOp(Kt,he,Ne),Xt=Kt,jt=he,le=Ne)},setLocked:function(Kt){T=Kt},setClear:function(Kt){Ce!==Kt&&(i.clearStencil(Kt),Ce=Kt)},reset:function(){T=!1,et=null,nt=null,dt=null,St=null,Xt=null,jt=null,le=null,Ce=null}}}const a=new r,o=new s,l=new c,h=new WeakMap,u=new WeakMap;let p={},m={},S=new WeakMap,v=[],f=null,d=!1,R=null,x=null,A=null,D=null,w=null,C=null,W=null,k=new kt(0,0,0),_=0,y=!1,G=null,j=null,L=null,z=null,B=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),V=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),V=Y>=2);let tt=null,st={};const bt=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),Z=new Me().fromArray(bt),lt=new Me().fromArray(H);function vt(T,et,nt,dt){const St=new Uint8Array(4),Xt=i.createTexture();i.bindTexture(T,Xt),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<nt;jt++)n&&(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)?i.texImage3D(et,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(et+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return Xt}const Mt={};Mt[i.TEXTURE_2D]=vt(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Mt[i.TEXTURE_2D_ARRAY]=vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),o.setClear(1),l.setClear(0),ht(i.DEPTH_TEST),o.setFunc(Hr),Et(!1),E(ca),ht(i.CULL_FACE),mt(An);function ht(T){p[T]!==!0&&(i.enable(T),p[T]=!0)}function Vt(T){p[T]!==!1&&(i.disable(T),p[T]=!1)}function Tt(T,et){return m[T]!==et?(i.bindFramebuffer(T,et),m[T]=et,n&&(T===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=et),T===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=et)),!0):!1}function I(T,et){let nt=v,dt=!1;if(T)if(nt=S.get(et),nt===void 0&&(nt=[],S.set(et,nt)),T.isWebGLMultipleRenderTargets){const St=T.texture;if(nt.length!==St.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let Xt=0,jt=St.length;Xt<jt;Xt++)nt[Xt]=i.COLOR_ATTACHMENT0+Xt;nt.length=St.length,dt=!0}}else nt[0]!==i.COLOR_ATTACHMENT0&&(nt[0]=i.COLOR_ATTACHMENT0,dt=!0);else nt[0]!==i.BACK&&(nt[0]=i.BACK,dt=!0);dt&&(e.isWebGL2?i.drawBuffers(nt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(nt))}function ae(T){return f!==T?(i.useProgram(T),f=T,!0):!1}const gt={[Hn]:i.FUNC_ADD,[el]:i.FUNC_SUBTRACT,[nl]:i.FUNC_REVERSE_SUBTRACT};if(n)gt[ua]=i.MIN,gt[da]=i.MAX;else{const T=t.get("EXT_blend_minmax");T!==null&&(gt[ua]=T.MIN_EXT,gt[da]=T.MAX_EXT)}const Ct={[il]:i.ZERO,[rl]:i.ONE,[sl]:i.SRC_COLOR,[zs]:i.SRC_ALPHA,[ul]:i.SRC_ALPHA_SATURATE,[ll]:i.DST_COLOR,[ol]:i.DST_ALPHA,[al]:i.ONE_MINUS_SRC_COLOR,[Hs]:i.ONE_MINUS_SRC_ALPHA,[hl]:i.ONE_MINUS_DST_COLOR,[cl]:i.ONE_MINUS_DST_ALPHA,[dl]:i.CONSTANT_COLOR,[fl]:i.ONE_MINUS_CONSTANT_COLOR,[pl]:i.CONSTANT_ALPHA,[ml]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(T,et,nt,dt,St,Xt,jt,le,Ce,Kt){if(T===An){d===!0&&(Vt(i.BLEND),d=!1);return}if(d===!1&&(ht(i.BLEND),d=!0),T!==tl){if(T!==R||Kt!==y){if((x!==Hn||w!==Hn)&&(i.blendEquation(i.FUNC_ADD),x=Hn,w=Hn),Kt)switch(T){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rn:i.blendFunc(i.ONE,i.ONE);break;case la:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ha:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case la:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ha:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}A=null,D=null,C=null,W=null,k.set(0,0,0),_=0,R=T,y=Kt}return}St=St||et,Xt=Xt||nt,jt=jt||dt,(et!==x||St!==w)&&(i.blendEquationSeparate(gt[et],gt[St]),x=et,w=St),(nt!==A||dt!==D||Xt!==C||jt!==W)&&(i.blendFuncSeparate(Ct[nt],Ct[dt],Ct[Xt],Ct[jt]),A=nt,D=dt,C=Xt,W=jt),(le.equals(k)===!1||Ce!==_)&&(i.blendColor(le.r,le.g,le.b,Ce),k.copy(le),_=Ce),R=T,y=!1}function Jt(T,et){T.side===an?Vt(i.CULL_FACE):ht(i.CULL_FACE);let nt=T.side===Pe;et&&(nt=!nt),Et(nt),T.blending===Ai&&T.transparent===!1?mt(An):mt(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),o.setFunc(T.depthFunc),o.setTest(T.depthTest),o.setMask(T.depthWrite),a.setMask(T.colorWrite);const dt=T.stencilWrite;l.setTest(dt),dt&&(l.setMask(T.stencilWriteMask),l.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),l.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),U(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(T){G!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),G=T)}function E(T){T!==$c?(ht(i.CULL_FACE),T!==j&&(T===ca?i.cullFace(i.BACK):T===Jc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Vt(i.CULL_FACE),j=T}function g(T){T!==L&&(V&&i.lineWidth(T),L=T)}function U(T,et,nt){T?(ht(i.POLYGON_OFFSET_FILL),(z!==et||B!==nt)&&(i.polygonOffset(et,nt),z=et,B=nt)):Vt(i.POLYGON_OFFSET_FILL)}function Q(T){T?ht(i.SCISSOR_TEST):Vt(i.SCISSOR_TEST)}function q(T){T===void 0&&(T=i.TEXTURE0+X-1),tt!==T&&(i.activeTexture(T),tt=T)}function J(T,et,nt){nt===void 0&&(tt===null?nt=i.TEXTURE0+X-1:nt=tt);let dt=st[nt];dt===void 0&&(dt={type:void 0,texture:void 0},st[nt]=dt),(dt.type!==T||dt.texture!==et)&&(tt!==nt&&(i.activeTexture(nt),tt=nt),i.bindTexture(T,et||Mt[T]),dt.type=T,dt.texture=et)}function ft(){const T=st[tt];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ut(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function yt(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function $(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ft(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function wt(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ct(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Lt(T){Z.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),Z.copy(T))}function Wt(T){lt.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),lt.copy(T))}function qt(T,et){let nt=u.get(et);nt===void 0&&(nt=new WeakMap,u.set(et,nt));let dt=nt.get(T);dt===void 0&&(dt=i.getUniformBlockIndex(et,T.name),nt.set(T,dt))}function Bt(T,et){const dt=u.get(et).get(T);h.get(et)!==dt&&(i.uniformBlockBinding(et,dt,T.__bindingPointIndex),h.set(et,dt))}function Ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},tt=null,st={},m={},S=new WeakMap,v=[],f=null,d=!1,R=null,x=null,A=null,D=null,w=null,C=null,W=null,k=new kt(0,0,0),_=0,y=!1,G=null,j=null,L=null,z=null,B=null,Z.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),o.reset(),l.reset()}return{buffers:{color:a,depth:o,stencil:l},enable:ht,disable:Vt,bindFramebuffer:Tt,drawBuffers:I,useProgram:ae,setBlending:mt,setMaterial:Jt,setFlipSided:Et,setCullFace:E,setLineWidth:g,setPolygonOffset:U,setScissorTest:Q,activeTexture:q,bindTexture:J,unbindTexture:ft,compressedTexImage2D:at,compressedTexImage3D:ut,texImage2D:_t,texImage3D:ct,updateUBOMapping:qt,uniformBlockBinding:Bt,texStorage2D:Ft,texStorage3D:wt,texSubImage2D:yt,texSubImage3D:Dt,compressedTexSubImage2D:$,compressedTexSubImage3D:Yt,scissor:Lt,viewport:Wt,reset:Ht}}function Zp(i,t,e,n,r,s,c){const a=r.isWebGL2,o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,g){return m?new OffscreenCanvas(E,g):Xr("canvas")}function v(E,g,U,Q){let q=1;if((E.width>Q||E.height>Q)&&(q=Q/Math.max(E.width,E.height)),q<1||g===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const J=g?js:Math.floor,ft=J(q*E.width),at=J(q*E.height);u===void 0&&(u=S(ft,at));const ut=U?S(ft,at):u;return ut.width=ft,ut.height=at,ut.getContext("2d").drawImage(E,0,0,ft,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ft+"x"+at+")."),ut}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function f(E){return Ga(E.width)&&Ga(E.height)}function d(E){return a?!1:E.wrapS!==Xe||E.wrapT!==Xe||E.minFilter!==de&&E.minFilter!==we}function R(E,g){return E.generateMipmaps&&g&&E.minFilter!==de&&E.minFilter!==we}function x(E){i.generateMipmap(E)}function A(E,g,U,Q,q=!1){if(a===!1)return g;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let J=g;if(g===i.RED&&(U===i.FLOAT&&(J=i.R32F),U===i.HALF_FLOAT&&(J=i.R16F),U===i.UNSIGNED_BYTE&&(J=i.R8)),g===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.R8UI),U===i.UNSIGNED_SHORT&&(J=i.R16UI),U===i.UNSIGNED_INT&&(J=i.R32UI),U===i.BYTE&&(J=i.R8I),U===i.SHORT&&(J=i.R16I),U===i.INT&&(J=i.R32I)),g===i.RG&&(U===i.FLOAT&&(J=i.RG32F),U===i.HALF_FLOAT&&(J=i.RG16F),U===i.UNSIGNED_BYTE&&(J=i.RG8)),g===i.RGBA){const ft=q?Gr:$t.getTransfer(Q);U===i.FLOAT&&(J=i.RGBA32F),U===i.HALF_FLOAT&&(J=i.RGBA16F),U===i.UNSIGNED_BYTE&&(J=ft===ee?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function D(E,g,U){return R(E,U)===!0||E.isFramebufferTexture&&E.minFilter!==de&&E.minFilter!==we?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function w(E){return E===de||E===fa||E===Ni?i.NEAREST:i.LINEAR}function C(E){const g=E.target;g.removeEventListener("dispose",C),k(g),g.isVideoTexture&&h.delete(g)}function W(E){const g=E.target;g.removeEventListener("dispose",W),y(g)}function k(E){const g=n.get(E);if(g.__webglInit===void 0)return;const U=E.source,Q=p.get(U);if(Q){const q=Q[g.__cacheKey];q.usedTimes--,q.usedTimes===0&&_(E),Object.keys(Q).length===0&&p.delete(U)}n.remove(E)}function _(E){const g=n.get(E);i.deleteTexture(g.__webglTexture);const U=E.source,Q=p.get(U);delete Q[g.__cacheKey],c.memory.textures--}function y(E){const g=E.texture,U=n.get(E),Q=n.get(g);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),c.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(U.__webglFramebuffer[q]))for(let J=0;J<U.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(U.__webglFramebuffer[q][J]);else i.deleteFramebuffer(U.__webglFramebuffer[q]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[q])}else{if(Array.isArray(U.__webglFramebuffer))for(let q=0;q<U.__webglFramebuffer.length;q++)i.deleteFramebuffer(U.__webglFramebuffer[q]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let q=0;q<U.__webglColorRenderbuffer.length;q++)U.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[q]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let q=0,J=g.length;q<J;q++){const ft=n.get(g[q]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),c.memory.textures--),n.remove(g[q])}n.remove(g),n.remove(E)}let G=0;function j(){G=0}function L(){const E=G;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),G+=1,E}function z(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function B(E,g){const U=n.get(E);if(E.isVideoTexture&&Jt(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(U,E,g);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+g)}function X(E,g){const U=n.get(E);if(E.version>0&&U.__version!==E.version){Z(U,E,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+g)}function V(E,g){const U=n.get(E);if(E.version>0&&U.__version!==E.version){Z(U,E,g);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+g)}function Y(E,g){const U=n.get(E);if(E.version>0&&U.__version!==E.version){lt(U,E,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+g)}const K={[ks]:i.REPEAT,[Xe]:i.CLAMP_TO_EDGE,[Ws]:i.MIRRORED_REPEAT},tt={[de]:i.NEAREST,[fa]:i.NEAREST_MIPMAP_NEAREST,[Ni]:i.NEAREST_MIPMAP_LINEAR,[we]:i.LINEAR,[is]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},st={[kl]:i.NEVER,[Kl]:i.ALWAYS,[Wl]:i.LESS,[gc]:i.LEQUAL,[Xl]:i.EQUAL,[jl]:i.GEQUAL,[Yl]:i.GREATER,[ql]:i.NOTEQUAL};function bt(E,g,U){if(g.type===on&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===we||g.magFilter===is||g.magFilter===Ni||g.magFilter===Vn||g.minFilter===we||g.minFilter===is||g.minFilter===Ni||g.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),U?(i.texParameteri(E,i.TEXTURE_WRAP_S,K[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,K[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,K[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,tt[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,tt[g.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(g.wrapS!==Xe||g.wrapT!==Xe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,w(g.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,w(g.minFilter)),g.minFilter!==de&&g.minFilter!==we&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,st[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(g.magFilter===de||g.minFilter!==Ni&&g.minFilter!==Vn||g.type===on&&t.has("OES_texture_float_linear")===!1||a===!1&&g.type===Yi&&t.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||n.get(g).__currentAnisotropy)&&(i.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy)}}function H(E,g){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",C));const Q=g.source;let q=p.get(Q);q===void 0&&(q={},p.set(Q,q));const J=z(g);if(J!==E.__cacheKey){q[J]===void 0&&(q[J]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,U=!0),q[J].usedTimes++;const ft=q[E.__cacheKey];ft!==void 0&&(q[E.__cacheKey].usedTimes--,ft.usedTimes===0&&_(g)),E.__cacheKey=J,E.__webglTexture=q[J].texture}return U}function Z(E,g,U){let Q=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Q=i.TEXTURE_3D);const q=H(E,g),J=g.source;e.bindTexture(Q,E.__webglTexture,i.TEXTURE0+U);const ft=n.get(J);if(J.version!==ft.__version||q===!0){e.activeTexture(i.TEXTURE0+U);const at=$t.getPrimaries($t.workingColorSpace),ut=g.colorSpace===ze?null:$t.getPrimaries(g.colorSpace),yt=g.colorSpace===ze||at===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Dt=d(g)&&f(g.image)===!1;let $=v(g.image,Dt,!1,r.maxTextureSize);$=Et(g,$);const Yt=f($)||a,Ft=s.convert(g.format,g.colorSpace);let wt=s.convert(g.type),_t=A(g.internalFormat,Ft,wt,g.colorSpace,g.isVideoTexture);bt(Q,g,Yt);let ct;const Lt=g.mipmaps,Wt=a&&g.isVideoTexture!==!0&&_t!==mc,qt=ft.__version===void 0||q===!0,Bt=J.dataReady,Ht=D(g,$,Yt);if(g.isDepthTexture)_t=i.DEPTH_COMPONENT,a?g.type===on?_t=i.DEPTH_COMPONENT32F:g.type===Tn?_t=i.DEPTH_COMPONENT24:g.type===Wn?_t=i.DEPTH24_STENCIL8:_t=i.DEPTH_COMPONENT16:g.type===on&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Xn&&_t===i.DEPTH_COMPONENT&&g.type!==ta&&g.type!==Tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Tn,wt=s.convert(g.type)),g.format===wi&&_t===i.DEPTH_COMPONENT&&(_t=i.DEPTH_STENCIL,g.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Wn,wt=s.convert(g.type))),qt&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,_t,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,_t,$.width,$.height,0,Ft,wt,null));else if(g.isDataTexture)if(Lt.length>0&&Yt){Wt&&qt&&e.texStorage2D(i.TEXTURE_2D,Ht,_t,Lt[0].width,Lt[0].height);for(let T=0,et=Lt.length;T<et;T++)ct=Lt[T],Wt?Bt&&e.texSubImage2D(i.TEXTURE_2D,T,0,0,ct.width,ct.height,Ft,wt,ct.data):e.texImage2D(i.TEXTURE_2D,T,_t,ct.width,ct.height,0,Ft,wt,ct.data);g.generateMipmaps=!1}else Wt?(qt&&e.texStorage2D(i.TEXTURE_2D,Ht,_t,$.width,$.height),Bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,Ft,wt,$.data)):e.texImage2D(i.TEXTURE_2D,0,_t,$.width,$.height,0,Ft,wt,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Wt&&qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,_t,Lt[0].width,Lt[0].height,$.depth);for(let T=0,et=Lt.length;T<et;T++)ct=Lt[T],g.format!==Ye?Ft!==null?Wt?Bt&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,T,0,0,0,ct.width,ct.height,$.depth,Ft,ct.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,T,_t,ct.width,ct.height,$.depth,0,ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?Bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,T,0,0,0,ct.width,ct.height,$.depth,Ft,wt,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,T,_t,ct.width,ct.height,$.depth,0,Ft,wt,ct.data)}else{Wt&&qt&&e.texStorage2D(i.TEXTURE_2D,Ht,_t,Lt[0].width,Lt[0].height);for(let T=0,et=Lt.length;T<et;T++)ct=Lt[T],g.format!==Ye?Ft!==null?Wt?Bt&&e.compressedTexSubImage2D(i.TEXTURE_2D,T,0,0,ct.width,ct.height,Ft,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,T,_t,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?Bt&&e.texSubImage2D(i.TEXTURE_2D,T,0,0,ct.width,ct.height,Ft,wt,ct.data):e.texImage2D(i.TEXTURE_2D,T,_t,ct.width,ct.height,0,Ft,wt,ct.data)}else if(g.isDataArrayTexture)Wt?(qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,_t,$.width,$.height,$.depth),Bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Ft,wt,$.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,$.width,$.height,$.depth,0,Ft,wt,$.data);else if(g.isData3DTexture)Wt?(qt&&e.texStorage3D(i.TEXTURE_3D,Ht,_t,$.width,$.height,$.depth),Bt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Ft,wt,$.data)):e.texImage3D(i.TEXTURE_3D,0,_t,$.width,$.height,$.depth,0,Ft,wt,$.data);else if(g.isFramebufferTexture){if(qt)if(Wt)e.texStorage2D(i.TEXTURE_2D,Ht,_t,$.width,$.height);else{let T=$.width,et=$.height;for(let nt=0;nt<Ht;nt++)e.texImage2D(i.TEXTURE_2D,nt,_t,T,et,0,Ft,wt,null),T>>=1,et>>=1}}else if(Lt.length>0&&Yt){Wt&&qt&&e.texStorage2D(i.TEXTURE_2D,Ht,_t,Lt[0].width,Lt[0].height);for(let T=0,et=Lt.length;T<et;T++)ct=Lt[T],Wt?Bt&&e.texSubImage2D(i.TEXTURE_2D,T,0,0,Ft,wt,ct):e.texImage2D(i.TEXTURE_2D,T,_t,Ft,wt,ct);g.generateMipmaps=!1}else Wt?(qt&&e.texStorage2D(i.TEXTURE_2D,Ht,_t,$.width,$.height),Bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ft,wt,$)):e.texImage2D(i.TEXTURE_2D,0,_t,Ft,wt,$);R(g,Yt)&&x(Q),ft.__version=J.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function lt(E,g,U){if(g.image.length!==6)return;const Q=H(E,g),q=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+U);const J=n.get(q);if(q.version!==J.__version||Q===!0){e.activeTexture(i.TEXTURE0+U);const ft=$t.getPrimaries($t.workingColorSpace),at=g.colorSpace===ze?null:$t.getPrimaries(g.colorSpace),ut=g.colorSpace===ze||ft===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const yt=g.isCompressedTexture||g.image[0].isCompressedTexture,Dt=g.image[0]&&g.image[0].isDataTexture,$=[];for(let T=0;T<6;T++)!yt&&!Dt?$[T]=v(g.image[T],!1,!0,r.maxCubemapSize):$[T]=Dt?g.image[T].image:g.image[T],$[T]=Et(g,$[T]);const Yt=$[0],Ft=f(Yt)||a,wt=s.convert(g.format,g.colorSpace),_t=s.convert(g.type),ct=A(g.internalFormat,wt,_t,g.colorSpace),Lt=a&&g.isVideoTexture!==!0,Wt=J.__version===void 0||Q===!0,qt=q.dataReady;let Bt=D(g,Yt,Ft);bt(i.TEXTURE_CUBE_MAP,g,Ft);let Ht;if(yt){Lt&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,ct,Yt.width,Yt.height);for(let T=0;T<6;T++){Ht=$[T].mipmaps;for(let et=0;et<Ht.length;et++){const nt=Ht[et];g.format!==Ye?wt!==null?Lt?qt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,et,0,0,nt.width,nt.height,wt,nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,et,ct,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?qt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,et,0,0,nt.width,nt.height,wt,_t,nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,et,ct,nt.width,nt.height,0,wt,_t,nt.data)}}}else{Ht=g.mipmaps,Lt&&Wt&&(Ht.length>0&&Bt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,ct,$[0].width,$[0].height));for(let T=0;T<6;T++)if(Dt){Lt?qt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,$[T].width,$[T].height,wt,_t,$[T].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,ct,$[T].width,$[T].height,0,wt,_t,$[T].data);for(let et=0;et<Ht.length;et++){const dt=Ht[et].image[T].image;Lt?qt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,et+1,0,0,dt.width,dt.height,wt,_t,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,et+1,ct,dt.width,dt.height,0,wt,_t,dt.data)}}else{Lt?qt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,wt,_t,$[T]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,ct,wt,_t,$[T]);for(let et=0;et<Ht.length;et++){const nt=Ht[et];Lt?qt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,et+1,0,0,wt,_t,nt.image[T]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,et+1,ct,wt,_t,nt.image[T])}}}R(g,Ft)&&x(i.TEXTURE_CUBE_MAP),J.__version=q.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function vt(E,g,U,Q,q,J){const ft=s.convert(U.format,U.colorSpace),at=s.convert(U.type),ut=A(U.internalFormat,ft,at,U.colorSpace);if(!n.get(g).__hasExternalTextures){const Dt=Math.max(1,g.width>>J),$=Math.max(1,g.height>>J);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?e.texImage3D(q,J,ut,Dt,$,g.depth,0,ft,at,null):e.texImage2D(q,J,ut,Dt,$,0,ft,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,q,n.get(U).__webglTexture,0,Ct(g)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,q,n.get(U).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(E,g,U){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer&&!g.stencilBuffer){let Q=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(U||mt(g)){const q=g.depthTexture;q&&q.isDepthTexture&&(q.type===on?Q=i.DEPTH_COMPONENT32F:q.type===Tn&&(Q=i.DEPTH_COMPONENT24));const J=Ct(g);mt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,Q,g.width,g.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,Q,g.width,g.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,g.width,g.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(g.depthBuffer&&g.stencilBuffer){const Q=Ct(g);U&&mt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,g.width,g.height):mt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const Q=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let q=0;q<Q.length;q++){const J=Q[q],ft=s.convert(J.format,J.colorSpace),at=s.convert(J.type),ut=A(J.internalFormat,ft,at,J.colorSpace),yt=Ct(g);U&&mt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,ut,g.width,g.height):mt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,ut,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ut,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),B(g.depthTexture,0);const Q=n.get(g.depthTexture).__webglTexture,q=Ct(g);if(g.depthTexture.format===Xn)mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(g.depthTexture.format===wi)mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Vt(E){const g=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ht(g.__webglFramebuffer,E)}else if(U){g.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Q]),g.__webglDepthbuffer[Q]=i.createRenderbuffer(),Mt(g.__webglDepthbuffer[Q],E,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=i.createRenderbuffer(),Mt(g.__webglDepthbuffer,E,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(E,g,U){const Q=n.get(E);g!==void 0&&vt(Q.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Vt(E)}function I(E){const g=E.texture,U=n.get(E),Q=n.get(g);E.addEventListener("dispose",W),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=g.version,c.memory.textures++);const q=E.isWebGLCubeRenderTarget===!0,J=E.isWebGLMultipleRenderTargets===!0,ft=f(E)||a;if(q){U.__webglFramebuffer=[];for(let at=0;at<6;at++)if(a&&g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[at]=[];for(let ut=0;ut<g.mipmaps.length;ut++)U.__webglFramebuffer[at][ut]=i.createFramebuffer()}else U.__webglFramebuffer[at]=i.createFramebuffer()}else{if(a&&g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let at=0;at<g.mipmaps.length;at++)U.__webglFramebuffer[at]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(J)if(r.drawBuffers){const at=E.texture;for(let ut=0,yt=at.length;ut<yt;ut++){const Dt=n.get(at[ut]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&mt(E)===!1){const at=J?g:[g];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ut=0;ut<at.length;ut++){const yt=at[ut];U.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ut]);const Dt=s.convert(yt.format,yt.colorSpace),$=s.convert(yt.type),Yt=A(yt.internalFormat,Dt,$,yt.colorSpace,E.isXRRenderTarget===!0),Ft=Ct(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Yt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,U.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Mt(U.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),bt(i.TEXTURE_CUBE_MAP,g,ft);for(let at=0;at<6;at++)if(a&&g.mipmaps&&g.mipmaps.length>0)for(let ut=0;ut<g.mipmaps.length;ut++)vt(U.__webglFramebuffer[at][ut],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else vt(U.__webglFramebuffer[at],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);R(g,ft)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(J){const at=E.texture;for(let ut=0,yt=at.length;ut<yt;ut++){const Dt=at[ut],$=n.get(Dt);e.bindTexture(i.TEXTURE_2D,$.__webglTexture),bt(i.TEXTURE_2D,Dt,ft),vt(U.__webglFramebuffer,E,Dt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),R(Dt,ft)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?at=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,Q.__webglTexture),bt(at,g,ft),a&&g.mipmaps&&g.mipmaps.length>0)for(let ut=0;ut<g.mipmaps.length;ut++)vt(U.__webglFramebuffer[ut],E,g,i.COLOR_ATTACHMENT0,at,ut);else vt(U.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,at,0);R(g,ft)&&x(at),e.unbindTexture()}E.depthBuffer&&Vt(E)}function ae(E){const g=f(E)||a,U=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,q=U.length;Q<q;Q++){const J=U[Q];if(R(J,g)){const ft=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,at=n.get(J).__webglTexture;e.bindTexture(ft,at),x(ft),e.unbindTexture()}}}function gt(E){if(a&&E.samples>0&&mt(E)===!1){const g=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],U=E.width,Q=E.height;let q=i.COLOR_BUFFER_BIT;const J=[],ft=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(E),ut=E.isWebGLMultipleRenderTargets===!0;if(ut)for(let yt=0;yt<g.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let yt=0;yt<g.length;yt++){J.push(i.COLOR_ATTACHMENT0+yt),E.depthBuffer&&J.push(ft);const Dt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(Dt===!1&&(E.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),ut&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[yt]),Dt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ft]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ft])),ut){const $=n.get(g[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,U,Q,0,0,U,Q,q,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let yt=0;yt<g.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,at.__webglColorRenderbuffer[yt]);const Dt=n.get(g[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Ct(E){return Math.min(r.maxSamples,E.samples)}function mt(E){const g=n.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Jt(E){const g=c.render.frame;h.get(E)!==g&&(h.set(E,g),E.update())}function Et(E,g){const U=E.colorSpace,Q=E.format,q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ys||U!==fn&&U!==ze&&($t.getTransfer(U)===ee?a===!1?t.has("EXT_sRGB")===!0&&Q===Ye?(E.format=Ys,E.minFilter=we,E.generateMipmaps=!1):g=vc.sRGBToLinear(g):(Q!==Ye||q!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),g}this.allocateTextureUnit=L,this.resetTextureUnits=j,this.setTexture2D=B,this.setTexture2DArray=X,this.setTexture3D=V,this.setTextureCube=Y,this.rebindTextures=Tt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=mt}function $p(i,t,e){const n=e.isWebGL2;function r(s,c=ze){let a;const o=$t.getTransfer(c);if(s===Cn)return i.UNSIGNED_BYTE;if(s===hc)return i.UNSIGNED_SHORT_4_4_4_4;if(s===uc)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Pl)return i.BYTE;if(s===Il)return i.SHORT;if(s===ta)return i.UNSIGNED_SHORT;if(s===lc)return i.INT;if(s===Tn)return i.UNSIGNED_INT;if(s===on)return i.FLOAT;if(s===Yi)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Dl)return i.ALPHA;if(s===Ye)return i.RGBA;if(s===Ul)return i.LUMINANCE;if(s===Nl)return i.LUMINANCE_ALPHA;if(s===Xn)return i.DEPTH_COMPONENT;if(s===wi)return i.DEPTH_STENCIL;if(s===Ys)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ol)return i.RED;if(s===dc)return i.RED_INTEGER;if(s===Fl)return i.RG;if(s===fc)return i.RG_INTEGER;if(s===pc)return i.RGBA_INTEGER;if(s===rs||s===ss||s===as||s===os)if(o===ee)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===rs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ss)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===as)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===rs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ss)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===as)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===os)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===pa||s===ma||s===_a||s===ga)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===pa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ma)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_a)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ga)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===mc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Sa||s===va)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Sa)return o===ee?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===va)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ma||s===xa||s===Ea||s===ya||s===Ta||s===Aa||s===Ra||s===ba||s===Ca||s===wa||s===La||s===Pa||s===Ia||s===Da)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ma)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xa)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ea)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ya)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ta)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Aa)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ra)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ba)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ca)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wa)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===La)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Pa)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ia)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Da)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cs||s===Ua||s===Na)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===cs)return o===ee?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ua)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Na)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Bl||s===Oa||s===Fa||s===Ba)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===cs)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Oa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ba)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wn?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Jp extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ar extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qp={type:"move"};class Ds{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,c=null;const a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){c=!0;for(const v of t.hand.values()){const f=e.getJointPose(v,n),d=this._getHandJoint(l,v);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,S=.005;l.inputState.pinching&&p>m+S?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=m-S&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qp)))}return a!==null&&(a.visible=r!==null),o!==null&&(o.visible=s!==null),l!==null&&(l.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ar;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const tm=`
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

}`;class nm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new be,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,r=new Pn({extensions:{fragDepth:!0},vertexShader:tm,fragmentShader:em,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ln(new Jr(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class im extends Pi{constructor(t,e){super();const n=this;let r=null,s=1,c=null,a="local-floor",o=1,l=null,h=null,u=null,p=null,m=null,S=null;const v=new nm,f=e.getContextAttributes();let d=null,R=null;const x=[],A=[],D=new Gt;let w=null;const C=new We;C.layers.enable(1),C.viewport=new Me;const W=new We;W.layers.enable(2),W.viewport=new Me;const k=[C,W],_=new Jp;_.layers.enable(1),_.layers.enable(2);let y=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=x[H];return Z===void 0&&(Z=new Ds,x[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=x[H];return Z===void 0&&(Z=new Ds,x[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=x[H];return Z===void 0&&(Z=new Ds,x[H]=Z),Z.getHandSpace()};function j(H){const Z=A.indexOf(H.inputSource);if(Z===-1)return;const lt=x[Z];lt!==void 0&&(lt.update(H.inputSource,H.frame,l||c),lt.dispatchEvent({type:H.type,data:H.inputSource}))}function L(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",z);for(let H=0;H<x.length;H++){const Z=A[H];Z!==null&&(A[H]=null,x[H].disconnect(Z))}y=null,G=null,v.reset(),t.setRenderTarget(d),m=null,p=null,u=null,r=null,R=null,bt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||c},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",L),r.addEventListener("inputsourceschange",z),f.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(D),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,Z),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new jn(m.framebufferWidth,m.framebufferHeight,{format:Ye,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let Z=null,lt=null,vt=null;f.depth&&(vt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=f.stencil?wi:Xn,lt=f.stencil?Wn:Tn);const Mt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};u=new XRWebGLBinding(r,e),p=u.createProjectionLayer(Mt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),R=new jn(p.textureWidth,p.textureHeight,{format:Ye,type:Cn,depthTexture:new Dc(p.textureWidth,p.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0});const ht=t.properties.get(R);ht.__ignoreDepthValues=p.ignoreDepthValues}R.isXRRenderTarget=!0,this.setFoveation(o),l=null,c=await r.requestReferenceSpace(a),bt.setContext(r),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(H){for(let Z=0;Z<H.removed.length;Z++){const lt=H.removed[Z],vt=A.indexOf(lt);vt>=0&&(A[vt]=null,x[vt].disconnect(lt))}for(let Z=0;Z<H.added.length;Z++){const lt=H.added[Z];let vt=A.indexOf(lt);if(vt===-1){for(let ht=0;ht<x.length;ht++)if(ht>=A.length){A.push(lt),vt=ht;break}else if(A[ht]===null){A[ht]=lt,vt=ht;break}if(vt===-1)break}const Mt=x[vt];Mt&&Mt.connect(lt)}}const B=new b,X=new b;function V(H,Z,lt){B.setFromMatrixPosition(Z.matrixWorld),X.setFromMatrixPosition(lt.matrixWorld);const vt=B.distanceTo(X),Mt=Z.projectionMatrix.elements,ht=lt.projectionMatrix.elements,Vt=Mt[14]/(Mt[10]-1),Tt=Mt[14]/(Mt[10]+1),I=(Mt[9]+1)/Mt[5],ae=(Mt[9]-1)/Mt[5],gt=(Mt[8]-1)/Mt[0],Ct=(ht[8]+1)/ht[0],mt=Vt*gt,Jt=Vt*Ct,Et=vt/(-gt+Ct),E=Et*-gt;Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(E),H.translateZ(Et),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const g=Vt+Et,U=Tt+Et,Q=mt-E,q=Jt+(vt-E),J=I*Tt/U*g,ft=ae*Tt/U*g;H.projectionMatrix.makePerspective(Q,q,J,ft,g,U),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function Y(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;v.texture!==null&&(H.near=v.depthNear,H.far=v.depthFar),_.near=W.near=C.near=H.near,_.far=W.far=C.far=H.far,(y!==_.near||G!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,G=_.far,C.near=y,C.far=G,W.near=y,W.far=G,C.updateProjectionMatrix(),W.updateProjectionMatrix(),H.updateProjectionMatrix());const Z=H.parent,lt=_.cameras;Y(_,Z);for(let vt=0;vt<lt.length;vt++)Y(lt[vt],Z);lt.length===2?V(_,C,W):_.projectionMatrix.copy(C.projectionMatrix),K(H,_,Z)};function K(H,Z,lt){lt===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(lt.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=qs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(p===null&&m===null))return o},this.setFoveation=function(H){o=H,p!==null&&(p.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null};let tt=null;function st(H,Z){if(h=Z.getViewerPose(l||c),S=Z,h!==null){const lt=h.views;m!==null&&(t.setRenderTargetFramebuffer(R,m.framebuffer),t.setRenderTarget(R));let vt=!1;lt.length!==_.cameras.length&&(_.cameras.length=0,vt=!0);for(let ht=0;ht<lt.length;ht++){const Vt=lt[ht];let Tt=null;if(m!==null)Tt=m.getViewport(Vt);else{const ae=u.getViewSubImage(p,Vt);Tt=ae.viewport,ht===0&&(t.setRenderTargetTextures(R,ae.colorTexture,p.ignoreDepthValues?void 0:ae.depthStencilTexture),t.setRenderTarget(R))}let I=k[ht];I===void 0&&(I=new We,I.layers.enable(ht),I.viewport=new Me,k[ht]=I),I.matrix.fromArray(Vt.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(Vt.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),ht===0&&(_.matrix.copy(I.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),vt===!0&&_.cameras.push(I)}const Mt=r.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){const ht=u.getDepthInformation(lt[0]);ht&&ht.isValid&&ht.texture&&v.init(t,ht,r.renderState)}}for(let lt=0;lt<x.length;lt++){const vt=A[lt],Mt=x[lt];vt!==null&&Mt!==void 0&&Mt.update(vt,Z,l||c)}v.render(t,_),tt&&tt(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),S=null}const bt=new Pc;bt.setAnimationLoop(st),this.setAnimationLoop=function(H){tt=H},this.dispose=function(){}}}function rm(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,bc(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function r(f,d,R,x,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(f,d):d.isMeshToonMaterial?(s(f,d),u(f,d)):d.isMeshPhongMaterial?(s(f,d),h(f,d)):d.isMeshStandardMaterial?(s(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,A)):d.isMeshMatcapMaterial?(s(f,d),S(f,d)):d.isMeshDepthMaterial?s(f,d):d.isMeshDistanceMaterial?(s(f,d),v(f,d)):d.isMeshNormalMaterial?s(f,d):d.isLineBasicMaterial?(c(f,d),d.isLineDashedMaterial&&a(f,d)):d.isPointsMaterial?o(f,d,R,x):d.isSpriteMaterial?l(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Pe&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Pe&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const R=t.get(d).envMap;if(R&&(f.envMap.value=R,f.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap){f.lightMap.value=d.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,f.lightMapTransform)}d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function a(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function o(f,d,R,x){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*R,f.scale.value=x*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function l(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function u(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),t.get(d).envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,R){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pe&&f.clearcoatNormalScale.value.negate())),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=R.texture,f.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function S(f,d){d.matcap&&(f.matcap.value=d.matcap)}function v(f,d){const R=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(R.matrixWorld),f.nearDistance.value=R.shadow.camera.near,f.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function sm(i,t,e,n){let r={},s={},c=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function o(R,x){const A=x.program;n.uniformBlockBinding(R,A)}function l(R,x){let A=r[R.id];A===void 0&&(S(R),A=h(R),r[R.id]=A,R.addEventListener("dispose",f));const D=x.program;n.updateUBOMapping(R,D);const w=t.render.frame;s[R.id]!==w&&(p(R),s[R.id]=w)}function h(R){const x=u();R.__bindingPointIndex=x;const A=i.createBuffer(),D=R.__size,w=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,D,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,A),A}function u(){for(let R=0;R<a;R++)if(c.indexOf(R)===-1)return c.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(R){const x=r[R.id],A=R.uniforms,D=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,C=A.length;w<C;w++){const W=Array.isArray(A[w])?A[w]:[A[w]];for(let k=0,_=W.length;k<_;k++){const y=W[k];if(m(y,w,k,D)===!0){const G=y.__offset,j=Array.isArray(y.value)?y.value:[y.value];let L=0;for(let z=0;z<j.length;z++){const B=j[z],X=v(B);typeof B=="number"||typeof B=="boolean"?(y.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,G+L,y.__data)):B.isMatrix3?(y.__data[0]=B.elements[0],y.__data[1]=B.elements[1],y.__data[2]=B.elements[2],y.__data[3]=0,y.__data[4]=B.elements[3],y.__data[5]=B.elements[4],y.__data[6]=B.elements[5],y.__data[7]=0,y.__data[8]=B.elements[6],y.__data[9]=B.elements[7],y.__data[10]=B.elements[8],y.__data[11]=0):(B.toArray(y.__data,L),L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(R,x,A,D){const w=R.value,C=x+"_"+A;if(D[C]===void 0)return typeof w=="number"||typeof w=="boolean"?D[C]=w:D[C]=w.clone(),!0;{const W=D[C];if(typeof w=="number"||typeof w=="boolean"){if(W!==w)return D[C]=w,!0}else if(W.equals(w)===!1)return W.copy(w),!0}return!1}function S(R){const x=R.uniforms;let A=0;const D=16;for(let C=0,W=x.length;C<W;C++){const k=Array.isArray(x[C])?x[C]:[x[C]];for(let _=0,y=k.length;_<y;_++){const G=k[_],j=Array.isArray(G.value)?G.value:[G.value];for(let L=0,z=j.length;L<z;L++){const B=j[L],X=v(B),V=A%D;V!==0&&D-V<X.boundary&&(A+=D-V),G.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=A,A+=X.storage}}}const w=A%D;return w>0&&(A+=D-w),R.__size=A,R.__cache={},this}function v(R){const x={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(x.boundary=4,x.storage=4):R.isVector2?(x.boundary=8,x.storage=8):R.isVector3||R.isColor?(x.boundary=16,x.storage=12):R.isVector4?(x.boundary=16,x.storage=16):R.isMatrix3?(x.boundary=48,x.storage=48):R.isMatrix4?(x.boundary=64,x.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),x}function f(R){const x=R.target;x.removeEventListener("dispose",f);const A=c.indexOf(x.__bindingPointIndex);c.splice(A,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const R in r)i.deleteBuffer(r[R]);c=[],r={},s={}}return{bind:o,update:l,dispose:d}}class zc{constructor(t={}){const{canvas:e=$l(),context:n=null,depth:r=!0,stencil:s=!0,alpha:c=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=c;const m=new Uint32Array(4),S=new Int32Array(4);let v=null,f=null;const d=[],R=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ve,this._useLegacyLights=!1,this.toneMapping=bn,this.toneMappingExposure=1;const x=this;let A=!1,D=0,w=0,C=null,W=-1,k=null;const _=new Me,y=new Me;let G=null;const j=new kt(0);let L=0,z=e.width,B=e.height,X=1,V=null,Y=null;const K=new Me(0,0,z,B),tt=new Me(0,0,z,B);let st=!1;const bt=new Lc;let H=!1,Z=!1,lt=null;const vt=new ce,Mt=new Gt,ht=new b,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Tt(){return C===null?X:1}let I=n;function ae(M,P){for(let O=0;O<M.length;O++){const F=M[O],N=e.getContext(F,P);if(N!==null)return N}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qs}`),e.addEventListener("webglcontextlost",Ht,!1),e.addEventListener("webglcontextrestored",T,!1),e.addEventListener("webglcontextcreationerror",et,!1),I===null){const P=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&P.shift(),I=ae(P,M),I===null)throw ae(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let gt,Ct,mt,Jt,Et,E,g,U,Q,q,J,ft,at,ut,yt,Dt,$,Yt,Ft,wt,_t,ct,Lt,Wt;function qt(){gt=new df(I),Ct=new af(I,gt,t),gt.init(Ct),ct=new $p(I,gt,Ct),mt=new Kp(I,gt,Ct),Jt=new mf(I),Et=new Np,E=new Zp(I,gt,mt,Et,Ct,ct,Jt),g=new cf(x),U=new uf(x),Q=new Eh(I,Ct),Lt=new rf(I,gt,Q,Ct),q=new ff(I,Q,Jt,Lt),J=new vf(I,q,Q,Jt),Ft=new Sf(I,Ct,E),Dt=new of(Et),ft=new Up(x,g,U,gt,Ct,Lt,Dt),at=new rm(x,Et),ut=new Fp,yt=new kp(gt,Ct),Yt=new nf(x,g,U,mt,J,p,o),$=new jp(x,J,Ct),Wt=new sm(I,Jt,Ct,mt),wt=new sf(I,gt,Jt,Ct),_t=new pf(I,gt,Jt,Ct),Jt.programs=ft.programs,x.capabilities=Ct,x.extensions=gt,x.properties=Et,x.renderLists=ut,x.shadowMap=$,x.state=mt,x.info=Jt}qt();const Bt=new im(x,I);this.xr=Bt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=gt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=gt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(M){M!==void 0&&(X=M,this.setSize(z,B,!1))},this.getSize=function(M){return M.set(z,B)},this.setSize=function(M,P,O=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=M,B=P,e.width=Math.floor(M*X),e.height=Math.floor(P*X),O===!0&&(e.style.width=M+"px",e.style.height=P+"px"),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(z*X,B*X).floor()},this.setDrawingBufferSize=function(M,P,O){z=M,B=P,X=O,e.width=Math.floor(M*O),e.height=Math.floor(P*O),this.setViewport(0,0,M,P)},this.getCurrentViewport=function(M){return M.copy(_)},this.getViewport=function(M){return M.copy(K)},this.setViewport=function(M,P,O,F){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,P,O,F),mt.viewport(_.copy(K).multiplyScalar(X).floor())},this.getScissor=function(M){return M.copy(tt)},this.setScissor=function(M,P,O,F){M.isVector4?tt.set(M.x,M.y,M.z,M.w):tt.set(M,P,O,F),mt.scissor(y.copy(tt).multiplyScalar(X).floor())},this.getScissorTest=function(){return st},this.setScissorTest=function(M){mt.setScissorTest(st=M)},this.setOpaqueSort=function(M){V=M},this.setTransparentSort=function(M){Y=M},this.getClearColor=function(M){return M.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(M=!0,P=!0,O=!0){let F=0;if(M){let N=!1;if(C!==null){const ot=C.texture.format;N=ot===pc||ot===fc||ot===dc}if(N){const ot=C.texture.type,pt=ot===Cn||ot===Tn||ot===ta||ot===Wn||ot===hc||ot===uc,xt=Yt.getClearColor(),At=Yt.getClearAlpha(),Ut=xt.r,Pt=xt.g,It=xt.b;pt?(m[0]=Ut,m[1]=Pt,m[2]=It,m[3]=At,I.clearBufferuiv(I.COLOR,0,m)):(S[0]=Ut,S[1]=Pt,S[2]=It,S[3]=At,I.clearBufferiv(I.COLOR,0,S))}else F|=I.COLOR_BUFFER_BIT}P&&(F|=I.DEPTH_BUFFER_BIT),O&&(F|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",T,!1),e.removeEventListener("webglcontextcreationerror",et,!1),ut.dispose(),yt.dispose(),Et.dispose(),g.dispose(),U.dispose(),J.dispose(),Lt.dispose(),Wt.dispose(),ft.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Ce),Bt.removeEventListener("sessionend",Kt),lt&&(lt.dispose(),lt=null),he.stop()};function Ht(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function T(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=Jt.autoReset,P=$.enabled,O=$.autoUpdate,F=$.needsUpdate,N=$.type;qt(),Jt.autoReset=M,$.enabled=P,$.autoUpdate=O,$.needsUpdate=F,$.type=N}function et(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function nt(M){const P=M.target;P.removeEventListener("dispose",nt),dt(P)}function dt(M){St(M),Et.remove(M)}function St(M){const P=Et.get(M).programs;P!==void 0&&(P.forEach(function(O){ft.releaseProgram(O)}),M.isShaderMaterial&&ft.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,O,F,N,ot){P===null&&(P=Vt);const pt=N.isMesh&&N.matrixWorld.determinant()<0,xt=es(M,P,O,F,N);mt.setMaterial(F,pt);let At=O.index,Ut=1;if(F.wireframe===!0){if(At=q.getWireframeAttribute(O),At===void 0)return;Ut=2}const Pt=O.drawRange,It=O.attributes.position;let re=Pt.start*Ut,_e=(Pt.start+Pt.count)*Ut;ot!==null&&(re=Math.max(re,ot.start*Ut),_e=Math.min(_e,(ot.start+ot.count)*Ut)),At!==null?(re=Math.max(re,0),_e=Math.min(_e,At.count)):It!=null&&(re=Math.max(re,0),_e=Math.min(_e,It.count));const Qt=_e-re;if(Qt<0||Qt===1/0)return;Lt.setup(N,F,xt,O,At);let He,te=wt;if(At!==null&&(He=Q.get(At),te=_t,te.setIndex(He)),N.isMesh)F.wireframe===!0?(mt.setLineWidth(F.wireframeLinewidth*Tt()),te.setMode(I.LINES)):te.setMode(I.TRIANGLES);else if(N.isLine){let Nt=F.linewidth;Nt===void 0&&(Nt=1),mt.setLineWidth(Nt*Tt()),N.isLineSegments?te.setMode(I.LINES):N.isLineLoop?te.setMode(I.LINE_LOOP):te.setMode(I.LINE_STRIP)}else N.isPoints?te.setMode(I.POINTS):N.isSprite&&te.setMode(I.TRIANGLES);if(N.isBatchedMesh)te.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)te.renderInstances(re,Qt,N.count);else if(O.isInstancedBufferGeometry){const Nt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,In=Math.min(O.instanceCount,Nt);te.renderInstances(re,Qt,In)}else te.render(re,Qt)};function Xt(M,P,O){M.transparent===!0&&M.side===an&&M.forceSinglePass===!1?(M.side=Pe,M.needsUpdate=!0,$n(M,P,O),M.side=Ln,M.needsUpdate=!0,$n(M,P,O),M.side=an):$n(M,P,O)}this.compile=function(M,P,O=null){O===null&&(O=M),f=yt.get(O),f.init(),R.push(f),O.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),M!==O&&M.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(x._useLegacyLights);const F=new Set;return M.traverse(function(N){const ot=N.material;if(ot)if(Array.isArray(ot))for(let pt=0;pt<ot.length;pt++){const xt=ot[pt];Xt(xt,O,N),F.add(xt)}else Xt(ot,O,N),F.add(ot)}),R.pop(),f=null,F},this.compileAsync=function(M,P,O=null){const F=this.compile(M,P,O);return new Promise(N=>{function ot(){if(F.forEach(function(pt){Et.get(pt).currentProgram.isReady()&&F.delete(pt)}),F.size===0){N(M);return}setTimeout(ot,10)}gt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let jt=null;function le(M){jt&&jt(M)}function Ce(){he.stop()}function Kt(){he.start()}const he=new Pc;he.setAnimationLoop(le),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(M){jt=M,Bt.setAnimationLoop(M),M===null?he.stop():he.start()},Bt.addEventListener("sessionstart",Ce),Bt.addEventListener("sessionend",Kt),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(P),P=Bt.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,P,C),f=yt.get(M,R.length),f.init(),R.push(f),vt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),bt.setFromProjectionMatrix(vt),Z=this.localClippingEnabled,H=Dt.init(this.clippingPlanes,Z),v=ut.get(M,d.length),v.init(),d.push(v),Ne(M,P,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(V,Y),this.info.render.frame++,H===!0&&Dt.beginShadows();const O=f.state.shadowsArray;if($.render(O,M,P),H===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1)&&Yt.render(v,M),f.setupLights(x._useLegacyLights),P.isArrayCamera){const F=P.cameras;for(let N=0,ot=F.length;N<ot;N++){const pt=F[N];tr(v,M,pt,pt.viewport)}}else tr(v,M,P);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(x,M,P),Lt.resetDefaultState(),W=-1,k=null,R.pop(),R.length>0?f=R[R.length-1]:f=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Ne(M,P,O,F){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||bt.intersectsSprite(M)){F&&ht.setFromMatrixPosition(M.matrixWorld).applyMatrix4(vt);const pt=J.update(M),xt=M.material;xt.visible&&v.push(M,pt,xt,O,ht.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||bt.intersectsObject(M))){const pt=J.update(M),xt=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ht.copy(M.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),ht.copy(pt.boundingSphere.center)),ht.applyMatrix4(M.matrixWorld).applyMatrix4(vt)),Array.isArray(xt)){const At=pt.groups;for(let Ut=0,Pt=At.length;Ut<Pt;Ut++){const It=At[Ut],re=xt[It.materialIndex];re&&re.visible&&v.push(M,pt,re,O,ht.z,It)}}else xt.visible&&v.push(M,pt,xt,O,ht.z,null)}}const ot=M.children;for(let pt=0,xt=ot.length;pt<xt;pt++)Ne(ot[pt],P,O,F)}function tr(M,P,O,F){const N=M.opaque,ot=M.transmissive,pt=M.transparent;f.setupLightsView(O),H===!0&&Dt.setGlobalState(x.clippingPlanes,O),ot.length>0&&ts(N,ot,P,O),F&&mt.viewport(_.copy(F)),N.length>0&&Zn(N,P,O),ot.length>0&&Zn(ot,P,O),pt.length>0&&Zn(pt,P,O),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function ts(M,P,O,F){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const ot=Ct.isWebGL2;lt===null&&(lt=new jn(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")?Yi:Cn,minFilter:Vn,samples:ot?4:0})),x.getDrawingBufferSize(Mt),ot?lt.setSize(Mt.x,Mt.y):lt.setSize(js(Mt.x),js(Mt.y));const pt=x.getRenderTarget();x.setRenderTarget(lt),x.getClearColor(j),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const xt=x.toneMapping;x.toneMapping=bn,Zn(M,O,F),E.updateMultisampleRenderTarget(lt),E.updateRenderTargetMipmap(lt);let At=!1;for(let Ut=0,Pt=P.length;Ut<Pt;Ut++){const It=P[Ut],re=It.object,_e=It.geometry,Qt=It.material,He=It.group;if(Qt.side===an&&re.layers.test(F.layers)){const te=Qt.side;Qt.side=Pe,Qt.needsUpdate=!0,er(re,O,F,_e,Qt,He),Qt.side=te,Qt.needsUpdate=!0,At=!0}}At===!0&&(E.updateMultisampleRenderTarget(lt),E.updateRenderTargetMipmap(lt)),x.setRenderTarget(pt),x.setClearColor(j,L),x.toneMapping=xt}function Zn(M,P,O){const F=P.isScene===!0?P.overrideMaterial:null;for(let N=0,ot=M.length;N<ot;N++){const pt=M[N],xt=pt.object,At=pt.geometry,Ut=F===null?pt.material:F,Pt=pt.group;xt.layers.test(O.layers)&&er(xt,P,O,At,Ut,Pt)}}function er(M,P,O,F,N,ot){M.onBeforeRender(x,P,O,F,N,ot),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(x,P,O,F,M,ot),N.transparent===!0&&N.side===an&&N.forceSinglePass===!1?(N.side=Pe,N.needsUpdate=!0,x.renderBufferDirect(O,P,F,N,M,ot),N.side=Ln,N.needsUpdate=!0,x.renderBufferDirect(O,P,F,N,M,ot),N.side=an):x.renderBufferDirect(O,P,F,N,M,ot),M.onAfterRender(x,P,O,F,N,ot)}function $n(M,P,O){P.isScene!==!0&&(P=Vt);const F=Et.get(M),N=f.state.lights,ot=f.state.shadowsArray,pt=N.state.version,xt=ft.getParameters(M,N.state,ot,P,O),At=ft.getProgramCacheKey(xt);let Ut=F.programs;F.environment=M.isMeshStandardMaterial?P.environment:null,F.fog=P.fog,F.envMap=(M.isMeshStandardMaterial?U:g).get(M.envMap||F.environment),Ut===void 0&&(M.addEventListener("dispose",nt),Ut=new Map,F.programs=Ut);let Pt=Ut.get(At);if(Pt!==void 0){if(F.currentProgram===Pt&&F.lightsStateVersion===pt)return ir(M,xt),Pt}else xt.uniforms=ft.getUniforms(M),M.onBuild(O,xt,x),M.onBeforeCompile(xt,x),Pt=ft.acquireProgram(xt,At),Ut.set(At,Pt),F.uniforms=xt.uniforms;const It=F.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(It.clippingPlanes=Dt.uniform),ir(M,xt),F.needsLights=je(M),F.lightsStateVersion=pt,F.needsLights&&(It.ambientLightColor.value=N.state.ambient,It.lightProbe.value=N.state.probe,It.directionalLights.value=N.state.directional,It.directionalLightShadows.value=N.state.directionalShadow,It.spotLights.value=N.state.spot,It.spotLightShadows.value=N.state.spotShadow,It.rectAreaLights.value=N.state.rectArea,It.ltc_1.value=N.state.rectAreaLTC1,It.ltc_2.value=N.state.rectAreaLTC2,It.pointLights.value=N.state.point,It.pointLightShadows.value=N.state.pointShadow,It.hemisphereLights.value=N.state.hemi,It.directionalShadowMap.value=N.state.directionalShadowMap,It.directionalShadowMatrix.value=N.state.directionalShadowMatrix,It.spotShadowMap.value=N.state.spotShadowMap,It.spotLightMatrix.value=N.state.spotLightMatrix,It.spotLightMap.value=N.state.spotLightMap,It.pointShadowMap.value=N.state.pointShadowMap,It.pointShadowMatrix.value=N.state.pointShadowMatrix),F.currentProgram=Pt,F.uniformsList=null,Pt}function nr(M){if(M.uniformsList===null){const P=M.currentProgram.getUniforms();M.uniformsList=Or.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function ir(M,P){const O=Et.get(M);O.outputColorSpace=P.outputColorSpace,O.batching=P.batching,O.instancing=P.instancing,O.instancingColor=P.instancingColor,O.skinning=P.skinning,O.morphTargets=P.morphTargets,O.morphNormals=P.morphNormals,O.morphColors=P.morphColors,O.morphTargetsCount=P.morphTargetsCount,O.numClippingPlanes=P.numClippingPlanes,O.numIntersection=P.numClipIntersection,O.vertexAlphas=P.vertexAlphas,O.vertexTangents=P.vertexTangents,O.toneMapping=P.toneMapping}function es(M,P,O,F,N){P.isScene!==!0&&(P=Vt),E.resetTextureUnits();const ot=P.fog,pt=F.isMeshStandardMaterial?P.environment:null,xt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:fn,At=(F.isMeshStandardMaterial?U:g).get(F.envMap||pt),Ut=F.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Pt=!!O.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),It=!!O.morphAttributes.position,re=!!O.morphAttributes.normal,_e=!!O.morphAttributes.color;let Qt=bn;F.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Qt=x.toneMapping);const He=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,te=He!==void 0?He.length:0,Nt=Et.get(F),In=f.state.lights;if(H===!0&&(Z===!0||M!==k)){const se=M===k&&F.id===W;Dt.setState(F,M,se)}let ne=!1;F.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==In.state.version||Nt.outputColorSpace!==xt||N.isBatchedMesh&&Nt.batching===!1||!N.isBatchedMesh&&Nt.batching===!0||N.isInstancedMesh&&Nt.instancing===!1||!N.isInstancedMesh&&Nt.instancing===!0||N.isSkinnedMesh&&Nt.skinning===!1||!N.isSkinnedMesh&&Nt.skinning===!0||N.isInstancedMesh&&Nt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Nt.instancingColor===!1&&N.instanceColor!==null||Nt.envMap!==At||F.fog===!0&&Nt.fog!==ot||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Dt.numPlanes||Nt.numIntersection!==Dt.numIntersection)||Nt.vertexAlphas!==Ut||Nt.vertexTangents!==Pt||Nt.morphTargets!==It||Nt.morphNormals!==re||Nt.morphColors!==_e||Nt.toneMapping!==Qt||Ct.isWebGL2===!0&&Nt.morphTargetsCount!==te)&&(ne=!0):(ne=!0,Nt.__version=F.version);let Je=Nt.currentProgram;ne===!0&&(Je=$n(F,P,N));let pn=!1,mn=!1,Qn=!1;const ge=Je.getUniforms(),Ke=Nt.uniforms;if(mt.useProgram(Je.program)&&(pn=!0,mn=!0,Qn=!0),F.id!==W&&(W=F.id,mn=!0),pn||k!==M){ge.setValue(I,"projectionMatrix",M.projectionMatrix),ge.setValue(I,"viewMatrix",M.matrixWorldInverse);const se=ge.map.cameraPosition;se!==void 0&&se.setValue(I,ht.setFromMatrixPosition(M.matrixWorld)),Ct.logarithmicDepthBuffer&&ge.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ge.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),k!==M&&(k=M,mn=!0,Qn=!0)}if(N.isSkinnedMesh){ge.setOptional(I,N,"bindMatrix"),ge.setOptional(I,N,"bindMatrixInverse");const se=N.skeleton;se&&(Ct.floatVertexTextures?(se.boneTexture===null&&se.computeBoneTexture(),ge.setValue(I,"boneTexture",se.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(ge.setOptional(I,N,"batchingTexture"),ge.setValue(I,"batchingTexture",N._matricesTexture,E));const Ui=O.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0&&Ct.isWebGL2===!0)&&Ft.update(N,O,Je),(mn||Nt.receiveShadow!==N.receiveShadow)&&(Nt.receiveShadow=N.receiveShadow,ge.setValue(I,"receiveShadow",N.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Ke.envMap.value=At,Ke.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),mn&&(ge.setValue(I,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&Jn(Ke,Qn),ot&&F.fog===!0&&at.refreshFogUniforms(Ke,ot),at.refreshMaterialUniforms(Ke,F,X,B,lt),Or.upload(I,nr(Nt),Ke,E)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Or.upload(I,nr(Nt),Ke,E),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ge.setValue(I,"center",N.center),ge.setValue(I,"modelViewMatrix",N.modelViewMatrix),ge.setValue(I,"normalMatrix",N.normalMatrix),ge.setValue(I,"modelMatrix",N.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const se=F.uniformsGroups;for(let ns=0,Zc=se.length;ns<Zc;ns++)if(Ct.isWebGL2){const oa=se[ns];Wt.update(oa,Je),Wt.bind(oa,Je)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Je}function Jn(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function je(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,P,O){Et.get(M.texture).__webglTexture=P,Et.get(M.depthTexture).__webglTexture=O;const F=Et.get(M);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=O===void 0,F.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,P){const O=Et.get(M);O.__webglFramebuffer=P,O.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,O=0){C=M,D=P,w=O;let F=!0,N=null,ot=!1,pt=!1;if(M){const At=Et.get(M);At.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(I.FRAMEBUFFER,null),F=!1):At.__webglFramebuffer===void 0?E.setupRenderTarget(M):At.__hasExternalTextures&&E.rebindTextures(M,Et.get(M.texture).__webglTexture,Et.get(M.depthTexture).__webglTexture);const Ut=M.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(pt=!0);const Pt=Et.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pt[P])?N=Pt[P][O]:N=Pt[P],ot=!0):Ct.isWebGL2&&M.samples>0&&E.useMultisampledRTT(M)===!1?N=Et.get(M).__webglMultisampledFramebuffer:Array.isArray(Pt)?N=Pt[O]:N=Pt,_.copy(M.viewport),y.copy(M.scissor),G=M.scissorTest}else _.copy(K).multiplyScalar(X).floor(),y.copy(tt).multiplyScalar(X).floor(),G=st;if(mt.bindFramebuffer(I.FRAMEBUFFER,N)&&Ct.drawBuffers&&F&&mt.drawBuffers(M,N),mt.viewport(_),mt.scissor(y),mt.setScissorTest(G),ot){const At=Et.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,At.__webglTexture,O)}else if(pt){const At=Et.get(M.texture),Ut=P||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,At.__webglTexture,O||0,Ut)}W=-1},this.readRenderTargetPixels=function(M,P,O,F,N,ot,pt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Et.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pt!==void 0&&(xt=xt[pt]),xt){mt.bindFramebuffer(I.FRAMEBUFFER,xt);try{const At=M.texture,Ut=At.format,Pt=At.type;if(Ut!==Ye&&ct.convert(Ut)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=Pt===Yi&&(gt.has("EXT_color_buffer_half_float")||Ct.isWebGL2&&gt.has("EXT_color_buffer_float"));if(Pt!==Cn&&ct.convert(Pt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pt===on&&(Ct.isWebGL2||gt.has("OES_texture_float")||gt.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-F&&O>=0&&O<=M.height-N&&I.readPixels(P,O,F,N,ct.convert(Ut),ct.convert(Pt),ot)}finally{const At=C!==null?Et.get(C).__webglFramebuffer:null;mt.bindFramebuffer(I.FRAMEBUFFER,At)}}},this.copyFramebufferToTexture=function(M,P,O=0){const F=Math.pow(2,-O),N=Math.floor(P.image.width*F),ot=Math.floor(P.image.height*F);E.setTexture2D(P,0),I.copyTexSubImage2D(I.TEXTURE_2D,O,0,0,M.x,M.y,N,ot),mt.unbindTexture()},this.copyTextureToTexture=function(M,P,O,F=0){const N=P.image.width,ot=P.image.height,pt=ct.convert(O.format),xt=ct.convert(O.type);E.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment),P.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,M.x,M.y,N,ot,pt,xt,P.image.data):P.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,M.x,M.y,P.mipmaps[0].width,P.mipmaps[0].height,pt,P.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,F,M.x,M.y,pt,xt,P.image),F===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(M,P,O,F,N=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ot=M.max.x-M.min.x+1,pt=M.max.y-M.min.y+1,xt=M.max.z-M.min.z+1,At=ct.convert(F.format),Ut=ct.convert(F.type);let Pt;if(F.isData3DTexture)E.setTexture3D(F,0),Pt=I.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)E.setTexture2DArray(F,0),Pt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const It=I.getParameter(I.UNPACK_ROW_LENGTH),re=I.getParameter(I.UNPACK_IMAGE_HEIGHT),_e=I.getParameter(I.UNPACK_SKIP_PIXELS),Qt=I.getParameter(I.UNPACK_SKIP_ROWS),He=I.getParameter(I.UNPACK_SKIP_IMAGES),te=O.isCompressedTexture?O.mipmaps[N]:O.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,te.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,te.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,M.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,M.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,M.min.z),O.isDataTexture||O.isData3DTexture?I.texSubImage3D(Pt,N,P.x,P.y,P.z,ot,pt,xt,At,Ut,te.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Pt,N,P.x,P.y,P.z,ot,pt,xt,At,te.data)):I.texSubImage3D(Pt,N,P.x,P.y,P.z,ot,pt,xt,At,Ut,te),I.pixelStorei(I.UNPACK_ROW_LENGTH,It),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,re),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_e),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,He),N===0&&F.generateMipmaps&&I.generateMipmap(Pt),mt.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),mt.unbindTexture()},this.resetState=function(){D=0,w=0,C=null,mt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ea?"display-p3":"srgb",e.unpackColorSpace=$t.workingColorSpace===$r?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ve?Yn:_c}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Yn?ve:fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class am extends zc{}am.prototype.isWebGL1Renderer=!0;class om extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class cm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return qn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Te=new b;class Yr{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$e(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$e(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$e(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$e(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$e(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Yr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hc extends Kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let _i;const Hi=new b,gi=new b,Si=new b,vi=new Gt,Gi=new Gt,Gc=new ce,Rr=new b,Vi=new b,br=new b,wo=new Gt,Us=new Gt,Lo=new Gt;class lm extends ye{constructor(t=new Hc){if(super(),this.isSprite=!0,this.type="Sprite",_i===void 0){_i=new Ie;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new cm(e,5);_i.setIndex([0,1,2,0,2,3]),_i.setAttribute("position",new Yr(n,3,0,!1)),_i.setAttribute("uv",new Yr(n,2,3,!1))}this.geometry=_i,this.material=t,this.center=new Gt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gi.setFromMatrixScale(this.matrixWorld),Gc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Si.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gi.multiplyScalar(-Si.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const c=this.center;Cr(Rr.set(-.5,-.5,0),Si,c,gi,r,s),Cr(Vi.set(.5,-.5,0),Si,c,gi,r,s),Cr(br.set(.5,.5,0),Si,c,gi,r,s),wo.set(0,0),Us.set(1,0),Lo.set(1,1);let a=t.ray.intersectTriangle(Rr,Vi,br,!1,Hi);if(a===null&&(Cr(Vi.set(-.5,.5,0),Si,c,gi,r,s),Us.set(0,1),a=t.ray.intersectTriangle(Rr,br,Vi,!1,Hi),a===null))return;const o=t.ray.origin.distanceTo(Hi);o<t.near||o>t.far||e.push({distance:o,point:Hi.clone(),uv:qe.getInterpolation(Hi,Rr,Vi,br,wo,Us,Lo,new Gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Cr(i,t,e,n,r,s){vi.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Gi.x=s*vi.x-r*vi.y,Gi.y=r*vi.x+s*vi.y):Gi.copy(vi),i.copy(t),i.x+=Gi.x,i.y+=Gi.y,i.applyMatrix4(Gc)}class Vc extends Kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Po=new b,Io=new b,Do=new ce,Ns=new na,wr=new Zi;class hm extends ye{constructor(t=new Ie,e=new Vc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Po.fromBufferAttribute(e,r-1),Io.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Po.distanceTo(Io);t.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),wr.radius+=s,t.ray.intersectsSphere(wr)===!1)return;Do.copy(r).invert(),Ns.copy(t.ray).applyMatrix4(Do);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=new b,h=new b,u=new b,p=new b,m=this.isLineSegments?2:1,S=n.index,f=n.attributes.position;if(S!==null){const d=Math.max(0,c.start),R=Math.min(S.count,c.start+c.count);for(let x=d,A=R-1;x<A;x+=m){const D=S.getX(x),w=S.getX(x+1);if(l.fromBufferAttribute(f,D),h.fromBufferAttribute(f,w),Ns.distanceSqToSegment(l,h,p,u)>o)continue;p.applyMatrix4(this.matrixWorld);const W=t.ray.origin.distanceTo(p);W<t.near||W>t.far||e.push({distance:W,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,c.start),R=Math.min(f.count,c.start+c.count);for(let x=d,A=R-1;x<A;x+=m){if(l.fromBufferAttribute(f,x),h.fromBufferAttribute(f,x+1),Ns.distanceSqToSegment(l,h,p,u)>o)continue;p.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(p);w<t.near||w>t.far||e.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=r.length;s<c;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Uo=new b,No=new b;class um extends hm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Uo.fromBufferAttribute(e,r),No.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Uo.distanceTo(No);t.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qi extends Kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Oo=new ce,Zs=new na,Lr=new Zi,Pr=new b;class qr extends ye{constructor(t=new Ie,e=new qi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),Lr.radius+=s,t.ray.intersectsSphere(Lr)===!1)return;Oo.copy(r).invert(),Zs.copy(t.ray).applyMatrix4(Oo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,u=n.attributes.position;if(l!==null){const p=Math.max(0,c.start),m=Math.min(l.count,c.start+c.count);for(let S=p,v=m;S<v;S++){const f=l.getX(S);Pr.fromBufferAttribute(u,f),Fo(Pr,f,o,r,t,e,this)}}else{const p=Math.max(0,c.start),m=Math.min(u.count,c.start+c.count);for(let S=p,v=m;S<v;S++)Pr.fromBufferAttribute(u,S),Fo(Pr,S,o,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=r.length;s<c;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fo(i,t,e,n,r,s,c){const a=Zs.distanceSqToPoint(i);if(a<e){const o=new b;Zs.closestPointToPoint(i,o),o.applyMatrix4(n);const l=r.ray.origin.distanceTo(o);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:o,index:t,face:null,object:c})}}class kc extends be{constructor(t,e,n,r,s,c,a,o,l){super(t,e,n,r,s,c,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Bo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Bo(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qs);const ra=document.querySelector("#canvas"),Qi=new zc({canvas:ra,antialias:!1});Qi.setPixelRatio(1);Qi.setSize(window.innerWidth,window.innerHeight);Qi.setClearColor(0,1);const Be=new om,jr=(()=>{const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d"),n=64/2,r=e.createRadialGradient(n,n,0,n,n,n);r.addColorStop(0,"rgba(255, 255, 255, 1)"),r.addColorStop(.25,"rgba(255, 255, 255, 1)"),r.addColorStop(.45,"rgba(255, 255, 255, 0.7)"),r.addColorStop(.6,"rgba(255, 255, 255, 0.25)"),r.addColorStop(.7,"rgba(255, 255, 255, 0)"),e.fillStyle=r,e.fillRect(0,0,64,64);const s=new kc(t);return s.minFilter=de,s.magFilter=de,s.generateMipmaps=!1,s})(),fm=(()=>{const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d"),n=64/2;e.clearRect(0,0,64,64),e.strokeStyle="rgba(255, 255, 255, 1)",e.lineWidth=2.6,e.lineCap="round",e.shadowColor="rgba(255, 255, 255, 0.9)",e.shadowBlur=10,[[0,-13,0,13],[-11,-5,11,5],[-7,9,7,-9],[-4,-12,8,-3],[-10,2,10,-2]].forEach(([c,a,o,l])=>{e.beginPath(),e.moveTo(n+c,n+a),e.lineTo(n+o,n+l),e.stroke()});const s=new kc(t);return s.minFilter=de,s.magFilter=de,s.generateMipmaps=!1,s})();let hn=window.innerWidth,un=window.innerHeight;const yn=new Ic(-hn/2,hn/2,un/2,-un/2,.1,1e3);yn.position.z=200;const pm=new dm,Os=new b(0,-96,0);let ji=0,Fr="",Ir=!0;const Br=[],zr=[],Wi=[],Ti=[],mm=33.777331,_m=.85,gm=28.82666475,Sm=.5265,vm=.8,Mm=1.0625,xm=1.75,Em=.3,ym=.9,Tm=3.6,Am=1.4,Rm=.175,bm=2.6,Cm=1.2,wm=1.1,Lm=[5,9],Pm=.25,zo=1,Im=.25,Dm=[.6,.9],Um=[220,380],Dr=[-18,18],Nm=2.4,Om=[.7,1.4],Fm=3,Bm=[.85,1.2],zm=1.6,Ho=.08,Go=[18,28],Hm=[.45,.65],Gm=[.35,.85],Vm=[1.05,1.45],km=1.4,Wm=.15,Xm=.55,Ym=.16,qm=24,Ur=.06,jm=.65,Vo=[2,4],Km=[.05,.18],ko=[30,120],Zm=.65,Wo=.7,$m=.45,Jm=1.45,Qm=3,t_=1,e_=.3,n_=[.02,.06],i_=.1,r_=.15,s_=[.01,.03],a_=.04,o_=.1,c_=.01,l_=.02,h_=2,u_=1.35,d_=1.35,f_=1.35,p_=1.25,m_=1.6,__=1.4,g_=18,S_=1.4,Xo=[.98,1],Yo=[.62,.72],v_=3,M_=.5,x_=.15,E_=.7,y_=3,T_=1.15,A_=1.1,Xi=1.25,R_=.4,b_=2.8,C_=1.35,w_=2.6,L_=.8,P_=.33,I_=1.5,D_=2.5,U_=.55,N_=2.5,O_=.4,F_=4,B_=.5,z_=100,H_=1,G_=.35,V_=.35,k_=[8,18],W_=[5,12],X_=.85,Y_=[16,30],q_=[9,18],j_=.15,K_=[18,30],Z_=[10,18],$_=.5,J_=.45,Q_=[48,72],tg=1.35,eg=.85,ng=1.1,ig=.6,rg=.01,sg=.35,ag=[50,75],og=1.1,cg=1.4,lg=1.6,hg=1.3,ug=.02,dg=1.4,fg=.15,pg=3,mg=1.25,_g=.85,gg=.1,Sg=5,vg=1.6,Mg=2,xg=2.5,Eg=1.4,yg=.9,Tg=2.6,Ag=5,Rg=.7,bg=.03,Cg=.15,wg=5,Lg=1.2,Pg=.24,Ig=.4,Dg=.4,Ug=.5,Ng=.2,Og=.6,Fg=1.4,Bg=[1.15,1.8],zg=1.6,Hg=.0165,Gg=.6,qo=1,Vg=20,kg=1,Wg=1.35,Xg=1.04,Yg=.55,qg=2.4,jg=4.6,Kg=.85,Zg=1.6,$g=1.35,Jg=.5,Qg=.03,t0=.392,e0=.1,n0=[6,14],i0=[1.2,2.4],Mi=.6,r0=.02,s0=50,a0=4.5,o0=6,c0=.3,l0=[{name:"zigzag",strength:[8,16],speed:[6,12]},{name:"corkscrew",strength:[6,12],speed:[6,10]},{name:"flutter",strength:[4,10],speed:[8,14]}],h0=.1875,u0=[20,36],d0=[.006,.012],f0=[.8,1.6],p0=14,m0=12,_0=5.2,g0=.2,S0=1.8,v0=[{name:"tight",strength:1.4,scale:1.5,speed:1.2,twist:1.6},{name:"loose",strength:1.1,scale:1,speed:.85,twist:1.2},{name:"snaking",strength:1.8,scale:1.9,speed:1.35,twist:2},{name:"whirl",strength:2.2,scale:2.3,speed:1.6,twist:2.6}],M0=1.4,x0=.02,E0=.35,y0=12,T0=1.6,A0=[22,34],R0=1.4,b0=1.2,C0=1.1,w0=1.2,L0=[14,22],jo=.18,Wc=1.9,P0=.35,I0=1.2,D0=5.8,U0=.8,N0=1.2,O0=[.35,4.2],F0=.6,B0=.25,z0=600,H0=.8,G0=.98,V0=[.625,2.25],k0=.7,Ko=.06,W0=.7,X0=[.15,.75],Fs=[.8,1.25],Y0=.3,q0=.3,j0=3,K0=.8,Z0=.8,$0=75,Xc=[0,1/12,1/6,1/3,1/2,2/3,5/6,11/12],J0=[0,1/12,1/6,.5,7/12,2/3],Q0=Array.from({length:16},(i,t)=>t/16),tS=.7,eS="rosette",Zo=[90,180],nS=[80,180],iS=[1.2,2.1],rS=[3.2,6.2],sS=[.965,.99],aS={x:[-1.2,1.2],y:[-.8,.8],z:[-1.2,1.2]},oS=[1.1,2.2],cS=[1.05,1.4],lS=.12,hS=2.6,uS=[16,32],dS=[.5,.95],fS=[1,1.6],pS=.7,mS=[9,16],_S=1.45,gS=2.75,SS=1.35,vS=165,MS=1.35,xS=2.2,ES=.12,yS=1.7,TS=[12,22],AS=[4.5,7.5],RS=.65,bS=[.04,.08],CS=[5.5,9.5],wS=[14,28],LS=.35,PS=.2,IS=[.65,.9],DS=[1.6,2.3],US=[.55,.8],NS=[1.4,2.1],OS=.7,FS=32,$o=[.9,1],Jo=[.78,.92],Qo=.08,BS=1.65,tc=[2,4],ec=[4,12],zS=[.95,2],HS=[.6,1],GS=[.6,1.05],kn=[{pattern:"burst",count:[180,360],radius:[90,220],life:[1.5,2.6],trailStretch:[1.8,4.4],drag:[.94,.985],drift:{x:[-2.2,2.2],y:[-1.6,1.6],z:[-2.2,2.2]},pointSize:[1.4,3],gravityScale:[.9,1.1],hueVariance:.1,trailBoost:2.1,curveStrength:[14,28],curveDecay:[.6,1.1],gravityRamp:[.8,1.4],spherical:!0},{pattern:"ring",count:[140,280],radius:[110,240],life:[1.4,2.2],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.4,2.8],gravityScale:[.8,1],hueVariance:.08,trailBoost:2,curveStrength:[12,24],curveDecay:[.6,1],gravityRamp:[.7,1.2],spherical:!0},{pattern:"fan",count:[120,260],radius:[90,210],life:[1.3,2.2],trailStretch:[1.8,4.6],drag:[.94,.98],drift:{x:[-2.6,2.6],y:[-1.4,1.4],z:[-2.6,2.6]},pointSize:[1.2,2.6],gravityScale:[1,1.25],hueVariance:.12},{pattern:"spiral",count:[180,360],radius:[100,230],life:[1.6,2.6],trailStretch:[2.2,4.8],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.8],gravityScale:[.85,1.1],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.5,1],gravityRamp:[.8,1.3],spherical:!0},{pattern:"palm",count:[120,260],radius:[100,220],life:[1.8,3],trailStretch:[2.8,5.6],drag:[.96,.99],drift:{x:[-1.4,1.4],y:[-1,1],z:[-1.4,1.4]},pointSize:[1.6,3],gravityScale:[1.1,1.45],hueVariance:.05},{pattern:"flower",count:[200,400],radius:[100,240],life:[1.5,2.6],trailStretch:[2.2,4.4],drag:[.95,.98],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.8,1.4],spherical:!0},{pattern:"sphere",count:[320,560],radius:[110,260],life:[1.6,2.8],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.15],hueVariance:.08,trailBoost:2.1,curveStrength:[10,22],curveDecay:[.7,1.2],gravityRamp:[.8,1.2],spherical:!0},{pattern:"dahlia",count:[300,520],radius:[110,260],life:[1.6,2.8],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.08,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.7,1.2],gravityRamp:[.9,1.3],spherical:!0},{pattern:"globe",count:[320,560],radius:[120,280],life:[1.6,2.8],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.15],hueVariance:.08,trailBoost:2.2,curveStrength:[10,22],curveDecay:[.7,1.2],gravityRamp:[.8,1.2],dotTrailChance:.5,dotTrailSamples:[7,12],spherical:!0},{pattern:"pearl",count:[300,520],radius:[120,270],life:[1.6,2.8],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.7,1.2],gravityRamp:[.9,1.3],dotTrailChance:.25,dotTrailSamples:[5,9],spherical:!0},{pattern:"shell",count:[320,560],radius:[120,280],life:[1.5,2.6],trailStretch:[2.2,5],drag:[.94,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2,curveStrength:[10,22],curveDecay:[.7,1.2],gravityRamp:[.8,1.2],dotTrailChance:.4,dotTrailSamples:[6,11],spherical:!0},{pattern:"orbital",count:[280,520],radius:[120,270],life:[1.6,2.8],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.08,trailBoost:2.3,curveStrength:[14,28],curveDecay:[.7,1.2],gravityRamp:[.9,1.3],dotTrailChance:.6,dotTrailSamples:[8,14],spherical:!0},{pattern:"bloom",count:[320,560],radius:[120,280],life:[1.6,2.8],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.08,trailBoost:2.3,curveStrength:[14,28],curveDecay:[.7,1.2],gravityRamp:[.9,1.3],dotTrailChance:.35,dotTrailSamples:[6,12],spherical:!0},{pattern:"cross",count:[120,240],radius:[90,210],life:[1.4,2.3],trailStretch:[2.4,5],drag:[.95,.985],drift:{x:[-1.4,1.4],y:[-1.2,1.2],z:[-1.4,1.4]},pointSize:[1.4,2.8],gravityScale:[.9,1.1],hueVariance:.08},{pattern:"cross",count:[120,240],radius:[90,210],life:[1.4,2.3],trailStretch:[2.4,5],drag:[.95,.985],drift:{x:[-1.4,1.4],y:[-1.2,1.2],z:[-1.4,1.4]},pointSize:[1.4,2.8],gravityScale:[.9,1.1],hueVariance:.08},{pattern:"comet",count:[80,180],radius:[120,260],life:[2,3.4],trailStretch:[3.2,6.8],drag:[.965,.99],drift:{x:[-2.4,2.4],y:[-1.4,1.4],z:[-2.4,2.4]},pointSize:[1.6,3.2],gravityScale:[1.1,1.5],hueVariance:.06,trailBoost:2.4,curveStrength:[16,30],curveDecay:[.4,.9],gravityRamp:[1,1.6]},{pattern:"crown",count:[140,260],radius:[90,220],life:[1.6,2.6],trailStretch:[2,4.6],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.4,2.8],gravityScale:[1,1.3],hueVariance:.08,trailBoost:1.9,curveStrength:[10,20],curveDecay:[.6,1],gravityRamp:[.7,1.2]},{pattern:"willow",count:[160,320],radius:[110,260],life:[2.2,3.6],trailStretch:[3,6.4],drag:[.965,.99],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.4,2.8],gravityScale:[1.2,1.6],hueVariance:.08,trailBoost:2.4,curveStrength:[18,36],curveDecay:[.4,.9],gravityRamp:[1.2,1.8]},{pattern:"star",count:[140,280],radius:[110,250],life:[1.5,2.6],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1,1],z:[-1.6,1.6]},pointSize:[1.4,2.8],gravityScale:[.95,1.2],hueVariance:.1,trailBoost:2,curveStrength:[10,22],curveDecay:[.6,1.1],gravityRamp:[.8,1.3]},{pattern:"wave",count:[160,320],radius:[120,260],life:[1.6,2.8],trailStretch:[2.6,5.4],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.6,1],gravityRamp:[.9,1.4]},{pattern:"scatter",count:[220,420],radius:[120,280],life:[1.4,2.4],trailStretch:[2.2,5],drag:[.94,.985],drift:{x:[-2.4,2.4],y:[-1.6,1.6],z:[-2.4,2.4]},pointSize:[1.3,2.6],gravityScale:[.9,1.15],hueVariance:.14},{pattern:"umbrella",count:[140,260],radius:[110,240],life:[1.6,2.8],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.4,2.8],gravityScale:[1,1.3],hueVariance:.08,trailBoost:2.1,curveStrength:[10,22],curveDecay:[.6,1],gravityRamp:[.9,1.4]},{pattern:"peony",count:[200,420],radius:[120,280],life:[1.6,2.8],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.4,2.8],gravityScale:[.9,1.15],hueVariance:.08,trailBoost:2.2,curveStrength:[12,26],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],spherical:!0},{pattern:"chrysanthemum",count:[180,360],radius:[120,270],life:[1.7,2.8],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.4,2.8],gravityScale:[.9,1.2],hueVariance:.08,trailBoost:2.3,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.4],spherical:!0},{pattern:"nova",count:[160,320],radius:[120,260],life:[1.5,2.6],trailStretch:[2.4,5],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.95,1.2],hueVariance:.1,trailBoost:2,curveStrength:[10,22],curveDecay:[.6,1.1],gravityRamp:[.8,1.3],spherical:!0},{pattern:"double",count:[140,280],radius:[120,260],life:[1.6,2.8],trailStretch:[2.4,5.6],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.4,2.8],gravityScale:[.95,1.2],hueVariance:.1,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.4]},{pattern:"fountain",count:[140,280],radius:[80,180],life:[1.4,2.4],trailStretch:[2.6,5.8],drag:[.95,.985],drift:{x:[-1.2,1.2],y:[-.8,.8],z:[-1.2,1.2]},pointSize:[1.4,2.8],gravityScale:[1.1,1.4],hueVariance:.12,trailBoost:2.5,curveStrength:[14,28],curveDecay:[.5,1],gravityRamp:[1,1.5]},{pattern:"cylinder",count:[180,360],radius:[110,250],life:[1.5,2.6],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2,curveStrength:[10,20],curveDecay:[.6,1],gravityRamp:[.8,1.2]},{pattern:"tornado",count:[160,300],radius:[110,240],life:[1.6,2.8],trailStretch:[2.8,5.6],drag:[.95,.985],drift:{x:[-2,2],y:[-1.2,1.2],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.95,1.25],hueVariance:.12,trailBoost:2.2,curveStrength:[14,26],curveDecay:[.5,1],gravityRamp:[1,1.4]},{pattern:"vortex",count:[160,320],radius:[110,260],life:[1.6,2.8],trailStretch:[2.6,5.4],drag:[.95,.985],drift:{x:[-2,2],y:[-1.2,1.2],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.1,curveStrength:[14,26],curveDecay:[.5,1],gravityRamp:[.9,1.3]},{pattern:"halo",count:[140,260],radius:[120,260],life:[1.4,2.4],trailStretch:[2.2,4.8],drag:[.95,.985],drift:{x:[-1.4,1.4],y:[-1,1],z:[-1.4,1.4]},pointSize:[1.3,2.6],gravityScale:[.85,1.1],hueVariance:.1,trailBoost:2,curveStrength:[10,22],curveDecay:[.6,1],gravityRamp:[.8,1.2],spherical:!0},{pattern:"sheaf",count:[140,260],radius:[110,230],life:[1.4,2.6],trailStretch:[2.6,5.4],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1,1],z:[-1.6,1.6]},pointSize:[1.3,2.6],gravityScale:[1,1.3],hueVariance:.12,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.5,1],gravityRamp:[.9,1.3]},{pattern:"pinwheel",count:[160,320],radius:[120,260],life:[1.6,2.8],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-2,2],y:[-1.2,1.2],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]},{pattern:"petal",count:[160,320],radius:[120,260],life:[1.6,2.8],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],spherical:!0},{pattern:"starburst",count:[180,360],radius:[120,280],life:[1.6,2.8],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],spherical:!0},{pattern:"ripple",count:[160,320],radius:[120,260],life:[1.6,2.8],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],spherical:!0},{pattern:"burstlet",count:[240,480],radius:[120,280],life:[1.4,2.4],trailStretch:[2,4.6],drag:[.94,.985],drift:{x:[-2.2,2.2],y:[-1.4,1.4],z:[-2.2,2.2]},pointSize:[1.3,2.6],gravityScale:[.9,1.15],hueVariance:.14,trailBoost:2,curveStrength:[10,22],curveDecay:[.6,1],gravityRamp:[.8,1.2]},{pattern:"saturn",count:[220,420],radius:[120,280],life:[1.6,2.8],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],spherical:!0},{pattern:"crossette",count:[180,360],radius:[110,250],life:[1.5,2.6],trailStretch:[2.2,5],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2,curveStrength:[10,22],curveDecay:[.6,1.1],gravityRamp:[.8,1.2]},{pattern:"spokes",count:[200,380],radius:[120,270],life:[1.5,2.6],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.1,curveStrength:[10,22],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]},{pattern:"helix",count:[180,360],radius:[120,260],life:[1.6,2.8],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-2,2],y:[-1.2,1.2],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]},{pattern:"crescent",count:[180,340],radius:[120,270],life:[1.5,2.7],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[10,22],curveDecay:[.6,1.1],gravityRamp:[.8,1.3]},{pattern:"diamond",count:[160,320],radius:[110,250],life:[1.4,2.5],trailStretch:[2.2,5],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.1,curveStrength:[10,22],curveDecay:[.6,1.1],gravityRamp:[.8,1.3]},{pattern:"lattice",count:[220,420],radius:[130,290],life:[1.6,2.9],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-2,2],y:[-1.2,1.2],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.3,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]},{pattern:"arcburst",count:[140,300],radius:[120,260],life:[1.5,2.7],trailStretch:[2.6,5.4],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,26],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],dotTrailChance:.4,dotTrailSamples:[6,12]},{pattern:"braid",count:[160,320],radius:[110,250],life:[1.6,2.8],trailStretch:[2.8,5.8],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.95,1.25],hueVariance:.12,trailBoost:2.3,curveStrength:[14,28],curveDecay:[.5,1],gravityRamp:[1,1.4]},{pattern:"lotus",count:[180,340],radius:[120,260],life:[1.5,2.7],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]},{pattern:"spire",count:[120,240],radius:[100,220],life:[1.6,2.8],trailStretch:[2.8,6.2],drag:[.955,.99],drift:{x:[-1.4,1.4],y:[-1,1],z:[-1.4,1.4]},pointSize:[1.3,2.6],gravityScale:[1,1.35],hueVariance:.08,trailBoost:2.4,curveStrength:[14,28],curveDecay:[.5,1],gravityRamp:[1,1.5]},{pattern:"fanwave",count:[160,320],radius:[120,260],life:[1.5,2.6],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.2,curveStrength:[12,26],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]},{pattern:"sparkburst",count:[24,48],radius:[35,70],life:[.7,1.2],trailStretch:[1.4,2.4],drag:[.94,.98],drift:{x:[-1.2,1.2],y:[-.8,.8],z:[-1.2,1.2]},pointSize:[1,2],gravityScale:[1,1.25],hueVariance:.08,trailBoost:1.4,curveStrength:[8,14],curveDecay:[.5,.9],gravityRamp:[1,1.3]},{pattern:"arcflower",count:[160,320],radius:[120,260],life:[1.5,2.7],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,26],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],dotTrailChance:.35,dotTrailSamples:[6,12],spherical:!0},{pattern:"lissajous",count:[180,360],radius:[120,270],life:[1.6,2.9],trailStretch:[2.6,5.8],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.3,curveStrength:[14,28],curveDecay:[.5,1],gravityRamp:[1,1.4]},{pattern:"crownburst",count:[140,280],radius:[110,240],life:[1.6,2.8],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.3,2.6],gravityScale:[1,1.35],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.5,1],gravityRamp:[1,1.5]},{pattern:"sprayburst",count:[140,280],radius:[110,240],life:[1.5,2.6],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[1,1.4],hueVariance:.12,trailBoost:2.1,curveStrength:[12,26],curveDecay:[.5,1],gravityRamp:[1,1.6]},{pattern:"ribbon",count:[160,320],radius:[120,260],life:[1.6,2.8],trailStretch:[2.6,5.4],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]}];function it(i,t){return i+Math.random()*(t-i)}function ie(i,t){return Math.floor(it(i,t+1))}function Re(i){return i[Math.floor(Math.random()*i.length)]}function Rt(i){return it(i[0],i[1])}function Nr(){return new Ii().setFromEuler(new $i(it(0,Math.PI*2),it(0,Math.PI*2),it(0,Math.PI*2)))}function $s(i=H0){const t=()=>Math.random()<i?-1:1;return new b(t(),t(),t())}function Yc(i){return new b(it(i[0],i[1]),it(i[0],i[1]),it(i[0],i[1]))}function VS(i,t){const e=[];for(const n of i){const r=t[n.pattern]??1,s=Math.max(1,Math.floor(r)),c=r-Math.floor(r);for(let a=0;a<s;a+=1)e.push(n);c>0&&Math.random()<c&&e.push(n)}return e.length?e:i}function Fn(i,t,e){return i+(t-i)*e}function Bs(i){return i*i*(3-2*i)}function En(i,t,e){const n=Math.sin(i*127.1+t*311.7+e*74.7)*43758.5453;return n-Math.floor(n)}function Fe(i,t,e){const n=Math.floor(i),r=Math.floor(t),s=Math.floor(e),c=i-n,a=t-r,o=e-s,l=Bs(c),h=Bs(a),u=Bs(o),p=En(n,r,s),m=En(n+1,r,s),S=En(n,r+1,s),v=En(n+1,r+1,s),f=En(n,r,s+1),d=En(n+1,r,s+1),R=En(n,r+1,s+1),x=En(n+1,r+1,s+1),A=Fn(p,m,l),D=Fn(S,v,l),w=Fn(f,d,l),C=Fn(R,x,l),W=Fn(A,D,h),k=Fn(w,C,h);return Fn(W,k,u)}function kS(i,t,e,n){const r=i+31.4,s=t+47.2,c=e+11.9,a=i+17.1,o=t+83.6,l=e+29.5,h=i+53.7,u=t+19.3,p=e+61.2,m=(Fe(h,u+n,p)-Fe(h,u-n,p))/(2*n),S=(Fe(a,o,l+n)-Fe(a,o,l-n))/(2*n),v=(Fe(r,s,c+n)-Fe(r,s,c-n))/(2*n),f=(Fe(h+n,u,p)-Fe(h-n,u,p))/(2*n),d=(Fe(a+n,o,l)-Fe(a-n,o,l))/(2*n),R=(Fe(r,s+n,c)-Fe(r,s-n,c))/(2*n);return new b(m-S,v-f,d-R)}function ki(i){const t=Math.max(2,Math.round(i[0]*zo)),e=Math.max(t,Math.round(i[1]*zo));return[t,e]}function nc(i){return new b(it(i.x[0],i.x[1]),it(i.y[0],i.y[1]),it(i.z[0],i.z[1]))}function Js(i,t,e){return Math.min(Math.max(i,t),e)}function sa(i,t,e){const n=new kt;return n.setHSL(i,t,e),n}function ue(){const i=Math.random(),t=Math.random(),e=2*Math.PI*i,n=Math.acos(2*t-1),r=Math.sin(n);return new b(Math.cos(e)*r,Math.sin(e)*r,Math.cos(n))}function WS(){const i=it(0,Math.PI*2);return new b(Math.cos(i),0,Math.sin(i))}function xi(i,t){const e=2/t,n=i*e-1+e/2,r=Math.sqrt(Math.max(0,1-n*n)),s=Math.PI*(3-Math.sqrt(5)),c=i*s;return new b(Math.cos(c)*r,n,Math.sin(c)*r)}function ic(i){const t=Math.abs(i.y)>.8?new b(1,0,0):new b(0,1,0),e=new b().crossVectors(i,t).normalize(),n=new b().crossVectors(i,e).normalize();return{axis:i,tangent:e,bitangent:n}}function XS(i){if(i==="ring"||i==="cross"||i==="comet"||i==="double"||i==="nova"||i==="saturn"||i==="crossette")return ic(ue());if(i==="sprayburst"){const t=ue();return t.y=Math.abs(t.y)*.7+.3,t.normalize(),ic(t)}return i==="lissajous"?{a:ie(2,4),b:ie(3,6),c:ie(2,5),phase:it(0,Math.PI*2)}:i==="crownburst"?{spikes:ie(6,10)}:i==="arcflower"?{petals:ie(5,9)}:null}function YS(i,t,e,n){if(i==="burst")return ue();if(i==="ring"){const a=Math.random()*Math.PI*2;if(n){const o=n.tangent.clone().multiplyScalar(Math.cos(a)).add(n.bitangent.clone().multiplyScalar(Math.sin(a)));return o.addScaledVector(n.axis,it(-.08,.08)),o.normalize()}return new b(Math.cos(a),Math.sin(a),it(-.15,.15)).normalize()}if(i==="fan"){const a=it(-Math.PI/2,Math.PI/2),o=it(.1,Math.PI/2.4);return new b(Math.cos(a)*Math.cos(o),Math.sin(o),Math.sin(a)*Math.cos(o)).normalize()}if(i==="spiral"){const a=it(6,10),o=t/e*Math.PI*a,l=.6+.4*Math.sin(o*.35);return new b(Math.cos(o)*l,Math.sin(o)*l,Math.cos(o*.3)*.35).normalize()}if(i==="rosette"){const o=t/e*Math.PI*2,h=.45+.45*Math.abs(Math.cos(o*8));return new b(Math.cos(o)*h,Math.sin(o)*h,it(-.12,.12)).normalize()}if(i==="arcburst"){const a=e>1?t/(e-1):.5,o=(-.75+.5*a)*Math.PI,l=.5+.35*Math.sin(a*Math.PI),h=Math.cos(o)*l,u=Math.sin(o)*l+.15,p=Math.sin(a*Math.PI*2)*.2;return new b(h,u,p).normalize()}if(i==="braid"){const a=t/e,o=a*Math.PI*6+(t%2===0?0:Math.PI),l=.45+.25*Math.sin(a*Math.PI*2),h=.2+a*.8;return new b(Math.cos(o)*l,h,Math.sin(o)*l).normalize()}if(i==="lotus"){const o=t/e*Math.PI*2,h=.45+.45*Math.abs(Math.sin(o*10)),u=.2+.25*Math.cos(o*10*.5),p=.15*Math.sin(o*10*.5);return new b(Math.cos(o)*h,u,Math.sin(o)*h+p).normalize()}if(i==="spire"){const a=t/e,o=a*Math.PI*8,l=.2+.6*(1-a),h=.25+.7*a;return new b(Math.cos(o)*l,h,Math.sin(o)*l).normalize()}if(i==="fanwave"){const a=t/e,o=-Math.PI/2+a*Math.PI,l=.2+.6*Math.sin(a*Math.PI);return new b(Math.cos(o)*Math.cos(l),Math.sin(l),Math.sin(o)*Math.cos(l)).normalize()}if(i==="sparkburst"){const a=ue();return a.y=a.y*.5+.35,a.normalize()}if(i==="arcflower"){const a=(n==null?void 0:n.petals)??7,o=t/e*Math.PI*2,h=.45+.45*Math.abs(Math.sin(o*a)),u=.1+.35*Math.cos(o*a*.5);return new b(Math.cos(o)*h,u,Math.sin(o)*h).normalize()}if(i==="lissajous"){const a=t/e*Math.PI*2,o=(n==null?void 0:n.a)??3,l=(n==null?void 0:n.b)??4,h=(n==null?void 0:n.c)??2,u=(n==null?void 0:n.phase)??0,p=Math.sin(o*a+u),m=Math.sin(l*a),S=Math.sin(h*a+u*.6)*.8;return new b(p,m,S).normalize()}if(i==="crownburst"){const a=(n==null?void 0:n.spikes)??8,o=t/e*Math.PI*2,h=.25+.45*(.35+.6*Math.abs(Math.cos(o*a))),u=Math.sqrt(Math.max(0,1-h*h));return new b(Math.cos(o)*u,h,Math.sin(o)*u).normalize()}if(i==="sprayburst"){const a=(n==null?void 0:n.axis)??new b(0,1,0),o=(n==null?void 0:n.tangent)??new b(1,0,0),l=(n==null?void 0:n.bitangent)??new b(0,0,1),h=t/e*Math.PI*2,u=.35+.25*Math.sin(h*2);return a.clone().addScaledVector(o,Math.cos(h)*u).addScaledVector(l,Math.sin(h)*u).normalize()}if(i==="ribbon"){const a=t/e,o=a*Math.PI*6,l=.45+.3*Math.sin(a*Math.PI*2),h=.15+.7*Math.sin(a*Math.PI),u=.25*Math.cos(o*.5);return new b(Math.cos(o)*l,h,Math.sin(o)*l+u).normalize()}if(i==="crescent"){const a=t/e*Math.PI*1.6-Math.PI*.8,o=.65+.25*Math.cos(a*.6),l=Math.cos(a)*o+.35,h=Math.sin(a)*o;return new b(l,h,it(-.15,.15)).normalize()}if(i==="diamond"){const a=t/e*Math.PI*2,o=Math.cos(a),l=Math.sin(a),h=1/(Math.abs(o)+Math.abs(l)),u=.75+.15*Math.sin(a*4);return new b(o*h*u,l*h*u,it(-.12,.12)).normalize()}if(i==="lattice"){const o=t%5,l=o/4-.5,h=t/e*Math.PI*6,u=.55+.25*Math.sin(h*1.5+o);return new b(Math.cos(h)*u,l*.85,Math.sin(h)*u).normalize()}if(i==="sphere")return xi(t,e);if(i==="dahlia")return xi(t,e).add(ue().multiplyScalar(.08)).normalize();if(i==="globe")return xi(t,e).add(ue().multiplyScalar(.04)).normalize();if(i==="pearl")return xi(t,e).add(ue().multiplyScalar(.12)).normalize();if(i==="shell")return ue().add(ue().multiplyScalar(.06)).normalize();if(i==="orbital"){const a=xi(t,e),o=new b(-a.z,0,a.x).multiplyScalar(.2);return a.add(o).normalize()}if(i==="bloom"){const a=xi(t,e),o=.2+.3*Math.sin(t/e*Math.PI*6);return a.add(ue().multiplyScalar(o)).normalize()}if(i==="flower"){const a=ie(5,8),o=t/e*Math.PI*2,l=.6+.35*Math.sin(o*a);return new b(Math.cos(o)*l,Math.sin(o)*l,it(-.2,.2)).normalize()}if(i==="cross"&&n){const o=(Math.random()<.5?n.tangent:n.bitangent).clone().multiplyScalar(Math.random()<.5?-1:1);return o.addScaledVector(n.axis,it(-.18,.18)),o.addScaledVector(ue(),.05),o.normalize()}if(i==="comet")return((n==null?void 0:n.axis)??ue()).clone().add(ue().multiplyScalar(.35)).normalize();if(i==="crown"){const a=it(0,Math.PI*2),o=it(.15,.45),l=Math.sqrt(1-o*o);return new b(Math.cos(a)*l,o,Math.sin(a)*l).normalize()}if(i==="palm"){const a=it(0,Math.PI*2),o=it(.55,.95),l=Math.sqrt(1-o*o);return new b(Math.cos(a)*l,o,Math.sin(a)*l).normalize()}if(i==="willow"){const a=it(0,Math.PI*2),o=it(.2,.45),l=Math.sqrt(1-o*o);return new b(Math.cos(a)*l,o,Math.sin(a)*l).normalize()}if(i==="star"){const a=ie(5,7),o=t/e*Math.PI*2,h=.45+.5*Math.abs(Math.cos(o*a));return new b(Math.cos(o)*h,Math.sin(o)*h,it(-.18,.18)).normalize()}if(i==="wave"){const o=t/e*Math.PI*2,l=Math.sin(o*3)*.35;return new b(Math.cos(o),l,Math.sin(o)).normalize()}if(i==="scatter"){const a=ue();return a.y=Math.abs(a.y)*.75+.25,a.normalize()}if(i==="umbrella"){const a=it(0,Math.PI*2),o=it(.65,.95),l=Math.sqrt(1-o*o);return new b(Math.cos(a)*l,o,Math.sin(a)*l).normalize()}if(i==="peony"){const a=ue();return a.y=Math.abs(a.y)*.7+.3,a.normalize()}if(i==="chrysanthemum"){const a=ie(8,12),o=t/e*Math.PI*2,l=.5+.45*Math.sin(o*a),h=.15+.35*Math.cos(o*a);return new b(Math.cos(o)*l,h,Math.sin(o)*l).normalize()}if(i==="double"&&n){const a=t/e*Math.PI*2,o=t%2===0?1:-1,l=n.tangent.clone().multiplyScalar(Math.cos(a)*.6).add(n.bitangent.clone().multiplyScalar(Math.sin(a)*.6*o));return l.addScaledVector(n.axis,it(.2,.7)),l.addScaledVector(ue(),.05),l.normalize()}if(i==="nova"){const a=ie(10,16),o=t/e*Math.PI*2,l=.35+.65*Math.abs(Math.sin(o*a));if(n){const h=n.tangent.clone().multiplyScalar(Math.cos(o)*l).add(n.bitangent.clone().multiplyScalar(Math.sin(o)*l));return h.addScaledVector(n.axis,.15+l*.5),h.normalize()}return new b(Math.cos(o)*l,.15+l*.5,Math.sin(o)*l).normalize()}if(i==="fountain"){const a=it(0,Math.PI*2),o=it(.8,1),l=Math.sqrt(1-o*o);return new b(Math.cos(a)*l,o,Math.sin(a)*l).normalize()}if(i==="cylinder"){const a=it(0,Math.PI*2),o=it(.1,.35),l=Math.sqrt(1-o*o);return new b(Math.cos(a)*l,o,Math.sin(a)*l).normalize()}if(i==="tornado"){const a=t/e,o=a*Math.PI*6,l=.2+a*.8,h=.4+.4*a;return new b(Math.cos(o)*h,l,Math.sin(o)*h).normalize()}if(i==="vortex"){const a=t/e,o=a*Math.PI*10,l=.4+.5*Math.sin(a*Math.PI),h=.2+.6*(1-a);return new b(Math.cos(o)*l,h,Math.sin(o)*l).normalize()}if(i==="halo"){const a=it(0,Math.PI*2),o=it(.35,.55),l=Math.sqrt(1-o*o);return new b(Math.cos(a)*l,o,Math.sin(a)*l).normalize()}if(i==="sheaf"){const a=it(-Math.PI/6,Math.PI/6),o=it(.4,.9);return new b(Math.cos(a)*Math.cos(o),Math.sin(o),Math.sin(a)*Math.cos(o)).normalize()}if(i==="pinwheel"){const a=t/e,o=a*Math.PI*8,l=.5+.4*Math.sin(a*Math.PI);return new b(Math.cos(o)*l,Math.sin(o)*.35,Math.sin(o)*l).normalize()}if(i==="petal"){const a=ie(6,10),o=t/e*Math.PI*2,l=.55+.35*Math.cos(o*a),h=.25+.35*Math.sin(o*a);return new b(Math.cos(o)*l,h,Math.sin(o)*l).normalize()}if(i==="starburst"){const a=ie(8,14),o=t/e*Math.PI*2,l=.4+.6*Math.abs(Math.cos(o*a));return new b(Math.cos(o)*l,.25+l*.5,Math.sin(o)*l).normalize()}if(i==="ripple"){const a=t/e,o=a*Math.PI*2,l=.5+.45*Math.sin(a*Math.PI*4);return new b(Math.cos(o)*l,Math.sin(o)*.2,Math.sin(o)*l).normalize()}if(i==="burstlet"){const a=ue();return a.y=Math.abs(a.y)*.55+.25,a.normalize()}if(i==="saturn"){const a=Math.floor(e*.7);if(t<a){const o=t/a*Math.PI*2;if(n){const l=n.tangent.clone().multiplyScalar(Math.cos(o)).add(n.bitangent.clone().multiplyScalar(Math.sin(o)));return l.addScaledVector(n.axis,it(-.08,.08)),l.normalize()}return new b(Math.cos(o),Math.sin(o),it(-.12,.12)).normalize()}return ue().normalize()}if(i==="crossette"&&n){const o=(Math.random()<.5?n.tangent:n.bitangent).clone().multiplyScalar(Math.random()<.5?-1:1);return o.addScaledVector(n.axis,it(-.15,.15)),o.normalize()}if(i==="spokes"){const a=ie(8,14),o=Math.PI*2/a,h=Math.round(t/e*a)*o+it(-.18,.18),u=it(.2,.6),p=Math.sqrt(1-u*u);return new b(Math.cos(h)*p,u,Math.sin(h)*p).normalize()}if(i==="helix"){const a=it(4,7),o=t/e,l=o*Math.PI*2*a,h=.45+.25*Math.sin(o*Math.PI*2),u=.2+.8*o;return new b(Math.cos(l)*h,u,Math.sin(l)*h).normalize()}const r=it(0,Math.PI*2),s=it(.35,.9),c=Math.sqrt(1-s*s);return new b(Math.cos(r)*c,s,Math.sin(r)*c).normalize()}class rc{constructor(t,e,n={}){const{sizeScale:r=1,opacityScale:s=1,lifeScale:c=1,offset:a=null}=n;this.life=Rt(bS)*c,this.lifeMax=this.life;const o=Math.random();let l=1,h=1;o<LS?(l=Rt(IS),h=Rt(US)):o>1-PS&&(l=Rt(DS),h=Rt(NS)),l*=r,h*=s,this.baseOpacity=Js(Rt(wS)*h,OS,FS),this.size=Rt(CS)*l,this.material=new Hc({map:fm,color:e,transparent:!0,opacity:this.baseOpacity,depthWrite:!1,blending:Rn,alphaTest:.5}),this.material.rotation=it(0,Math.PI*2);const u=a?t.clone().add(a):t;this.sprite=new lm(this.material),this.sprite.position.copy(u),this.sprite.scale.set(this.size,this.size,1)}update(t){if(this.life-=t,this.life<=0)return!1;const e=this.life/this.lifeMax,n=e*e;this.material.opacity=this.baseOpacity*n;const r=this.size*(1+(1-e)*.2);return this.sprite.scale.set(r,r,1),!0}dispose(){this.material.dispose()}}class qS{constructor(t,e){this.position=t.clone(),this.velocity=e.velocity.clone(),this.life=e.life,this.targetY=e.targetY,this.profile=e.profile,this.hue=e.hue,this.rocketHue=e.rocketHue,this.size=e.size,this.clickDroop=e.clickDroop,this.clickCurly=e.clickCurly,this.forceShowcase=e.forceShowcase,this.forceStraight=e.forceStraight,this.trailSamples=e.trailSamples,this.trailOpacity=e.trailOpacity,this.trailSizeScale=e.trailSizeScale,this.trailBrightness=e.trailBrightness,this.trailFadePower=e.trailFadePower,this.trailHistoryIndex=0;const n=sa(this.rocketHue,it(.9,1),it(.55,.75));n.multiplyScalar(zm),this.baseColor=n,this.positions=new Float32Array([this.position.x,this.position.y,this.position.z]),this.colors=new Float32Array([n.r,n.g,n.b]),this.trailPositions=new Float32Array(this.trailSamples*3),this.trailColors=new Float32Array(this.trailSamples*3),this.geometry=new Ie,this.geometry.setAttribute("position",new fe(this.positions,3)),this.geometry.setAttribute("color",new fe(this.colors,3)),this.material=new qi({size:this.size*Xi,vertexColors:!0,map:jr,alphaTest:.35,transparent:!0,opacity:1,depthWrite:!1,blending:Rn}),this.points=new qr(this.geometry,this.material);for(let r=0;r<this.trailSamples;r+=1){const s=r*3;this.trailPositions[s]=this.position.x,this.trailPositions[s+1]=this.position.y,this.trailPositions[s+2]=this.position.z,this.trailColors[s]=this.baseColor.r*this.trailBrightness,this.trailColors[s+1]=this.baseColor.g*this.trailBrightness,this.trailColors[s+2]=this.baseColor.b*this.trailBrightness}this.trailGeometry=new Ie,this.trailGeometry.setAttribute("position",new fe(this.trailPositions,3)),this.trailGeometry.setAttribute("color",new fe(this.trailColors,3)),this.trailMaterial=new qi({size:this.size*this.trailSizeScale*Xi,vertexColors:!0,map:jr,alphaTest:.35,transparent:!0,opacity:this.trailOpacity,depthWrite:!1,blending:Rn}),this.trail=new qr(this.trailGeometry,this.trailMaterial)}update(t){this.life-=t,this.position.addScaledVector(this.velocity,t),this.positions[0]=this.position.x,this.positions[1]=this.position.y,this.positions[2]=this.position.z,this.geometry.attributes.position.needsUpdate=!0,this.trailHistoryIndex=(this.trailHistoryIndex+1)%this.trailSamples;const e=this.trailHistoryIndex*3;this.trailPositions[e]=this.position.x,this.trailPositions[e+1]=this.position.y,this.trailPositions[e+2]=this.position.z;const n=this.trailSamples>1?this.trailSamples-1:1;for(let r=0;r<this.trailSamples;r+=1){const c=(this.trailHistoryIndex-r+this.trailSamples)%this.trailSamples*3,a=Math.pow(1-r/n,this.trailFadePower),o=this.trailOpacity*this.trailBrightness*a;this.trailColors[c]=this.baseColor.r*o,this.trailColors[c+1]=this.baseColor.g*o,this.trailColors[c+2]=this.baseColor.b*o}if(this.trailGeometry.attributes.position.needsUpdate=!0,this.trailGeometry.attributes.color.needsUpdate=!0,this.life<=0||this.position.y>=this.targetY){const r=aa(this.position);return qc(r,this.hue,{spherical:!0}),Kr(r,this.profile,this.hue,!0,this.clickDroop,this.clickCurly,this.forceStraight,this.forceShowcase),!1}return!0}dispose(){this.geometry.dispose(),this.material.dispose(),this.trailGeometry.dispose(),this.trailMaterial.dispose()}}class jS{constructor(t,e){this.count=e.count,this.pattern=e.pattern,this.radius=e.radius,this.lifeBase=e.life,this.trailStretch=e.trailStretch,this.trailGrowth=e.trailGrowth??0,this.drag=e.drag,this.drift=e.drift,this.pointSize=e.pointSize,this.trailMode=e.trailMode??"lines",this.trailSamples=e.trailSamples??2,this.trailPointScale=e.trailPointScale??1,this.trailWidthScale=e.trailWidthScale??1,this.trailBrightness=e.trailBrightness??1,this.trailFadePower=e.trailFadePower??Wc,this.trailVisible=e.trailVisible??!0,this.trailOpacity=e.trailOpacity??.9,this.trailHistory=e.trailHistory??!1,this.spiralStrength=e.spiralStrength??0,this.spiralSpeed=e.spiralSpeed??0,this.swirlStrength=e.swirlStrength??0,this.swirlSpeed=e.swirlSpeed??0,this.snowflake=e.snowflake??!1,this.snowflakeSwayStrength=e.snowflakeSwayStrength??0,this.snowflakeSwaySpeed=e.snowflakeSwaySpeed??0,this.snowflakePhase=null,this.trajectoryMode=e.trajectoryMode??null,this.trajectoryStrength=e.trajectoryStrength??0,this.trajectorySpeed=e.trajectorySpeed??0,this.trajectoryPhase=null,this.trajectoryVectors=null,this.curlNoise=e.curlNoise??!1,this.curlNoiseStrength=e.curlNoiseStrength??0,this.curlNoiseScale=e.curlNoiseScale??1,this.curlNoiseSpeed=e.curlNoiseSpeed??0,this.curlNoiseOffset=null,this.curlNoiseTwist=e.curlNoiseTwist??1,this.curlNoiseYAxis=e.curlNoiseYAxis??1,this.subBurst=e.subBurst??!1,this.subBurstProfile=e.subBurstProfile??null,this.subBurstHue=e.subBurstHue??e.hue,this.subBurstTriggered=!1,this.directionRotation=e.directionRotation??null,this.directionMirror=e.directionMirror??null,this.directionScale=e.directionScale??null,this.directionChaosChance=e.directionChaosChance??0,this.directionChaosAngle=e.directionChaosAngle??null,this.directionChaosScaleRange=e.directionChaosScaleRange??null,this.directionChaosMirrorChance=e.directionChaosMirrorChance??0,this.gravityScale=e.gravityScale??1,this.gravityRamp=e.gravityRamp??0,this.curveStrength=e.curveStrength??0,this.curveDecay=e.curveDecay??1,this.patternData=XS(this.pattern),this.curveVectors=null,this.trailHistoryIndex=null,this.spiralPhase=null,this.swirlPhase=null,this.trailMode!=="dots"&&(this.trailSamples=2,this.trailHistory=!1);const n=this.radius/this.lifeBase;if(this.positions=new Float32Array(this.count*3),this.trailPositions=new Float32Array(this.count*this.trailSamples*3),this.colors=new Float32Array(this.count*3),this.baseColors=new Float32Array(this.count*3),this.trailColors=new Float32Array(this.count*this.trailSamples*3),this.velocities=new Float32Array(this.count*3),this.life=new Float32Array(this.count),this.lifeMax=new Float32Array(this.count),this.curveStrength>0){this.curveVectors=new Float32Array(this.count*2);for(let c=0;c<this.count;c+=1){const a=it(0,Math.PI*2),o=this.curveStrength*it(.6,1.4),l=c*2;this.curveVectors[l]=Math.cos(a)*o,this.curveVectors[l+1]=Math.sin(a)*o}}if(this.trailHistory&&(this.trailHistoryIndex=new Uint16Array(this.count)),this.spiralStrength>0){this.spiralPhase=new Float32Array(this.count);for(let c=0;c<this.count;c+=1)this.spiralPhase[c]=it(0,Math.PI*2)}if(this.swirlStrength>0){this.swirlPhase=new Float32Array(this.count);for(let c=0;c<this.count;c+=1)this.swirlPhase[c]=it(0,Math.PI*2)}if(this.snowflake){this.snowflakePhase=new Float32Array(this.count);for(let c=0;c<this.count;c+=1)this.snowflakePhase[c]=it(0,Math.PI*2)}if(this.curlNoise&&(this.curlNoiseOffset=new b(it(-100,100),it(-100,100),it(-100,100))),this.trajectoryMode){this.trajectoryPhase=new Float32Array(this.count),(this.trajectoryMode==="zigzag"||this.trajectoryMode==="flutter")&&(this.trajectoryVectors=new Float32Array(this.count*3));for(let c=0;c<this.count;c+=1)if(this.trajectoryPhase[c]=it(0,Math.PI*2),this.trajectoryVectors){const a=WS(),o=c*3;this.trajectoryVectors[o]=a.x,this.trajectoryVectors[o+1]=a.y,this.trajectoryVectors[o+2]=a.z}}for(let c=0;c<this.count;c+=1){const a=YS(this.pattern,c,this.count,this.patternData);this.directionScale&&a.multiply(this.directionScale).normalize(),this.directionMirror&&a.multiply(this.directionMirror),this.directionRotation&&a.applyQuaternion(this.directionRotation),this.directionChaosChance>0&&Math.random()<this.directionChaosChance&&(this.directionChaosScaleRange&&a.multiply(Yc(this.directionChaosScaleRange)).normalize(),this.directionChaosMirrorChance>0&&Math.random()<this.directionChaosMirrorChance&&a.multiply($s(.5)),this.directionChaosAngle&&(a.applyAxisAngle(ue(),Rt(this.directionChaosAngle)),a.normalize()));const o=n*it(.6,1.2),l=c*3;this.positions[l]=t.x,this.positions[l+1]=t.y,this.positions[l+2]=t.z,this.velocities[l]=a.x*o,this.velocities[l+1]=a.y*o,this.velocities[l+2]=a.z*o;const h=this.lifeBase*it(.7,1.3);this.life[c]=h,this.lifeMax[c]=h;const p=((e.hues?Re(e.hues):e.hue)+it(-e.hueVariance,e.hueVariance)+1)%1,m=it(Xo[0],Xo[1]),S=it(Yo[0],Yo[1]),v=sa(p,m,S);v.multiplyScalar(v_),S>=M_?v.multiplyScalar(x_):S<=E_&&v.multiplyScalar(y_);const f=this.pattern==="cross"?u_:1;this.colors[l]=v.r*f,this.colors[l+1]=v.g*f,this.colors[l+2]=v.b*f,this.baseColors[l]=v.r*f,this.baseColors[l+1]=v.g*f,this.baseColors[l+2]=v.b*f;const d=c*this.trailSamples*3;for(let R=0;R<this.trailSamples;R+=1){const x=d+R*3;this.trailColors[x]=v.r*this.trailBrightness,this.trailColors[x+1]=v.g*this.trailBrightness,this.trailColors[x+2]=v.b*this.trailBrightness,this.trailHistory&&(this.trailPositions[x]=t.x,this.trailPositions[x+1]=t.y,this.trailPositions[x+2]=t.z)}}this.pointsGeometry=new Ie,this.pointsGeometry.setAttribute("position",new fe(this.positions,3)),this.pointsGeometry.setAttribute("color",new fe(this.colors,3));const r=this.pointSize*this.trailPointScale*this.trailWidthScale*Xi,s=Math.max(this.pointSize,r*A_);this.pointsMaterial=new qi({size:s*Xi,vertexColors:!0,map:jr,alphaTest:.35,transparent:!0,opacity:1,depthWrite:!1,blending:Rn}),this.points=new qr(this.pointsGeometry,this.pointsMaterial),this.trailGeometry=new Ie,this.trailGeometry.setAttribute("position",new fe(this.trailPositions,3)),this.trailGeometry.setAttribute("color",new fe(this.trailColors,3)),this.trailMode==="dots"?(this.trailMaterial=new qi({size:this.pointSize*this.trailPointScale*this.trailWidthScale,vertexColors:!0,map:jr,alphaTest:.35,transparent:!0,opacity:this.trailOpacity,depthWrite:!1,blending:Rn}),this.trail=new qr(this.trailGeometry,this.trailMaterial)):(this.trailMaterial=new Vc({vertexColors:!0,transparent:!0,opacity:this.trailOpacity,depthWrite:!1,blending:Rn,linewidth:this.trailWidthScale*Xi}),this.trail=new um(this.trailGeometry,this.trailMaterial))}update(t){let e=0;for(let n=0;n<this.count;n+=1){let r=this.life[n]-t;this.life[n]=r;const s=n*3,c=n*this.trailSamples*3;if(r<=0){this.colors[s]=0,this.colors[s+1]=0,this.colors[s+2]=0;for(let k=0;k<this.trailSamples;k+=1){const _=c+k*3;this.trailColors[_]=0,this.trailColors[_+1]=0,this.trailColors[_+2]=0}continue}e+=1;const a=Math.max(r/this.lifeMax[n],0),o=1-a,l=this.gravityScale*(1+this.gravityRamp*o);let h=this.velocities[s],u=this.velocities[s+1],p=this.velocities[s+2];if(h+=(Os.x*l+this.drift.x)*t,u+=(Os.y*l+this.drift.y)*t,p+=(Os.z*l+this.drift.z)*t,this.curveVectors){const k=n*2,_=Math.pow(a,this.curveDecay);h+=this.curveVectors[k]*_*t,p+=this.curveVectors[k+1]*_*t}if(this.spiralStrength>0&&this.spiralPhase){const k=this.spiralPhase[n]+this.spiralSpeed*o+a*.6;h+=Math.cos(k)*this.spiralStrength*t,p+=Math.sin(k)*this.spiralStrength*t}if(this.swirlStrength>0&&this.swirlPhase){const k=this.swirlPhase[n]+this.swirlSpeed*o+a*1.2,_=.35+.65*o;h+=Math.sin(k)*this.swirlStrength*_*t,p+=Math.cos(k)*this.swirlStrength*_*t}if(this.snowflake&&this.snowflakePhase){const k=this.snowflakePhase[n]+this.snowflakeSwaySpeed*o+a*.5,_=.4+.6*o;h+=Math.sin(k)*this.snowflakeSwayStrength*_*t,p+=Math.cos(k)*this.snowflakeSwayStrength*_*t,u*=.99}if(this.trajectoryMode&&this.trajectoryPhase){const k=this.trajectoryPhase[n]+this.trajectorySpeed*o;if(this.trajectoryMode==="zigzag"&&this.trajectoryVectors){const _=n*3,y=Math.sin(k)*this.trajectoryStrength;h+=this.trajectoryVectors[_]*y*t,u+=this.trajectoryVectors[_+1]*y*t,p+=this.trajectoryVectors[_+2]*y*t}else if(this.trajectoryMode==="corkscrew"){const _=this.trajectoryStrength*t;h+=Math.cos(k)*_,p+=Math.sin(k)*_}else if(this.trajectoryMode==="flutter"&&this.trajectoryVectors){const _=n*3,y=Math.sin(k*1.6)*this.trajectoryStrength;h+=this.trajectoryVectors[_]*y*.6*t,p+=this.trajectoryVectors[_+2]*y*.6*t,u+=y*.35*t}}const m=this.positions[s],S=this.positions[s+1],v=this.positions[s+2];if(this.curlNoise&&this.curlNoiseOffset){const k=ji*this.curlNoiseSpeed,_=m*this.curlNoiseScale+this.curlNoiseOffset.x,y=S*this.curlNoiseScale+this.curlNoiseOffset.y,G=v*this.curlNoiseScale+this.curlNoiseOffset.z+k,j=kS(_,y,G,x0),L=this.curlNoiseTwist;if(h+=j.x*this.curlNoiseStrength*t,u+=j.y*this.curlNoiseStrength*this.curlNoiseYAxis*t,p+=j.z*this.curlNoiseStrength*t,L!==1){const z=L*t*(.4+o),B=h*Math.cos(z)-p*Math.sin(z),X=h*Math.sin(z)+p*Math.cos(z);h=B,p=X}}h*=this.drag,u*=this.drag,p*=this.drag,this.velocities[s]=h,this.velocities[s+1]=u,this.velocities[s+2]=p;const f=m+h*t,d=S+u*t,R=v+p*t;this.positions[s]=f,this.positions[s+1]=d,this.positions[s+2]=R;const x=f-m,A=d-S,D=R-v;this.colors[s]=this.baseColors[s]*a,this.colors[s+1]=this.baseColors[s+1]*a,this.colors[s+2]=this.baseColors[s+2]*a;const w=Math.max((a-jo)/(1-jo),0),W=Math.pow(w,this.trailFadePower)*this.trailBrightness;if(this.trailHistory){let k=this.trailHistoryIndex[n];k=(k+1)%this.trailSamples,this.trailHistoryIndex[n]=k;const _=c+k*3;this.trailPositions[_]=f,this.trailPositions[_+1]=d,this.trailPositions[_+2]=R;const y=this.trailSamples>1?this.trailSamples-1:1;for(let G=0;G<this.trailSamples;G+=1){const j=(k-G+this.trailSamples)%this.trailSamples,L=c+j*3,z=Math.pow(1-G/y,1.6),B=W*z;this.trailColors[L]=this.baseColors[s]*B,this.trailColors[L+1]=this.baseColors[s+1]*B,this.trailColors[L+2]=this.baseColors[s+2]*B}}else{const k=this.trailStretch*(1+this.trailGrowth*o),_=f-x*k,y=d-A*k,G=R-D*k,j=this.trailSamples,L=j>1?j-1:1;for(let z=0;z<j;z+=1){const B=z/L,X=c+z*3;this.trailPositions[X]=_+(f-_)*B,this.trailPositions[X+1]=y+(d-y)*B,this.trailPositions[X+2]=G+(R-G)*B,this.trailColors[X]=this.baseColors[s]*W,this.trailColors[X+1]=this.baseColors[s+1]*W,this.trailColors[X+2]=this.baseColors[s+2]*W}}}if(this.pointsGeometry.attributes.position.needsUpdate=!0,this.pointsGeometry.attributes.color.needsUpdate=!0,this.trailGeometry.attributes.position.needsUpdate=!0,this.trailGeometry.attributes.color.needsUpdate=!0,this.subBurst&&!this.subBurstTriggered){let n=0,r=[];for(let s=0;s<this.count;s+=1){const c=s*3,a=Math.max(this.life[s]/this.lifeMax[s],0),o=this.velocities[c+1];if(a>Xm||o>=0||(r.push(s),Math.random()>Ym))continue;const l=new b(this.positions[c],this.positions[c+1],this.positions[c+2]),h=(this.subBurstHue+it(-Ur,Ur)+1)%1;if(Kr(l,this.subBurstProfile,h,!1,!1,!1,!1,!1),n+=1,n>=qm)break}if(n===0&&r.length){const c=Re(r)*3,a=new b(this.positions[c],this.positions[c+1],this.positions[c+2]),o=(this.subBurstHue+it(-Ur,Ur)+1)%1;Kr(a,this.subBurstProfile,o,!1,!1,!1,!1,!1),n=1}n>0&&(this.subBurstTriggered=!0)}return e>0}dispose(){this.pointsGeometry.dispose(),this.pointsMaterial.dispose(),this.trailGeometry.dispose(),this.trailMaterial.dispose()}}function KS(i,t,e=!1,n=!1,r=!1,s=!1){const c=i.scale??1;let a=r,o=t??Math.random();const l=!a&&Math.random()<Og,h=l?Rt(Bg):1;let u=i.hueVariance??.1;const p=!i.spherical,m=i.spherical&&Math.random()<o_;m&&(o=c_,u=Math.min(u,l_)),p&&Math.random()<k0&&(o=(Re(Xc)+it(-Ko,Ko)+1)%1);const S=i.trailBoost??1,v=i.curveStrength?Rt(i.curveStrength):0,f=i.curveDecay?Rt(i.curveDecay):1,d=i.gravityRamp?Rt(i.gravityRamp):0,R=Math.random()<Em?xm:1,x=Math.random()<vm,A=Math.random()<E0,D=A||Math.random()<H_,w=Math.random()<J_,C=Math.random(),W=C<fg,k=Math.random()<gg,_=i.spherical&&Math.random()<yg,y=l&&Math.random()<Kg,G=C<sg||k||_||e||y,j=_?Tg:1,L=_?Ag:1,z=!a&&(!i.spherical||n||l),B=z&&Math.random()<G_,X=z&&i.spherical&&Math.random()<ES;let V=B||X||n||l,Y=!1;!l&&V&&Math.random()<Dg&&(V=!1,Y=!0,Math.random()<Ug&&(a=!0));const tt=(V?D0*(X?yS:1)*M0:1)*(l?Fg:1),st=V?U0:0,bt=(V?N0:0)+(l?Gg:0),H=i.spherical&&Math.random()<ym?Tm:1,Z=Math.random()<$m,lt=Z?Jm:1,vt=Z?Qm:1,Mt=Z?t_:1,ht=D||w||G,Vt=i.dotTrailChance??Rm,Tt=ht||Math.random()<Vt,I=s?!1:Math.random()<Pm,ae=ki(i.dotTrailSamples??Lm),gt=ki(A0),Ct=ki(L0),mt=ki(Q_),Jt=ki(ag);let Et=A?ie(gt[0],gt[1]):ht?ie(Ct[0],Ct[1]):Tt?ie(ae[0],ae[1]):2;if(w&&(Et=ie(mt[0],mt[1])),G){const se=ie(Jt[0],Jt[1]);Et=Math.max(Et,se)}l&&(Et=Math.max(2,Math.round(Et*jg))),s&&(Et=Math.max(Et,g_));const E=Tt?Cm*(A?R0:1)*(w?eg:1)*(G?og:1):1,g=Rt(O0)*(i.spherical?Am:1),U=(Tt?wm:1)*Mt*F0,Q=Tt?bm:1,q=Math.random()<R_,J=Math.random()<B0?z0:1,ft=W?pg:1,at=k?Sg*(i.spherical?Eg:1):1,ut=y?Zg:1,yt=e?wg:1,Dt=n?s0:1,Yt=Math.random()<U_?N_:1,Ft=Math.random()<O_?F_:1,wt=Math.random()<B_?z_:1,_t=!a&&Math.random()<j_,ct=!a&&V&&Math.random()<X_;let Lt=!a&&(_t||ct||Math.random()<V_);l&&!a&&(Lt=!0);const Wt=Math.random()<P0,qt=Math.random()<P_,Bt=qt?D_:1;let Ht=(q?C_:1)*(qt?I_:1)*(ht?C0:1)*(A?T0:1);w&&(Ht*=tg),G&&(Ht*=dg),W&&(Ht*=mg),k&&(Ht*=vg),e&&(Ht*=Lg),n&&(Ht*=a0),l&&(Ht*=Hg),_&&(Ht*=L);const T=Math.max(q?w_:0,ht?w0:0)+bt,et=q?L_:0,nt=w?ig:0,dt=G?hg:0,St=k?xg:0,Xt=_t?$_:0,jt=_?Rg:0,le=q?b_:1,Ce=ht?b0:1,Kt=A?y0:1,he=!p&&!m&&Math.random()<e_,Ne=!he&&Math.random()<r_?Rt(s_):0,tr=he?Math.min(u+Rt(n_),i_):Math.min(u+Ne,a_),ts=he?Math.random()<tS?Array.from({length:ie(2,3)},()=>Re(J0)):[o,(o+it(.1,.3))%1,(o+it(.55,.85))%1].slice(0,ie(2,3)):null,Zn=X?Rt(TS):0,er=X?Rt(AS):0,$n=_t?Rt(K_):ct?Rt(Y_):Lt?Rt(k_):0,nr=_t?Rt(Z_):ct?Rt(q_):Lt?Rt(W_):0,ir=$n*(l?qo:1),es=nr*(l?qo:1),Jn=!a&&!I&&(Math.random()<h0||V),je=V?Re(v0):null,P=V&&Math.random()<(l?Yg:g0)?l?qg:S0:1,O=Math.min(1,c0+(Y?Ng:0)),F=!a&&Math.random()<O?Re(l0):null,N=F?F.name:null,ot=F?Rt(F.strength):0,pt=F?Rt(F.speed):0,xt=i.spherical?_S:1,At=i.spherical?gS:1,Ut=i.spherical?vS:1,Pt=i.spherical?MS:1,It=i.spherical?xS:1,re=i.spherical&&Math.random()<Z0?$0:1,_e=Nr();_e.multiply(Nr()),p&&_e.multiply(Nr());const Qt=p?$s(G0):$s();if(i.pattern==="cross"){for(let se=0;se<h_;se+=1)_e.multiply(Nr());if(Qt.x>0&&Qt.y>0&&Qt.z>0){const se=ie(0,2);se===0?Qt.x=-1:se===1?Qt.y=-1:Qt.z=-1}}const He=p?Yc(V0):null,te=p?q0:W0,Nt=p?[Fs[0]*.9,Fs[1]*1.1]:Fs,In=(G?cg:1)*T_,ne=i.pattern==="cross"?In*d_:In,Je=s?In*S_:ne,pn=Math.random()<e0,mn=Rt(i.drag),Qn=(w?rg:0)+(G?ug:0)+(_?bg:0)+(y?Qg:0)+(pn?r0:0),ge=Qn>0?Math.min(mn+Qn,.995):mn,Ke=kn.find(se=>se.pattern==="sparkburst"),Ui=Math.random()<Wm&&!!Ke;return{pattern:i.pattern,count:Math.round(ie(i.count[0],i.count[1])*xt*_m*(s?f_:1)),radius:Rt(i.radius)*mm*c*R*(x?Mm:1)*lt*At*(i.spherical?SS:1)*(s?p_:1)*(l?t0:1),life:Rt(i.life)*Ht*Sm*It*(s?__:1),trailStretch:Rt(i.trailStretch)*gm*S*H*Ut*Q*le*Yt*Bt*vt*Ce*Kt*J*wt*(l?zg:1)*Ft*re*ft*at*ut*yt*j*Dt*(s?m_:1),drag:ge,drift:nc(pn?{x:[i.drift.x[0]*Mi,i.drift.x[1]*Mi],y:[i.drift.y[0]*Mi,i.drift.y[1]*Mi],z:[i.drift.z[0]*Mi,i.drift.z[1]*Mi]}:i.drift),pointSize:Rt(i.pointSize)*U,hue:o,hues:ts,hueVariance:tr,gravityScale:Rt(i.gravityScale)*Pt*(w?ng:1)*(G?lg:1)*(k?Mg:1)*(y?$g:1),gravityRamp:d+et+st+nt+dt+Xt+St+(y?Jg:0)+jt,curveStrength:v*tt,curveDecay:f,trailGrowth:T,trailHistory:ht,trailMode:Tt?"dots":"lines",trailSamples:Et,trailPointScale:E,trailWidthScale:g,trailBrightness:Je,trailFadePower:W?_g:Wt?I0:Wc,trailVisible:!I,trailOpacity:I?0:.9,directionRotation:_e,directionMirror:Qt,directionScale:He,directionChaosChance:te,directionChaosAngle:X0,directionChaosScaleRange:Nt,directionChaosMirrorChance:Y0,spiralStrength:Zn,spiralSpeed:er,swirlStrength:ir,swirlSpeed:es,snowflake:pn,snowflakeSwayStrength:pn?Rt(n0):0,snowflakeSwaySpeed:pn?Rt(i0):0,trajectoryMode:N,trajectoryStrength:ot,trajectorySpeed:pt,curlNoise:Jn,curlNoiseStrength:Jn?Rt(u0)*(V?p0:1)*(je?je.strength:1)*(l?Vg:1)*h:0,curlNoiseScale:Jn?Rt(d0)*(V?m0:1)*(je?je.scale:1)*(l?kg:1)*h:0,curlNoiseSpeed:Jn?Rt(f0)*(V?_0:1)*(je?je.speed:1)*(l?Wg:1)*h:0,curlNoiseYAxis:P,curlNoiseTwist:V?o0*(je?je.twist:1)*(l?Xg:1)*h:1,subBurst:Ui,subBurstProfile:Ke,subBurstHue:o}}function sc(i){const e=((i??Math.random())+it(-Qo,Qo)+1)%1;return sa(e,it($o[0],$o[1]),it(Jo[0],Jo[1]))}function qc(i,t,e={}){if(Math.random()>RS)return;const n=e.spherical?BS:1,r=new rc(i,sc(t),{opacityScale:n});Wi.push(r),Be.add(r.sprite);const s=ie(tc[0],tc[1]);for(let c=0;c<s;c+=1){const a=it(0,Math.PI*2),o=it(ec[0],ec[1]),l=new b(Math.cos(a)*o,Math.sin(a)*o,0),h=new rc(i,sc(t),{sizeScale:Rt(zS),opacityScale:Rt(HS)*n,lifeScale:Rt(GS),offset:l});Wi.push(h),Be.add(h.sprite)}}function ZS(){const i=Math.max(10,Math.round(Zo[0]*Wo)),t=Math.max(i,Math.round(Zo[1]*Wo));return{pattern:eS,count:[i,t],radius:nS,life:iS,trailStretch:rS,drag:sS,drift:aS,pointSize:oS,gravityScale:cS,hueVariance:lS,trailBoost:hS,curveStrength:uS,curveDecay:dS,gravityRamp:fS,dotTrailChance:pS,dotTrailSamples:mS,scale:Zm}}function $S(i,t,e,n=!1,r=!1,s=!1){if(Math.random()>=jm)return;const c=ie(Vo[0],Vo[1]),a=ZS();for(let o=0;o<c;o+=1){const l=it(ko[0],ko[1]),h=it(0,Math.PI*2),u=new b(Math.cos(h)*l,Math.sin(h)*l*.7,0),p=Rt(Km)+o*it(.04,.12),m=aa(i.clone().add(u));Ti.push({time:ji+p,position:m,profile:a,hue:e,allowMultiBlast:!1,clickDroop:n,clickCurly:r,forceStraight:s})}}function Kr(i,t,e,n=!0,r=!1,s=!1,c=!1,a=!1){const o=t??Re(kn),l=new jS(i,KS(o,e,r,s,c,a));Br.push(l),Be.add(l.points),l.trailVisible&&l.trail&&Be.add(l.trail),n&&$S(i,o,e,r,s,c)}function JS(i,t){const e=new b(i/hn*2-1,-(t/un)*2+1,0);return e.unproject(yn),new b(e.x,e.y,0)}function aa(i){return new b(Js(i.x,-hn/2+40,hn/2-40),Js(i.y,-un/2+120,un/2-80),0)}function jc(i=!1){const t=new Set(Fr?Fr.split("|"):[]),e=kn.filter(a=>a.spherical&&!t.has(a.pattern)),n=kn.filter(a=>!a.spherical&&!t.has(a.pattern)),r=kn.filter(a=>!t.has(a.pattern)),s=VS(n,{cross:j0});let c=null;return i&&e.length||Math.random()<K0&&e.length?c=Re(e):s.length?c=Re(s):r.length?c=Re(r):c=Re(kn),Fr=c.pattern,c}function QS(i,t,e=!1,n=!1,r=!1,s=!1){let c=jc(r),a=!1;if(n&&Math.random()<Ig){const o=kn.filter(l=>l.pattern==="cross");o.length&&(c=Re(o),n=!1,a=!0,Fr=c.pattern)}qc(i,t,{spherical:c.spherical}),Ti.push({time:ji,position:i,profile:c,hue:t,clickDroop:e,clickCurly:n,forceShowcase:s,forceStraight:a})}function tv(i){const t=Re(Q0),e=Math.random()<Cg,n=Math.random()<Pg,r=Ir,s=Ir,c=!Ir&&Math.random()<Im;if(Ir=!1,c){const a=jc(!0),o=Rt(Dm),l=Rt(Um),h=Rt(Bm),u=(Re(Xc)+it(-Ho,Ho)+1)%1,p=new b(it(Dr[0],Dr[1]),l/o*h,it(Dr[0],Dr[1])),m=new qS(i,{velocity:p,life:o,targetY:i.y+l,profile:a,hue:t,rocketHue:u,size:Nm*Rt(Om)*Fm,trailSamples:ie(Go[0],Go[1]),trailSizeScale:Rt(Hm),trailOpacity:Rt(Gm),trailBrightness:Rt(Vm),trailFadePower:km,clickDroop:e,clickCurly:!1,forceShowcase:s,forceStraight:!0});zr.push(m),Be.add(m.points),Be.add(m.trail)}else QS(i,t,e,n,r,s)}function ev(i){const t=JS(i.clientX,i.clientY),e=aa(t);tv(e);const n=document.querySelector("#hint");n&&n.classList.add("hidden")}function nv(){hn=window.innerWidth,un=window.innerHeight,yn.left=-hn/2,yn.right=hn/2,yn.top=un/2,yn.bottom=-un/2,yn.updateProjectionMatrix(),Qi.setSize(hn,un)}ra.addEventListener("pointerdown",ev);ra.addEventListener("contextmenu",i=>i.preventDefault());window.addEventListener("resize",nv);function Kc(){const i=Math.min(pm.getDelta(),.033);if(ji+=i,Ti.length)for(let t=Ti.length-1;t>=0;t-=1){const e=Ti[t];e.time<=ji&&(Kr(e.position,e.profile,e.hue,e.allowMultiBlast??!0,e.clickDroop??!1,e.clickCurly??!1,e.forceStraight??!1,e.forceShowcase??!1),Ti.splice(t,1))}for(let t=Wi.length-1;t>=0;t-=1){const e=Wi[t];e.update(i)||(Be.remove(e.sprite),e.dispose(),Wi.splice(t,1))}for(let t=zr.length-1;t>=0;t-=1){const e=zr[t];e.update(i)||(Be.remove(e.points),Be.remove(e.trail),e.dispose(),zr.splice(t,1))}for(let t=Br.length-1;t>=0;t-=1){const e=Br[t];e.update(i)||(Be.remove(e.points),e.trailVisible&&e.trail&&Be.remove(e.trail),e.dispose(),Br.splice(t,1))}Qi.render(Be,yn),requestAnimationFrame(Kc)}Kc();
