/* toggler function */
(function () {
    var toggler_1 = document.querySelector('.toggler_1');
    var toggler_2 = document.querySelector('.toggler_2');
    var toggler_3 = document.querySelector('.toggler_3');
    icon = document.querySelector('.nav_manu_fade');
    navbars = document.querySelector('.nav_bar');
    main = document.querySelector('main');
    footer = document.querySelector('footer');

    function change() {
        toggler_1.classList.toggle('animation0');
        toggler_2.classList.toggle('hide');
        toggler_3.classList.toggle('animation2');
        navbars.classList.toggle('show');
        footer.classList.toggle('hide');
        main.classList.toggle('hide');
    }
    icon.addEventListener('click', change);
})();

(function () {
    var togglers_1 = document.querySelector('.togglers_1');
    var togglers_2 = document.querySelector('.togglers_2');
    var togglers_3 = document.querySelector('.togglers_3');
    icon = document.querySelector('.nav_manu_fade_1');
    navbars = document.querySelector('.nav_bar');
    main = document.querySelector('main');
    footer = document.querySelector('footer');
    body = document.querySelector('body');

    function changes() {
        togglers_1.classList.toggle('animation0');
        togglers_2.classList.toggle('hide');
        togglers_3.classList.toggle('animation2');
        navbars.classList.toggle('show');
        footer.classList.toggle('hide');
        main.classList.toggle('hide');
        body.classList.toggle('dis_hide');
    }
    icon.addEventListener('click', changes);
})();

/* Play Button */

$(document).ready(function () {
    const myModal = document.getElementById('myModal')
    const myInput = document.getElementById('myInput')
    
    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus()
    })    
});

/* booking page validation */

$(document).ready(function () {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    //Regular Expression - RegEx.
    var $TextAreaRegEx = /^([a-zA-Z])$/;


    var villa_nameFlag = false, dateFlag = false, nightsFlag = false, adultsFlag = false, childrenFlag = false, textarea_conFlag = false;

    $("#villa_name").blur(function () {
        $("#villa_nameValidate").empty();
        if ($("#villa_name").val() === "") {
            villa_nameFlag = false;
        }
        else {
            villa_nameFlag = true;
        }
    });

    $("#date").blur(function () {
        $("#dateValidate").empty();
        if ($("#date").val() === "") {
            dateFlag = false;
        }
        else {
            dateFlag = true;
        }
    });

    $("#nights").blur(function () {
        $("#nightsValidate").empty();
        if ($("#nights").val() === "") {
            nightsFlag = false;
        }
        else {
            nightsFlag = true;
        }
    });

    $("#adults").blur(function () {
        $("#adultsValidate").empty();
        if ($("#adults").val() === "") {
            adultsFlag = false;
        }
        else {
            adultsFlag = true;
        }
    });

    $("#children").blur(function () {
        $("#childernValidate").empty();
        if ($("#children").val() === "") {
            childrenFlag = false;
        }
        else {
            childrenFlag = true;
        }
    });

    $("#textarea_con").blur(function () {
        $("#textarea_conValidate").empty();
        if ($("#textarea_con").val() === "") {
            textarea_conFlag = false;
        }
        else {
            textarea_conFlag = true;
        }
    });



    $("#submit_first").click(function () {
        $("#villa_nameValidate").empty();
        if ($("#villa_name").val() === "") {
            villa_nameFlag = false;
        }
        else {
            villa_nameFlag = true;
        }

        $("#dateValidate").empty();
        if ($("#date").val() === "") {
            dateFlag = false;
        }
        else {
            dateFlag = true;
        }

        $("#nightsValidate").empty();
        if ($("#nights").val() === "") {
            nightsFlag = false;
        }
        else {
            nightsFlag = true;
        }

        if (villa_nameFlag == true && dateFlag == true && nightsFlag == true) {
            $(".next").click(function () {
                current_fs = $(this).parent();
                next_fs = $(this).parent().next();

                //Add Class Active
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

                //show the next fieldset
                next_fs.show();
                //hide the current fieldset with style
                current_fs.animate({ opacity: 0 }, {
                    step: function (now) {
                        // for making fielset appear animation
                        opacity = 1 - now;

                        current_fs.css({
                            'display': 'none',
                            'position': 'relative'
                        });
                        next_fs.css({ 'opacity': opacity });
                    },
                    duration: 600
                });
            });
        }
        else {
            alert("Invalid Inputs..!!");
        }
    });
    $("#submit").click(function () {
        $("#adultsValidate").empty();
        if ($("#adults").val() === "") {
            adultsFlag = false;
        }
        else {
            adultsFlag = true;
        }

        $("#childrenValidate").empty();
        if ($("#children").val() === "") {
            childrenFlag = false;
        }
        else {
            childrenFlag = true;
        }

        $("#textarea_conValidate").empty();
        if ($("#textarea_con").val() === "") {
            textarea_conFlag = false;
        }
        else {
            textarea_conFlag = true;
        }

        if (adultsFlag == true && childrenFlag == true && textarea_conFlag == true) {
            $(".submit").click(function () {
                current_fs = $(this).parent();
                next_fs = $(this).parent().next();

                //Add Class Active
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

                //show the next fieldset
                next_fs.show();
                //hide the current fieldset with style
                current_fs.animate({ opacity: 0 }, {
                    step: function (now) {
                        // for making fielset appear animation
                        opacity = 1 - now;

                        current_fs.css({
                            'display': 'none',
                            'position': 'relative'
                        });
                        next_fs.css({ 'opacity': opacity });
                    },
                    duration: 600
                });
            });
        }
        else {
            alert("Invalid Inputs..!!");
        }
    });

    $(".previous").click(function () {
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 600
        });
    });

    $('.radio-group .radio').click(function () {
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
    });

    $(".submit").click(function () {
        return false;
    })

});

/* swiper slider */
$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
});
