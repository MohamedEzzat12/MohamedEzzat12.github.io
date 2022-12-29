const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY-10)+"px; left: "+(e.pageX-10)+"px;")
})
document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
})
window.addEventListener('scroll', () => {
    let nav = document.querySelector('#nav');
    nav.classList.toggle("sticky", window.scrollY > 0);
})
var sections = document.querySelectorAll('section');
onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop;
    sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop - section.offsetHeight*0.25 && scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight*0.25) {
            var currentId = section.attributes.id.value;
            document.querySelectorAll('#nav li a').forEach((el) => {
                el.classList.remove("active");
            })
            var selector = `#nav a[href="#${currentId}"]`;
            document.querySelector(selector).classList.add('active');
        }
    })
}

let projectArr = ['codingp', 'researchp', 'designp'];
let projectBtnArr = ['.projectbtn1', '.projectbtn2', '.projectbtn3'];
let nav = document.getElementById('nav');

for (let i = 0; i < 3; i++) {
    document.querySelector(projectBtnArr[i]).addEventListener('click', ()=>{
        document.getElementById(projectArr[i]).style.transform = 'scale(1)';
        nav.style.display = 'none';
    })
}

for (let i = 0; i < 3; i++) {
    document.getElementById(projectArr[i]).querySelector('.fa-close').addEventListener('click', ()=>{
        document.getElementById(projectArr[i]).style.transform = 'scale(0)';    
        nav.style.display = 'flex';
    })
}

document.querySelectorAll('.toggler').forEach(toggler => {
    toggler.addEventListener('click', ()=>{
        const header = toggler.parentNode;
        const content = header.nextElementSibling;
        toggler.firstElementChild.classList.toggle('open');
        content.classList.toggle('open');
    });
})