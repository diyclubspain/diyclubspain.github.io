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
const txtName = document.getElementById('txtName');
const btnSignup = document.getElementById('btnSignup');
const btnSignin = document.getElementById('btnSignin');
const btnLogout = document.getElementById('btnLogout');

//Add signup event
btnSignup.addEventListener('click', e => {

    //Get email and pass
    const email = txtEmail.value;
    const pass = txtPass.value;
    const auth = firebase.auth();
    //Signin
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => alert('Usuario creado'));

});

//Add login event
btnSignin.addEventListener('click', e => {

    //Get email and pass
    const email = txtEmail.value;
    const pass = txtPass.value;
    const auth = firebase.auth();
    //Signin
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => alert('Usuario regitrado'));

});

//Add email logout event
btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
});
