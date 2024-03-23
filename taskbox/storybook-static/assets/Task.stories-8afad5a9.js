import{T as b}from"./Task-cd6abe3c.js";import{v as K}from"./v4-4a60fe23.js";import"./vue.esm-bundler-d4da4ca6.js";const{addons:V}=__STORYBOOK_MODULE_PREVIEW_API__,{global:O}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:j}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var B="storybook/actions",N=`${B}/action-event`,C={depth:10,clearOnStoryChange:!0,limit:50},R=(t,e)=>{let r=Object.getPrototypeOf(t);return!r||e(r)?r:R(r,e)},L=t=>!!(typeof t=="object"&&t&&R(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),W=t=>{if(L(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let r=Object.getOwnPropertyDescriptor(e,"view"),a=r==null?void 0:r.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...r,value:Object.create(a.constructor.prototype)}),e}return t},Y=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?K():Date.now().toString(36)+Math.random().toString(36).substring(2);function g(t,e={}){let r={...C,...e},a=function(...c){var l,d;if(e.implicit){let _=(l="__STORYBOOK_PREVIEW__"in O?O.__STORYBOOK_PREVIEW__:void 0)==null?void 0:l.storyRenders.find(s=>s.phase==="playing"||s.phase==="rendering");if(_){let s=!((d=window==null?void 0:window.FEATURES)!=null&&d.disallowImplicitActionsInRenderV8),u=new j({phase:_.phase,name:t,deprecated:s});if(s)console.warn(u);else throw u}}let k=V.getChannel(),I=Y(),v=5,p=c.map(W),P=c.length>1?p:p[0],w={id:I,count:0,data:{name:t,args:P},options:{...r,maxDepth:v+(r.depth||3),allowFunction:r.allowFunction||!1}};k.emit(N,w)};return a.isAction=!0,a.implicit=e.implicit,a}const z={component:b,title:"Task",tags:["autodocs"],argTypes:{onPinTask:{},onArchiveTask:{}},excludeStories:/.*Data$/},F={onPinTask:g("pin-task"),onArchiveTask:g("archive-task")},n={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},o={args:{task:{...n.args.task,state:"TASK_PINNED"}}},i={args:{task:{...n.args.task,state:"TASK_ARCHIVED"}}};var m,T,E;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(E=(T=n.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var f,D,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(S=(D=o.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var h,y,A;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(A=(y=i.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const $=["actionsData","Default","Pinned","Archived"];export{i as Archived,n as Default,o as Pinned,$ as __namedExportsOrder,F as actionsData,z as default};
