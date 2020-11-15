$(document).ready(function () {
  $.get('https://sky-frontend.herokuapp.com/movies', function (data) {
    let dataMovies = data[2].movies;
    let dataHighlights = data[0].items;
    for (let i = 0; i < data[2].movies.length; i++) {
      $('.wrapper-movies .photos').append(
        '<a href="#"><svg class="icon-elegibility" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><circle cx="12" cy="12" r="10" fill="#000" fill-opacity=".6"></circle><path fill="#FFF" d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path><path fill="#FFF" fill-rule="nonzero" d="M12 5.167c1.678 0 2.917 1.22 2.917 2.916v1.75h.583c.671 0 1.167.489 1.167 1.167v4.667c0 .678-.496 1.166-1.167 1.166H8.549c-.672 0-1.216-.55-1.216-1.228V11c0-.678.496-1.167 1.167-1.167h.583v-1.75c0-1.695 1.24-2.916 2.917-2.916zm.583 7h-1.166V14.5h1.166v-2.333zM12 6.333c-1.007 0-1.75.733-1.75 1.75v1.75h3.5v-1.75c0-1.017-.743-1.75-1.75-1.75z"></path></g></svg><img src=' +
          dataMovies[i].images[0].url +
          ' /></a>'
      );
    }
    for (let i = 0; i < data[0].items.length; i++) {
      $('.wrapper-movies-highlights .photos').append(
        '<a href="#"><svg class="icon-elegibility" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><circle cx="12" cy="12" r="10" fill="#000" fill-opacity=".6"></circle><path fill="#FFF" d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path><path fill="#FFF" fill-rule="nonzero" d="M12 5.167c1.678 0 2.917 1.22 2.917 2.916v1.75h.583c.671 0 1.167.489 1.167 1.167v4.667c0 .678-.496 1.166-1.167 1.166H8.549c-.672 0-1.216-.55-1.216-1.228V11c0-.678.496-1.167 1.167-1.167h.583v-1.75c0-1.695 1.24-2.916 2.917-2.916zm.583 7h-1.166V14.5h1.166v-2.333zM12 6.333c-1.007 0-1.75.733-1.75 1.75v1.75h3.5v-1.75c0-1.017-.743-1.75-1.75-1.75z"></path></g></svg><img src=' +
          dataHighlights[i].images[0].url +
          ' /></a>'
      );
    }
    carroussel();
    institutional();
  });
});

function carroussel() {
  $('.wrapper-movies .photos').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.wrapper-movies-highlights .photos').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

function institutional() {
  $('.institutional').on('click', function () {
    $('.institutional .mobile ul').slideToggle();
    $('.institutional .mobile ul').toggleClass('active');
  });
}
