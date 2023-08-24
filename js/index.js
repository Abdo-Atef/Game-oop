
import {startApp} from './home.js'

$(document).ready(function(){
  $('.spinner').fadeOut(1000 , function(){
    $('.loading').fadeOut(1000);
    $('body').css('overflow','auto')
  });
  new startApp();
})
  
