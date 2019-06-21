$(document).ready(() => {
    
    $('.info').on('click', () => {
        $('.info-P').toggle();
    });
    
    
    
    
    
    $('.textArea').on('keyup', (event) => {
    let post = $(event.currentTarget).val();
    let remaining = 400 - post.length;
         
    //will make frase turn red when count is equal or less than 0     
    if(remaining <=0) {
     $('.wordcount').addClass('red');
    } else {
      $('.wordcount').removeClass('red');
    }
    $('.characters').html(remaining);
  })
  $('.textArea').focus(); 
});