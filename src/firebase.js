import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA-uhpptKN6p-gHjcFGH277knJYk99JuCw",
    authDomain: "tesla-clone-27feb.firebaseapp.com",
    projectId: "tesla-clone-27feb",
    storageBucket: "tesla-clone-27feb.appspot.com",
    messagingSenderId: "370540902461",
    appId: "1:370540902461:web:068c75363489667062d254",
    measurementId: "G-5VBWGE9Q59"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebaseApp.auth()

  export { auth }