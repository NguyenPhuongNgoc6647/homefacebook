$(document).ready(function(){
   $('#show').click(function(){
      $('#show').addClass('none')
      $('#hide').removeClass('none')
      $('#watch-more').removeClass('none')
      $('#watch-more').show();
      return false;
   })
   $('#hide').click(function(){
      $('#hide').addClass('none')
      $('#show').removeClass('none')
      $('#watch-more').addClass('none')
      $('#watch-more').hide();
      return false;
   })
  $('#click-readmore').click(function(){
     $('.display-readmore').css('display','block');
     $('#click-readmore').css('display','none')
     $('.three-dot').css('display','none')
     return false;
  })
  var check = false;
  $('#bet-fit').click(function(){
  
     if(check == false){
      $('.triangle').removeClass('display-readmore');
      $('.panel-sort').removeClass('display-readmore');
      check=true;
      return false;
     }
     if(check == true){
      $('.triangle').addClass('display-readmore');
      $('.panel-sort').addClass('display-readmore');
      check=false;
      return false;
     }
  })
  var check_comment = false;
  $('#comment-display').click(function(){
     
     if(check_comment === false){
        $('.list-comment').removeClass('display-readmore')
        check_comment = true;
        return false;
     }
     if(check_comment === true){
      $('.list-comment').addClass('display-readmore')
      check_comment = false;
      return false;
   }
  })


  var check_update = false;
  $('#update-details').click(function(){

     if(check_update === false){
        $('.details').removeClass('displaynone')
        check_update = true;
        return;
     }
     if(check_update === true){
      $('.details').addClass('displaynone')
      check_update = false;
      return;
   }
  })
  $('.icon-close').click(function(){
   $('.details').addClass('displaynone')
   $('.favorite').addClass('displaynone')
  })

  $('.btn').click(function(){
     $('.details').addClass('displaynone')
  })


  var check_fa = false;
  $('#add-favorite').click(function(){

     if(check_fa === false){
        $('.favorite').removeClass('displaynone')
        check_fa = true;
        return;
     }
     if(check_fa === true){
      $('.favorite').addClass('displaynone')
      check_fa = false;
      return;
   }
  })
})