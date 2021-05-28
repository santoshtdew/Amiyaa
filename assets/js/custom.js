//owl crousel home
if($(".home-carousel").length!=0 ){
    $('.home-carousel').owlCarousel({
        stagePadding: 150,
        loop:true,
        margin:40,
        items:1,
        autoplayTimeout: 5000,
        autoplay: true,
        nav:false,
        startPosition:1,
        responsive:{
            0:{
                items:1,
                margin:20,
                stagePadding: 50
            },
            767:{
                items:1,
                margin:20,
                stagePadding: 50
                
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
        margin:20,
        items:4,
        autoplayTimeout: 5000,
        autoplay: true,
        nav:false,
        startPosition:1,
        responsive:{
            0:{
                items:1,
                stagePadding:90,
                margin:10,
                loop:true
            },
            767:{
                items:4,
                stagePadding:80,
                margin:40
                
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

