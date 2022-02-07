jQuery(document).ready(function($) {


    $("#timelinediv").load("html/timeline.html", function() {

        var timelines = $(".cd-horizontal-timeline");


        (timelines.length > 0) && initTimeline(timelines);

    });



    $('.smothscroll').on('click', function(e) {
        e.preventDefault();
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {

                $('html, body').animate({
                    scrollTop: target.offset().top - 62
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    $('.carousel').carousel({
        interval: 3500
    });

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





    //#region  JavaScript

    const dataJS = {
        labels: ['.JavaScript', 'JQuery', 'TypeScript'],
        datasets: [{
            label: 'JavaScript',
            data: [35, 35, 30],
            backgroundColor: [
                '#1abc9c',
                '#ecf0f1',
                '#2c3e50'
            ],
            hoverOffset: 4
        }]
    };

    var configJS = {
        type: 'doughnut',
        data: dataJS,
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

    const ctxjs = $('#javascript');
    const chartJS = new Chart(ctxjs, configJS);
    //#endregion




    //#region  Services

    const daTaServices = {
        labels: ['REST API', 'SOAP', 'gRPC'],
        datasets: [{
            label: 'Web Services',
            data: [60, 30, 10],
            backgroundColor: [
                '#1abc9c',
                '#ecf0f1',
                '#2c3e50'
            ],
            hoverOffset: 4
        }]
    };

    var configServices = {
        type: 'doughnut',
        data: daTaServices,
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

    const ctxServices = $('#restapi');
    const chartService = new Chart(ctxServices, configServices);
    //#endregion



    //#region  Web

    const dataWeb = {
        labels: ['Angular', 'ReactJS', 'Vue'],
        datasets: [{
            label: 'Web Techologies',
            data: [85, 10, 5],
            backgroundColor: [
                '#1abc9c',
                '#ecf0f1',
                '#2c3e50'
            ],
            hoverOffset: 4
        }]
    };

    var configWeb = {
        type: 'doughnut',
        data: dataWeb,
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

    const ctxWeb = $('#web');
    const chatWeb = new Chart(ctxWeb, configWeb);
    //#endregion



    //#region  DB

    const dataDB = {
        labels: ['SQL Server', 'MySQL', 'SQLite', 'MongoDB'],
        datasets: [{
            label: 'DataBases',
            data: [55, 20, 15, 10],
            backgroundColor: [
                '#1abc9c',
                '#ecf0f1',
                '#2c3e50',
                '#48B9ED'
            ],
            hoverOffset: 4
        }]
    };

    var configDB = {
        type: 'doughnut',
        data: dataDB,
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

    const ctxDB = $('#databases');
    const chartDB = new Chart(ctxDB, configDB);
    //#endregion




    //#region  Git

    const dataGit = {
        labels: ['GIT', 'TFS'],
        datasets: [{
            label: 'Source Control',
            data: [60, 40],
            backgroundColor: [
                '#1abc9c',
                '#ecf0f1',
            ],
            hoverOffset: 4
        }]
    };

    var configGit = {
        type: 'doughnut',
        data: dataGit,
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

    const ctxGit = $('#control');
    const chartGit = new Chart(ctxGit, configGit);
    //#endregion





});