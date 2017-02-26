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
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');

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

//Add login event
btnLogin.addEventListener('click', e => {

	//Get email and pass
	const email = txtEmail.value;
	const pass = txtPass.value;
	const auth = firebase.auth();
	//Signin
	const promise = auth.signInWithEmailAndPassword(email, pass);
	promise.catch(e => console.log(e.message));
});

//Add email logout event
btnLogout.addEventListener('click', e => {
	firebase.auth().signOut();
});

//Realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {

	var user = firebase.auth().currentUser;

	//USER CONNECTED
	if (firebaseUser) {

		//cambiar a ui user conected
		$('.user-hover').removeClass('user-hide');
		$('.signup, .login').addClass('user-hide');

		//cerrar sign modals & reset sign/login inputs
		$('.signup-modal, .login-modal').addClass('sm-hide');
		$('main, nav, footer').css('opacity', '1');

	}

	//Usr DISCONNECTED
	else {

		//cambiar a ui user disconnected
		$('.user-hover').addClass('user-hide');
		$('.signup, .login').removeClass('user-hide');

	}

});
