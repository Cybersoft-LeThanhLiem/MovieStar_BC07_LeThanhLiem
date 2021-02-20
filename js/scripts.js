$('.carousel').carousel({
    interval: 3000
})

$(document).ready(function () {
    $(".venobox").venobox();
});

$(document).ready(function () {
    $(".movie-nab").click(function () {
        $(".movie-nab").removeClass("active");
        $(this).addClass("active");
    });
});