var S=[["Footer","Contact · Links · Social"],["Portfolio","Projects · Gallery · Proof"],["Services","Cards · Icons · Pricing"],["Hero","Headline · Visual · Button"],["Header","Logo · Menu · Call to action"]],
W=185,H=105,T=22,svg="http://www.w3.org/2000/svg",stack=document.getElementById("stack"),con=document.getElementById("con"),cards=document.getElementById("cards"),list=document.getElementById("list");
var LN="var(--line)",AC="#ff7a2f",IK="var(--grey)";
function q(x,y,w,h,f,r,o,st){return'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+(r||0)+'" fill="'+f+'"'+(o?' opacity="'+o+'"':'')+(st?' stroke="'+st+'" stroke-width="1.2"':'')+'/>'}
function ci(x,y,r,f,o){return'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+f+'" opacity="'+(o||1)+'"/>'}
function wire(i,W,H){var s='',k,x,y;
if(i==4)s=q(10,12,180,30,"none",7,1,LN)+q(18,21,12,12,AC,3)+q(36,25,30,4,IK,2,.7)+q(92,25,16,4,IK,2,.5)+q(114,25,16,4,IK,2,.5)+q(136,25,16,4,IK,2,.5)+q(160,20,24,14,AC,7)+q(10,54,180,136,"none",8,.5,LN)+q(24,70,80,8,LN,3)+q(24,86,56,8,LN,3);
else if(i==3)s=q(18,40,92,12,IK,3,.85)+q(18,58,70,12,IK,3,.85)+q(18,80,84,5,IK,2,.4)+q(18,90,62,5,IK,2,.4)+q(18,106,40,14,AC,7)+q(64,106,36,14,"none",7,1,LN)+q(122,36,68,92,LN,8)+ci(156,70,13,AC,.85)+q(18,150,48,28,"none",6,1,LN)+q(76,150,48,28,"none",6,1,LN)+q(134,150,48,28,"none",6,1,LN);
else if(i==2){s=q(58,22,84,9,IK,3,.8)+q(76,38,48,4,IK,2,.4);for(k=0;k<3;k++){x=14+k*60;s+=q(x,62,52,100,"none",7,1,LN)+ci(x+14,78,7,k==1?AC:LN)+q(x+8,98,36,5,IK,2,.6)+q(x+8,110,30,4,IK,2,.35)+q(x+8,120,34,4,IK,2,.35)+q(x+8,142,24,10,k==1?AC:LN,5)}}
else if(i==1){s=q(14,16,70,9,IK,3,.8);for(k=0;k<4;k++){x=14+k%2*88;y=40+Math.floor(k/2)*72;s+=q(x,y,84,66,k?LN:AC,7,k?.9:.3)+q(x+8,y+52,30,5,IK,2,.6)+ci(x+60,y+24,10,k?IK:AC,.35)}}
else{s=q(10,40,180,150,"none",8,.6,LN);for(k=0;k<4;k++){x=22+k*44;s+=q(x,58,28,6,IK,2,.8)+q(x,74,24,4,IK,2,.4)+q(x,86,30,4,IK,2,.4)+q(x,98,22,4,IK,2,.4)}s+=q(22,140,156,1,LN)+q(22,156,50,5,IK,2,.4)+ci(150,160,5,AC)+ci(166,160,5,LN)+ci(182,160,5,LN)}
return'<g transform="matrix('+W/200+','+H/200+','+-W/200+','+H/200+',500,'+-H+')">'+s+'</g>'}
function card(i,main){return '<div class="sc'+(main?' main':'')+'"><p class="n">0'+(5-i)+(main?' · FIRST IMPRESSION':'')+'</p><p class="t">'+S[i][0]+'</p><p class="i">'+S[i][1]+'</p></div>'}
S.forEach(function(s,i){
 var r=560-i*22,e=740-i*130,main=i==3,L=i%2==1,g=document.createElementNS(svg,"g");
 g.setAttribute("class","plate");g.style.setProperty("--r",r+"px");g.style.setProperty("--e",e+"px");
 g.innerHTML='<path d="M'+(500-W)+' 0L500 '+H+'V'+(H+T)+'H'+(500-W)+'ZM500 '+H+'L'+(500+W)+' 0V'+T+'L500 '+(H+T)+'Z" fill="var(--side)" stroke="var(--line)" stroke-width="1.5" stroke-linejoin="round"/>'
 +'<path d="M500 -'+H+'L'+(500+W)+' 0L500 '+H+'L'+(500-W)+' 0Z" fill="var(--top)" stroke="'+(main?'#ff7a2f':'var(--line)')+'" stroke-width="'+(main?3:2)+'" stroke-linejoin="round"/>'
 +wire(i,W,H);
 stack.appendChild(g);
 var tip=L?500-W:500+W,edge=L?265:735,c=document.createElementNS(svg,"g");c.setAttribute("class","con");
 c.innerHTML='<line x1="'+tip+'" x2="'+edge+'" y1="'+e+'" y2="'+e+'" stroke="#cfcac1"/><circle cx="'+edge+'" cy="'+e+'" r="4" fill="#ff7a2f"/>';con.appendChild(c);
 cards.insertAdjacentHTML("beforeend",'<li class="'+(L?'L':'R')+'" style="top:'+e/10+'%">'+card(i,main)+'</li>');
 list.insertAdjacentHTML("beforeend",'<li>'+card(i,main)+'</li>');
});
var viz=document.getElementById("viz"),core=document.getElementById("core"),mouse="mouse";
function set(o){viz.classList.toggle("open",o);core.setAttribute("aria-expanded",o)}
core.addEventListener("pointerdown",function(e){mouse=e.pointerType});
core.addEventListener("pointerenter",function(e){if(e.pointerType=="mouse")set(true)});
core.addEventListener("click",function(e){if(e.detail===0||mouse!="mouse")set(!viz.classList.contains("open"))});
core.addEventListener("blur",function(){set(false)});
viz.addEventListener("pointerleave",function(){set(false)});
cards.addEventListener("pointerenter",function(e){if(e.pointerType=="mouse")set(true)});
document.getElementById("see").addEventListener("click",function(){setTimeout(function(){set(true)},500)});
var hero=document.getElementById("hero");
hero.addEventListener("pointermove",function(e){if(e.pointerType!="mouse")return;var b=hero.getBoundingClientRect();hero.style.setProperty("--mx",e.clientX-b.left+"px");hero.style.setProperty("--my",e.clientY-b.top+"px");hero.classList.add("spot")});
hero.addEventListener("pointerleave",function(){hero.classList.remove("spot")});
/* ---- Warp Carousel (vanilla port of the original component) ---- */
(function () {
var FONT = '"Onest","Inter","SF Pro Display",-apple-system,BlinkMacSystemFont,system-ui,"Helvetica Neue",Arial,sans-serif';
var CARDS = [
{ title: "Shell Café\nMenu website", value: "25", unit: "%", footer: "Cream & nescafé palette", detail: "slider", labels: ["Calm", "Lively"], numeral: ["#3ad2ff", "#8cf6ff"], accent: "#7fe8ff", glow: "#12b0e8",
mesh: ["#022852","#031e3f","#031934","#021831","#021b36","#022246","#022345","#020e1e","#01040f","#000416","#020b31","#021c57","#01172f","#01010c","#03001d","#0a0f4c","#112383","#0b36af","#021142","#050b47","#0c2e8f","#165bd4","#1675fd","#167bff","#03288e","#0438af","#0d66e7","#107eec","#30afff","#71dcff","#0356e8","#0259ec","#0945b0","#001a49","#3f7c9d","#d4ffff","#0365ff","#0256ea","#052a87","#00001f","#1f4c7b","#9ee7ff"] },
{ title: "Zero Calories\nRestaurant site", value: "20", unit: "s", footer: "Minimal 3D, plant buttons", detail: "cross", labels: ["Preview", "in", "out"], numeral: ["#e2a6ff", "#fff6ff"], accent: "#d9a8ff", glow: "#62bce8",
mesh: ["#4c2d5f","#3b2245","#3e285b","#33204f","#381844","#572571","#644096","#4f3688","#8358f6","#8d54f3","#5e20ac","#6e24b7","#482e6d","#261b48","#825bf6","#d48cff","#d07bff","#b359ff","#2d1837","#140a1b","#2c1d66","#3a2383","#693bca","#8b42ef","#411c5b","#300753","#3b006e","#500f79","#7e31c1","#9541f3","#44245a","#3f0c69","#6f15b9","#d17cff","#e2a3ff","#a668ff","#4b2f60","#4d2172","#6819aa","#9b48dc","#965dc9","#7745c4"] },
{ title: "Diet Food\nOnline store", value: "95", unit: "fps", footer: "Fresh, clean storefront", detail: "ring", numeral: ["#f4eeb6", "#c4c688"], accent: "#f6efc0", glow: "#dacbe9",
mesh: ["#ff623e","#f57337","#e49435","#fba03f","#ef6b36","#f14c36","#f29a3e","#a0a92e","#a2ba36","#fffe65","#ffd852","#f2863b","#a5b12e","#46821d","#6a6127","#b88b44","#b6bd41","#c4b838","#7e9f27","#3b5a19","#412c10","#0d1700","#255b0c","#98ad28","#a5b232","#3e7c1e","#002800","#00300f","#5b9745","#c1b833","#f3983b","#b3b431","#6fa31f","#9bc976","#edd896","#fd8c3d","#ff5f3b","#ff7d47","#ffa880","#ffc1d8","#ff8d99","#ff5438"] },
{ title: "VANDA\nInventory app", value: "72", footer: "Offline, navy & white", detail: "wave", numeral: ["#fffdf8", "#e8603f"], accent: "#ff6a3d", glow: "#6cc0ea",
mesh: ["#48001c","#400119","#41011d","#4b021e","#47021a","#480019","#7e0036","#8c0033","#4b0120","#10000c","#1f010b","#390116","#e84396","#ff568c","#dc433c","#0e0705","#090004","#2f0213","#ff9fd9","#ff6f90","#a53625","#190d05","#050002","#2f0110","#ff67b5","#b11348","#000000","#11000c","#3e021b","#8a0c31","#e31771","#5d0027","#3a0021","#620030","#640627","#dc184a","#c10b5f","#920245","#ab054f","#910041","#650226","#c01240"] }
];
var wc = document.getElementById("wc");
if (!wc) return;
var CW = 256, CH = 320, CR = 10, FOCAL = 734.103;
var G = { qA: 0.46401, XLA: 165.774, zA: 35.354, psiA: 1.44638, a1: 1.31454, a2: 1.10948, qB: 0.74999, XB: 204.525, ZB: 355.405, bB: 0.69311, bE: 0.04614, vC: 203.134, aC: 229.26, kB: 0.01087, bP: 0.99129, qPR: 1.01828, bPL: 1.0092, qPL: 1.07139 };
function poseAt(q0) {
  var q = q0;
  if (Math.abs(q) < 1) q -= G.kB * Math.pow(Math.sin(Math.PI * q), 2);
  var s = q < 0 ? -1 : 1, a = Math.abs(q), half = CW / 2;
  if (a <= G.qA) {
    var t0 = a / G.qA, xl = -half + (G.XLA + half) * Math.pow(t0, G.a1), zl = G.zA * Math.pow(t0, 4), psi0 = G.psiA * Math.pow(t0, G.a2);
    return [s * (xl + half * Math.cos(psi0)), zl + half * Math.sin(psi0), s * psi0];
  }
  var dXL = ((G.XLA + half) * G.a1) / G.qA, dZL = (G.zA * 4) / G.qA, dps = (G.psiA * G.a2) / G.qA, Hx, Hz;
  if (a <= G.qB) {
    var L = G.qB - G.qA, t = (a - G.qA) / L;
    var hx = G.XLA + CW * Math.cos(G.psiA), hz = G.zA + CW * Math.sin(G.psiA);
    var dhx = dXL - CW * Math.sin(G.psiA) * dps, dhz = dZL + CW * Math.cos(G.psiA) * dps;
    var h00 = 2 * t * t * t - 3 * t * t + 1, h10 = t * t * t - 2 * t * t + t, h01 = -2 * t * t * t + 3 * t * t, h11 = t * t * t - t * t;
    Hx = h00 * hx + h10 * L * dhx * G.bB + h01 * G.XB + h11 * L * G.vC * G.bE;
    Hz = h00 * hz + h10 * L * dhz * G.bB + h01 * G.ZB;
  } else {
    var d = a - G.qB;
    Hx = G.XB + G.vC * d + G.aC * d * d;
    Hz = G.ZB;
  }
  var qP = s < 0 ? G.qPL : G.qPR, bP = s < 0 ? G.bPL : G.bP, LP = qP - G.qA, tp = Math.min(1, (a - G.qA) / LP);
  var psi = (2 * Math.pow(tp, 3) - 3 * tp * tp + 1) * G.psiA + (Math.pow(tp, 3) - 2 * tp * tp + tp) * LP * dps * bP + (-2 * Math.pow(tp, 3) + 3 * tp * tp) * Math.PI;
  return [s * (Hx - half * Math.cos(psi)), Hz - half * Math.sin(psi), s * psi];
}
/* spin curve */
var TK = [0,3,6,8,10,11,12,13,14,16,18,21,25,30,36,45,55,70,88,110];
var TB = [0,0.02175,0.12069,0.22549,0.35493,0.43254,0.51436,0.5952,0.6751,0.83199,0.9709,1.12669,1.27958,1.40975,1.53561,1.68385,1.79183,1.89191,1.95233,2];
var DRIFT = 0.06511, REST_PHASE = 81.828, STEP_FRAMES = 110, LEAD = (STEP_FRAMES - REST_PHASE) / 30;
var SLOPES = (function () {
  var n = TK.length, h = [], dl = [], d = [], k;
  for (k = 0; k < n - 1; k++) { h.push(TK[k + 1] - TK[k]); dl.push((TB[k + 1] - TB[k]) / h[k]); }
  for (k = 0; k < n; k++) d.push(0);
  for (k = 1; k < n - 1; k++) {
    if (dl[k - 1] * dl[k] <= 0) d[k] = 0;
    else { var w1 = 2 * h[k] + h[k - 1], w2 = h[k] + 2 * h[k - 1]; d[k] = (w1 + w2) / (w1 / dl[k - 1] + w2 / dl[k]); }
  }
  var v = (dl[0] + dl[n - 2]) / 2; d[0] = v; d[n - 1] = v;
  return d;
})();
function spin(frames) {
  if (frames <= 0) return 0;
  if (frames >= STEP_FRAMES) return 1;
  var i = 0;
  while (i < TK.length - 2 && frames > TK[i + 1]) i++;
  var h = TK[i + 1] - TK[i], t = (frames - TK[i]) / h;
  var h00 = 2 * t * t * t - 3 * t * t + 1, h10 = t * t * t - 2 * t * t + t, h01 = -2 * t * t * t + 3 * t * t, h11 = t * t * t - t * t;
  return (h00 * TB[i] + h10 * h * SLOPES[i] + h01 * TB[i + 1] + h11 * h * SLOPES[i + 1]) / 2;
}
function spinN(frames, n) {
  if (n <= STEP_FRAMES + 0.5) return spin((frames * STEP_FRAMES) / Math.max(1, n));
  var knee = 80;
  if (frames <= knee) return spin(frames);
  return spin(knee + ((frames - knee) * (STEP_FRAMES - knee)) / (n - knee));
}
/* colour + painter */
function parseColor(c, fb) {
  var s = (c || "").trim(), m = /^#([0-9a-f]{3,8})$/i.exec(s);
  if (m) { var h = m[1]; if (h.length <= 4) h = h.split("").map(function (x) { return x + x; }).join(""); var n = parseInt(h.slice(0, 6), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
  m = /^rgba?\(([^)]+)\)$/i.exec(s);
  if (m) { var p = m[1].split(/[ ,/]+/).filter(Boolean).map(parseFloat); return [p[0] || 0, p[1] || 0, p[2] || 0]; }
  return fb || [0, 0, 0];
}
function rgba(c, a) { return "rgba(" + c[0] + ", " + c[1] + ", " + c[2] + ", " + a + ")"; }
function bspline(t, o) { var it = 1 - t; o[0] = (it * it * it) / 6; o[1] = (3 * t * t * t - 6 * t * t + 4) / 6; o[2] = (-3 * t * t * t + 3 * t * t + 3 * t + 1) / 6; o[3] = (t * t * t) / 6; }
function meshGrid(mesh) {
  var cols = mesh.map(function (c) { return parseColor(c); }), out = [];
  for (var j = 0; j < 7; j++) for (var i = 0; i < 6; i++) out.push(cols.length === 42 ? cols[j * 6 + i] : cols[Math.min(cols.length - 1, Math.round(((j * 6 + i) / 41) * (cols.length - 1)))]);
  return out;
}
function paintMesh(ctx, w, h, mesh) {
  var grid = meshGrid(mesh), img = ctx.createImageData(w, h), d = img.data, wx = new Float32Array(w * 4), ix = new Int32Array(w * 4), tmp = [0, 0, 0, 0], x, y, k, i;
  for (x = 0; x < w; x++) {
    var u = ((x + 0.5) / w) * 5, iu = Math.floor(u); bspline(u - iu, tmp);
    for (k = 0; k < 4; k++) { wx[x * 4 + k] = tmp[k]; ix[x * 4 + k] = Math.min(5, Math.max(0, iu - 1 + k)); }
  }
  var row = new Float32Array(18), seed = 1234567;
  for (y = 0; y < h; y++) {
    var v = ((y + 0.5) / h) * 6, j = Math.floor(v); bspline(v - j, tmp); row.fill(0);
    for (k = 0; k < 4; k++) {
      var jj = Math.min(6, Math.max(0, j - 1 + k)), wy = tmp[k];
      for (i = 0; i < 6; i++) { var c = grid[jj * 6 + i]; row[i * 3] += c[0] * wy; row[i * 3 + 1] += c[1] * wy; row[i * 3 + 2] += c[2] * wy; }
    }
    for (x = 0; x < w; x++) {
      var r = 0, g = 0, b = 0;
      for (k = 0; k < 4; k++) { var wg = wx[x * 4 + k], i3 = ix[x * 4 + k] * 3; r += row[i3] * wg; g += row[i3 + 1] * wg; b += row[i3 + 2] * wg; }
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      var nz = (seed / 0x7fffffff - 0.5) * 1.6, o = (y * w + x) * 4;
      d[o] = r + nz; d[o + 1] = g + nz; d[o + 2] = b + nz; d[o + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
}
function fontStr(wt, px) { return wt + " " + px + "px " + FONT; }
function sizeForCap(ctx, wt, cap, sample) {
  ctx.font = fontStr(wt, 100);
  var asc = ctx.measureText(sample || "0").actualBoundingBoxAscent || 71;
  return (cap / asc) * 100;
}
function paintCard(cv, card) {
  var w = cv.width, h = cv.height, ctx = cv.getContext("2d"), k = w / CW;
  ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, w, h);
  paintMesh(ctx, w, h, card.mesh);
  ctx.setTransform(k, 0, 0, k, 0, 0); ctx.textBaseline = "alphabetic";
  var white = [255, 255, 255], accent = parseColor(card.accent || "#ffffff");
  var small = sizeForCap(ctx, 300, 7.9, "H");
  ctx.font = fontStr(300, small); ctx.fillStyle = rgba(white, 0.9);
  card.title.split("\n").slice(0, 2).forEach(function (ln, i) { ctx.fillText(ln, 17, 37 + i * 14); });
  if (card.footer) { ctx.fillStyle = rgba(white, 0.88); ctx.fillText(card.footer, 17, 295); }
  var big = sizeForCap(ctx, 300, 50), unitPx = big * 0.31;
  ctx.font = fontStr(300, big);
  var value = card.value || "", vw = ctx.measureText(value).width;
  ctx.font = fontStr(300, unitPx);
  var uw = card.unit ? ctx.measureText(card.unit).width + 4 : 0, detail = card.detail || "none";
  var centre = detail === "wave" ? 112 : detail === "cross" ? 106 : 127;
  var x0 = centre - (vw + uw) / 2 + (detail === "cross" ? uw / 2 : 0);
  var n0 = parseColor(card.numeral[0]), n1 = parseColor(card.numeral[1]);
  var grad = ctx.createLinearGradient(x0, 0, x0 + vw, 0);
  grad.addColorStop(0, rgba(n0, 1)); grad.addColorStop(1, rgba(n1, 1));
  var i, lab = card.labels || [];
  if (detail === "ring") {
    for (i = 0; i < 132; i++) {
      var a = (i / 132) * Math.PI * 2 - Math.PI / 2, sl = 0.5 + 0.5 * Math.sin(i * 12.9898) * Math.sin(i * 4.1414 + 1.3), top = 0.5 + 0.5 * Math.cos(a + Math.PI / 2);
      var len = 4 + 4.5 * Math.abs(sl) + 2 * top;
      ctx.strokeStyle = rgba(accent, 0.22 + 0.5 * top * top); ctx.lineWidth = 1 + 0.7 * top;
      ctx.beginPath(); ctx.moveTo(126 + Math.cos(a) * 68, 156 + Math.sin(a) * 68); ctx.lineTo(126 + Math.cos(a) * (68 + len), 156 + Math.sin(a) * (68 + len)); ctx.stroke();
    }
  } else if (detail === "slider") {
    var pct = Math.max(0, Math.min(100, parseFloat(value) || 0)) / 100, xa = 24, xb = 232, y = 197.5, kx = xa + 4 + (xb - xa - 8) * pct * 0.86;
    var lg = ctx.createLinearGradient(xa, 0, xb, 0);
    lg.addColorStop(0, rgba(accent, 0.15)); lg.addColorStop(Math.max(0.01, (kx - xa) / (xb - xa)), rgba(accent, 0.85)); lg.addColorStop(1, rgba(accent, 0.35));
    ctx.fillStyle = lg; ctx.fillRect(xa, y - 0.6, xb - xa, 1.2);
    ctx.save(); ctx.shadowColor = rgba(accent, 0.95); ctx.shadowBlur = 9 * k; ctx.fillStyle = rgba(white, 1);
    ctx.beginPath(); ctx.arc(kx, y, 4.6, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    ctx.font = fontStr(400, sizeForCap(ctx, 400, 5.2, "H")); ctx.fillStyle = rgba(white, 0.6);
    if (lab[0]) ctx.fillText(lab[0], 14, 208);
    if (lab[1]) { ctx.textAlign = "right"; ctx.fillText(lab[1], 230, 208); ctx.textAlign = "left"; }
  } else if (detail === "wave") {
    ctx.fillStyle = "rgba(20, 0, 8, 0.32)"; ctx.beginPath(); ctx.arc(27, 157, 18, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = rgba(white, 0.75); ctx.lineWidth = 0.9;
    [27, 199].forEach(function (px) { ctx.beginPath(); ctx.moveTo(px - 3, 157); ctx.lineTo(px + 3, 157); ctx.moveTo(px, 154); ctx.lineTo(px, 160); ctx.stroke(); });
    for (i = 0; i < 56; i++) {
      var r1 = Math.abs(Math.sin(i * 1.7 + 0.4) * Math.cos(i * 0.53)), hh = 1.5 + 6.5 * r1, mark = i === 23;
      ctx.fillStyle = mark ? rgba(accent, 0.95) : rgba(white, 0.3);
      ctx.fillRect(43 + i * 3, 204 - (mark ? 8 : hh), mark ? 1.4 : 0.9, mark ? 16 : hh * 2);
    }
  } else if (detail === "cross") {
    ctx.fillStyle = rgba(white, 0.28); ctx.fillRect(105.5, 66, 0.8, 182); ctx.fillRect(12, 156.5, 186, 0.8);
    ctx.font = fontStr(300, big * 0.72); ctx.fillStyle = rgba(white, 0.07); ctx.textAlign = "center";
    ctx.fillText(String(Math.max(0, (parseFloat(value) || 0) - 8)), 106, 122); ctx.textAlign = "left";
    var badge = function (bx, by, t) {
      ctx.fillStyle = "rgba(10, 0, 30, 0.35)"; ctx.beginPath(); ctx.arc(bx, by, 6.5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = rgba(white, 0.7); ctx.font = fontStr(500, 4.2); ctx.textAlign = "center"; ctx.fillText(t, bx, by + 1.5); ctx.textAlign = "left";
    };
    if (lab[1]) badge(28, 137, lab[1]);
    if (lab[2]) badge(181, 170, lab[2]);
    if (lab[0]) {
      ctx.font = fontStr(400, 5.2);
      var tw = ctx.measureText(lab[0]).width, ppx = 208 - tw - 10;
      ctx.fillStyle = rgba(white, 0.1); ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(ppx, 25, tw + 10, 11, 3); else ctx.rect(ppx, 25, tw + 10, 11);
      ctx.fill(); ctx.fillStyle = rgba(white, 0.55); ctx.fillText(lab[0], ppx + 5, 32.5);
    }
  }
  ctx.save(); ctx.shadowColor = rgba(n1, 0.35); ctx.shadowBlur = 10 * k;
  ctx.font = fontStr(300, big); ctx.fillStyle = grad; ctx.fillText(value, x0, 186);
  if (card.unit) { ctx.font = fontStr(300, unitPx); ctx.fillStyle = rgba(n1, 1); ctx.fillText(card.unit, x0 + vw + 4, 186 - 50 + unitPx * 0.72); }
  ctx.restore();
}
/* glow ellipse cast by a card */
function glowShape(pose) {
  var px = pose[0], pz = pose[1], ps = pose[2], c = Math.cos(ps), sn = Math.sin(ps);
  if (c <= 0.02) return [0, 1, 0];
  var A = px, B = FOCAL + pz, tNear = B - 0.5 * CW * Math.abs(sn), m = 0, mx = 0, mxx = 0;
  for (var u = -360; u <= 360; u += 3) {
    var hh = Math.exp(-Math.pow(Math.abs(u - 9) / 138, 4));
    if (hh < 0.003) continue;
    var k = u / 1.8 / FOCAL, den = sn * k - c;
    if (Math.abs(den) < 1e-4) continue;
    var s = (A - B * k) / den, t = B + s * sn;
    if (t < 4) continue;
    if ((u / 1.8 / FOCAL) * t * sn - t * c >= 0) continue;
    var dsdk = (B * c - A * sn) / (den * den), soft = Math.min(Math.abs(dsdk / FOCAL) * 2.2, 40) + 0.5;
    var cov = Math.max(0, Math.min(1, (CW * 0.5 - Math.abs(s)) / soft + 0.5));
    if (cov <= 0) continue;
    var near = Math.min(1, FOCAL / t), rel = Math.exp(-Math.pow(Math.max(t - tNear, 0) / 36, 1.5)), w = cov * near * near * rel * c * hh;
    m += w; mx += w * u; mxx += w * u * u;
  }
  if (m < 0.5) return [0, 1, 0];
  var mu = mx / m, sd = Math.sqrt(Math.max(1, mxx / m - mu * mu)), r = Math.max(6, sd / 0.581);
  return [mu, r, (m * 3) / (1.813 * r)];
}
/* shaders */
var VERT = "#version 300 es\nin vec2 aPos;\nvoid main(){ gl_Position = vec4(aPos, 0.0, 1.0); }";
var FRAG = "#version 300 es\nprecision highp float;\nprecision highp sampler2DArray;\n" +
"uniform sampler2DArray uTex;uniform vec2 uRes;uniform float uUnit;uniform vec4 uPose[8];uniform vec3 uGlowCol[8];uniform vec3 uGlowShape[8];uniform vec3 uBg;uniform float uWarp;uniform float uMix;\nout vec4 outColor;\n" +
"const float F = " + FOCAL.toFixed(2) + ";const float CW = " + CW.toFixed(1) + ";const float CH = " + CH.toFixed(1) + ";const float CR = " + CR.toFixed(1) + ";\n" + [
"float lensH(float a){",
" if (a <= 232.0) return a;",
" float k[9] = float[9](232.0, 238.0, 245.0, 253.0, 262.0, 275.0, 295.0, 325.0, 360.0);",
" float d[9] = float[9](1.1759, 1.0671, 1.0156, 1.0965, 0.6487, 0.2700, -0.1991, -0.4782, -0.0318);",
" float s = 232.0;",
" for (int i = 0; i < 8; i++){",
"  if (a <= k[i]) break;",
"  float x = min(a, k[i+1]);",
"  float t = (x - k[i]) / (k[i+1] - k[i]);",
"  s += (x - k[i]) * mix(1.0, mix(d[i], d[i+1], t * 0.5), uWarp);",
" }",
" if (a > 360.0) s += (a - 360.0) * mix(1.0, d[8], uWarp);",
" return s;",
"}",
"float lensS(float a){",
" float t = clamp((a - 262.0) / 93.0, 0.0, 2.0);",
" return 1.0 + uWarp * (0.42 * pow(t, 1.5) + 0.045 * smoothstep(320.0, 360.0, a));",
"}",
"float sdRound(vec2 p, vec2 b, float r){ vec2 q = abs(p) - b + r; return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r; }",
"vec4 shadeCard(vec4 pose, vec2 ps, float fx, float fy, out float depth){",
" depth = 1e9;",
" if (pose.w < 0.0) return vec4(0.0);",
" float k = ps.x / F; float c = cos(pose.z), sn = sin(pose.z);",
" float den = sn * k - c;",
" if (abs(den) < 1e-5) return vec4(0.0);",
" float A = pose.x, B = F + pose.y;",
" float s = (A - B * k) / den; float t = B + s * sn;",
" if (t < 4.0) return vec4(0.0);",
" float y = t * ps.y / F;",
" float dsdk = (B * c - A * sn) / (den * den);",
" float fs = min(abs(dsdk / F) * fx, 48.0);",
" float fyc = min(t / F * fy, 48.0);",
" vec2 p = vec2(s, y);",
" float d = sdRound(p, vec2(CW, CH) * 0.5, CR);",
" vec2 q = abs(p) - vec2(CW, CH) * 0.5 + CR;",
" vec2 n = q.x > q.y ? vec2(1.0, 0.0) : vec2(0.0, 1.0);",
" if (q.x > 0.0 && q.y > 0.0) n = normalize(q);",
" float fp = length(vec2(fs * n.x, fyc * n.y)) + 1e-4;",
" if (d > fp) return vec4(0.0);",
" float cov = clamp(0.5 - d / fp, 0.0, 1.0);",
" if (cov <= 0.0) return vec4(0.0);",
" vec2 uv = vec2(s / CW + 0.5, 0.5 - y / CH);",
" vec4 tex = textureGrad(uTex, vec3(uv, pose.w), vec2(fs / CW, 0.0), vec2(0.0, fyc / CH));",
" depth = t;",
" return vec4(tex.rgb, 1.0) * cov;",
"}",
"vec4 scene(vec2 ps, float fx, float fy, int base){",
" vec4 col[4]; float dep[4];",
" for (int i = 0; i < 4; i++) col[i] = shadeCard(uPose[base + i], ps, fx, fy, dep[i]);",
" for (int i = 0; i < 3; i++) for (int j = 0; j < 3; j++) if (j < 3 - i && dep[j] > dep[j+1]) { float td = dep[j]; dep[j] = dep[j+1]; dep[j+1] = td; vec4 tc = col[j]; col[j] = col[j+1]; col[j+1] = tc; }",
" vec4 acc = vec4(0.0);",
" for (int i = 0; i < 4; i++) acc += (1.0 - acc.a) * col[i];",
" return acc;",
"}",
"vec4 glowAt(vec2 pu, float halfH, int base){",
" vec4 sum = vec4(0.0);",
" float gH = min(halfH, 288.0);",
" float dy = min(abs((gH - 11.0) - pu.y), abs(pu.y + (gH - 12.0)));",
" if (dy > 40.0) return sum;",
" for (int i = 0; i < 4; i++){",
"  vec3 sh = uGlowShape[base + i];",
"  if (sh.z <= 0.0) continue;",
"  float E = exp(-pow(abs(pu.x - sh.x) / sh.y, 4.0));",
"  if (E < 0.002) continue;",
"  float v = exp(-pow(dy / (18.5 * (0.45 + 0.55 * sqrt(E))), 3.0));",
"  float w = sh.z * E * v;",
"  sum += vec4(uGlowCol[base + i] * w, w);",
" }",
" return sum;",
"}",
"vec3 stage(vec2 pu, float halfH, int base){",
" vec4 g = glowAt(pu, halfH, base);",
" if (g.a <= 0.0) return uBg;",
" float I = clamp(g.a, 0.0, 1.0);",
" vec3 drop = uBg - g.rgb / g.a;",
" return uBg - drop * pow(vec3(I), vec3(0.8, 1.6, 1.0));",
"}",
"vec3 render(vec2 pu, float halfH, int base){",
" float au = min(abs(pu.x), 360.0);",
" float px = 1.0 / uUnit;",
" vec3 bg = stage(pu, halfH, base);",
" if (au < 236.0 || uWarp <= 0.0) { vec4 c = scene(pu, px, px, base); return c.rgb + (1.0 - c.a) * bg; }",
" float e = 0.064 * uWarp * smoothstep(275.0, 360.0, au);",
" float S0 = lensS(au);",
" float sg = pu.x < 0.0 ? -1.0 : 1.0;",
" float blur = 1.0 + 30.0 * pow(smoothstep(240.0, 340.0, au), 1.5) * uWarp;",
" float fyb = 1.0 + 15.0 * smoothstep(280.0, 352.0, au) * uWarp;",
" float gain = 1.0 + 0.17 * smoothstep(285.0, 350.0, au) * uWarp;",
" vec3 acc;",
" for (int ch = 0; ch < 3; ch++){",
"  float off = uWarp * (ch == 0 ? -20.92 : (ch == 1 ? 0.0 : 11.91));",
"  float h = lensH(au) + off * smoothstep(289.8, 344.9, au);",
"  float h0 = lensH(au - 0.5) + off * smoothstep(289.8, 344.9, au - 0.5);",
"  float h1 = lensH(au + 0.5) + off * smoothstep(289.8, 344.9, au + 0.5);",
"  float fx = px * max(abs(h1 - h0), 0.02) * blur;",
"  float S = S0 * (ch == 0 ? 1.0 + e : (ch == 1 ? 1.0 : 1.0 - e));",
"  vec4 c = scene(vec2(sg * h, pu.y / S), fx, px / S * fyb, base);",
"  c.rgb = min(c.rgb * gain, vec3(c.a));",
"  acc[ch] = (c.rgb + (1.0 - c.a) * bg)[ch];",
" }",
" return acc;",
"}",
"void main(){",
" vec2 fc = gl_FragCoord.xy;",
" vec2 pu = (fc - 0.5 * uRes) / uUnit;",
" float halfH = 0.5 * uRes.y / uUnit;",
" vec3 col = render(pu, halfH, 0);",
" if (uMix > 0.0) col = mix(col, render(pu, halfH, 4), uMix);",
" outColor = vec4(col, 1.0);",
"}"].join("\n");
function createGL(canvas) {
  var gl = canvas.getContext("webgl2", { antialias: false, alpha: false, premultipliedAlpha: false, preserveDrawingBuffer: false });
  if (!gl) return null;
  function sh(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.warn(gl.getShaderInfoLog(s)); return null; } return s; }
  var vs = sh(gl.VERTEX_SHADER, VERT), fs = sh(gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return null;
  var prog = gl.createProgram(); gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.bindAttribLocation(prog, 0, "aPos"); gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { console.warn(gl.getProgramInfoLog(prog)); return null; }
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  var loc = {};
  ["uTex", "uRes", "uUnit", "uPose", "uGlowCol", "uGlowShape", "uBg", "uWarp", "uMix"].forEach(function (n) { loc[n] = gl.getUniformLocation(prog, n); });
  return { gl: gl, prog: prog, tex: gl.createTexture(), loc: loc, aniso: gl.getExtension("EXT_texture_filter_anisotropic") };
}
function uploadCards(st, canvases) {
  var gl = st.gl, w = canvases[0].width, h = canvases[0].height;
  gl.bindTexture(gl.TEXTURE_2D_ARRAY, st.tex);
  gl.texImage3D(gl.TEXTURE_2D_ARRAY, 0, gl.RGBA8, w, h, canvases.length, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
  canvases.forEach(function (cv, i) { gl.texSubImage3D(gl.TEXTURE_2D_ARRAY, 0, 0, 0, i, w, h, 1, gl.RGBA, gl.UNSIGNED_BYTE, cv); });
  gl.generateMipmap(gl.TEXTURE_2D_ARRAY);
  gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  if (st.aniso) gl.texParameterf(gl.TEXTURE_2D_ARRAY, st.aniso.TEXTURE_MAX_ANISOTROPY_EXT, 8);
}
/* controller */
var N = CARDS.length, GAP = 3.6667, STEP = 2, WARP = 1;
var mod = function (a, n) { return ((a % n) + n) % n; };
var canvas = document.createElement("canvas");
canvas.setAttribute("aria-hidden", "true");
canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
wc.insertBefore(canvas, wc.firstChild);
var live = document.createElement("div");
live.setAttribute("aria-live", "polite");
live.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)";
wc.appendChild(live);
var gls = createGL(canvas);
if (!gls) { wc.classList.add("nogl"); return; }
var mq = matchMedia("(prefers-reduced-motion: reduce)"), reduced = mq.matches;
var cur = 0, shown = -1;
var L = { P: 0, from: 0, to: 0, t0: 0, n: STEP_FRAMES, v: 0, mode: "rest", nextAuto: Infinity, autoPending: false, fadeFrom: 0, fadeT0: 0, dragX: 0, dragP: 0, downX: 0, moved: false, lastT: 0, visible: true, hiddenAt: 0 };
var cardCanvases = [], texW = 0, raf = 0, W = 0, H = 0, unit = 1, bg = [248, 247, 243];
var glowCols = CARDS.map(function (c) { return parseColor(c.glow); });
function readBg() { bg = parseColor(getComputedStyle(wc).backgroundColor, [248, 247, 243]); }
function paintAll(w) {
  cardCanvases = CARDS.map(function (card) { var cv = document.createElement("canvas"); cv.width = w; cv.height = Math.round((w * CH) / CW); paintCard(cv, card); return cv; });
  texW = w; uploadCards(gls, cardCanvases);
}
function resize() {
  var r = wc.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = Math.max(2, Math.round(r.width * dpr)); H = Math.max(2, Math.round(r.height * dpr));
  if (canvas.width !== W) canvas.width = W;
  if (canvas.height !== H) canvas.height = H;
  unit = Math.min(W / 720, H / 440);
  var want = Math.min(1024, Math.max(256, Math.round(CW * unit * 1.25)));
  if (want !== texW) paintAll(want);
}
function poseSet(P) {
  var ids = [];
  for (var c = 0; c < N; c++) ids.push({ c: c, q: mod(c - P + N / 2, N) - N / 2 });
  ids.sort(function (a, b) { return Math.abs(a.q) - Math.abs(b.q); });
  return ids.slice(0, 4).map(function (o) { return Math.abs(o.q) > 2.05 ? { pose: [0, 0, 0], layer: -1 } : { pose: poseAt(o.q), layer: o.c }; });
}
function progressAt(now) {
  if (L.mode === "spin") {
    var f = (now - L.t0) * 30;
    L.P = L.from + (L.to - L.from) * spinN(f, L.n);
    if (f >= L.n) L.mode = "rest";
  } else if (L.mode === "spring") {
    var dt = Math.min(0.034, Math.max(0, now - L.lastT)); L.lastT = now;
    for (var i = 0; i < 4; i++) { var acc = -60 * (L.P - L.to) - 13 * L.v; L.v += (acc * dt) / 4; L.P += (L.v * dt) / 4; }
    if (Math.abs(L.P - L.to) < 4e-4 && Math.abs(L.v) < 3e-3) { L.P = L.to; L.v = 0; L.mode = "rest"; }
  } else if (L.mode === "fade") {
    var m = Math.min(1, (now - L.fadeT0) / 0.45);
    if (m >= 1) L.mode = "rest";
    return { P: L.P, Pb: L.fadeFrom, mix: 1 - m * m * (3 - 2 * m) };
  }
  return { P: L.P, Pb: 0, mix: 0 };
}
var poseArr = new Float32Array(32), glowArr = new Float32Array(24), shapeArr = new Float32Array(24);
function fill(set, off) {
  set.forEach(function (s, i) {
    var j = off + i, gc = s.layer >= 0 ? glowCols[s.layer] : [255, 255, 255], gs = s.layer >= 0 ? glowShape(s.pose) : [0, 1, 0];
    poseArr[j * 4] = s.pose[0]; poseArr[j * 4 + 1] = s.pose[1]; poseArr[j * 4 + 2] = s.pose[2]; poseArr[j * 4 + 3] = s.layer;
    glowArr[j * 3] = gc[0] / 255; glowArr[j * 3 + 1] = gc[1] / 255; glowArr[j * 3 + 2] = gc[2] / 255;
    shapeArr[j * 3] = gs[0]; shapeArr[j * 3 + 1] = gs[1]; shapeArr[j * 3 + 2] = gs[2];
  });
}
function draw(now) {
  var pr = progressAt(now), gl = gls.gl, loc = gls.loc;
  gl.viewport(0, 0, W, H); gl.useProgram(gls.prog);
  fill(poseSet(pr.P), 0);
  if (pr.mix > 0) fill(poseSet(pr.Pb), 4);
  gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D_ARRAY, gls.tex);
  gl.uniform1i(loc.uTex, 0); gl.uniform2f(loc.uRes, W, H); gl.uniform1f(loc.uUnit, unit);
  gl.uniform4fv(loc.uPose, poseArr); gl.uniform3fv(loc.uGlowCol, glowArr); gl.uniform3fv(loc.uGlowShape, shapeArr);
  gl.uniform3f(loc.uBg, bg[0] / 255, bg[1] / 255, bg[2] / 255); gl.uniform1f(loc.uWarp, WARP); gl.uniform1f(loc.uMix, pr.mix);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
  var n = mod(cur, N);
  if (n !== shown) { shown = n; live.textContent = CARDS[n].title.replace("\n", " - ") + ". " + CARDS[n].footer; }
}
function go(next, fromAuto) {
  var delta = next - cur, now = performance.now() / 1000;
  cur = next;
  if (reduced) { L.fadeFrom = L.P; L.P = Math.round(L.P) + delta; L.mode = "fade"; L.fadeT0 = now; }
  else if (L.mode !== "spring") {
    L.from = L.P; L.to = Math.round(L.P - DRIFT) + delta + DRIFT; L.t0 = now; L.n = fromAuto ? GAP * 30 : STEP_FRAMES; L.mode = "spin";
  }
  if (!fromAuto) L.nextAuto = now + GAP;
  kick();
}
function loop() {
  raf = 0;
  if (!L.visible) return;
  var now = performance.now() / 1000;
  if (!reduced && L.mode !== "drag" && L.mode !== "spring" && now >= L.nextAuto) {
    L.nextAuto = Math.max(L.nextAuto + GAP, now + GAP * 0.5);
    go(cur + STEP, true);
  }
  draw(now);
  raf = requestAnimationFrame(loop);
}
function kick() { if (!raf && L.visible) raf = requestAnimationFrame(loop); }
var t0 = performance.now() / 1000;
if (!reduced) {
  L.from = cur - STEP + DRIFT; L.to = cur + DRIFT; L.t0 = t0 - REST_PHASE / 30; L.n = STEP_FRAMES; L.mode = "spin";
  L.P = L.from + (L.to - L.from) * spin(REST_PHASE); L.nextAuto = t0 + LEAD;
} else L.nextAuto = Infinity;
readBg(); resize();
new ResizeObserver(function () { resize(); draw(performance.now() / 1000); }).observe(wc);
var inView = true;
function setVisible(vis) {
  var now = performance.now() / 1000;
  if (vis === L.visible) return;
  if (!vis) L.hiddenAt = now;
  else { var dt = now - L.hiddenAt; L.t0 += dt; L.fadeT0 += dt; L.nextAuto += dt; L.lastT = now; }
  L.visible = vis;
  if (vis) kick();
}
new IntersectionObserver(function (e) { inView = e.some(function (x) { return x.isIntersecting; }); setVisible(inView && document.visibilityState === "visible"); }).observe(wc);
document.addEventListener("visibilitychange", function () { setVisible(inView && document.visibilityState === "visible"); });
mq.addEventListener && mq.addEventListener("change", function () { reduced = mq.matches; });
var lost = false;
canvas.addEventListener("webglcontextlost", function (e) { e.preventDefault(); lost = true; });
canvas.addEventListener("webglcontextrestored", function () { if (!lost) return; lost = false; gls = createGL(canvas); texW = 0; resize(); kick(); });
if (document.fonts) { document.fonts.addEventListener && document.fonts.addEventListener("loadingdone", function () { texW = 0; resize(); draw(performance.now() / 1000); }); }
function themeChanged() { readBg(); draw(performance.now() / 1000); }
new MutationObserver(themeChanged).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
matchMedia("(prefers-color-scheme: dark)").addEventListener && matchMedia("(prefers-color-scheme: dark)").addEventListener("change", themeChanged);
draw(t0); kick();
/* interaction */
function css() { var r = wc.getBoundingClientRect(); return Math.min(r.width / 720, r.height / 440); }
wc.addEventListener("pointerdown", function (e) {
  if (e.button > 0) return;
  wc.setPointerCapture && wc.setPointerCapture(e.pointerId);
  L.mode = "drag"; L.dragX = e.clientX; L.downX = e.clientX; L.dragP = L.P; L.v = 0; L.moved = false; L.lastT = performance.now() / 1000; kick();
});
wc.addEventListener("pointermove", function (e) {
  if (L.mode !== "drag") return;
  var now = performance.now() / 1000, P = L.dragP - (e.clientX - L.dragX) / (css() * 300), dt = Math.max(1 / 240, now - L.lastT);
  L.v = 0.6 * L.v + 0.4 * ((P - L.P) / dt); L.P = P; L.lastT = now;
  if (Math.abs(e.clientX - L.downX) > 5) L.moved = true;
});
function up(e) {
  if (L.mode !== "drag") return;
  var now = performance.now() / 1000;
  L.nextAuto = now + GAP;
  if (!L.moved) {
    L.mode = "rest";
    var r = wc.getBoundingClientRect(), u = (e.clientX - r.left - r.width / 2) / css();
    if (u > 168) go(cur + 1); else if (u < -168) go(cur - 1);
    return;
  }
  if (now - L.lastT > 0.08) L.v = 0;
  var target = Math.round(L.P + L.v * 0.16), from = Math.round(L.dragP - DRIFT);
  L.to = target; L.mode = "spring"; L.lastT = now;
  cur += target - from;
  kick();
}
wc.addEventListener("pointerup", up);
wc.addEventListener("pointercancel", up);
wc.addEventListener("keydown", function (e) {
  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
  e.preventDefault(); go(cur + (e.key === "ArrowRight" ? 1 : -1));
});
})();
var tg=document.getElementById("tg"),root=document.documentElement;
tg.addEventListener("click",function(){var d=root.dataset.theme?root.dataset.theme=="dark":matchMedia("(prefers-color-scheme:dark)").matches;root.dataset.theme=d?"light":"dark"});
document.getElementById("f").addEventListener("submit",function(e){e.preventDefault();document.getElementById("ok").style.display="block";this.reset()});

(function(){
var b=document.getElementById("burger"),m=document.getElementById("mnav"),cu=document.getElementById("curtain"),cl=document.getElementById("cl"),busy=false,rmo=matchMedia("(prefers-reduced-motion:reduce)");
function setM(o){document.body.classList.toggle("menu-open",o);b.setAttribute("aria-expanded",o);b.setAttribute("aria-label",o?"Close menu":"Open menu");m.setAttribute("aria-hidden",!o);m.inert=!o}
b.addEventListener("click",function(){setM(!document.body.classList.contains("menu-open"))});
document.addEventListener("keydown",function(e){if(e.key=="Escape")setM(false)});
matchMedia("(min-width:900px)").addEventListener("change",function(e){if(e.matches)setM(false)});
function jump(id){var t=id=="#top"?null:document.querySelector(id),y=t?t.getBoundingClientRect().top+scrollY-72:0;window.scrollTo({top:Math.max(0,y),behavior:"instant"});history.replaceState(null,"",id=="#top"?location.pathname:id)}
m.querySelectorAll("a[data-go]").forEach(function(a){a.addEventListener("click",function(e){
 e.preventDefault();if(busy)return;var id=a.getAttribute("href");setM(false);
 if(rmo.matches){jump(id);return}
 busy=true;cl.textContent=a.dataset.go;cu.className="curtain";void cu.offsetWidth;cu.classList.add("in");
 setTimeout(function(){jump(id);cu.classList.add("out")},700);
 setTimeout(function(){cu.style.transition="none";cu.className="curtain";void cu.offsetWidth;cu.style.transition="";busy=false},1400)})});
})();

/* ---- Fuzzy critter footer (vanilla port of the original component) ---- */
(function () {
var root = document.getElementById("fcf");
if (!root) return;
var word = root.querySelector(".fcf-word"), stage = root.querySelector(".fcf-stage"), haze = root.querySelector(".fcf-haze");
var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
var GRAVITY = 2600, BOUNCE = 0.32, WIND = 1, DENSITY = 1, SOUND = true, VOLUME = 0.4, IDLE_HOPS = true;
var CRITTERS = [
  { shape: "cloud", colors: ["#f0bc14", "#ffdc64"], eyes: "dashes", size: 1.08 },
  { shape: "flower", colors: ["#e26a9d", "#ffbdd9"], eyes: "short", size: 0.86 },
  { shape: "cube", colors: ["#2e7ed6", "#b3e0ff"], eyes: "pills", size: 1.22 },
  { shape: "triangle", colors: ["#fc3b2f", "#ffa89c"], eyes: "short", size: 1.05 },
  { shape: "bean", colors: ["#32b763", "#baf3ca"], eyes: "big", size: 0.96 },
  { shape: "puff", colors: ["#a88cf0", "#e6dcff"], eyes: "pills", size: 0.95 }
];
/* physics: screen-space 2D bodies in stage pixels, x right, y up from the stage bottom */
function unitFor(w) { return Math.max(40, Math.min(150, w < 640 ? w / 8.8 : w / 9.4)); }
function floorFor(unit) { return 10 + unit * 0.16; }
function makeBody(r, wall) { return { x: 0, y: -9999, vx: 0, vy: 0, a: 0, va: 0, r: r, wall: wall === undefined ? r : wall, live: false, held: false, onFloor: false }; }
function dropStart(b, i, n, world, rnd) {
  var lane = (i + 0.5 + (rnd() - 0.5) * 0.6) / n;
  b.live = true; b.held = false; b.onFloor = false;
  b.x = Math.min(world.w - b.wall, Math.max(b.wall, lane * world.w));
  b.y = world.h + b.r + 40 + rnd() * 160;
  b.vx = (rnd() - 0.5) * 140; b.vy = -60 - rnd() * 120;
  b.a = (rnd() - 0.5) * 1.2; b.va = (rnd() - 0.5) * 3;
}
function restInRow(bodies, world) {
  var gap = world.w / (bodies.length + 1);
  bodies.forEach(function (b, i) {
    b.live = true; b.x = gap * (i + 1); b.y = world.floor + b.r;
    b.vx = b.vy = b.a = b.va = 0; b.onFloor = true;
  });
}
function stepBodies(bodies, world, dt, hand) {
  var impacts = [], e = Math.max(0, Math.min(0.9, world.bounce)), i, j, b;
  for (i = 0; i < bodies.length; i++) {
    b = bodies[i]; impacts[i] = 0;
    if (!b.live) continue;
    if (b.held && hand) {
      var tx = Math.min(world.w - b.wall, Math.max(b.wall, hand.x));
      var ty = Math.min(world.h - b.r * 0.6, Math.max(world.floor + b.r, hand.y));
      b.vx = (tx - b.x) * 18; b.vy = (ty - b.y) * 18;
      b.va += (-b.vx * 0.00025 - b.va) * 4 * dt;
    } else b.vy -= world.gravity * dt;
    b.x += b.vx * dt; b.y += b.vy * dt; b.a += b.va * dt;
    b.onFloor = false;
    if (b.y - b.r < world.floor) {
      b.y = world.floor + b.r;
      if (b.vy < -80) impacts[i] = Math.min(1, -b.vy / 1400);
      b.vy = -b.vy * e;
      if (Math.abs(b.vy) < 60) b.vy = 0;
      b.onFloor = true;
      b.vx *= 1 - 3 * dt;
      b.va += (-b.vx / b.r - b.va) * Math.min(1, 3 * dt);
    }
    if (b.x - b.wall < 0) { b.x = b.wall; b.vx = Math.abs(b.vx) * e; }
    if (b.x + b.wall > world.w) { b.x = world.w - b.wall; b.vx = -Math.abs(b.vx) * e; }
    b.va *= 1 - 0.6 * dt;
    if (b.onFloor) {
      var tilt = Math.atan2(Math.sin(b.a), Math.cos(b.a));
      b.va += -tilt * 38 * dt;
      b.va *= 1 - 4 * dt;
    }
  }
  for (i = 0; i < bodies.length; i++) {
    for (j = i + 1; j < bodies.length; j++) {
      var p = bodies[i], q = bodies[j];
      if (!p.live || !q.live) continue;
      var dx = q.x - p.x, dy = q.y - p.y, d = Math.hypot(dx, dy), min = (p.r + q.r) * 0.92;
      if (d <= 0 || d >= min) continue;
      var nx = dx / d, ny = dy / d, half = (min - d) / 2;
      p.x -= nx * half; p.y -= ny * half; q.x += nx * half; q.y += ny * half;
      var closing = (q.vx - p.vx) * nx + (q.vy - p.vy) * ny;
      if (closing < 0) {
        var jn = (-(1 + e) * closing) / 2;
        p.vx -= jn * nx; p.vy -= jn * ny; q.vx += jn * nx; q.vy += jn * ny;
        var slide = (q.vx - p.vx) * -ny + (q.vy - p.vy) * nx;
        p.va += slide * 0.002; q.va -= slide * 0.002;
      }
    }
  }
  for (i = 0; i < bodies.length; i++) {
    b = bodies[i];
    if (!b.live) continue;
    if (b.x - b.wall < 0) b.x = b.wall;
    if (b.x + b.wall > world.w) b.x = world.w - b.wall;
    if (b.y - b.r < world.floor) { b.y = world.floor + b.r; if (b.vy < 0) b.vy = 0; }
    if (b.held && hand && b.y > world.h - b.r * 0.6) b.y = world.h - b.r * 0.6;
  }
  return impacts;
}
function bodyAt(bodies, x, y) {
  for (var i = bodies.length - 1; i >= 0; i--) { var b = bodies[i]; if (b.live && Math.hypot(b.x - x, b.y - y) < b.r * 0.95) return i; }
  return -1;
}
function arcFor(i, n, w) { var c = n > 1 ? (i / (n - 1)) * 2 - 1 : 0; return { x: w * 0.14 * c, y: w * 0.2 * c * c, deg: w * 13 * c }; }
function bendFor(top, height, viewport) { var seen = (viewport - top) / Math.max(1, height); return 1 - Math.min(1, Math.max(0, seen)); }
var hash = function (n) { var s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };

/* wordmark: fits the footer width, then arcs while the footer scrolls in */
function fit() {
  word.style.fontSize = "100px";
  var natural = word.scrollWidth;
  if (natural > 0) word.style.fontSize = Math.max(40, (100 * root.clientWidth * 0.965) / natural) + "px";
}
fit();
new ResizeObserver(fit).observe(root);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit).catch(function () {});
if (!reduced) {
  var glyphs = Array.prototype.slice.call(word.querySelectorAll(".fcf-ch")), bend = 1, araf = 0;
  var aim = function () { var r = root.getBoundingClientRect(); return bendFor(r.top, r.height, window.innerHeight); };
  var paintArc = function (w) {
    glyphs.forEach(function (g, i) {
      var a = arcFor(i, glyphs.length, w);
      g.style.transform = w < 1e-3 ? "" : "translate(" + a.x.toFixed(4) + "em," + a.y.toFixed(4) + "em) rotate(" + a.deg.toFixed(2) + "deg)";
    });
  };
  var tick = function () {
    araf = 0;
    var goal = aim();
    bend += (goal - bend) * 0.14;
    if (Math.abs(goal - bend) < 1e-3) bend = goal;
    paintArc(bend);
    if (bend !== goal) araf = requestAnimationFrame(tick);
  };
  var kickArc = function () { if (!araf) araf = requestAnimationFrame(tick); };
  bend = aim(); paintArc(bend);
  addEventListener("scroll", kickArc, { passive: true });
  addEventListener("resize", kickArc);
}

/* creatures: three.js, loaded on demand through the import map */
var FUR_VERT = "attribute vec3 aRoot;attribute vec3 aNrm;attribute vec4 aHair;" +
"uniform float uTime,uWind,uJolt,uStroke;uniform vec3 uHand;" +
"varying float vS;varying float vTint;varying vec3 vN;" +
"void main(){" +
"float s=position.y;float s2=s*s;vec3 n=normalize(aNrm);" +
"vec3 ref=abs(n.y)<0.9?vec3(0.,1.,0.):vec3(1.,0.,0.);" +
"vec3 u=normalize(cross(n,ref));vec3 v=cross(n,u);" +
"float cs=cos(aHair.x),sn=sin(aHair.x);vec3 side=u*cs+v*sn;vec3 lean=v*cs-u*sn;" +
"float len=aHair.y;" +
"vec3 p=aRoot+side*position.x+n*s*len+lean*aHair.z*s2*len;" +
"float sway=0.7*sin(uTime*1.1+dot(aRoot,vec3(1.6,1.2,1.4)))+0.3*sin(uTime*1.7+dot(aRoot,vec3(-2.,2.5,.6)));" +
"vec3 wd=normalize(vec3(1.,0.,.45));wd-=n*dot(wd,n);" +
"p+=wd*(sway*uWind*s2*len*.55);" +
"p+=side*(sin(uTime*32.+aHair.w*40.)*uJolt*s2*len*.45);" +
"vec3 off=aRoot-uHand;float f=uStroke*smoothstep(.42,0.,length(off));" +
"vec3 tang=off-n*dot(off,n);tang=length(tang)>1e-4?normalize(tang):side;" +
"p+=tang*(f*s2*len*1.5)-n*(f*s*len*.35);" +
"vS=s;vTint=aHair.w;vN=normalize(mat3(modelMatrix)*n);" +
"gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}";
var FUR_FRAG = "uniform vec3 uRoot,uMid,uTip,uSun;varying float vS;varying float vTint;varying vec3 vN;" +
"void main(){" +
"vec3 c=mix(uRoot,uMid,smoothstep(0.,.45,vS));c=mix(c,uTip,smoothstep(.5,1.,vS));" +
"c*=.94+vTint*.12;" +
"float lit=max(dot(normalize(vN),normalize(uSun)),0.)*.32+.8;" +
"c*=lit*mix(.86,1.,smoothstep(0.,.5,vS));" +
"gl_FragColor=vec4(c,1.);}";
var EYES = { pills: [0.055, 0.11, 0, 0.13], short: [0.04, 0.06, 0, 0.1], dashes: [0.038, 0.13, 1.2, 0.15], big: [0.068, 0.11, 0, 0.115] };
var EYE_LINE = { cloud: 0.05, flower: 0.05, cube: 0.05, triangle: -0.16, bean: 0.02, puff: -0.03 };

function start(THREE, RoundedBoxGeometry, MeshSurfaceSampler, mergeVertices) {
  var gl;
  try { gl = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" }); } catch (err) { return; }
  gl.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  gl.setClearColor(0x000000, 0);
  gl.domElement.className = "fcf-canvas";
  stage.appendChild(gl.domElement);
  var scene = new THREE.Scene(), cam = new THREE.OrthographicCamera(0, 1, 1, 0, -2000, 2000);
  cam.position.z = 1000;
  var world = { w: 1, h: 1, floor: 10, gravity: GRAVITY, bounce: BOUNCE }, unit = 100;

  function darker(hex, k) {
    var s = { r: 0, g: 0, b: 0 };
    new THREE.Color(hex).getRGB(s, THREE.SRGBColorSpace);
    return new THREE.Color().setRGB(s.r * (1 - k), s.g * (1 - k), s.b * (1 - k), THREE.SRGBColorSpace);
  }
  function smooth(g) { g.deleteAttribute("normal"); g.deleteAttribute("uv"); var m = mergeVertices(g, 1e-3); m.computeVertexNormals(); g.dispose(); return m; }
  function puffUp(outline) {
    var g = new THREE.ExtrudeGeometry(outline, { depth: 0.3, bevelEnabled: true, bevelThickness: 0.14, bevelSize: 0.1, bevelSegments: 6, curveSegments: 24 });
    g.center(); return smooth(g);
  }
  function polar(radius, sx, sy, steps) {
    sx = sx || 1; sy = sy || 1; steps = steps || 180;
    var s = new THREE.Shape();
    for (var k = 0; k <= steps; k++) {
      var t = (k / steps) * Math.PI * 2, r = radius(t);
      var x = Math.cos(t + Math.PI / 2) * r * sx, y = Math.sin(t + Math.PI / 2) * r * sy;
      if (k) s.lineTo(x, y); else s.moveTo(x, y);
    }
    return s;
  }
  function bodyGeometry(shape) {
    if (shape === "cube") return new RoundedBoxGeometry(1, 1, 1, 8, 0.24);
    if (shape === "cloud") return puffUp(polar(function (t) { return 0.5 + 0.055 * Math.cos(5 * t + 0.6) + 0.03 * Math.cos(3 * t + 1.4); }));
    if (shape === "flower") return puffUp(polar(function (t) { return 0.47 + 0.15 * Math.cos(5 * t); }));
    var s = new THREE.Shape(), k;
    if (shape === "puff") {
      for (k = 0; k <= 200; k++) {
        var t = (k / 200) * Math.PI * 2, top = Math.min(1, Math.max(0, Math.sin(t) * 1.6)), r = 0.46 + 0.08 * Math.cos(6 * t + Math.PI) * top;
        var x = Math.cos(t) * r * 1.32, y = Math.sin(t) * r * 0.82;
        if (k) s.lineTo(x, y); else s.moveTo(x, y);
      }
      return puffUp(s);
    }
    if (shape === "bean") {
      var half = 0.64, rad = 0.36;
      s.moveTo(-half + rad, -rad);
      s.lineTo(half - rad, -rad * 0.92);
      s.absarc(half - rad, 0, rad * 0.97, -Math.PI / 2, Math.PI / 2, false);
      s.lineTo(-half + rad, rad);
      s.absarc(-half + rad, 0, rad, Math.PI / 2, (Math.PI * 3) / 2, false);
      return puffUp(s);
    }
    var pts = [[0, 0.6], [-0.66, -0.46], [0.66, -0.46]], cut = 0.16;
    pts.forEach(function (p, k2) {
      var prev = pts[(k2 + 2) % 3], next = pts[(k2 + 1) % 3];
      var lp = Math.hypot(prev[0] - p[0], prev[1] - p[1]), ln = Math.hypot(next[0] - p[0], next[1] - p[1]);
      var a = [p[0] + ((prev[0] - p[0]) * cut) / lp, p[1] + ((prev[1] - p[1]) * cut) / lp];
      var b = [p[0] + ((next[0] - p[0]) * cut) / ln, p[1] + ((next[1] - p[1]) * cut) / ln];
      if (k2) s.lineTo(a[0], a[1]); else s.moveTo(a[0], a[1]);
      s.quadraticCurveTo(p[0], p[1], b[0], b[1]);
    });
    s.closePath();
    return puffUp(s);
  }
  function halfWidth(geo, tilt, yaw) {
    var pos = geo.getAttribute("position"), v = new THREE.Vector3(), turn = new THREE.Euler(tilt, yaw, 0), m = 0;
    for (var k = 0; k < pos.count; k++) m = Math.max(m, Math.abs(v.fromBufferAttribute(pos, k).applyEuler(turn).x));
    return m;
  }
  function strandCard() {
    var segs = 5, pos = [], idx = [], k;
    for (k = 0; k <= segs; k++) { var t = k / segs, half = 0.019 * Math.pow(1 - t, 0.85) + 0.0008; pos.push(-half, t, 0, half, t, 0); }
    for (k = 0; k < segs; k++) { var a = k * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    return { pos: pos, idx: idx };
  }

  function place() {
    var row = root.querySelector(".fcf-bottom");
    if (row) {
      var top = row.offsetTop + row.offsetHeight + 6;
      stage.style.top = top + "px";
      if (haze) { haze.style.top = top + "px"; haze.style.height = Math.max(36, (word ? word.offsetTop : top + 150) - top - 4) + "px"; }
    }
    world.w = Math.max(1, stage.clientWidth); world.h = Math.max(1, stage.clientHeight);
    gl.setSize(world.w, world.h, false);
    cam.right = world.w; cam.top = world.h; cam.updateProjectionMatrix();
    unit = unitFor(world.w); world.floor = floorFor(unit);
  }
  place();

  var clock = { value: 0 }, windU = { value: reduced ? 0 : WIND }, sun = { value: new THREE.Vector3(0.4, 1, 0.8) };
  var blob = (function () {
    var c = document.createElement("canvas"); c.width = c.height = 64;
    var x = c.getContext("2d");
    if (x) {
      var g = x.createRadialGradient(32, 32, 2, 32, 32, 32);
      g.addColorStop(0, "rgba(20,20,30,0.34)"); g.addColorStop(0.5, "rgba(20,20,30,0.14)"); g.addColorStop(1, "rgba(20,20,30,0)");
      x.fillStyle = g; x.fillRect(0, 0, 64, 64);
    }
    return new THREE.CanvasTexture(c);
  })();
  var card = strandCard(), white = new THREE.MeshBasicMaterial({ color: 0xffffff });
  var strands = Math.round(10000 * Math.max(0.2, DENSITY) * (world.w < 640 ? 0.6 : 1));
  var bodies = [];
  var rigs = CRITTERS.map(function (spec, i) {
    var k = Math.max(0.5, Math.min(1.8, spec.size === undefined ? 1 : spec.size));
    var geo = bodyGeometry(spec.shape);
    geo.computeBoundingBox();
    var front = geo.boundingBox ? geo.boundingBox.max.z : 0.3, yaw = -0.22 + hash(i * 3.3) * 0.3;
    var reach = halfWidth(geo, 0.16, yaw) + 0.24;
    var core = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: new THREE.Color(spec.colors[0]) }));
    var ey = EYES[spec.eyes], er = ey[0], el = ey[1], tilt = ey[2], gap = ey[3], eyeY = EYE_LINE[spec.shape], clear = er + el / 2 + 0.09;
    var sampler = new MeshSurfaceSampler(core).build();
    var roots = new Float32Array(strands * 3), nrms = new Float32Array(strands * 3), hair = new Float32Array(strands * 4);
    var p = new THREE.Vector3(), n = new THREE.Vector3();
    for (var s = 0; s < strands; s++) {
      var seed = s * 7.13 + i * 97;
      sampler.sample(p, n); n.normalize();
      var len = 0.15 * (0.86 + hash(seed + 3.1) * 0.28);
      if (n.z > 0.4 && p.z > front - 0.2) {
        var d = Math.min(Math.hypot(p.x - gap, p.y - eyeY), Math.hypot(p.x + gap, p.y - eyeY));
        if (d < clear) len *= 0.08 + 0.92 * Math.pow(d / clear, 2);
      }
      var bendv = n.z > 0.55 ? (0.42 + hash(seed + 7.9) * 0.36) * Math.min(1, len / 0.12) : (hash(seed + 7.9) - 0.5) * 0.38;
      roots.set([p.x, p.y, p.z], s * 3); nrms.set([n.x, n.y, n.z], s * 3);
      hair.set([hash(seed + 5.3) * Math.PI * 2, len, bendv, hash(seed + 9.2)], s * 4);
    }
    var fg = new THREE.InstancedBufferGeometry();
    fg.setAttribute("position", new THREE.Float32BufferAttribute(card.pos, 3));
    fg.setIndex(card.idx);
    fg.setAttribute("aRoot", new THREE.InstancedBufferAttribute(roots, 3));
    fg.setAttribute("aNrm", new THREE.InstancedBufferAttribute(nrms, 3));
    fg.setAttribute("aHair", new THREE.InstancedBufferAttribute(hair, 4));
    fg.instanceCount = strands;
    var u = { uJolt: { value: 0 }, uStroke: { value: 0 }, uHand: { value: new THREE.Vector3(9, 9, 9) } };
    var disp = function (c) { return c.clone().convertLinearToSRGB(); };
    var uni = { uTime: clock, uWind: windU, uSun: sun, uRoot: { value: disp(darker(spec.colors[0], 0.2)) }, uMid: { value: disp(new THREE.Color(spec.colors[0])) }, uTip: { value: disp(new THREE.Color(spec.colors[1])) }, uJolt: u.uJolt, uStroke: u.uStroke, uHand: u.uHand };
    var fur = new THREE.Mesh(fg, new THREE.ShaderMaterial({ vertexShader: FUR_VERT, fragmentShader: FUR_FRAG, side: THREE.DoubleSide, uniforms: uni }));
    fur.frustumCulled = false;
    var face = new THREE.Group();
    face.position.set(0, eyeY, front + 0.13);
    var pill = new THREE.CapsuleGeometry(er, el, 6, 16), eyes = [], pupils = [];
    [-1, 1].forEach(function (side) {
      var lid = new THREE.Group();
      lid.position.x = side * gap;
      var m = new THREE.Mesh(pill, white);
      m.rotation.z = -tilt; m.scale.z = 0.45;
      lid.add(m); face.add(lid); eyes.push(lid); pupils.push(m);
    });
    var inner = new THREE.Group();
    inner.add(core, fur, face);
    inner.rotation.set(0.16, yaw, 0);
    var outer = new THREE.Group();
    outer.add(inner); outer.scale.setScalar(unit * k); scene.add(outer);
    var shadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: blob, transparent: true, depthWrite: false }));
    shadow.position.z = -900; shadow.visible = false; scene.add(shadow);
    bodies.push(makeBody(unit * 0.68 * k, unit * reach * k));
    return { shape: spec.shape, reach: reach, outer: outer, inner: inner, eyes: eyes, pupils: pupils, shadow: shadow, u: u, k: k, yaw: yaw, spin: 0, spinV: 0, sq: 0, sqV: 0, jx: 0, jy: 0, jvx: 0, jvy: 0, blinkAt: 1 + hash(i * 5.5) * 4, blink: -1, lastThud: 0 };
  });

  /* sound: tiny synthesised blips, only after a gesture */
  var audio = null;
  function wake() {
    if (!SOUND) return;
    try { if (!audio) audio = new (window.AudioContext || window.webkitAudioContext)(); if (audio.state === "suspended") audio.resume(); } catch (err) { audio = null; }
  }
  function blip(from, to, dur, gain, type) {
    if (!audio || audio.state !== "running" || !SOUND) return;
    var t = audio.currentTime, o = audio.createOscillator(), g = audio.createGain(), peak = Math.max(0, Math.min(1, VOLUME)) * gain;
    o.type = type || "sine";
    o.frequency.setValueAtTime(from, t);
    o.frequency.exponentialRampToValueAtTime(Math.max(30, to), t + dur);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(peak, t + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(audio.destination);
    o.start(t); o.stop(t + dur + 0.02);
  }
  var timers = [];
  function later(ms, fn) { timers.push(window.setTimeout(fn, ms)); }

  /* dropping in */
  var leaving = bodies.map(function () { return 0; }), held = -1, dropped = false;
  function dropIn(i) {
    leaving[i] = 0;
    dropStart(bodies[i], i, bodies.length, world, Math.random);
    var r = rigs[i];
    r.spin = (Math.random() - 0.5) * 2;
    r.spinV = (Math.random() < 0.5 ? -1 : 1) * (3 + Math.random() * 4);
    r.sq = r.sqV = 0;
  }
  function drop() {
    timers.forEach(clearTimeout); timers.length = 0;
    if (reduced) { restInRow(bodies, world); return; }
    var startT = performance.now();
    bodies.forEach(function (b, i) {
      var at = i * 260 + Math.random() * 120;
      if (!b.live) { b.y = -9999; later(at, function () { dropIn(i); }); return; }
      later(i * 70, function () {
        if (held === i) release();
        b.onFloor = false;
        b.vy = 1.25 * Math.sqrt(2 * world.gravity * Math.max(0, world.h - b.y + b.r * 1.5 + 60));
        b.vx += (Math.random() - 0.5) * 120;
        b.va += (Math.random() - 0.5) * 6;
        leaving[i] = startT + 520 + at;
      });
    });
  }
  var again = root.querySelector(".fcf-again");
  if (again) again.addEventListener("click", drop);
  function watch() {
    if (dropped) return;
    var r = root.getBoundingClientRect();
    if (bendFor(r.top, r.height, window.innerHeight) <= 0.015 || r.bottom <= window.innerHeight + 2) { dropped = true; later(!reduced ? 260 : 0, drop); }
  }
  addEventListener("scroll", watch, { passive: true });
  addEventListener("resize", watch);

  /* pointer: gaze, brushing, grab, throw, click-to-hop */
  var hx = -1e4, hy = -1e4, hvx = 0, hvy = 0, lastMove = 0, grabAt = { x: 0, y: 0 }, moved = false;
  function local(e) { var r = stage.getBoundingClientRect(); return { x: e.clientX - r.left, y: r.bottom - e.clientY }; }
  function track(e) {
    var p = local(e), now = performance.now(), dt = Math.max(8, now - lastMove) / 1000;
    hvx = (p.x - hx) / dt; hvy = (p.y - hy) / dt; hx = p.x; hy = p.y; lastMove = now;
    if (Math.abs(hvx) > 4000 || Math.abs(hvy) > 4000) hvx = hvy = 0;
    if (held < 0) root.classList.toggle("fcf-over", bodyAt(bodies, p.x, p.y) >= 0);
  }
  function leave() { hx = hy = -1e4; root.classList.remove("fcf-over"); }
  function dragMove(e) { track(e); if (Math.hypot(hx - grabAt.x, hy - grabAt.y) > 6) moved = true; }
  function release() {
    removeEventListener("pointermove", dragMove); removeEventListener("pointerup", release); removeEventListener("pointercancel", release);
    root.classList.remove("fcf-grab");
    var i = held; held = -1;
    if (i < 0) return;
    var b = bodies[i];
    b.held = false;
    if (!moved) {
      b.vy = 950 + Math.random() * 250; b.vx += (Math.random() - 0.5) * 300; b.va += (Math.random() - 0.5) * 9; b.onFloor = false;
      blip(220, 520, 0.12, 0.35);
      later(90, function () { blip(520, 240, 0.18, 0.25); });
    } else {
      var v = Math.hypot(b.vx, b.vy), cap = 2600;
      if (v > cap) { b.vx *= cap / v; b.vy *= cap / v; }
    }
  }
  function grab(e) {
    if (reduced || e.target.closest("a,button,input")) return;
    var p = local(e), i = bodyAt(bodies, p.x, p.y);
    if (i < 0) return;
    e.preventDefault(); wake(); blip(520, 980, 0.07, 0.35);
    held = i; bodies[i].held = true; grabAt = p; moved = false; hx = p.x; hy = p.y;
    root.classList.add("fcf-grab");
    addEventListener("pointermove", dragMove); addEventListener("pointerup", release); addEventListener("pointercancel", release);
  }
  root.addEventListener("pointermove", track);
  root.addEventListener("pointerleave", leave);
  root.addEventListener("pointerdown", grab);

  var ro = new ResizeObserver(function () {
    place();
    bodies.forEach(function (b, i) {
      b.r = unit * 0.68 * rigs[i].k; b.wall = unit * rigs[i].reach * rigs[i].k;
      b.x = Math.min(world.w - b.wall, Math.max(b.wall, b.x));
      if (b.live && b.y - b.r < world.floor) b.y = world.floor + b.r;
    });
    if (reduced && dropped) restInRow(bodies, world);
  });
  ro.observe(stage); ro.observe(root);

  /* frame loop, paused off screen */
  var onScreen = false, raf = 0, last = performance.now(), time = 0, nextHop = 4, handLocal = new THREE.Vector3();
  function frame(now) {
    raf = 0;
    if (!onScreen) return;
    var dt = Math.min(0.033, (now - last) / 1000);
    last = now; time += dt; clock.value = time;
    if (!reduced) {
      var hand = held >= 0 ? { x: hx, y: hy } : null;
      for (var s = 0; s < 3; s++) {
        var hits = stepBodies(bodies, world, dt / 3, hand);
        hits.forEach(function (h, i) {
          if (h <= 0) return;
          var r = rigs[i];
          r.u.uJolt.value = h; r.sqV -= h * 9; r.jvy -= h * 2.4;
          var t = performance.now();
          if (h >= 0.12 && t - r.lastThud > 140) { r.lastThud = t; blip(150 - r.k * 30, 60, 0.16, 0.5 * h, "triangle"); }
        });
      }
      leaving.forEach(function (at, i) {
        var b = bodies[i];
        if (at <= 0 || !b.live) return;
        if (b.y - b.r * 1.5 > world.h || now > at + 400) {
          b.live = false; b.y = -9999; b.vx = b.vy = 0; leaving[i] = -1;
          later(Math.max(0, at - now), function () { dropIn(i); });
        }
      });
    }
    var aware = hx > -1000;
    bodies.forEach(function (b, i) {
      var r = rigs[i];
      r.shadow.visible = b.live; r.outer.visible = b.live;
      if (!b.live) return;
      if (!reduced) {
        if (held < 0 && aware && Math.hypot(b.x - hx, b.y - hy) < b.r * 1.05) {
          b.vx += hvx * 0.06;
          if (hvy > 0) b.vy += hvy * 0.05;
          b.va -= hvx * 0.0006;
          r.inner.worldToLocal(handLocal.set(hx, hy, unit * 0.5));
          r.u.uHand.value.copy(handLocal);
          r.u.uStroke.value = Math.min(1, r.u.uStroke.value + 0.2);
        }
        r.u.uStroke.value *= Math.pow(0.05, dt);
        r.u.uJolt.value *= Math.pow(0.03, dt);
        if (r.blink < 0 && time > r.blinkAt) r.blink = 0;
        var lid = 1;
        if (r.blink >= 0) {
          r.blink += dt / 0.15;
          lid = 1 - Math.sin(Math.min(1, r.blink) * Math.PI) * 0.9;
          if (r.blink >= 1) { r.blink = -1; r.blinkAt = time + 2 + Math.random() * 4; }
        }
        r.eyes.forEach(function (g) { g.scale.y = lid; });
        var dx = aware ? hx - b.x : 0, dy = aware ? hy - b.y : 0, dist = Math.hypot(dx, dy) || 1, rch = aware ? Math.min(1, dist / 220) : 0;
        var ca = Math.cos(-b.a), sa = Math.sin(-b.a);
        var gx = ((dx / dist) * ca - (dy / dist) * sa) * rch, gy = ((dx / dist) * sa + (dy / dist) * ca) * rch;
        r.jvx += (-r.jx * 140 - r.jvx * 7 - b.vx * 0.0009) * dt;
        r.jvy += (-r.jy * 140 - r.jvy * 7 - b.vy * 0.0009) * dt;
        r.jx += r.jvx * dt; r.jy += r.jvy * dt;
        var range = 0.035;
        r.pupils.forEach(function (m) {
          var tx = gx * range + r.jx * range * 3, ty = gy * range + r.jy * range * 3, l = Math.hypot(tx, ty);
          if (l > range) { tx *= range / l; ty *= range / l; }
          m.position.x += (tx - m.position.x) * Math.min(1, dt * 14);
          m.position.y += (ty - m.position.y) * Math.min(1, dt * 14);
        });
        r.inner.rotation.x = 0.16 - gy * 0.12;
        r.inner.rotation.y = r.yaw + r.spin + gx * 0.18;
        if (b.onFloor || b.y - b.r < world.floor + 3) r.spinV += (-r.spin * 60 - r.spinV * 9) * dt;
        else r.spinV *= 1 - 0.3 * dt;
        r.spin += r.spinV * dt;
        var target = b.onFloor ? 0 : Math.min(0.14, Math.abs(b.vy) / 6000);
        r.sqV += ((target - r.sq) * 220 - r.sqV * 11) * dt;
        r.sq += r.sqV * dt;
      }
      var breath = reduced ? 1 : 1 + Math.sin(time * 2 + b.r) * 0.015;
      var sy = breath * (1 + r.sq), sx = (2 - breath) * (1 - r.sq * 0.55);
      r.outer.position.set(b.x, b.y - (1 - sy) * b.r * 0.55, 0);
      r.outer.rotation.z = b.a;
      r.outer.scale.set(unit * r.k * sx, unit * r.k * sy, unit * r.k);
      var lift = Math.max(0, b.y - b.r - world.floor);
      r.shadow.position.set(b.x, world.floor - 1, -900);
      r.shadow.scale.set(b.r * 2.1 * (1 - Math.min(0.55, lift / 500)), b.r * 0.42, 1);
      r.shadow.material.opacity = 0.9 - Math.min(0.75, lift / 420);
    });
    hvx *= 0.6; hvy *= 0.6;
    if (IDLE_HOPS && !reduced && time > nextHop) {
      nextHop = time + 3.5 + Math.random() * 3;
      var resting = bodies.filter(function (b) { return b.live && b.onFloor && !b.held; });
      var pick = resting[Math.floor(Math.random() * resting.length)];
      if (pick) { pick.vy = 650 + Math.random() * 300; pick.va += (Math.random() - 0.5) * 5; }
    }
    gl.render(scene, cam);
    raf = requestAnimationFrame(frame);
  }
  new IntersectionObserver(function (ents) {
    onScreen = ents[0].isIntersecting;
    if (onScreen) watch();
    if (onScreen && !raf) { last = performance.now(); raf = requestAnimationFrame(frame); }
  }, { threshold: [0, 0.2, 0.4] }).observe(root);
  stage.classList.add("fcf-ready");
}
Promise.all([
  import("three"),
  import("three/examples/jsm/geometries/RoundedBoxGeometry.js"),
  import("three/examples/jsm/math/MeshSurfaceSampler.js"),
  import("three/examples/jsm/utils/BufferGeometryUtils.js")
]).then(function (m) { start(m[0], m[1].RoundedBoxGeometry, m[2].MeshSurfaceSampler, m[3].mergeVertices); }).catch(function (e) { console.warn("Footer creatures unavailable", e); });
})();
(function(){
document.documentElement.classList.add("js");
var els=document.querySelectorAll(".rv");
if(!("IntersectionObserver" in window)){els.forEach(function(e){e.classList.add("in")});return}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.15});
els.forEach(function(e){io.observe(e)});
})();