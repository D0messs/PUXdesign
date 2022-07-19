  var first_apartment_btn = document.getElementById('first-apartment-more-info-btn'),
      second_apartment_btn = document.getElementById('second-apartment-more-info-btn'),
      third_apartment_btn = document.getElementById('third-apartment-more-info-btn');

  first_apartment_btn.onmouseover = function(e) {
    document.getElementById('first-apartment-image').style.background = "rgba(81,56,95, 0.85)";
  };
  first_apartment_btn.onmouseout = function(e) {
      document.getElementById('first-apartment-image').style.background = "rgba(81,56,95,0.5)";
  };

  second_apartment_btn.onmouseover = function(e) {
      document.getElementById('second-apartment-image').style.background = "rgba(81,56,95, 0.85)";
    };
  second_apartment_btn.onmouseout = function(e) {
        document.getElementById('second-apartment-image').style.background = "rgba(81,56,95,0.5)";
    };

  third_apartment_btn.onmouseover = function(e) {
      document.getElementById('third-apartment-image').style.background = "rgba(81,56,95, 0.85)";
    };
  third_apartment_btn.onmouseout = function(e) {
        document.getElementById('third-apartment-image').style.background = "rgba(81,56,95,0.5)";
    };

  const photoGalery = [...document.querySelectorAll('.photo-container')];
  const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
  const preBtn = [...document.querySelectorAll('.pre-btn')];

  photoGalery.forEach((item, i) => {
    var containerDimensions = item.getBoundingClientRect();
    var containerWidth = containerDimensions.width;
    var divWidth = document.querySelector('.photo-card').offsetWidth;
    var query = window.matchMedia("(max-width: 480px)");

    if (query.matches) {
      nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += divWidth;
      })
  
      preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= divWidth;
      })
    } else {
      nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
      })
  
      preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
      })
    }

  })

function scrollMenu() {
  
  var headerID = document.getElementById("respHeader");
  var topID = document.getElementById("respTop");

  if (headerID.className === "header") {
      headerID.className += " responsive";
  } else {
      headerID.className = "header";
  }

  if (topID.className === "top-image-content-text") {
      topID.className += " responsive";
  } else {
      topID.className = "top-image-content-text";
  }
}