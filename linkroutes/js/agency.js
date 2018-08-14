// Smooth scrolling via animate()
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash && window.location.pathname == "/") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

// Navigation change on scroll
$(document).ready(function(){
  var maxOffset = 300;
  $(window).scroll(function() {
    if ($(window).scrollTop() >= maxOffset) {
      $('.navbar-default').addClass('navbar-shrink');
    }
    else {
      $('.navbar-default').removeClass('navbar-shrink');
    }
  });
});

$(document).ready(function(){
  var maxOffset = 300;
  if ($(window).scrollTop() >= maxOffset) {
    $('.navbar-default').addClass('navbar-shrink');
  }
  else {
    $('.navbar-default').removeClass('navbar-shrink');
  }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Async contact form
$('form[id=contactForm]').submit(function(){
  $('#Jloading').show();
  e.preventDefault();
  var name = $('#name').val();
  var email = $('#email').val();
  var phone = $('#phone').val();
  var comments = $('#message').val();

  $('button.btn-xl').addClass('disabled').attr('disabled','disabled');
  $.ajax({
    url:'https://theutopia.cn/phpmailer/index.php',
    method:'POST',
    data:{
      name:name,
      email:email,
      phone:phone,
      cmt:comments
    },
    dataType:"json",
    success:function(data) {
      $('#Jloading').hide();
      $('button.btn-xl').removeClass('disabled').removeAttr('disabled');
      if (data.code == 200) {
        $('#success').show();
      }else{
        $('#error').show();
      }
    }
  });
  return false;
});

// Contact form validation
$.validate({
  modules : 'html5, toggleDisabled'
});
