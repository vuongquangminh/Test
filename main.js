
var items = document.querySelectorAll('.content4-top-right .item')
var items2 = document.querySelectorAll('.content4-top-right2 .item')
var items3 = document.querySelectorAll('.content4-top-right3 .item')
if(true) {
    items.forEach(function(itemm, index){
        itemm.onclick = function(e) {
            if (index===0) {
                document.querySelector('.content4-top-right').style.display = 'block'
                document.querySelector('.content4-top-right3').style.display = 'none'
                document.querySelector('.content4-top-right2').style.display = 'none'
            }
            if (index===1) {
                document.querySelector('.content4-top-right').style.display = 'none'
                document.querySelector('.content4-top-right2').style.display = 'block'
                document.querySelector('.content4-top-right3').style.display = 'none'
            }
            if (index===2) {
                document.querySelector('.content4-top-right').style.display = 'none'
                document.querySelector('.content4-top-right2').style.display = 'none'
                document.querySelector('.content4-top-right3').style.display = 'block'
            }
        }
    }) 

    items2.forEach(function(itemm2, index){
        itemm2.onclick = function(e) {
            if (index===0) {
                document.querySelector('.content4-top-right').style.display = 'block'
                document.querySelector('.content4-top-right3').style.display = 'none'
                document.querySelector('.content4-top-right2').style.display = 'none'
            }
            if (index===1) {
                document.querySelector('.content4-top-right').style.display = 'none'
                document.querySelector('.content4-top-right2').style.display = 'block'
                document.querySelector('.content4-top-right3').style.display = 'none'
            }
            if (index===2) {
                document.querySelector('.content4-top-right').style.display = 'none'
                document.querySelector('.content4-top-right2').style.display = 'none'
                document.querySelector('.content4-top-right3').style.display = 'block'
            }
        }
    }) 


    items3.forEach(function(itemm3, index){
        itemm3.onclick = function(e) {
            if (index===0) {
                document.querySelector('.content4-top-right').style.display = 'block'
                document.querySelector('.content4-top-right3').style.display = 'none'
                document.querySelector('.content4-top-right2').style.display = 'none'
            }
            if (index===1) {
                document.querySelector('.content4-top-right').style.display = 'none'
                document.querySelector('.content4-top-right2').style.display = 'block'
                document.querySelector('.content4-top-right3').style.display = 'none'
            }
            if (index===2) {
                document.querySelector('.content4-top-right1').style.display = 'none'
                document.querySelector('.content4-top-right2').style.display = 'none'
                document.querySelector('.content4-top-right3').style.display = 'block'
            }
        }
    }) 
}



// var hi = document.querySelector('.headList_1 li:first-child')
// hi.onup =function() {
//     document.querySelector('#web1').style.display = 'none'
//     document.querySelector('#web2').style.display = 'block'
// }
