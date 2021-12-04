
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
import { getDatabase, push , ref , set , onValue, child} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyB5NA5TpN7kwIu1lLmDvuT6SE82jui3_s4",
  authDomain: "trading-e8b61.firebaseapp.com",
  projectId: "trading-e8b61",
  storageBucket: "trading-e8b61.appspot.com",
  messagingSenderId: "897028553279",
  appId: "1:897028553279:web:9fdc6635aef4d4d9de568a",
  measurementId: "G-NRQ6DQ2YKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
function addTrade(game, trading, _for,cont) {
  const postListRef = ref(db, 'trades/');
  const newPostRef = push(postListRef);
  set(newPostRef, {
    game: ""+game+"",
    trading: ""+trading+"",
    _for : ""+_for+"",
    contact : ""+cont+""
  });
}

const tradesRef = ref(db, 'trades/');
onValue(tradesRef, (trades) => {
  trades.forEach((trade)=>{
const data = trade.val();
  $("#trades").append("<div class='z-depth-3 yellow-text grey darken-1 animate__animated animate__bounce'>Trading <span class='waves-effect red-text'>"+data._for+"</span> for <span class='waves-effect white-text'>"+data.trading+ "</span> in <span class='waves-effect waves-purple pink-text'>"+data.game+"</span><br><br><code class='orange-text' style='user-select:text'>Contact: "+data.contact+"</code></div>")
  })
  

});
$("#form").submit(()=>{
  addTrade($("#t3").val(),$("#t1").val(),$("#t2").val(),$("#t4").val())
})
$( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });

    

