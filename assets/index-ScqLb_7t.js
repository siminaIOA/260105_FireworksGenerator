(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xs="161",Vc=0,Qs=1,kc=2,$o=1,Wc=2,sn=3,Cn=0,we=1,an=2,Tn=0,Ei=1,yi=2,ta=3,ea=4,Xc=5,Bn=100,Yc=101,qc=102,na=103,ia=104,jc=200,Kc=201,Zc=202,$c=203,Ls=204,Ps=205,Jc=206,Qc=207,tl=208,el=209,nl=210,il=211,rl=212,sl=213,al=214,ol=0,cl=1,ll=2,Pr=3,hl=4,ul=5,dl=6,fl=7,Jo=0,pl=1,ml=2,An=0,_l=1,gl=2,vl=3,Sl=4,Ml=5,xl=6,Qo=300,Ai=301,Ri=302,Is=303,Ds=304,Br=306,Us=1e3,Xe=1001,Ns=1002,he=1003,ra=1004,Ii=1005,be=1006,Yr=1007,Hn=1008,Rn=1009,El=1010,yl=1011,Ys=1012,tc=1013,En=1014,on=1015,Vi=1016,ec=1017,nc=1018,Gn=1020,Tl=1021,Ye=1023,Al=1024,Rl=1025,Vn=1026,bi=1027,bl=1028,ic=1029,Cl=1030,rc=1031,sc=1033,qr=33776,jr=33777,Kr=33778,Zr=33779,sa=35840,aa=35841,oa=35842,ca=35843,ac=36196,la=37492,ha=37496,ua=37808,da=37809,fa=37810,pa=37811,ma=37812,_a=37813,ga=37814,va=37815,Sa=37816,Ma=37817,xa=37818,Ea=37819,ya=37820,Ta=37821,$r=36492,Aa=36494,Ra=36495,wl=36283,ba=36284,Ca=36285,wa=36286,oc=3e3,kn=3001,Ll=3200,Pl=3201,Il=0,Dl=1,Fe="",_e="srgb",fn="srgb-linear",qs="display-p3",zr="display-p3-linear",Ir="linear",ne="srgb",Dr="rec709",Ur="p3",Zn=7680,La=519,Ul=512,Nl=513,Ol=514,cc=515,Fl=516,Bl=517,zl=518,Hl=519,Os=35044,Pa="300 es",Fs=1035,cn=2e3,Nr=2001;class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,c=r.length;s<c;s++)r[s].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jr=Math.PI/180,Bs=180/Math.PI;function bn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function Gl(i,t){return(i%t+t)%t}function Qr(i,t,e){return(1-e)*i+e*t}function Ia(i){return(i&i-1)===0&&i!==0}function zs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,c=this.y-t.y;return this.x=s*n-c*r+t.x,this.y=s*r+c*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,r,s,c,a,o,l){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,c,a,o,l)}set(t,e,n,r,s,c,a,o,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=o,h[6]=n,h[7]=c,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,c=n[0],a=n[3],o=n[6],l=n[1],h=n[4],u=n[7],p=n[2],m=n[5],v=n[8],S=r[0],f=r[3],d=r[6],A=r[1],x=r[4],R=r[7],P=r[2],w=r[5],C=r[8];return s[0]=c*S+a*A+o*P,s[3]=c*f+a*x+o*w,s[6]=c*d+a*R+o*C,s[1]=l*S+h*A+u*P,s[4]=l*f+h*x+u*w,s[7]=l*d+h*R+u*C,s[2]=p*S+m*A+v*P,s[5]=p*f+m*x+v*w,s[8]=p*d+m*R+v*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],c=t[4],a=t[5],o=t[6],l=t[7],h=t[8];return e*c*h-e*a*l-n*s*h+n*a*o+r*s*l-r*c*o}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],c=t[4],a=t[5],o=t[6],l=t[7],h=t[8],u=h*c-a*l,p=a*o-h*s,m=l*s-c*o,v=e*u+n*p+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return t[0]=u*S,t[1]=(r*l-h*n)*S,t[2]=(a*n-r*c)*S,t[3]=p*S,t[4]=(h*e-r*o)*S,t[5]=(r*s-a*e)*S,t[6]=m*S,t[7]=(n*o-l*e)*S,t[8]=(c*e-n*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,c,a){const o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*c+l*a)+c+t,-r*l,r*o,-r*(-l*c+o*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ts.makeScale(t,e)),this}rotate(t){return this.premultiply(ts.makeRotation(-t)),this}translate(t,e){return this.premultiply(ts.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ts=new zt;function lc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vl(){const i=Or("canvas");return i.style.display="block",i}const Da={};function Wn(i){i in Da||(Da[i]=!0,console.warn(i))}const Ua=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Na=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),tr={[fn]:{transfer:Ir,primaries:Dr,toReference:i=>i,fromReference:i=>i},[_e]:{transfer:ne,primaries:Dr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[zr]:{transfer:Ir,primaries:Ur,toReference:i=>i.applyMatrix3(Na),fromReference:i=>i.applyMatrix3(Ua)},[qs]:{transfer:ne,primaries:Ur,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Na),fromReference:i=>i.applyMatrix3(Ua).convertLinearToSRGB()}},kl=new Set([fn,zr]),$t={enabled:!0,_workingColorSpace:fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!kl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=tr[t].toReference,r=tr[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return tr[i].primaries},getTransfer:function(i){return i===Fe?Ir:tr[i].transfer}};function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $n;class hc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$n===void 0&&($n=Or("canvas")),$n.width=t.width,$n.height=t.height;const n=$n.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$n}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Or("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let c=0;c<s.length;c++)s[c]=Ti(s[c]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wl=0;class uc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=bn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let c=0,a=r.length;c<a;c++)r[c].isDataTexture?s.push(ns(r[c].image)):s.push(ns(r[c]))}else s=ns(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ns(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xl=0;class Ae extends wi{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=Xe,r=Xe,s=be,c=Hn,a=Ye,o=Rn,l=Ae.DEFAULT_ANISOTROPY,h=Fe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=bn(),this.name="",this.source=new uc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=c,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Wn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===kn?_e:Fe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Us:t.x=t.x-Math.floor(t.x);break;case Xe:t.x=t.x<0?0:1;break;case Ns:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Us:t.y=t.y-Math.floor(t.y);break;case Xe:t.y=t.y<0?0:1;break;case Ns:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_e?kn:oc}set encoding(t){Wn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===kn?_e:Fe}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=Qo;Ae.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,r=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,c=t.elements;return this.x=c[0]*e+c[4]*n+c[8]*r+c[12]*s,this.y=c[1]*e+c[5]*n+c[9]*r+c[13]*s,this.z=c[2]*e+c[6]*n+c[10]*r+c[14]*s,this.w=c[3]*e+c[7]*n+c[11]*r+c[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const o=t.elements,l=o[0],h=o[4],u=o[8],p=o[1],m=o[5],v=o[9],S=o[2],f=o[6],d=o[10];if(Math.abs(h-p)<.01&&Math.abs(u-S)<.01&&Math.abs(v-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+S)<.1&&Math.abs(v+f)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,R=(m+1)/2,P=(d+1)/2,w=(h+p)/4,C=(u+S)/4,k=(v+f)/4;return x>R&&x>P?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=w/n,s=C/n):R>P?R<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),n=w/r,s=k/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=C/s,r=k/s),this.set(n,r,s,e),this}let A=Math.sqrt((f-v)*(f-v)+(u-S)*(u-S)+(p-h)*(p-h));return Math.abs(A)<.001&&(A=1),this.x=(f-v)/A,this.y=(u-S)/A,this.z=(p-h)/A,this.w=Math.acos((l+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yl extends wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(Wn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===kn?_e:Fe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:be,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ae(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new uc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends Yl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class dc extends Ae{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=he,this.minFilter=he,this.wrapR=Xe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ql extends Ae{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=he,this.minFilter=he,this.wrapR=Xe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,c,a){let o=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3];const p=s[c+0],m=s[c+1],v=s[c+2],S=s[c+3];if(a===0){t[e+0]=o,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=v,t[e+3]=S;return}if(u!==S||o!==p||l!==m||h!==v){let f=1-a;const d=o*p+l*m+h*v+u*S,A=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const P=Math.sqrt(x),w=Math.atan2(P,d*A);f=Math.sin(f*w)/P,a=Math.sin(a*w)/P}const R=a*A;if(o=o*f+p*R,l=l*f+m*R,h=h*f+v*R,u=u*f+S*R,f===1-a){const P=1/Math.sqrt(o*o+l*l+h*h+u*u);o*=P,l*=P,h*=P,u*=P}}t[e]=o,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,c){const a=n[r],o=n[r+1],l=n[r+2],h=n[r+3],u=s[c],p=s[c+1],m=s[c+2],v=s[c+3];return t[e]=a*v+h*u+o*m-l*p,t[e+1]=o*v+h*p+l*u-a*m,t[e+2]=l*v+h*m+a*p-o*u,t[e+3]=h*v-a*u-o*p-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,c=t._order,a=Math.cos,o=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),p=o(n/2),m=o(r/2),v=o(s/2);switch(c){case"XYZ":this._x=p*h*u+l*m*v,this._y=l*m*u-p*h*v,this._z=l*h*v+p*m*u,this._w=l*h*u-p*m*v;break;case"YXZ":this._x=p*h*u+l*m*v,this._y=l*m*u-p*h*v,this._z=l*h*v-p*m*u,this._w=l*h*u+p*m*v;break;case"ZXY":this._x=p*h*u-l*m*v,this._y=l*m*u+p*h*v,this._z=l*h*v+p*m*u,this._w=l*h*u-p*m*v;break;case"ZYX":this._x=p*h*u-l*m*v,this._y=l*m*u+p*h*v,this._z=l*h*v-p*m*u,this._w=l*h*u+p*m*v;break;case"YZX":this._x=p*h*u+l*m*v,this._y=l*m*u+p*h*v,this._z=l*h*v-p*m*u,this._w=l*h*u-p*m*v;break;case"XZY":this._x=p*h*u-l*m*v,this._y=l*m*u-p*h*v,this._z=l*h*v+p*m*u,this._w=l*h*u+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],c=e[1],a=e[5],o=e[9],l=e[2],h=e[6],u=e[10],p=n+a+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-o)*m,this._y=(s-l)*m,this._z=(c-r)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-o)/m,this._x=.25*m,this._y=(r+c)/m,this._z=(s+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(r+c)/m,this._y=.25*m,this._z=(o+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(c-r)/m,this._x=(s+l)/m,this._y=(o+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,c=t._w,a=e._x,o=e._y,l=e._z,h=e._w;return this._x=n*h+c*a+r*l-s*o,this._y=r*h+c*o+s*a-n*l,this._z=s*h+c*l+n*o-r*a,this._w=c*h-n*a-r*o-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,c=this._w;let a=c*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=c,this._x=n,this._y=r,this._z=s,this;const o=1-a*a;if(o<=Number.EPSILON){const m=1-e;return this._w=m*c+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const l=Math.sqrt(o),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=c*u+this._w*p,this._x=n*u+this._x*p,this._y=r*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,n=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,c=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*c,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*c,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*c,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,c=t.y,a=t.z,o=t.w,l=2*(c*r-a*n),h=2*(a*e-s*r),u=2*(s*n-c*e);return this.x=e+o*l+c*u-a*h,this.y=n+o*h+a*l-s*u,this.z=r+o*u+s*h-c*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,c=e.x,a=e.y,o=e.z;return this.x=r*o-s*a,this.y=s*c-n*o,this.z=n*a-r*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return is.copy(this).projectOnVector(t),this.sub(is)}reflect(t){return this.sub(is.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const is=new b,Oa=new Li;class Wi{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let c=0,a=s.count;c<a;c++)t.isMesh===!0?t.getVertexPosition(c,Ge):Ge.fromBufferAttribute(s,c),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)),er.applyMatrix4(t.matrixWorld),this.union(er)}const r=t.children;for(let s=0,c=r.length;s<c;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Di),nr.subVectors(this.max,Di),Jn.subVectors(t.a,Di),Qn.subVectors(t.b,Di),ti.subVectors(t.c,Di),pn.subVectors(Qn,Jn),mn.subVectors(ti,Qn),Pn.subVectors(Jn,ti);let e=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-Pn.z,Pn.y,pn.z,0,-pn.x,mn.z,0,-mn.x,Pn.z,0,-Pn.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-Pn.y,Pn.x,0];return!rs(e,Jn,Qn,ti,nr)||(e=[1,0,0,0,1,0,0,0,1],!rs(e,Jn,Qn,ti,nr))?!1:(ir.crossVectors(pn,mn),e=[ir.x,ir.y,ir.z],rs(e,Jn,Qn,ti,nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qe=[new b,new b,new b,new b,new b,new b,new b,new b],Ge=new b,er=new Wi,Jn=new b,Qn=new b,ti=new b,pn=new b,mn=new b,Pn=new b,Di=new b,nr=new b,ir=new b,In=new b;function rs(i,t,e,n,r){for(let s=0,c=i.length-3;s<=c;s+=3){In.fromArray(i,s);const a=r.x*Math.abs(In.x)+r.y*Math.abs(In.y)+r.z*Math.abs(In.z),o=t.dot(In),l=e.dot(In),h=n.dot(In);if(Math.max(-Math.max(o,l,h),Math.min(o,l,h))>a)return!1}return!0}const jl=new Wi,Ui=new b,ss=new b;class Xi{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jl.setFromPoints(t).getCenter(n);let r=0;for(let s=0,c=t.length;s<c;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ui.subVectors(t,this.center);const e=Ui.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ui,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ss.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ui.copy(t.center).add(ss)),this.expandByPoint(Ui.copy(t.center).sub(ss))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new b,as=new b,rr=new b,_n=new b,os=new b,sr=new b,cs=new b;class js{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tn.copy(this.origin).addScaledVector(this.direction,e),tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){as.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),_n.copy(this.origin).sub(as);const s=t.distanceTo(e)*.5,c=-this.direction.dot(rr),a=_n.dot(this.direction),o=-_n.dot(rr),l=_n.lengthSq(),h=Math.abs(1-c*c);let u,p,m,v;if(h>0)if(u=c*o-a,p=c*a-o,v=s*h,u>=0)if(p>=-v)if(p<=v){const S=1/h;u*=S,p*=S,m=u*(u+c*p+2*a)+p*(c*u+p+2*o)+l}else p=s,u=Math.max(0,-(c*p+a)),m=-u*u+p*(p+2*o)+l;else p=-s,u=Math.max(0,-(c*p+a)),m=-u*u+p*(p+2*o)+l;else p<=-v?(u=Math.max(0,-(-c*s+a)),p=u>0?-s:Math.min(Math.max(-s,-o),s),m=-u*u+p*(p+2*o)+l):p<=v?(u=0,p=Math.min(Math.max(-s,-o),s),m=p*(p+2*o)+l):(u=Math.max(0,-(c*s+a)),p=u>0?s:Math.min(Math.max(-s,-o),s),m=-u*u+p*(p+2*o)+l);else p=c>0?-s:s,u=Math.max(0,-(c*p+a)),m=-u*u+p*(p+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(as).addScaledVector(rr,p),m}intersectSphere(t,e){tn.subVectors(t.center,this.origin);const n=tn.dot(this.direction),r=tn.dot(tn)-n*n,s=t.radius*t.radius;if(r>s)return null;const c=Math.sqrt(s-r),a=n-c,o=n+c;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,c,a,o;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,r=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,r=(t.min.x-p.x)*l),h>=0?(s=(t.min.y-p.y)*h,c=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,c=(t.min.y-p.y)*h),n>c||s>r||((s>n||isNaN(n))&&(n=s),(c<r||isNaN(r))&&(r=c),u>=0?(a=(t.min.z-p.z)*u,o=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,o=(t.min.z-p.z)*u),n>o||a>r)||((a>n||n!==n)&&(n=a),(o<r||r!==r)&&(r=o),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,tn)!==null}intersectTriangle(t,e,n,r,s){os.subVectors(e,t),sr.subVectors(n,t),cs.crossVectors(os,sr);let c=this.direction.dot(cs),a;if(c>0){if(r)return null;a=1}else if(c<0)a=-1,c=-c;else return null;_n.subVectors(this.origin,t);const o=a*this.direction.dot(sr.crossVectors(_n,sr));if(o<0)return null;const l=a*this.direction.dot(os.cross(_n));if(l<0||o+l>c)return null;const h=-a*_n.dot(cs);return h<0?null:this.at(h/c,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,r,s,c,a,o,l,h,u,p,m,v,S,f){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,c,a,o,l,h,u,p,m,v,S,f)}set(t,e,n,r,s,c,a,o,l,h,u,p,m,v,S,f){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=c,d[9]=a,d[13]=o,d[2]=l,d[6]=h,d[10]=u,d[14]=p,d[3]=m,d[7]=v,d[11]=S,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/ei.setFromMatrixColumn(t,0).length(),s=1/ei.setFromMatrixColumn(t,1).length(),c=1/ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*c,e[9]=n[9]*c,e[10]=n[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,c=Math.cos(n),a=Math.sin(n),o=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const p=c*h,m=c*u,v=a*h,S=a*u;e[0]=o*h,e[4]=-o*u,e[8]=l,e[1]=m+v*l,e[5]=p-S*l,e[9]=-a*o,e[2]=S-p*l,e[6]=v+m*l,e[10]=c*o}else if(t.order==="YXZ"){const p=o*h,m=o*u,v=l*h,S=l*u;e[0]=p+S*a,e[4]=v*a-m,e[8]=c*l,e[1]=c*u,e[5]=c*h,e[9]=-a,e[2]=m*a-v,e[6]=S+p*a,e[10]=c*o}else if(t.order==="ZXY"){const p=o*h,m=o*u,v=l*h,S=l*u;e[0]=p-S*a,e[4]=-c*u,e[8]=v+m*a,e[1]=m+v*a,e[5]=c*h,e[9]=S-p*a,e[2]=-c*l,e[6]=a,e[10]=c*o}else if(t.order==="ZYX"){const p=c*h,m=c*u,v=a*h,S=a*u;e[0]=o*h,e[4]=v*l-m,e[8]=p*l+S,e[1]=o*u,e[5]=S*l+p,e[9]=m*l-v,e[2]=-l,e[6]=a*o,e[10]=c*o}else if(t.order==="YZX"){const p=c*o,m=c*l,v=a*o,S=a*l;e[0]=o*h,e[4]=S-p*u,e[8]=v*u+m,e[1]=u,e[5]=c*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+v,e[10]=p-S*u}else if(t.order==="XZY"){const p=c*o,m=c*l,v=a*o,S=a*l;e[0]=o*h,e[4]=-u,e[8]=l*h,e[1]=p*u+S,e[5]=c*h,e[9]=m*u-v,e[2]=v*u-m,e[6]=a*h,e[10]=S*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kl,t,Zl)}lookAt(t,e,n){const r=this.elements;return Pe.subVectors(t,e),Pe.lengthSq()===0&&(Pe.z=1),Pe.normalize(),gn.crossVectors(n,Pe),gn.lengthSq()===0&&(Math.abs(n.z)===1?Pe.x+=1e-4:Pe.z+=1e-4,Pe.normalize(),gn.crossVectors(n,Pe)),gn.normalize(),ar.crossVectors(Pe,gn),r[0]=gn.x,r[4]=ar.x,r[8]=Pe.x,r[1]=gn.y,r[5]=ar.y,r[9]=Pe.y,r[2]=gn.z,r[6]=ar.z,r[10]=Pe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,c=n[0],a=n[4],o=n[8],l=n[12],h=n[1],u=n[5],p=n[9],m=n[13],v=n[2],S=n[6],f=n[10],d=n[14],A=n[3],x=n[7],R=n[11],P=n[15],w=r[0],C=r[4],k=r[8],W=r[12],_=r[1],y=r[5],V=r[9],q=r[13],L=r[2],B=r[6],N=r[10],G=r[14],X=r[3],Y=r[7],j=r[11],tt=r[15];return s[0]=c*w+a*_+o*L+l*X,s[4]=c*C+a*y+o*B+l*Y,s[8]=c*k+a*V+o*N+l*j,s[12]=c*W+a*q+o*G+l*tt,s[1]=h*w+u*_+p*L+m*X,s[5]=h*C+u*y+p*B+m*Y,s[9]=h*k+u*V+p*N+m*j,s[13]=h*W+u*q+p*G+m*tt,s[2]=v*w+S*_+f*L+d*X,s[6]=v*C+S*y+f*B+d*Y,s[10]=v*k+S*V+f*N+d*j,s[14]=v*W+S*q+f*G+d*tt,s[3]=A*w+x*_+R*L+P*X,s[7]=A*C+x*y+R*B+P*Y,s[11]=A*k+x*V+R*N+P*j,s[15]=A*W+x*q+R*G+P*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],c=t[1],a=t[5],o=t[9],l=t[13],h=t[2],u=t[6],p=t[10],m=t[14],v=t[3],S=t[7],f=t[11],d=t[15];return v*(+s*o*u-r*l*u-s*a*p+n*l*p+r*a*m-n*o*m)+S*(+e*o*m-e*l*p+s*c*p-r*c*m+r*l*h-s*o*h)+f*(+e*l*u-e*a*m-s*c*u+n*c*m+s*a*h-n*l*h)+d*(-r*a*h-e*o*u+e*a*p+r*c*u-n*c*p+n*o*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],c=t[4],a=t[5],o=t[6],l=t[7],h=t[8],u=t[9],p=t[10],m=t[11],v=t[12],S=t[13],f=t[14],d=t[15],A=u*f*l-S*p*l+S*o*m-a*f*m-u*o*d+a*p*d,x=v*p*l-h*f*l-v*o*m+c*f*m+h*o*d-c*p*d,R=h*S*l-v*u*l+v*a*m-c*S*m-h*a*d+c*u*d,P=v*u*o-h*S*o-v*a*p+c*S*p+h*a*f-c*u*f,w=e*A+n*x+r*R+s*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=A*C,t[1]=(S*p*s-u*f*s-S*r*m+n*f*m+u*r*d-n*p*d)*C,t[2]=(a*f*s-S*o*s+S*r*l-n*f*l-a*r*d+n*o*d)*C,t[3]=(u*o*s-a*p*s-u*r*l+n*p*l+a*r*m-n*o*m)*C,t[4]=x*C,t[5]=(h*f*s-v*p*s+v*r*m-e*f*m-h*r*d+e*p*d)*C,t[6]=(v*o*s-c*f*s-v*r*l+e*f*l+c*r*d-e*o*d)*C,t[7]=(c*p*s-h*o*s+h*r*l-e*p*l-c*r*m+e*o*m)*C,t[8]=R*C,t[9]=(v*u*s-h*S*s-v*n*m+e*S*m+h*n*d-e*u*d)*C,t[10]=(c*S*s-v*a*s+v*n*l-e*S*l-c*n*d+e*a*d)*C,t[11]=(h*a*s-c*u*s-h*n*l+e*u*l+c*n*m-e*a*m)*C,t[12]=P*C,t[13]=(h*S*r-v*u*r+v*n*p-e*S*p-h*n*f+e*u*f)*C,t[14]=(v*a*r-c*S*r-v*n*o+e*S*o+c*n*f-e*a*f)*C,t[15]=(c*u*r-h*a*r+h*n*o-e*u*o-c*n*p+e*a*p)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,c=t.x,a=t.y,o=t.z,l=s*c,h=s*a;return this.set(l*c+n,l*a-r*o,l*o+r*a,0,l*a+r*o,h*a+n,h*o-r*c,0,l*o-r*a,h*o+r*c,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,c){return this.set(1,n,s,0,t,1,c,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,c=e._y,a=e._z,o=e._w,l=s+s,h=c+c,u=a+a,p=s*l,m=s*h,v=s*u,S=c*h,f=c*u,d=a*u,A=o*l,x=o*h,R=o*u,P=n.x,w=n.y,C=n.z;return r[0]=(1-(S+d))*P,r[1]=(m+R)*P,r[2]=(v-x)*P,r[3]=0,r[4]=(m-R)*w,r[5]=(1-(p+d))*w,r[6]=(f+A)*w,r[7]=0,r[8]=(v+x)*C,r[9]=(f-A)*C,r[10]=(1-(p+S))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=ei.set(r[0],r[1],r[2]).length();const c=ei.set(r[4],r[5],r[6]).length(),a=ei.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ve.copy(this);const l=1/s,h=1/c,u=1/a;return Ve.elements[0]*=l,Ve.elements[1]*=l,Ve.elements[2]*=l,Ve.elements[4]*=h,Ve.elements[5]*=h,Ve.elements[6]*=h,Ve.elements[8]*=u,Ve.elements[9]*=u,Ve.elements[10]*=u,e.setFromRotationMatrix(Ve),n.x=s,n.y=c,n.z=a,this}makePerspective(t,e,n,r,s,c,a=cn){const o=this.elements,l=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),p=(n+r)/(n-r);let m,v;if(a===cn)m=-(c+s)/(c-s),v=-2*c*s/(c-s);else if(a===Nr)m=-c/(c-s),v=-c*s/(c-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=h,o[9]=p,o[13]=0,o[2]=0,o[6]=0,o[10]=m,o[14]=v,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,r,s,c,a=cn){const o=this.elements,l=1/(e-t),h=1/(n-r),u=1/(c-s),p=(e+t)*l,m=(n+r)*h;let v,S;if(a===cn)v=(c+s)*u,S=-2*u;else if(a===Nr)v=s*u,S=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-p,o[1]=0,o[5]=2*h,o[9]=0,o[13]=-m,o[2]=0,o[6]=0,o[10]=S,o[14]=-v,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ei=new b,Ve=new ce,Kl=new b(0,0,0),Zl=new b(1,1,1),gn=new b,ar=new b,Pe=new b,Fa=new ce,Ba=new Li;class Yi{constructor(t=0,e=0,n=0,r=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],c=r[4],a=r[8],o=r[1],l=r[5],h=r[9],u=r[2],p=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-c,l)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-c,l));break;case"YZX":this._z=Math.asin(Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ba.setFromEuler(this),this.setFromQuaternion(Ba,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class fc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $l=0;const za=new b,ni=new Li,en=new ce,or=new b,Ni=new b,Jl=new b,Ql=new Li,Ha=new b(1,0,0),Ga=new b(0,1,0),Va=new b(0,0,1),th={type:"added"},eh={type:"removed"};class xe extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new b,e=new Yi,n=new Li,r=new b(1,1,1);function s(){n.setFromEuler(e,!1)}function c(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ce},normalMatrix:{value:new zt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ni.setFromAxisAngle(t,e),this.quaternion.multiply(ni),this}rotateOnWorldAxis(t,e){return ni.setFromAxisAngle(t,e),this.quaternion.premultiply(ni),this}rotateX(t){return this.rotateOnAxis(Ha,t)}rotateY(t){return this.rotateOnAxis(Ga,t)}rotateZ(t){return this.rotateOnAxis(Va,t)}translateOnAxis(t,e){return za.copy(t).applyQuaternion(this.quaternion),this.position.add(za.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ha,t)}translateY(t){return this.translateOnAxis(Ga,t)}translateZ(t){return this.translateOnAxis(Va,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?or.copy(t):or.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Ni,or,this.up):en.lookAt(or,Ni,this.up),this.quaternion.setFromRotationMatrix(en),r&&(en.extractRotation(r.matrixWorld),ni.setFromRotationMatrix(en),this.quaternion.premultiply(ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(th)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(eh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,c=r.length;s<c;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,t,Jl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,Ql,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,c=r.length;s<c;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let l=0,h=o.length;l<h;l++){const u=o[l];s(t.shapes,u)}else s(t.shapes,o)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];r.animations.push(s(t.animations,o))}}if(e){const a=c(t.geometries),o=c(t.materials),l=c(t.textures),h=c(t.images),u=c(t.shapes),p=c(t.skeletons),m=c(t.animations),v=c(t.nodes);a.length>0&&(n.geometries=a),o.length>0&&(n.materials=o),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function c(a){const o=[];for(const l in a){const h=a[l];delete h.metadata,o.push(h)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}xe.DEFAULT_UP=new b(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ke=new b,nn=new b,ls=new b,rn=new b,ii=new b,ri=new b,ka=new b,hs=new b,us=new b,ds=new b;class qe{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ke.subVectors(t,e),r.cross(ke);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ke.subVectors(r,e),nn.subVectors(n,e),ls.subVectors(t,e);const c=ke.dot(ke),a=ke.dot(nn),o=ke.dot(ls),l=nn.dot(nn),h=nn.dot(ls),u=c*l-a*a;if(u===0)return s.set(0,0,0),null;const p=1/u,m=(l*o-a*h)*p,v=(c*h-a*o)*p;return s.set(1-m-v,v,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(t,e,n,r,s,c,a,o){return this.getBarycoord(t,e,n,r,rn)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(s,rn.x),o.addScaledVector(c,rn.y),o.addScaledVector(a,rn.z),o)}static isFrontFacing(t,e,n,r){return ke.subVectors(n,e),nn.subVectors(t,e),ke.cross(nn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ke.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),ke.cross(nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return qe.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let c,a;ii.subVectors(r,n),ri.subVectors(s,n),hs.subVectors(t,n);const o=ii.dot(hs),l=ri.dot(hs);if(o<=0&&l<=0)return e.copy(n);us.subVectors(t,r);const h=ii.dot(us),u=ri.dot(us);if(h>=0&&u<=h)return e.copy(r);const p=o*u-h*l;if(p<=0&&o>=0&&h<=0)return c=o/(o-h),e.copy(n).addScaledVector(ii,c);ds.subVectors(t,s);const m=ii.dot(ds),v=ri.dot(ds);if(v>=0&&m<=v)return e.copy(s);const S=m*l-o*v;if(S<=0&&l>=0&&v<=0)return a=l/(l-v),e.copy(n).addScaledVector(ri,a);const f=h*v-m*u;if(f<=0&&u-h>=0&&m-v>=0)return ka.subVectors(s,r),a=(u-h)/(u-h+(m-v)),e.copy(r).addScaledVector(ka,a);const d=1/(f+S+p);return c=S*d,a=p*d,e.copy(n).addScaledVector(ii,c).addScaledVector(ri,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function fs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=$t.workingColorSpace){if(t=Gl(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,c=2*n-s;this.r=fs(c,s,t+1/3),this.g=fs(c,s,t),this.b=fs(c,s,t-1/3)}return $t.toWorkingColorSpace(this,r),this}setStyle(t,e=_e){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const c=r[1],a=r[2];switch(c){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],c=s.length;if(c===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){const n=pc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return $t.fromWorkingColorSpace(Me.copy(this),t),Math.round(Ce(Me.r*255,0,255))*65536+Math.round(Ce(Me.g*255,0,255))*256+Math.round(Ce(Me.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Me.copy(this),e);const n=Me.r,r=Me.g,s=Me.b,c=Math.max(n,r,s),a=Math.min(n,r,s);let o,l;const h=(a+c)/2;if(a===c)o=0,l=0;else{const u=c-a;switch(l=h<=.5?u/(c+a):u/(2-c-a),c){case n:o=(r-s)/u+(r<s?6:0);break;case r:o=(s-n)/u+2;break;case s:o=(n-r)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=_e){$t.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,r=Me.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(vn),this.setHSL(vn.h+t,vn.s+e,vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vn),t.getHSL(cr);const n=Qr(vn.h,cr.h,e),r=Qr(vn.s,cr.s,e),s=Qr(vn.l,cr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new kt;kt.NAMES=pc;let nh=0;class Yn extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=Ei,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ls,this.blendDst=Ps,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=La,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ls&&(n.blendSrc=this.blendSrc),this.blendDst!==Ps&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==La&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const c=[];for(const a in s){const o=s[a];delete o.metadata,c.push(o)}return c}if(e){const s=r(t.textures),c=r(t.images);s.length>0&&(n.textures=s),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class mc extends Yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const oe=new b,lr=new Gt;class Te{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Os,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Wn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lr.fromBufferAttribute(this,e),lr.applyMatrix3(t),this.setXY(e,lr.x,lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$e(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$e(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$e(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$e(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$e(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Os&&(t.usage=this.usage),t}}class _c extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class gc extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class dn extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ih=0;const Ne=new ce,ps=new xe,si=new b,Ie=new Wi,Oi=new Wi,fe=new b;class ze extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lc(t)?gc:_c)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ne.makeRotationFromQuaternion(t),this.applyMatrix4(Ne),this}rotateX(t){return Ne.makeRotationX(t),this.applyMatrix4(Ne),this}rotateY(t){return Ne.makeRotationY(t),this.applyMatrix4(Ne),this}rotateZ(t){return Ne.makeRotationZ(t),this.applyMatrix4(Ne),this}translate(t,e,n){return Ne.makeTranslation(t,e,n),this.applyMatrix4(Ne),this}scale(t,e,n){return Ne.makeScale(t,e,n),this.applyMatrix4(Ne),this}lookAt(t){return ps.lookAt(t),ps.updateMatrix(),this.applyMatrix4(ps.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ie.setFromBufferAttribute(s),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new b,1/0);return}if(t){const n=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let s=0,c=e.length;s<c;s++){const a=e[s];Oi.setFromBufferAttribute(a),this.morphTargetsRelative?(fe.addVectors(Ie.min,Oi.min),Ie.expandByPoint(fe),fe.addVectors(Ie.max,Oi.max),Ie.expandByPoint(fe)):(Ie.expandByPoint(Oi.min),Ie.expandByPoint(Oi.max))}Ie.getCenter(n);let r=0;for(let s=0,c=t.count;s<c;s++)fe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(fe));if(e)for(let s=0,c=e.length;s<c;s++){const a=e[s],o=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)fe.fromBufferAttribute(a,l),o&&(si.fromBufferAttribute(t,l),fe.add(si)),r=Math.max(r,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,c=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*a),4));const o=this.getAttribute("tangent").array,l=[],h=[];for(let _=0;_<a;_++)l[_]=new b,h[_]=new b;const u=new b,p=new b,m=new b,v=new Gt,S=new Gt,f=new Gt,d=new b,A=new b;function x(_,y,V){u.fromArray(r,_*3),p.fromArray(r,y*3),m.fromArray(r,V*3),v.fromArray(c,_*2),S.fromArray(c,y*2),f.fromArray(c,V*2),p.sub(u),m.sub(u),S.sub(v),f.sub(v);const q=1/(S.x*f.y-f.x*S.y);isFinite(q)&&(d.copy(p).multiplyScalar(f.y).addScaledVector(m,-S.y).multiplyScalar(q),A.copy(m).multiplyScalar(S.x).addScaledVector(p,-f.x).multiplyScalar(q),l[_].add(d),l[y].add(d),l[V].add(d),h[_].add(A),h[y].add(A),h[V].add(A))}let R=this.groups;R.length===0&&(R=[{start:0,count:n.length}]);for(let _=0,y=R.length;_<y;++_){const V=R[_],q=V.start,L=V.count;for(let B=q,N=q+L;B<N;B+=3)x(n[B+0],n[B+1],n[B+2])}const P=new b,w=new b,C=new b,k=new b;function W(_){C.fromArray(s,_*3),k.copy(C);const y=l[_];P.copy(y),P.sub(C.multiplyScalar(C.dot(y))).normalize(),w.crossVectors(k,y);const q=w.dot(h[_])<0?-1:1;o[_*4]=P.x,o[_*4+1]=P.y,o[_*4+2]=P.z,o[_*4+3]=q}for(let _=0,y=R.length;_<y;++_){const V=R[_],q=V.start,L=V.count;for(let B=q,N=q+L;B<N;B+=3)W(n[B+0]),W(n[B+1]),W(n[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new b,s=new b,c=new b,a=new b,o=new b,l=new b,h=new b,u=new b;if(t)for(let p=0,m=t.count;p<m;p+=3){const v=t.getX(p+0),S=t.getX(p+1),f=t.getX(p+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,S),c.fromBufferAttribute(e,f),h.subVectors(c,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,v),o.fromBufferAttribute(n,S),l.fromBufferAttribute(n,f),a.add(h),o.add(h),l.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let p=0,m=e.count;p<m;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),c.fromBufferAttribute(e,p+2),h.subVectors(c,s),u.subVectors(r,s),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(a,o){const l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(o.length*h);let m=0,v=0;for(let S=0,f=o.length;S<f;S++){a.isInterleavedBufferAttribute?m=o[S]*a.data.stride+a.offset:m=o[S]*h;for(let d=0;d<h;d++)p[v++]=l[m++]}return new Te(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,r=this.attributes;for(const a in r){const o=r[a],l=t(o,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const o=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const p=l[h],m=t(p,n);o.push(m)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let a=0,o=c.length;a<o;a++){const l=c[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(t[l]=o[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const o in n){const l=n[o];t.data.attributes[o]=l.toJSON(t.data)}const r={};let s=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],h=[];for(let u=0,p=l.length;u<p;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(r[o]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let l=0,h=c.length;l<h;l++){const u=c[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wa=new ce,Dn=new js,hr=new Xi,Xa=new b,ai=new b,oi=new b,ci=new b,ms=new b,ur=new b,dr=new Gt,fr=new Gt,pr=new Gt,Ya=new b,qa=new b,ja=new b,mr=new b,_r=new b;class ln extends xe{constructor(t=new ze,e=new mc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=r.length;s<c;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,c=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){ur.set(0,0,0);for(let o=0,l=s.length;o<l;o++){const h=a[o],u=s[o];h!==0&&(ms.fromBufferAttribute(u,t),c?ur.addScaledVector(ms,h):ur.addScaledVector(ms.sub(e),h))}e.add(ur)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),Dn.copy(t.ray).recast(t.near),!(hr.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(hr,Xa)===null||Dn.origin.distanceToSquared(Xa)>(t.far-t.near)**2))&&(Wa.copy(s).invert(),Dn.copy(t.ray).applyMatrix4(Wa),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Dn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,c=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(c))for(let v=0,S=p.length;v<S;v++){const f=p[v],d=c[f.materialIndex],A=Math.max(f.start,m.start),x=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let R=A,P=x;R<P;R+=3){const w=a.getX(R),C=a.getX(R+1),k=a.getX(R+2);r=gr(this,d,t,n,l,h,u,w,C,k),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let f=v,d=S;f<d;f+=3){const A=a.getX(f),x=a.getX(f+1),R=a.getX(f+2);r=gr(this,c,t,n,l,h,u,A,x,R),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(o!==void 0)if(Array.isArray(c))for(let v=0,S=p.length;v<S;v++){const f=p[v],d=c[f.materialIndex],A=Math.max(f.start,m.start),x=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let R=A,P=x;R<P;R+=3){const w=R,C=R+1,k=R+2;r=gr(this,d,t,n,l,h,u,w,C,k),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let f=v,d=S;f<d;f+=3){const A=f,x=f+1,R=f+2;r=gr(this,c,t,n,l,h,u,A,x,R),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function rh(i,t,e,n,r,s,c,a){let o;if(t.side===we?o=n.intersectTriangle(c,s,r,!0,a):o=n.intersectTriangle(r,s,c,t.side===Cn,a),o===null)return null;_r.copy(a),_r.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(_r);return l<e.near||l>e.far?null:{distance:l,point:_r.clone(),object:i}}function gr(i,t,e,n,r,s,c,a,o,l){i.getVertexPosition(a,ai),i.getVertexPosition(o,oi),i.getVertexPosition(l,ci);const h=rh(i,t,e,n,ai,oi,ci,mr);if(h){r&&(dr.fromBufferAttribute(r,a),fr.fromBufferAttribute(r,o),pr.fromBufferAttribute(r,l),h.uv=qe.getInterpolation(mr,ai,oi,ci,dr,fr,pr,new Gt)),s&&(dr.fromBufferAttribute(s,a),fr.fromBufferAttribute(s,o),pr.fromBufferAttribute(s,l),h.uv1=qe.getInterpolation(mr,ai,oi,ci,dr,fr,pr,new Gt),h.uv2=h.uv1),c&&(Ya.fromBufferAttribute(c,a),qa.fromBufferAttribute(c,o),ja.fromBufferAttribute(c,l),h.normal=qe.getInterpolation(mr,ai,oi,ci,Ya,qa,ja,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:o,c:l,normal:new b,materialIndex:0};qe.getNormal(ai,oi,ci,u.normal),h.face=u}return h}class qi extends ze{constructor(t=1,e=1,n=1,r=1,s=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:c};const a=this;r=Math.floor(r),s=Math.floor(s),c=Math.floor(c);const o=[],l=[],h=[],u=[];let p=0,m=0;v("z","y","x",-1,-1,n,e,t,c,s,0),v("z","y","x",1,-1,n,e,-t,c,s,1),v("x","z","y",1,1,t,n,e,r,c,2),v("x","z","y",1,-1,t,n,-e,r,c,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(o),this.setAttribute("position",new dn(l,3)),this.setAttribute("normal",new dn(h,3)),this.setAttribute("uv",new dn(u,2));function v(S,f,d,A,x,R,P,w,C,k,W){const _=R/C,y=P/k,V=R/2,q=P/2,L=w/2,B=C+1,N=k+1;let G=0,X=0;const Y=new b;for(let j=0;j<N;j++){const tt=j*y-q;for(let rt=0;rt<B;rt++){const At=rt*_-V;Y[S]=At*A,Y[f]=tt*x,Y[d]=L,l.push(Y.x,Y.y,Y.z),Y[S]=0,Y[f]=0,Y[d]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(rt/C),u.push(1-j/k),G+=1}}for(let j=0;j<k;j++)for(let tt=0;tt<C;tt++){const rt=p+tt+B*j,At=p+tt+B*(j+1),H=p+(tt+1)+B*(j+1),$=p+(tt+1)+B*j;o.push(rt,At,$),o.push(At,H,$),X+=6}a.addGroup(m,X,W),m+=X,p+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ci(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ye(i){const t={};for(let e=0;e<i.length;e++){const n=Ci(i[e]);for(const r in n)t[r]=n[r]}return t}function sh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vc(i){return i.getRenderTarget()===null?i.outputColorSpace:$t.workingColorSpace}const ah={clone:Ci,merge:ye};var oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oh,this.fragmentShader=ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ci(t.uniforms),this.uniformsGroups=sh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?e.uniforms[r]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[r]={type:"m4",value:c.toArray()}:e.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Sc extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sn=new b,Ka=new Gt,Za=new Gt;class We extends Sc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z)}getViewSize(t,e){return this.getViewBounds(t,Ka,Za),e.subVectors(Za,Ka)}setViewOffset(t,e,n,r,s,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const o=c.fullWidth,l=c.fullHeight;s+=c.offsetX*r/o,e-=c.offsetY*n/l,r*=c.width/o,n*=c.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=-90,hi=1;class lh extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new We(li,hi,t,e);r.layers=this.layers,this.add(r);const s=new We(li,hi,t,e);s.layers=this.layers,this.add(s);const c=new We(li,hi,t,e);c.layers=this.layers,this.add(c);const a=new We(li,hi,t,e);a.layers=this.layers,this.add(a);const o=new We(li,hi,t,e);o.layers=this.layers,this.add(o);const l=new We(li,hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,c,a,o]=e;for(const l of e)this.remove(l);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,c,a,o,l,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,c),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,o),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,p,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Mc extends Ae{constructor(t,e,n,r,s,c,a,o,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ai,super(t,e,n,r,s,c,a,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hh extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(Wn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===kn?_e:Fe),this.texture=new Mc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:be}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qi(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:Tn});s.uniforms.tEquirect.value=e;const c=new ln(r,s),a=e.minFilter;return e.minFilter===Hn&&(e.minFilter=be),new lh(1,10,this).update(t,c),e.minFilter=a,c.geometry.dispose(),c.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,n,r);t.setRenderTarget(s)}}const _s=new b,uh=new b,dh=new zt;class On{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=_s.subVectors(n,e).cross(uh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_s),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||dh.getNormalMatrix(t),r=this.coplanarPoint(_s).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new Xi,vr=new b;class xc{constructor(t=new On,e=new On,n=new On,r=new On,s=new On,c=new On){this.planes=[t,e,n,r,s,c]}set(t,e,n,r,s,c){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(c),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn){const n=this.planes,r=t.elements,s=r[0],c=r[1],a=r[2],o=r[3],l=r[4],h=r[5],u=r[6],p=r[7],m=r[8],v=r[9],S=r[10],f=r[11],d=r[12],A=r[13],x=r[14],R=r[15];if(n[0].setComponents(o-s,p-l,f-m,R-d).normalize(),n[1].setComponents(o+s,p+l,f+m,R+d).normalize(),n[2].setComponents(o+c,p+h,f+v,R+A).normalize(),n[3].setComponents(o-c,p-h,f-v,R-A).normalize(),n[4].setComponents(o-a,p-u,f-S,R-x).normalize(),e===cn)n[5].setComponents(o+a,p+u,f+S,R+x).normalize();else if(e===Nr)n[5].setComponents(a,u,S,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(t){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(t.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(vr.x=r.normal.x>0?t.max.x:t.min.x,vr.y=r.normal.y>0?t.max.y:t.min.y,vr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ec(){let i=null,t=!1,e=null,n=null;function r(s,c){e(s,c),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function fh(i,t){const e=t.isWebGL2,n=new WeakMap;function r(l,h){const u=l.array,p=l.usage,m=u.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,u,p),l.onUploadCallback();let S;if(u instanceof Float32Array)S=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)S=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)S=i.SHORT;else if(u instanceof Uint32Array)S=i.UNSIGNED_INT;else if(u instanceof Int32Array)S=i.INT;else if(u instanceof Int8Array)S=i.BYTE;else if(u instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:v,type:S,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,h,u){const p=h.array,m=h._updateRange,v=h.updateRanges;if(i.bindBuffer(u,l),m.count===-1&&v.length===0&&i.bufferSubData(u,0,p),v.length!==0){for(let S=0,f=v.length;S<f;S++){const d=v[S];e?i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function c(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function o(l,h){if(l.isGLBufferAttribute){const p=n.get(l);(!p||p.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,r(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,l,h),u.version=l.version}}return{get:c,remove:a,update:o}}class Hr extends ze{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,c=e/2,a=Math.floor(n),o=Math.floor(r),l=a+1,h=o+1,u=t/a,p=e/o,m=[],v=[],S=[],f=[];for(let d=0;d<h;d++){const A=d*p-c;for(let x=0;x<l;x++){const R=x*u-s;v.push(R,-A,0),S.push(0,0,1),f.push(x/a),f.push(1-d/o)}}for(let d=0;d<o;d++)for(let A=0;A<a;A++){const x=A+l*d,R=A+l*(d+1),P=A+1+l*(d+1),w=A+1+l*d;m.push(x,R,w),m.push(R,P,w)}this.setIndex(m),this.setAttribute("position",new dn(v,3)),this.setAttribute("normal",new dn(S,3)),this.setAttribute("uv",new dn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.width,t.height,t.widthSegments,t.heightSegments)}}var ph=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mh=`#ifdef USE_ALPHAHASH
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
#endif`,_h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mh=`#ifdef USE_AOMAP
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
#endif`,xh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eh=`#ifdef USE_BATCHING
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
#endif`,yh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Th=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ah=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bh=`#ifdef USE_IRIDESCENCE
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
#endif`,Ch=`#ifdef USE_BUMPMAP
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
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fh=`#define PI 3.141592653589793
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
} // validated`,Bh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zh=`vec3 transformedNormal = objectNormal;
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
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xh=`
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
}`,Yh=`#ifdef USE_ENVMAP
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
#endif`,qh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jh=`#ifdef USE_ENVMAP
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
#endif`,Kh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
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
#endif`,$h=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eu=`#ifdef USE_GRADIENTMAP
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
}`,nu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,iu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,su=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,au=`uniform bool receiveShadow;
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
#endif`,ou=`#ifdef USE_ENVMAP
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
#endif`,cu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,du=`PhysicalMaterial material;
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
#endif`,fu=`struct PhysicalMaterial {
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
}`,pu=`
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
#endif`,mu=`#if defined( RE_IndirectDiffuse )
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
#endif`,_u=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Su=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Mu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tu=`#if defined( USE_POINTS_UV )
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
#endif`,Au=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ru=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cu=`#ifdef USE_MORPHNORMALS
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
#endif`,wu=`#ifdef USE_MORPHTARGETS
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
#endif`,Lu=`#ifdef USE_MORPHTARGETS
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
#endif`,Pu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Iu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ou=`#ifdef USE_NORMALMAP
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
#endif`,Fu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ku=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$u=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ju=`float getShadowMask() {
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
}`,Qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,td=`#ifdef USE_SKINNING
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
#endif`,ed=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nd=`#ifdef USE_SKINNING
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
#endif`,id=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ad=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,od=`#ifdef USE_TRANSMISSION
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
#endif`,cd=`#ifdef USE_TRANSMISSION
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
#endif`,ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pd=`uniform sampler2D t2D;
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
}`,md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_d=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sd=`#include <common>
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
}`,Md=`#if DEPTH_PACKING == 3200
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
}`,xd=`#define DISTANCE
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
}`,Ed=`#define DISTANCE
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
}`,yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Td=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ad=`uniform float scale;
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
}`,Rd=`uniform vec3 diffuse;
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
}`,bd=`#include <common>
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
}`,Cd=`uniform vec3 diffuse;
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
}`,wd=`#define LAMBERT
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
}`,Ld=`#define LAMBERT
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
}`,Pd=`#define MATCAP
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
}`,Id=`#define MATCAP
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
}`,Dd=`#define NORMAL
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
}`,Ud=`#define NORMAL
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
}`,Nd=`#define PHONG
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
}`,Od=`#define PHONG
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
}`,Fd=`#define STANDARD
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
}`,Bd=`#define STANDARD
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
}`,zd=`#define TOON
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
}`,Hd=`#define TOON
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
}`,Gd=`uniform float size;
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
}`,Vd=`uniform vec3 diffuse;
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
}`,kd=`#include <common>
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
}`,Wd=`uniform vec3 color;
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
}`,Xd=`uniform float rotation;
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
}`,Yd=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:ph,alphahash_pars_fragment:mh,alphamap_fragment:_h,alphamap_pars_fragment:gh,alphatest_fragment:vh,alphatest_pars_fragment:Sh,aomap_fragment:Mh,aomap_pars_fragment:xh,batching_pars_vertex:Eh,batching_vertex:yh,begin_vertex:Th,beginnormal_vertex:Ah,bsdfs:Rh,iridescence_fragment:bh,bumpmap_pars_fragment:Ch,clipping_planes_fragment:wh,clipping_planes_pars_fragment:Lh,clipping_planes_pars_vertex:Ph,clipping_planes_vertex:Ih,color_fragment:Dh,color_pars_fragment:Uh,color_pars_vertex:Nh,color_vertex:Oh,common:Fh,cube_uv_reflection_fragment:Bh,defaultnormal_vertex:zh,displacementmap_pars_vertex:Hh,displacementmap_vertex:Gh,emissivemap_fragment:Vh,emissivemap_pars_fragment:kh,colorspace_fragment:Wh,colorspace_pars_fragment:Xh,envmap_fragment:Yh,envmap_common_pars_fragment:qh,envmap_pars_fragment:jh,envmap_pars_vertex:Kh,envmap_physical_pars_fragment:ou,envmap_vertex:Zh,fog_vertex:$h,fog_pars_vertex:Jh,fog_fragment:Qh,fog_pars_fragment:tu,gradientmap_pars_fragment:eu,lightmap_fragment:nu,lightmap_pars_fragment:iu,lights_lambert_fragment:ru,lights_lambert_pars_fragment:su,lights_pars_begin:au,lights_toon_fragment:cu,lights_toon_pars_fragment:lu,lights_phong_fragment:hu,lights_phong_pars_fragment:uu,lights_physical_fragment:du,lights_physical_pars_fragment:fu,lights_fragment_begin:pu,lights_fragment_maps:mu,lights_fragment_end:_u,logdepthbuf_fragment:gu,logdepthbuf_pars_fragment:vu,logdepthbuf_pars_vertex:Su,logdepthbuf_vertex:Mu,map_fragment:xu,map_pars_fragment:Eu,map_particle_fragment:yu,map_particle_pars_fragment:Tu,metalnessmap_fragment:Au,metalnessmap_pars_fragment:Ru,morphcolor_vertex:bu,morphnormal_vertex:Cu,morphtarget_pars_vertex:wu,morphtarget_vertex:Lu,normal_fragment_begin:Pu,normal_fragment_maps:Iu,normal_pars_fragment:Du,normal_pars_vertex:Uu,normal_vertex:Nu,normalmap_pars_fragment:Ou,clearcoat_normal_fragment_begin:Fu,clearcoat_normal_fragment_maps:Bu,clearcoat_pars_fragment:zu,iridescence_pars_fragment:Hu,opaque_fragment:Gu,packing:Vu,premultiplied_alpha_fragment:ku,project_vertex:Wu,dithering_fragment:Xu,dithering_pars_fragment:Yu,roughnessmap_fragment:qu,roughnessmap_pars_fragment:ju,shadowmap_pars_fragment:Ku,shadowmap_pars_vertex:Zu,shadowmap_vertex:$u,shadowmask_pars_fragment:Ju,skinbase_vertex:Qu,skinning_pars_vertex:td,skinning_vertex:ed,skinnormal_vertex:nd,specularmap_fragment:id,specularmap_pars_fragment:rd,tonemapping_fragment:sd,tonemapping_pars_fragment:ad,transmission_fragment:od,transmission_pars_fragment:cd,uv_pars_fragment:ld,uv_pars_vertex:hd,uv_vertex:ud,worldpos_vertex:dd,background_vert:fd,background_frag:pd,backgroundCube_vert:md,backgroundCube_frag:_d,cube_vert:gd,cube_frag:vd,depth_vert:Sd,depth_frag:Md,distanceRGBA_vert:xd,distanceRGBA_frag:Ed,equirect_vert:yd,equirect_frag:Td,linedashed_vert:Ad,linedashed_frag:Rd,meshbasic_vert:bd,meshbasic_frag:Cd,meshlambert_vert:wd,meshlambert_frag:Ld,meshmatcap_vert:Pd,meshmatcap_frag:Id,meshnormal_vert:Dd,meshnormal_frag:Ud,meshphong_vert:Nd,meshphong_frag:Od,meshphysical_vert:Fd,meshphysical_frag:Bd,meshtoon_vert:zd,meshtoon_frag:Hd,points_vert:Gd,points_frag:Vd,shadow_vert:kd,shadow_frag:Wd,sprite_vert:Xd,sprite_frag:Yd},it={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Ze={basic:{uniforms:ye([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:ye([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:ye([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:ye([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:ye([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:ye([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:ye([it.points,it.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:ye([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:ye([it.common,it.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:ye([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:ye([it.sprite,it.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:ye([it.common,it.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:ye([it.lights,it.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Ze.physical={uniforms:ye([Ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Sr={r:0,b:0,g:0};function qd(i,t,e,n,r,s,c){const a=new kt(0);let o=s===!0?0:1,l,h,u=null,p=0,m=null;function v(f,d){let A=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?S(a,o):x&&x.isColor&&(S(x,1),A=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,c):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||A)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Br)?(h===void 0&&(h=new ln(new qi(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Ci(Ze.backgroundCube.uniforms),vertexShader:Ze.backgroundCube.vertexShader,fragmentShader:Ze.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=$t.getTransfer(x.colorSpace)!==ne,(u!==x||p!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,p=x.version,m=i.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ln(new Hr(2,2),new wn({name:"BackgroundMaterial",uniforms:Ci(Ze.background.uniforms),vertexShader:Ze.background.vertexShader,fragmentShader:Ze.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=$t.getTransfer(x.colorSpace)!==ne,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||p!==x.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,p=x.version,m=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function S(f,d){f.getRGB(Sr,vc(i)),n.buffers.color.setClear(Sr.r,Sr.g,Sr.b,d,c)}return{getClearColor:function(){return a},setClearColor:function(f,d=1){a.set(f),o=d,S(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(f){o=f,S(a,o)},render:v}}function jd(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),c=n.isWebGL2||s!==null,a={},o=f(null);let l=o,h=!1;function u(L,B,N,G,X){let Y=!1;if(c){const j=S(G,N,B);l!==j&&(l=j,m(l.object)),Y=d(L,G,N,X),Y&&A(L,G,N,X)}else{const j=B.wireframe===!0;(l.geometry!==G.id||l.program!==N.id||l.wireframe!==j)&&(l.geometry=G.id,l.program=N.id,l.wireframe=j,Y=!0)}X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,k(L,B,N,G),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function p(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function S(L,B,N){const G=N.wireframe===!0;let X=a[L.id];X===void 0&&(X={},a[L.id]=X);let Y=X[B.id];Y===void 0&&(Y={},X[B.id]=Y);let j=Y[G];return j===void 0&&(j=f(p()),Y[G]=j),j}function f(L){const B=[],N=[],G=[];for(let X=0;X<r;X++)B[X]=0,N[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:N,attributeDivisors:G,object:L,attributes:{},index:null}}function d(L,B,N,G){const X=l.attributes,Y=B.attributes;let j=0;const tt=N.getAttributes();for(const rt in tt)if(tt[rt].location>=0){const H=X[rt];let $=Y[rt];if($===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),H===void 0||H.attribute!==$||$&&H.data!==$.data)return!0;j++}return l.attributesNum!==j||l.index!==G}function A(L,B,N,G){const X={},Y=B.attributes;let j=0;const tt=N.getAttributes();for(const rt in tt)if(tt[rt].location>=0){let H=Y[rt];H===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&(H=L.instanceColor));const $={};$.attribute=H,H&&H.data&&($.data=H.data),X[rt]=$,j++}l.attributes=X,l.attributesNum=j,l.index=G}function x(){const L=l.newAttributes;for(let B=0,N=L.length;B<N;B++)L[B]=0}function R(L){P(L,0)}function P(L,B){const N=l.newAttributes,G=l.enabledAttributes,X=l.attributeDivisors;N[L]=1,G[L]===0&&(i.enableVertexAttribArray(L),G[L]=1),X[L]!==B&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),X[L]=B)}function w(){const L=l.newAttributes,B=l.enabledAttributes;for(let N=0,G=B.length;N<G;N++)B[N]!==L[N]&&(i.disableVertexAttribArray(N),B[N]=0)}function C(L,B,N,G,X,Y,j){j===!0?i.vertexAttribIPointer(L,B,N,X,Y):i.vertexAttribPointer(L,B,N,G,X,Y)}function k(L,B,N,G){if(n.isWebGL2===!1&&(L.isInstancedMesh||G.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const X=G.attributes,Y=N.getAttributes(),j=B.defaultAttributeValues;for(const tt in Y){const rt=Y[tt];if(rt.location>=0){let At=X[tt];if(At===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(At=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(At=L.instanceColor)),At!==void 0){const H=At.normalized,$=At.itemSize,lt=e.get(At);if(lt===void 0)continue;const Mt=lt.buffer,_t=lt.type,dt=lt.bytesPerElement,Ht=n.isWebGL2===!0&&(_t===i.INT||_t===i.UNSIGNED_INT||At.gpuType===tc);if(At.isInterleavedBufferAttribute){const Ct=At.data,D=Ct.stride,se=At.offset;if(Ct.isInstancedInterleavedBuffer){for(let vt=0;vt<rt.locationSize;vt++)P(rt.location+vt,Ct.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let vt=0;vt<rt.locationSize;vt++)R(rt.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let vt=0;vt<rt.locationSize;vt++)C(rt.location+vt,$/rt.locationSize,_t,H,D*dt,(se+$/rt.locationSize*vt)*dt,Ht)}else{if(At.isInstancedBufferAttribute){for(let Ct=0;Ct<rt.locationSize;Ct++)P(rt.location+Ct,At.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Ct=0;Ct<rt.locationSize;Ct++)R(rt.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let Ct=0;Ct<rt.locationSize;Ct++)C(rt.location+Ct,$/rt.locationSize,_t,H,$*dt,$/rt.locationSize*Ct*dt,Ht)}}else if(j!==void 0){const H=j[tt];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(rt.location,H);break;case 3:i.vertexAttrib3fv(rt.location,H);break;case 4:i.vertexAttrib4fv(rt.location,H);break;default:i.vertexAttrib1fv(rt.location,H)}}}}w()}function W(){V();for(const L in a){const B=a[L];for(const N in B){const G=B[N];for(const X in G)v(G[X].object),delete G[X];delete B[N]}delete a[L]}}function _(L){if(a[L.id]===void 0)return;const B=a[L.id];for(const N in B){const G=B[N];for(const X in G)v(G[X].object),delete G[X];delete B[N]}delete a[L.id]}function y(L){for(const B in a){const N=a[B];if(N[L.id]===void 0)continue;const G=N[L.id];for(const X in G)v(G[X].object),delete G[X];delete N[L.id]}}function V(){q(),h=!0,l!==o&&(l=o,m(l.object))}function q(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:V,resetDefaultState:q,dispose:W,releaseStatesOfGeometry:_,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:R,disableUnusedAttributes:w}}function Kd(i,t,e,n){const r=n.isWebGL2;let s;function c(h){s=h}function a(h,u){i.drawArrays(s,h,u),e.update(u,s,1)}function o(h,u,p){if(p===0)return;let m,v;if(r)m=i,v="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,h,u,p),e.update(u,s,p)}function l(h,u,p){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<p;v++)this.render(h[v],u[v]);else{m.multiDrawArraysWEBGL(s,h,0,u,0,p);let v=0;for(let S=0;S<p;S++)v+=u[S];e.update(v,s,1)}}this.setMode=c,this.render=a,this.renderInstances=o,this.renderMultiDraw=l}function Zd(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=c||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,R=c||t.has("OES_texture_float"),P=x&&R,w=c?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:v,maxAttributes:S,maxVertexUniforms:f,maxVaryings:d,maxFragmentUniforms:A,vertexTextures:x,floatFragmentTextures:R,floatVertexTextures:P,maxSamples:w}}function $d(i){const t=this;let e=null,n=0,r=!1,s=!1;const c=new On,a=new zt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||n!==0||r;return r=p,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,m){const v=u.clippingPlanes,S=u.clipIntersection,f=u.clipShadows,d=i.get(u);if(!r||v===null||v.length===0||s&&!f)s?h(null):l();else{const A=s?0:n,x=A*4;let R=d.clippingState||null;o.value=R,R=h(v,p,x,m);for(let P=0;P!==x;++P)R[P]=e[P];d.clippingState=R,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function l(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,m,v){const S=u!==null?u.length:0;let f=null;if(S!==0){if(f=o.value,v!==!0||f===null){const d=m+S*4,A=p.matrixWorldInverse;a.getNormalMatrix(A),(f===null||f.length<d)&&(f=new Float32Array(d));for(let x=0,R=m;x!==S;++x,R+=4)c.copy(u[x]).applyMatrix4(A,a),c.normal.toArray(f,R),f[R+3]=c.constant}o.value=f,o.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,f}}function Jd(i){let t=new WeakMap;function e(c,a){return a===Is?c.mapping=Ai:a===Ds&&(c.mapping=Ri),c}function n(c){if(c&&c.isTexture){const a=c.mapping;if(a===Is||a===Ds)if(t.has(c)){const o=t.get(c).texture;return e(o,c.mapping)}else{const o=c.image;if(o&&o.height>0){const l=new hh(o.height);return l.fromEquirectangularTexture(i,c),t.set(c,l),c.addEventListener("dispose",r),e(l.texture,c.mapping)}else return null}}return c}function r(c){const a=c.target;a.removeEventListener("dispose",r);const o=t.get(a);o!==void 0&&(t.delete(a),o.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class yc extends Sc{constructor(t=-1,e=1,n=1,r=-1,s=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,c=n+t,a=r+e,o=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,c=s+l*this.view.width,a-=h*this.view.offsetY,o=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,c,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Si=4,$a=[.125,.215,.35,.446,.526,.582],zn=20,gs=new yc,Ja=new kt;let vs=null,Ss=0,Ms=0;const Fn=(1+Math.sqrt(5))/2,ui=1/Fn,Qa=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,Fn,ui),new b(0,Fn,-ui),new b(ui,0,Fn),new b(-ui,0,Fn),new b(Fn,ui,0),new b(-Fn,ui,0)];class to{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){vs=this._renderer.getRenderTarget(),Ss=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=io(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=no(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vs,Ss,Ms),t.scissorTest=!1,Mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ai||t.mapping===Ri?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vs=this._renderer.getRenderTarget(),Ss=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:be,minFilter:be,generateMipmaps:!1,type:Vi,format:Ye,colorSpace:fn,depthBuffer:!1},r=eo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qd(s)),this._blurMaterial=tf(s,t,e)}return r}_compileMaterial(t){const e=new ln(this._lodPlanes[0],t);this._renderer.compile(e,gs)}_sceneToCubeUV(t,e,n,r){const a=new We(90,1,e,n),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Ja),h.toneMapping=An,h.autoClear=!1;const m=new mc({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),v=new ln(new qi,m);let S=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,S=!0):(m.color.copy(Ja),S=!0);for(let d=0;d<6;d++){const A=d%3;A===0?(a.up.set(0,o[d],0),a.lookAt(l[d],0,0)):A===1?(a.up.set(0,0,o[d]),a.lookAt(0,l[d],0)):(a.up.set(0,o[d],0),a.lookAt(0,0,l[d]));const x=this._cubeSize;Mr(r,A*x,d>2?x:0,x,x),h.setRenderTarget(r),S&&h.render(v,a),h.render(t,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ai||t.mapping===Ri;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=io()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=no());const s=r?this._cubemapMaterial:this._equirectMaterial,c=new ln(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const o=this._cubeSize;Mr(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(c,gs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=Qa[(r-1)%Qa.length];this._blur(t,r-1,r,s,c)}e.autoClear=n}_blur(t,e,n,r,s){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,n,r,"latitudinal",s),this._halfBlur(c,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,c,a){const o=this._renderer,l=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ln(this._lodPlanes[r],l),p=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*zn-1),S=s/v,f=isFinite(s)?1+Math.floor(h*S):zn;f>zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${zn}`);const d=[];let A=0;for(let C=0;C<zn;++C){const k=C/S,W=Math.exp(-k*k/2);d.push(W),C===0?A+=W:C<f&&(A+=2*W)}for(let C=0;C<d.length;C++)d[C]=d[C]/A;p.envMap.value=t.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=c==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:x}=this;p.dTheta.value=v,p.mipInt.value=x-n;const R=this._sizeLods[r],P=3*R*(r>x-Si?r-x+Si:0),w=4*(this._cubeSize-R);Mr(e,P,w,3*R,2*R),o.setRenderTarget(e),o.render(u,gs)}}function Qd(i){const t=[],e=[],n=[];let r=i;const s=i-Si+1+$a.length;for(let c=0;c<s;c++){const a=Math.pow(2,r);e.push(a);let o=1/a;c>i-Si?o=$a[c-i+Si-1]:c===0&&(o=0),n.push(o);const l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,S=3,f=2,d=1,A=new Float32Array(S*v*m),x=new Float32Array(f*v*m),R=new Float32Array(d*v*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,k=w>2?0:-1,W=[C,k,0,C+2/3,k,0,C+2/3,k+1,0,C,k,0,C+2/3,k+1,0,C,k+1,0];A.set(W,S*v*w),x.set(p,f*v*w);const _=[w,w,w,w,w,w];R.set(_,d*v*w)}const P=new ze;P.setAttribute("position",new Te(A,S)),P.setAttribute("uv",new Te(x,f)),P.setAttribute("faceIndex",new Te(R,d)),t.push(P),r>Si&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function eo(i,t,e){const n=new Xn(i,t,e);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function tf(i,t,e){const n=new Float32Array(zn),r=new b(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ks(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function no(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ks(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function io(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Ks(){return`

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
	`}function ef(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const o=a.mapping,l=o===Is||o===Ds,h=o===Ai||o===Ri;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new to(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&r(u)){e===null&&(e=new to(i));const p=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let o=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&o++;return o===l}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:c}}function nf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function rf(i,t,e,n){const r={},s=new WeakMap;function c(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const v in p.attributes)t.remove(p.attributes[v]);for(const v in p.morphAttributes){const S=p.morphAttributes[v];for(let f=0,d=S.length;f<d;f++)t.remove(S[f])}p.removeEventListener("dispose",c),delete r[p.id];const m=s.get(p);m&&(t.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return r[p.id]===!0||(p.addEventListener("dispose",c),r[p.id]=!0,e.memory.geometries++),p}function o(u){const p=u.attributes;for(const v in p)t.update(p[v],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const v in m){const S=m[v];for(let f=0,d=S.length;f<d;f++)t.update(S[f],i.ARRAY_BUFFER)}}function l(u){const p=[],m=u.index,v=u.attributes.position;let S=0;if(m!==null){const A=m.array;S=m.version;for(let x=0,R=A.length;x<R;x+=3){const P=A[x+0],w=A[x+1],C=A[x+2];p.push(P,w,w,C,C,P)}}else if(v!==void 0){const A=v.array;S=v.version;for(let x=0,R=A.length/3-1;x<R;x+=3){const P=x+0,w=x+1,C=x+2;p.push(P,w,w,C,C,P)}}else return;const f=new(lc(p)?gc:_c)(p,1);f.version=S;const d=s.get(u);d&&t.remove(d),s.set(u,f)}function h(u){const p=s.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:o,getWireframeAttribute:h}}function sf(i,t,e,n){const r=n.isWebGL2;let s;function c(m){s=m}let a,o;function l(m){a=m.type,o=m.bytesPerElement}function h(m,v){i.drawElements(s,v,a,m*o),e.update(v,s,1)}function u(m,v,S){if(S===0)return;let f,d;if(r)f=i,d="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,v,a,m*o,S),e.update(v,s,S)}function p(m,v,S){if(S===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<S;d++)this.render(m[d]/o,v[d]);else{f.multiDrawElementsWEBGL(s,v,0,a,m,0,S);let d=0;for(let A=0;A<S;A++)d+=v[A];e.update(d,s,1)}}this.setMode=c,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function af(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,c,a){switch(e.calls++,c){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function of(i,t){return i[0]-t[0]}function cf(i,t){return Math.abs(t[1])-Math.abs(i[1])}function lf(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,c=new ge,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function o(l,h,u){const p=l.morphTargetInfluences;if(t.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,S=v!==void 0?v.length:0;let f=s.get(h);if(f===void 0||f.count!==S){let B=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",B)};var m=B;f!==void 0&&f.texture.dispose();const x=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let W=0;x===!0&&(W=1),R===!0&&(W=2),P===!0&&(W=3);let _=h.attributes.position.count*W,y=1;_>t.maxTextureSize&&(y=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const V=new Float32Array(_*y*4*S),q=new dc(V,_,y,S);q.type=on,q.needsUpdate=!0;const L=W*4;for(let N=0;N<S;N++){const G=w[N],X=C[N],Y=k[N],j=_*y*4*N;for(let tt=0;tt<G.count;tt++){const rt=tt*L;x===!0&&(c.fromBufferAttribute(G,tt),V[j+rt+0]=c.x,V[j+rt+1]=c.y,V[j+rt+2]=c.z,V[j+rt+3]=0),R===!0&&(c.fromBufferAttribute(X,tt),V[j+rt+4]=c.x,V[j+rt+5]=c.y,V[j+rt+6]=c.z,V[j+rt+7]=0),P===!0&&(c.fromBufferAttribute(Y,tt),V[j+rt+8]=c.x,V[j+rt+9]=c.y,V[j+rt+10]=c.z,V[j+rt+11]=Y.itemSize===4?c.w:1)}}f={count:S,texture:q,size:new Gt(_,y)},s.set(h,f),h.addEventListener("dispose",B)}let d=0;for(let x=0;x<p.length;x++)d+=p[x];const A=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",A),u.getUniforms().setValue(i,"morphTargetInfluences",p),u.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{const v=p===void 0?0:p.length;let S=n[h.id];if(S===void 0||S.length!==v){S=[];for(let R=0;R<v;R++)S[R]=[R,0];n[h.id]=S}for(let R=0;R<v;R++){const P=S[R];P[0]=R,P[1]=p[R]}S.sort(cf);for(let R=0;R<8;R++)R<v&&S[R][1]?(a[R][0]=S[R][0],a[R][1]=S[R][1]):(a[R][0]=Number.MAX_SAFE_INTEGER,a[R][1]=0);a.sort(of);const f=h.morphAttributes.position,d=h.morphAttributes.normal;let A=0;for(let R=0;R<8;R++){const P=a[R],w=P[0],C=P[1];w!==Number.MAX_SAFE_INTEGER&&C?(f&&h.getAttribute("morphTarget"+R)!==f[w]&&h.setAttribute("morphTarget"+R,f[w]),d&&h.getAttribute("morphNormal"+R)!==d[w]&&h.setAttribute("morphNormal"+R,d[w]),r[R]=C,A+=C):(f&&h.hasAttribute("morphTarget"+R)===!0&&h.deleteAttribute("morphTarget"+R),d&&h.hasAttribute("morphNormal"+R)===!0&&h.deleteAttribute("morphNormal"+R),r[R]=0)}const x=h.morphTargetsRelative?1:1-A;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:o}}function hf(i,t,e,n){let r=new WeakMap;function s(o){const l=n.render.frame,h=o.geometry,u=t.get(o,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),r.get(o)!==l&&(e.update(o.instanceMatrix,i.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,i.ARRAY_BUFFER),r.set(o,l))),o.isSkinnedMesh){const p=o.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return u}function c(){r=new WeakMap}function a(o){const l=o.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:c}}class Tc extends Ae{constructor(t,e,n,r,s,c,a,o,l,h){if(h=h!==void 0?h:Vn,h!==Vn&&h!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vn&&(n=En),n===void 0&&h===bi&&(n=Gn),super(null,r,s,c,a,o,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:he,this.minFilter=o!==void 0?o:he,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ac=new Ae,Rc=new Tc(1,1);Rc.compareFunction=cc;const bc=new dc,Cc=new ql,wc=new Mc,ro=[],so=[],ao=new Float32Array(16),oo=new Float32Array(9),co=new Float32Array(4);function Pi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=ro[r];if(s===void 0&&(s=new Float32Array(r),ro[r]=s),t!==0){n.toArray(s,0);for(let c=1,a=0;c!==t;++c)a+=e,i[c].toArray(s,a)}return s}function ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function de(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Gr(i,t){let e=so[t];e===void 0&&(e=new Int32Array(t),so[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function uf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function df(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2fv(this.addr,t),de(e,t)}}function ff(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;i.uniform3fv(this.addr,t),de(e,t)}}function pf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4fv(this.addr,t),de(e,t)}}function mf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;co.set(n),i.uniformMatrix2fv(this.addr,!1,co),de(e,n)}}function _f(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;oo.set(n),i.uniformMatrix3fv(this.addr,!1,oo),de(e,n)}}function gf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;ao.set(n),i.uniformMatrix4fv(this.addr,!1,ao),de(e,n)}}function vf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2iv(this.addr,t),de(e,t)}}function Mf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;i.uniform3iv(this.addr,t),de(e,t)}}function xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4iv(this.addr,t),de(e,t)}}function Ef(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;i.uniform2uiv(this.addr,t),de(e,t)}}function Tf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;i.uniform3uiv(this.addr,t),de(e,t)}}function Af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;i.uniform4uiv(this.addr,t),de(e,t)}}function Rf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Rc:Ac;e.setTexture2D(t||s,r)}function bf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Cc,r)}function Cf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||wc,r)}function wf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||bc,r)}function Lf(i){switch(i){case 5126:return uf;case 35664:return df;case 35665:return ff;case 35666:return pf;case 35674:return mf;case 35675:return _f;case 35676:return gf;case 5124:case 35670:return vf;case 35667:case 35671:return Sf;case 35668:case 35672:return Mf;case 35669:case 35673:return xf;case 5125:return Ef;case 36294:return yf;case 36295:return Tf;case 36296:return Af;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return bf;case 35680:case 36300:case 36308:case 36293:return Cf;case 36289:case 36303:case 36311:case 36292:return wf}}function Pf(i,t){i.uniform1fv(this.addr,t)}function If(i,t){const e=Pi(t,this.size,2);i.uniform2fv(this.addr,e)}function Df(i,t){const e=Pi(t,this.size,3);i.uniform3fv(this.addr,e)}function Uf(i,t){const e=Pi(t,this.size,4);i.uniform4fv(this.addr,e)}function Nf(i,t){const e=Pi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Of(i,t){const e=Pi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ff(i,t){const e=Pi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bf(i,t){i.uniform1iv(this.addr,t)}function zf(i,t){i.uniform2iv(this.addr,t)}function Hf(i,t){i.uniform3iv(this.addr,t)}function Gf(i,t){i.uniform4iv(this.addr,t)}function Vf(i,t){i.uniform1uiv(this.addr,t)}function kf(i,t){i.uniform2uiv(this.addr,t)}function Wf(i,t){i.uniform3uiv(this.addr,t)}function Xf(i,t){i.uniform4uiv(this.addr,t)}function Yf(i,t,e){const n=this.cache,r=t.length,s=Gr(e,r);ue(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let c=0;c!==r;++c)e.setTexture2D(t[c]||Ac,s[c])}function qf(i,t,e){const n=this.cache,r=t.length,s=Gr(e,r);ue(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let c=0;c!==r;++c)e.setTexture3D(t[c]||Cc,s[c])}function jf(i,t,e){const n=this.cache,r=t.length,s=Gr(e,r);ue(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let c=0;c!==r;++c)e.setTextureCube(t[c]||wc,s[c])}function Kf(i,t,e){const n=this.cache,r=t.length,s=Gr(e,r);ue(n,s)||(i.uniform1iv(this.addr,s),de(n,s));for(let c=0;c!==r;++c)e.setTexture2DArray(t[c]||bc,s[c])}function Zf(i){switch(i){case 5126:return Pf;case 35664:return If;case 35665:return Df;case 35666:return Uf;case 35674:return Nf;case 35675:return Of;case 35676:return Ff;case 5124:case 35670:return Bf;case 35667:case 35671:return zf;case 35668:case 35672:return Hf;case 35669:case 35673:return Gf;case 5125:return Vf;case 36294:return kf;case 36295:return Wf;case 36296:return Xf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return qf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return Kf}}class $f{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lf(e.type)}}class Jf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zf(e.type)}}class Qf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,c=r.length;s!==c;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const xs=/(\w+)(\])?(\[|\.)?/g;function lo(i,t){i.seq.push(t),i.map[t.id]=t}function tp(i,t,e){const n=i.name,r=n.length;for(xs.lastIndex=0;;){const s=xs.exec(n),c=xs.lastIndex;let a=s[1];const o=s[2]==="]",l=s[3];if(o&&(a=a|0),l===void 0||l==="["&&c+2===r){lo(e,l===void 0?new $f(a,i,t):new Jf(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Qf(a),lo(e,u)),e=u}}}class wr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),c=t.getUniformLocation(e,s.name);tp(s,c,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,c=e.length;s!==c;++s){const a=e[s],o=n[a.id];o.needsUpdate!==!1&&a.setValue(t,o.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const c=t[r];c.id in e&&n.push(c)}return n}}function ho(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ep=37297;let np=0;function ip(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let c=r;c<s;c++){const a=c+1;n.push(`${a===t?">":" "} ${a}: ${e[c]}`)}return n.join(`
`)}function rp(i){const t=$t.getPrimaries($t.workingColorSpace),e=$t.getPrimaries(i);let n;switch(t===e?n="":t===Ur&&e===Dr?n="LinearDisplayP3ToLinearSRGB":t===Dr&&e===Ur&&(n="LinearSRGBToLinearDisplayP3"),i){case fn:case zr:return[n,"LinearTransferOETF"];case _e:case qs:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function uo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const c=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+ip(i.getShaderSource(t),c)}else return r}function sp(i,t){const e=rp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ap(i,t){let e;switch(t){case _l:e="Linear";break;case gl:e="Reinhard";break;case vl:e="OptimizedCineon";break;case Sl:e="ACESFilmic";break;case xl:e="AgX";break;case Ml:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function op(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mi).join(`
`)}function cp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mi).join(`
`)}function lp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),c=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[c]={type:s.type,location:i.getAttribLocation(t,c),locationSize:a}}return e}function Mi(i){return i!==""}function fo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function po(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const up=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hs(i){return i.replace(up,fp)}const dp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fp(i,t){let e=Ot[t];if(e===void 0){const n=dp.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Hs(e)}const pp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mo(i){return i.replace(pp,mp)}function mp(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _o(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function _p(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$o?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===sn&&(t="SHADOWMAP_TYPE_VSM"),t}function gp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ai:case Ri:t="ENVMAP_TYPE_CUBE";break;case Br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ri:t="ENVMAP_MODE_REFRACTION";break}return t}function Sp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jo:t="ENVMAP_BLENDING_MULTIPLY";break;case pl:t="ENVMAP_BLENDING_MIX";break;case ml:t="ENVMAP_BLENDING_ADD";break}return t}function Mp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xp(i,t,e,n){const r=i.getContext(),s=e.defines;let c=e.vertexShader,a=e.fragmentShader;const o=_p(e),l=gp(e),h=vp(e),u=Sp(e),p=Mp(e),m=e.isWebGL2?"":op(e),v=cp(e),S=lp(s),f=r.createProgram();let d,A,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Mi).join(`
`),d.length>0&&(d+=`
`),A=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Mi).join(`
`),A.length>0&&(A+=`
`)):(d=[_o(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mi).join(`
`),A=[m,_o(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?Ot.tonemapping_pars_fragment:"",e.toneMapping!==An?ap("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,sp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mi).join(`
`)),c=Hs(c),c=fo(c,e),c=po(c,e),a=Hs(a),a=fo(a,e),a=po(a,e),c=mo(c),a=mo(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,A=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Pa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const R=x+d+c,P=x+A+a,w=ho(r,r.VERTEX_SHADER,R),C=ho(r,r.FRAGMENT_SHADER,P);r.attachShader(f,w),r.attachShader(f,C),e.index0AttributeName!==void 0?r.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function k(V){if(i.debug.checkShaderErrors){const q=r.getProgramInfoLog(f).trim(),L=r.getShaderInfoLog(w).trim(),B=r.getShaderInfoLog(C).trim();let N=!0,G=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,f,w,C);else{const X=uo(r,w,"vertex"),Y=uo(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+q+`
`+X+`
`+Y)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(L===""||B==="")&&(G=!1);G&&(V.diagnostics={runnable:N,programLog:q,vertexShader:{log:L,prefix:d},fragmentShader:{log:B,prefix:A}})}r.deleteShader(w),r.deleteShader(C),W=new wr(r,f),_=hp(r,f)}let W;this.getUniforms=function(){return W===void 0&&k(this),W};let _;this.getAttributes=function(){return _===void 0&&k(this),_};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(f,ep)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=np++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=w,this.fragmentShader=C,this}let Ep=0;class yp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),c=this._getShaderCacheForMaterial(t);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Tp(t),e.set(t,n)),n}}class Tp{constructor(t){this.id=Ep++,this.code=t,this.usedTimes=0}}function Ap(i,t,e,n,r,s,c){const a=new fc,o=new yp,l=new Set,h=[],u=r.isWebGL2,p=r.logarithmicDepthBuffer,m=r.vertexTextures;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function d(_,y,V,q,L){const B=q.fog,N=L.geometry,G=_.isMeshStandardMaterial?q.environment:null,X=(_.isMeshStandardMaterial?e:t).get(_.envMap||G),Y=X&&X.mapping===Br?X.image.height:null,j=S[_.type];_.precision!==null&&(v=r.getMaxPrecision(_.precision),v!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",v,"instead."));const tt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,rt=tt!==void 0?tt.length:0;let At=0;N.morphAttributes.position!==void 0&&(At=1),N.morphAttributes.normal!==void 0&&(At=2),N.morphAttributes.color!==void 0&&(At=3);let H,$,lt,Mt;if(j){const Kt=Ze[j];H=Kt.vertexShader,$=Kt.fragmentShader}else H=_.vertexShader,$=_.fragmentShader,o.update(_),lt=o.getVertexShaderID(_),Mt=o.getFragmentShaderID(_);const _t=i.getRenderTarget(),dt=L.isInstancedMesh===!0,Ht=L.isBatchedMesh===!0,Ct=!!_.map,D=!!_.matcap,se=!!X,vt=!!_.aoMap,Rt=!!_.lightMap,mt=!!_.bumpMap,Xt=!!_.normalMap,Pt=!!_.displacementMap,E=!!_.emissiveMap,g=!!_.metalnessMap,O=!!_.roughnessMap,J=_.anisotropy>0,K=_.clearcoat>0,Q=_.iridescence>0,ft=_.sheen>0,at=_.transmission>0,ht=J&&!!_.anisotropyMap,Et=K&&!!_.clearcoatMap,Ut=K&&!!_.clearcoatNormalMap,Z=K&&!!_.clearcoatRoughnessMap,Yt=Q&&!!_.iridescenceMap,Bt=Q&&!!_.iridescenceThicknessMap,yt=ft&&!!_.sheenColorMap,gt=ft&&!!_.sheenRoughnessMap,ct=!!_.specularMap,It=!!_.specularColorMap,Vt=!!_.specularIntensityMap,Jt=at&&!!_.transmissionMap,bt=at&&!!_.thicknessMap,jt=!!_.gradientMap,T=!!_.alphaMap,et=_.alphaTest>0,nt=!!_.alphaHash,ut=!!_.extensions;let St=An;_.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(St=i.toneMapping);const Wt={isWebGL2:u,shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:H,fragmentShader:$,defines:_.defines,customVertexShaderID:lt,customFragmentShaderID:Mt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:v,batching:Ht,instancing:dt,instancingColor:dt&&L.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:fn,alphaToCoverage:!!_.alphaToCoverage,map:Ct,matcap:D,envMap:se,envMapMode:se&&X.mapping,envMapCubeUVHeight:Y,aoMap:vt,lightMap:Rt,bumpMap:mt,normalMap:Xt,displacementMap:m&&Pt,emissiveMap:E,normalMapObjectSpace:Xt&&_.normalMapType===Dl,normalMapTangentSpace:Xt&&_.normalMapType===Il,metalnessMap:g,roughnessMap:O,anisotropy:J,anisotropyMap:ht,clearcoat:K,clearcoatMap:Et,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Z,iridescence:Q,iridescenceMap:Yt,iridescenceThicknessMap:Bt,sheen:ft,sheenColorMap:yt,sheenRoughnessMap:gt,specularMap:ct,specularColorMap:It,specularIntensityMap:Vt,transmission:at,transmissionMap:Jt,thicknessMap:bt,gradientMap:jt,opaque:_.transparent===!1&&_.blending===Ei&&_.alphaToCoverage===!1,alphaMap:T,alphaTest:et,alphaHash:nt,combine:_.combine,mapUv:Ct&&f(_.map.channel),aoMapUv:vt&&f(_.aoMap.channel),lightMapUv:Rt&&f(_.lightMap.channel),bumpMapUv:mt&&f(_.bumpMap.channel),normalMapUv:Xt&&f(_.normalMap.channel),displacementMapUv:Pt&&f(_.displacementMap.channel),emissiveMapUv:E&&f(_.emissiveMap.channel),metalnessMapUv:g&&f(_.metalnessMap.channel),roughnessMapUv:O&&f(_.roughnessMap.channel),anisotropyMapUv:ht&&f(_.anisotropyMap.channel),clearcoatMapUv:Et&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&f(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:gt&&f(_.sheenRoughnessMap.channel),specularMapUv:ct&&f(_.specularMap.channel),specularColorMapUv:It&&f(_.specularColorMap.channel),specularIntensityMapUv:Vt&&f(_.specularIntensityMap.channel),transmissionMapUv:Jt&&f(_.transmissionMap.channel),thicknessMapUv:bt&&f(_.thicknessMap.channel),alphaMapUv:T&&f(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Xt||J),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Ct||T),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:L.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:At,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ct&&_.map.isVideoTexture===!0&&$t.getTransfer(_.map.colorSpace)===ne,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===an,flipSided:_.side===we,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:ut&&_.extensions.derivatives===!0,extensionFragDepth:ut&&_.extensions.fragDepth===!0,extensionDrawBuffers:ut&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ut&&_.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function A(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const V in _.defines)y.push(V),y.push(_.defines[V]);return _.isRawShaderMaterial===!1&&(x(y,_),R(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function x(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function R(_,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),_.push(a.mask)}function P(_){const y=S[_.type];let V;if(y){const q=Ze[y];V=ah.clone(q.uniforms)}else V=_.uniforms;return V}function w(_,y){let V;for(let q=0,L=h.length;q<L;q++){const B=h[q];if(B.cacheKey===y){V=B,++V.usedTimes;break}}return V===void 0&&(V=new xp(i,y,_,s),h.push(V)),V}function C(_){if(--_.usedTimes===0){const y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function k(_){o.remove(_)}function W(){o.dispose()}return{getParameters:d,getProgramCacheKey:A,getUniforms:P,acquireProgram:w,releaseProgram:C,releaseShaderCache:k,programs:h,dispose:W}}function Rp(){let i=new WeakMap;function t(s){let c=i.get(s);return c===void 0&&(c={},i.set(s,c)),c}function e(s){i.delete(s)}function n(s,c,a){i.get(s)[c]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function bp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function go(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vo(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function c(u,p,m,v,S,f){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:p,material:m,groupOrder:v,renderOrder:u.renderOrder,z:S,group:f},i[t]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=m,d.groupOrder=v,d.renderOrder=u.renderOrder,d.z=S,d.group=f),t++,d}function a(u,p,m,v,S,f){const d=c(u,p,m,v,S,f);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):e.push(d)}function o(u,p,m,v,S,f){const d=c(u,p,m,v,S,f);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):e.unshift(d)}function l(u,p){e.length>1&&e.sort(u||bp),n.length>1&&n.sort(p||go),r.length>1&&r.sort(p||go)}function h(){for(let u=t,p=i.length;u<p;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:o,finish:h,sort:l}}function Cp(){let i=new WeakMap;function t(n,r){const s=i.get(n);let c;return s===void 0?(c=new vo,i.set(n,[c])):r>=s.length?(c=new vo,s.push(c)):c=s[r],c}function e(){i=new WeakMap}return{get:t,dispose:e}}function wp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new kt};break;case"SpotLight":e={position:new b,direction:new b,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new b,halfWidth:new b,halfHeight:new b};break}return i[t.id]=e,e}}}function Lp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Pp=0;function Ip(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Dp(i,t){const e=new wp,n=Lp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new b);const s=new b,c=new ce,a=new ce;function o(h,u){let p=0,m=0,v=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let S=0,f=0,d=0,A=0,x=0,R=0,P=0,w=0,C=0,k=0,W=0;h.sort(Ip);const _=u===!0?Math.PI:1;for(let V=0,q=h.length;V<q;V++){const L=h[V],B=L.color,N=L.intensity,G=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=B.r*N*_,m+=B.g*N*_,v+=B.b*N*_;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(L.sh.coefficients[Y],N);W++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*_),L.castShadow){const j=L.shadow,tt=n.get(L);tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,r.directionalShadow[S]=tt,r.directionalShadowMap[S]=X,r.directionalShadowMatrix[S]=L.shadow.matrix,R++}r.directional[S]=Y,S++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(B).multiplyScalar(N*_),Y.distance=G,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,r.spot[d]=Y;const j=L.shadow;if(L.map&&(r.spotLightMap[C]=L.map,C++,j.updateMatrices(L),L.castShadow&&k++),r.spotLightMatrix[d]=j.matrix,L.castShadow){const tt=n.get(L);tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,r.spotShadow[d]=tt,r.spotShadowMap[d]=X,w++}d++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(B).multiplyScalar(N),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),r.rectArea[A]=Y,A++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*_),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const j=L.shadow,tt=n.get(L);tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,r.pointShadow[f]=tt,r.pointShadowMap[f]=X,r.pointShadowMatrix[f]=L.shadow.matrix,P++}r.point[f]=Y,f++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(N*_),Y.groundColor.copy(L.groundColor).multiplyScalar(N*_),r.hemi[x]=Y,x++}}A>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=it.LTC_FLOAT_1,r.rectAreaLTC2=it.LTC_FLOAT_2):(r.rectAreaLTC1=it.LTC_HALF_1,r.rectAreaLTC2=it.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=it.LTC_FLOAT_1,r.rectAreaLTC2=it.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=it.LTC_HALF_1,r.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=v;const y=r.hash;(y.directionalLength!==S||y.pointLength!==f||y.spotLength!==d||y.rectAreaLength!==A||y.hemiLength!==x||y.numDirectionalShadows!==R||y.numPointShadows!==P||y.numSpotShadows!==w||y.numSpotMaps!==C||y.numLightProbes!==W)&&(r.directional.length=S,r.spot.length=d,r.rectArea.length=A,r.point.length=f,r.hemi.length=x,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=w+C-k,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=W,y.directionalLength=S,y.pointLength=f,y.spotLength=d,y.rectAreaLength=A,y.hemiLength=x,y.numDirectionalShadows=R,y.numPointShadows=P,y.numSpotShadows=w,y.numSpotMaps=C,y.numLightProbes=W,r.version=Pp++)}function l(h,u){let p=0,m=0,v=0,S=0,f=0;const d=u.matrixWorldInverse;for(let A=0,x=h.length;A<x;A++){const R=h[A];if(R.isDirectionalLight){const P=r.directional[p];P.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(d),p++}else if(R.isSpotLight){const P=r.spot[v];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(d),v++}else if(R.isRectAreaLight){const P=r.rectArea[S];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(d),a.identity(),c.copy(R.matrixWorld),c.premultiply(d),a.extractRotation(c),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),S++}else if(R.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(d),m++}else if(R.isHemisphereLight){const P=r.hemi[f];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(d),f++}}}return{setup:o,setupView:l,state:r}}function So(i,t){const e=new Dp(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function c(u){n.push(u)}function a(u){r.push(u)}function o(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:o,setupLightsView:l,pushLight:c,pushShadow:a}}function Up(i,t){let e=new WeakMap;function n(s,c=0){const a=e.get(s);let o;return a===void 0?(o=new So(i,t),e.set(s,[o])):c>=a.length?(o=new So(i,t),a.push(o)):o=a[c],o}function r(){e=new WeakMap}return{get:n,dispose:r}}class Np extends Yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ll,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Op extends Yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Fp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bp=`uniform sampler2D shadow_pass;
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
}`;function zp(i,t,e){let n=new xc;const r=new Gt,s=new Gt,c=new ge,a=new Np({depthPacking:Pl}),o=new Op,l={},h=e.maxTextureSize,u={[Cn]:we,[we]:Cn,[an]:an},p=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:Fp,fragmentShader:Bp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new ze;v.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ln(v,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$o;let d=this.type;this.render=function(w,C,k){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const W=i.getRenderTarget(),_=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Tn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const q=d!==sn&&this.type===sn,L=d===sn&&this.type!==sn;for(let B=0,N=w.length;B<N;B++){const G=w[B],X=G.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const Y=X.getFrameExtents();if(r.multiply(Y),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Y.x),r.x=s.x*Y.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Y.y),r.y=s.y*Y.y,X.mapSize.y=s.y)),X.map===null||q===!0||L===!0){const tt=this.type!==sn?{minFilter:he,magFilter:he}:{};X.map!==null&&X.map.dispose(),X.map=new Xn(r.x,r.y,tt),X.map.texture.name=G.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const j=X.getViewportCount();for(let tt=0;tt<j;tt++){const rt=X.getViewport(tt);c.set(s.x*rt.x,s.y*rt.y,s.x*rt.z,s.y*rt.w),V.viewport(c),X.updateMatrices(G,tt),n=X.getFrustum(),R(C,k,X.camera,G,this.type)}X.isPointLightShadow!==!0&&this.type===sn&&A(X,k),X.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(W,_,y)};function A(w,C){const k=t.update(S);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xn(r.x,r.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,k,p,S,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,k,m,S,null)}function x(w,C,k,W){let _=null;const y=k.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(y!==void 0)_=y;else if(_=k.isPointLight===!0?o:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=_.uuid,q=C.uuid;let L=l[V];L===void 0&&(L={},l[V]=L);let B=L[q];B===void 0&&(B=_.clone(),L[q]=B,C.addEventListener("dispose",P)),_=B}if(_.visible=C.visible,_.wireframe=C.wireframe,W===sn?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:u[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,k.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const V=i.properties.get(_);V.light=k}return _}function R(w,C,k,W,_){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===sn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld);const q=t.update(w),L=w.material;if(Array.isArray(L)){const B=q.groups;for(let N=0,G=B.length;N<G;N++){const X=B[N],Y=L[X.materialIndex];if(Y&&Y.visible){const j=x(w,Y,W,_);w.onBeforeShadow(i,w,C,k,q,j,X),i.renderBufferDirect(k,null,q,j,w,X),w.onAfterShadow(i,w,C,k,q,j,X)}}}else if(L.visible){const B=x(w,L,W,_);w.onBeforeShadow(i,w,C,k,q,B,null),i.renderBufferDirect(k,null,q,B,w,null),w.onAfterShadow(i,w,C,k,q,B,null)}}const V=w.children;for(let q=0,L=V.length;q<L;q++)R(V[q],C,k,W,_)}function P(w){w.target.removeEventListener("dispose",P);for(const k in l){const W=l[k],_=w.target.uuid;_ in W&&(W[_].dispose(),delete W[_])}}}function Hp(i,t,e){const n=e.isWebGL2;function r(){let T=!1;const et=new ge;let nt=null;const ut=new ge(0,0,0,0);return{setMask:function(St){nt!==St&&!T&&(i.colorMask(St,St,St,St),nt=St)},setLocked:function(St){T=St},setClear:function(St,Wt,Kt,le,Re){Re===!0&&(St*=le,Wt*=le,Kt*=le),et.set(St,Wt,Kt,le),ut.equals(et)===!1&&(i.clearColor(St,Wt,Kt,le),ut.copy(et))},reset:function(){T=!1,nt=null,ut.set(-1,0,0,0)}}}function s(){let T=!1,et=null,nt=null,ut=null;return{setTest:function(St){St?dt(i.DEPTH_TEST):Ht(i.DEPTH_TEST)},setMask:function(St){et!==St&&!T&&(i.depthMask(St),et=St)},setFunc:function(St){if(nt!==St){switch(St){case ol:i.depthFunc(i.NEVER);break;case cl:i.depthFunc(i.ALWAYS);break;case ll:i.depthFunc(i.LESS);break;case Pr:i.depthFunc(i.LEQUAL);break;case hl:i.depthFunc(i.EQUAL);break;case ul:i.depthFunc(i.GEQUAL);break;case dl:i.depthFunc(i.GREATER);break;case fl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=St}},setLocked:function(St){T=St},setClear:function(St){ut!==St&&(i.clearDepth(St),ut=St)},reset:function(){T=!1,et=null,nt=null,ut=null}}}function c(){let T=!1,et=null,nt=null,ut=null,St=null,Wt=null,Kt=null,le=null,Re=null;return{setTest:function(qt){T||(qt?dt(i.STENCIL_TEST):Ht(i.STENCIL_TEST))},setMask:function(qt){et!==qt&&!T&&(i.stencilMask(qt),et=qt)},setFunc:function(qt,me,De){(nt!==qt||ut!==me||St!==De)&&(i.stencilFunc(qt,me,De),nt=qt,ut=me,St=De)},setOp:function(qt,me,De){(Wt!==qt||Kt!==me||le!==De)&&(i.stencilOp(qt,me,De),Wt=qt,Kt=me,le=De)},setLocked:function(qt){T=qt},setClear:function(qt){Re!==qt&&(i.clearStencil(qt),Re=qt)},reset:function(){T=!1,et=null,nt=null,ut=null,St=null,Wt=null,Kt=null,le=null,Re=null}}}const a=new r,o=new s,l=new c,h=new WeakMap,u=new WeakMap;let p={},m={},v=new WeakMap,S=[],f=null,d=!1,A=null,x=null,R=null,P=null,w=null,C=null,k=null,W=new kt(0,0,0),_=0,y=!1,V=null,q=null,L=null,B=null,N=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=Y>=1):j.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=Y>=2);let tt=null,rt={};const At=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),$=new ge().fromArray(At),lt=new ge().fromArray(H);function Mt(T,et,nt,ut){const St=new Uint8Array(4),Wt=i.createTexture();i.bindTexture(T,Wt),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<nt;Kt++)n&&(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)?i.texImage3D(et,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(et+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return Wt}const _t={};_t[i.TEXTURE_2D]=Mt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=Mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_t[i.TEXTURE_2D_ARRAY]=Mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=Mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),o.setClear(1),l.setClear(0),dt(i.DEPTH_TEST),o.setFunc(Pr),Pt(!1),E(Qs),dt(i.CULL_FACE),mt(Tn);function dt(T){p[T]!==!0&&(i.enable(T),p[T]=!0)}function Ht(T){p[T]!==!1&&(i.disable(T),p[T]=!1)}function Ct(T,et){return m[T]!==et?(i.bindFramebuffer(T,et),m[T]=et,n&&(T===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=et),T===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=et)),!0):!1}function D(T,et){let nt=S,ut=!1;if(T)if(nt=v.get(et),nt===void 0&&(nt=[],v.set(et,nt)),T.isWebGLMultipleRenderTargets){const St=T.texture;if(nt.length!==St.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let Wt=0,Kt=St.length;Wt<Kt;Wt++)nt[Wt]=i.COLOR_ATTACHMENT0+Wt;nt.length=St.length,ut=!0}}else nt[0]!==i.COLOR_ATTACHMENT0&&(nt[0]=i.COLOR_ATTACHMENT0,ut=!0);else nt[0]!==i.BACK&&(nt[0]=i.BACK,ut=!0);ut&&(e.isWebGL2?i.drawBuffers(nt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(nt))}function se(T){return f!==T?(i.useProgram(T),f=T,!0):!1}const vt={[Bn]:i.FUNC_ADD,[Yc]:i.FUNC_SUBTRACT,[qc]:i.FUNC_REVERSE_SUBTRACT};if(n)vt[na]=i.MIN,vt[ia]=i.MAX;else{const T=t.get("EXT_blend_minmax");T!==null&&(vt[na]=T.MIN_EXT,vt[ia]=T.MAX_EXT)}const Rt={[jc]:i.ZERO,[Kc]:i.ONE,[Zc]:i.SRC_COLOR,[Ls]:i.SRC_ALPHA,[nl]:i.SRC_ALPHA_SATURATE,[tl]:i.DST_COLOR,[Jc]:i.DST_ALPHA,[$c]:i.ONE_MINUS_SRC_COLOR,[Ps]:i.ONE_MINUS_SRC_ALPHA,[el]:i.ONE_MINUS_DST_COLOR,[Qc]:i.ONE_MINUS_DST_ALPHA,[il]:i.CONSTANT_COLOR,[rl]:i.ONE_MINUS_CONSTANT_COLOR,[sl]:i.CONSTANT_ALPHA,[al]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(T,et,nt,ut,St,Wt,Kt,le,Re,qt){if(T===Tn){d===!0&&(Ht(i.BLEND),d=!1);return}if(d===!1&&(dt(i.BLEND),d=!0),T!==Xc){if(T!==A||qt!==y){if((x!==Bn||w!==Bn)&&(i.blendEquation(i.FUNC_ADD),x=Bn,w=Bn),qt)switch(T){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yi:i.blendFunc(i.ONE,i.ONE);break;case ta:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ea:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ta:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ea:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}R=null,P=null,C=null,k=null,W.set(0,0,0),_=0,A=T,y=qt}return}St=St||et,Wt=Wt||nt,Kt=Kt||ut,(et!==x||St!==w)&&(i.blendEquationSeparate(vt[et],vt[St]),x=et,w=St),(nt!==R||ut!==P||Wt!==C||Kt!==k)&&(i.blendFuncSeparate(Rt[nt],Rt[ut],Rt[Wt],Rt[Kt]),R=nt,P=ut,C=Wt,k=Kt),(le.equals(W)===!1||Re!==_)&&(i.blendColor(le.r,le.g,le.b,Re),W.copy(le),_=Re),A=T,y=!1}function Xt(T,et){T.side===an?Ht(i.CULL_FACE):dt(i.CULL_FACE);let nt=T.side===we;et&&(nt=!nt),Pt(nt),T.blending===Ei&&T.transparent===!1?mt(Tn):mt(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),o.setFunc(T.depthFunc),o.setTest(T.depthTest),o.setMask(T.depthWrite),a.setMask(T.colorWrite);const ut=T.stencilWrite;l.setTest(ut),ut&&(l.setMask(T.stencilWriteMask),l.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),l.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),O(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):Ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(T){V!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),V=T)}function E(T){T!==Vc?(dt(i.CULL_FACE),T!==q&&(T===Qs?i.cullFace(i.BACK):T===kc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ht(i.CULL_FACE),q=T}function g(T){T!==L&&(X&&i.lineWidth(T),L=T)}function O(T,et,nt){T?(dt(i.POLYGON_OFFSET_FILL),(B!==et||N!==nt)&&(i.polygonOffset(et,nt),B=et,N=nt)):Ht(i.POLYGON_OFFSET_FILL)}function J(T){T?dt(i.SCISSOR_TEST):Ht(i.SCISSOR_TEST)}function K(T){T===void 0&&(T=i.TEXTURE0+G-1),tt!==T&&(i.activeTexture(T),tt=T)}function Q(T,et,nt){nt===void 0&&(tt===null?nt=i.TEXTURE0+G-1:nt=tt);let ut=rt[nt];ut===void 0&&(ut={type:void 0,texture:void 0},rt[nt]=ut),(ut.type!==T||ut.texture!==et)&&(tt!==nt&&(i.activeTexture(nt),tt=nt),i.bindTexture(T,et||_t[T]),ut.type=T,ut.texture=et)}function ft(){const T=rt[tt];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Et(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Z(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Bt(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function yt(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ct(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function It(T){$.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),$.copy(T))}function Vt(T){lt.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),lt.copy(T))}function Jt(T,et){let nt=u.get(et);nt===void 0&&(nt=new WeakMap,u.set(et,nt));let ut=nt.get(T);ut===void 0&&(ut=i.getUniformBlockIndex(et,T.name),nt.set(T,ut))}function bt(T,et){const ut=u.get(et).get(T);h.get(et)!==ut&&(i.uniformBlockBinding(et,ut,T.__bindingPointIndex),h.set(et,ut))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},tt=null,rt={},m={},v=new WeakMap,S=[],f=null,d=!1,A=null,x=null,R=null,P=null,w=null,C=null,k=null,W=new kt(0,0,0),_=0,y=!1,V=null,q=null,L=null,B=null,N=null,$.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),o.reset(),l.reset()}return{buffers:{color:a,depth:o,stencil:l},enable:dt,disable:Ht,bindFramebuffer:Ct,drawBuffers:D,useProgram:se,setBlending:mt,setMaterial:Xt,setFlipSided:Pt,setCullFace:E,setLineWidth:g,setPolygonOffset:O,setScissorTest:J,activeTexture:K,bindTexture:Q,unbindTexture:ft,compressedTexImage2D:at,compressedTexImage3D:ht,texImage2D:gt,texImage3D:ct,updateUBOMapping:Jt,uniformBlockBinding:bt,texStorage2D:Bt,texStorage3D:yt,texSubImage2D:Et,texSubImage3D:Ut,compressedTexSubImage2D:Z,compressedTexSubImage3D:Yt,scissor:It,viewport:Vt,reset:jt}}function Gp(i,t,e,n,r,s,c){const a=r.isWebGL2,o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,g){return m?new OffscreenCanvas(E,g):Or("canvas")}function S(E,g,O,J){let K=1;if((E.width>J||E.height>J)&&(K=J/Math.max(E.width,E.height)),K<1||g===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const Q=g?zs:Math.floor,ft=Q(K*E.width),at=Q(K*E.height);u===void 0&&(u=v(ft,at));const ht=O?v(ft,at):u;return ht.width=ft,ht.height=at,ht.getContext("2d").drawImage(E,0,0,ft,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ft+"x"+at+")."),ht}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function f(E){return Ia(E.width)&&Ia(E.height)}function d(E){return a?!1:E.wrapS!==Xe||E.wrapT!==Xe||E.minFilter!==he&&E.minFilter!==be}function A(E,g){return E.generateMipmaps&&g&&E.minFilter!==he&&E.minFilter!==be}function x(E){i.generateMipmap(E)}function R(E,g,O,J,K=!1){if(a===!1)return g;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Q=g;if(g===i.RED&&(O===i.FLOAT&&(Q=i.R32F),O===i.HALF_FLOAT&&(Q=i.R16F),O===i.UNSIGNED_BYTE&&(Q=i.R8)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.R8UI),O===i.UNSIGNED_SHORT&&(Q=i.R16UI),O===i.UNSIGNED_INT&&(Q=i.R32UI),O===i.BYTE&&(Q=i.R8I),O===i.SHORT&&(Q=i.R16I),O===i.INT&&(Q=i.R32I)),g===i.RG&&(O===i.FLOAT&&(Q=i.RG32F),O===i.HALF_FLOAT&&(Q=i.RG16F),O===i.UNSIGNED_BYTE&&(Q=i.RG8)),g===i.RGBA){const ft=K?Ir:$t.getTransfer(J);O===i.FLOAT&&(Q=i.RGBA32F),O===i.HALF_FLOAT&&(Q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Q=ft===ne?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function P(E,g,O){return A(E,O)===!0||E.isFramebufferTexture&&E.minFilter!==he&&E.minFilter!==be?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function w(E){return E===he||E===ra||E===Ii?i.NEAREST:i.LINEAR}function C(E){const g=E.target;g.removeEventListener("dispose",C),W(g),g.isVideoTexture&&h.delete(g)}function k(E){const g=E.target;g.removeEventListener("dispose",k),y(g)}function W(E){const g=n.get(E);if(g.__webglInit===void 0)return;const O=E.source,J=p.get(O);if(J){const K=J[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&_(E),Object.keys(J).length===0&&p.delete(O)}n.remove(E)}function _(E){const g=n.get(E);i.deleteTexture(g.__webglTexture);const O=E.source,J=p.get(O);delete J[g.__cacheKey],c.memory.textures--}function y(E){const g=E.texture,O=n.get(E),J=n.get(g);if(J.__webglTexture!==void 0&&(i.deleteTexture(J.__webglTexture),c.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(O.__webglFramebuffer[K]))for(let Q=0;Q<O.__webglFramebuffer[K].length;Q++)i.deleteFramebuffer(O.__webglFramebuffer[K][Q]);else i.deleteFramebuffer(O.__webglFramebuffer[K]);O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer[K])}else{if(Array.isArray(O.__webglFramebuffer))for(let K=0;K<O.__webglFramebuffer.length;K++)i.deleteFramebuffer(O.__webglFramebuffer[K]);else i.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&i.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let K=0;K<O.__webglColorRenderbuffer.length;K++)O.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(O.__webglColorRenderbuffer[K]);O.__webglDepthRenderbuffer&&i.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let K=0,Q=g.length;K<Q;K++){const ft=n.get(g[K]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),c.memory.textures--),n.remove(g[K])}n.remove(g),n.remove(E)}let V=0;function q(){V=0}function L(){const E=V;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),V+=1,E}function B(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function N(E,g){const O=n.get(E);if(E.isVideoTexture&&Xt(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,E,g);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function G(E,g){const O=n.get(E);if(E.version>0&&O.__version!==E.version){$(O,E,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function X(E,g){const O=n.get(E);if(E.version>0&&O.__version!==E.version){$(O,E,g);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function Y(E,g){const O=n.get(E);if(E.version>0&&O.__version!==E.version){lt(O,E,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}const j={[Us]:i.REPEAT,[Xe]:i.CLAMP_TO_EDGE,[Ns]:i.MIRRORED_REPEAT},tt={[he]:i.NEAREST,[ra]:i.NEAREST_MIPMAP_NEAREST,[Ii]:i.NEAREST_MIPMAP_LINEAR,[be]:i.LINEAR,[Yr]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},rt={[Ul]:i.NEVER,[Hl]:i.ALWAYS,[Nl]:i.LESS,[cc]:i.LEQUAL,[Ol]:i.EQUAL,[zl]:i.GEQUAL,[Fl]:i.GREATER,[Bl]:i.NOTEQUAL};function At(E,g,O){if(g.type===on&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===be||g.magFilter===Yr||g.magFilter===Ii||g.magFilter===Hn||g.minFilter===be||g.minFilter===Yr||g.minFilter===Ii||g.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),O?(i.texParameteri(E,i.TEXTURE_WRAP_S,j[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,j[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,j[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,tt[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,tt[g.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(g.wrapS!==Xe||g.wrapT!==Xe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,w(g.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,w(g.minFilter)),g.minFilter!==he&&g.minFilter!==be&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,rt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const J=t.get("EXT_texture_filter_anisotropic");if(g.magFilter===he||g.minFilter!==Ii&&g.minFilter!==Hn||g.type===on&&t.has("OES_texture_float_linear")===!1||a===!1&&g.type===Vi&&t.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||n.get(g).__currentAnisotropy)&&(i.texParameterf(E,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy)}}function H(E,g){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",C));const J=g.source;let K=p.get(J);K===void 0&&(K={},p.set(J,K));const Q=B(g);if(Q!==E.__cacheKey){K[Q]===void 0&&(K[Q]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,O=!0),K[Q].usedTimes++;const ft=K[E.__cacheKey];ft!==void 0&&(K[E.__cacheKey].usedTimes--,ft.usedTimes===0&&_(g)),E.__cacheKey=Q,E.__webglTexture=K[Q].texture}return O}function $(E,g,O){let J=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(J=i.TEXTURE_3D);const K=H(E,g),Q=g.source;e.bindTexture(J,E.__webglTexture,i.TEXTURE0+O);const ft=n.get(Q);if(Q.version!==ft.__version||K===!0){e.activeTexture(i.TEXTURE0+O);const at=$t.getPrimaries($t.workingColorSpace),ht=g.colorSpace===Fe?null:$t.getPrimaries(g.colorSpace),Et=g.colorSpace===Fe||at===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Ut=d(g)&&f(g.image)===!1;let Z=S(g.image,Ut,!1,r.maxTextureSize);Z=Pt(g,Z);const Yt=f(Z)||a,Bt=s.convert(g.format,g.colorSpace);let yt=s.convert(g.type),gt=R(g.internalFormat,Bt,yt,g.colorSpace,g.isVideoTexture);At(J,g,Yt);let ct;const It=g.mipmaps,Vt=a&&g.isVideoTexture!==!0&&gt!==ac,Jt=ft.__version===void 0||K===!0,bt=Q.dataReady,jt=P(g,Z,Yt);if(g.isDepthTexture)gt=i.DEPTH_COMPONENT,a?g.type===on?gt=i.DEPTH_COMPONENT32F:g.type===En?gt=i.DEPTH_COMPONENT24:g.type===Gn?gt=i.DEPTH24_STENCIL8:gt=i.DEPTH_COMPONENT16:g.type===on&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Vn&&gt===i.DEPTH_COMPONENT&&g.type!==Ys&&g.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=En,yt=s.convert(g.type)),g.format===bi&&gt===i.DEPTH_COMPONENT&&(gt=i.DEPTH_STENCIL,g.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Gn,yt=s.convert(g.type))),Jt&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,gt,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,gt,Z.width,Z.height,0,Bt,yt,null));else if(g.isDataTexture)if(It.length>0&&Yt){Vt&&Jt&&e.texStorage2D(i.TEXTURE_2D,jt,gt,It[0].width,It[0].height);for(let T=0,et=It.length;T<et;T++)ct=It[T],Vt?bt&&e.texSubImage2D(i.TEXTURE_2D,T,0,0,ct.width,ct.height,Bt,yt,ct.data):e.texImage2D(i.TEXTURE_2D,T,gt,ct.width,ct.height,0,Bt,yt,ct.data);g.generateMipmaps=!1}else Vt?(Jt&&e.texStorage2D(i.TEXTURE_2D,jt,gt,Z.width,Z.height),bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,Bt,yt,Z.data)):e.texImage2D(i.TEXTURE_2D,0,gt,Z.width,Z.height,0,Bt,yt,Z.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Vt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,jt,gt,It[0].width,It[0].height,Z.depth);for(let T=0,et=It.length;T<et;T++)ct=It[T],g.format!==Ye?Bt!==null?Vt?bt&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,T,0,0,0,ct.width,ct.height,Z.depth,Bt,ct.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,T,gt,ct.width,ct.height,Z.depth,0,ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,T,0,0,0,ct.width,ct.height,Z.depth,Bt,yt,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,T,gt,ct.width,ct.height,Z.depth,0,Bt,yt,ct.data)}else{Vt&&Jt&&e.texStorage2D(i.TEXTURE_2D,jt,gt,It[0].width,It[0].height);for(let T=0,et=It.length;T<et;T++)ct=It[T],g.format!==Ye?Bt!==null?Vt?bt&&e.compressedTexSubImage2D(i.TEXTURE_2D,T,0,0,ct.width,ct.height,Bt,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,T,gt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?bt&&e.texSubImage2D(i.TEXTURE_2D,T,0,0,ct.width,ct.height,Bt,yt,ct.data):e.texImage2D(i.TEXTURE_2D,T,gt,ct.width,ct.height,0,Bt,yt,ct.data)}else if(g.isDataArrayTexture)Vt?(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,jt,gt,Z.width,Z.height,Z.depth),bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Bt,yt,Z.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,Z.width,Z.height,Z.depth,0,Bt,yt,Z.data);else if(g.isData3DTexture)Vt?(Jt&&e.texStorage3D(i.TEXTURE_3D,jt,gt,Z.width,Z.height,Z.depth),bt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Bt,yt,Z.data)):e.texImage3D(i.TEXTURE_3D,0,gt,Z.width,Z.height,Z.depth,0,Bt,yt,Z.data);else if(g.isFramebufferTexture){if(Jt)if(Vt)e.texStorage2D(i.TEXTURE_2D,jt,gt,Z.width,Z.height);else{let T=Z.width,et=Z.height;for(let nt=0;nt<jt;nt++)e.texImage2D(i.TEXTURE_2D,nt,gt,T,et,0,Bt,yt,null),T>>=1,et>>=1}}else if(It.length>0&&Yt){Vt&&Jt&&e.texStorage2D(i.TEXTURE_2D,jt,gt,It[0].width,It[0].height);for(let T=0,et=It.length;T<et;T++)ct=It[T],Vt?bt&&e.texSubImage2D(i.TEXTURE_2D,T,0,0,Bt,yt,ct):e.texImage2D(i.TEXTURE_2D,T,gt,Bt,yt,ct);g.generateMipmaps=!1}else Vt?(Jt&&e.texStorage2D(i.TEXTURE_2D,jt,gt,Z.width,Z.height),bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Bt,yt,Z)):e.texImage2D(i.TEXTURE_2D,0,gt,Bt,yt,Z);A(g,Yt)&&x(J),ft.__version=Q.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function lt(E,g,O){if(g.image.length!==6)return;const J=H(E,g),K=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const Q=n.get(K);if(K.version!==Q.__version||J===!0){e.activeTexture(i.TEXTURE0+O);const ft=$t.getPrimaries($t.workingColorSpace),at=g.colorSpace===Fe?null:$t.getPrimaries(g.colorSpace),ht=g.colorSpace===Fe||ft===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Et=g.isCompressedTexture||g.image[0].isCompressedTexture,Ut=g.image[0]&&g.image[0].isDataTexture,Z=[];for(let T=0;T<6;T++)!Et&&!Ut?Z[T]=S(g.image[T],!1,!0,r.maxCubemapSize):Z[T]=Ut?g.image[T].image:g.image[T],Z[T]=Pt(g,Z[T]);const Yt=Z[0],Bt=f(Yt)||a,yt=s.convert(g.format,g.colorSpace),gt=s.convert(g.type),ct=R(g.internalFormat,yt,gt,g.colorSpace),It=a&&g.isVideoTexture!==!0,Vt=Q.__version===void 0||J===!0,Jt=K.dataReady;let bt=P(g,Yt,Bt);At(i.TEXTURE_CUBE_MAP,g,Bt);let jt;if(Et){It&&Vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,ct,Yt.width,Yt.height);for(let T=0;T<6;T++){jt=Z[T].mipmaps;for(let et=0;et<jt.length;et++){const nt=jt[et];g.format!==Ye?yt!==null?It?Jt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,et,0,0,nt.width,nt.height,yt,nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,et,ct,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?Jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,et,0,0,nt.width,nt.height,yt,gt,nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,et,ct,nt.width,nt.height,0,yt,gt,nt.data)}}}else{jt=g.mipmaps,It&&Vt&&(jt.length>0&&bt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,ct,Z[0].width,Z[0].height));for(let T=0;T<6;T++)if(Ut){It?Jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,Z[T].width,Z[T].height,yt,gt,Z[T].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,ct,Z[T].width,Z[T].height,0,yt,gt,Z[T].data);for(let et=0;et<jt.length;et++){const ut=jt[et].image[T].image;It?Jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,et+1,0,0,ut.width,ut.height,yt,gt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,et+1,ct,ut.width,ut.height,0,yt,gt,ut.data)}}else{It?Jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,yt,gt,Z[T]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,ct,yt,gt,Z[T]);for(let et=0;et<jt.length;et++){const nt=jt[et];It?Jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,et+1,0,0,yt,gt,nt.image[T]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,et+1,ct,yt,gt,nt.image[T])}}}A(g,Bt)&&x(i.TEXTURE_CUBE_MAP),Q.__version=K.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Mt(E,g,O,J,K,Q){const ft=s.convert(O.format,O.colorSpace),at=s.convert(O.type),ht=R(O.internalFormat,ft,at,O.colorSpace);if(!n.get(g).__hasExternalTextures){const Ut=Math.max(1,g.width>>Q),Z=Math.max(1,g.height>>Q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,Q,ht,Ut,Z,g.depth,0,ft,at,null):e.texImage2D(K,Q,ht,Ut,Z,0,ft,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,K,n.get(O).__webglTexture,0,Rt(g)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,K,n.get(O).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(E,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer&&!g.stencilBuffer){let J=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(O||mt(g)){const K=g.depthTexture;K&&K.isDepthTexture&&(K.type===on?J=i.DEPTH_COMPONENT32F:K.type===En&&(J=i.DEPTH_COMPONENT24));const Q=Rt(g);mt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,J,g.width,g.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,J,g.width,g.height)}else i.renderbufferStorage(i.RENDERBUFFER,J,g.width,g.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(g.depthBuffer&&g.stencilBuffer){const J=Rt(g);O&&mt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,g.width,g.height):mt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const J=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let K=0;K<J.length;K++){const Q=J[K],ft=s.convert(Q.format,Q.colorSpace),at=s.convert(Q.type),ht=R(Q.internalFormat,ft,at,Q.colorSpace),Et=Rt(g);O&&mt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,ht,g.width,g.height):mt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,ht,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ht,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),N(g.depthTexture,0);const J=n.get(g.depthTexture).__webglTexture,K=Rt(g);if(g.depthTexture.format===Vn)mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(g.depthTexture.format===bi)mt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ht(E){const g=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");dt(g.__webglFramebuffer,E)}else if(O){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]=i.createRenderbuffer(),_t(g.__webglDepthbuffer[J],E,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=i.createRenderbuffer(),_t(g.__webglDepthbuffer,E,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(E,g,O){const J=n.get(E);g!==void 0&&Mt(J.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ht(E)}function D(E){const g=E.texture,O=n.get(E),J=n.get(g);E.addEventListener("dispose",k),E.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=g.version,c.memory.textures++);const K=E.isWebGLCubeRenderTarget===!0,Q=E.isWebGLMultipleRenderTargets===!0,ft=f(E)||a;if(K){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(a&&g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let ht=0;ht<g.mipmaps.length;ht++)O.__webglFramebuffer[at][ht]=i.createFramebuffer()}else O.__webglFramebuffer[at]=i.createFramebuffer()}else{if(a&&g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<g.mipmaps.length;at++)O.__webglFramebuffer[at]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Q)if(r.drawBuffers){const at=E.texture;for(let ht=0,Et=at.length;ht<Et;ht++){const Ut=n.get(at[ht]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&mt(E)===!1){const at=Q?g:[g];O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ht=0;ht<at.length;ht++){const Et=at[ht];O.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ht]);const Ut=s.convert(Et.format,Et.colorSpace),Z=s.convert(Et.type),Yt=R(Et.internalFormat,Ut,Z,Et.colorSpace,E.isXRRenderTarget===!0),Bt=Rt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Yt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,O.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),At(i.TEXTURE_CUBE_MAP,g,ft);for(let at=0;at<6;at++)if(a&&g.mipmaps&&g.mipmaps.length>0)for(let ht=0;ht<g.mipmaps.length;ht++)Mt(O.__webglFramebuffer[at][ht],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ht);else Mt(O.__webglFramebuffer[at],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);A(g,ft)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){const at=E.texture;for(let ht=0,Et=at.length;ht<Et;ht++){const Ut=at[ht],Z=n.get(Ut);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture),At(i.TEXTURE_2D,Ut,ft),Mt(O.__webglFramebuffer,E,Ut,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),A(Ut,ft)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?at=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,J.__webglTexture),At(at,g,ft),a&&g.mipmaps&&g.mipmaps.length>0)for(let ht=0;ht<g.mipmaps.length;ht++)Mt(O.__webglFramebuffer[ht],E,g,i.COLOR_ATTACHMENT0,at,ht);else Mt(O.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,at,0);A(g,ft)&&x(at),e.unbindTexture()}E.depthBuffer&&Ht(E)}function se(E){const g=f(E)||a,O=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let J=0,K=O.length;J<K;J++){const Q=O[J];if(A(Q,g)){const ft=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,at=n.get(Q).__webglTexture;e.bindTexture(ft,at),x(ft),e.unbindTexture()}}}function vt(E){if(a&&E.samples>0&&mt(E)===!1){const g=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],O=E.width,J=E.height;let K=i.COLOR_BUFFER_BIT;const Q=[],ft=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(E),ht=E.isWebGLMultipleRenderTargets===!0;if(ht)for(let Et=0;Et<g.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let Et=0;Et<g.length;Et++){Q.push(i.COLOR_ATTACHMENT0+Et),E.depthBuffer&&Q.push(ft);const Ut=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(Ut===!1&&(E.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ht&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[Et]),Ut===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ft]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ft])),ht){const Z=n.get(g[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,O,J,0,0,O,J,K,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let Et=0;Et<g.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,at.__webglColorRenderbuffer[Et]);const Ut=n.get(g[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Rt(E){return Math.min(r.maxSamples,E.samples)}function mt(E){const g=n.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Xt(E){const g=c.render.frame;h.get(E)!==g&&(h.set(E,g),E.update())}function Pt(E,g){const O=E.colorSpace,J=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Fs||O!==fn&&O!==Fe&&($t.getTransfer(O)===ne?a===!1?t.has("EXT_sRGB")===!0&&J===Ye?(E.format=Fs,E.minFilter=be,E.generateMipmaps=!1):g=hc.sRGBToLinear(g):(J!==Ye||K!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),g}this.allocateTextureUnit=L,this.resetTextureUnits=q,this.setTexture2D=N,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=Y,this.rebindTextures=Ct,this.setupRenderTarget=D,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=mt}function Vp(i,t,e){const n=e.isWebGL2;function r(s,c=Fe){let a;const o=$t.getTransfer(c);if(s===Rn)return i.UNSIGNED_BYTE;if(s===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(s===nc)return i.UNSIGNED_SHORT_5_5_5_1;if(s===El)return i.BYTE;if(s===yl)return i.SHORT;if(s===Ys)return i.UNSIGNED_SHORT;if(s===tc)return i.INT;if(s===En)return i.UNSIGNED_INT;if(s===on)return i.FLOAT;if(s===Vi)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Tl)return i.ALPHA;if(s===Ye)return i.RGBA;if(s===Al)return i.LUMINANCE;if(s===Rl)return i.LUMINANCE_ALPHA;if(s===Vn)return i.DEPTH_COMPONENT;if(s===bi)return i.DEPTH_STENCIL;if(s===Fs)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===bl)return i.RED;if(s===ic)return i.RED_INTEGER;if(s===Cl)return i.RG;if(s===rc)return i.RG_INTEGER;if(s===sc)return i.RGBA_INTEGER;if(s===qr||s===jr||s===Kr||s===Zr)if(o===ne)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===qr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===qr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sa||s===aa||s===oa||s===ca)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===sa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===aa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===oa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ca)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ac)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===la||s===ha)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===la)return o===ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ha)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ua||s===da||s===fa||s===pa||s===ma||s===_a||s===ga||s===va||s===Sa||s===Ma||s===xa||s===Ea||s===ya||s===Ta)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ua)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===da)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fa)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pa)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ma)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_a)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ga)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===va)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sa)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ma)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xa)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ea)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ya)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ta)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$r||s===Aa||s===Ra)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===$r)return o===ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Aa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ra)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===wl||s===ba||s===Ca||s===wa)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===$r)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ba)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ca)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Gn?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class kp extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xr extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wp={type:"move"};class Es{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,c=null;const a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){c=!0;for(const S of t.hand.values()){const f=e.getJointPose(S,n),d=this._getHandJoint(l,S);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,v=.005;l.inputState.pinching&&p>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wp)))}return a!==null&&(a.visible=r!==null),o!==null&&(o.visible=s!==null),l!==null&&(l.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Xp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yp=`
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

}`;class qp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ae,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,r=new wn({extensions:{fragDepth:!0},vertexShader:Xp,fragmentShader:Yp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ln(new Hr(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class jp extends wi{constructor(t,e){super();const n=this;let r=null,s=1,c=null,a="local-floor",o=1,l=null,h=null,u=null,p=null,m=null,v=null;const S=new qp,f=e.getContextAttributes();let d=null,A=null;const x=[],R=[],P=new Gt;let w=null;const C=new We;C.layers.enable(1),C.viewport=new ge;const k=new We;k.layers.enable(2),k.viewport=new ge;const W=[C,k],_=new kp;_.layers.enable(1),_.layers.enable(2);let y=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=x[H];return $===void 0&&($=new Es,x[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=x[H];return $===void 0&&($=new Es,x[H]=$),$.getGripSpace()},this.getHand=function(H){let $=x[H];return $===void 0&&($=new Es,x[H]=$),$.getHandSpace()};function q(H){const $=R.indexOf(H.inputSource);if($===-1)return;const lt=x[$];lt!==void 0&&(lt.update(H.inputSource,H.frame,l||c),lt.dispatchEvent({type:H.type,data:H.inputSource}))}function L(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",B);for(let H=0;H<x.length;H++){const $=R[H];$!==null&&(R[H]=null,x[H].disconnect($))}y=null,V=null,S.reset(),t.setRenderTarget(d),m=null,p=null,u=null,r=null,A=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||c},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",L),r.addEventListener("inputsourceschange",B),f.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(P),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,$),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Xn(m.framebufferWidth,m.framebufferHeight,{format:Ye,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let $=null,lt=null,Mt=null;f.depth&&(Mt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=f.stencil?bi:Vn,lt=f.stencil?Gn:En);const _t={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};u=new XRWebGLBinding(r,e),p=u.createProjectionLayer(_t),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),A=new Xn(p.textureWidth,p.textureHeight,{format:Ye,type:Rn,depthTexture:new Tc(p.textureWidth,p.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0});const dt=t.properties.get(A);dt.__ignoreDepthValues=p.ignoreDepthValues}A.isXRRenderTarget=!0,this.setFoveation(o),l=null,c=await r.requestReferenceSpace(a),At.setContext(r),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(H){for(let $=0;$<H.removed.length;$++){const lt=H.removed[$],Mt=R.indexOf(lt);Mt>=0&&(R[Mt]=null,x[Mt].disconnect(lt))}for(let $=0;$<H.added.length;$++){const lt=H.added[$];let Mt=R.indexOf(lt);if(Mt===-1){for(let dt=0;dt<x.length;dt++)if(dt>=R.length){R.push(lt),Mt=dt;break}else if(R[dt]===null){R[dt]=lt,Mt=dt;break}if(Mt===-1)break}const _t=x[Mt];_t&&_t.connect(lt)}}const N=new b,G=new b;function X(H,$,lt){N.setFromMatrixPosition($.matrixWorld),G.setFromMatrixPosition(lt.matrixWorld);const Mt=N.distanceTo(G),_t=$.projectionMatrix.elements,dt=lt.projectionMatrix.elements,Ht=_t[14]/(_t[10]-1),Ct=_t[14]/(_t[10]+1),D=(_t[9]+1)/_t[5],se=(_t[9]-1)/_t[5],vt=(_t[8]-1)/_t[0],Rt=(dt[8]+1)/dt[0],mt=Ht*vt,Xt=Ht*Rt,Pt=Mt/(-vt+Rt),E=Pt*-vt;$.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(E),H.translateZ(Pt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const g=Ht+Pt,O=Ct+Pt,J=mt-E,K=Xt+(Mt-E),Q=D*Ct/O*g,ft=se*Ct/O*g;H.projectionMatrix.makePerspective(J,K,Q,ft,g,O),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function Y(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;S.texture!==null&&(H.near=S.depthNear,H.far=S.depthFar),_.near=k.near=C.near=H.near,_.far=k.far=C.far=H.far,(y!==_.near||V!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,V=_.far,C.near=y,C.far=V,k.near=y,k.far=V,C.updateProjectionMatrix(),k.updateProjectionMatrix(),H.updateProjectionMatrix());const $=H.parent,lt=_.cameras;Y(_,$);for(let Mt=0;Mt<lt.length;Mt++)Y(lt[Mt],$);lt.length===2?X(_,C,k):_.projectionMatrix.copy(C.projectionMatrix),j(H,_,$)};function j(H,$,lt){lt===null?H.matrix.copy($.matrixWorld):(H.matrix.copy(lt.matrixWorld),H.matrix.invert(),H.matrix.multiply($.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Bs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(p===null&&m===null))return o},this.setFoveation=function(H){o=H,p!==null&&(p.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return S.texture!==null};let tt=null;function rt(H,$){if(h=$.getViewerPose(l||c),v=$,h!==null){const lt=h.views;m!==null&&(t.setRenderTargetFramebuffer(A,m.framebuffer),t.setRenderTarget(A));let Mt=!1;lt.length!==_.cameras.length&&(_.cameras.length=0,Mt=!0);for(let dt=0;dt<lt.length;dt++){const Ht=lt[dt];let Ct=null;if(m!==null)Ct=m.getViewport(Ht);else{const se=u.getViewSubImage(p,Ht);Ct=se.viewport,dt===0&&(t.setRenderTargetTextures(A,se.colorTexture,p.ignoreDepthValues?void 0:se.depthStencilTexture),t.setRenderTarget(A))}let D=W[dt];D===void 0&&(D=new We,D.layers.enable(dt),D.viewport=new ge,W[dt]=D),D.matrix.fromArray(Ht.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Ht.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),dt===0&&(_.matrix.copy(D.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Mt===!0&&_.cameras.push(D)}const _t=r.enabledFeatures;if(_t&&_t.includes("depth-sensing")){const dt=u.getDepthInformation(lt[0]);dt&&dt.isValid&&dt.texture&&S.init(t,dt,r.renderState)}}for(let lt=0;lt<x.length;lt++){const Mt=R[lt],_t=x[lt];Mt!==null&&_t!==void 0&&_t.update(Mt,$,l||c)}S.render(t,_),tt&&tt(H,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),v=null}const At=new Ec;At.setAnimationLoop(rt),this.setAnimationLoop=function(H){tt=H},this.dispose=function(){}}}function Kp(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,vc(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function r(f,d,A,x,R){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(f,d):d.isMeshToonMaterial?(s(f,d),u(f,d)):d.isMeshPhongMaterial?(s(f,d),h(f,d)):d.isMeshStandardMaterial?(s(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,R)):d.isMeshMatcapMaterial?(s(f,d),v(f,d)):d.isMeshDepthMaterial?s(f,d):d.isMeshDistanceMaterial?(s(f,d),S(f,d)):d.isMeshNormalMaterial?s(f,d):d.isLineBasicMaterial?(c(f,d),d.isLineDashedMaterial&&a(f,d)):d.isPointsMaterial?o(f,d,A,x):d.isSpriteMaterial?l(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===we&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===we&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const A=t.get(d).envMap;if(A&&(f.envMap.value=A,f.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap){f.lightMap.value=d.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,f.lightMapTransform)}d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function a(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function o(f,d,A,x){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*A,f.scale.value=x*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function l(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function u(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),t.get(d).envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,A){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===we&&f.clearcoatNormalScale.value.negate())),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=A.texture,f.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,d){d.matcap&&(f.matcap.value=d.matcap)}function S(f,d){const A=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(A.matrixWorld),f.nearDistance.value=A.shadow.camera.near,f.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Zp(i,t,e,n){let r={},s={},c=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function o(A,x){const R=x.program;n.uniformBlockBinding(A,R)}function l(A,x){let R=r[A.id];R===void 0&&(v(A),R=h(A),r[A.id]=R,A.addEventListener("dispose",f));const P=x.program;n.updateUBOMapping(A,P);const w=t.render.frame;s[A.id]!==w&&(p(A),s[A.id]=w)}function h(A){const x=u();A.__bindingPointIndex=x;const R=i.createBuffer(),P=A.__size,w=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,P,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,R),R}function u(){for(let A=0;A<a;A++)if(c.indexOf(A)===-1)return c.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(A){const x=r[A.id],R=A.uniforms,P=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,C=R.length;w<C;w++){const k=Array.isArray(R[w])?R[w]:[R[w]];for(let W=0,_=k.length;W<_;W++){const y=k[W];if(m(y,w,W,P)===!0){const V=y.__offset,q=Array.isArray(y.value)?y.value:[y.value];let L=0;for(let B=0;B<q.length;B++){const N=q[B],G=S(N);typeof N=="number"||typeof N=="boolean"?(y.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,V+L,y.__data)):N.isMatrix3?(y.__data[0]=N.elements[0],y.__data[1]=N.elements[1],y.__data[2]=N.elements[2],y.__data[3]=0,y.__data[4]=N.elements[3],y.__data[5]=N.elements[4],y.__data[6]=N.elements[5],y.__data[7]=0,y.__data[8]=N.elements[6],y.__data[9]=N.elements[7],y.__data[10]=N.elements[8],y.__data[11]=0):(N.toArray(y.__data,L),L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,x,R,P){const w=A.value,C=x+"_"+R;if(P[C]===void 0)return typeof w=="number"||typeof w=="boolean"?P[C]=w:P[C]=w.clone(),!0;{const k=P[C];if(typeof w=="number"||typeof w=="boolean"){if(k!==w)return P[C]=w,!0}else if(k.equals(w)===!1)return k.copy(w),!0}return!1}function v(A){const x=A.uniforms;let R=0;const P=16;for(let C=0,k=x.length;C<k;C++){const W=Array.isArray(x[C])?x[C]:[x[C]];for(let _=0,y=W.length;_<y;_++){const V=W[_],q=Array.isArray(V.value)?V.value:[V.value];for(let L=0,B=q.length;L<B;L++){const N=q[L],G=S(N),X=R%P;X!==0&&P-X<G.boundary&&(R+=P-X),V.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=R,R+=G.storage}}}const w=R%P;return w>0&&(R+=P-w),A.__size=R,A.__cache={},this}function S(A){const x={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(x.boundary=4,x.storage=4):A.isVector2?(x.boundary=8,x.storage=8):A.isVector3||A.isColor?(x.boundary=16,x.storage=12):A.isVector4?(x.boundary=16,x.storage=16):A.isMatrix3?(x.boundary=48,x.storage=48):A.isMatrix4?(x.boundary=64,x.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),x}function f(A){const x=A.target;x.removeEventListener("dispose",f);const R=c.indexOf(x.__bindingPointIndex);c.splice(R,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const A in r)i.deleteBuffer(r[A]);c=[],r={},s={}}return{bind:o,update:l,dispose:d}}class Lc{constructor(t={}){const{canvas:e=Vl(),context:n=null,depth:r=!0,stencil:s=!0,alpha:c=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=c;const m=new Uint32Array(4),v=new Int32Array(4);let S=null,f=null;const d=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_e,this._useLegacyLights=!1,this.toneMapping=An,this.toneMappingExposure=1;const x=this;let R=!1,P=0,w=0,C=null,k=-1,W=null;const _=new ge,y=new ge;let V=null;const q=new kt(0);let L=0,B=e.width,N=e.height,G=1,X=null,Y=null;const j=new ge(0,0,B,N),tt=new ge(0,0,B,N);let rt=!1;const At=new xc;let H=!1,$=!1,lt=null;const Mt=new ce,_t=new Gt,dt=new b,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ct(){return C===null?G:1}let D=n;function se(M,I){for(let U=0;U<M.length;U++){const z=M[U],F=e.getContext(z,I);if(F!==null)return F}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xs}`),e.addEventListener("webglcontextlost",jt,!1),e.addEventListener("webglcontextrestored",T,!1),e.addEventListener("webglcontextcreationerror",et,!1),D===null){const I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),D=se(I,M),D===null)throw se(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let vt,Rt,mt,Xt,Pt,E,g,O,J,K,Q,ft,at,ht,Et,Ut,Z,Yt,Bt,yt,gt,ct,It,Vt;function Jt(){vt=new nf(D),Rt=new Zd(D,vt,t),vt.init(Rt),ct=new Vp(D,vt,Rt),mt=new Hp(D,vt,Rt),Xt=new af(D),Pt=new Rp,E=new Gp(D,vt,mt,Pt,Rt,ct,Xt),g=new Jd(x),O=new ef(x),J=new fh(D,Rt),It=new jd(D,vt,J,Rt),K=new rf(D,J,Xt,It),Q=new hf(D,K,J,Xt),Bt=new lf(D,Rt,E),Ut=new $d(Pt),ft=new Ap(x,g,O,vt,Rt,It,Ut),at=new Kp(x,Pt),ht=new Cp,Et=new Up(vt,Rt),Yt=new qd(x,g,O,mt,Q,p,o),Z=new zp(x,Q,Rt),Vt=new Zp(D,Xt,Rt,mt),yt=new Kd(D,vt,Xt,Rt),gt=new sf(D,vt,Xt,Rt),Xt.programs=ft.programs,x.capabilities=Rt,x.extensions=vt,x.properties=Pt,x.renderLists=ht,x.shadowMap=Z,x.state=mt,x.info=Xt}Jt();const bt=new jp(x,D);this.xr=bt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=vt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=vt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize(B,N,!1))},this.getSize=function(M){return M.set(B,N)},this.setSize=function(M,I,U=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=M,N=I,e.width=Math.floor(M*G),e.height=Math.floor(I*G),U===!0&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(B*G,N*G).floor()},this.setDrawingBufferSize=function(M,I,U){B=M,N=I,G=U,e.width=Math.floor(M*U),e.height=Math.floor(I*U),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(_)},this.getViewport=function(M){return M.copy(j)},this.setViewport=function(M,I,U,z){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,I,U,z),mt.viewport(_.copy(j).multiplyScalar(G).floor())},this.getScissor=function(M){return M.copy(tt)},this.setScissor=function(M,I,U,z){M.isVector4?tt.set(M.x,M.y,M.z,M.w):tt.set(M,I,U,z),mt.scissor(y.copy(tt).multiplyScalar(G).floor())},this.getScissorTest=function(){return rt},this.setScissorTest=function(M){mt.setScissorTest(rt=M)},this.setOpaqueSort=function(M){X=M},this.setTransparentSort=function(M){Y=M},this.getClearColor=function(M){return M.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(M=!0,I=!0,U=!0){let z=0;if(M){let F=!1;if(C!==null){const ot=C.texture.format;F=ot===sc||ot===rc||ot===ic}if(F){const ot=C.texture.type,pt=ot===Rn||ot===En||ot===Ys||ot===Gn||ot===ec||ot===nc,xt=Yt.getClearColor(),Tt=Yt.getClearAlpha(),Dt=xt.r,wt=xt.g,Lt=xt.b;pt?(m[0]=Dt,m[1]=wt,m[2]=Lt,m[3]=Tt,D.clearBufferuiv(D.COLOR,0,m)):(v[0]=Dt,v[1]=wt,v[2]=Lt,v[3]=Tt,D.clearBufferiv(D.COLOR,0,v))}else z|=D.COLOR_BUFFER_BIT}I&&(z|=D.DEPTH_BUFFER_BIT),U&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",jt,!1),e.removeEventListener("webglcontextrestored",T,!1),e.removeEventListener("webglcontextcreationerror",et,!1),ht.dispose(),Et.dispose(),Pt.dispose(),g.dispose(),O.dispose(),Q.dispose(),It.dispose(),Vt.dispose(),ft.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Re),bt.removeEventListener("sessionend",qt),lt&&(lt.dispose(),lt=null),me.stop()};function jt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function T(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const M=Xt.autoReset,I=Z.enabled,U=Z.autoUpdate,z=Z.needsUpdate,F=Z.type;Jt(),Xt.autoReset=M,Z.enabled=I,Z.autoUpdate=U,Z.needsUpdate=z,Z.type=F}function et(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function nt(M){const I=M.target;I.removeEventListener("dispose",nt),ut(I)}function ut(M){St(M),Pt.remove(M)}function St(M){const I=Pt.get(M).programs;I!==void 0&&(I.forEach(function(U){ft.releaseProgram(U)}),M.isShaderMaterial&&ft.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,U,z,F,ot){I===null&&(I=Ht);const pt=F.isMesh&&F.matrixWorld.determinant()<0,xt=Kn(M,I,U,z,F);mt.setMaterial(z,pt);let Tt=U.index,Dt=1;if(z.wireframe===!0){if(Tt=K.getWireframeAttribute(U),Tt===void 0)return;Dt=2}const wt=U.drawRange,Lt=U.attributes.position;let Qt=wt.start*Dt,re=(wt.start+wt.count)*Dt;ot!==null&&(Qt=Math.max(Qt,ot.start*Dt),re=Math.min(re,(ot.start+ot.count)*Dt)),Tt!==null?(Qt=Math.max(Qt,0),re=Math.min(re,Tt.count)):Lt!=null&&(Qt=Math.max(Qt,0),re=Math.min(re,Lt.count));const ae=re-Qt;if(ae<0||ae===1/0)return;It.setup(F,z,xt,U,Tt);let He,te=yt;if(Tt!==null&&(He=J.get(Tt),te=gt,te.setIndex(He)),F.isMesh)z.wireframe===!0?(mt.setLineWidth(z.wireframeLinewidth*Ct()),te.setMode(D.LINES)):te.setMode(D.TRIANGLES);else if(F.isLine){let Nt=z.linewidth;Nt===void 0&&(Nt=1),mt.setLineWidth(Nt*Ct()),F.isLineSegments?te.setMode(D.LINES):F.isLineLoop?te.setMode(D.LINE_LOOP):te.setMode(D.LINE_STRIP)}else F.isPoints?te.setMode(D.POINTS):F.isSprite&&te.setMode(D.TRIANGLES);if(F.isBatchedMesh)te.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)te.renderInstances(Qt,ae,F.count);else if(U.isInstancedBufferGeometry){const Nt=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,Je=Math.min(U.instanceCount,Nt);te.renderInstances(Qt,ae,Je)}else te.render(Qt,ae)};function Wt(M,I,U){M.transparent===!0&&M.side===an&&M.forceSinglePass===!1?(M.side=we,M.needsUpdate=!0,jn(M,I,U),M.side=Cn,M.needsUpdate=!0,jn(M,I,U),M.side=an):jn(M,I,U)}this.compile=function(M,I,U=null){U===null&&(U=M),f=Et.get(U),f.init(),A.push(f),U.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),M!==U&&M.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights(x._useLegacyLights);const z=new Set;return M.traverse(function(F){const ot=F.material;if(ot)if(Array.isArray(ot))for(let pt=0;pt<ot.length;pt++){const xt=ot[pt];Wt(xt,U,F),z.add(xt)}else Wt(ot,U,F),z.add(ot)}),A.pop(),f=null,z},this.compileAsync=function(M,I,U=null){const z=this.compile(M,I,U);return new Promise(F=>{function ot(){if(z.forEach(function(pt){Pt.get(pt).currentProgram.isReady()&&z.delete(pt)}),z.size===0){F(M);return}setTimeout(ot,10)}vt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Kt=null;function le(M){Kt&&Kt(M)}function Re(){me.stop()}function qt(){me.start()}const me=new Ec;me.setAnimationLoop(le),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(M){Kt=M,bt.setAnimationLoop(M),M===null?me.stop():me.start()},bt.addEventListener("sessionstart",Re),bt.addEventListener("sessionend",qt),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(I),I=bt.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,I,C),f=Et.get(M,A.length),f.init(),A.push(f),Mt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),At.setFromProjectionMatrix(Mt),$=this.localClippingEnabled,H=Ut.init(this.clippingPlanes,$),S=ht.get(M,d.length),S.init(),d.push(S),De(M,I,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(X,Y),this.info.render.frame++,H===!0&&Ut.beginShadows();const U=f.state.shadowsArray;if(Z.render(U,M,I),H===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),(bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1)&&Yt.render(S,M),f.setupLights(x._useLegacyLights),I.isArrayCamera){const z=I.cameras;for(let F=0,ot=z.length;F<ot;F++){const pt=z[F];Ki(S,M,pt,pt.viewport)}}else Ki(S,M,I);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(x,M,I),It.resetDefaultState(),k=-1,W=null,A.pop(),A.length>0?f=A[A.length-1]:f=null,d.pop(),d.length>0?S=d[d.length-1]:S=null};function De(M,I,U,z){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)U=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||At.intersectsSprite(M)){z&&dt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Mt);const pt=Q.update(M),xt=M.material;xt.visible&&S.push(M,pt,xt,U,dt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||At.intersectsObject(M))){const pt=Q.update(M),xt=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),dt.copy(M.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),dt.copy(pt.boundingSphere.center)),dt.applyMatrix4(M.matrixWorld).applyMatrix4(Mt)),Array.isArray(xt)){const Tt=pt.groups;for(let Dt=0,wt=Tt.length;Dt<wt;Dt++){const Lt=Tt[Dt],Qt=xt[Lt.materialIndex];Qt&&Qt.visible&&S.push(M,pt,Qt,U,dt.z,Lt)}}else xt.visible&&S.push(M,pt,xt,U,dt.z,null)}}const ot=M.children;for(let pt=0,xt=ot.length;pt<xt;pt++)De(ot[pt],I,U,z)}function Ki(M,I,U,z){const F=M.opaque,ot=M.transmissive,pt=M.transparent;f.setupLightsView(U),H===!0&&Ut.setGlobalState(x.clippingPlanes,U),ot.length>0&&Vr(F,ot,I,U),z&&mt.viewport(_.copy(z)),F.length>0&&qn(F,I,U),ot.length>0&&qn(ot,I,U),pt.length>0&&qn(pt,I,U),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Vr(M,I,U,z){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;const ot=Rt.isWebGL2;lt===null&&(lt=new Xn(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")?Vi:Rn,minFilter:Hn,samples:ot?4:0})),x.getDrawingBufferSize(_t),ot?lt.setSize(_t.x,_t.y):lt.setSize(zs(_t.x),zs(_t.y));const pt=x.getRenderTarget();x.setRenderTarget(lt),x.getClearColor(q),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const xt=x.toneMapping;x.toneMapping=An,qn(M,U,z),E.updateMultisampleRenderTarget(lt),E.updateRenderTargetMipmap(lt);let Tt=!1;for(let Dt=0,wt=I.length;Dt<wt;Dt++){const Lt=I[Dt],Qt=Lt.object,re=Lt.geometry,ae=Lt.material,He=Lt.group;if(ae.side===an&&Qt.layers.test(z.layers)){const te=ae.side;ae.side=we,ae.needsUpdate=!0,Zi(Qt,U,z,re,ae,He),ae.side=te,ae.needsUpdate=!0,Tt=!0}}Tt===!0&&(E.updateMultisampleRenderTarget(lt),E.updateRenderTargetMipmap(lt)),x.setRenderTarget(pt),x.setClearColor(q,L),x.toneMapping=xt}function qn(M,I,U){const z=I.isScene===!0?I.overrideMaterial:null;for(let F=0,ot=M.length;F<ot;F++){const pt=M[F],xt=pt.object,Tt=pt.geometry,Dt=z===null?pt.material:z,wt=pt.group;xt.layers.test(U.layers)&&Zi(xt,I,U,Tt,Dt,wt)}}function Zi(M,I,U,z,F,ot){M.onBeforeRender(x,I,U,z,F,ot),M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(x,I,U,z,M,ot),F.transparent===!0&&F.side===an&&F.forceSinglePass===!1?(F.side=we,F.needsUpdate=!0,x.renderBufferDirect(U,I,z,F,M,ot),F.side=Cn,F.needsUpdate=!0,x.renderBufferDirect(U,I,z,F,M,ot),F.side=an):x.renderBufferDirect(U,I,z,F,M,ot),M.onAfterRender(x,I,U,z,F,ot)}function jn(M,I,U){I.isScene!==!0&&(I=Ht);const z=Pt.get(M),F=f.state.lights,ot=f.state.shadowsArray,pt=F.state.version,xt=ft.getParameters(M,F.state,ot,I,U),Tt=ft.getProgramCacheKey(xt);let Dt=z.programs;z.environment=M.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(M.isMeshStandardMaterial?O:g).get(M.envMap||z.environment),Dt===void 0&&(M.addEventListener("dispose",nt),Dt=new Map,z.programs=Dt);let wt=Dt.get(Tt);if(wt!==void 0){if(z.currentProgram===wt&&z.lightsStateVersion===pt)return Ji(M,xt),wt}else xt.uniforms=ft.getUniforms(M),M.onBuild(U,xt,x),M.onBeforeCompile(xt,x),wt=ft.acquireProgram(xt,Tt),Dt.set(Tt,wt),z.uniforms=xt.uniforms;const Lt=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Lt.clippingPlanes=Ut.uniform),Ji(M,xt),z.needsLights=$s(M),z.lightsStateVersion=pt,z.needsLights&&(Lt.ambientLightColor.value=F.state.ambient,Lt.lightProbe.value=F.state.probe,Lt.directionalLights.value=F.state.directional,Lt.directionalLightShadows.value=F.state.directionalShadow,Lt.spotLights.value=F.state.spot,Lt.spotLightShadows.value=F.state.spotShadow,Lt.rectAreaLights.value=F.state.rectArea,Lt.ltc_1.value=F.state.rectAreaLTC1,Lt.ltc_2.value=F.state.rectAreaLTC2,Lt.pointLights.value=F.state.point,Lt.pointLightShadows.value=F.state.pointShadow,Lt.hemisphereLights.value=F.state.hemi,Lt.directionalShadowMap.value=F.state.directionalShadowMap,Lt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Lt.spotShadowMap.value=F.state.spotShadowMap,Lt.spotLightMatrix.value=F.state.spotLightMatrix,Lt.spotLightMap.value=F.state.spotLightMap,Lt.pointShadowMap.value=F.state.pointShadowMap,Lt.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=wt,z.uniformsList=null,wt}function $i(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=wr.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Ji(M,I){const U=Pt.get(M);U.outputColorSpace=I.outputColorSpace,U.batching=I.batching,U.instancing=I.instancing,U.instancingColor=I.instancingColor,U.skinning=I.skinning,U.morphTargets=I.morphTargets,U.morphNormals=I.morphNormals,U.morphColors=I.morphColors,U.morphTargetsCount=I.morphTargetsCount,U.numClippingPlanes=I.numClippingPlanes,U.numIntersection=I.numClipIntersection,U.vertexAlphas=I.vertexAlphas,U.vertexTangents=I.vertexTangents,U.toneMapping=I.toneMapping}function Kn(M,I,U,z,F){I.isScene!==!0&&(I=Ht),E.resetTextureUnits();const ot=I.fog,pt=z.isMeshStandardMaterial?I.environment:null,xt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:fn,Tt=(z.isMeshStandardMaterial?O:g).get(z.envMap||pt),Dt=z.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,wt=!!U.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Lt=!!U.morphAttributes.position,Qt=!!U.morphAttributes.normal,re=!!U.morphAttributes.color;let ae=An;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ae=x.toneMapping);const He=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,te=He!==void 0?He.length:0,Nt=Pt.get(z),Je=f.state.lights;if(H===!0&&($===!0||M!==W)){const Ue=M===W&&z.id===k;Ut.setState(z,M,Ue)}let ee=!1;z.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Je.state.version||Nt.outputColorSpace!==xt||F.isBatchedMesh&&Nt.batching===!1||!F.isBatchedMesh&&Nt.batching===!0||F.isInstancedMesh&&Nt.instancing===!1||!F.isInstancedMesh&&Nt.instancing===!0||F.isSkinnedMesh&&Nt.skinning===!1||!F.isSkinnedMesh&&Nt.skinning===!0||F.isInstancedMesh&&Nt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Nt.instancingColor===!1&&F.instanceColor!==null||Nt.envMap!==Tt||z.fog===!0&&Nt.fog!==ot||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Ut.numPlanes||Nt.numIntersection!==Ut.numIntersection)||Nt.vertexAlphas!==Dt||Nt.vertexTangents!==wt||Nt.morphTargets!==Lt||Nt.morphNormals!==Qt||Nt.morphColors!==re||Nt.toneMapping!==ae||Rt.isWebGL2===!0&&Nt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Nt.__version=z.version);let Ke=Nt.currentProgram;ee===!0&&(Ke=jn(z,I,F));let Qi=!1,Le=!1,kr=!1;const ve=Ke.getUniforms(),Ln=Nt.uniforms;if(mt.useProgram(Ke.program)&&(Qi=!0,Le=!0,kr=!0),z.id!==k&&(k=z.id,Le=!0),Qi||W!==M){ve.setValue(D,"projectionMatrix",M.projectionMatrix),ve.setValue(D,"viewMatrix",M.matrixWorldInverse);const Ue=ve.map.cameraPosition;Ue!==void 0&&Ue.setValue(D,dt.setFromMatrixPosition(M.matrixWorld)),Rt.logarithmicDepthBuffer&&ve.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ve.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),W!==M&&(W=M,Le=!0,kr=!0)}if(F.isSkinnedMesh){ve.setOptional(D,F,"bindMatrix"),ve.setOptional(D,F,"bindMatrixInverse");const Ue=F.skeleton;Ue&&(Rt.floatVertexTextures?(Ue.boneTexture===null&&Ue.computeBoneTexture(),ve.setValue(D,"boneTexture",Ue.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(ve.setOptional(D,F,"batchingTexture"),ve.setValue(D,"batchingTexture",F._matricesTexture,E));const Wr=U.morphAttributes;if((Wr.position!==void 0||Wr.normal!==void 0||Wr.color!==void 0&&Rt.isWebGL2===!0)&&Bt.update(F,U,Ke),(Le||Nt.receiveShadow!==F.receiveShadow)&&(Nt.receiveShadow=F.receiveShadow,ve.setValue(D,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ln.envMap.value=Tt,Ln.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),Le&&(ve.setValue(D,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&je(Ln,kr),ot&&z.fog===!0&&at.refreshFogUniforms(Ln,ot),at.refreshMaterialUniforms(Ln,z,G,N,lt),wr.upload(D,$i(Nt),Ln,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(wr.upload(D,$i(Nt),Ln,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ve.setValue(D,"center",F.center),ve.setValue(D,"modelViewMatrix",F.modelViewMatrix),ve.setValue(D,"normalMatrix",F.normalMatrix),ve.setValue(D,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ue=z.uniformsGroups;for(let Xr=0,Gc=Ue.length;Xr<Gc;Xr++)if(Rt.isWebGL2){const Js=Ue[Xr];Vt.update(Js,Ke),Vt.bind(Js,Ke)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ke}function je(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function $s(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,I,U){Pt.get(M.texture).__webglTexture=I,Pt.get(M.depthTexture).__webglTexture=U;const z=Pt.get(M);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=U===void 0,z.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,I){const U=Pt.get(M);U.__webglFramebuffer=I,U.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,U=0){C=M,P=I,w=U;let z=!0,F=null,ot=!1,pt=!1;if(M){const Tt=Pt.get(M);Tt.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(D.FRAMEBUFFER,null),z=!1):Tt.__webglFramebuffer===void 0?E.setupRenderTarget(M):Tt.__hasExternalTextures&&E.rebindTextures(M,Pt.get(M.texture).__webglTexture,Pt.get(M.depthTexture).__webglTexture);const Dt=M.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(pt=!0);const wt=Pt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(wt[I])?F=wt[I][U]:F=wt[I],ot=!0):Rt.isWebGL2&&M.samples>0&&E.useMultisampledRTT(M)===!1?F=Pt.get(M).__webglMultisampledFramebuffer:Array.isArray(wt)?F=wt[U]:F=wt,_.copy(M.viewport),y.copy(M.scissor),V=M.scissorTest}else _.copy(j).multiplyScalar(G).floor(),y.copy(tt).multiplyScalar(G).floor(),V=rt;if(mt.bindFramebuffer(D.FRAMEBUFFER,F)&&Rt.drawBuffers&&z&&mt.drawBuffers(M,F),mt.viewport(_),mt.scissor(y),mt.setScissorTest(V),ot){const Tt=Pt.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,Tt.__webglTexture,U)}else if(pt){const Tt=Pt.get(M.texture),Dt=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.__webglTexture,U||0,Dt)}k=-1},this.readRenderTargetPixels=function(M,I,U,z,F,ot,pt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Pt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pt!==void 0&&(xt=xt[pt]),xt){mt.bindFramebuffer(D.FRAMEBUFFER,xt);try{const Tt=M.texture,Dt=Tt.format,wt=Tt.type;if(Dt!==Ye&&ct.convert(Dt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Lt=wt===Vi&&(vt.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&vt.has("EXT_color_buffer_float"));if(wt!==Rn&&ct.convert(wt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(wt===on&&(Rt.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!Lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-z&&U>=0&&U<=M.height-F&&D.readPixels(I,U,z,F,ct.convert(Dt),ct.convert(wt),ot)}finally{const Tt=C!==null?Pt.get(C).__webglFramebuffer:null;mt.bindFramebuffer(D.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(M,I,U=0){const z=Math.pow(2,-U),F=Math.floor(I.image.width*z),ot=Math.floor(I.image.height*z);E.setTexture2D(I,0),D.copyTexSubImage2D(D.TEXTURE_2D,U,0,0,M.x,M.y,F,ot),mt.unbindTexture()},this.copyTextureToTexture=function(M,I,U,z=0){const F=I.image.width,ot=I.image.height,pt=ct.convert(U.format),xt=ct.convert(U.type);E.setTexture2D(U,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment),I.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,M.x,M.y,F,ot,pt,xt,I.image.data):I.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,M.x,M.y,I.mipmaps[0].width,I.mipmaps[0].height,pt,I.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,z,M.x,M.y,pt,xt,I.image),z===0&&U.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(M,I,U,z,F=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ot=M.max.x-M.min.x+1,pt=M.max.y-M.min.y+1,xt=M.max.z-M.min.z+1,Tt=ct.convert(z.format),Dt=ct.convert(z.type);let wt;if(z.isData3DTexture)E.setTexture3D(z,0),wt=D.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)E.setTexture2DArray(z,0),wt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const Lt=D.getParameter(D.UNPACK_ROW_LENGTH),Qt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),re=D.getParameter(D.UNPACK_SKIP_PIXELS),ae=D.getParameter(D.UNPACK_SKIP_ROWS),He=D.getParameter(D.UNPACK_SKIP_IMAGES),te=U.isCompressedTexture?U.mipmaps[F]:U.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,te.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,te.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,M.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,M.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,M.min.z),U.isDataTexture||U.isData3DTexture?D.texSubImage3D(wt,F,I.x,I.y,I.z,ot,pt,xt,Tt,Dt,te.data):U.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(wt,F,I.x,I.y,I.z,ot,pt,xt,Tt,te.data)):D.texSubImage3D(wt,F,I.x,I.y,I.z,ot,pt,xt,Tt,Dt,te),D.pixelStorei(D.UNPACK_ROW_LENGTH,Lt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,re),D.pixelStorei(D.UNPACK_SKIP_ROWS,ae),D.pixelStorei(D.UNPACK_SKIP_IMAGES,He),F===0&&z.generateMipmaps&&D.generateMipmap(wt),mt.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),mt.unbindTexture()},this.resetState=function(){P=0,w=0,C=null,mt.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===qs?"display-p3":"srgb",e.unpackColorSpace=$t.workingColorSpace===zr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_e?kn:oc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===kn?_e:fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class $p extends Lc{}$p.prototype.isWebGL1Renderer=!0;class Jp extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Qp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Os,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Wn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ee=new b;class Fr{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$e(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$e(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$e(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$e(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$e(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Fr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pc extends Yn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let di;const Fi=new b,fi=new b,pi=new b,mi=new Gt,Bi=new Gt,Ic=new ce,Er=new b,zi=new b,yr=new b,Mo=new Gt,ys=new Gt,xo=new Gt;class tm extends xe{constructor(t=new Pc){if(super(),this.isSprite=!0,this.type="Sprite",di===void 0){di=new ze;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qp(e,5);di.setIndex([0,1,2,0,2,3]),di.setAttribute("position",new Fr(n,3,0,!1)),di.setAttribute("uv",new Fr(n,2,3,!1))}this.geometry=di,this.material=t,this.center=new Gt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fi.setFromMatrixScale(this.matrixWorld),Ic.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),pi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fi.multiplyScalar(-pi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const c=this.center;Tr(Er.set(-.5,-.5,0),pi,c,fi,r,s),Tr(zi.set(.5,-.5,0),pi,c,fi,r,s),Tr(yr.set(.5,.5,0),pi,c,fi,r,s),Mo.set(0,0),ys.set(1,0),xo.set(1,1);let a=t.ray.intersectTriangle(Er,zi,yr,!1,Fi);if(a===null&&(Tr(zi.set(-.5,.5,0),pi,c,fi,r,s),ys.set(0,1),a=t.ray.intersectTriangle(Er,yr,zi,!1,Fi),a===null))return;const o=t.ray.origin.distanceTo(Fi);o<t.near||o>t.far||e.push({distance:o,point:Fi.clone(),uv:qe.getInterpolation(Fi,Er,zi,yr,Mo,ys,xo,new Gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Tr(i,t,e,n,r,s){mi.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Bi.x=s*mi.x-r*mi.y,Bi.y=r*mi.x+s*mi.y):Bi.copy(mi),i.copy(t),i.x+=Bi.x,i.y+=Bi.y,i.applyMatrix4(Ic)}class Dc extends Yn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Eo=new b,yo=new b,To=new ce,Ts=new js,Ar=new Xi;class em extends xe{constructor(t=new ze,e=new Dc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Eo.fromBufferAttribute(e,r-1),yo.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Eo.distanceTo(yo);t.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(r),Ar.radius+=s,t.ray.intersectsSphere(Ar)===!1)return;To.copy(r).invert(),Ts.copy(t.ray).applyMatrix4(To);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=new b,h=new b,u=new b,p=new b,m=this.isLineSegments?2:1,v=n.index,f=n.attributes.position;if(v!==null){const d=Math.max(0,c.start),A=Math.min(v.count,c.start+c.count);for(let x=d,R=A-1;x<R;x+=m){const P=v.getX(x),w=v.getX(x+1);if(l.fromBufferAttribute(f,P),h.fromBufferAttribute(f,w),Ts.distanceSqToSegment(l,h,p,u)>o)continue;p.applyMatrix4(this.matrixWorld);const k=t.ray.origin.distanceTo(p);k<t.near||k>t.far||e.push({distance:k,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,c.start),A=Math.min(f.count,c.start+c.count);for(let x=d,R=A-1;x<R;x+=m){if(l.fromBufferAttribute(f,x),h.fromBufferAttribute(f,x+1),Ts.distanceSqToSegment(l,h,p,u)>o)continue;p.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(p);w<t.near||w>t.far||e.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=r.length;s<c;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Ao=new b,Ro=new b;class nm extends em{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Ao.fromBufferAttribute(e,r),Ro.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ao.distanceTo(Ro);t.setAttribute("lineDistance",new dn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gs extends Yn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const bo=new ce,Vs=new js,Rr=new Xi,br=new b;class Co extends xe{constructor(t=new ze,e=new Gs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),Rr.radius+=s,t.ray.intersectsSphere(Rr)===!1)return;bo.copy(r).invert(),Vs.copy(t.ray).applyMatrix4(bo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,u=n.attributes.position;if(l!==null){const p=Math.max(0,c.start),m=Math.min(l.count,c.start+c.count);for(let v=p,S=m;v<S;v++){const f=l.getX(v);br.fromBufferAttribute(u,f),wo(br,f,o,r,t,e,this)}}else{const p=Math.max(0,c.start),m=Math.min(u.count,c.start+c.count);for(let v=p,S=m;v<S;v++)br.fromBufferAttribute(u,v),wo(br,v,o,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=r.length;s<c;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function wo(i,t,e,n,r,s,c){const a=Vs.distanceSqToPoint(i);if(a<e){const o=new b;Vs.closestPointToPoint(i,o),o.applyMatrix4(n);const l=r.ray.origin.distanceTo(o);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:o,index:t,face:null,object:c})}}class Uc extends Ae{constructor(t,e,n,r,s,c,a,o,l){super(t,e,n,r,s,c,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class im{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Lo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Lo(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xs);const Zs=document.querySelector("#canvas"),ji=new Lc({canvas:Zs,antialias:!0});ji.setPixelRatio(Math.min(window.devicePixelRatio,2));ji.setSize(window.innerWidth,window.innerHeight);ji.setClearColor(0,1);const yn=new Jp,Po=(()=>{const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d"),n=64/2,r=e.createRadialGradient(n,n,0,n,n,n);r.addColorStop(0,"rgba(255, 255, 255, 1)"),r.addColorStop(.25,"rgba(255, 255, 255, 1)"),r.addColorStop(.45,"rgba(255, 255, 255, 0.7)"),r.addColorStop(.6,"rgba(255, 255, 255, 0.25)"),r.addColorStop(.7,"rgba(255, 255, 255, 0)"),e.fillStyle=r,e.fillRect(0,0,64,64);const s=new Uc(t);return s.minFilter=he,s.magFilter=he,s.generateMipmaps=!1,s})(),rm=(()=>{const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d"),n=64/2;e.clearRect(0,0,64,64),e.strokeStyle="rgba(255, 255, 255, 1)",e.lineWidth=2.6,e.lineCap="round",e.shadowColor="rgba(255, 255, 255, 0.9)",e.shadowBlur=10,[[0,-13,0,13],[-11,-5,11,5],[-7,9,7,-9],[-4,-12,8,-3],[-10,2,10,-2]].forEach(([c,a,o,l])=>{e.beginPath(),e.moveTo(n+c,n+a),e.lineTo(n+o,n+l),e.stroke()});const s=new Uc(t);return s.minFilter=he,s.magFilter=he,s.generateMipmaps=!1,s})();let hn=window.innerWidth,un=window.innerHeight;const xn=new yc(-hn/2,hn/2,un/2,-un/2,.1,1e3);xn.position.z=200;const sm=new im,As=new b(0,-96,0);let ki=0,Rs="";const Lr=[],Gi=[],xi=[],am=33.777331,om=6.5,cm=1.35,lm=.8,hm=1.0625,um=1.75,dm=.3,fm=.9,pm=3.6,mm=1.4,_m=.35,gm=2.6,vm=1.2,Sm=1.1,Mm=[5,9],xm=.25,Io=.26830966025390623,Em=.3,Do=[2,4],ym=[.05,.18],Uo=[30,120],Tm=.65,No=.7,Am=.45,Rm=1.45,bm=3,Cm=1,wm=.3,Lm=[.04,.12],Pm=.25,Im=.25,Dm=[.02,.08],Um=.12,Nm=.1,Om=.01,Fm=.02,Bm=2,Oo=[.98,1],Fo=[.62,.72],zm=1.35,Hm=.5,Gm=.15,Vm=.7,km=1.25,Wm=1.15,Xm=1.1,bs=1.25,Ym=.4,qm=2.8,jm=1.35,Km=2.6,Zm=.8,$m=.33,Jm=1.5,Qm=2.5,t_=.55,e_=2.5,n_=.4,i_=4,r_=.5,s_=100,a_=1,o_=.35,c_=.35,l_=[8,18],h_=[5,12],u_=.85,d_=[16,30],f_=[9,18],p_=.15,m_=[18,30],__=[10,18],g_=.5,v_=.45,S_=[48,72],M_=1.35,x_=.85,E_=1.1,y_=.6,T_=.01,A_=.35,R_=[50,75],b_=1.1,C_=1.4,w_=1.6,L_=1.3,P_=.02,I_=1.4,D_=.15,U_=3,N_=1.25,O_=.85,F_=.1,B_=5,z_=1.6,H_=2,G_=2.5,V_=1.4,k_=.9,W_=2.6,X_=5,Y_=.7,q_=.03,j_=.15,K_=5,Z_=1.2,$_=.24,J_=.4,Q_=.4,tg=.5,eg=.2,ng=.25,ig=1.4,rg=[1.15,1.8],sg=1.6,ag=.0165,og=.6,Bo=1,cg=20,lg=1,hg=1.35,ug=1.04,dg=.55,fg=2.4,pg=4,mg=.85,_g=1.6,gg=1.35,vg=.5,Sg=.03,Mg=.1,xg=[6,14],Eg=[1.2,2.4],_i=.6,yg=.02,Tg=50,Ag=4.5,Rg=6,bg=.3,Cg=[{name:"zigzag",strength:[8,16],speed:[6,12]},{name:"corkscrew",strength:[6,12],speed:[6,10]},{name:"flutter",strength:[4,10],speed:[8,14]}],wg=.15,Lg=[20,36],Pg=[.006,.012],Ig=[.8,1.6],Dg=14,Ug=12,Ng=5.2,Og=.2,Fg=1.8,Bg=[{name:"tight",strength:1.4,scale:1.5,speed:1.2,twist:1.6},{name:"loose",strength:1.1,scale:1,speed:.85,twist:1.2},{name:"snaking",strength:1.8,scale:1.9,speed:1.35,twist:2},{name:"whirl",strength:2.2,scale:2.3,speed:1.6,twist:2.6}],zg=1.4,Hg=.02,Gg=.35,Vg=12,kg=1.6,Wg=[22,34],Xg=1.4,Yg=1.2,qg=1.1,jg=1.2,Kg=[14,22],zo=.18,Nc=1.9,Zg=.35,$g=1.2,Jg=5.8,Qg=.8,t0=1.2,e0=[.35,4.2],n0=.6,i0=.25,r0=600,s0=.8,a0=.98,o0=[.625,2.25],c0=.7,Ho=.06,l0=.7,h0=[.15,.75],Cs=[.8,1.25],u0=.3,d0=.3,f0=3,p0=.85,m0=.7,_0=75,Oc=[0,1/12,1/6,1/3,1/2,2/3,5/6,11/12],g0=[0,1/12,1/6,.5,7/12,2/3],v0=.7,S0="rosette",Go=[90,180],M0=[80,180],x0=[1.2,2.1],E0=[3.2,6.2],y0=[.965,.99],T0={x:[-1.2,1.2],y:[-.8,.8],z:[-1.2,1.2]},A0=[1.1,2.2],R0=[1.05,1.4],b0=.12,C0=2.6,w0=[16,32],L0=[.5,.95],P0=[1,1.6],I0=.7,D0=[9,16],U0=1.45,N0=2.75,O0=1.35,F0=165,B0=1.35,z0=2.2,H0=.12,G0=1.7,V0=[12,22],k0=[4.5,7.5],W0=.65,X0=[.04,.08],Y0=[5.5,9.5],q0=[14,28],j0=.35,K0=.2,Z0=[.65,.9],$0=[1.6,2.3],J0=[.55,.8],Q0=[1.4,2.1],tv=.7,ev=32,Vo=[.9,1],ko=[.78,.92],Wo=.08,Xo=[2,4],Yo=[4,12],nv=[.95,2],iv=[.6,1],rv=[.6,1.05],vi=[{pattern:"burst",count:[180,360],radius:[90,220],life:[1.5,2.6],trailStretch:[1.8,4.4],drag:[.94,.985],drift:{x:[-2.2,2.2],y:[-1.6,1.6],z:[-2.2,2.2]},pointSize:[1.4,3],gravityScale:[.9,1.1],hueVariance:.1,trailBoost:2.1,curveStrength:[14,28],curveDecay:[.6,1.1],gravityRamp:[.8,1.4],spherical:!0},{pattern:"ring",count:[140,280],radius:[110,240],life:[1.4,2.2],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.4,2.8],gravityScale:[.8,1],hueVariance:.08,trailBoost:2,curveStrength:[12,24],curveDecay:[.6,1],gravityRamp:[.7,1.2],spherical:!0},{pattern:"fan",count:[120,260],radius:[90,210],life:[1.3,2.2],trailStretch:[1.8,4.6],drag:[.94,.98],drift:{x:[-2.6,2.6],y:[-1.4,1.4],z:[-2.6,2.6]},pointSize:[1.2,2.6],gravityScale:[1,1.25],hueVariance:.12},{pattern:"spiral",count:[180,360],radius:[100,230],life:[1.6,2.6],trailStretch:[2.2,4.8],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.8],gravityScale:[.85,1.1],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.5,1],gravityRamp:[.8,1.3],spherical:!0},{pattern:"palm",count:[120,260],radius:[100,220],life:[1.8,3],trailStretch:[2.8,5.6],drag:[.96,.99],drift:{x:[-1.4,1.4],y:[-1,1],z:[-1.4,1.4]},pointSize:[1.6,3],gravityScale:[1.1,1.45],hueVariance:.05},{pattern:"flower",count:[200,400],radius:[100,240],life:[1.5,2.6],trailStretch:[2.2,4.4],drag:[.95,.98],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.8,1.4],spherical:!0},{pattern:"sphere",count:[320,560],radius:[110,260],life:[1.6,2.8],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.15],hueVariance:.08,trailBoost:2.1,curveStrength:[10,22],curveDecay:[.7,1.2],gravityRamp:[.8,1.2],spherical:!0},{pattern:"dahlia",count:[300,520],radius:[110,260],life:[1.6,2.8],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.08,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.7,1.2],gravityRamp:[.9,1.3],spherical:!0},{pattern:"globe",count:[320,560],radius:[120,280],life:[1.6,2.8],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.15],hueVariance:.08,trailBoost:2.2,curveStrength:[10,22],curveDecay:[.7,1.2],gravityRamp:[.8,1.2],dotTrailChance:.5,dotTrailSamples:[7,12],spherical:!0},{pattern:"pearl",count:[300,520],radius:[120,270],life:[1.6,2.8],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.7,1.2],gravityRamp:[.9,1.3],dotTrailChance:.25,dotTrailSamples:[5,9],spherical:!0},{pattern:"shell",count:[320,560],radius:[120,280],life:[1.5,2.6],trailStretch:[2.2,5],drag:[.94,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2,curveStrength:[10,22],curveDecay:[.7,1.2],gravityRamp:[.8,1.2],dotTrailChance:.4,dotTrailSamples:[6,11],spherical:!0},{pattern:"orbital",count:[280,520],radius:[120,270],life:[1.6,2.8],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.08,trailBoost:2.3,curveStrength:[14,28],curveDecay:[.7,1.2],gravityRamp:[.9,1.3],dotTrailChance:.6,dotTrailSamples:[8,14],spherical:!0},{pattern:"bloom",count:[320,560],radius:[120,280],life:[1.6,2.8],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.08,trailBoost:2.3,curveStrength:[14,28],curveDecay:[.7,1.2],gravityRamp:[.9,1.3],dotTrailChance:.35,dotTrailSamples:[6,12],spherical:!0},{pattern:"cross",count:[120,240],radius:[90,210],life:[1.4,2.3],trailStretch:[2.4,5],drag:[.95,.985],drift:{x:[-1.4,1.4],y:[-1.2,1.2],z:[-1.4,1.4]},pointSize:[1.4,2.8],gravityScale:[.9,1.1],hueVariance:.08},{pattern:"cross",count:[120,240],radius:[90,210],life:[1.4,2.3],trailStretch:[2.4,5],drag:[.95,.985],drift:{x:[-1.4,1.4],y:[-1.2,1.2],z:[-1.4,1.4]},pointSize:[1.4,2.8],gravityScale:[.9,1.1],hueVariance:.08},{pattern:"comet",count:[80,180],radius:[120,260],life:[2,3.4],trailStretch:[3.2,6.8],drag:[.965,.99],drift:{x:[-2.4,2.4],y:[-1.4,1.4],z:[-2.4,2.4]},pointSize:[1.6,3.2],gravityScale:[1.1,1.5],hueVariance:.06,trailBoost:2.4,curveStrength:[16,30],curveDecay:[.4,.9],gravityRamp:[1,1.6]},{pattern:"crown",count:[140,260],radius:[90,220],life:[1.6,2.6],trailStretch:[2,4.6],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.4,2.8],gravityScale:[1,1.3],hueVariance:.08,trailBoost:1.9,curveStrength:[10,20],curveDecay:[.6,1],gravityRamp:[.7,1.2]},{pattern:"willow",count:[160,320],radius:[110,260],life:[2.2,3.6],trailStretch:[3,6.4],drag:[.965,.99],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.4,2.8],gravityScale:[1.2,1.6],hueVariance:.08,trailBoost:2.4,curveStrength:[18,36],curveDecay:[.4,.9],gravityRamp:[1.2,1.8]},{pattern:"star",count:[140,280],radius:[110,250],life:[1.5,2.6],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1,1],z:[-1.6,1.6]},pointSize:[1.4,2.8],gravityScale:[.95,1.2],hueVariance:.1,trailBoost:2,curveStrength:[10,22],curveDecay:[.6,1.1],gravityRamp:[.8,1.3]},{pattern:"wave",count:[160,320],radius:[120,260],life:[1.6,2.8],trailStretch:[2.6,5.4],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.6,1],gravityRamp:[.9,1.4]},{pattern:"scatter",count:[220,420],radius:[120,280],life:[1.4,2.4],trailStretch:[2.2,5],drag:[.94,.985],drift:{x:[-2.4,2.4],y:[-1.6,1.6],z:[-2.4,2.4]},pointSize:[1.3,2.6],gravityScale:[.9,1.15],hueVariance:.14},{pattern:"umbrella",count:[140,260],radius:[110,240],life:[1.6,2.8],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.4,2.8],gravityScale:[1,1.3],hueVariance:.08,trailBoost:2.1,curveStrength:[10,22],curveDecay:[.6,1],gravityRamp:[.9,1.4]},{pattern:"peony",count:[200,420],radius:[120,280],life:[1.6,2.8],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.4,2.8],gravityScale:[.9,1.15],hueVariance:.08,trailBoost:2.2,curveStrength:[12,26],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],spherical:!0},{pattern:"chrysanthemum",count:[180,360],radius:[120,270],life:[1.7,2.8],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.4,2.8],gravityScale:[.9,1.2],hueVariance:.08,trailBoost:2.3,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.4],spherical:!0},{pattern:"nova",count:[160,320],radius:[120,260],life:[1.5,2.6],trailStretch:[2.4,5],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.95,1.2],hueVariance:.1,trailBoost:2,curveStrength:[10,22],curveDecay:[.6,1.1],gravityRamp:[.8,1.3],spherical:!0},{pattern:"double",count:[140,280],radius:[120,260],life:[1.6,2.8],trailStretch:[2.4,5.6],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.4,2.8],gravityScale:[.95,1.2],hueVariance:.1,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.4]},{pattern:"fountain",count:[140,280],radius:[80,180],life:[1.4,2.4],trailStretch:[2.6,5.8],drag:[.95,.985],drift:{x:[-1.2,1.2],y:[-.8,.8],z:[-1.2,1.2]},pointSize:[1.4,2.8],gravityScale:[1.1,1.4],hueVariance:.12,trailBoost:2.5,curveStrength:[14,28],curveDecay:[.5,1],gravityRamp:[1,1.5]},{pattern:"cylinder",count:[180,360],radius:[110,250],life:[1.5,2.6],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2,curveStrength:[10,20],curveDecay:[.6,1],gravityRamp:[.8,1.2]},{pattern:"tornado",count:[160,300],radius:[110,240],life:[1.6,2.8],trailStretch:[2.8,5.6],drag:[.95,.985],drift:{x:[-2,2],y:[-1.2,1.2],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.95,1.25],hueVariance:.12,trailBoost:2.2,curveStrength:[14,26],curveDecay:[.5,1],gravityRamp:[1,1.4]},{pattern:"vortex",count:[160,320],radius:[110,260],life:[1.6,2.8],trailStretch:[2.6,5.4],drag:[.95,.985],drift:{x:[-2,2],y:[-1.2,1.2],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.1,curveStrength:[14,26],curveDecay:[.5,1],gravityRamp:[.9,1.3]},{pattern:"halo",count:[140,260],radius:[120,260],life:[1.4,2.4],trailStretch:[2.2,4.8],drag:[.95,.985],drift:{x:[-1.4,1.4],y:[-1,1],z:[-1.4,1.4]},pointSize:[1.3,2.6],gravityScale:[.85,1.1],hueVariance:.1,trailBoost:2,curveStrength:[10,22],curveDecay:[.6,1],gravityRamp:[.8,1.2],spherical:!0},{pattern:"sheaf",count:[140,260],radius:[110,230],life:[1.4,2.6],trailStretch:[2.6,5.4],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1,1],z:[-1.6,1.6]},pointSize:[1.3,2.6],gravityScale:[1,1.3],hueVariance:.12,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.5,1],gravityRamp:[.9,1.3]},{pattern:"pinwheel",count:[160,320],radius:[120,260],life:[1.6,2.8],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-2,2],y:[-1.2,1.2],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]},{pattern:"petal",count:[160,320],radius:[120,260],life:[1.6,2.8],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],spherical:!0},{pattern:"starburst",count:[180,360],radius:[120,280],life:[1.6,2.8],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],spherical:!0},{pattern:"ripple",count:[160,320],radius:[120,260],life:[1.6,2.8],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],spherical:!0},{pattern:"burstlet",count:[240,480],radius:[120,280],life:[1.4,2.4],trailStretch:[2,4.6],drag:[.94,.985],drift:{x:[-2.2,2.2],y:[-1.4,1.4],z:[-2.2,2.2]},pointSize:[1.3,2.6],gravityScale:[.9,1.15],hueVariance:.14,trailBoost:2,curveStrength:[10,22],curveDecay:[.6,1],gravityRamp:[.8,1.2]},{pattern:"saturn",count:[220,420],radius:[120,280],life:[1.6,2.8],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],spherical:!0},{pattern:"crossette",count:[180,360],radius:[110,250],life:[1.5,2.6],trailStretch:[2.2,5],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2,curveStrength:[10,22],curveDecay:[.6,1.1],gravityRamp:[.8,1.2]},{pattern:"spokes",count:[200,380],radius:[120,270],life:[1.5,2.6],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.1,curveStrength:[10,22],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]},{pattern:"helix",count:[180,360],radius:[120,260],life:[1.6,2.8],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-2,2],y:[-1.2,1.2],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]},{pattern:"crescent",count:[180,340],radius:[120,270],life:[1.5,2.7],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[10,22],curveDecay:[.6,1.1],gravityRamp:[.8,1.3]},{pattern:"diamond",count:[160,320],radius:[110,250],life:[1.4,2.5],trailStretch:[2.2,5],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.1,curveStrength:[10,22],curveDecay:[.6,1.1],gravityRamp:[.8,1.3]},{pattern:"lattice",count:[220,420],radius:[130,290],life:[1.6,2.9],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-2,2],y:[-1.2,1.2],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.3,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]},{pattern:"arcburst",count:[140,300],radius:[120,260],life:[1.5,2.7],trailStretch:[2.6,5.4],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,26],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],dotTrailChance:.4,dotTrailSamples:[6,12]},{pattern:"braid",count:[160,320],radius:[110,250],life:[1.6,2.8],trailStretch:[2.8,5.8],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.95,1.25],hueVariance:.12,trailBoost:2.3,curveStrength:[14,28],curveDecay:[.5,1],gravityRamp:[1,1.4]},{pattern:"lotus",count:[180,340],radius:[120,260],life:[1.5,2.7],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.1,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]},{pattern:"spire",count:[120,240],radius:[100,220],life:[1.6,2.8],trailStretch:[2.8,6.2],drag:[.955,.99],drift:{x:[-1.4,1.4],y:[-1,1],z:[-1.4,1.4]},pointSize:[1.3,2.6],gravityScale:[1,1.35],hueVariance:.08,trailBoost:2.4,curveStrength:[14,28],curveDecay:[.5,1],gravityRamp:[1,1.5]},{pattern:"fanwave",count:[160,320],radius:[120,260],life:[1.5,2.6],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.2,curveStrength:[12,26],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]},{pattern:"arcflower",count:[160,320],radius:[120,260],life:[1.5,2.7],trailStretch:[2.4,5.4],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,26],curveDecay:[.6,1.1],gravityRamp:[.9,1.3],dotTrailChance:.35,dotTrailSamples:[6,12],spherical:!0},{pattern:"lissajous",count:[180,360],radius:[120,270],life:[1.6,2.9],trailStretch:[2.6,5.8],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.12,trailBoost:2.3,curveStrength:[14,28],curveDecay:[.5,1],gravityRamp:[1,1.4]},{pattern:"crownburst",count:[140,280],radius:[110,240],life:[1.6,2.8],trailStretch:[2.6,5.6],drag:[.95,.985],drift:{x:[-1.6,1.6],y:[-1.2,1.2],z:[-1.6,1.6]},pointSize:[1.3,2.6],gravityScale:[1,1.35],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.5,1],gravityRamp:[1,1.5]},{pattern:"sprayburst",count:[140,280],radius:[110,240],life:[1.5,2.6],trailStretch:[2.4,5.2],drag:[.95,.985],drift:{x:[-2,2],y:[-1.4,1.4],z:[-2,2]},pointSize:[1.3,2.6],gravityScale:[1,1.4],hueVariance:.12,trailBoost:2.1,curveStrength:[12,26],curveDecay:[.5,1],gravityRamp:[1,1.6]},{pattern:"ribbon",count:[160,320],radius:[120,260],life:[1.6,2.8],trailStretch:[2.6,5.4],drag:[.95,.985],drift:{x:[-1.8,1.8],y:[-1.2,1.2],z:[-1.8,1.8]},pointSize:[1.3,2.6],gravityScale:[.9,1.2],hueVariance:.1,trailBoost:2.2,curveStrength:[12,24],curveDecay:[.6,1.1],gravityRamp:[.9,1.3]}];function st(i,t){return i+Math.random()*(t-i)}function ie(i,t){return Math.floor(st(i,t+1))}function Be(i){return i[Math.floor(Math.random()*i.length)]}function Ft(i){return st(i[0],i[1])}function Cr(){return new Li().setFromEuler(new Yi(st(0,Math.PI*2),st(0,Math.PI*2),st(0,Math.PI*2)))}function ks(i=s0){const t=()=>Math.random()<i?-1:1;return new b(t(),t(),t())}function Fc(i){return new b(st(i[0],i[1]),st(i[0],i[1]),st(i[0],i[1]))}function sv(i,t){const e=[];for(const n of i){const r=t[n.pattern]??1,s=Math.max(1,Math.floor(r)),c=r-Math.floor(r);for(let a=0;a<s;a+=1)e.push(n);c>0&&Math.random()<c&&e.push(n)}return e.length?e:i}function Nn(i,t,e){return i+(t-i)*e}function ws(i){return i*i*(3-2*i)}function Mn(i,t,e){const n=Math.sin(i*127.1+t*311.7+e*74.7)*43758.5453;return n-Math.floor(n)}function Oe(i,t,e){const n=Math.floor(i),r=Math.floor(t),s=Math.floor(e),c=i-n,a=t-r,o=e-s,l=ws(c),h=ws(a),u=ws(o),p=Mn(n,r,s),m=Mn(n+1,r,s),v=Mn(n,r+1,s),S=Mn(n+1,r+1,s),f=Mn(n,r,s+1),d=Mn(n+1,r,s+1),A=Mn(n,r+1,s+1),x=Mn(n+1,r+1,s+1),R=Nn(p,m,l),P=Nn(v,S,l),w=Nn(f,d,l),C=Nn(A,x,l),k=Nn(R,P,h),W=Nn(w,C,h);return Nn(k,W,u)}function av(i,t,e,n){const r=i+31.4,s=t+47.2,c=e+11.9,a=i+17.1,o=t+83.6,l=e+29.5,h=i+53.7,u=t+19.3,p=e+61.2,m=(Oe(h,u+n,p)-Oe(h,u-n,p))/(2*n),v=(Oe(a,o,l+n)-Oe(a,o,l-n))/(2*n),S=(Oe(r,s,c+n)-Oe(r,s,c-n))/(2*n),f=(Oe(h+n,u,p)-Oe(h-n,u,p))/(2*n),d=(Oe(a+n,o,l)-Oe(a-n,o,l))/(2*n),A=(Oe(r,s+n,c)-Oe(r,s-n,c))/(2*n);return new b(m-v,S-f,d-A)}function Hi(i){const t=Math.max(2,Math.round(i[0]*Io)),e=Math.max(t,Math.round(i[1]*Io));return[t,e]}function qo(i){return new b(st(i.x[0],i.x[1]),st(i.y[0],i.y[1]),st(i.z[0],i.z[1]))}function Ws(i,t,e){return Math.min(Math.max(i,t),e)}function Bc(i,t,e){const n=new kt;return n.setHSL(i,t,e),n}function pe(){const i=Math.random(),t=Math.random(),e=2*Math.PI*i,n=Math.acos(2*t-1),r=Math.sin(n);return new b(Math.cos(e)*r,Math.sin(e)*r,Math.cos(n))}function ov(){const i=st(0,Math.PI*2);return new b(Math.cos(i),0,Math.sin(i))}function gi(i,t){const e=2/t,n=i*e-1+e/2,r=Math.sqrt(Math.max(0,1-n*n)),s=Math.PI*(3-Math.sqrt(5)),c=i*s;return new b(Math.cos(c)*r,n,Math.sin(c)*r)}function jo(i){const t=Math.abs(i.y)>.8?new b(1,0,0):new b(0,1,0),e=new b().crossVectors(i,t).normalize(),n=new b().crossVectors(i,e).normalize();return{axis:i,tangent:e,bitangent:n}}function cv(i){if(i==="ring"||i==="cross"||i==="comet"||i==="double"||i==="nova"||i==="saturn"||i==="crossette")return jo(pe());if(i==="sprayburst"){const t=pe();return t.y=Math.abs(t.y)*.7+.3,t.normalize(),jo(t)}return i==="lissajous"?{a:ie(2,4),b:ie(3,6),c:ie(2,5),phase:st(0,Math.PI*2)}:i==="crownburst"?{spikes:ie(6,10)}:i==="arcflower"?{petals:ie(5,9)}:null}function lv(i,t,e,n){if(i==="burst")return pe();if(i==="ring"){const a=Math.random()*Math.PI*2;if(n){const o=n.tangent.clone().multiplyScalar(Math.cos(a)).add(n.bitangent.clone().multiplyScalar(Math.sin(a)));return o.addScaledVector(n.axis,st(-.08,.08)),o.normalize()}return new b(Math.cos(a),Math.sin(a),st(-.15,.15)).normalize()}if(i==="fan"){const a=st(-Math.PI/2,Math.PI/2),o=st(.1,Math.PI/2.4);return new b(Math.cos(a)*Math.cos(o),Math.sin(o),Math.sin(a)*Math.cos(o)).normalize()}if(i==="spiral"){const a=st(6,10),o=t/e*Math.PI*a,l=.6+.4*Math.sin(o*.35);return new b(Math.cos(o)*l,Math.sin(o)*l,Math.cos(o*.3)*.35).normalize()}if(i==="rosette"){const o=t/e*Math.PI*2,h=.45+.45*Math.abs(Math.cos(o*8));return new b(Math.cos(o)*h,Math.sin(o)*h,st(-.12,.12)).normalize()}if(i==="arcburst"){const a=e>1?t/(e-1):.5,o=(-.75+.5*a)*Math.PI,l=.5+.35*Math.sin(a*Math.PI),h=Math.cos(o)*l,u=Math.sin(o)*l+.15,p=Math.sin(a*Math.PI*2)*.2;return new b(h,u,p).normalize()}if(i==="braid"){const a=t/e,o=a*Math.PI*6+(t%2===0?0:Math.PI),l=.45+.25*Math.sin(a*Math.PI*2),h=.2+a*.8;return new b(Math.cos(o)*l,h,Math.sin(o)*l).normalize()}if(i==="lotus"){const o=t/e*Math.PI*2,h=.45+.45*Math.abs(Math.sin(o*10)),u=.2+.25*Math.cos(o*10*.5),p=.15*Math.sin(o*10*.5);return new b(Math.cos(o)*h,u,Math.sin(o)*h+p).normalize()}if(i==="spire"){const a=t/e,o=a*Math.PI*8,l=.2+.6*(1-a),h=.25+.7*a;return new b(Math.cos(o)*l,h,Math.sin(o)*l).normalize()}if(i==="fanwave"){const a=t/e,o=-Math.PI/2+a*Math.PI,l=.2+.6*Math.sin(a*Math.PI);return new b(Math.cos(o)*Math.cos(l),Math.sin(l),Math.sin(o)*Math.cos(l)).normalize()}if(i==="arcflower"){const a=(n==null?void 0:n.petals)??7,o=t/e*Math.PI*2,h=.45+.45*Math.abs(Math.sin(o*a)),u=.1+.35*Math.cos(o*a*.5);return new b(Math.cos(o)*h,u,Math.sin(o)*h).normalize()}if(i==="lissajous"){const a=t/e*Math.PI*2,o=(n==null?void 0:n.a)??3,l=(n==null?void 0:n.b)??4,h=(n==null?void 0:n.c)??2,u=(n==null?void 0:n.phase)??0,p=Math.sin(o*a+u),m=Math.sin(l*a),v=Math.sin(h*a+u*.6)*.8;return new b(p,m,v).normalize()}if(i==="crownburst"){const a=(n==null?void 0:n.spikes)??8,o=t/e*Math.PI*2,h=.25+.45*(.35+.6*Math.abs(Math.cos(o*a))),u=Math.sqrt(Math.max(0,1-h*h));return new b(Math.cos(o)*u,h,Math.sin(o)*u).normalize()}if(i==="sprayburst"){const a=(n==null?void 0:n.axis)??new b(0,1,0),o=(n==null?void 0:n.tangent)??new b(1,0,0),l=(n==null?void 0:n.bitangent)??new b(0,0,1),h=t/e*Math.PI*2,u=.35+.25*Math.sin(h*2);return a.clone().addScaledVector(o,Math.cos(h)*u).addScaledVector(l,Math.sin(h)*u).normalize()}if(i==="ribbon"){const a=t/e,o=a*Math.PI*6,l=.45+.3*Math.sin(a*Math.PI*2),h=.15+.7*Math.sin(a*Math.PI),u=.25*Math.cos(o*.5);return new b(Math.cos(o)*l,h,Math.sin(o)*l+u).normalize()}if(i==="crescent"){const a=t/e*Math.PI*1.6-Math.PI*.8,o=.65+.25*Math.cos(a*.6),l=Math.cos(a)*o+.35,h=Math.sin(a)*o;return new b(l,h,st(-.15,.15)).normalize()}if(i==="diamond"){const a=t/e*Math.PI*2,o=Math.cos(a),l=Math.sin(a),h=1/(Math.abs(o)+Math.abs(l)),u=.75+.15*Math.sin(a*4);return new b(o*h*u,l*h*u,st(-.12,.12)).normalize()}if(i==="lattice"){const o=t%5,l=o/4-.5,h=t/e*Math.PI*6,u=.55+.25*Math.sin(h*1.5+o);return new b(Math.cos(h)*u,l*.85,Math.sin(h)*u).normalize()}if(i==="sphere")return gi(t,e);if(i==="dahlia")return gi(t,e).add(pe().multiplyScalar(.08)).normalize();if(i==="globe")return gi(t,e).add(pe().multiplyScalar(.04)).normalize();if(i==="pearl")return gi(t,e).add(pe().multiplyScalar(.12)).normalize();if(i==="shell")return pe().add(pe().multiplyScalar(.06)).normalize();if(i==="orbital"){const a=gi(t,e),o=new b(-a.z,0,a.x).multiplyScalar(.2);return a.add(o).normalize()}if(i==="bloom"){const a=gi(t,e),o=.2+.3*Math.sin(t/e*Math.PI*6);return a.add(pe().multiplyScalar(o)).normalize()}if(i==="flower"){const a=ie(5,8),o=t/e*Math.PI*2,l=.6+.35*Math.sin(o*a);return new b(Math.cos(o)*l,Math.sin(o)*l,st(-.2,.2)).normalize()}if(i==="cross"&&n){const o=(Math.random()<.5?n.tangent:n.bitangent).clone().multiplyScalar(Math.random()<.5?-1:1);return o.addScaledVector(n.axis,st(-.18,.18)),o.addScaledVector(pe(),.05),o.normalize()}if(i==="comet")return((n==null?void 0:n.axis)??pe()).clone().add(pe().multiplyScalar(.35)).normalize();if(i==="crown"){const a=st(0,Math.PI*2),o=st(.15,.45),l=Math.sqrt(1-o*o);return new b(Math.cos(a)*l,o,Math.sin(a)*l).normalize()}if(i==="palm"){const a=st(0,Math.PI*2),o=st(.55,.95),l=Math.sqrt(1-o*o);return new b(Math.cos(a)*l,o,Math.sin(a)*l).normalize()}if(i==="willow"){const a=st(0,Math.PI*2),o=st(.2,.45),l=Math.sqrt(1-o*o);return new b(Math.cos(a)*l,o,Math.sin(a)*l).normalize()}if(i==="star"){const a=ie(5,7),o=t/e*Math.PI*2,h=.45+.5*Math.abs(Math.cos(o*a));return new b(Math.cos(o)*h,Math.sin(o)*h,st(-.18,.18)).normalize()}if(i==="wave"){const o=t/e*Math.PI*2,l=Math.sin(o*3)*.35;return new b(Math.cos(o),l,Math.sin(o)).normalize()}if(i==="scatter"){const a=pe();return a.y=Math.abs(a.y)*.75+.25,a.normalize()}if(i==="umbrella"){const a=st(0,Math.PI*2),o=st(.65,.95),l=Math.sqrt(1-o*o);return new b(Math.cos(a)*l,o,Math.sin(a)*l).normalize()}if(i==="peony"){const a=pe();return a.y=Math.abs(a.y)*.7+.3,a.normalize()}if(i==="chrysanthemum"){const a=ie(8,12),o=t/e*Math.PI*2,l=.5+.45*Math.sin(o*a),h=.15+.35*Math.cos(o*a);return new b(Math.cos(o)*l,h,Math.sin(o)*l).normalize()}if(i==="double"&&n){const a=t/e*Math.PI*2,o=t%2===0?1:-1,l=n.tangent.clone().multiplyScalar(Math.cos(a)*.6).add(n.bitangent.clone().multiplyScalar(Math.sin(a)*.6*o));return l.addScaledVector(n.axis,st(.2,.7)),l.addScaledVector(pe(),.05),l.normalize()}if(i==="nova"){const a=ie(10,16),o=t/e*Math.PI*2,l=.35+.65*Math.abs(Math.sin(o*a));if(n){const h=n.tangent.clone().multiplyScalar(Math.cos(o)*l).add(n.bitangent.clone().multiplyScalar(Math.sin(o)*l));return h.addScaledVector(n.axis,.15+l*.5),h.normalize()}return new b(Math.cos(o)*l,.15+l*.5,Math.sin(o)*l).normalize()}if(i==="fountain"){const a=st(0,Math.PI*2),o=st(.8,1),l=Math.sqrt(1-o*o);return new b(Math.cos(a)*l,o,Math.sin(a)*l).normalize()}if(i==="cylinder"){const a=st(0,Math.PI*2),o=st(.1,.35),l=Math.sqrt(1-o*o);return new b(Math.cos(a)*l,o,Math.sin(a)*l).normalize()}if(i==="tornado"){const a=t/e,o=a*Math.PI*6,l=.2+a*.8,h=.4+.4*a;return new b(Math.cos(o)*h,l,Math.sin(o)*h).normalize()}if(i==="vortex"){const a=t/e,o=a*Math.PI*10,l=.4+.5*Math.sin(a*Math.PI),h=.2+.6*(1-a);return new b(Math.cos(o)*l,h,Math.sin(o)*l).normalize()}if(i==="halo"){const a=st(0,Math.PI*2),o=st(.35,.55),l=Math.sqrt(1-o*o);return new b(Math.cos(a)*l,o,Math.sin(a)*l).normalize()}if(i==="sheaf"){const a=st(-Math.PI/6,Math.PI/6),o=st(.4,.9);return new b(Math.cos(a)*Math.cos(o),Math.sin(o),Math.sin(a)*Math.cos(o)).normalize()}if(i==="pinwheel"){const a=t/e,o=a*Math.PI*8,l=.5+.4*Math.sin(a*Math.PI);return new b(Math.cos(o)*l,Math.sin(o)*.35,Math.sin(o)*l).normalize()}if(i==="petal"){const a=ie(6,10),o=t/e*Math.PI*2,l=.55+.35*Math.cos(o*a),h=.25+.35*Math.sin(o*a);return new b(Math.cos(o)*l,h,Math.sin(o)*l).normalize()}if(i==="starburst"){const a=ie(8,14),o=t/e*Math.PI*2,l=.4+.6*Math.abs(Math.cos(o*a));return new b(Math.cos(o)*l,.25+l*.5,Math.sin(o)*l).normalize()}if(i==="ripple"){const a=t/e,o=a*Math.PI*2,l=.5+.45*Math.sin(a*Math.PI*4);return new b(Math.cos(o)*l,Math.sin(o)*.2,Math.sin(o)*l).normalize()}if(i==="burstlet"){const a=pe();return a.y=Math.abs(a.y)*.55+.25,a.normalize()}if(i==="saturn"){const a=Math.floor(e*.7);if(t<a){const o=t/a*Math.PI*2;if(n){const l=n.tangent.clone().multiplyScalar(Math.cos(o)).add(n.bitangent.clone().multiplyScalar(Math.sin(o)));return l.addScaledVector(n.axis,st(-.08,.08)),l.normalize()}return new b(Math.cos(o),Math.sin(o),st(-.12,.12)).normalize()}return pe().normalize()}if(i==="crossette"&&n){const o=(Math.random()<.5?n.tangent:n.bitangent).clone().multiplyScalar(Math.random()<.5?-1:1);return o.addScaledVector(n.axis,st(-.15,.15)),o.normalize()}if(i==="spokes"){const a=ie(8,14),o=Math.PI*2/a,h=Math.round(t/e*a)*o+st(-.18,.18),u=st(.2,.6),p=Math.sqrt(1-u*u);return new b(Math.cos(h)*p,u,Math.sin(h)*p).normalize()}if(i==="helix"){const a=st(4,7),o=t/e,l=o*Math.PI*2*a,h=.45+.25*Math.sin(o*Math.PI*2),u=.2+.8*o;return new b(Math.cos(l)*h,u,Math.sin(l)*h).normalize()}const r=st(0,Math.PI*2),s=st(.35,.9),c=Math.sqrt(1-s*s);return new b(Math.cos(r)*c,s,Math.sin(r)*c).normalize()}class Ko{constructor(t,e,n={}){const{sizeScale:r=1,opacityScale:s=1,lifeScale:c=1,offset:a=null}=n;this.life=Ft(X0)*c,this.lifeMax=this.life;const o=Math.random();let l=1,h=1;o<j0?(l=Ft(Z0),h=Ft(J0)):o>1-K0&&(l=Ft($0),h=Ft(Q0)),l*=r,h*=s,this.baseOpacity=Ws(Ft(q0)*h,tv,ev),this.size=Ft(Y0)*l,this.material=new Pc({map:rm,color:e,transparent:!0,opacity:this.baseOpacity,depthWrite:!1,blending:yi,alphaTest:.5}),this.material.rotation=st(0,Math.PI*2);const u=a?t.clone().add(a):t;this.sprite=new tm(this.material),this.sprite.position.copy(u),this.sprite.scale.set(this.size,this.size,1)}update(t){if(this.life-=t,this.life<=0)return!1;const e=this.life/this.lifeMax,n=e*e;this.material.opacity=this.baseOpacity*n;const r=this.size*(1+(1-e)*.2);return this.sprite.scale.set(r,r,1),!0}dispose(){this.material.dispose()}}class hv{constructor(t,e){this.count=e.count,this.pattern=e.pattern,this.radius=e.radius,this.lifeBase=e.life,this.trailStretch=e.trailStretch,this.trailGrowth=e.trailGrowth??0,this.drag=e.drag,this.drift=e.drift,this.pointSize=e.pointSize,this.trailMode=e.trailMode??"lines",this.trailSamples=e.trailSamples??2,this.trailPointScale=e.trailPointScale??1,this.trailWidthScale=e.trailWidthScale??1,this.trailBrightness=e.trailBrightness??1,this.trailFadePower=e.trailFadePower??Nc,this.trailVisible=e.trailVisible??!0,this.trailOpacity=e.trailOpacity??.9,this.trailHistory=e.trailHistory??!1,this.spiralStrength=e.spiralStrength??0,this.spiralSpeed=e.spiralSpeed??0,this.swirlStrength=e.swirlStrength??0,this.swirlSpeed=e.swirlSpeed??0,this.snowflake=e.snowflake??!1,this.snowflakeSwayStrength=e.snowflakeSwayStrength??0,this.snowflakeSwaySpeed=e.snowflakeSwaySpeed??0,this.snowflakePhase=null,this.trajectoryMode=e.trajectoryMode??null,this.trajectoryStrength=e.trajectoryStrength??0,this.trajectorySpeed=e.trajectorySpeed??0,this.trajectoryPhase=null,this.trajectoryVectors=null,this.curlNoise=e.curlNoise??!1,this.curlNoiseStrength=e.curlNoiseStrength??0,this.curlNoiseScale=e.curlNoiseScale??1,this.curlNoiseSpeed=e.curlNoiseSpeed??0,this.curlNoiseOffset=null,this.curlNoiseTwist=e.curlNoiseTwist??1,this.curlNoiseYAxis=e.curlNoiseYAxis??1,this.directionRotation=e.directionRotation??null,this.directionMirror=e.directionMirror??null,this.directionScale=e.directionScale??null,this.directionChaosChance=e.directionChaosChance??0,this.directionChaosAngle=e.directionChaosAngle??null,this.directionChaosScaleRange=e.directionChaosScaleRange??null,this.directionChaosMirrorChance=e.directionChaosMirrorChance??0,this.gravityScale=e.gravityScale??1,this.gravityRamp=e.gravityRamp??0,this.curveStrength=e.curveStrength??0,this.curveDecay=e.curveDecay??1,this.patternData=cv(this.pattern),this.curveVectors=null,this.trailHistoryIndex=null,this.spiralPhase=null,this.swirlPhase=null,this.trailMode!=="dots"&&(this.trailSamples=2,this.trailHistory=!1);const n=this.radius/this.lifeBase;if(this.positions=new Float32Array(this.count*3),this.trailPositions=new Float32Array(this.count*this.trailSamples*3),this.colors=new Float32Array(this.count*3),this.baseColors=new Float32Array(this.count*3),this.trailColors=new Float32Array(this.count*this.trailSamples*3),this.velocities=new Float32Array(this.count*3),this.life=new Float32Array(this.count),this.lifeMax=new Float32Array(this.count),this.curveStrength>0){this.curveVectors=new Float32Array(this.count*2);for(let c=0;c<this.count;c+=1){const a=st(0,Math.PI*2),o=this.curveStrength*st(.6,1.4),l=c*2;this.curveVectors[l]=Math.cos(a)*o,this.curveVectors[l+1]=Math.sin(a)*o}}if(this.trailHistory&&(this.trailHistoryIndex=new Uint16Array(this.count)),this.spiralStrength>0){this.spiralPhase=new Float32Array(this.count);for(let c=0;c<this.count;c+=1)this.spiralPhase[c]=st(0,Math.PI*2)}if(this.swirlStrength>0){this.swirlPhase=new Float32Array(this.count);for(let c=0;c<this.count;c+=1)this.swirlPhase[c]=st(0,Math.PI*2)}if(this.snowflake){this.snowflakePhase=new Float32Array(this.count);for(let c=0;c<this.count;c+=1)this.snowflakePhase[c]=st(0,Math.PI*2)}if(this.curlNoise&&(this.curlNoiseOffset=new b(st(-100,100),st(-100,100),st(-100,100))),this.trajectoryMode){this.trajectoryPhase=new Float32Array(this.count),(this.trajectoryMode==="zigzag"||this.trajectoryMode==="flutter")&&(this.trajectoryVectors=new Float32Array(this.count*3));for(let c=0;c<this.count;c+=1)if(this.trajectoryPhase[c]=st(0,Math.PI*2),this.trajectoryVectors){const a=ov(),o=c*3;this.trajectoryVectors[o]=a.x,this.trajectoryVectors[o+1]=a.y,this.trajectoryVectors[o+2]=a.z}}for(let c=0;c<this.count;c+=1){const a=lv(this.pattern,c,this.count,this.patternData);this.directionScale&&a.multiply(this.directionScale).normalize(),this.directionMirror&&a.multiply(this.directionMirror),this.directionRotation&&a.applyQuaternion(this.directionRotation),this.directionChaosChance>0&&Math.random()<this.directionChaosChance&&(this.directionChaosScaleRange&&a.multiply(Fc(this.directionChaosScaleRange)).normalize(),this.directionChaosMirrorChance>0&&Math.random()<this.directionChaosMirrorChance&&a.multiply(ks(.5)),this.directionChaosAngle&&(a.applyAxisAngle(pe(),Ft(this.directionChaosAngle)),a.normalize()));const o=n*st(.6,1.2),l=c*3;this.positions[l]=t.x,this.positions[l+1]=t.y,this.positions[l+2]=t.z,this.velocities[l]=a.x*o,this.velocities[l+1]=a.y*o,this.velocities[l+2]=a.z*o;const h=this.lifeBase*st(.7,1.3);this.life[c]=h,this.lifeMax[c]=h;const p=((e.hues?Be(e.hues):e.hue)+st(-e.hueVariance,e.hueVariance)+1)%1,m=st(Oo[0],Oo[1]),v=st(Fo[0],Fo[1]),S=Bc(p,m,v);S.multiplyScalar(zm),v>=Hm?S.multiplyScalar(Gm):v<=Vm&&S.multiplyScalar(km),this.colors[l]=S.r,this.colors[l+1]=S.g,this.colors[l+2]=S.b,this.baseColors[l]=S.r,this.baseColors[l+1]=S.g,this.baseColors[l+2]=S.b;const f=c*this.trailSamples*3;for(let d=0;d<this.trailSamples;d+=1){const A=f+d*3;this.trailColors[A]=S.r*this.trailBrightness,this.trailColors[A+1]=S.g*this.trailBrightness,this.trailColors[A+2]=S.b*this.trailBrightness,this.trailHistory&&(this.trailPositions[A]=t.x,this.trailPositions[A+1]=t.y,this.trailPositions[A+2]=t.z)}}this.pointsGeometry=new ze,this.pointsGeometry.setAttribute("position",new Te(this.positions,3)),this.pointsGeometry.setAttribute("color",new Te(this.colors,3));const r=this.pointSize*this.trailPointScale*this.trailWidthScale*bs,s=Math.max(this.pointSize,r*Xm);this.pointsMaterial=new Gs({size:s*bs,vertexColors:!0,map:Po,alphaTest:.35,transparent:!0,opacity:1,depthWrite:!1,blending:yi}),this.points=new Co(this.pointsGeometry,this.pointsMaterial),this.trailGeometry=new ze,this.trailGeometry.setAttribute("position",new Te(this.trailPositions,3)),this.trailGeometry.setAttribute("color",new Te(this.trailColors,3)),this.trailMode==="dots"?(this.trailMaterial=new Gs({size:this.pointSize*this.trailPointScale*this.trailWidthScale,vertexColors:!0,map:Po,alphaTest:.35,transparent:!0,opacity:this.trailOpacity,depthWrite:!1,blending:yi}),this.trail=new Co(this.trailGeometry,this.trailMaterial)):(this.trailMaterial=new Dc({vertexColors:!0,transparent:!0,opacity:this.trailOpacity,depthWrite:!1,blending:yi,linewidth:this.trailWidthScale*bs}),this.trail=new nm(this.trailGeometry,this.trailMaterial))}update(t){let e=0;for(let n=0;n<this.count;n+=1){let r=this.life[n]-t;this.life[n]=r;const s=n*3,c=n*this.trailSamples*3;if(r<=0){this.colors[s]=0,this.colors[s+1]=0,this.colors[s+2]=0;for(let W=0;W<this.trailSamples;W+=1){const _=c+W*3;this.trailColors[_]=0,this.trailColors[_+1]=0,this.trailColors[_+2]=0}continue}e+=1;const a=Math.max(r/this.lifeMax[n],0),o=1-a,l=this.gravityScale*(1+this.gravityRamp*o);let h=this.velocities[s],u=this.velocities[s+1],p=this.velocities[s+2];if(h+=(As.x*l+this.drift.x)*t,u+=(As.y*l+this.drift.y)*t,p+=(As.z*l+this.drift.z)*t,this.curveVectors){const W=n*2,_=Math.pow(a,this.curveDecay);h+=this.curveVectors[W]*_*t,p+=this.curveVectors[W+1]*_*t}if(this.spiralStrength>0&&this.spiralPhase){const W=this.spiralPhase[n]+this.spiralSpeed*o+a*.6;h+=Math.cos(W)*this.spiralStrength*t,p+=Math.sin(W)*this.spiralStrength*t}if(this.swirlStrength>0&&this.swirlPhase){const W=this.swirlPhase[n]+this.swirlSpeed*o+a*1.2,_=.35+.65*o;h+=Math.sin(W)*this.swirlStrength*_*t,p+=Math.cos(W)*this.swirlStrength*_*t}if(this.snowflake&&this.snowflakePhase){const W=this.snowflakePhase[n]+this.snowflakeSwaySpeed*o+a*.5,_=.4+.6*o;h+=Math.sin(W)*this.snowflakeSwayStrength*_*t,p+=Math.cos(W)*this.snowflakeSwayStrength*_*t,u*=.99}if(this.trajectoryMode&&this.trajectoryPhase){const W=this.trajectoryPhase[n]+this.trajectorySpeed*o;if(this.trajectoryMode==="zigzag"&&this.trajectoryVectors){const _=n*3,y=Math.sin(W)*this.trajectoryStrength;h+=this.trajectoryVectors[_]*y*t,u+=this.trajectoryVectors[_+1]*y*t,p+=this.trajectoryVectors[_+2]*y*t}else if(this.trajectoryMode==="corkscrew"){const _=this.trajectoryStrength*t;h+=Math.cos(W)*_,p+=Math.sin(W)*_}else if(this.trajectoryMode==="flutter"&&this.trajectoryVectors){const _=n*3,y=Math.sin(W*1.6)*this.trajectoryStrength;h+=this.trajectoryVectors[_]*y*.6*t,p+=this.trajectoryVectors[_+2]*y*.6*t,u+=y*.35*t}}const m=this.positions[s],v=this.positions[s+1],S=this.positions[s+2];if(this.curlNoise&&this.curlNoiseOffset){const W=ki*this.curlNoiseSpeed,_=m*this.curlNoiseScale+this.curlNoiseOffset.x,y=v*this.curlNoiseScale+this.curlNoiseOffset.y,V=S*this.curlNoiseScale+this.curlNoiseOffset.z+W,q=av(_,y,V,Hg),L=this.curlNoiseTwist;if(h+=q.x*this.curlNoiseStrength*t,u+=q.y*this.curlNoiseStrength*this.curlNoiseYAxis*t,p+=q.z*this.curlNoiseStrength*t,L!==1){const B=L*t*(.4+o),N=h*Math.cos(B)-p*Math.sin(B),G=h*Math.sin(B)+p*Math.cos(B);h=N,p=G}}h*=this.drag,u*=this.drag,p*=this.drag,this.velocities[s]=h,this.velocities[s+1]=u,this.velocities[s+2]=p;const f=m+h*t,d=v+u*t,A=S+p*t;this.positions[s]=f,this.positions[s+1]=d,this.positions[s+2]=A;const x=f-m,R=d-v,P=A-S;this.colors[s]=this.baseColors[s]*a,this.colors[s+1]=this.baseColors[s+1]*a,this.colors[s+2]=this.baseColors[s+2]*a;const w=Math.max((a-zo)/(1-zo),0),k=Math.pow(w,this.trailFadePower)*this.trailBrightness;if(this.trailHistory){let W=this.trailHistoryIndex[n];W=(W+1)%this.trailSamples,this.trailHistoryIndex[n]=W;const _=c+W*3;this.trailPositions[_]=f,this.trailPositions[_+1]=d,this.trailPositions[_+2]=A;const y=this.trailSamples>1?this.trailSamples-1:1;for(let V=0;V<this.trailSamples;V+=1){const q=(W-V+this.trailSamples)%this.trailSamples,L=c+q*3,B=Math.pow(1-V/y,1.6),N=k*B;this.trailColors[L]=this.baseColors[s]*N,this.trailColors[L+1]=this.baseColors[s+1]*N,this.trailColors[L+2]=this.baseColors[s+2]*N}}else{const W=this.trailStretch*(1+this.trailGrowth*o),_=f-x*W,y=d-R*W,V=A-P*W,q=this.trailSamples,L=q>1?q-1:1;for(let B=0;B<q;B+=1){const N=B/L,G=c+B*3;this.trailPositions[G]=_+(f-_)*N,this.trailPositions[G+1]=y+(d-y)*N,this.trailPositions[G+2]=V+(A-V)*N,this.trailColors[G]=this.baseColors[s]*k,this.trailColors[G+1]=this.baseColors[s+1]*k,this.trailColors[G+2]=this.baseColors[s+2]*k}}}return this.pointsGeometry.attributes.position.needsUpdate=!0,this.pointsGeometry.attributes.color.needsUpdate=!0,this.trailGeometry.attributes.position.needsUpdate=!0,this.trailGeometry.attributes.color.needsUpdate=!0,e>0}dispose(){this.pointsGeometry.dispose(),this.pointsMaterial.dispose(),this.trailGeometry.dispose(),this.trailMaterial.dispose()}}function uv(i,t,e=!1,n=!1,r=!1){const s=i.scale??1;let c=r,a=t??Math.random();const o=!c&&Math.random()<ng,l=o?Ft(rg):1;let h=i.hueVariance??.1;const u=!i.spherical,p=i.spherical&&Math.random()<Nm;p&&(a=Om,h=Math.min(h,Fm)),u&&Math.random()<c0&&(a=(Be(Oc)+st(-Ho,Ho)+1)%1);const m=i.trailBoost??1,v=i.curveStrength?Ft(i.curveStrength):0,S=i.curveDecay?Ft(i.curveDecay):1,f=i.gravityRamp?Ft(i.gravityRamp):0,d=Math.random()<dm?um:1,A=Math.random()<lm,x=Math.random()<Gg,R=x||Math.random()<a_,P=Math.random()<v_,w=Math.random(),C=w<D_,k=Math.random()<F_,W=i.spherical&&Math.random()<k_,_=o&&Math.random()<mg,y=w<A_||k||W||e||_,V=W?W_:1,q=W?X_:1,L=!c&&(!i.spherical||n||o),B=L&&Math.random()<o_,N=L&&i.spherical&&Math.random()<H0;let G=B||N||n||o,X=!1;!o&&G&&Math.random()<Q_&&(G=!1,X=!0,Math.random()<tg&&(c=!0));const j=(G?Jg*(N?G0:1)*zg:1)*(o?ig:1),tt=G?Qg:0,rt=(G?t0:0)+(o?og:0),At=i.spherical&&Math.random()<fm?pm:1,H=Math.random()<Am,$=H?Rm:1,lt=H?bm:1,Mt=H?Cm:1,_t=R||P||y,dt=i.dotTrailChance??_m,Ht=_t||Math.random()<dt,Ct=Math.random()<xm,D=Hi(i.dotTrailSamples??Mm),se=Hi(Wg),vt=Hi(Kg),Rt=Hi(S_),mt=Hi(R_);let Xt=x?ie(se[0],se[1]):_t?ie(vt[0],vt[1]):Ht?ie(D[0],D[1]):2;if(P&&(Xt=ie(Rt[0],Rt[1])),y){const Le=ie(mt[0],mt[1]);Xt=Math.max(Xt,Le)}o&&(Xt=Math.max(2,Math.round(Xt*pg)));const Pt=Ht?vm*(x?Xg:1)*(P?x_:1)*(y?b_:1):1,E=Ft(e0)*(i.spherical?mm:1),g=(Ht?Sm:1)*Mt*n0,O=Ht?gm:1,J=Math.random()<Ym,K=Math.random()<i0?r0:1,Q=C?U_:1,ft=k?B_*(i.spherical?V_:1):1,at=_?_g:1,ht=e?K_:1,Et=n?Tg:1,Z=Math.random()<t_?e_:1,Yt=Math.random()<n_?i_:1,Bt=Math.random()<r_?s_:1,yt=!c&&Math.random()<p_,gt=!c&&G&&Math.random()<u_;let ct=!c&&(yt||gt||Math.random()<c_);o&&!c&&(ct=!0);const It=Math.random()<Zg,Vt=Math.random()<$m,Jt=Vt?Qm:1;let bt=(J?jm:1)*(Vt?Jm:1)*(_t?qg:1)*(x?kg:1);P&&(bt*=M_),y&&(bt*=I_),C&&(bt*=N_),k&&(bt*=z_),e&&(bt*=Z_),n&&(bt*=Ag),o&&(bt*=ag),W&&(bt*=q);const jt=Math.max(J?Km:0,_t?jg:0)+rt,T=J?Zm:0,et=P?y_:0,nt=y?L_:0,ut=k?G_:0,St=yt?g_:0,Wt=W?Y_:0,Kt=J?qm:1,le=_t?Yg:1,Re=x?Vg:1,qt=!u&&!p&&Math.random()<wm,me=!qt&&Math.random()<Im?Ft(Dm):0,De=qt?Math.min(h+Ft(Lm),Pm):Math.min(h+me,Um),Ki=qt?Math.random()<v0?Array.from({length:ie(2,3)},()=>Be(g0)):[a,(a+st(.1,.3))%1,(a+st(.55,.85))%1].slice(0,ie(2,3)):null,Vr=N?Ft(V0):0,qn=N?Ft(k0):0,Zi=yt?Ft(m_):gt?Ft(d_):ct?Ft(l_):0,jn=yt?Ft(__):gt?Ft(f_):ct?Ft(h_):0,$i=Zi*(o?Bo:1),Ji=jn*(o?Bo:1),Kn=!c&&!Ct&&(Math.random()<wg||G),je=G?Be(Bg):null,M=G&&Math.random()<(o?dg:Og)?o?fg:Fg:1,I=Math.min(1,bg+(X?eg:0)),U=!c&&Math.random()<I?Be(Cg):null,z=U?U.name:null,F=U?Ft(U.strength):0,ot=U?Ft(U.speed):0,pt=i.spherical?U0:1,xt=i.spherical?N0:1,Tt=i.spherical?F0:1,Dt=i.spherical?B0:1,wt=i.spherical?z0:1,Lt=i.spherical&&Math.random()<m0?_0:1,Qt=Cr();Qt.multiply(Cr()),u&&Qt.multiply(Cr());const re=u?ks(a0):ks();if(i.pattern==="cross"){for(let Le=0;Le<Bm;Le+=1)Qt.multiply(Cr());if(re.x>0&&re.y>0&&re.z>0){const Le=ie(0,2);Le===0?re.x=-1:Le===1?re.y=-1:re.z=-1}}const ae=u?Fc(o0):null,He=u?d0:l0,te=u?[Cs[0]*.9,Cs[1]*1.1]:Cs,Nt=(y?C_:1)*Wm,Je=Math.random()<Mg,ee=Ft(i.drag),Ke=(P?T_:0)+(y?P_:0)+(W?q_:0)+(_?Sg:0)+(Je?yg:0),Qi=Ke>0?Math.min(ee+Ke,.995):ee;return{pattern:i.pattern,count:Math.round(ie(i.count[0],i.count[1])*pt),radius:Ft(i.radius)*am*s*d*(A?hm:1)*$*xt*(i.spherical?O0:1),life:Ft(i.life)*bt*cm*wt,trailStretch:Ft(i.trailStretch)*om*m*At*Tt*O*Kt*Z*Jt*lt*le*Re*K*Bt*(o?sg:1)*Yt*Lt*Q*ft*at*ht*V*Et,drag:Qi,drift:qo(Je?{x:[i.drift.x[0]*_i,i.drift.x[1]*_i],y:[i.drift.y[0]*_i,i.drift.y[1]*_i],z:[i.drift.z[0]*_i,i.drift.z[1]*_i]}:i.drift),pointSize:Ft(i.pointSize)*g,hue:a,hues:Ki,hueVariance:De,gravityScale:Ft(i.gravityScale)*Dt*(P?E_:1)*(y?w_:1)*(k?H_:1)*(_?gg:1),gravityRamp:f+T+tt+et+nt+St+ut+(_?vg:0)+Wt,curveStrength:v*j,curveDecay:S,trailGrowth:jt,trailHistory:_t,trailMode:Ht?"dots":"lines",trailSamples:Xt,trailPointScale:Pt,trailWidthScale:E,trailBrightness:Nt,trailFadePower:C?O_:It?$g:Nc,trailVisible:!Ct,trailOpacity:Ct?0:.9,directionRotation:Qt,directionMirror:re,directionScale:ae,directionChaosChance:He,directionChaosAngle:h0,directionChaosScaleRange:te,directionChaosMirrorChance:u0,spiralStrength:Vr,spiralSpeed:qn,swirlStrength:$i,swirlSpeed:Ji,snowflake:Je,snowflakeSwayStrength:Je?Ft(xg):0,snowflakeSwaySpeed:Je?Ft(Eg):0,trajectoryMode:z,trajectoryStrength:F,trajectorySpeed:ot,curlNoise:Kn,curlNoiseStrength:Kn?Ft(Lg)*(G?Dg:1)*(je?je.strength:1)*(o?cg:1)*l:0,curlNoiseScale:Kn?Ft(Pg)*(G?Ug:1)*(je?je.scale:1)*(o?lg:1)*l:0,curlNoiseSpeed:Kn?Ft(Ig)*(G?Ng:1)*(je?je.speed:1)*(o?hg:1)*l:0,curlNoiseYAxis:M,curlNoiseTwist:G?Rg*(je?je.twist:1)*(o?ug:1)*l:1}}function Zo(i){const e=((i??Math.random())+st(-Wo,Wo)+1)%1;return Bc(e,st(Vo[0],Vo[1]),st(ko[0],ko[1]))}function dv(i,t){if(Math.random()>W0)return;const e=new Ko(i,Zo(t));Gi.push(e),yn.add(e.sprite);const n=ie(Xo[0],Xo[1]);for(let r=0;r<n;r+=1){const s=st(0,Math.PI*2),c=st(Yo[0],Yo[1]),a=new b(Math.cos(s)*c,Math.sin(s)*c,0),o=new Ko(i,Zo(t),{sizeScale:Ft(nv),opacityScale:Ft(iv),lifeScale:Ft(rv),offset:a});Gi.push(o),yn.add(o.sprite)}}function fv(){const i=Math.max(10,Math.round(Go[0]*No)),t=Math.max(i,Math.round(Go[1]*No));return{pattern:S0,count:[i,t],radius:M0,life:x0,trailStretch:E0,drag:y0,drift:T0,pointSize:A0,gravityScale:R0,hueVariance:b0,trailBoost:C0,curveStrength:w0,curveDecay:L0,gravityRamp:P0,dotTrailChance:I0,dotTrailSamples:D0,scale:Tm}}function pv(i,t,e,n=!1,r=!1,s=!1){if(Math.random()>=Em)return;const c=ie(Do[0],Do[1]),a=fv();for(let o=0;o<c;o+=1){const l=st(Uo[0],Uo[1]),h=st(0,Math.PI*2),u=new b(Math.cos(h)*l,Math.sin(h)*l*.7,0),p=Ft(ym)+o*st(.04,.12),m=zc(i.clone().add(u));xi.push({time:ki+p,position:m,profile:a,hue:e,allowMultiBlast:!1,clickDroop:n,clickCurly:r,forceStraight:s})}}function mv(i,t,e,n=!0,r=!1,s=!1,c=!1){const a=t??Be(vi),o=new hv(i,uv(a,e,r,s,c));Lr.push(o),yn.add(o.points),o.trailVisible&&o.trail&&yn.add(o.trail),n&&pv(i,a,e,r,s,c)}function _v(i,t){const e=new b(i/hn*2-1,-(t/un)*2+1,0);return e.unproject(xn),new b(e.x,e.y,0)}function zc(i){return new b(Ws(i.x,-hn/2+40,hn/2-40),Ws(i.y,-un/2+120,un/2-80),0)}function gv(i,t,e=!1,n=!1){const r=new Set(Rs?Rs.split("|"):[]),s=vi.filter(u=>u.spherical&&!r.has(u.pattern)),c=vi.filter(u=>!u.spherical&&!r.has(u.pattern)),a=vi.filter(u=>!r.has(u.pattern)),o=sv(c,{cross:f0});let l=null,h=!1;if(Math.random()<p0&&s.length?l=Be(s):o.length?l=Be(o):a.length?l=Be(a):l=Be(vi),n&&Math.random()<J_){const u=vi.filter(p=>p.pattern==="cross");u.length&&(l=Be(u),n=!1,h=!0)}Rs=l.pattern,dv(i,t),xi.push({time:ki,position:i,profile:l,hue:t,clickDroop:e,clickCurly:n,forceStraight:h})}function vv(i){const t=Be(Oc),e=Math.random()<j_,n=Math.random()<$_;gv(i,t,e,n)}function Sv(i){const t=_v(i.clientX,i.clientY),e=zc(t);vv(e);const n=document.querySelector("#hint");n&&n.classList.add("hidden")}function Mv(){hn=window.innerWidth,un=window.innerHeight,xn.left=-hn/2,xn.right=hn/2,xn.top=un/2,xn.bottom=-un/2,xn.updateProjectionMatrix(),ji.setSize(hn,un)}Zs.addEventListener("pointerdown",Sv);Zs.addEventListener("contextmenu",i=>i.preventDefault());window.addEventListener("resize",Mv);function Hc(){const i=Math.min(sm.getDelta(),.033);if(ki+=i,xi.length)for(let t=xi.length-1;t>=0;t-=1){const e=xi[t];e.time<=ki&&(mv(e.position,e.profile,e.hue,e.allowMultiBlast??!0,e.clickDroop??!1,e.clickCurly??!1,e.forceStraight??!1),xi.splice(t,1))}for(let t=Gi.length-1;t>=0;t-=1){const e=Gi[t];e.update(i)||(yn.remove(e.sprite),e.dispose(),Gi.splice(t,1))}for(let t=Lr.length-1;t>=0;t-=1){const e=Lr[t];e.update(i)||(yn.remove(e.points),e.trailVisible&&e.trail&&yn.remove(e.trail),e.dispose(),Lr.splice(t,1))}ji.render(yn,xn),requestAnimationFrame(Hc)}Hc();
