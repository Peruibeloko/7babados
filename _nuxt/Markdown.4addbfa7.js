import s from"./ContentSlot.2962f8db.js";import{d as o,P as u,J as f,Y as m}from"./entry.c5c2e8cd.js";import"./node.e4a9c3bc.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=m(),{between:n,default:a}=u(),r=f(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{d as default};