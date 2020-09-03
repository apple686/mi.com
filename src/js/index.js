import $ from "../library/jquery.js";

import '../library/jquery.lazyload.js';
import '../library/silder.js';

$(function() {

    $('.slider').slider({
        speed: 600, // 动画时间
        delay: 1000 // 展示时间
    });
})
$('.tab>li').hover(
    function() {
        $(this).addClass("tab-active");
    },
    function() {
        $(this).removeClass("tab-active");
    }

)







$.ajax({
    type: "get",
    url: "../interface/index.php",
    // data: "data",
    dataType: "json",
    success: function(res) {
        let temp = '';
        res.forEach((elm, index) => {

            let picture = JSON.parse(elm.pic);
            console.log(picture);


            temp += `<li class="product-a">
            <a href="./details.html?id=${elm.id}">
                <div>
                    <img src=${picture[0].src}>
                </div>
                <p class="title">${elm.title}</p>
                <p class="desc">${
                    elm.ad
                }</p>
                <p class="price"><span class="num">${elm.price}</span>元<del><span class="num">${
                    elm.d_price
                }</span>元<del></p>  
            </a>      
        </li>`;
        })
        console.log(temp);
        $('.pic-list').append(temp);

        // res.forEach((elm, index) => {

        //     console.log(elm);
        //     let picture = JSON.parse(elm.pic);
        //     console.log(picture[0].src);
        // console.log();


        // temp += `<li class="product-a">
        //     <a href="./details.html?id=${elm.id}">
        //         <div>
        //             // <img src=${picture[0].src}>
        //         </div>
        //         <p class="title">${elm.title}</p>
        //         <p class="desc">${
        //             elm.ad
        //         }</p>
        //         <p class="price"><span class="num">${elm.price}</span>元<del><span class="num">${
        //             elm.d_price
        //         }</span>元<del></p>  
        //     </a>      
        // </li>`;

        // });
        // console.log(temp);
        // $('.list').append(temp);
    }
});







//懒加载
$(function() {
    $("img.lazy").lazyload({
        placeholder: "../images/loading.gif", //用图片提前占位
        // placeholder,值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏
        effect: "fadeIn", // 载入使用何种效果
        // effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
        // threshold: 200, // 提前开始加载
        // threshold,值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉
        // event: 'click' // 事件触发时才加载
        // event,值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标莫过或点击图片才开始加载,后两个值未测试…
        // container: $("#container"), // 对某容器中的图片实现效果
        // container,值为某容器.lazyload默认在拉动浏览器滚动条时生效,这个参数可以让你在拉动某DIV的滚动条时依次加载其中的图片
        // failurelimit: 10 // 图片排序混乱时
        // failurelimit,值为数字.lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况,failurelimit意在加载N张可见区域外的图片,以避免出现这个问题.
    });

    $('.downloadApp').hover(function() {
        $('.app-show').slideToggle(300);
    })




})