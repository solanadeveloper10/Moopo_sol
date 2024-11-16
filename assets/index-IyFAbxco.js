(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const N=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),_=__DEFINES__;Object.keys(_).forEach(t=>{const e=t.split(".");let r=N;for(let o=0;o<e.length;o++){const s=e[o];o===e.length-1?r[s]=_[t]:r=r[s]||(r[s]={})}});class F{constructor(e){this.connection=e,this.queue=[]}send(e){this.queue.push(e),this.flush()}flush(){this.connection.isReady()&&(this.queue.forEach(e=>this.connection.send(e)),this.queue=[])}}class I{constructor(e,r,o){this.logger=e,this.importUpdatedModule=o,this.hotModulesMap=new Map,this.disposeMap=new Map,this.pruneMap=new Map,this.dataMap=new Map,this.customListenersMap=new Map,this.ctxToListenersMap=new Map,this.updateQueue=[],this.pendingUpdateQueue=!1,this.messenger=new F(r)}async notifyListeners(e,r){const o=this.customListenersMap.get(e);o&&await Promise.allSettled(o.map(s=>s(r)))}clear(){this.hotModulesMap.clear(),this.disposeMap.clear(),this.pruneMap.clear(),this.dataMap.clear(),this.customListenersMap.clear(),this.ctxToListenersMap.clear()}async prunePaths(e){await Promise.all(e.map(r=>{const o=this.disposeMap.get(r);if(o)return o(this.dataMap.get(r))})),e.forEach(r=>{const o=this.pruneMap.get(r);o&&o(this.dataMap.get(r))})}warnFailedUpdate(e,r){e.message.includes("fetch")||this.logger.error(e),this.logger.error(`[hmr] Failed to reload ${r}. This could be due to syntax errors or importing non-existent modules. (see errors above)`)}async queueUpdate(e){if(this.updateQueue.push(this.fetchUpdate(e)),!this.pendingUpdateQueue){this.pendingUpdateQueue=!0,await Promise.resolve(),this.pendingUpdateQueue=!1;const r=[...this.updateQueue];this.updateQueue=[],(await Promise.all(r)).forEach(o=>o&&o())}}async fetchUpdate(e){const{path:r,acceptedPath:o}=e,s=this.hotModulesMap.get(r);if(!s)return;let i;const a=r===o,n=s.callbacks.filter(({deps:l})=>l.includes(o));if(a||n.length>0){const l=this.disposeMap.get(o);l&&await l(this.dataMap.get(o));try{i=await this.importUpdatedModule(e)}catch(d){this.warnFailedUpdate(d,o)}}return()=>{for(const{deps:d,fn:h}of n)h(d.map(q=>q===o?i:void 0));const l=a?r:`${o} via ${r}`;this.logger.debug(`[vite] hot updated: ${l}`)}}}const z=__HMR_CONFIG_NAME__,Q=__BASE__||"/";function c(t,e={},...r){const o=document.createElement(t);for(const[s,i]of Object.entries(e))o.setAttribute(s,i);return o.append(...r),o}const W=`
:host {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  --monospace: 'SFMono-Regular', Consolas,
  'Liberation Mono', Menlo, Courier, monospace;
  --red: #ff5555;
  --yellow: #e2aa53;
  --purple: #cfa4ff;
  --cyan: #2dd9da;
  --dim: #c9c9c9;

  --window-background: #181818;
  --window-color: #d8d8d8;
}

.backdrop {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin: 0;
  background: rgba(0, 0, 0, 0.66);
}

.window {
  font-family: var(--monospace);
  line-height: 1.5;
  max-width: 80vw;
  color: var(--window-color);
  box-sizing: border-box;
  margin: 30px auto;
  padding: 2.5vh 4vw;
  position: relative;
  background: var(--window-background);
  border-radius: 6px 6px 8px 8px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  overflow: hidden;
  border-top: 8px solid var(--red);
  direction: ltr;
  text-align: left;
}

pre {
  font-family: var(--monospace);
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 1em;
  overflow-x: scroll;
  scrollbar-width: none;
}

pre::-webkit-scrollbar {
  display: none;
}

pre.frame::-webkit-scrollbar {
  display: block;
  height: 5px;
}

pre.frame::-webkit-scrollbar-thumb {
  background: #999;
  border-radius: 5px;
}

pre.frame {
  scrollbar-width: thin;
}

.message {
  line-height: 1.3;
  font-weight: 600;
  white-space: pre-wrap;
}

.message-body {
  color: var(--red);
}

.plugin {
  color: var(--purple);
}

.file {
  color: var(--cyan);
  margin-bottom: 0;
  white-space: pre-wrap;
  word-break: break-all;
}

.frame {
  color: var(--yellow);
}

.stack {
  font-size: 13px;
  color: var(--dim);
}

.tip {
  font-size: 13px;
  color: #999;
  border-top: 1px dotted #999;
  padding-top: 13px;
  line-height: 1.8;
}

code {
  font-size: 13px;
  font-family: var(--monospace);
  color: var(--yellow);
}

.file-link {
  text-decoration: underline;
  cursor: pointer;
}

kbd {
  line-height: 1.5;
  font-family: ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.75rem;
  font-weight: 700;
  background-color: rgb(38, 40, 44);
  color: rgb(166, 167, 171);
  padding: 0.15rem 0.3rem;
  border-radius: 0.25rem;
  border-width: 0.0625rem 0.0625rem 0.1875rem;
  border-style: solid;
  border-color: rgb(54, 57, 64);
  border-image: initial;
}
`,j=()=>c("div",{class:"backdrop",part:"backdrop"},c("div",{class:"window",part:"window"},c("pre",{class:"message",part:"message"},c("span",{class:"plugin",part:"plugin"}),c("span",{class:"message-body",part:"message-body"})),c("pre",{class:"file",part:"file"}),c("pre",{class:"frame",part:"frame"}),c("pre",{class:"stack",part:"stack"}),c("div",{class:"tip",part:"tip"},"Click outside, press ",c("kbd",{},"Esc")," key, or fix the code to dismiss.",c("br"),"You can also disable this overlay by setting ",c("code",{part:"config-option-name"},"server.hmr.overlay")," to ",c("code",{part:"config-option-value"},"false")," in ",c("code",{part:"config-file-name"},z),".")),c("style",{},W)),M=/(?:[a-zA-Z]:\\|\/).*?:\d+:\d+/g,w=/^(?:>?\s*\d+\s+\|.*|\s+\|\s*\^.*)\r?\n/gm,{HTMLElement:B=class{}}=globalThis;class C extends B{constructor(e,r=!0){var a;super(),this.root=this.attachShadow({mode:"open"}),this.root.appendChild(j()),w.lastIndex=0;const o=e.frame&&w.test(e.frame),s=o?e.message.replace(w,""):e.message;e.plugin&&this.text(".plugin",`[plugin:${e.plugin}] `),this.text(".message-body",s.trim());const[i]=(((a=e.loc)==null?void 0:a.file)||e.id||"unknown file").split("?");e.loc?this.text(".file",`${i}:${e.loc.line}:${e.loc.column}`,r):e.id&&this.text(".file",i),o&&this.text(".frame",e.frame.trim()),this.text(".stack",e.stack,r),this.root.querySelector(".window").addEventListener("click",n=>{n.stopPropagation()}),this.addEventListener("click",()=>{this.close()}),this.closeOnEsc=n=>{(n.key==="Escape"||n.code==="Escape")&&this.close()},document.addEventListener("keydown",this.closeOnEsc)}text(e,r,o=!1){const s=this.root.querySelector(e);if(!o)s.textContent=r;else{let i=0,a;for(M.lastIndex=0;a=M.exec(r);){const{0:n,index:l}=a;if(l!=null){const d=r.slice(i,l);s.appendChild(document.createTextNode(d));const h=document.createElement("a");h.textContent=n,h.className="file-link",h.onclick=()=>{fetch(new URL(`${Q}__open-in-editor?file=${encodeURIComponent(n)}`,import.meta.url))},s.appendChild(h),i+=d.length+n.length}}}}close(){var e;(e=this.parentNode)==null||e.removeChild(this),document.removeEventListener("keydown",this.closeOnEsc)}}const g="vite-error-overlay",{customElements:b}=globalThis;b&&!b.get(g)&&b.define(g,C);console.debug("[vite] connecting...");const v=new URL(import.meta.url),D=__SERVER_HOST__,x=__HMR_PROTOCOL__||(v.protocol==="https:"?"wss":"ws"),H=__HMR_PORT__,E=`${__HMR_HOSTNAME__||v.hostname}:${H||v.port}${__HMR_BASE__}`,L=__HMR_DIRECT_TARGET__,y=__BASE__||"/";let p;try{let t;H||(t=()=>{p=S(x,L,()=>{const e=new URL(import.meta.url),r=e.host+e.pathname.replace(/@vite\/client$/,"");console.error(`[vite] failed to connect to websocket.
your current setup:
  (browser) ${r} <--[HTTP]--> ${D} (server)
  (browser) ${E} <--[WebSocket (failing)]--> ${L} (server)
Check out your Vite / network configuration and https://vitejs.dev/config/server-options.html#server-hmr .`)}),p.addEventListener("open",()=>{console.info("[vite] Direct websocket connection fallback. Check out https://vitejs.dev/config/server-options.html#server-hmr to remove the previous connection error.")},{once:!0})}),p=S(x,E,t)}catch(t){console.error(`[vite] failed to connect to websocket (${t}). `)}function S(t,e,r){const o=new WebSocket(`${t}://${e}`,"vite-hmr");let s=!1;return o.addEventListener("open",()=>{s=!0,u("vite:ws:connect",{webSocket:o})},{once:!0}),o.addEventListener("message",async({data:i})=>{G(JSON.parse(i))}),o.addEventListener("close",async({wasClean:i})=>{if(!i){if(!s&&r){r();return}u("vite:ws:disconnect",{webSocket:o}),m&&(console.log("[vite] server connection lost. Polling for restart..."),await K(t,e),location.reload())}}),o}function $(t){const e=new URL(t,"http://vitejs.dev");return e.searchParams.delete("direct"),e.pathname+e.search}let R=!0;const P=new WeakSet,V=t=>{let e;return()=>{e&&(clearTimeout(e),e=null),e=setTimeout(()=>{location.reload()},t)}},k=V(50),f=new I(console,{isReady:()=>p&&p.readyState===1,send:t=>p.send(t)},async function({acceptedPath:e,timestamp:r,explicitImportRequired:o,isWithinCircularImport:s}){const[i,a]=e.split("?"),n=import(y+i.slice(1)+`?${o?"import&":""}t=${r}${a?`&${a}`:""}`);return s&&n.catch(()=>{console.info(`[hmr] ${e} failed to apply HMR as it's within a circular import. Reloading page to reset the execution order. To debug and break the circular import, you can run \`vite --debug hmr\` to log the circular dependency path if a file change triggered it.`),k()}),await n});async function G(t){switch(t.type){case"connected":console.debug("[vite] connected."),f.messenger.flush(),setInterval(()=>{p.readyState===p.OPEN&&p.send('{"type":"ping"}')},__HMR_TIMEOUT__);break;case"update":if(u("vite:beforeUpdate",t),m)if(R&&J()){location.reload();return}else T&&A(),R=!1;await Promise.all(t.updates.map(async e=>{if(e.type==="js-update")return f.queueUpdate(e);const{path:r,timestamp:o}=e,s=$(r),i=Array.from(document.querySelectorAll("link")).find(n=>!P.has(n)&&$(n.href).includes(s));if(!i)return;const a=`${y}${s.slice(1)}${s.includes("?")?"&":"?"}t=${o}`;return new Promise(n=>{const l=i.cloneNode();l.href=new URL(a,i.href).href;const d=()=>{i.remove(),console.debug(`[vite] css hot updated: ${s}`),n()};l.addEventListener("load",d),l.addEventListener("error",d),P.add(i),i.after(l)})})),u("vite:afterUpdate",t);break;case"custom":{u(t.event,t.data);break}case"full-reload":if(u("vite:beforeFullReload",t),m)if(t.path&&t.path.endsWith(".html")){const e=decodeURI(location.pathname),r=y+t.path.slice(1);(e===r||t.path==="/index.html"||e.endsWith("/")&&e+"index.html"===r)&&k();return}else k();break;case"prune":u("vite:beforePrune",t),await f.prunePaths(t.paths);break;case"error":{if(u("vite:error",t),m){const e=t.err;T?Y(e):console.error(`[vite] Internal Server Error
${e.message}
${e.stack}`)}break}default:return t}}function u(t,e){f.notifyListeners(t,e)}const T=__HMR_ENABLE_OVERLAY__,m="document"in globalThis;function Y(t){A(),document.body.appendChild(new C(t))}function A(){document.querySelectorAll(g).forEach(t=>t.close())}function J(){return document.querySelectorAll(g).length}async function K(t,e,r=1e3){const o=t==="wss"?"https":"http",s=async()=>{try{return await fetch(`${o}://${e}`,{mode:"no-cors",headers:{Accept:"text/x-vite-ping"}}),!0}catch{}return!1};if(!await s())for(await U(r);;)if(document.visibilityState==="visible"){if(await s())break;await U(r)}else await Z()}function U(t){return new Promise(e=>setTimeout(e,t))}function Z(){return new Promise(t=>{const e=async()=>{document.visibilityState==="visible"&&(t(),document.removeEventListener("visibilitychange",e))};document.addEventListener("visibilitychange",e)})}const X=new Map;"document"in globalThis&&document.querySelectorAll("style[data-vite-dev-id]").forEach(t=>{X.set(t.getAttribute("data-vite-dev-id"),t)});var O;"document"in globalThis&&((O=document.querySelector("meta[property=csp-nonce]"))==null||O.nonce);
