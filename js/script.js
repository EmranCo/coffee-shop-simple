let prodution = document.querySelector('#prodution-btn');
let navbar = document.querySelector('.navbar');

prodution.onclick = () =>{

}

prodution.addEventListener('click', function (){
    prodution.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.onscroll = () =>{
    prodution.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images =>{
    images.onclick = () =>{
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});
