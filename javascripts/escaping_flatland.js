$(document).ready(function(){function h(t){t.target===e.domElement&&(r.x=t.clientX/window.innerWidth*2-1,r.y=-(t.clientY/window.innerHeight)*2+1,v(),d())}function p(t){t.target===e.domElement&&(t.preventDefault(),r.x=t.touches[0].pageX/window.innerWidth*2-1,r.y=-(t.touches[0].pageY/window.innerHeight)*2+1,v(),d())}function d(){var e=Math.random(.5,.8),n=new THREE.CubeGeometry(e*20,e*20,0),r=new THREE.MeshNormalMaterial({shading:!0}),i=new THREE.Mesh(n,r);i.position.set(Math.round(u.ray.direction.x*1e3/19)*19,Math.round(u.ray.direction.y*1e3/19)*19,0),i.custom_rotation_x=Math.random()/50,i.custom_rotation_y=Math.random()/50,i.custom_velocity=Math.random()*l,t.add(i),f.push(i),setTimeout(function(){a.push(i)},5e3),setTimeout(function(){t.remove(i)},1e4)}function v(){o.x=r.x,o.y=r.y,s.unprojectVector(o,n),u=new THREE.Raycaster(n.position,o.sub(n.position).normalize())}function m(){requestAnimationFrame(m),c.num+=c.num*Math.sin(1);for(i=a.length-1;i>0;i--){var r=a[i];a[i].rotation.x+=a[i].custom_rotation_x,a[i].rotation.y+=a[i].custom_rotation_y,a[i].position.z+=a[i].custom_velocity}e.render(t,n)}var e=new THREE.CanvasRenderer,t=new THREE.Scene,n=new THREE.PerspectiveCamera(45,$(window).width()/$(window).height(),.1,2e3),r={x:0,y:0},s=new THREE.Projector,o=new THREE.Vector3(r.x,r.y,0),u=new THREE.Raycaster(n.position,o.sub(n.position).normalize()),a=[],f=[],l=5,c={};c.num=1,c.val=c.num*Math.sin(),n.position.set(0,0,800),n.lookAt(t.position),t.add(n),e.setSize($(window).width(),$(window).height()),$(e.domElement).addClass("escapingflatland_canvas"),$("body").append(e.domElement),"ontouchstart"in window?(document.addEventListener("touchmove",p,!1),l=15):document.addEventListener("mousemove",h,!1),m()});