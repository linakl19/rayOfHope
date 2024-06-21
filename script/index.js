
  document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
      type: 'carousel',
      startAt: 1,
      perView: 1,
      autoplay: 3000, // Time in milliseconds
      hoverpause: true,
      animationDuration: 800,
      animationTimingFunc: 'ease-in-out',
      breakpoints: {
        800: {
          perView: 1
        },
        480: {
          perView: 1
        }
      }
    }).mount();
  });
