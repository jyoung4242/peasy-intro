var X=Object.defineProperty;var $=(f,e,t)=>e in f?X(f,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):f[e]=t;var h=(f,e,t)=>$(f,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();class P{constructor(){this.state="created",this.host=null,this.bindings=[],this.views=[],this.animations=[],this.animationQueue=[],this.destroyed="",this.moved=""}static create(e,t={},i,n={parent:null,prepare:!0,sibling:null}){const s=new P;if(s.model=t,s.element=i??e,s.parent=n.parent??c,s.host=n.host??s.parent.host,s.sibling=n.sibling??null,i instanceof HTMLTemplateElement||(i==null?void 0:i.tagName)==="TEMPLATE"){const r=i.content.cloneNode(!0);if(r.children.length===1)return c.create(e,t,r.firstElementChild,n);s.views=[...r.children].map(a=>c.create(e,t,a,{...n,parent:s})),s.state="rendered"}else s.bindings.push(...c.parse(s.element,t,s,n.parent));return s.parentElement=i!=null?e:e.ownerDocument.documentElement,s.views.length>1?(s.attached=Promise.all(s.views.map(r=>r.attached)),s.detached=Promise.all(s.views.map(r=>r.detached))):(s.attached=new Promise(r=>{s.t=r}),s.detached=new Promise(r=>{s.i=r})),s}get lastElement(){var i,n;if(this.render==null&&(this.render=!(((n=(i=this.element).hasAttribute)==null?void 0:n.call(i,"PUI-UNRENDERED"))??!1)),this.render)return this.element;const t=this.bindings.flatMap(s=>s.views).slice(-1)[0];return t==null?void 0:t.lastElement}destroy(){var e;this.views.forEach(t=>t.destroy()),(e=this.element.classList)==null||e.add("pui-removing"),this.destroyed="queue",c.destroyed.push(this)}terminate(){Promise.all(this.getAnimations()).then(()=>{var i;const e=this.element.parentElement;e==null||e.removeChild(this.element),(i=this.i)==null||i.call(this),this.dispatchEvent(e,"removed"),this.bindings.forEach(n=>n.unbind());const t=this.parent.views.findIndex(n=>n===this);t>-1&&this.parent.views.splice(t,1)}),this.destroyed="destroyed"}move(e){var t;this.moved="queue",(t=this.element.classList)==null||t.add("pui-moving"),this.sibling=e}play(e,t){return typeof e=="string"&&(e=this.animations.find(i=>i.name===e).clone()),e.element=t,e.state="pending",this.animationQueue.push(e),this.updateAnimations(performance.now()),e}updateFromUI(){this.views.forEach(e=>e.updateFromUI()),this.bindings.forEach(e=>e.updateFromUI())}updateToUI(){var t,i,n,s,r;const e=this.state==="created";switch(e||(this.views.forEach(a=>a.updateToUI()),this.bindings.forEach(a=>a.updateToUI())),this.state){case"created":if((t=this.element.classList)==null||t.add("pui-adding"),this.render=!(((n=(i=this.element).hasAttribute)==null?void 0:n.call(i,"PUI-UNRENDERED"))??!1),this.render){const a=(s=this.parent)==null?void 0:s.parent;let o=((a==null?void 0:a.render)??!1?this.sibling:a==null?void 0:a.sibling)??null;o=(o instanceof P?o.lastElement:o)??null;const d=this.parentElement??c.parentElement(this.element,this.parent);d.insertBefore(this.element,(o==null?void 0:o.nextSibling)??null),this.dispatchEvent(d,"added")}this.t(),this.state="attaching";break;case"attaching":this.getAnimations(!1).length===0&&((r=this.element.classList)==null||r.remove("pui-adding"),this.state="attached");break;case"attached":this.state="rendered";break}e&&(this.views.forEach(a=>a.updateToUI()),this.bindings.forEach(a=>a.updateToUI()))}updateAtEvents(){this.views.forEach(e=>e.updateAtEvents()),this.bindings.forEach(e=>e.updateAtEvents())}updateAnimations(e){var t;for(;((t=this.animationQueue[0])==null?void 0:t.state)==="finished";)this.animationQueue.shift().destroy();for(let i=0;i<this.animationQueue.length;i++){const n=this.animationQueue[i];n.state==="pending"&&(n.isBlocked(e)||(n.state="playing",n.startTime=e,n.animation=n.element.animate(n.keyframes,n.options),n.finished=n.animation.finished,n.finished.then(()=>{n.state="finished",this.updateAnimations(performance.now())})))}}updateMove(){var e;switch(this.moved){case"queue":this.moved="move";break;case"move":if(this.getAnimations().length===0){const t=this.parentElement??c.parentElement(this.element,this.parent);let i=(this.sibling instanceof P?this.sibling.lastElement:this.sibling)??null;if(this.render)t.insertBefore(this.element,(i==null?void 0:i.nextSibling)??null);else{const n=this.bindings.flatMap(s=>s.views);for(const s of n)t.insertBefore(s.element,(i==null?void 0:i.nextSibling)??null),i=s.element}(e=this.element.classList)==null||e.remove("pui-moving"),this.moved="",this.sibling=null}break}this.bindings.forEach(t=>t.updateMove()),this.views.forEach(t=>t.updateMove())}getAnimations(e=!0){var t,i;return(((i=(t=this.element).getAnimations)==null?void 0:i.call(t,{subtree:e}))??[]).filter(n=>{var s;return n.playState!=="finished"&&((s=n.effect)==null?void 0:s.getTiming().iterations)!==1/0}).map(n=>n.finished)}dispatchEvent(e,t){if(e!=null){const i=new CustomEvent(`pui-${t}`,{detail:{model:this.model.$model??this.model,context:this.model,element:this.element,view:this},bubbles:!0,cancelable:!0});e.dispatchEvent(i)}}}class V{constructor(){this.fromUI=!1,this.toUI=!0,this.atEvent=!1,this.oneTime=!1,this.views=[],this.firstUpdate=!0,this.events=[],this.triggerAtEvent=e=>{e.type==="change"?this.events.push(e):c.resolveValue(this.object,this.property).call(this.object.$model,e,this.object.$model,this.element,this.attribute,this.object)},this.twoWayBindingEvent=e=>{const{target:t,property:i}=c.resolveProperty(this.object,this.property),n=e.detail;if(n!==this.lastUIValue){let s=n;s!==void 0&&s!==this.lastValue&&c.resolveValue(this.object,this.property)==="number"&&!isNaN(s)&&(s=+s),t[i]=s}},this.id=++c.id}get element(){return this.$element==null&&(this.$element=typeof this.selector=="string"?this.context.querySelector(this.selector):this.selector),this.$element}set element(e){this.$element=e}static create(e){var a,p,o;const t=new V,i=((a=e.property)==null?void 0:a.split(":"))??[],n=i.shift(),s=typeof e.attribute!="boolean"?(e.attribute??"innerText").split(":"):[],r=typeof e.attribute!="boolean"?s.shift():e.attribute;if(t.parent=e.parent??c,t.object="$model"in e.object?e.object:{$model:e.object},t.object.$parent==null){const d=(o=(p=t.parent.parent)==null?void 0:p.object)==null?void 0:o.$parent;d!=null&&(t.object.$parent=d)}return t.property=n,t.propertyArguments=i,t.context=e.context??document,t.selector=e.selector,t.attribute=r,t.attributeArguments=s,t.value=e.value??t.value,t.template=e.template??t.template,t.fromUI=e.fromUI??t.fromUI,t.toUI=e.toUI??t.toUI,t.atEvent=e.atEvent??t.atEvent,t.oneTime=e.oneTime??t.oneTime,t.addListener(),typeof t.fromUI!="boolean"&&(t.fromUI=t.fromUI.bind(t)),typeof t.toUI!="boolean"&&(t.toUI=t.toUI.bind(t)),t}destroy(){this.element=null,this.removeListener(),this.views.forEach(e=>e.destroy())}unbind(){c.unbind(this)}addListener(){this.atEvent&&(this.toUI=!1,this.fromUI=!1,this.element.addEventListener(this.attribute,this.triggerAtEvent)),this.toUI&&this.fromUI&&customElements.get(this.element.tagName.toLowerCase())!=null&&this.element.addEventListener(this.attribute,this.twoWayBindingEvent)}removeListener(){this.atEvent&&this.element.removeEventListener(this.attribute,this.triggerAtEvent),this.toUI&&this.fromUI&&customElements.get(this.element.tagName.toLowerCase())!=null&&this.element.removeEventListener(this.attribute,this.twoWayBindingEvent)}updateFromUI(){var n;if(this.fromUI===!1||this.firstUpdate){this.firstUpdate=!1,this.views.forEach(s=>s.updateFromUI());return}const{target:e,property:t}=c.resolveProperty(this.element,this.attribute),i=e[t];if(i!==this.lastUIValue){let s=this.fromUI!==!0?this.fromUI(i,this.lastUIValue,this.property,this.object):i;if(this.lastUIValue=i,s!==void 0&&s!==this.lastValue){this.lastValue=s;const{target:r,property:a}=c.resolveProperty(this.object,this.property);c.resolveValue(this.object,this.property)==="number"&&!isNaN(s)&&(s=+s),r[a]=s}else this.lastValue=s;(n=this.parent.host)==null||n.dispatchEvent(new CustomEvent(t,{detail:s}))}this.views.forEach(s=>s.updateFromUI())}updateToUI(){if(this.toUI===!1){this.views.forEach(t=>t.updateToUI());return}let e=c.resolveValue(this.object,this.property);if(this.template!=null)if(this.template instanceof HTMLElement)if(typeof this.attribute=="boolean"){if(e=(e??!1)!==!1,e!==this.lastValue){const t=this.toUI!==!0?this.toUI(e,this.lastValue,this.property,this.object,this.value):e;if(t!==void 0&&t!==this.lastUIValue){if(t===this.attribute)this.views.push(P.create(this.element.parentElement,this.object,this.template.cloneNode(!0),{parent:this,prepare:!1,sibling:this.element}));else{const i=this.views.pop();i==null||i.destroy()}this.lastValue=e,this.lastUIValue=t}}}else{let t=!1,i=!1;e==null&&(e=[]);const n=this.propertyArguments[0],s=this.lastValue??[];if(e.length!==s.length)t=!0;else for(let l=0,k=e.length;l<k;l++){let v,m;n==null?e[l]!==s[l]&&(t=!0,i=!0):(v=c.resolveValue(e[l]??{},n),m=c.resolveValue(s[l]??{},n),v!==m&&(t=!0),e[l]!==s[l]&&(i=!0))}if(!t)if(i){const l=this.toUI!==!0?this.toUI(e,s,this.property,this.object,this.value):e;return this.updateViews(e,l)}else return this.updateViews();const r=this.toUI!==!0?this.toUI(e,s,this.property,this.object,this.value):e;if(r==null)return this.updateViews();const a=this.lastUIValue??[];let p=0;for(let l=0,k=r.length,v=0;l<k;l++,v++){let m,u;if(n==null?(m=r[l],u=a[v]):(m=c.resolveValue(r[l]??{},n),u=c.resolveValue(a[v]??{},n)),m===u)p++;else break}if(p===r.length&&r.length===a.length)return this.updateViews(e,r);const o=this.views.splice(0,p);let d=o[o.length-1];for(let l=p,k=r.length,v=p;l<k;l++,v++){const m=r[l],u=this.views.shift();if(u==null){const g={$model:{[this.attribute]:m},$parent:this.object},I=P.create(this.element.parentElement,g,this.template.cloneNode(!0),{parent:this,prepare:!1,sibling:d??this.element});o.push(I),d=I;continue}const w=n==null?m:c.resolveValue(m??{},n),b=u==null?void 0:u.model.$model[this.attribute],y=n==null?b:c.resolveValue(b??{},n);if(w===y){o.push(u),u.move(d??this.element),d=u;continue}if(!r.slice(l).map(g=>n==null?g:c.resolveValue(g??{},n)).includes(y)){u.destroy(),l--,d=u;continue}this.views.unshift(u);let j=!1;for(let g=0,I=this.views.length;g<I;g++){const U=this.views[g],C=U==null?void 0:U.model.$model[this.attribute],E=n==null?C:c.resolveValue(C??{},n);if(w===E){o.push(...this.views.splice(g,1)),U.move(d??this.element),j=!0,d=U;break}}if(!j){const g={$model:{[this.attribute]:m},$parent:this.object},I=P.create(this.element.parentElement,g,this.template.cloneNode(!0),{parent:this,prepare:!1,sibling:d??this.element});o.push(I),d=I}}return this.views.forEach(l=>l.destroy()),this.views=o,this.updateViews(e,r)}else{const t=c.resolveValue(this.object,this.attribute);if((e??t)==null||(e??t)!==this.lastValue){this.lastUIValue!=null&&(this.lastUIValue.destroy(),this.lastUIValue=null);const i=e==null?t:t.create(e),n=t.template;this.lastValue=e??t;const s=this.element.nodeType===8?this.element.parentElement:this.element,r=this.element.nodeType===8?this.element:null;if(this.lastUIValue=c.create(s,i,n,{parent:this,prepare:!0,sibling:r}),this.attributeArguments[0]!=null&&e!=null){const{target:a,property:p}=c.resolveProperty(this.object,this.attributeArguments[0]);a[p]=this.lastUIValue}this.views.push(this.lastUIValue)}}else if(e!==this.lastValue){const t=this.toUI!==!0?this.toUI(e,this.lastValue,this.property,this.object,this.value):e;if(t!==void 0&&t!==this.lastUIValue){const{target:i,property:n}=c.resolveProperty(this.element,this.attribute);i[n]=t,"setAttribute"in this.element&&this.element.setAttribute(this.attribute,t),this.lastValue=e,this.lastUIValue=t}}this.updateViews()}updateAtEvents(){let e=this.events.shift();for(;e!=null;)c.resolveValue(this.object,this.property).call(this.object.$model,e,this.object.$model,this.element,this.attribute,this.object),e=this.events.shift();this.views.forEach(t=>t.updateAtEvents())}updateMove(){this.views.forEach(e=>e.updateMove())}updateViews(e,t){e==null?this.views.forEach(i=>i.updateToUI()):(this.views.forEach((i,n)=>{const s=t[n];typeof s=="object"&&(s.$index=n),i.model.$model[this.attribute]=s,i.model.$index=n,i.updateToUI()}),this.lastValue=[...e],this.lastUIValue=[...t]),this.oneTime&&(this.toUI=!1,this.fromUI=!1)}}var L;class A{static initialize(e=!0){if(!this.initialized&&(this.initialized=!0,this.initializeLoadPromise(),e!==!1)){if(e===!0){const t=()=>{this.update(),requestAnimationFrame(t)};requestAnimationFrame(t);return}setInterval(()=>this.update(),1e3/e)}}static import(e){this.initializeLoadPromise(),document.body.insertAdjacentHTML("afterbegin",`<object type="text/pui" data="${e}"></object>`)}static ready(){return this.initialize(),this.loadPromise.then(()=>(this.hoist()&&document.head.insertAdjacentHTML("beforeend",'<style> object[type="text/pui"] { height: 0; position: absolute; } </style>'),this.registrations))}static create(e=document.body,t={},i=null,n={parent:null,prepare:!0,sibling:null}){var r;if(typeof e=="string"&&(e=document.querySelector(e)),(typeof t=="string"||t instanceof HTMLElement)&&(console.warn("Old parameter order to UI.create!"),[t,i]=[i,t]),typeof i=="string"){const a=((r=e==null?void 0:e.ownerDocument)==null?void 0:r.defaultView)!=null?e.ownerDocument:document;if(i.startsWith("#"))i=a.querySelector(i).cloneNode(!0);else{const p=a.createElement("template");p.innerHTML=n.prepare?this.prepare(i):i,i=p}}const s=P.create(e,t,i,n);return s.parent===c&&this.views.push(s),this.initialize(),s}static play(e,t){return typeof e=="string"?(e=this.globals.animations.find(i=>i.name===e).clone(),e.play(t)):e.play()}static queue(e){this.h.push(e),this.initialize()}static register(e,t){if(typeof e=="string"){this.registrations[e]=t;return}this.registerWebComponent(t,e)}static parse(e,t,i,n){const s=[];if(e instanceof Comment)return[];if(e instanceof HTMLTemplateElement||e.tagName==="TEMPLATE")return[];if(e.nodeType===3){let r=e.textContent,a=r.match(this.regexValue);for(;a!=null;){const p=a[1];let o=a[2];r=a[3];let d=!1;o.startsWith("|")&&(d=!0,o=o.slice(1).trimStart());const l=o.match(this.regexConditionalValue);let k,v=!0;if(o.startsWith("(")){const u=`_pui${this.bindingCounter++}`;Object.defineProperty(t,u,{get:new Function(`return ${o}`)}),o=u}else l&&(o=l[3],k=`${l[2]}${l[1]}`,v=function(u,w,b,y,j){const g=j[0]==="=";return j=j.slice(2,-1),!!u===g?j:""});let m=e.cloneNode();e.textContent=p,this.parentElement(e,n).insertBefore(m,e.nextSibling),s.push(this.bind({selector:m,attribute:"textContent",object:t,property:o,parent:i,oneTime:d,value:k,toUI:v})),e=m,m=e.cloneNode(),m.textContent=r,this.parentElement(e,n).insertBefore(m,e.nextSibling),e=m,a=r.match(this.regexValue)}}else{const r=e.getAttribute("pui")??"";if(r.trim().length>0){const a=r.split(";");for(let p of a)p=p.trim(),p.length>0&&e.setAttribute(`pui.${this.bindingCounter++}`,p)}if(e.removeAttribute("pui"),s.push(...Object.keys(e.attributes??[]).reverse().map(a=>{var v;const p=[];if(e instanceof Comment)return[];const o=e.attributes[a];if(o.name.startsWith("pui.")){const m=o.value.match(this.regexAttribute);let[u,w,b,y,j]=m,g,I,U=!1;if(b!=="@"){const C=w.match(/^'(.*?)'$/);if(C!=null)g=C[1],e.setAttribute("value",g),w=e.nodeName.toLowerCase()==="option"?"selected":"checked",y=E=>E?g:void 0,b=E=>E===g;else if(w==="")if(y===">"){const[E,H]=j.split(":");if(E.length>0){const{target:x,property:M}=this.resolveProperty(t,E);x[M]=e}return(H??"").length>0&&c.queue(()=>{const{target:x,property:M}=this.resolveProperty(t,H);x[M]=i}),[]}else({element:e,template:I}=this.replaceWithComment(e,i,n,o.name)),w=b==="=",b=!0,y==="|"&&(U=!0);else if(y==="="&&b==="="){if(!e.tagName.includes("-")){e.setAttribute("pui-unrendered","");const E=this.parentNode(e,n);E.nodeType!==8?{element:e,template:I}=this.replaceWithComment(e,i,n,o.name,I):e=E}I=w,b=!0}else y==="*"?{element:e,template:I}=this.replaceWithComment(e,i,n,o.name):y==="|"?U=!0:w!=="checked"&&e.setAttribute(w,((v=e.getAttribute)==null?void 0:v.call(e,w))??"")}return[this.bind({selector:e,attribute:w,value:g,object:t,property:j,template:I,toUI:typeof b=="string"?b==="<":b,fromUI:typeof y=="string"?y===">":y,atEvent:b==="@",parent:i,oneTime:U})]}const d=[o.value];let l=0,k=d[l].match(this.regexValue);for(;k!=null;){let{before:m,property:u,after:w}=k.groups,b=!1;u.startsWith("|")&&(b=!0,u=u.slice(1).trimStart());const y=u.match(this.regexConditionalValue);let j;y&&(u=y[3],j=`${y[2]}${y[1]}`),p.push(this.bind({selector:e,attribute:o.name,object:t,property:u,oneTime:b,toUI(g,I,U,C,E){if(this.oneTime){const x=d.indexOf(U);x>-1&&(d[x]=c.resolveValue(C,U),d[x-1]+=d[x]+d[x+1],d.splice(x,2))}const H=d.map((x,M)=>{if(M%2===0)return x;const T=x.match(c.regexSplitConditionalValue);if(T){const D=x===`${U}${E}`?g:c.resolveValue(C,T[1]),z=T[2]==="=";return!!D===z?T[3].slice(1,-1):""}return x===U?g:c.resolveValue(C,x)}).join("");return e.setAttribute(o.name,H),H},parent:i,value:j})),d[l++]=m,d[l++]=`${u}${j??""}`,d[l]=w,k=d[l].match(this.regexValue)}return p}).flat()),e instanceof Comment)return s.filter(a=>a.template!=null?!0:(a.unbind(),!1));if(!this.leaveAttributes)for(let a=Object.keys(e.attributes??[]).length-1;a>=0;a--){const p=e.attributes[Object.keys(e.attributes??[])[a]];p.name.startsWith("pui.")&&e.removeAttribute(p.name)}s.push(...Array.from(e.childNodes).map(a=>this.parse(a,t,i,n)).flat())}return s}static bind(e){return V.create(e)}static unbind(e){if(e.destroy(),e.parent!==c){const t=e.parent.bindings,i=t.indexOf(e);i>-1&&t.splice(i,1)}}static update(){this.u.forEach(t=>t()),this.u=this.h,this.h=[],this.views.forEach(t=>t.updateToUI()),this.views.forEach(t=>t.updateFromUI()),this.views.forEach(t=>t.updateAtEvents());const e=performance.now();[...this.views,this.globals].forEach(t=>t.updateAnimations(e)),this.views.forEach(t=>{t.updateMove()});for(let t=0;t<this.destroyed.length;t++){const i=this.destroyed[t];switch(i.destroyed){case"queue":i.state==="rendered"?i.destroyed="destroy":i.updateToUI();break;case"destroy":{i.terminate();const n=this.destroyed.findIndex(s=>i===s);n>-1&&(this.destroyed.splice(n,1),t--)}}}}static resolveProperty(e,t){t=t.replace("[",".").replace("]",".");const i=t.split(".").filter(s=>(s??"").length>0);for(;i[0]==="$parent"&&e.$parent!=null;)e=e.$parent,i.shift();let n=e;if(i[0]==="$index"&&this.objectHas(n,"$index"))return{target:n,property:i[0]};for(this.objectHas(n,"$model")&&(n=e.$model);i.length>1;)n=n[i.shift()];return{target:n,property:i[0]}}static resolveValue(e,t){let i=0;do{const{target:n,property:s}=this.resolveProperty(e,t);if(n!=null&&this.objectHas(n,s))return n[s];e=e.$parent}while(e!=null&&i++<1e3);if(t in this.registrations)return this.registrations[t]}static initializeLoadPromise(){var e;this.loadPromise==null&&(this.loadPromise=new Promise(t=>this.loadResolve=t),(e=document.defaultView)==null||e.addEventListener("load",this.loaded))}static hoist(e=document,t=document){e!==t&&((t.querySelectorAll("style")??[]).forEach(s=>{e.head.appendChild(s.cloneNode(!0))}),(t.querySelectorAll("template")??[]).forEach(s=>{e.head.appendChild(s.cloneNode(!0))}));const i=t.querySelectorAll('object[type="text/pui"]')??[];let n=i.length>0;return i.forEach(s=>{n=this.hoist(e,s.contentDocument)||n}),n}static objectHas(e,t){try{return t in e}catch{return!1}}static replaceWithComment(e,t,i,n,s){const r=document.createComment(n);return this.parentNode(e,i).insertBefore(r,e),this.parentNode(e,i).removeChild(e),e.removeAttribute(n),s=s??e,e=r,e.parentNode instanceof DocumentFragment&&(t.element=e),{element:e,template:s}}static parentElement(e,t){const i=e.parentElement;if(i!=null)return i;for(;t!=null&&(t.element==null||t.element===e);)t=t.parent;return t==null?void 0:t.element}static parentNode(e,t){const i=e.parentNode;if(i!=null)return i;for(;t!=null&&(t.element==null||t.element===e);)t=t.parent;return t==null?void 0:t.element}static prepare(e){let t=e;e="";let i=t.match(this.regexReplace);for(;i!=null;){const[n,s,r,a]=i;r.match(/\S\s*===/)?e+=`${s.trimEnd()}br PUI.${this.bindingCounter++}="${r}"`:e+=`${s} PUI.${this.bindingCounter++}="${r}" `,t=a,i=t.match(this.regexReplace)}return e+=t,e}static parseAttribute(e,t,i,n,s,r){const a=r.match(this.regexAttribute);let[p,o,d,l,k]=a,v,m,u=!1;if(d!=="@"){const w=o.match(/^'(.*?)'$/);if(w!=null)v=w[1],e.setAttribute("value",v),o=e.nodeName.toLowerCase()==="option"?"selected":"checked",l=b=>b?v:void 0,d=b=>b===v;else if(o==="")if(l===">"){const{target:b,property:y}=this.resolveProperty(t,k);return b[y]=e,[]}else({element:e,template:m}=this.replaceWithComment(e,i,n,s)),o=d==="=",d=!0,l==="|"&&(u=!0);else if(l==="="&&d==="="){const b=this.parentNode(e,n);b.nodeType!==8?{element:e,template:m}=this.replaceWithComment(e,i,n,s,m):e=b,m=o,u=!0,d=!0}else l==="*"?{element:e,template:m}=this.replaceWithComment(e,i,n,s):l==="|"?u=!0:o!=="checked"&&e.setAttribute(o,"")}return[this.bind({selector:e,attribute:o,value:v,object:t,property:k,template:m,toUI:typeof d=="string"?d==="<":d,fromUI:typeof l=="string"?l===">":l,atEvent:d==="@",parent:i,oneTime:u})]}static registerWebComponent(e,t){e??(e=t.webComponent);class i extends HTMLElement{constructor(){super(),this.webComponentComponent=t,this.webComponentUIView=null,this.attachShadow({mode:"open"})}connectedCallback(){this.initialize()}disconnectedCallback(){this.terminate()}attributeChangedCallback(r,a,p){this.initialize(),this.webComponentUIView.model[r]=p}initialize(){var r;if(this.webComponentUIView==null){const a="create"in this.webComponentComponent?this.webComponentComponent.create():new this.webComponentComponent;a.webComponentHost=this,this.webComponentUIView=c.create(this.shadowRoot,a,this.webComponentComponent.template,{host:(r=this.shadowRoot)==null?void 0:r.host})}}terminate(){this.webComponentUIView!=null&&this.webComponentUIView.destroy()}}i.observedAttributes=t.observedAttributes??[],i.observedProperties=t.observedProperties??i.observedAttributes;const n=[...new Set([...i.observedAttributes,...i.observedProperties])];for(const s of n)Object.defineProperty(i.prototype,s,{configurable:!0,enumerable:!1,get(){return this.webComponentUIView.model[s]},set(r){i.observedAttributes.includes(s)?this.setAttribute(s,r):(this.initialize(),this.webComponentUIView.model[s]=r)}});return customElements.define(e,i),i}}L=A;A.initialized=!1;A.id=0;A.views=[];A.destroyed=[];A.globals=new P;A.registrations={};A.leaveAttributes=!1;A.regexReplace=/([\S\s]*?)\\?\$\{([^}]*?[<=@!]=[*=>|][^}]*?)\}([\S\s]*)/m;A.regexAttribute=/^\s*(\S*?)\s*([<=@!])=([*=>|])\s*(\S*?)\s*$/;A.regexValue=/(?<before>[\S\s]*?)\\?\$\{\s*(?<property>[\s\S]*?)\s*\}(?<after>[\S\s]*)/m;A.regexConditionalValue=/^\s*(.+?)\s*([=!])\s*(\S+)/;A.regexSplitConditionalValue=/^(.+?)([=!])(.*)/;A.bindingCounter=0;A.u=[];A.h=[];A.loaded=()=>{var f;L.loadResolve(),(f=document.defaultView)==null||f.removeEventListener("load",L.loaded)};function N(){let f=window,e=window;for(;;)try{if(f.parent===f){e=f;break}else f.parent.UI!=="guarantee-condition-always-true"&&(f=f.parent)}catch{break}return e}const S=N();"UI"in S||(S.UI=A);const c=S.UI;class Y{constructor(){h(this,"template",`
    <style>
        .nav-wrapper {
        
        }
        nav {
            background-color: var(--current-background);
            color: var(--current-foreground);
            position: fixed;
            left:0;
            top: 10%;
            width: 15%;
            height: 90%;
            border-right: 1px solid var(--current-dark-accent);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0 20px;
            
        }
        
        .nav_aboutme {
            background-color: var(--current-dark-accent);
            color: var(--current-foreground);
            position: fixed;
            left:0;
            bottom: 0;
            width: 15%;
            height: 10%;
            border-top: 1px solid var(--current-dark-accent);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 20px;
            cursor: pointer;
        }

        nav li {
            list-style: none;
            padding: 10px;
            cursor: pointer;
        }
        nav li:hover {
            background-color: var(--current-dark-accent);
        }

        
        .home_link {
        color: whitesmoke;
        }

        .home_link:visited {
        color: darkgrey;
        }

    </style>
    <nav>
        <div class="nav-wrapper">
            <ul id="nav-mobile"  class="right hide-on-med-and-down">
                
                <li><a \${click@=>navbar.linkRoute} data-id="home" class="home_link" href="#home">Home</a></li>
                <li><a \${click@=>navbar.linkRoute} data-id="peasy" class="home_link" href="#peasy">What is Peasy?</a></li>
                <li><a \${click@=>navbar.linkRoute} data-id="bindings" class="home_link" href="#bindings">Bindings/Templates</a></li>
                <li><a \${click@=>navbar.linkRoute} data-id="events" class="home_link" href="#events">Events</a></li>
                <li><a \${click@=>navbar.linkRoute} data-id="css" class="home_link" href="#css">CSS</a></li>
                <li><a \${click@=>navbar.linkRoute} data-id="array" class="home_link" href="#array">Arrays</a></li>
                <li><a \${click@=>navbar.linkRoute} data-id="animations" class="home_link" href="#animations">Animations</a></li>
                <li></li>               
                
            </ul>
        </div>
        <div class="nav_aboutme">
            <a \${click@=>navbar.linkRoute} data-id="about" class="home_link" href="#about">About Me</a>    
        </div>
    </nav>
    `);h(this,"linkRoute",(e,t,i)=>{const n=i.getAttribute("data-id");console.log("here",n),t.router.changeRoute(n)})}}class Z{constructor(){h(this,"name","Peasy-UI");h(this,"uptime",0);h(this,"template",`
      <style>
        header {
          background-color: var(--current-background);
          color: var(--current-foreground);
          position: fixed;
          left:0;
          width: calc(100% - 40px);

          height: 10%;
          border-bottom: 1px solid var(--current-dark-accent);
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
        }
      </style>
      <header>
          <h1>\${header.name}</h1>
          <uptime-counter>
            uptime: \${header.uptime}
          </uptime-counter>
      </header>
      `);setInterval(()=>{this.uptime++},1e3)}}class Q{constructor(){h(this,"linkRoute",(e,t,i)=>{const n=i.getAttribute("data-id");t.router.changeRoute(n)});h(this,"template",`
   
    <div >
      <h1>Home</h1>
      <p>This demo application is made to demonstrate the capabilities of Peasy-UI.  One aspect of peasy is that it can emulate a Single Page Application, and completely control the content of your app.  This demo is a mock-up of a SPA using Peasy-UI.
      </p>  

      <p>You can click the navbar links or follow these links below.</p>

      <div>
        <li><a \${click@=>router.homepage.linkRoute} data-id="peasy" class="home_link" href="#peasy">What is Peasy-UI</a></li>
        <li><a \${click@=>router.homepage.linkRoute} data-id="bindings" class="home_link" href="#bindings">Templates and Bindings</a></li>
        <li><a \${click@=>router.homepage.linkRoute} data-id="events" class="home_link" href="#events">Events</a></li>
        <li><a \${click@=>router.homepage.linkRoute} data-id="css" class="home_link" href="#css">CSS</a></li>
        <li><a \${click@=>router.homepage.linkRoute} data-id="array" class="home_link" href="#css">Arrays</a></li>
        <li><a \${click@=>router.homepage.linkRoute} data-id="animations" class="home_link" href="#animations">Animations</a></li>
        <li><a \${click@=>router.homepage.linkRoute} data-id="components" class="home_link" href="#components">Components</a></li>
        <li><a \${click@=>router.homepage.linkRoute} data-id="about" class="home_link" href="#about">About Me</a></li>
      </div>
    </div>
        
    `)}}class W{constructor(){h(this,"template",`
      <style>
        #profilepic {
          width: 300px;
          height: 300px;
          border-radius: 50%;
        }
        
      </style>
      <div>
            <h1>About Me</h1>
            <img id="profilepic" src="https://github.com/jyoung4242.png" alt="Justin Young's profile picture"/>
            
            <p>I'm from the midwest United States, and I'm a hobbyist developer. I enjoy learning new technologies, and recently have been
            working on dev.to articles and blog posts.
            I also create games and demoes for my itch.io profile.
            </p>  
           
            <p>I have used the peasy framework to make my own DOM based game engine, Squeleto.  
            Here is the link to that project:
            </p>
             <a class="home_link"  href="https://jyoung4242.github.io/Squeleto-Docs/#/">https://jyoung4242.github.io/Squeleto-Docs/#/</a>

            <p>Here is my twitter profile: <a class="home_link"  href="https://twitter.com/jyoung424242">https://twitter.com/jyoung424242</a></p>
            <p>Here is my github profile: <a class="home_link" href="https://github.com/jyoung4242">https://github.com/jyoung4242</a></p>
            <p>Here is my itch.io profile: <a class="home_link"  href="https://mookie4242.itch.io/">https://mookie4242.itch.io/</a></p>
            <p>Here is my dev.to profile: <a class="home_link"  href="https://dev.to/jyoung4242">https://dev.to/jyoung4242</a></p>
            
      </div>
      `)}}const F=""+new URL("api-A4TtV2_J.png",import.meta.url).href;class G{constructor(){h(this,"template",`
        <style>
          #profilepic {
            width: 300px;
            height: 300px;
            border-radius: 50%;
          }

          #apipic {
            position: fixed;
            right: 20%;
            bottom: 20px;
            width: 25%;
            
            border-radius: 15px;
          }
          
        </style>
        <div>
              <h1>What is Peasy-UI?</h1>
                            
              <p>Peasy-UI is a small UI binding library. It started as a hobby project that grew some legs and became more than the author originally intended. Written by
            Jürgen Wenzel in early 2022.</p>  
             
              <p>
              Here is a diagram outlining the key API calls used in Peasy-UI.  For more information on this, please see my article on dev.to regarding Peasy-UI.
              </p>

              <img id="apipic" src="${F}" alt="Peasy API diagram">
  
              <p>Here is the Peasy-UI github repo: <a class="home_link"  href="https://github.com/peasy-lib/peasy-lib/tree/main/packages/peasy-ui>">Link to Repo</a></p>

              <p>Here is Jurgen's github profile: <a class="home_link" href="https://github.com/jwx">Link to Profile</a></p>

              <p>Here is link to the Dev.to article: <a class="home_link"  href="https://dev.to/jyoung4242/">Peasy article</a></p>
              
              
        </div>
        `)}}class J{constructor(){h(this,"selectBinding");h(this,"listOfBindings",[{text:"standard text binding",value:"standardtext",description:"${prop} is Binding from model property to attribute or text"},{text:"one-time text binding",value:"OTtext",description:"${|prop} os one-time binding from model property to attribute or text"},{text:"binding value with truthy",value:"truthyvalue",description:"${'value'=prop} is binding that renders value if model property is truthy"},{text:"binding value with non-truthy",value:"nontruthyvalue",description:"${'value'! prop} is binding that renders value if model property is truthy"},{text:"one time binding value with truthy",value:"OTtruthyvalue",description:"${|'value'=prop} is one-time binding that renders value if model property is truthy"},{text:"one time binding value with non-truthy",value:"OTnontruthyvalue",description:"${|'value'! prop} is one-time binding that renders value if model property is truthy"},{text:"attribute binding from data model to element attribute",value:"attributefrommodeltoelement",description:"${'attributename'<== datamodel property} is attribute binding that binds data from the data model to the elements given attribute, this is placed inside the element tag, example would be <div ${color <== myColor}>"},{text:"one time attribute binding from data model to element attribute",value:"OTattributefrommodeltoelement",description:"${'attributename'<=| datamodel property} is a one-time attribute binding that binds data from the data model to the elements given attribute, this is placed inside the element tag, example would be <div ${color <=| myColor}>"},{text:"attribute binding from attribute to data model",value:"attributefromattributetodata",description:"${'attributename'==> datamodel property} is attribute binding that binds data from the data model to the elements given attribute, this is placed inside the element tag, example would be <input ${'value' ==> mytext}>"},{text:"attribute binding that is bi-directional",value:"twowayattributeanddata",description:"${'attributename'<=> datamodel property} is a bi-directional attribute binding that binds data from the data model to the elements given attribute, and the reverse is also true, this is placed inside the element tag, example would be <div ${'value' <=> mytext}>"},{text:"event binding",value:"eventbinding",description:"${'eventname' @=> callbackname} is an event binding that is triggered when the event is fired"},{text:"one time element binding",value:"OTelementbinding",description:"${==> elementReference} is an one-time element binding, this can be used to capture key element references to use in your code"},{text:"render if true binding",value:"renderiftrue",description:"${=== property} is a render binding that can be added inside element tag and allows the element to be rendered if the property is truthy"},{text:"render if false binding",value:"renderiffalse",description:"${!== property} is a render binding that can be added inside element tag and allows the element to be rendered if the property is truthy"},{text:"array or list binding",value:"arrayorlist",description:"${itemname <=* listname:key} this is special binding that allows you to pass a list of items to the template, and it will duplicate the rendered element"}]);h(this,"template",`
        <style>
          #profilepic {
            width: 300px;
            height: 300px;
            border-radius: 50%;
          }

          #apipic {
            position: fixed;
            right: 20%;
            bottom: 20px;
            width: 25%;
            
            border-radius: 15px;
          }
          
        </style>
        <div>
              <h1>Templates and Bindings</h1>
                            
              <p>The template is the string literal representing the HTML that you wish Peasy to render.  Bindings are the special tags that are parsed out of the template.  These bindings are mapped to the data model passed to Peasy.
              </p>  
             
             <p>Here is a quick example of a binding, and how it is used.</p>
             <xmp><p> {bindingname} </p> </xmp>
             <p>When peasy renders the template, it will replace the binding with the data model value.</p>

             <select \${==>router.bindings.selectBinding} id="selectbinding">
               <option \${option <=* router.bindings.listOfBindings} value="\${option.value}">\${option.text}</option>
             </select>
             <p>\${router.bindings.currentDescription}</p>
        </div>
        `)}get currentDescription(){var t,i;if(!this.selectBinding)return"";const e=(t=this.selectBinding)==null?void 0:t.value;return(i=this.listOfBindings.find(n=>n.value==e))==null?void 0:i.description}}const q="data:image/png;base64,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",K=""+new URL("eventmodel-CeE6a90w.png",import.meta.url).href;class _{constructor(){h(this,"clicks",0);h(this,"inputElement");h(this,"inputText","type here");h(this,"selectText","Option 1");h(this,"divColor","black");h(this,"template",`

        <div>
              <h1>Events</h1>
                            
              <p>Events can be leveraged in the bindings.</p>  
              
              <img id="eventbinding" src="${q}" alt="Event binding"/>

              <p>All the DOM events can be bound, and in the data model you provide the bound callback.</p>
  
              <img id="eventmodel" src="${K}" alt="Event model"/>
              
              <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h3>Click Event</h3>
                        <button \${click@=>router.eventpage.clickhandler}>Click me</button>
                        <p>clicks: \${router.eventpage.clicks}</p>
                    </div>

                    <div>
                        <h3>Input Event</h3>
                        <input type="text" \${input@=>router.eventpage.inputTexthandler} placeholder="type here" />
                        <p>\${router.eventpage.inputText}</p>
                    </div>

                    <div>
                        <h3>Change Event</h3>
                        <select \${change@=>router.eventpage.selectHandler}>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                        </select>
                        <p>\${router.eventpage.selectText}</p>
                    </div>

                    <div>
                        <h3>Mouse Events</h3>
                        <div style="width: 100px; height: 100px; border: 1px solid whitesmoke; background-color: \${router.eventpage.divColor}; display: flex; justify-content: center; align-items: center;"
                            \${mouseenter@=>router.eventpage.mouseenterHandler}
                            \${mouseleave@=>router.eventpage.mouseleaveHandler}
                            ><p>Hover me</p>
                        </div>
                        
                    </div>
              </div>
             
              
              
        </div>
        `)}clickhandler(e,t,i,n,s){t.router.eventpage.clicks++}inputTexthandler(e,t,i,n,s){t.router.eventpage.inputText=e.target.value}selectHandler(e,t,i,n,s){t.router.eventpage.selectText=e.target.value}mouseenterHandler(e,t,i,n,s){t.router.eventpage.divColor="white"}mouseleaveHandler(e,t,i,n,s){t.router.eventpage.divColor="black"}}const ee=""+new URL("css-BLt4XunH.png",import.meta.url).href;class te{constructor(){h(this,"divColor","black");h(this,"boxWidth",100);h(this,"selectelement");h(this,"template",`
        <style>
            .csstestbox {
                background-color: \${router.csspage.divColor};
                width: \${router.csspage.boxWidth}px;
                border-radius: 5px;
                border: 1px solid black;
                transition: all 0.25s;
            }
        </style>
        <div>
              <h1>CSS Binding</h1>
                            
              <p>If you pass a style tag with your template, parameters defined in your style tag are now accessible by Peasy and can be controlled.
              </p>  
              
              <p>This works for inline styling as well...
              </p>

             <img id="css" src="${ee}" alt="CSS binding"/>
              
             <div>
                <div style="margin-bottom: 10px">
                    Box Color: 
                    <select \${==>router.csspage.selectelement} \${change@=>router.csspage.changedivcolor}>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                    </select>
                    Box Width:
                    <input type="number" \${input@=>router.csspage.changeboxwidth} value="100"/>
                </div>

                <div class="csstestbox" style="height: 100px;">
                </div>
             
             </div>
              
        </div>
        `)}changedivcolor(e,t,i,n,s){t.router.csspage.divColor=e.target.value}changeboxwidth(e,t,i,n,s){t.router.csspage.boxWidth=parseInt(e.target.value)}}const ie=""+new URL("array-Dz6SHxAy.png",import.meta.url).href,ne=""+new URL("array2-DclqupnI.png",import.meta.url).href;class se{constructor(){h(this,"myArray",[{value:(Math.random()*100).toFixed(1),id:0,color:"red"}]);h(this,"newColor",()=>`#${Math.floor(Math.random()*16777215).toString(16)}`);h(this,"addUnit",()=>{this.myArray.push({value:(Math.random()*100).toFixed(1),id:this.myArray.length,color:this.newColor()})});h(this,"popUnit",()=>{this.myArray.pop()});h(this,"template",`
        <style>
           
        </style>
        <div >
              <h1>Array Binding</h1>
                            
              <p>Lists or Arrays have their own unique binding and behaviors.  Let's dig into them. The example below demonstrates the binding and the data model.
              </p>  

              <img id="arraybinding" src="${ie}" alt="Array binding" style="display:block"/>
              <img id="arraybinding" src="${ne}" alt="Array binding" style="display:block;margin-top: 10px"/>
              
              <p>Key items to point out is that i'm using the key property of the object as the unique id.  I also added a color property to the object to be used in the css.I'm using the value of the object, the color property, and the id </p>
                            
             <button \${click@=>router.arraypage.addUnit} style="margin-top: 10px;margin-bottom: 10px">Add Unit</button>    
             <button \${click@=>router.arraypage.popUnit}>Pop Unit</button>    
             <div  style="display: flex; gap: 10px;flex-wrap: wrap; justify-content: flex-start;align-items: center; border: 1px solid whitesmoke; width: 600px; height: auto">
                <div \${unit<=*router.arraypage.myArray:id} style="background-color: \${unit.color}; padding: 10px">
                    <span>\${unit.value}</span>
                </div>
             </div>
              
        </div>
        `)}}const re=""+new URL("anime-cyD5h1w-.png",import.meta.url).href,ae="data:image/png;base64,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";class oe{constructor(){h(this,"selectChange",(e,t,i)=>{const n=i.getAttribute("data-id");n=="show"?this.showDiv=!0:n=="hide"&&(this.showDiv=!1)});h(this,"showDiv",!0);h(this,"template",`
        <style>
           .animTargetDiv {
               background-color: whitesmoke;
               color: black;
               opacity: 1;
               transition: opacity 0.5s;
               width: 100px;
               height: 100px;
               display: flex;
               text-align: center;
               justify-content: center;
               align-items: center;

           }

           .animTargetDiv.pui-adding, .animTargetDiv.pui-removing {
               opacity: 0;
           }

        </style>
        <div >
              <h1>Animations</h1>
                            
              <p>If you are looking to animate aspects of your DOM, you usually accomplish this with CSS.  Well, peasy gives you two utility class names to assist in this: .pui-adding class and the .pui-removing class </p>  

              <img id="arraybinding" src="${re}" alt="Array binding" style="display:block"/>

              <p>  The class names are added and remove during the rendering, unrendering of the element, here's the rendering binding. The key item to note is the pui-adding and pui-removing class names are left attaced until the end of the animations.</p>
              <img id="arraybinding" src="${ae}" alt="Array binding" style="display:block"/>
              
            <div>
                <div>
                    
                    <label>Show</label>
                    <input type="radio" data-id="show" \${change@=>router.animations.selectChange} checked name="fav_language">    
                    <label>Hide</label>
                    <input type="radio" data-id="hide" \${change@=>router.animations.selectChange}  name="fav_language">    
                    
                </div>
                <div class="animTargetDiv" \${===router.animations.isDivShowing}>
                    <p>  Hello Peasy! </p>
                </div>
            
            
            </div>
             
              
        </div>
        `)}get isDivShowing(){return this.showDiv}}const le=""+new URL("component1-CIyII2-o.png",import.meta.url).href,he=""+new URL("component2-BcHSdOnb.png",import.meta.url).href;class de{constructor(){h(this,"template",`
    <style>
        .comp_content {
            overflow-y: scroll;
            border:1px solid whitesmoke;
            height: 500px;
            width: 800px;
            margin-top: 10px;
            padding: 5px;
        }
    </style>
    
    <h1>Components</h1> 
    This is the most advanced topic for Peasy.
    <div class="comp_content">
    
    <p>
    Peasy UI makes it possible to create both JavaScript and HTML single file components and import them for use in the app, without the need of a build step. 
    </p>
    
    <p>
    Peasy UI only needs a template property in order to render a component, but for Peasy UI to instantiate and render components based on a template object/class and (optionally) data, the template object/class needs
    a template property, a create method (that gets invoked with the specified model data), and to be known to the parent model either as a property or through the use of the UI.register method
    </p>

    <p>There are JavaScript and HTML based components, but for the scope of this app, we will only be using JS.   Please visit the readme.md for Peasy-UI for more information</p>
    
    <h3>JavaScript Single File Components</h3>

    <p>Here is an example of a Peasy-UI component, you can see how there is a template property and a create method.  Those are the two requirements needed to create a component</p>

    <img id="arraybinding" src="${le}" alt="Array binding" style="display:block"/>

    <p>Using a JavaScript single file component is done by importing it in script and then using it in parent's HTML.</p>
    <img id="arraybinding" src="${he}" alt="Array binding" style="display:block"/>
    
    </div>
    `)}}class ce{constructor(){h(this,"current","home");h(this,"homepage",new Q);h(this,"aboutme",new W);h(this,"peasy",new G);h(this,"bindings",new J);h(this,"eventpage",new _);h(this,"csspage",new te);h(this,"arraypage",new se);h(this,"animations",new oe);h(this,"components",new de);h(this,"template",`
  <style>
    .router {
      position: fixed;
      width: 80%;
      height: 90%;
      top: 10%;
      left: 20%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      font-size: 24px;

    }

    .home_link {
      color: whitesmoke;
    }

    .home_link:visited {
      color: darkgrey;
    }

    
    .transitiondiv {
        opacity: 1;     

    }

    .transitiondiv.pui-adding{
        animation: fadeIn 0.5s forwards;
    }

    .transitiondiv.pui-removing {
        animation: fadeOut 0.5s forwards;
    }

    @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }

    @keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
    }
    
  </style>
  <div class="router">
      
    <div \${===router.showHome} class="transitiondiv">
        ${this.homepage.template}
    </div>

    <div \${===router.showPeasy} class="transitiondiv">
        ${this.peasy.template}
    </div>

    <div \${===router.showBindings} class="transitiondiv">
        ${this.bindings.template}
    </div>

    <div \${===router.showAbout} class="transitiondiv">
        ${this.aboutme.template}
    </div>
    
    <div \${===router.showEvents} class="transitiondiv">
        ${this.eventpage.template}
    </div>

    <div \${===router.showCSS} class="transitiondiv">
        ${this.csspage.template}
    </div>

    <div \${===router.showArray} class="transitiondiv">
        ${this.arraypage.template}
    </div>

    <div \${===router.showAnimations} class="transitiondiv">
        ${this.animations.template}
    </div>

    <div \${===router.showComponents} class="transitiondiv">
        ${this.components.template}
    </div>

    <div \${===router.showBlank}></div>
  </div>`)}changeRoute(e){this.current="blank",setTimeout(()=>{this.current=e},250)}get showHome(){return this.current=="home"}get showPeasy(){return this.current=="peasy"}get showBindings(){return this.current=="bindings"}get showEvents(){return this.current=="events"}get showCSS(){return this.current=="css"}get showArray(){return this.current=="array"}get showAnimations(){return this.current=="animations"}get showComponents(){return this.current=="components"}get showAbout(){return this.current=="about"}get showBlank(){return this.current=="blank"}get showArrayPage(){return this.current=="array"}}let O=new Y,R=new Z,B=new ce;const ue={navbar:O,header:R,router:B},pe=`
<style>
    html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background-color: var(--current-background);
      color: var(--current-foreground);
    }
    body {
      width: 100%;
      height: 100%;
    }
    .App {
      width: 100%;
      height: 100%;
      display: block;
    }
</style>
<div class="App">
    ${R.template}
    ${O.template}
    ${B.template}
</div>
`;c.create(document.body,ue,pe);
