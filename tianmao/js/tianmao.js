    window.onload=function(){
        autoMove();
        backTop();
    }
    function rolls() {
        var roll = document.documentElement.scrollTop;
        var nav = document.getElementsByClassName('left-nav');
        let list = document.querySelectorAll(".lists");
        let mark = document.querySelectorAll(".tmall-mart");
        let top = document.querySelector(".top");
        if(roll>700){
            nav[0].style.display="block";
            top.style.top="0px";
        }else {
            nav[0].style.display="none";
            top.style.top="-50px";
        }
        // 点击名字跳转到相应位置
        list.forEach(function (e,index) {
           e.onclick = function () {
               for (let i=0; i<list.length;i++){
                   list[i].style.backgroundColor="rgba(255, 0, 54, 0.58)";
               }
               this.style.backgroundColor = "yellow";
               window.scrollTo(0,705*(index+2));
           }
        });
        mark.forEach(function(e,index){
            e.onmouseover=function (){
                for (let i=0; i<mark.length;i++){
                    list[i].style.backgroundColor="rgba(255, 0, 54, 0.58)";
                }
                list[index].style.backgroundColor="yellow";
            }
        });
        let like = document.querySelector(".if-like");
        like.onmouseover= function () {
            for (let i=0; i<mark.length;i++){
                list[i].style.backgroundColor="rgba(255, 0, 54, 0.58)";
            }
            list[7].style.backgroundColor="yellow";

        }
        like.onmouseout= function () {
            list[7].style.backgroundColor="rgba(255, 0, 54, 0.58)";
        }
    }
    var scollMove=setInterval(rolls,0.1);
    function autoMove() {
        var imgs = document.getElementsByClassName('imgs');
        var pointers = document.getElementsByClassName('pointers');
        function initMove(index) {
            for( var i=0; i<imgs.length; i++){
                imgs[i].style.opacity='0';
                pointers[i].style.backgroundColor='rgba(255, 0, 54, 0.36)';
            }
            imgs[index].style.opacity = '1';
            pointers[index].style.backgroundColor='white';
        }
        initMove(0);
        var count=1;
        function fMove() {
            if(count==imgs.length){
                count = 0;
            }
            initMove(count);
            count++;
        }
        var scollMove=setInterval(fMove,2500);
        for (let j in pointers){
            pointers[j].onmouseenter=function () {
                initMove(j);
                count = j;
        }
        }

    }
    function backTop() {
        let btn = document.querySelectorAll(".right-nav dl dd");
        let btn2 = document.querySelector(".left-nav ul li:last-child")
        btn[2].onclick=function (){
            window.scrollTo(0,document.scrollTop);
        };
        btn2.onclick=function (){
            window.scrollTo(0,document.scrollTop);
        }
    }


