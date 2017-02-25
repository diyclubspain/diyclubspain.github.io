//Realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {

    //USER CONNECTED
    if(firebaseUser) {

        //cambiar a ui user conected


        //cerrar sign modals
        $('.signup-modal, .login-modal').addClass('sm-hide');
        $('main, nav, footer').css('opacity', '1');


    }

    //Usr DISCONNECTED
    else {

        //cambiar a ui user disconnected
    }

});
