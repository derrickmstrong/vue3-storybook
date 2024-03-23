import{r,c as l,b as k,e as i,v as _,x as m,o}from"./vue.esm-bundler-d4da4ca6.js";const u=(e,a)=>{const t=e.__vccOpts||e;for(const[s,c]of a)t[s]=c;return t},d={name:"Task",props:{task:{type:Object,required:!0,default:()=>({id:"",state:"",title:""}),validator:e=>["id","state","title"].every(a=>a in e)}},emits:["archive-task","pin-task"],setup(e,{emit:a}){return e=r(e),{classes:l(()=>({"list-item TASK_INBOX":e.task.state==="TASK_INBOX","list-item TASK_PINNED":e.task.state==="TASK_PINNED","list-item TASK_ARCHIVED":e.task.state==="TASK_ARCHIVED"})),isChecked:l(()=>e.task.state==="TASK_ARCHIVED"),archiveTask(){a("archive-task",e.task.id)},pinTask(){a("pin-task",e.task.id)}}}},h=["for","aria-label"],T=["checked","name","id"],v=["for","aria-label"],b=["value","id"],f=["id","aria-label"],y=i("span",{class:"icon-star"},null,-1),x=[y];function A(e,a,t,s,c,C){return o(),k("div",{class:m(s.classes)},[i("label",{for:"checked"+t.task.id,"aria-label":"archiveTask-"+t.task.id,class:"checkbox"},[i("input",{type:"checkbox",checked:s.isChecked,disabled:"",name:"checked"+t.task.id,id:"archiveTask-"+t.task.id},null,8,T),i("span",{class:"checkbox-custom",onClick:a[0]||(a[0]=(...n)=>s.archiveTask&&s.archiveTask(...n))})],8,h),i("label",{for:"title-"+t.task.id,"aria-label":t.task.title,class:"title"},[i("input",{type:"text",readonly:"",value:t.task.title,id:"title-"+t.task.id,name:"title",placeholder:"Input title"},null,8,b)],8,v),s.isChecked?_("",!0):(o(),k("button",{key:0,class:"pin-button",onClick:a[1]||(a[1]=(...n)=>s.pinTask&&s.pinTask(...n)),id:"pinTask-"+t.task.id,"aria-label":"pinTask-"+t.task.id},x,8,f))],2)}const I=u(d,[["render",A]]);d.__docgenInfo={displayName:"Task",exportName:"default",description:"",tags:{},props:[{name:"task",type:{name:"object"},required:!0,defaultValue:{func:!1,value:`{
  id: '',
  state: '',
  title: ''
}`}}],events:[{name:"archive-task"},{name:"pin-task"}],sourceFiles:["/Users/derrickstrong/Programming/training/storybook/vue3-storybook/taskbox/src/components/Task.vue"]};export{I as T,u as _};
