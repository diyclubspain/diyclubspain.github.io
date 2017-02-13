// Init Firebase
var config = {
    apiKey: "AIzaSyDxSdWG4IdIIFM_Pf80z1Am8-utWYf86G8",
    authDomain: "diyclub-b710c.firebaseapp.com",
    databaseURL: "https://diyclub-b710c.firebaseio.com",
    storageBucket: "diyclub-b710c.appspot.com",
    messagingSenderId: "1088947908963"
};
firebase.initializeApp(config);


// Init Bienvenidos
$('#bienvenidos').firstVisitPopup({
    cookieName: 'homepage',
    showAgainSelector: '#show-message'
});
