
$('.js-preloader').preloadinator({
    minTime: 2000
  });
// wow animation
new WOW().init();
document.querySelectorAll("h1,h2,h3").forEach((h) =>{
    h.className = ('wow animate__bounceInUp')
})
// Dark Mode
let dark = document.getElementById('dark-mode');
dark.addEventListener('click', () => {
    document.querySelectorAll('section').forEach( (s) => {
        if(s.classList.contains('dark' )){
            s.classList.remove('dark');
            document.documentElement.style.setProperty('--bg-section-color',"#f7f9fe");
            document.documentElement.style.setProperty('--bg-card',"#fff");
            dark.classList.remove('fa-moon');
            dark.classList.add('fa-sun');
            
        }else{
            s.classList.add('dark');
            document.documentElement.style.setProperty('--bg-section-color',"rgb(15, 12, 12)");
            document.documentElement.style.setProperty('--bg-card',"#283a5f");
            dark.classList.remove('fa-sun');
            dark.classList.add('fa-moon')
        }
        
    })
    document.querySelectorAll('div,h5,.answer>li,nav li>a').forEach((ele) => {
        if(ele.classList.contains('dark-color')){
            ele.classList.remove('dark-color')
        }else{
            ele.classList.add('dark-color')
        }
    })
    
})
// show icon scroll up
let iconUp = document.getElementById('icon-up');
let nav = document.querySelector('nav')
window.onscroll = function () {
    
    if(this.scrollY >= 600){
        iconUp.classList.add('show');
        nav.classList.add('show');
        dark.classList.add('up')
    }else{
        iconUp.classList.remove('show');
        nav.classList.remove('show');
        dark.classList.remove('up')
    }
}
iconUp.onclick = function (){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
// nav scroll active section
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');
// console.log(navLi)
window.addEventListener('scroll', ()=> {
    let current = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop -sectionHeight / 7){
            current = section.getAttribute('id')
        }
    })
    navLi.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
})
// creat overlay
const overlay = document.createElement('div');
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
// function Increase Numbers Stats
let numStatOne = document.getElementById('num-stat-1');
let numStatTwo = document.getElementById('num-stat-2');
let numStatThere = document.getElementById('num-stat-3');
function increaseNumbers (){
    
    if (numStatOne.textContent  >= numStatOne.dataset.stat){
        clearInterval(numberIntervalOne)
    }else{
        numStatOne.textContent = Number(numStatOne.textContent) + 1
    }
    if (numStatTwo.textContent >= numStatTwo.dataset.stat){
        clearInterval(numberIntervalTwo)
    }else{
        numStatTwo.textContent = Number(numStatTwo.textContent) + 1
    }
    if (numStatThere.textContent >= numStatThere.dataset.stat){
        clearInterval(numberIntervalThere)
    }else{
        numStatThere.textContent = Number(numStatThere.textContent) + 1
    }
    
}
numberIntervalOne = setInterval(increaseNumbers, )
numberIntervalTwo = setInterval(increaseNumbers, )
numberIntervalThere = setInterval(increaseNumbers, )

