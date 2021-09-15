// wow animation
new WOW().init();
document.querySelectorAll("h1,h2,h3").forEach((h) =>{
    h.className = ('wow animate__bounceInUp')
})

// show icon scroll up
let iconUp = document.getElementById('icon-up');
let nav = document.querySelector('nav')
window.onscroll = function () {
    
    if(this.scrollY >= 700){
        iconUp.classList.add('show');
        nav.classList.add('show')
    }else{
        iconUp.classList.remove('show');
        nav.classList.remove('show');
    }
}
iconUp.onclick = function (){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
// creat overlay
let overlay = document.createElement('div');
overlay.className = ('overlay');
document.body.appendChild(overlay)
// event icon show nav
let iconNav = document.getElementById('icon-nav');
let navMinu = document.getElementById('nav-minu');
iconNav.addEventListener('click', (e) => {
    navMinu.classList.toggle('show');
    overlay.classList.toggle('show');
    iconNav.classList.toggle('fa-times-circle');
    iconNav.classList.toggle('fa-bars');
    
})

// changs tabs
let quesItem = document.querySelectorAll('.question .item');
let answerList = document.querySelectorAll('.answer');

quesItem.forEach((q) => {
    q.addEventListener('click', function(e){
        quesItem.forEach((q) => {
            q.classList.remove("active")
        });
        e.target.classList.add("active");
        answerList.forEach((aL) => {
            aL.classList.remove('show')
        });
        document.querySelector(e.target.dataset.ques).classList.add('show')
    })
})

let itemAnswer = document.querySelectorAll('.answer .item');
itemAnswer.forEach((item) => {
    item.addEventListener('click', function (e){
        e.target.classList.toggle('style');
        e.target.firstElementChild.classList.toggle('fa-plus');
        e.target.firstElementChild.classList.toggle('fa-minus');
        e.target.nextElementSibling.classList.toggle('show');
    })
});