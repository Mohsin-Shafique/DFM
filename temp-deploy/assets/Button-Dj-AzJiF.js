import{j as s,h as b}from"./index-BL25jFFb.js";const x=({children:t,variant:a="primary",size:n="md",href:r,onClick:o,type:i="button",className:c="",disabled:d=!1,fullWidth:p=!1})=>{const m={primary:"bg-primary hover:bg-primary-dark text-white border-transparent",secondary:"bg-secondary hover:bg-secondary-dark text-primary-dark border-transparent",accent:"bg-accent hover:bg-accent-dark text-white border-transparent",outline:"bg-transparent hover:bg-primary/5 text-primary border-primary"},y={sm:"py-1.5 px-3 text-sm",md:"py-2 px-5 text-base",lg:"py-3 px-8 text-lg"},e=`
    ${`
    inline-flex items-center justify-center rounded-md font-medium 
    transition-colors duration-200 ease-in-out border-2
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50
    disabled:opacity-60 disabled:cursor-not-allowed
    ${p?"w-full":""}
  `}
    ${m[a]}
    ${y[n]}
    ${c}
  `;return r?s.jsx(b,{to:r,className:e,children:t}):s.jsx("button",{type:i,onClick:o,className:e,disabled:d,children:t})};export{x as B};
