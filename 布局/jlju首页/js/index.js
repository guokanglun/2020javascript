// input框事件开始

var ipt = document.querySelectorAll('#jlju .body .header .search')[0];
var iptHide = document.querySelectorAll('#jlju .body .header .ipt-hide')[0];
var header = document.querySelectorAll('#jlju .body .header .top')[0];
ipt.onfocus = function() {
    ipt.value = '';
    iptHide.style.display = 'block';
}

iptHide.onmouseenter = function() {
    ipt.value = '搜索';
    iptHide.style.backgroundColor = 'grey';
    iptHide.style.color = 'white';
}

iptHide.onmouseleave = function() {
        // ipt.value = '搜索';
        iptHide.style.backgroundColor = 'white';
        iptHide.style.color = 'black';
    }
    // document.onclick = function() {
    //     iptHide.style.display = 'none';
    // }

header.onclick = function() {
    iptHide.style.display = 'none';
    ipt.value = '搜索';
}

// input框事件结束
/*==================================================================== */