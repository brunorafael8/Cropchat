import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCtzeSElMZtZMvKoaHXR9kVL3xjzEyDC0I',
  authDomain: 'cropchat-3baa7.firebaseapp.com',
  databaseURL: 'https://cropchat-3baa7.firebaseio.com/',
  storageBucket: 'https://cropchat-3baa7.firebaseio.com',
  messagingSenderId: '275901090487'
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}
