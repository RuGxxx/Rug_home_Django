
(function () {
    document.getElementById('top_s').style.height = String(26) + 'px';
    document.getElementById('top_s').style.fontSize = String(18) + 'px';
    document.getElementById('top_s').style.position = 'fixed';
    document.getElementById('top_s').style.top = String(-26) + 'px';
    // document.getElementById('top_s').style.backgroundColor = 'blue';
    document.getElementById('top_s').style.color = 'red';
    document.getElementById('top_s').style.width = String(290) + 'px';
    document.getElementById('top_s').innerText = '今天，是你余生中最年轻的一天呢~'
})();

function time_() {
    var wid = window.innerWidth;
    function apps(){
        var ddd = document.getElementById('top_s').offsetWidth;
        var plp = document.getElementById('top_s').offsetLeft;
        document.getElementById('top_s').style.left = String(wid+10) +'px';
        wid -= 2;
        if (plp <= -(ddd)){
            wid = window.innerWidth;
            document.getElementById('top_s').style.left = String(wid+100) +'px';
        }
        setTimeout(apps,16)
    }
    apps();
}
time_();

function mou_over() {
     var mkmk = -26;
     function sss(){
         mkmk += 1;
         document.getElementById('top_s').style.top = mkmk + 'px';
         if (mkmk <= 0){
             setTimeout(sss,20);
         }
     }
     sss();
}


function mou_out() {
     var mkmk = 0;
     function sss(){
         mkmk -= 1;
         document.getElementById('top_s').style.top = mkmk + 'px';
         if (mkmk >= -26){
             setTimeout(sss,20);
         }
     }
     sss();
}
