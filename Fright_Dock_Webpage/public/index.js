firebase.auth().onAuthStateChanged(function(user){
  if(user){
    document.getElementById("login-div").style.display = "none";
    document.getElementById("select-div").style.display = "block";
    document.getElementById("ship-div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){
      var email_id = user.email;
      document.getElementById("email_field").innerHTML = "Welcome : " + email_id;
    }
  }
  else{
    document.getElementById("login-div").style.display = "block";
    document.getElementById("select-div").style.display = "none";
    document.getElementById("ship-div").style.display = "none";
  }
});

function signIN() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });
}
