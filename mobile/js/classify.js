window.onload = function () {
    nav();
    subnav();
};
function nav() {
    let item = document.getElementsByTagName("li");
    let detell = document.getElementsByClassName("detail");
    detell[0].style.display="block";
    item[0].style.backgroundColor="white";
    for (let i in item){
        item[i].onclick = function () {
            for (let j=0; j<detell.length; j++){
                detell[j].style.display = "none";
                item[j].style.backgroundColor="#f8f8f8"
            }
            detell[i].style.display = "block";
            this.style.backgroundColor="white";
        }
    }
}
function subnav() {
    let more = document.querySelector(".header-more");
    let sub = document.querySelector(".sub-nav");
    more.onclick=function () {
        if (sub.style.display == "none") {
            sub.style.display="block";
        }else{
            sub.style.display="none";
        }

    }
}
