(function(){
var cases=['pawtective','wildora'];
document.querySelectorAll('.thumb').forEach(function(el){
 var img=document.querySelector('#'+el.dataset.from+' img');
 if(img) el.style.backgroundImage='url("'+img.src+'")';
});
var nav=document.querySelector('nav'), links=nav.querySelectorAll('.links a');
function mark(h){
 var key=cases.indexOf(h)>-1?'projects':h;
 links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+key)});
}
function route(){
 var h=location.hash.slice(1), isCase=cases.indexOf(h)>-1;
 document.getElementById('home').hidden=isCase;
 cases.forEach(function(c){document.getElementById(c).hidden=(c!==h)});
 mark(h);
 if(isCase){window.scrollTo(0,0);return}
 var el=h&&document.getElementById(h);
 if(el) el.scrollIntoView(); else window.scrollTo(0,0);
}
window.addEventListener('hashchange',route);
window.addEventListener('scroll',function(){nav.classList.toggle('scrolled',window.scrollY>30)},{passive:true});
route();
})();
