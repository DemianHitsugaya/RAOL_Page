jQuery(document).ready(function($) {


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


    // const data1 = {
    //     datasets: [{
    //             label: '70',
    //             data: 70,
    //             backgroundColor: "#1abc9c"
    //         },
    //         {
    //             label: '30',
    //             data: 30,
    //             backgroundColor: "#ecf0f1"
    //         }
    //     ]
    // }

    // var config1 = {
    //     type: 'doughnut',
    //     data: data1,
    //     options: {
    //         responsive: true,
    //         plugins: {
    //             legend: {
    //                 position: 'top',
    //             },
    //         }
    //     },
    // };

    // var chartNet = new Chart(document.getElementById('net'), config1);

    // var doughnutData = [{
    //         value: 90,
    //         color: "#1abc9c"
    //     },
    //     {
    //         value: 10,
    //         color: "#ecf0f1"
    //     }
    // ];
    // var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);

    // var doughnutData = [{
    //         value: 65,
    //         color: "#1abc9c"
    //     },
    //     {
    //         value: 35,
    //         color: "#ecf0f1"
    //     }
    // ];
    // var myDoughnut = new Chart(document.getElementById("wordpress").getContext("2d")).Doughnut(doughnutData);

    // var doughnutData = [{
    //         value: 80,
    //         color: "#1abc9c"
    //     },
    //     {
    //         value: 20,
    //         color: "#ecf0f1"
    //     }
    // ];
    // var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

    // var doughnutData = [{
    //         value: 70,
    //         color: "#1abc9c"
    //     },
    //     {
    //         value: 30,
    //         color: "#ecf0f1"
    //     }
    // ];
    // var myDoughnut = new Chart(document.getElementById("photoshop").getContext("2d")).Doughnut(doughnutData);

    // var doughnutData = [{
    //         value: 50,
    //         color: "#1abc9c"
    //     },
    //     {
    //         value: 50,
    //         color: "#ecf0f1"
    //     }
    // ];
    // var myDoughnut = new Chart(document.getElementById("illustrator").getContext("2d")).Doughnut(doughnutData);
});