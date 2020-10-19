var aLi = document.querySelectorAll('#app .swapper-banner .img li');

var aBtn = document.querySelectorAll('#app .swapper-banner>span');

var aDot = document.querySelectorAll('#app .swapper-banner .dot li');


var oUl = document.querySelectorAll('#app .swapper-banner .img')[0];
var num = 0;

var len = aLi.length;

var timer;

function change(flag) {
    // 删除class属性值active
    aLi[num].classList.remove('active');
    aDot[num].classList.remove('on');
    if (flag) {
        num++;
        if (num >= len) num = 0;
    } else {
        num--;
        if (num < 0) num = len - 1;
    }
    aLi[num].classList.add('active');
    aDot[num].classList.add('on');
}

// 点击右侧按钮
aBtn[1].onclick = function() {
    change(true);
}

// 点击左侧按钮
aBtn[0].onclick = function() {
    change(false);
}

// 点击下面按钮
for (let i = 0; i < len; i++) {
    aDot[i].onclick = function() {
        aLi[num].classList.remove('active');
        aDot[num].classList.remove('on');
        num = i;
        aLi[num].classList.add('active');
        aDot[num].classList.add('on');
    }
}

function auto() {
    timer = setInterval(function() {
        var x = num;
        x++;
        change(true)
    }, 2000)
}

auto();

// oUl.onmouseenter = function() {
//     clearInterval(timer);
// }

// oUl.onmouseleave = function() {
//     auto();
// }