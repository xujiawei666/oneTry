window.onload=function(){
    let open = document.getElementsByClassName('eye');
// console.log(open)
    open[0].onclick=function () {
        if (this.className == "eye bi") {
            this.innerHTML = "<img src=\"img/kai.png\" alt=\"\">";
            this.className = "eye kai";
        }else{
            this.innerHTML = "<img src=\"img/bi.png\" alt=\"\">";
            this.className = "eye bi";
        }
    }
}
