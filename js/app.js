$(document).ready(() => {
  // $('#inputForm').validate();
  $('#inputForm').validate({
    highlight: function(element, errorClass) {
      $(element).fadeOut(function() {
              $(element).fadeIn();
                  
      });
    },
    submitHandler: function(form) {
      $(form).submit();
    }
  })
});
