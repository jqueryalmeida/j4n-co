$(document).ready(function(){function h(e){u=e.getContext("2d");var r=document.getElementById("my_face_avatar");u.drawImage(r,0,0,t,n),p(u)}function p(e){var r=e.getImageData(0,0,t,n),i=r.data,o=0;for(y=0;y<n;y++){var u=[];for(x=0;x<t;x++){var f=Math.floor(Math.random()*255),l=(y*t+x)*4,h=i[l],p=i[l+1],d=i[l+2],v=c,m="rgb("+Math.floor(Math.random()*100).toString()+","+Math.floor(Math.random()*100).toString()+","+Math.floor(Math.random()*100).toString()+")";h>0&&p>0&&d>0&&(v=m),h==0&&p==0&&d==0&&(v=c);var g=!0;v==c&&(g=!1),u.push([[x],g]),e.fillStyle=v,g?e.fillRect(x,y,a,a):e.clearRect(x,y,a,a),x+=a-1}s.push(u),y+=a-1}}function d(e){function s(){f=window.setTimeout(function(){for(y=0;y<t.length;y++)for(x=0;x<t[0].length;x++){var e=t[y][x][1],o="rgb("+Math.floor(Math.random()*100).toString()+","+Math.floor(Math.random()*100).toString()+","+Math.floor(Math.random()*100).toString()+")",f=0;t[y-1]&&t[y-1][x-1]&&t[y-1][x-1][1]&&f++,t[y-1]&&t[y-1][x]&&t[y-1][x][1]&&f++,t[y-1]&&t[y-1][x+1]&&t[y-1][x+1][1]&&f++,t[y]&&t[y][x-1]&&t[y][x-1][1]&&f++,t[y]&&t[y][x+1]&&t[y][x+1][1]&&f++,t[y+1]&&t[y+1][x-1]&&t[y+1][x-1][1]&&f++,t[y+1]&&t[y+1][x]&&t[y+1][x][1]&&f++,t[y+1]&&t[y+1][x+1]&&t[y+1][x+1][1]&&f++;var l=f;n[y][x][1]=!1;if(e==1){if(l===r||l===i)n[y][x][1]=!0}else l===i&&(n[y][x][1]=!0);n[y][x][1]==1?(u.fillStyle=o,u.fillRect(x*a,y*a,a,a)):u.clearRect(x*a,y*a,a,a)}t=n,s()},100)}var t=e,n=e,r=2,i=3;l=!0,s()}var e=document.getElementById("my_face"),t=$(e).width(),n=$(e).height();e.width=t,e.height=n;var r=[],i=[],s=[],o=[],u,a=1,f,l=!1,c="rgba(0,0,0,0)";e&&e.getContext&&h(e),e.addEventListener("mouseover",function(){l||d(s)}),e.addEventListener("mouseout",function(){if(l=!0)l=!1;window.setTimeout(function(){l=!1,window.clearTimeout(f)},2e3)})});