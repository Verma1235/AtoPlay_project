$(document).ready(function () {

    let sideMenuScr = $('#SideMenuBgScreen');
    let sideMenu = $('#SideMenu');
    let sideMenuBtn = $('#SideMenuToggleBtn');

    //  sideMenuScr.fadeOut(300);
    //   sideMenu.css('right', '-250px');

    let flag = false;
    sideMenuBtn.on('click', function () {
        if (!flag) {
            sideMenuScr.addClass('bgFade');
            sideMenu.css({ 'transform': 'translateX(0)' });
            flag = true;
        } else {
            sideMenuScr.removeClass('bgFade');
            sideMenu.css({ 'transform': 'translateX(250px)' });
            flag = false;
        }
    });

    sideMenuScr.on('click', function () {
        sideMenuScr.removeClass('bgFade');
        sideMenu.css({ 'transform': 'translateX(250px)' });
        flag = false;
    });

    // after selection of side menu options
    let sideMenuopt = $('#SideMenu ul li');

    sideMenuopt.on('click', function () {
        sideMenuScr.removeClass('bgFade');
        sideMenu.css({ 'transform': 'translateX(250px)' });
        flag = false;
    });



    // toast message box js

    let box = $("#ToastD");
    box.hide();

    window.ToastD = async (msg = '', dur = 3000, type = 's') => {
        box.delay(300).show();
        box.html(msg);
        switch (type) {
            case 's':
                box.css({ 'background': "var(--appbgLinear)" });
                break;
            case 'w':
                box.css({ 'background': "linear-gradient(to right,rgba(186, 123, 7, 0.896),rgba(207, 104, 6, 0.912),rgba(188, 5, 201, 0.8))" });
                break;
            case 'd':
                box.css({ 'background': "linear-gradient(to right,rgba(186, 40, 7, 0.9),rgba(207, 76, 6, 0.89),rgba(201, 5, 145, 0.8))" });
                break;
            case 'i':
                box.css({ 'background': "var(--appbgLinear)" });
                break;
            default:
                break;
        }
        setTimeout(() => {
            box.delay(500).hide();

        }, dur);



    }







});