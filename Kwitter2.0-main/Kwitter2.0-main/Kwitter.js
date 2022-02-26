var firebaseConfig = {
    apiKey: "AIzaSyD5Zcecfcj6Vdb83pzlnKYDnIE3tgw_GYA",
    authDomain: "yes-chat-d15c0.firebaseapp.com",
    databaseURL: "https://yes-chat-d15c0-default-rtdb.firebaseio.com",
    projectId: "yes-chat-d15c0",
    storageBucket: "yes-chat-d15c0.appspot.com",
    messagingSenderId: "928657980791",
    appId: "1:928657980791:web:9443b26bec48d52f627572",
    measurementId: "G-CT07EHCHWV"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name=document.getElementById("user_name").value ;
    
    firebase.database().ref("/").child(user_name).update({
    purpose : "adding user name"
});
    localStorage.setItem("user_name", user_name);
    window.location="kwitter_room.html";
}
