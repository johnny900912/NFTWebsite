const sign_in_button = document.querySelector('#sign-in-button');
const sign_up_button = document.querySelector('#sign-up-button');
const container = document.querySelector('.container');

sign_up_button.addEventListener('click',()=>{
    container.classList.add('sign-up-mode');
});
sign_in_button.addEventListener('click',()=>{
    container.classList.remove('sign-up-mode');
});

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
 $(document).ready(function(){
    $("#login").click(function(){
      $('.hello').fadeTo(500,1); 
      $('.hello').find('.hword').empty();
         var lar=$("#txt_name").val();
         $('.hello').find('.hword').append(lar +'，歡迎你回來!');    
     });
  });