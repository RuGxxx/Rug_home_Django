
(function () {
    var cxxx = document.getElementById('xcv');
    var okmnn = document.getElementById('mkkk');
    cxxx.onclick = function () {
        document.getElementById('vbs_1').style.display = 'none';
        document.getElementById('mkkk').style.display = 'none';
    };
    okmnn.onclick = function () {
        document.getElementById('vbs_1').style.display = 'none';
        document.getElementById('mkkk').style.display = 'none';
    };
})();

function blos_1() {
    var texttt = document.getElementById('vbs_1')
    texttt.innerHTML =  '<div class="mnbssss" onclick="opssss(\'https://www.bealaity.xyz\')">主页</div>\n' +
                        '<div class="mnbssss" onclick="opssss(\'http://www.nipic.com/\')">昵图网</div>\n'
    document.getElementById('vbs_1').style.display = 'block';
    document.getElementById('mkkk').style.display = 'block';
}

function opssss(data) {
    window.open(data);
}
function bds() {
    window.open('https://www.baidu.com/')
}

function bloc_over() {
    var sdsf = document.getElementById('autos');
    sdsf.style.display = "none";
}

function bloc_out() {
    var sdsf = document.getElementById('autos');
    sdsf.style.display = "block";
    document.getElementById('autos').style.opacity = 0.25;
    document.getElementById('autos').style.left = "1060px";
    sdsf.innerText = '455664313@qq.com'
    fcs();
}

function fcs() {
    ups = 0;
    lefs = 1064;
    function fc_1() {
        ups += 0.05
        lefs -= 1;
        document.getElementById('autos').style.opacity = ups;
        document.getElementById('autos').style.left = String(lefs) + "px";
        if (ups <= 1) {
            setTimeout(fc_1,30)
        }
    }
    fc_1();
}




































// ---------------------------------------------------------------------------------
// 我是菜鸟 不要搞我呀 谢谢
