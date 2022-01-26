
var firebaseConfig = {
    apiKey: "AIzaSyDO5ynFiXrRg7D6QCgFVIV5qvgRCKAyd_Y",
    authDomain: "chattapp-dc56b.firebaseapp.com",
    databaseURL: "https://chattapp-dc56b-default-rtdb.firebaseio.com",
    projectId: "chattapp-dc56b",
    storageBucket: "chattapp-dc56b.appspot.com",
    messagingSenderId: "705904214179",
    appId: "1:705904214179:web:c421580160a1ecc3b83f16",
    measurementId: "G-133DHNNY1B"
    };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

 } });  }); }
getData();
function send(){
 msg=document.getElementById("msg").ariaValueMax;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
 });
 document.getElementById("msg").value="";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
