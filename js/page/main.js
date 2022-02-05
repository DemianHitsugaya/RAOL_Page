$(document).ready(function($) {


    $("#timelinediv").load("html/timeline.html", function() {

        var timelines = $(".cd-horizontal-timeline");


        (timelines.length > 0) && initTimeline(timelines);

    });



    // $('.smothscroll').on('click', function(e) {
    //     e.preventDefault();
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         if (target.length) {

    //             $('html, body').animate({
    //                 scrollTop: target.offset().top - 62
    //             }, 1500, 'easeInOutExpo');
    //         }
    //     }
    // });

    // $('.carousel').carousel({
    //     interval: 3500
    // });

    //#region Chart C#
    const datacvb = {
        labels: ['C#', 'VB .Net'],
        datasets: [{
            label: '.Net',
            data: [85, 15],
            backgroundColor: [
                '#1abc9c',
                '#ecf0f1'
            ],
            hoverOffset: 4
        }]
    };

    var configCVB = {
        type: 'doughnut',
        data: datacvb,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#fff'
                    }
                },
            }
        },
    };

    const ctxcvb = $('#cvb');
    const chartCVB = new Chart(ctxcvb, configCVB);

    //#endregion

    //#region  Chart .Net & Net Core 

    const dataNet = {
        labels: ['.Net', '.Net Core'],
        datasets: [{
            label: '.Net',
            data: [55, 45],
            backgroundColor: [
                '#1abc9c',
                '#ecf0f1'
            ],
            hoverOffset: 4
        }]
    };

    var configNet = {
        type: 'doughnut',
        data: dataNet,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#fff'
                    }
                },
            }
        },
    };

    const ctxNet = $('#net');
    const chartNet = new Chart(ctxNet, configNet);
    //#endregion

});