module.exports=[71308,a=>{"use strict";var b=a.i(17048),c=a.i(53277);let d=`
attribute vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`,e=`
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
`;function f(a){let b=a.replace("#",""),c=parseInt(3===b.length?b.split("").map(a=>a+a).join(""):b,16);return[(c>>16&255)/255,(c>>8&255)/255,(255&c)/255]}a.s(["default",0,function({colors:a={},speed:g=.35}){let h=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let b=h.current;if(!b)return;let c=b.getContext("webgl2")||b.getContext("webgl");if(!c)return;let i=f(a.primary??"#6366f1"),j=f(a.secondary??"#a855f7"),k=f(a.accent??"#22d3ee"),l=f(a.background??"#0f172a"),m=(a,b)=>{let d=c.createShader(a);return c.shaderSource(d,b),c.compileShader(d),d},n=c.createProgram();if(c.attachShader(n,m(c.VERTEX_SHADER,d)),c.attachShader(n,m(c.FRAGMENT_SHADER,e)),c.linkProgram(n),!c.getProgramParameter(n,c.LINK_STATUS))return;c.useProgram(n);let o=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,o),c.bufferData(c.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),c.STATIC_DRAW);let p=c.getAttribLocation(n,"aPosition");c.enableVertexAttribArray(p),c.vertexAttribPointer(p,2,c.FLOAT,!1,0,0);let q=c.getUniformLocation(n,"uResolution"),r=c.getUniformLocation(n,"uTime"),s=c.getUniformLocation(n,"uPrimary"),t=c.getUniformLocation(n,"uSecondary"),u=c.getUniformLocation(n,"uAccent"),v=c.getUniformLocation(n,"uBackground"),w=0,x=!0,y=performance.now(),z=()=>{let a=b.getBoundingClientRect(),d=Math.min(window.devicePixelRatio||1,2);b.width=Math.max(1,Math.round(a.width*d)),b.height=Math.max(1,Math.round(a.height*d)),c.viewport(0,0,b.width,b.height)},A=a=>{x&&(c.uniform2f(q,b.width,b.height),c.uniform1f(r,(a-y)/1e3*g),c.uniform3f(s,i[0],i[1],i[2]),c.uniform3f(t,j[0],j[1],j[2]),c.uniform3f(u,k[0],k[1],k[2]),c.uniform3f(v,l[0],l[1],l[2]),c.drawArrays(c.TRIANGLE_STRIP,0,4))},B=a=>{A(a),x&&(w=requestAnimationFrame(B))};z(),window.addEventListener("resize",z);let C=!1;try{C=window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{}return C?A(performance.now()):w=requestAnimationFrame(B),()=>{x=!1,cancelAnimationFrame(w),window.removeEventListener("resize",z);try{c.getExtension("WEBGL_lose_context")?.loseContext()}catch{}}},[a.primary,a.secondary,a.accent,a.background,g]),(0,b.jsx)("canvas",{ref:h,className:"h-full w-full","aria-hidden":"true"})}])}];

//# sourceMappingURL=11ec_01-ai-saas_src_components_visual_webgl-gradient-provider_tsx_0apzx_b._.js.map