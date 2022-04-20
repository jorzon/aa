function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    slider();
  }
  function slider() {
    //para el tab en soles
    new Swiper('.swiper-tabSoles-soles-deposit', {
      slidesPerView: 3,
      spaceBetween: 24,
      slidesPerGroup: 3,
      direction: getDirection(),
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        }
      }
    });
  
    new Swiper('.swiper-tabSoles-dolar-deposit', {
      slidesPerView: 3,
      spaceBetween: 24,
      slidesPerGroup: 3,
      direction: getDirection(),
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        }
      }
    });

    //para el tab en dolares
    new Swiper('.swiper-tabDolar-soles-deposit', {
        slidesPerView: 3,
        spaceBetween: 24,
        slidesPerGroup: 3,
        direction: getDirection(),
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            resize: function () {
            swiper.changeDirection(getDirection());
            }
        }
    });

    new Swiper('.swiper-tabDolar-dolar-deposit', {
        slidesPerView: 3,
        spaceBetween: 24,
        slidesPerGroup: 3,
        direction: getDirection(),
        on: {
          resize: function () {
            swiper.changeDirection(getDirection());
          }
        }
      });
  }
  
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("tablinks-left").click();
  
  