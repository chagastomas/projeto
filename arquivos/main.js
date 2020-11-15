"use strict";

$(document).ready(function () {
  $.get('https://sky-frontend.herokuapp.com/movies', function (data) {
    var dataMovies = data[2].movies;
    var dataHighlights = data[0].items;

    for (var i = 0; i < data[2].movies.length; i++) {
      $('.wrapper-movies .photos').append('<a href="#"><img src=' + dataMovies[i].images[0].url + ' /></a>');
    }

    for (var _i = 0; _i < data[0].items.length; _i++) {
      $('.wrapper-movies-highlights .photos').append('<a href="#"><img src=' + dataHighlights[_i].images[0].url + ' /></a>');
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
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 490,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.wrapper-movies-highlights .photos').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 490,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJnZXQiLCJkYXRhIiwiZGF0YU1vdmllcyIsIm1vdmllcyIsImRhdGFIaWdobGlnaHRzIiwiaXRlbXMiLCJpIiwibGVuZ3RoIiwiYXBwZW5kIiwiaW1hZ2VzIiwidXJsIiwiY2Fycm91c3NlbCIsInNsaWNrIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiXSwibWFwcGluZ3MiOiI7O0FBQUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUM1QkYsRUFBQUEsQ0FBQyxDQUFDRyxHQUFGLENBQU0sMkNBQU4sRUFBbUQsVUFBVUMsSUFBVixFQUFnQjtBQUNqRSxRQUFJQyxVQUFVLEdBQUdELElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUUsTUFBekI7QUFDQSxRQUFJQyxjQUFjLEdBQUdILElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUksS0FBN0I7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFFLE1BQVIsQ0FBZUksTUFBbkMsRUFBMkNELENBQUMsRUFBNUMsRUFBZ0Q7QUFDOUNULE1BQUFBLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCVyxNQUE3QixDQUNFLDBCQUEwQk4sVUFBVSxDQUFDSSxDQUFELENBQVYsQ0FBY0csTUFBZCxDQUFxQixDQUFyQixFQUF3QkMsR0FBbEQsR0FBd0QsU0FEMUQ7QUFHRDs7QUFDRCxTQUFLLElBQUlKLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdMLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUksS0FBUixDQUFjRSxNQUFsQyxFQUEwQ0QsRUFBQyxFQUEzQyxFQUErQztBQUM3Q1QsTUFBQUEsQ0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0NXLE1BQXhDLENBQ0UsMEJBQTBCSixjQUFjLENBQUNFLEVBQUQsQ0FBZCxDQUFrQkcsTUFBbEIsQ0FBeUIsQ0FBekIsRUFBNEJDLEdBQXRELEdBQTRELFNBRDlEO0FBR0Q7O0FBQ0RDLElBQUFBLFVBQVU7QUFDWCxHQWREO0FBZUQsQ0FoQkQ7O0FBa0JBLFNBQVNBLFVBQVQsR0FBc0I7QUFDcEJkLEVBQUFBLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCZSxLQUE3QixDQUFtQztBQUNqQ0MsSUFBQUEsSUFBSSxFQUFFLEtBRDJCO0FBRWpDQyxJQUFBQSxRQUFRLEVBQUUsS0FGdUI7QUFHakNDLElBQUFBLEtBQUssRUFBRSxHQUgwQjtBQUlqQ0MsSUFBQUEsWUFBWSxFQUFFLENBSm1CO0FBS2pDQyxJQUFBQSxjQUFjLEVBQUUsQ0FMaUI7QUFNakNDLElBQUFBLFVBQVUsRUFBRSxDQUNWO0FBQ0VDLE1BQUFBLFVBQVUsRUFBRSxHQURkO0FBRUVDLE1BQUFBLFFBQVEsRUFBRTtBQUNSSixRQUFBQSxZQUFZLEVBQUUsQ0FETjtBQUVSQyxRQUFBQSxjQUFjLEVBQUU7QUFGUjtBQUZaLEtBRFUsRUFRVjtBQUNFRSxNQUFBQSxVQUFVLEVBQUUsR0FEZDtBQUVFQyxNQUFBQSxRQUFRLEVBQUU7QUFDUkosUUFBQUEsWUFBWSxFQUFFLENBRE47QUFFUkMsUUFBQUEsY0FBYyxFQUFFO0FBRlI7QUFGWixLQVJVO0FBTnFCLEdBQW5DO0FBdUJBcEIsRUFBQUEsQ0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0NlLEtBQXhDLENBQThDO0FBQzVDQyxJQUFBQSxJQUFJLEVBQUUsS0FEc0M7QUFFNUNDLElBQUFBLFFBQVEsRUFBRSxLQUZrQztBQUc1Q0MsSUFBQUEsS0FBSyxFQUFFLEdBSHFDO0FBSTVDQyxJQUFBQSxZQUFZLEVBQUUsQ0FKOEI7QUFLNUNDLElBQUFBLGNBQWMsRUFBRSxDQUw0QjtBQU01Q0MsSUFBQUEsVUFBVSxFQUFFLENBQ1Y7QUFDRUMsTUFBQUEsVUFBVSxFQUFFLEdBRGQ7QUFFRUMsTUFBQUEsUUFBUSxFQUFFO0FBQ1JKLFFBQUFBLFlBQVksRUFBRSxDQUROO0FBRVJDLFFBQUFBLGNBQWMsRUFBRTtBQUZSO0FBRlosS0FEVSxFQVFWO0FBQ0VFLE1BQUFBLFVBQVUsRUFBRSxHQURkO0FBRUVDLE1BQUFBLFFBQVEsRUFBRTtBQUNSSixRQUFBQSxZQUFZLEVBQUUsQ0FETjtBQUVSQyxRQUFBQSxjQUFjLEVBQUU7QUFGUjtBQUZaLEtBUlU7QUFOZ0MsR0FBOUM7QUF1QkQiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQuZ2V0KCdodHRwczovL3NreS1mcm9udGVuZC5oZXJva3VhcHAuY29tL21vdmllcycsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgbGV0IGRhdGFNb3ZpZXMgPSBkYXRhWzJdLm1vdmllcztcbiAgICBsZXQgZGF0YUhpZ2hsaWdodHMgPSBkYXRhWzBdLml0ZW1zO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVsyXS5tb3ZpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICQoJy53cmFwcGVyLW1vdmllcyAucGhvdG9zJykuYXBwZW5kKFxuICAgICAgICAnPGEgaHJlZj1cIiNcIj48aW1nIHNyYz0nICsgZGF0YU1vdmllc1tpXS5pbWFnZXNbMF0udXJsICsgJyAvPjwvYT4nXG4gICAgICApO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFbMF0uaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICQoJy53cmFwcGVyLW1vdmllcy1oaWdobGlnaHRzIC5waG90b3MnKS5hcHBlbmQoXG4gICAgICAgICc8YSBocmVmPVwiI1wiPjxpbWcgc3JjPScgKyBkYXRhSGlnaGxpZ2h0c1tpXS5pbWFnZXNbMF0udXJsICsgJyAvPjwvYT4nXG4gICAgICApO1xuICAgIH1cbiAgICBjYXJyb3Vzc2VsKCk7XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGNhcnJvdXNzZWwoKSB7XG4gICQoJy53cmFwcGVyLW1vdmllcyAucGhvdG9zJykuc2xpY2soe1xuICAgIGRvdHM6IGZhbHNlLFxuICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICBzcGVlZDogMzAwLFxuICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA0OTAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9KTtcbiAgJCgnLndyYXBwZXItbW92aWVzLWhpZ2hsaWdodHMgLnBob3RvcycpLnNsaWNrKHtcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgc3BlZWQ6IDMwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNDkwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSk7XG59XG4iXSwiZmlsZSI6Im1haW4uanMifQ==