(function(){var t,n,e,r,i,o,l,u,B,c,A,F,h,a;i=document.getElementById("jupiter"),a=window.innerWidth,o=window.innerHeight,o>a?o=a:a=o,i.width=a,i.height=o,i.style.width=a,i.style.height=o,l=i.getContext("2d"),l.lineWidth=.7,n=["#4FA8D8","#2F629E","#E77D2E","#CF5B52","#762643","#412F21","#7F9752","#F9700F","#FF5601","#913700","#4C5076","#53ADD0","#8BBB33","#405932","#D0BB5E","#ACB3A1","#4C5076","#4AAADC","#2E629C","#C95E52","#D0BB5E","#DA5B66","#AB7D4C","#8BBB31","#5C9200","#FFCD1E","#FF5601","#78B8DB","#2F639C","#ABB4A3","#7FA14B","#4BAADA","#695F51","#6E2A43","#FFC700","#C49A9A"],c=function(t){return Math.floor(Math.random()*t)},B=function(){return n[c(n.length)]},t=function(t){var n,e,r,i;return n=t.a,e=t.b,r=t.c,i=t.color,l.fillStyle=i,l.beginPath(),l.moveTo(n.x,n.y),l.lineTo(e.x,e.y),l.lineTo(r.x,r.y),l.lineTo(n.x,n.y)},F=function(n){return t(n),l.stroke()},A=function(n){return t(n),l.closePath(),l.fill()},r=function(t){var n,e,r;return A(t),n=t.a,e=t.b,r=t.c,F({a:n,b:e,c:r,color:"#000"})},h=o/36,u=a/2,e=function(t){var n,e,i,l;for(n={x:null,y:o/2},e={x:u,y:0},i={x:u,y:h},n.x="left"===t?0:a,l=[];i.y<=o;)r({a:n,b:e,c:i,color:B()}),e.y+=h,l.push(i.y+=h);return l},setInterval(function(){return e("left"),e("right")},200)}).call(this);