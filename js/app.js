
// Init Firebase
var config = {
	apiKey: "AIzaSyBtVyUrAa0d6IjmcAuU4rBAkvnBrt-gPc8",
	authDomain: "diyclub-a881d.firebaseapp.com",
	databaseURL: "https://diyclub-a881d.firebaseio.com",
	storageBucket: "diyclub-a881d.appspot.com",
	messagingSenderId: "27081121513"
};
firebase.initializeApp(config);


const signEmail = document.getElementById('signEmail');
const logEmail = document.getElementById('logEmail');
const signPass = document.getElementById('signPass');
const logPass = document.getElementById('logPass');
const btnSignup = document.getElementById('btnSignup');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');

//Add signup event
btnSignup.addEventListener('click', e => {

	//Get email and pass
	const sEmail = signEmail.value;
	const sPass = signPass.value;
	const auth = firebase.auth();
	//Signin
	const promise = auth.createUserWithEmailAndPassword(sEmail, sPass);
	promise.catch(e => console.log(e.message));
});

//Add login event
btnLogin.addEventListener('click', e => {

	//Get email and pass
	const lEmail = logEmail.value;
	const lPass = logPass.value;
	const auth = firebase.auth();
	//Signin
	const promise = auth.signInWithEmailAndPassword(lEmail, lPass);
	promise.catch(e => console.log(e.message));
});

//Add email logout event
btnLogout.addEventListener('click', e => {
	firebase.auth().signOut();
});
