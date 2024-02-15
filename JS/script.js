$(window).on("scroll", function () {
    if ($(".navbar").offset().top > 40) {
        $(".navbar").addClass("navbar-fixed");
    } else {
        $(".navbar").removeClass("navbar-fixed");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin

// $(document).ready(function() {
//     $(window).on("scroll", function () {
//         if($(this).scrollTop() > $("header").height()) {
//             $("header").addClass("scroll-header");
//         } else {
//             $("header").removeClass("scroll-header");
//         }
//     });
// });

// $(document).ready(function() {
//     $(window).on("scroll", function () {
//         if ($(window).scrollTop() > $("header").height()) {
//             $(".navbar-nav .nav-link").addClass("scroll-nav-link");
//         } else {
//             $(".navbar-nav .nav-link").removeClass("scroll-nav-link");
//         }
//     });
// });