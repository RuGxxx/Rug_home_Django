
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
