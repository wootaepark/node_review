const a = true;
if (a){
   // import './func.mjs'; // 다이나믹 임포트 불가능 (mjs 상에서)
   const m1 = await import('./func.mjs');
   console.log(m1);
   const m2 = await import ('./var.mjs');
   console.log(m2);
}
