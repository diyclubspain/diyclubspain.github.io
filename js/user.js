//Realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {

    //USER CONNECTED
    if(firebaseUser) {

        //cambiar a ui user conected
        btnLogout.classList.remove('t-hide');

        //cerrar sign modal
        $('.signup-modal').addClass('sm-hide');
        $('main, nav, footer').css('opacity', '1');


    }

    //Usr DISCONNECTED
    else {

        //cambiar a ui user disconnected
        btnLogout.classList.add('t-hide');
    }

});
