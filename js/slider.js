$(document).ready(function() {
  $("#cards").owlCarousel({
    items: 1,
    responsive: {
      480: { items: 1 },
      768: { items: 2 },
      1000: { items: 3 }
    },
    nav: true,
    navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    pagination: true,
    autoPlay: true,
    loop: true
  });
});
