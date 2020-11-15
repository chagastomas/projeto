$(document).ready(function () {
  $.get('https://sky-frontend.herokuapp.com/movies', function (data) {
    let dataMovies = data[2].movies;
    let dataHighlights = data[0].items;
    for (let i = 0; i < data[2].movies.length; i++) {
      $('.wrapper-movies .photos').append(
        '<a href="#"><img src=' + dataMovies[i].images[0].url + ' /></a>'
      );
    }
    for (let i = 0; i < data[0].items.length; i++) {
      $('.wrapper-movies-highlights .photos').append(
        '<a href="#"><img src=' + dataHighlights[i].images[0].url + ' /></a>'
      );
    }
    carroussel();
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
