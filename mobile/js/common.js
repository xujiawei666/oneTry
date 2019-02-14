
function bott() {
    let h = document.documentElement.scrollTop;
    let ends = document.querySelector(".under-nav");
    let back = document.querySelector(".back-top");
    if (h<1200){
        ends.style.transform="scale(0)";
        back.style.transform="scale(0)";
    }else{
        ends.style.transform="scale(1)";
        back.style.transform="scale(1)";
    }
    setTimeout(bott,0.1);
    back.onclick=function () {
        window.scrollTo(0,0);
    }
}
function subnav() {
    let more = document.querySelector(".title-desc");
    let sub = document.querySelector(".sub-nav");
    more.onclick=function () {
        if (sub.style.display == "none") {
            sub.style.display="block";
        }else{
            sub.style.display="none";
        }
    }
}