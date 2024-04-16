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

  window.onload = function() {
    var url = window.location.href;
    if(url.includes("?")){
      var queryString = url.substring(url.indexOf("?") + 1);
      var messageText = queryString ? decodeURIComponent(queryString) : "";
      var messageTextArea = document.getElementById('message');
      var subject = document.getElementById('subject');
      subject.value = "Ayrıntılı bilgi"
      messageTextArea.value = messageText + "\" projeniz hakkında ayrıntılı bilgi alabilir miyim?";
    }
}