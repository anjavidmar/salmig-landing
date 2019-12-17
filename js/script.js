var a = 'hello world'
console.log(a);

var h = window.innerHeight;
var w = window.innerWidth;

var site = document.querySelector('.site');

var site_h = site.offsetHeight;
var site_w = site.offsetWidth;

var h1 = document.getElementById('h1');

console.log('screen height = ' + h, 'screen width = ' + w);
console.log('site height = ' + site_h, 'site width = ' + site_w);

h1.innerHTML = a;
