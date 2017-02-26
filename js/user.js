//Realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {

    var user = firebase.auth().currentUser;

    //USER CONNECTED
    if(firebaseUser) {

        //cambiar a ui user conected
        $('.user-hover').removeClass('user-hide');
        $('.signup, .login').addClass('user-hide');

        //cerrar sign modals
        $('.signup-modal, .login-modal').addClass('sm-hide');
        $('main, nav, footer').css('opacity', '1');

        //debug
        var userDB = firebase.database().ref('users/' + user.email);

    }

    //Usr DISCONNECTED
    else {

        //cambiar a ui user disconnected
        $('.user-hover').addClass('user-hide');
        $('.signup, .login').removeClass('user-hide');

    }

});
