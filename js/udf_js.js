// Butterfly 文章增加段落序号
// https://blog.eurkon.com/post/70e521c2.html
function postAddToc () {
  let postContent = document.querySelector('#post>#article-container.post-content')
  let cardToc = document.getElementById('card-toc')
  if (postContent && cardToc) {
    let tocNumber = cardToc.getElementsByClassName('toc-number')
    let tocLink = cardToc.getElementsByClassName('toc-link')
    for (let i = 0; i < tocLink.length; i++) {
      document.getElementById(decodeURIComponent(tocLink[i].attributes.href.value).slice(1)).dataset.toc = tocNumber[i].innerText
    }
  }
}
postAddToc ()


/* 自定义弹窗  https://moonshuo.cn/posts/25274.html#自带的弹窗 */
document.addEventListener("copy", (function (e) {
    toastr.options = {
        /*关闭按钮是否开启 */  
        closeButton: false,  
        debug: false,  
        /*是否出现进度条 */
        progressBar: true, 
        /*出现的位置，top与left可以进行更改  */ 
        positionClass: "toast-top-left",  
        /*点击触发的函数，懂js的同学可以自行设置 */
        onclick: null,  
        /**持续的实践，动画实践等等 */
        showDuration: "300",  
        hideDuration: "300",  
        timeOut: "2500",  
        extendedTimeOut: "1000",
        /**出现的方式 */  
        showEasing: "swing",  
        hideEasing: "linear",  
        showMethod: "fadeIn",  
        hideMethod: "fadeOut"  
    };
    /**点击复制之后出现的文本，后面是标题 */
    toastr.success("如果转载，请保留原文链接哦(●ˇ∀ˇ●)","复制成功！！！");  
}));


// 作者: Justlovesmile
// 链接: https://blog.justlovesmile.top/posts/2bfb1caa.html?time=1694779141418
// 来源: Justlovesmile's BLOG
// Hexo博客 | 动态分类标签条，自动获取全站分类与标签进行展示
// 标签条
function tagsBarActive(){
  var urlinfo = window.location.pathname;
  urlinfo = decodeURIComponent(urlinfo)
  //console.log(urlinfo);
  //判断是否是首页
  if (urlinfo == '/'){
    if (document.querySelector('#tags-bar')){
      document.getElementById('首页').classList.add("select")
    }
  }else {
    // 验证是否是分类链接
    var pattern = /\/tags\/.*?\//;
    var patbool = pattern.test(urlinfo);
    //console.log(patbool);
    // 获取当前的标签
    if (patbool) {
      var valuegroup = urlinfo.split("/");
      //console.log(valuegroup[2]);
      // 获取当前分类
      var nowTag = valuegroup[2];
      if (document.querySelector('#category-bar')){
        document.getElementById(nowTag).classList.add("select");
      }
    }
  } 
}
tagsBarActive()


topCategoriesBarScroll()


//分类条
function categoriesBarActive(){
  var urlinfo = window.location.pathname;
  urlinfo = decodeURIComponent(urlinfo)
  console.log(urlinfo);
  //判断是否是首页
  if (urlinfo == '/'){
    if (document.querySelector('#category-bar')){
      document.getElementById('site-subtitle').classList.add("select")
    }
  }else {
    // 验证是否是分类链接
    var pattern = /\/categories\/.*?\//;
    var patbool = pattern.test(urlinfo);
    console.log(patbool);
    // 获取当前的分类
    if (patbool) {
      var valuegroup = urlinfo.split("/");
      console.log(valuegroup[2]);
      // 获取当前分类
      var nowCategorie = valuegroup[2];
      if (document.querySelector('#category-bar')){
        document.getElementById(nowCategorie).classList.add("select");
      }
    }
  }
  
}

//鼠标控制横向滚动
function topCategoriesBarScroll(){
  if (document.getElementById("category-bar-items")){
    let xscroll = document.getElementById("category-bar-items");
  xscroll.addEventListener("mousewheel", function (e) {
    //计算鼠标滚轮滚动的距离
    let v = -e.wheelDelta / 2;
    xscroll.scrollLeft += v;
    //阻止浏览器默认方法
    e.preventDefault();
}, false);
  }
}

/*
 * @Author: tzy1997
 * @Date: 2020-12-15 20:55:25
 * @LastEditors: tzy1997
 * @url: https://fe32.top/articles/hexo1606/#%E4%B8%BB%E9%A1%B5%E5%86%92%E6%B3%A1%E7%89%B9%E6%95%88
 * @LastEditTime: 2021-01-12 19:02:25
 */

$(function() {
    // 气泡
    function bubble() {
        $('#page-header').circleMagic({
            radius: 10,
            density: .2,
            color: 'rgba(255,255,255,.4)',
            clearOffset: 0.99
        });
    }! function(p) {
        p.fn.circleMagic = function(t) {
            var o, a, n, r, e = !0,
                i = [],
                d = p.extend({ color: "rgba(255,0,0,.5)", radius: 10, density: .3, clearOffset: .2 }, t),
                l = this[0];

            function c() { e = !(document.body.scrollTop > a) }

            function s() { o = l.clientWidth, a = l.clientHeight, l.height = a "px", n.width = o, n.height = a }

            function h() {
                if (e)
                    for (var t in r.clearRect(0, 0, o, a), i) i[t].draw();
                requestAnimationFrame(h)
            }

            function f() {
                var t = this;

                function e() { t.pos.x = Math.random() * o, t.pos.y = a 100 * Math.random(), t.alpha = .1 Math.random() * d.clearOffset, t.scale = .1 .3 * Math.random(), t.speed = Math.random(), "random" === d.color ? t.color = "rgba(" Math.floor(255 * Math.random()) ", " Math.floor(0 * Math.random()) ", " Math.floor(0 * Math.random()) ", " Math.random().toPrecision(2) ")" : t.color = d.color }
                t.pos = {}, e(), this.draw = function() { t.alpha <= 0 && e(), t.pos.y -= t.speed, t.alpha -= 5e-4, r.beginPath(), r.arc(t.pos.x, t.pos.y, t.scale * d.radius, 0, 2 * Math.PI, !1), r.fillStyle = t.color, r.fill(), r.closePath() }
            }! function() {
                o = l.offsetWidth, a = l.offsetHeight,
                    function() {
                        var t = document.createElement("canvas");
                        t.id = "canvas", t.style.top = 0, t.style.zIndex = 0, t.style.position = "absolute", l.appendChild(t), t.parentElement.style.overflow = "hidden"
                    }(), (n = document.getElementById("canvas")).width = o, n.height = a, r = n.getContext("2d");
                for (var t = 0; t < o * d.density; t++) {
                    var e = new f;
                    i.push(e)
                }
                h()
            }(), window.addEventListener("scroll", c, !1), window.addEventListener("resize", s, !1)
        }
    }(jQuery);

    // 调用气泡方法
    bubble();
})


// https://sscarf.com/posts/17168.html#昼夜切换动画
function switchNightMode() {
  document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>'),
    setTimeout(function() {
      document.querySelector('body').classList.contains('DarkMode') ? (document.querySelector('body').classList.remove('DarkMode'), localStorage.setItem('isDark', '0'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-moon')) : (document.querySelector('body').classList.add('DarkMode'), localStorage.setItem('isDark', '1'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-sun')),
        setTimeout(function() {
          document.getElementsByClassName('Cuteen_DarkSky')[0].style.transition = 'opacity 3s';
          document.getElementsByClassName('Cuteen_DarkSky')[0].style.opacity = '0';
          setTimeout(function() {
            document.getElementsByClassName('Cuteen_DarkSky')[0].remove();
          }, 1e3);
        }, 2e3)
    })
  const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
  if (nowMode === 'light') {
    activateDarkMode()
    saveToLocal.set('theme', 'dark', 2)
    GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
    document.getElementById('modeicon').setAttribute('xlink:href', '#icon-sun')
  } else {
    activateLightMode()
    saveToLocal.set('theme', 'light', 2)
    document.querySelector('body').classList.add('DarkMode'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-moon')
  }
  // handle some cases
  typeof utterancesTheme === 'function' && utterancesTheme()
  typeof FB === 'object' && window.loadFBComment()
  window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
}


// 必须放最后，好像有问题
categoriesBarActive()