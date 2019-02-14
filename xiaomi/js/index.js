window.onload = function () {
    end();
    move();
    guide();
    guide2();
    change();
    backTop();
    hlbt();
};
// 倒计时
function end() {
    var now = new Date();
    var num = now.getTime();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    var now1 = new Date(year,month,day,18,00,00);
    var num1 = now1.getTime();
    var ca = num1-num;
    if ( ca>0) {
        var h = Math.floor(ca / 1000 / 60 / 60 % 24);
        var m = Math.floor(ca / 1000 / 60 % 60);
        var s = Math.floor(ca / 1000 % 60);
        setTimeout(end,1000);
    }else{
        h = 0;
        m = 0;
        s = 0;
    }
    document.getElementsByClassName("box")[0].innerText = h;
    document.getElementsByClassName("box")[1].innerText = m;
    document.getElementsByClassName("box")[2].innerText = s;
}

// 左右滑动变换选项卡
function guide(){
    let btn = document.querySelectorAll(".guide-btn input");
    let div = document.querySelector(".guide-msg ul");
    let count = 0;
    btn[0].onclick = function () {
        let a = div.style.left;
        count++;
        if (count==1){
            btn[0].style.color = "black";
        }else if(count==2){
            btn[0].style.color = "#b0b0b0";
        }else if (count==3){
            count = 2;
            return;
        }
        if (div.style.left == '') {
            a = 0;
        }
        let num = parseInt(a)-1000;
        div.style.left= num + "px";
    }
    btn[1].onclick = function () {
        let a = div.style.left;
        count--;
        if (count==1){
            btn[1].style.color = "black";
        }else if(count==0){
            btn[1].style.color = "#b0b0b0";
        }else if (count==-1){
            count = 0;
            return;
        }
        if (div.style.left == '') {
            a = 0;
        }
        let num = parseInt(a)+1000;
        div.style.left= num+"px";
    }
}

// 轮播
function move() {
    let im = document.querySelectorAll("#move");
    let po = document.querySelectorAll(".point");
    let count = 0;
    let flag = false;
    function init(index) {
        for (let i=0; i<im.length;i++){
            im[i].style.transform="scale(0)";
            po[i].style.backgroundColor="rgba(0, 0, 0, 0.56)";
        }
        im[index].style.transform="scale(1)";
        po[index].style.backgroundColor="white";
    }
    init(0);
    // 计数器
    function he() {
        count++;
        if (count == im.length){
            count = 0;
        }
        init(count);
    }
    let auto = setInterval(he,2500);
    // 手动轮播
    let btn = document.querySelector(".btn2");
    let btn1 = document.querySelector(".btn3");
    btn.onclick = function () {
        if (flag == true) {
            flag = false;
            count--;
            if (count<0){
                count = im.length-1;
            }
            init(count);
        }
    };
    btn1.onclick=function () {
        if (flag == true){
            flag = false;
            he();
        }
    };
    // 鼠标移入时停止轮播
    let bann = document.querySelector(".imgs");
    bann.onmouseenter = function () {
        clearInterval(auto);
    };
    // 鼠标移出时开始轮播
    bann.onmouseleave = function () {
            auto = setInterval(he, 2500);
    };
    bann.addEventListener("transitionend",function (e) {
            flag = true;
    })
}

// 左右滑动选项卡2
function guide2(){
    let btn = document.querySelectorAll(".guide-btn input");
    let div = document.querySelector(".guide-tui ul");
    let count = 0;
    btn[2].onclick = function () {
        let a = div.style.left;
        count++;
        if (count==1){
            this.style.color = "black";
        }else if(count==2){
            this.style.color = "#b0b0b0";
        }else if (count==3){
            count = 2;
            return;
        }
        if (div.style.left == '') {
            a = 0;
        }
        let num = parseInt(a)-1226;
        div.style.left= num + "px";
    };
    btn[3].onclick = function () {
        let a = div.style.left;
        count--;
        if (count==1){
            this.style.color = "black";
        }else if(count==0){
            this.style.color = "#b0b0b0";
        }else if (count==-1){
            count = 0;
            return;
        }
        if (div.style.left == '') {
            a = 0;
        }
        let num = parseInt(a)+1226;
        div.style.left= num+"px";
    }
}

// 点击变换选项卡
function change() {
    let $name = document.querySelectorAll(".appliance ul li");
    let $span = document.querySelectorAll(".appliance ul li span")
    let $desc = document.querySelectorAll(".appliance-home-top ul");
    let $desc2 = document.querySelectorAll(".appliance-home-bottom ul");
    $name.forEach(function (ele,index){
        ele.onclick = function (){
            for (let i=0; i<$desc.length; i++){
                $desc[i].style.opacity="0";
                $desc2[i].style.opacity="0";
                $name[i].style.color = "black";
                $span[i].style.borderBottom= "none";
            }
            $desc[$desc.length-1-index].style.opacity = "1";
            $desc2[$desc.length-1-index].style.opacity = "1";
            this.style.color="#ff6700";
            $span[index].style.borderBottom= "2px solid #ff6700";
        }
    })
}

// 点击返回顶部
function backTop() {
    let back = document.querySelector(".backtop");
    function show(){
        let range = document.documentElement.scrollTop;
        if (range>800){
            back.style.display="block";
        }else if(range<800) {
            back.style.display="none";
        }
    }
    show();
    setInterval(show,1000);
    back.onclick=function () {
        window.scrollTo(0,0);
    }
}

// hlbt
function hlbt(){
    let list = document.querySelectorAll(".guide-connect ul li");
    let btn = document.querySelectorAll(".guide-connect-btn");
    let btn2 = document.querySelectorAll(".guide-connect-btn2");
    let n = 0;
    let imgs = 0;
    list.forEach(function(e,index){
        e.onmouseover=function () {
            for (let i=0; i<list.length; i++){
                list[i].className="no";
            }
            this.className="yes";
            imgs = document.querySelectorAll(".yes img");
        }
    });
    let points = document.querySelectorAll(" .g-point");
    btn.forEach(function (e,index){
        e.onclick = function () {
            if (n==-1){
                n=imgs.length-1;
            }
            for (let i=0; i<imgs.length; i++){
                imgs[i].style.opacity="0";
            }
            imgs[n].style.opacity="1";
            n--;
        }
        });
    btn2.forEach(function (e,index) {
        e.onclick = function () {
            n++;
            if (n == imgs.length) {
                n = 0;
            }
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].style.opacity = "0";
            }
            imgs[n].style.opacity = "1";

        }
    });
    points.forEach(function (e,index) {
        e.onclick = function () {
            let j = (index+1)%imgs.length;
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].style.opacity = "0";
            }
            for (let x = 0; x < points.length; x++){
                points[x].style.backgroundColor = "gray";
            }
            this.style.backgroundColor = "white";
            this.style.border = "2px solid #ff6700";
            if (index<imgs.length){
                imgs[index].style.opacity = "1";
            }else if(j!= 0){
                imgs[j-1].style.opacity = "1";
            }else {
                imgs[imgs.length-1].style.opacity = "1";
            }
        }
    })
}

