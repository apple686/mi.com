import $ from "../library/jquery.js";
import '../library/silder.js';
import { cookie } from '../library/cookie.js';




(function() {
    let id = location.search.split('=')[1]; // 获取id
    console.log(id);

    $.ajax({
        type: "get",
        url: "../interface/getitem.php",
        data: {
            id: id
        },
        dataType: "json",
        success: function(res) {
            let picture = JSON.parse(res.pic);
            console.log(picture);
            let color = JSON.parse(res.color);
            let versions = JSON.parse(res.versions);
            let pic = '';
            let str = '';
            let str1 = '';

            $('.sticky-title').html(`${res.title}`);
            picture.forEach((elm, index) => {
                // console.log(elm.src);
                pic += `<img src="${elm.src}" alt=""></img>`
                    // console.log(pic);
                return pic;
            })
            color.forEach((elm, index) => {

                str += `<li>${elm.c}</li>`;
                return str;
            })
            versions.forEach((elm, index) => {
                str1 += `<li>${elm.v}</li>`;
                return str1;
            })
            console.log(str1);


            let template = `
            <div class="content-C">
            <div class="img-left">
            <div class="slider">
            <div>
                ${pic}
            </div>

            <span>&lt;</span>
            <span>&gt;</span>

            <article>
            </article>

        </div>


            </div>
            <div class="text-right">
                <p class="title">${res.title}</p>
                ${res.details}

                <p class="mi">小米自营</p>

                <div class="price">
                    <span class="price-info">${
                        res.price
                    }</span> 元
                    </span>
                </div>
                <div class="line"></div>
                <div class="product-add">
                    <div><span>北京</span><span>北京市</span><span>海淀区</span><span>清河街道</span><a href="">修改</a></div>
                    <span>有现货</span>
                </div>

                <div class="by-option">
                    <p>选择颜色</p>
                    <ul class="color">
                       ${str}
                    </ul>
                    <p>选择版本</p>
                    <ul class="version">
                        ${str1}
                    </ul>

                </div>
                <div class="server-box">
                    <div class="title">选择小米提供的意外保护<span><a href="">了解意外保护></a></span></div>
                    <ul class="content-S">
                        <li class="item-S">
                            <p class="icon-S"><span class="iconfont icon-duihao"></span></p>
                            <img src="../images/icon/bao.png" alt="">
                            <div class="box-S">
                                <h3>意外保障服务
                                    <b>99元</b>

                                </h3>
                                <div class="desc">手机意外碎屏/进水/碾压等损坏</div>

                                <div class="agreement">
                                    <input type="checkbox">我已阅读<a href="">服务条款</a><span>|</span><a href="">常见问题</a>
                                </div>
                            </div>
                        </li>
                        <li class="item-S">
                            <p class="icon-S"><span class="iconfont icon-duihao"></span></p>
                            <img src="../images/icon/bao.png" alt="">
                            <div class="box-S">
                                <h3>意外保障服务
                                    <b>99元</b>

                                </h3>
                                <div class="desc">手机意外碎屏/进水/碾压等损坏</div>

                                <div class="agreement">
                                    <input type="checkbox">我已阅读<a href="">服务条款</a><span>|</span><a href="">常见问题</a>
                                </div>
                            </div>
                        </li>

                    </ul>

                    <div class="title">选择小米提供的延长保修<span><a href="">了解延长保修></a></span></div>
                    <ul class="content-S">
                        <li class="item-S">
                            <p class="icon-S"><span class="iconfont icon-duihao"></span></p>
                            <img src="../images/icon/bao.png" alt="">
                            <div class="box-S">
                                <h3>意外保障服务
                                    <b>99元</b>

                                </h3>
                                <div class="desc">手机意外碎屏/进水/碾压等损坏</div>

                                <div class="agreement">
                                    <input type="checkbox">我已阅读<a href="">服务条款</a><span>|</span><a href="">常见问题</a>
                                </div>
                            </div>
                        </li>
                        <li class="item-S">
                            <p class="icon-S"><span class="iconfont icon-duihao"></span></p>
                            <img src="../images/icon/bao.png" alt="">
                            <div class="box-S">
                                <h3>意外保障服务
                                    <b>99元</b>

                                </h3>
                                <div class="desc">手机意外碎屏/进水/碾压等损坏</div>

                                <div class="agreement">
                                    <input type="checkbox">我已阅读<a href="">服务条款</a><span>|</span><a href="">常见问题</a>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
                <div class="select-list">
                    <p>${res.title} ${versions[0].v} ${color[0].c}<span><span>${res.price}</span>元</span>
                    </p>

                    <div class="sum">
                        总计：${res.price}元
                    </div>
                </div>

                <div class="btn-box">
                    <div class="btn-shop"><a href="./shopcar.html">加入购物车</a></div>
                    <div class="like"><span class="iconfont icon-xin"></span>喜欢</div>
                </div>


                <ul class="foot-S">
                    <li><span class="iconfont icon-down"></span>小米自营</li>
                    <li><span class="iconfont icon-down"></span>小米自营</li>
                    <li><span class="iconfont icon-down"></span>七天无理由退货</li>
                    <li><span class="iconfont icon-down"></span>小米自营</li>
                    <li><span class="iconfont icon-down"></span>小米自营</li>
                    <li><span class="iconfont icon-down"></span>小米自营</li>
                    <li><span class="iconfont icon-down"></span>小米自营</li>
                </ul>
            </div>


        </div>
            `;

            $('#details').append(template).find('.slider').slider({
                speed: 600, // 动画时间
                delay: 1000 // 展示时间
            });


            $('#details').find('.by-option li').on('click', function(ev) {
                console.log(ev);
                $(ev.target).css({ "color": "#ff6700", "border-color": "#ff6700" }).siblings('li').css({ "color": "#757575", "border-color": "#757575" });
            });



            //.find('#additem').on('click', function() {
            //addItem(res.id, res.price, $('#num').val());
            //});
        }
    });
    // $(function() {

    //     $('.slider').slider({
    //         speed: 600, // 动画时间
    //         delay: 1000 // 展示时间
    //     });
    // })


    function addItem(id, price, num) {
        let shop = cookie.get('shop'); // 从cookie中获取shop数据

        let product = {
            id: id,
            price: price,
            num: num
        };

        if (shop) { // 判断是否存有购物车数据
            shop = JSON.parse(shop);
            // 购物车中是否已经存在当前这件商品
            if (shop.some(elm => elm.id == id)) {
                // 修改数量
                shop.forEach(elm => {
                    elm.id === id ? elm.num = num : null;
                });
            } else {
                // 添加商品
                shop.push(product);
            }

        } else {
            shop = [];
            shop.push(product);
        }

        cookie.set('shop', JSON.stringify(shop), 1);
    }
})();