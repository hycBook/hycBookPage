function postAddToc(){let postContent=document.querySelector('#post>#article-container.post-content')
let cardToc=document.getElementById('card-toc')
if(postContent&&cardToc){let tocNumber=cardToc.getElementsByClassName('toc-number')
let tocLink=cardToc.getElementsByClassName('toc-link')
for(let i=0;i<tocLink.length;i++){document.getElementById(decodeURIComponent(tocLink[i].attributes.href.value).slice(1)).dataset.toc=tocNumber[i].innerText}}}
postAddToc()
function switchNightMode(){document.querySelector('body').insertAdjacentHTML('beforeend','<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>'),setTimeout(function(){document.querySelector('body').classList.contains('DarkMode')?(document.querySelector('body').classList.remove('DarkMode'),localStorage.setItem('isDark','0'),document.getElementById('modeicon').setAttribute('xlink:href','#icon-moon')):(document.querySelector('body').classList.add('DarkMode'),localStorage.setItem('isDark','1'),document.getElementById('modeicon').setAttribute('xlink:href','#icon-sun')),setTimeout(function(){document.getElementsByClassName('Cuteen_DarkSky')[0].style.transition='opacity 3s';document.getElementsByClassName('Cuteen_DarkSky')[0].style.opacity='0';setTimeout(function(){document.getElementsByClassName('Cuteen_DarkSky')[0].remove();},1e3);},2e3)})
const nowMode=document.documentElement.getAttribute('data-theme')==='dark'?'dark':'light'
if(nowMode==='light'){activateDarkMode()
saveToLocal.set('theme','dark',2)
GLOBAL_CONFIG.Snackbar!==undefined&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
document.getElementById('modeicon').setAttribute('xlink:href','#icon-sun')}else{activateLightMode()
saveToLocal.set('theme','light',2)
document.querySelector('body').classList.add('DarkMode'),document.getElementById('modeicon').setAttribute('xlink:href','#icon-moon')}
typeof utterancesTheme==='function'&&utterancesTheme()
typeof FB==='object'&&window.loadFBComment()
window.DISQUS&&document.getElementById('disqus_thread').children.length&&setTimeout(()=>window.disqusReset(),200)}
document.addEventListener('keydown',function(event){if(event.ctrlKey&&event.key==='k'){event.preventDefault();var divElement=document.getElementById('search-button');var linkElement=divElement.querySelector('a');linkElement.click();}});document.addEventListener('keydown',function(event){if(event.ctrlKey&&event.key==='m'){event.preventDefault();window.location.href='/categories/common/';}});document.addEventListener('keydown',function(event){if(event.ctrlKey&&event.key==='b'){event.preventDefault();window.location.href='/tags';}});document.addEventListener("copy",(function(e){toastr.options={closeButton:false,debug:false,progressBar:true,positionClass:"toast-top-left",onclick:null,showDuration:"300",hideDuration:"300",timeOut:"2500",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};toastr.success("如果转载，请保留原文链接哦(●ˇ∀ˇ●)","复制成功！！！");}));function tagsBarActive(){var urlinfo=window.location.pathname;urlinfo=decodeURIComponent(urlinfo)
if(urlinfo=='/'){if(document.querySelector('#tags-bar')){document.getElementById('首页').classList.add("select")}}else{var pattern=/\/tags\/.*?\//;var patbool=pattern.test(urlinfo);if(patbool){var valuegroup=urlinfo.split("/");var nowTag=valuegroup[2];if(document.querySelector('#category-bar')){document.getElementById(nowTag).classList.add("select");}}}}
tagsBarActive()
topCategoriesBarScroll()
function categoriesBarActive(){var urlinfo=window.location.pathname;urlinfo=decodeURIComponent(urlinfo)
console.log(urlinfo);if(urlinfo=='/'){if(document.querySelector('#category-bar')){document.getElementById('site-subtitle').classList.add("select")}}else{var pattern=/\/categories\/.*?\//;var patbool=pattern.test(urlinfo);console.log(patbool);if(patbool){var valuegroup=urlinfo.split("/");console.log(valuegroup[2]);var nowCategorie=valuegroup[2];if(document.querySelector('#category-bar')){document.getElementById(nowCategorie).classList.add("select");}}}}
function topCategoriesBarScroll(){if(document.getElementById("category-bar-items")){let xscroll=document.getElementById("category-bar-items");xscroll.addEventListener("mousewheel",function(e){let v=-e.wheelDelta/2;xscroll.scrollLeft+=v;e.preventDefault();},false);}}
categoriesBarActive()