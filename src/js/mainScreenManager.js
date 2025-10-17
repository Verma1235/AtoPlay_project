
$(document).ready(function () {

    let main = $('#main');
    let btnAbout = $('#AboutBtn'); //about id object
    let btnHelps = $('#HelpsBtn');
    let btnHome = $('#HomeBtn');



    //by default load home index page to the main div in index.html 
    main.load('components/Home.html');

    // load about page when click to the about btn
    btnAbout.on("click", () => {

        main.load('components/AboutUs.html');
    });

    // load helps page when click to the help btn

    btnHelps.on("click", () => {
        main.load('components/helps.html');
    });

    // load home page when click to the home btn

    btnHome.on("click", () => {
        main.load('components/Home.html');
    });



    //   ToastD("hii",5000,'w');

});
