$(function () {
    let btn = document.querySelectorAll(".po");
    let po2 = document.querySelectorAll(".po-img1");
    let imgs = document.querySelectorAll(".banner>img")
    btn.forEach(function (e,index) {
        e.onmouseenter=function () {
            for (let i=0; i<btn.length; i++){
                po2[i].classList.remove("po-no");
                imgs[i].style.opacity="0";
            }
            po2[index].classList.add("po-no");
            imgs[index].style.opacity="1";
        }
    });
    let box = $('.box')
    let imga = $(".one-part img");
    let name = $(".one-part p:first-child");
    let desc = $(".one-part p:nth-child(2)");
    let ppan = $(".one-part span");
    let arr = [imga,name,desc,ppan];

    let imga2 = $(".two-part img");
    let name2 = $(".two-part p:first-child");
    let desc2 = $(".two-part p:nth-child(2)");
    let ppan2 = $(".two-part span");
    let arr2 = [imga2,name2,desc2,ppan2];

    let imga3 = $(".three-part img");
    let name3 = $(".three-part p:first-child");
    let desc3 = $(".three-part p:nth-child(2)");
    let ppan3 = $(".three-part span");
    let arr3 = [imga3,name3,desc3,ppan3];

    let imga4 = $(".four-part img");
    let name4 = $(".four-part p:first-child");
    let desc4 = $(".four-part p:nth-child(2)");
    let ppan4 = $(".four-part span");
    let arr4 = [imga4,name4,desc4,ppan4];
    let  arrs = [arr,arr2,arr3,arr4]
    window.onscroll = function(){
        look(box,arrs);
    }
    hovers(1);
})