import fillzero from './fillzero';

const date=(dom)=>{
  let d = new Date();
  d.setTime(dom);
  return `
    ${d.getFullYear()}年${fillzero(d.getMonth())}月${fillzero(d.getDate())}日
    ${fillzero(d.getHours())}:${fillzero(d.getMinutes())}:${fillzero(d.getSeconds())}
  `
}

export default date;