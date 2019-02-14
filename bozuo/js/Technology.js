$(function () {
    let imgs = document.querySelectorAll(".banner>img")
    let btn = document.querySelectorAll(".point");
    let btns = document.querySelectorAll(".point-img1");
    btn.forEach(function (e,index) {
        e.onmouseenter=function () {
            for (let i=0; i<btn.length; i++){
                btns[i].classList.remove("show");
                imgs[i].style.opacity="0";
            }
            btns[index].classList.add("show");
            imgs[2-index].style.opacity="1";
        }
    });
    function shows() {
        let box = $(".chat")
        let imgs = $(".one img");
        let quest = $(".one p");
        let mean = $(".one a");
        let arr = [imgs,quest,mean];

        let imgs2 = $(".two img");
        let quest2 = $(".two p");
        let mean2 = $(".two a");
        let arr2 = [imgs2,quest2,mean2];

        let imgs3 = $(".three img");
        let quest3 = $(".three p");
        let mean3 = $(".three a");
        let arr3 = [imgs3,quest3,mean3];

        let imgs4 = $(".four img");
        let quest4 = $(".four p");
        let mean4 = $(".four a");
        let arr4 = [imgs4,quest4,mean4];
        let arrs = [arr,arr2,arr3,arr4]
        look(box,arrs)
    }
   window.onscroll = function (){
        shows();
   };
    hovers(2);
});