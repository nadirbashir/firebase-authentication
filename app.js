let signup = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    // console.log(email.value)
    // console.log(password.value)

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    console.log(userCredential)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(error.message)
  });

}

let login = () =>{
    let email = document.getElementById("login-email")
    let password = document.getElementById("login-password")
    // console.log(email.value)
    // console.log(password.value)

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    // var user = userCredential.user;
    console.log("login successful")
    console.log(userCredential)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error.message)
  });

}

const facebook_login = () =>{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;
    console.log("user===>",user.displayName)
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(error.message)
    // ...
  });
}

const signout = () =>{
    firebase.auth().Signout()
        .then(()=>{
            window.location = 'login.html'
        })
        .catch(()=>{
            
        })
}