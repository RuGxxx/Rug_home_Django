
// var url_s = ['http://pupudy.com/url.php?url='];
console.log(' - - - - - - 您好 - - - - - - ');

(function () {
    for (var i=1;i<=9;i++){
        // console.log(i);
        document.write('<div class="onc_" id="onc_'+ String(i) + '">接入点 ' + String(i) + '</div>')
    }
})();


function on_f() {
    document.getElementById('text_').value = '';
}

