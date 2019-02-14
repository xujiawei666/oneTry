function scrollTop() {
    var scrollTop = 0;
    if (/*document.documentElement&&*/document.documentElement.scrollTop){
        scrollTop =document.documentElement.scrollTop;
    }else if (document.body){
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}
jQuery.fn.slideLeftHide = function( speed, callback ) {
    this.animate({
        width : "hide",
        paddingLeft : "hide",
        paddingRight : "hide",
        marginLeft : "hide",
        marginRight : "hide",
        opacity: "hide"
    },speed, callback );
};
jQuery.fn.slideLeftShow = function( speed, callback ) {
    this.animate({
        width : "show",
        paddingLeft : "show",
        paddingRight : "show",
        marginLeft : "show",
        marginRight : "show",
        opacity: "show"
    },speed, callback );
};
function hider(arr) {
    arr[0].slideLeftHide(500,
        function (){
            arr[1].slideLeftHide(500,
                function (){
                    arr[2].slideLeftHide(500,
                        function (){
                            arr[3].slideUp(250)
                        })
                })
        })
}
function shower(arr) {
    arr[0].slideLeftShow(500,
        function (){
            arr[1].slideLeftShow(500,
                function (){
                    arr[2].slideLeftShow(500,
                        function (){
                            arr[3].slideDown(250)
                        })
                })
        })
}
function hider2(arr) {
    arr[0].slideLeftHide(500,
        function (){
            arr[1].slideLeftHide(500,
                function (){
                    arr[2].slideLeftHide(250)
                })
        })
}
function shower2(arr) {
    arr[0].slideLeftShow(500,
        function (){
            arr[1].slideLeftShow(500,
                function (){
                    arr[2].slideLeftShow(250)
                })
        })
}
function hovers (now){
    let item = document.querySelectorAll(".banner-desc ul li")
    item.forEach(function (e,index) {
        e.onmouseenter=function () {
            for (let i=0; i<item.length; i++){
                item[i].classList.remove("on");
            }
            e.classList.add("on");
        }
        e.onmouseleave=function () {
            for (let i=0; i<item.length; i++){
                item[i].classList.remove("on");
            }
            item[now].classList.add("on");
        }
    })
}
function look(box,arrs) {
    for (let i=0; i<box.length; i++) {
        let tops = box[i].offsetTop;
        let scroll = scrollTop();
        let trueTops = tops - scroll;
        if (trueTops > 550) {
            hider2(arrs[i]);
        } else {
            shower2(arrs[i]);
        }
    }
}

