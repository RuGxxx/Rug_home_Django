
(function () {
    var wid = window.innerWidth;
    var hei = window.innerHeight;
    document.getElementById('all_').style.width = String(parseInt(wid)*0.92) + 'px';
    document.getElementById('all_').style.height = String(parseInt(hei)*0.92) + 'px';
})();


function con_tex(text) {
    var con_h = document.getElementById('text_').value;
    if (con_h.length == 0){
        alert('\n\n请先输入网址,,,\n\n')
    }else {
        var url_open = text + con_h
        // console.log(url_open);
        window.open(url_open);
    }
}


(function () {
    var onc_1 = document.getElementById('onc_1');
    var onc_2 = document.getElementById('onc_2');
    var onc_3 = document.getElementById('onc_3');
    var onc_4 = document.getElementById('onc_4');
    var onc_5 = document.getElementById('onc_5');
    var onc_6 = document.getElementById('onc_6');
    var onc_7 = document.getElementById('onc_7');
    var onc_8 = document.getElementById('onc_8');
    var onc_9 = document.getElementById('onc_9');
    onc_1.onclick = function () {
        con_tex('http://pupudy.com/url.php?url=');
    }
    onc_2.onclick = function () {
        con_tex('http://vip.jlsprh.com/index.php?url=');
    }
    onc_3.onclick = function () {
        con_tex('http://api.97kn.com/?url=');
    }
    onc_4.onclick = function () {
        con_tex('http://000o.cc/jx/ty.php?url=');
    }
    onc_5.onclick = function () {
        con_tex('http://wuming.zuist.com/?url=');
    }
    onc_6.onclick = function () {
        con_tex('http://jx.vgoodapi.com/jx.php?url=');
    }
    onc_7.onclick = function () {
        con_tex('http://api.baiyug.cn/vip/index.php?url=');
    }
    onc_8.onclick = function () {
        con_tex('http://api.baiyug.cn/vip/?url=');
    }
    onc_9.onclick = function () {
        con_tex('http://api.662820.com/xnflv/index.php?url=');
    }
})();