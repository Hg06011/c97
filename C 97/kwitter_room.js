const firebaseConfig = {
      apiKey: "AIzaSyBVnB870kG2W-Gew5QjpiYNL5VKmLC1Y90",
      authDomain: "kwitter-683cb.firebaseapp.com",
      databaseURL: "https://kwitter-683cb-default-rtdb.firebaseio.com",
      projectId: "kwitter-683cb",
      storageBucket: "kwitter-683cb.appspot.com",
      messagingSenderId: "947344972114",
      appId: "1:947344972114:web:5d894fff527bc914f5828b"
    };
    
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "welcome "+ user_name + "!";

function addroom(){
Room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(Room_name).update({purpose:"Room_name"});
localStorage.setItem("room_name",Room_name);
window.location =" kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name" + Room_names);
row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#"+ Room_names+ "</div><hr>";
   document.getElementById("output").innerHTML+= row;
//End code
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}



