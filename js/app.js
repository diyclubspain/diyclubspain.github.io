// Init Firebase
var config = {
    apiKey: "AIzaSyBtVyUrAa0d6IjmcAuU4rBAkvnBrt-gPc8",
    authDomain: "diyclub-a881d.firebaseapp.com",
    databaseURL: "https://diyclub-a881d.firebaseio.com",
    storageBucket: "diyclub-a881d.appspot.com",
    messagingSenderId: "27081121513"
};
firebase.initializeApp(config);


const txtEmail = document.getElementById('txtEmail');
const txtPass = document.getElementById('txtPass');
const btnSignup = document.getElementById('btnSignup');
const btnSignin = document.getElementById('btnSignin');
const btnLogout = document.getElementById('btnLogout');

//Add login event
btnSignin.addEventListener('click', e => {

    //Get email and pass
    const email = txtEmail.value;
    const pass = txtPass.value;
    const auth = firebase.auth();
    //Signin
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

});

//Add signup event
btnSignup.addEventListener('click', e => {

    //Get email and pass
    const email = txtEmail.value;
    const pass = txtPass.value;
    const auth = firebase.auth();
    //Signin
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

});

//Add email logout event
btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
});

//Add realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {

    //Usr conectado
    if(firebaseUser) {

        console.log(firebaseUser);
        btnLogout.classList.remove('t-hide');
        $('.ultimo').show();

    }

    //Usr conectado
    else {

        console.log('Not auth');
        btnLogout.classList.add('t-hide');
        $('.ultimo').hide();

    }

});
