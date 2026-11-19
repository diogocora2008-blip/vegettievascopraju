const galeria=[
 "Gol de cabeça","Comemoração","Com a camisa do Vasco","Em São Januário","Artilheiro de 2025","Clássico","Abraço com a torcida","Disputa de bola","Pênalti","Com os companheiros","Pelo Cerro Porteño","Vegetti, o Pirata"];
const grid=document.getElementById("galeria-grid");
galeria.forEach((t,i)=>{
  const c=document.createElement("div");c.className="col-6 col-md-4 col-lg-3";
  c.innerHTML=`<img class="foto rounded shadow-sm" data-src="images/galeria-${i+1}.jpg" data-alt="${t}">`;
  grid.appendChild(c);
});
function placeholder(txt){
  const svg=`<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='#111'/><rect x='10' y='10' width='580' height='380' fill='none' stroke='#d00' stroke-width='3'/><text x='50%' y='45%' fill='#fff' font-size='56' text-anchor='middle'>⚔</text><text x='50%' y='62%' fill='#ccc' font-size='24' text-anchor='middle' font-family='sans-serif'>${txt}</text></svg>`;
  return "data:image/svg+xml;utf8,"+encodeURIComponent(svg);
}
document.querySelectorAll("img[data-src]").forEach(img=>{
  img.alt=img.dataset.alt;
  img.onerror=()=>{img.onerror=null;img.src=placeholder(img.dataset.alt)};
  img.src=img.dataset.src;
  img.addEventListener("click",()=>{
    document.getElementById("foto-modal-img").src=img.src;
    new bootstrap.Modal("#foto-modal").show();
  });
});
const obs=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;obs.unobserve(e.target);
  const n=+e.target.dataset.n;let v=0;const st=Math.max(1,Math.round(n/60));
  const t=setInterval(()=>{v+=st;if(v>=n){v=n;clearInterval(t)}e.target.textContent=v},20);
}),{threshold:.6});
document.querySelectorAll(".num").forEach(n=>obs.observe(n));
