//owl crousel home
if($(".home-carousel").length!=0 ){
    $('.home-carousel').owlCarousel({
        stagePadding: 150,
        loop:true,
        margin:40,
        items:1,
        autoplayTimeout: 10000,
        autoplay: true,
        nav:false,
        startPosition:1,
        responsive:{
            0:{
                items:1,
                margin:15,
                stagePadding: 30
            },
            767:{
                items:1,
                margin:15,
                stagePadding: 30
                
            },
            1000:{
                items:1
            }
        }
    })
}
if($(".cook-carousel").length!=0 ){
    $('.cook-carousel').owlCarousel({
        stagePadding:0,
        loop:false,
        margin:35,
        items:5,
        autoplayTimeout: 5000,
        autoplay: false,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:1,
                stagePadding:90,
                margin:10,
                loop:true,
                dots: true
            },
            414:{
                items:1,
                stagePadding:110,
                margin:20,
                loop:true,
                dots: true
            },
            768:{
                stagePadding:0,
                loop:false,
                margin:20,
                items:3,
                autoplay: true,
                nav:false,
                dots:false,
                startPosition:1,
                
            },
            1024:{
                stagePadding:0,
                loop:false,
                margin:20,
                items:5,               
            }
        }
    })
}


$(function(){
    $('.menu-humberger').on('click',function(e){
        $('.filter-chapter-item').toggleClass('show');
        e.stopPropagation();
    })
    $(".filter-chapter-item").click(function(e){
        e.stopPropagation();
    });
    $(document).click(function(){
        $(".filter-chapter-item").removeClass('show');
    });
    //Avtar drop down
    // $('.mini-photo').on('click mouseover', function(e) {
    //     //alert('343343');
    //     $('.avtar-container').toggleClass('active');
    //     e.stopPropagation();
    // });
    
    // $(document).click(function(){
    //     $(".avtar-container").removeClass('active');
    // });
    
 });
$(function(){
var navBar = $('#menu');
$('#burgerMenuCheck').on('change', function(e){  
  if(e.target.checked == true){
      navBar.addClass('active');
      $('body').addClass('menuMobile');
  }else{
      navBar.removeClass('active')
      $('body').removeClass('menuMobile');
  }
});
// Mobile Menu 
$('.nav-section ul li a,.menu-iconM').click(function(){
    let wWdth = window.innerWidth
    if(wWdth < 1025){
        $(this).parent('li.nav-item').toggleClass('mobileSubmenuShow')
    }
  })

//mobile accordian
$('.txt-sec.mb .heading-3').click(function(){
    let wWdth = window.innerWidth
    if(wWdth < 767){
        // alert('Click');
        $('.txt-sec.mb').removeClass('active');
        $(this).parent().addClass("active");
    }
  })


});


window.onload = () => {
    var acc = document.getElementsByClassName("accord_btn");
      var i;
    
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("active");
          // if (panel.style.maxHeight) {
          //   panel.style.maxHeight = null;
          // } else {
          //   panel.style.maxHeight = panel.scrollHeight + "px";
          // } 
        });
      }
      var acc_new = document.getElementsByClassName("accord_btn_sub");
      var i;
    
      for (i = 0; i < acc_new.length; i++) {
        acc_new[i].addEventListener("click", function() {
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("active");
          // if (panel_sub.style.maxHeight) {
          //   panel_sub.style.maxHeight = null;
          // } else {
          //   panel_sub.style.maxHeight = panel_sub.scrollHeight + "px";
            
          // } 
        });
      }
    
      var acc_brd = document.getElementsByClassName("accord_btn_border");
      var i;
    
      for (i = 0; i < acc_brd.length; i++) {
        acc_brd[i].addEventListener("click", function() {
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("active");
          // if (panel_sub.style.maxHeight) {
          //   panel_sub.style.maxHeight = null;
          // } else {
          //   panel_sub.style.maxHeight = panel_sub.scrollHeight + "px";
          // } 
        });
      }
    
    }
    
                jQuery(document).ready(function($) {
                  $('.accord_carousel').owlCarousel({
                    center: true,
                    stagePadding: 60,
                    items: 2,
                    loop: true,
                    margin: 20
                   
                  })
                });
         