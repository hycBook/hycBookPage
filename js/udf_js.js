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


document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'k') {
        // 当按下 Ctrl+K 时执行搜索操作
        event.preventDefault(); // 防止浏览器默认行为（可能会触发浏览器的搜索）
        // 调用执行搜索的函数
        var divElement = document.getElementById('search-button');
        var linkElement = divElement.querySelector('a');
        linkElement.click(); 
    }
});



document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'm') {
        // 当按下 Ctrl+K 时执行搜索操作
        event.preventDefault(); // 防止浏览器默认行为（可能会触发浏览器的搜索）
        // 跳转到分类目录
        window.location.href = '/categories/common/';
    }
});



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


// https://sscarf.com/posts/17168.html#时间轴添加生肖
hexo.extend.helper.register('getAnimalIcon', function (year) {
    var index = parseInt(year) % 12;
    var icon = {
        0: 'icon-monkey',
        1: 'icon-rooster',
        2: 'icon-dog',
        3: 'icon-boar',
        4: 'icon-rat',
        5: 'icon-ox',
        6: 'icon-tiger',
        7: 'icon-rabbit',
        8: 'icon-dragon',
        9: 'icon-snake',
        10: 'icon-horse',
        11: 'icon-goat',
    }
    return icon[index]
});

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


// 必须放最后，好像有问题
categoriesBarActive()