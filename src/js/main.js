$(document).ready(function () {
  $.get('https://sky-frontend.herokuapp.com/movies', function (data) {
    let dataMovies = data[2].movies;
    for (let i = 0; i < data[2].movies.length; i++) {
      switch (dataMovies[i].categories) {
        case 'Ação e Aventura, Infantil':
          $('.wrapper-movies-action .teste').append(
            '<img src=' + dataMovies[i].images[0].url + ' />'
          );
          break;
        case 'Animação, Infantil':
          $('.wrapper-movies-animation').append('<img src=' + dataMovies[i].images[0].url + ' />');
          break;
        case 'Suspense, Terror':
          $('.wrapper-movies-horror').append('<img src=' + dataMovies[i].images[0].url + ' />');
          break;
      }
    }
    // $('.wrapper-movies-action').slick();
    // $('.wrapper-movies-action .teste').slick({
    //   dots: true,
    //   infinite: false,
    //   speed: 300,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   responsive: [
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //       },
    //     },
    //     {
    //       breakpoint: 490,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //       },
    //     },
    //   ],
    // });
  });
});
