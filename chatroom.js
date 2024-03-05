var firebaseConfig = {
    apiKey: "AIzaSyA5cA8HaI-nE11c9f3jEAMoP-IIVCiemlQ",
    authDomain: "kwitter-9fc62.firebaseapp.com",
    databaseURL: "https://kwitter-9fc62-default-rtdb.firebaseio.com",
    projectId: "kwitter-9fc62",
    storageBucket: "kwitter-9fc62.appspot.com",
    messagingSenderId: "428835228186",
    appId: "1:428835228186:web:e035bbe38509c28a401fa3",
    measurementId: "G-QYR3P68RYS"
  };
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
   
    //End code
    });});}
getData();
