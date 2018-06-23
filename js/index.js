var oWrap = document.getElementById("wrap");
(function(){
    var aLi = oWrap.querySelectorAll(".content .top li");
    oWrap.onmousemove= function (ev) {
        var w =oWrap.offsetWidth,
            h = oWrap.offsetHeight,
            x = (ev.clientX  - (w / 2)) * (w > h ? (h / w) : 1 ),
            y = (ev.clientY  - (h / 2)) * (h > w ? (w / h) : 1);
        console.log(x,y);
        var a = [],b = [0.26,0.24,0.16,0.1,-0.1,-0.24,-0.16,-0.36],c = [];
        x = -(Math.floor((x*0.20)));
        y = -(Math.floor((y*0.26)));
        for (var i = 0, length = aLi.length ; i<length; i++){
            a[i] = b[i]*y;
            c[i] = b[i]*x;
            aLi[i].style.transform = "translate3d("+c[i]+"px,"+a[i]+"px,0)";
        }
    }
})();
(function(){
    var oMusic = oWrap.querySelector(".music"),
        oMusics = oMusic.querySelector(".music span"),
        oMusici = oMusic.querySelector(".music i"),
        oMus = oMusic.getElementsByTagName("audio")[0]
    ;
    var bool = true;
    oMusic.onclick = function () {
        if( bool ){
            oMusici.className = oMusics.className = "on" ;
            oMus.pause();
        }else {
            oMusici.className = oMusics.className = "";
            oMus.play();
        }
        bool = !bool;
    }
})();
(function(){
    var aJli = oWrap.querySelectorAll(".jieshao .lvbo ul li"),
        aJdi = oWrap.querySelectorAll(".jieshao .lvbo ul li div");
    var index = 0;
    function change() {
        aJli[index].style.width = "104px";
        aJdi[index].style.opacity = "1";
        index = this.index;
        aJli[index].style.width = "640px";
        aJdi[index].style.opacity = "0";
    }
    for (var i = 0, length = aJli.length; i < length; i++) {
        aJli[i].index = i;
        aJli[i].onmouseenter = change;
    }
})();