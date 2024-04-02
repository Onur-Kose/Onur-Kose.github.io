document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      var firstName = document.getElementById('first-name').value;
      var lastName = document.getElementById('last-name').value;
      var subject = document.getElementById('subject').value;
      var message = document.getElementById('message').value;
      var mailtoLink = 'mailto:eemkoseonur@gmail.com?subject='
        + encodeURIComponent(subject)
        + '&body=Merhaba ben ' + encodeURIComponent(firstName) + ' '
        + encodeURIComponent(lastName) + '%0D%0A%0D%0A'
        + encodeURIComponent(message);
      window.location.href = mailtoLink;
    });
  });