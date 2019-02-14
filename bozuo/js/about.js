$(function () {
        let box = $(".box");
        let imgs = $(".one img");
        let title = $(".one p:first-child");
        let desc = $(".one p:last-child");
        let arr = [imgs,title,desc];

        let imgs2 = $(".two img");
        let title2 = $(".two p:first-child");
        let desc2 = $(".two p:last-child");
        let arr2 = [imgs2,title2,desc2];

        let imgs3 = $(".three img");
        let title3 = $(".three p:first-child");
        let desc3 = $(".three p:last-child");
        let arr3 = [imgs3,title3,desc3];

        let imgs4 = $(".four img");
        let title4 = $(".four p:first-child");
        let desc4 = $(".four p:last-child");
        let arr4 = [imgs4,title4,desc4];

        let imgs5 = $(".five img");
        let title5 = $(".five p:first-child");
        let desc5 = $(".five p:last-child");
        let arr5 = [imgs5,title5,desc5];
        let arrs = [arr,arr2,arr3,arr4,arr5];

   window.onscroll = function (){
       look(box,arrs)
   };
    hovers(4);
});