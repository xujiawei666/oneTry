$(function () {
    let banImg = document.querySelectorAll('.banner>img');
    let btn = $('.pointers p');
    let arrow1 = $('.arrowleft');
    let arrow2 = $('.arrowright');
    let count = 0;
    let num = 0;
    arrow1[0].addEventListener('click',function (){
        if (count == 0){
            count = 3;
        } else{
            count--;
        }
        for (let i=0; i<btn.length; i++){
            banImg[i].classList.remove('showing');
            btn[i].classList.remove('da')
        }
        banImg[count].classList.add('showing');
        btn[count].classList.add('da');
    }) ;
    arrow2[0].addEventListener('click',function (){
        if (count == 3){
            count = 0;
        } else{
            count++;
        }
        num = count;
        for (let i=0; i<btn.length; i++){
            banImg[i].classList.remove('showing');
            btn[i].classList.remove('da')
        }
        banImg[count].classList.add('showing');
        btn[count].classList.add('da');
    }) ;

    btn.each(function (i,e) {
        e.onclick = function () {
            for (let i=0; i<btn.length; i++){
                banImg[i].classList.remove('showing');
                btn[i].classList.remove('da')
            }
            banImg[i].classList.add('showing');
            num = i;
            e.classList.add('da')
        };
        e.onmouseenter = function () {
            for (let i=0; i<btn.length; i++){
                btn[i].classList.remove('da')
            }
            e.classList.add('da')
        };
        e.onmouseleave = function () {
            for (let i=0; i<btn.length; i++){
                btn[i].classList.remove('da')
            }
            btn[num].classList.add('da')
        }
    });


    let box = $(".box");
    let title = $(".title");
    let imgs = $(".part1-img");
    let quest = $(".question");
    let mean = $(".part1-mean");
    let arr = [title,imgs,quest,mean];

    let title2 = $(".part2 .part2-title");
    let imgs2 = $(".part2 img");
    let quest2 = $(".part2 .part2-questions");
    let mean2 = $(".part2-mean");
    let arr2 = [title2,imgs2,quest2,mean2];

    let title3 = $(".part3-title");
    let imgs3 = $(".part3-img");
    let quest3 = $(".part3-question");
    let mean3 = $(".part3-mean");
    let arr3 = [title3,imgs3,quest3,mean3];

    let title4 = $(".part4-title");
    let imgs4 = $(".part4 img");
    let quest4 = $(".part4-quse");
    let mean4 = $(".part4-mean");
    let arr4 = [title4,imgs4,quest4,mean4];
    let arrs = [arr,arr2,arr3,arr4]

    window.onscroll = function(){
        look(box,arrs);
    };
    hovers(0)
});