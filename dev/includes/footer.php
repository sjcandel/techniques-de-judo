</body>

<script>
    $("#open-menu").click(function () {
        $("#menu").css("left", "0");
        $("#open-menu").css("display", "none");
        $("#close-menu").css("display", "block");
    });
    $("#close-menu").click(function () {
        $("#menu").css("left", "-80%");
        $("#open-menu").css("display", "block");
        $("#close-menu").css("display", "none");
    });

    /*
        $(window).resize(function () {
            if ($(window).width() <= 768) {
                $("#menu").on("click", "li", function (event) {
                    $("#menu").css("left", "-80%");
                    $("#open-menu").css("display", "block");
                    $("#close-menu").css("display", "none");
                });
            }
        });
    */



    // $("#menu ul li").click(function () {
    //     var $frame = $('#immobilisations-iframe');
    //     $frame.attr('src', '');
    // })



    // function windowSize() {

    //     if ($(window).width() <= 768) {
    //         $("#menu").on("click", "li", function (event) {
    //             $("#menu").css("left", "-80%");
    //             $("#open-menu").css("display", "block");
    //             $("#close-menu").css("display", "none");
    //         });
    //     }


    // }
    // windowSize();



</script>

</html>