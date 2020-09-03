(function($) {
    $.fn.extend({
        slider: function(options) {
            // 函数式编程 
            // 将所有功能封装成独立的函数

            let main = null, // 主函数
                init = null, // 初始化
                start = null, // 开始动画
                stop = null, // 停止动画
                prev = null, // 上一张
                next = null, // 下一张
                timer = null, // 计时器
                elms = {}, // 命名空间
                defaults = {
                    speed: 1000, // 动画速度
                    delay: 3000 // 间隔时间
                }; //默认参数




            $.extend(defaults, options); // 合并参数

            // console.log(this.children('div'));

            init = function() {


                // 1. 元素选择
                elms.sliderDiv = this.children('div'); // 选择需要滑动的DIV元素


                elms.btns = this.children('span'); // 选择左右按钮
                //.....................................................获取p元素
                elms.arti = this.children('article');
                // elms.sliderP = this.children('article').children('p');

                // elms.pindex = elms.sliderP.index(); //获取p元素索引值

                // elms.sliderP.first().css('background', 'rgb(165, 42, 42)')
                // ------------------------------------------------------------------
                // 复制第一张图片
                elms.sliderDiv.append(elms.sliderDiv.children('img').first().clone());
                elms.imgWidth = elms.sliderDiv.children('img').first().width();
                //----------------------------------------------
                elms.length = elms.sliderDiv.children('img').length; //获取div元素孩子个数
                // console.log(elms.length);

                // 用于记录当前播放的索引值
                elms.index = 1;

                // 2. 事件绑定
                //-----------------------------------------------------
                $(function() {

                    for (i = 1; i < elms.length; i++) {
                        let p = document.createElement('p');
                        elms.arti.append(p);

                    }

                    elms.arti.children().first().addClass('active');

                })

                this.hover(function() {
                    stop();
                }, function() {
                    timer = setInterval(start.bind(null, 1), defaults.delay + defaults.speed);

                });

                elms.btns.on('click', function() {
                    if (elms.btns.index(this)) {
                        next();
                    } else {
                        prev();
                    }

                });

                //------------------------------------------------------------------
                // 点击p元素触发的事件
                elms.arti.on('click', 'p', function() {
                    $(this).addClass('active');
                    $(this).siblings().removeClass('active');
                    let pindex = $(this).index();
                    // console.log(pindex);
                    elms.index = pindex + 1;
                    // console.log(elms.index);
                    elms.sliderDiv.animate({ left: `-${
                        pindex*elms.imgWidth}px` }, 500);
                });


            }.bind(this);


            start = function(direction) {
                let left = `-=${elms.imgWidth}`; // 设置距离
                if (!direction) {
                    left = `+=${elms.imgWidth}`;
                    if (elms.index === 1) { // 当图片为一张时
                        elms.index = elms.length; //  设置索引为4
                        let divLeft = this.offset().left,
                            imgLeft = elms.sliderDiv.children('img').last().offset().left;
                        elms.sliderDiv.css('left', `-${imgLeft-divLeft}px`);

                    }
                }

                elms.sliderDiv.animate({
                    left: left
                }, defaults.speed, function() {

                    if (direction) {
                        elms.index++;

                    } else {
                        elms.index--;
                    }

                    if (elms.index === elms.length) { // 判断当前是最后一张图片
                        elms.index = 1; // 初始化索引值
                        elms.sliderDiv.css('left', 0); // 定位设置成0
                    }

                    // console.log(elms.index);
                    elms.pindex = elms.index - 1;
                    let that = elms.arti.children()[elms.pindex];

                    $(that).addClass('active');
                    $(that).siblings().removeClass('active');
                    // console.log($(that));

                });
            }.bind(this)


            prev = function() {
                stop();
                start(0);
            }

            next = function() {
                stop();
                start(1);
            }

            stop = function() {
                clearInterval(timer);
                elms.sliderDiv.stop(true, true);
            }



            main = function() {

                init();
                timer = setInterval(start.bind(null, 1), defaults.delay + defaults.speed);

            }

            main();


        }
    });
})(jQuery);