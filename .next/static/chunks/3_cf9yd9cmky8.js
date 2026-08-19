(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,75879,e=>{"use strict";var t=e.i(55974),o=e.i(77241);let r=`
attribute vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`,i=`
precision highp float;
uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uPrimary;
uniform vec3 uSecondary;
uniform vec3 uAccent;
uniform vec3 uBackground;

vec2 drift(vec2 base, float t, float a, float b) {
  return vec2(base.x + 0.10 * sin(t * a), base.y + 0.10 * cos(t * b));
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float aspect = uResolution.x / uResolution.y;
  float t = uTime * 0.05;
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);

  vec2 c1 = drift(vec2(-0.42, -0.30), t, 0.80, 0.90);
  vec2 c2 = drift(vec2(0.46, 0.34), t, 0.70, 0.60);
  vec2 c3 = drift(vec2(0.05, -0.05), t, 0.55, 0.72);

  float d1 = 1.0 - smoothstep(0.0, 1.10, length(p - c1));
  float d2 = 1.0 - smoothstep(0.0, 1.25, length(p - c2));
  float d3 = 1.0 - smoothstep(0.0, 0.95, length(p - c3));

  vec3 col = uBackground;
  col = mix(col, uPrimary, d1 * 0.85);
  col = mix(col, uSecondary, d2 * 0.70);
  col = mix(col, uAccent, d3 * 0.50);
  col += 0.015 * vec3(
    sin(p.y * 3.0 + t * 4.0),
    cos(p.x * 3.0 - t * 4.0),
    sin((p.x + p.y) * 3.0 + t * 2.0)
  );
  gl_FragColor = vec4(col, 1.0);
}
`;function n(e){let t=e.replace("#",""),o=parseInt(3===t.length?t.split("").map(e=>e+e).join(""):t,16);return[(o>>16&255)/255,(o>>8&255)/255,(255&o)/255]}e.s(["default",0,function({colors:e={},speed:a=.35}){let c=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let t=c.current;if(!t)return;let o=t.getContext("webgl2")||t.getContext("webgl");if(!o)return;let u=n(e.primary??"#6366f1"),l=n(e.secondary??"#a855f7"),f=n(e.accent??"#22d3ee"),m=n(e.background??"#0f172a"),s=(e,t)=>{let r=o.createShader(e);return o.shaderSource(r,t),o.compileShader(r),r},d=o.createProgram();if(o.attachShader(d,s(o.VERTEX_SHADER,r)),o.attachShader(d,s(o.FRAGMENT_SHADER,i)),o.linkProgram(d),!o.getProgramParameter(d,o.LINK_STATUS))return;o.useProgram(d);let h=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,h),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),o.STATIC_DRAW);let g=o.getAttribLocation(d,"aPosition");o.enableVertexAttribArray(g),o.vertexAttribPointer(g,2,o.FLOAT,!1,0,0);let v=o.getUniformLocation(d,"uResolution"),p=o.getUniformLocation(d,"uTime"),A=o.getUniformLocation(d,"uPrimary"),R=o.getUniformLocation(d,"uSecondary"),y=o.getUniformLocation(d,"uAccent"),w=o.getUniformLocation(d,"uBackground"),x=0,b=!0,P=performance.now(),T=()=>{let e=t.getBoundingClientRect(),r=Math.min(window.devicePixelRatio||1,2);t.width=Math.max(1,Math.round(e.width*r)),t.height=Math.max(1,Math.round(e.height*r)),o.viewport(0,0,t.width,t.height)},S=e=>{b&&(o.uniform2f(v,t.width,t.height),o.uniform1f(p,(e-P)/1e3*a),o.uniform3f(A,u[0],u[1],u[2]),o.uniform3f(R,l[0],l[1],l[2]),o.uniform3f(y,f[0],f[1],f[2]),o.uniform3f(w,m[0],m[1],m[2]),o.drawArrays(o.TRIANGLE_STRIP,0,4))},E=e=>{S(e),b&&(x=requestAnimationFrame(E))};T(),window.addEventListener("resize",T);let L=!1;try{L=window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{}return L?S(performance.now()):x=requestAnimationFrame(E),()=>{b=!1,cancelAnimationFrame(x),window.removeEventListener("resize",T);try{o.getExtension("WEBGL_lose_context")?.loseContext()}catch{}}},[e.primary,e.secondary,e.accent,e.background,a]),(0,t.jsx)("canvas",{ref:c,className:"h-full w-full","aria-hidden":"true"})}])}]);