/*
方法一：
// 注意：此处用箭头函数会报错
// 箭头函数没有自己的this，会向父作用域查找
$('.title li').click(function() {
    let $index = $(this).index();
    $(this).css('background-color', 'red').siblings().css('background-color', 'brown')
    $('.content li').eq($index).show().siblings().hide()
})

*/

/*
方法二：
let title = document.querySelectorAll('.title li')
let content = document.querySelectorAll('.content li')


for (let i = 0; i < title.length; i++) {
    title[i].onclick = function() {

        for (let j = 0; j < title.length; j++) {
            title[j].style.backgroundColor = 'brown';
            content[j].style.display = 'none'
        }

        title[i].style.backgroundColor = 'red';
        content[i].style.display = 'block'

    }
}
*/




/*
方法三：
let title = document.querySelectorAll('.title li')

let content = document.querySelectorAll('.content li')

let num = 0;

for (let i = 0; i < title.length; i++) {
    title[i].onclick = function() {
        title[num].style.backgroundColor = 'brown';
        content[num].style.display = 'none'
        num = i;
        title[num].style.backgroundColor = 'red';
        content[num].style.display = 'block'
    }
}
*/