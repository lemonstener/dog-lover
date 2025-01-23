import{r as C,j as t,A as S,k as F}from"./index-B58A1AXN.js";import{h as R,i as $,a1 as w,a2 as k,l as M,q as I,v as z,n as B,t as A,k as O,u as U,d as p,B as d,T as x,a as D}from"./List-Clpb0GIO.js";function L(s){return String(s).match(/[\d.\-+]*\s*(.*)/)[1]||""}function P(s){return parseFloat(s)}function T(s){return $("MuiSkeleton",s)}R("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const N=s=>{const{classes:e,variant:a,animation:o,hasChildren:n,width:h,height:r}=s;return O({root:["root",a,o,n&&"withChildren",n&&!h&&"fitContent",n&&!r&&"heightAuto"]},T,e)},v=w`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,y=w`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,X=typeof v!="string"?k`
        animation: ${v} 2s ease-in-out 0.5s infinite;
      `:null,q=typeof y!="string"?k`
        &::after {
          animation: ${y} 2s linear 0.5s infinite;
        }
      `:null,E=M("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:a}=s;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(I(({theme:s})=>{const e=L(s.shape.borderRadius)||"px",a=P(s.shape.borderRadius);return{display:"block",backgroundColor:s.vars?s.vars.palette.Skeleton.bg:z(s.palette.text.primary,s.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${e}/${Math.round(a/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(s.vars||s).shape.borderRadius}},{props:({ownerState:o})=>o.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:o})=>o.hasChildren&&!o.width,style:{maxWidth:"fit-content"}},{props:({ownerState:o})=>o.hasChildren&&!o.height,style:{height:"auto"}},{props:{animation:"pulse"},style:X||{animation:`${v} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(s.vars||s).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:q||{"&::after":{animation:`${y} 2s linear 0.5s infinite`}}}]}})),l=C.forwardRef(function(e,a){const o=B({props:e,name:"MuiSkeleton"}),{animation:n="pulse",className:h,component:r="span",height:u,style:c,variant:g="text",width:f,...i}=o,m={...o,animation:n,component:r,variant:g,hasChildren:!!i.children},b=N(m);return t.jsx(E,{as:r,ref:a,className:A(b.root,h),ownerState:m,...i,style:{width:f,height:u,...c}})}),Q=()=>U(S.postDogs,{onError:s=>console.log(s)}),V=p(t.jsx("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"}),"FavoriteBorder"),W=p(t.jsx("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"}),"Favorite"),H=p(t.jsx("path",{d:"M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2m6 3h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-9c0-1.66-1.34-3-3-3m1 11H5v-3c.9-.01 1.76-.37 2.4-1.01l1.09-1.07 1.07 1.07c1.31 1.31 3.59 1.3 4.89 0l1.08-1.07 1.07 1.07c.64.64 1.5 1 2.4 1.01zm0-4.5c-.51-.01-.99-.2-1.35-.57l-2.13-2.13-2.14 2.13c-.74.74-2.03.74-2.77 0L8.48 12.8l-2.14 2.13c-.35.36-.83.56-1.34.57V12c0-.55.45-1 1-1h12c.55 0 1 .45 1 1z"}),"CakeOutlined"),J=p(t.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"LocationOn"),K=p([t.jsx("circle",{cx:"4.5",cy:"9.5",r:"2.5"},"0"),t.jsx("circle",{cx:"9",cy:"5.5",r:"2.5"},"1"),t.jsx("circle",{cx:"15",cy:"5.5",r:"2.5"},"2"),t.jsx("circle",{cx:"19.5",cy:"9.5",r:"2.5"},"3"),t.jsx("path",{d:"M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32q-.165-.06-.33-.09c-.25-.04-.52-.04-.78-.04s-.53 0-.79.05q-.165.03-.33.09c-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8"},"4")],"Pets"),j=()=>JSON.parse(localStorage.getItem("userFavorites")??""),Y=s=>{const{id:e,img:a,name:o,zip_code:n,age:h,breed:r}=s,u=j(),[c,g]=C.useState(u.includes(e)),f=()=>{let i=j();i.includes(e)?i=i.filter(m=>m!==e):i=[...i,e],F.success(`${o} ${c?"removed from":"added to"} favorites`,{position:"top-center"}),localStorage.setItem("userFavorites",JSON.stringify(i)),g(!c)};return t.jsx(d,{sx:{width:{xs:"50%",md:"33.3%",lg:"25%"},my:1},children:t.jsxs(d,{sx:{p:2,background:"#f5f5f5",width:"99%",borderRadius:2},children:[t.jsx(d,{component:"img",src:a,alt:`Image of ${o}`,sx:{height:180,maxWidth:"100%"}}),t.jsxs(d,{py:1,children:[t.jsx(x,{gutterBottom:!0,variant:"h5",component:"div",children:o}),t.jsxs(x,{sx:{xs:"1.3rem",lg:"1rem"},children:[r," ",t.jsx(K,{sx:{fontSize:12}})]}),t.jsxs(x,{sx:{xs:"1.3rem",lg:"1rem"},children:[h," ",t.jsx(H,{sx:{fontSize:12}})]}),t.jsxs(x,{sx:{xs:"1.3rem",lg:"1rem"},children:[n,t.jsx(J,{sx:{fontSize:12}})]})]}),t.jsx(D,{onClick:f,size:"small",color:c?"success":"info",variant:"contained",endIcon:c?t.jsx(W,{}):t.jsx(V,{}),children:"Favorite"})]})})},Z=()=>t.jsxs(d,{sx:{width:{sm:"50%",md:"33.3%",lg:"25%"},my:1,p:2},children:[t.jsx(l,{variant:"rectangular",sx:{height:{xs:180,sm:180,md:200,lg:260},width:250,mx:"auto"}}),t.jsxs(d,{py:1,children:[t.jsx(l,{sx:{mx:"auto",height:40,width:"70%"}}),t.jsx(l,{sx:{mx:"auto",height:25,width:"30%"}}),t.jsx(l,{sx:{mx:"auto",height:25,width:"10%"}}),t.jsx(l,{sx:{mx:"auto",height:25,width:"40%"}}),t.jsx(l,{sx:{mx:"auto",height:45,width:"70%"}})]})]});export{H as C,Z as D,J as L,K as P,Y as a,j as g,Q as u};
