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
function dynamicTextSequence() {
  const texts = ["UI UX Designer", "Frontend Developer", "Backend Developer", "Full Stack Developer"];
  const elem = document.getElementById("dynamic-text");
  let currentText = "";
  let currentIndex = 0;
  let deleteMode = false;

  function updateText() {
      if (!deleteMode) {
          if (currentText.length < texts[currentIndex].length) {
              currentText = texts[currentIndex].substring(0, currentText.length + 1);
          } else {
              if (currentIndex < texts.length - 1) {
                  setTimeout(() => {
                      deleteMode = true;
                  }, 700); // Bekleme süresi, metin tamamlandıktan sonra
              }
          }
      } else {
          if (currentText.length > 0) {
              currentText = texts[currentIndex].substring(0, currentText.length - 1);
          } else {
              currentIndex++;
              deleteMode = false;
              if (currentIndex >= texts.length) {
                  currentIndex = 0; // Döngüyü tekrar başlat
              }
          }
      }
      elem.textContent = currentText;
      setTimeout(updateText, deleteMode ? 50 : 110); // Silme hızı ve yazma hızı
  }

  updateText();
}



// Belirtilen metinleri sırayla gösteren fonksiyon
function decodeText(elementId, targetText, interval) {
    let elem = document.getElementById(elementId);
    let currentIndex = 0;
    elem.textContent = '';
  
    // Rastgele karakterler üret
    function getRandomChar() {
      const chars = 'abcdefghijklmnopqrstuvwxyz';
      return chars[Math.floor(Math.random() * chars.length)];
    }
  
    // Her karakter için "decode" etkisi
    let decodeEffect = function() {
      let text = '';
      for (let i = 0; i < targetText.length; i++) {
        // Eğer geçerli karaktere henüz gelmediysek rastgele karakterler kullan
        text += i < currentIndex ? targetText[i] : getRandomChar();
      }
      
      // Metni güncelle
      elem.textContent = text;
      
      // Her adımda currentIndex'i artır
      if (currentIndex <= targetText.length) {
        setTimeout(decodeEffect, Math.random() * interval);
        currentIndex++;
      }
    };
  
    decodeEffect();
}


  
  // Sayfa yüklendiğinde decodeText fonksiyonunu çağır
  window.onload = function() {
    const textToDecode = 'ONUR KÖSE';
    decodeText('dynamic-name', textToDecode, 150); // ID, metin ve hız (milisaniye)

    dynamicTextSequence();
  };