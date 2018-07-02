var launched = true;

if (launched) {
  document.querySelector('.button').addEventListener('click',function() {
    launched = false;

    setTimeout(function() {
      document.querySelector('.rocket1-image').src = 'rocket-psd-launched1.jpg';
      document.querySelector('.rocket2-image').src = 'rocket-psd-launched1.jpg';
      document.querySelector('.rocket3-image').src = 'rocket-psd-launched1.jpg';
      document.querySelector('#txt').value='Т - 12 seconds';
    }, 2000);
    setTimeout(function(){
      document.querySelector('.rocket1-image').src = 'rocket-psd-launched2.jpg';
      document.querySelector('.rocket2-image').src = 'rocket-psd-launched2.jpg';
      document.querySelector('.rocket3-image').src = 'rocket-psd-launched2.jpg';
      document.querySelector('#txt').value='Т - 10 seconds';
    }, 4000);
    setTimeout(function(){
      document.querySelector('.rocket1-image').src = 'rocket-psd-launched3.jpg';
      document.querySelector('.rocket2-image').src = 'rocket-psd-launched3.jpg';
      document.querySelector('.rocket3-image').src = 'rocket-psd-launched3.jpg';
      document.querySelector('#txt').value='Т - 8 seconds';
    }, 6000);
    setTimeout(function(){
      document.querySelector('#txt').value='Т - 6 seconds';
      $(document).ready(function(){
              $(".rocket1-image").fadeOut(3000);
      });
    }, 8000);
    setTimeout(function(){
      document.querySelector('#txt').value='Т - 4 seconds';
      $(document).ready(function(){
              $(".rocket3-image").fadeOut(3000);
      });
    }, 9000);
    setTimeout(function(){
      document.querySelector('#txt').value='Т - 2 seconds';
      $(document).ready(function(){
              $(".rocket2-image").fadeOut(3000);
      });
    }, 10000);
    setTimeout(function(){
      document.querySelector('#txt').value='SUCCESSFUL LAUNCH!';
    }, 13000);
  })
}
