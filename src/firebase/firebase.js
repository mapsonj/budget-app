import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDYZR2y0FwcQbtpT2A8t2MPobrgxeNsxGM",
    authDomain: "budgetapp-c6c14.firebaseapp.com",
    databaseURL: "https://budgetapp-c6c14.firebaseio.com",
    projectId: "budgetapp-c6c14",
    storageBucket: "budgetapp-c6c14.appspot.com",
    messagingSenderId: "116903920585"
  };

  firebase.initializeApp(config);
  const database = firebase.database();

  database.ref().set({
  	name: 'Jake',
  	age: 37,
  	isSingle: false,
  	location: {
  		city: 'Houston',
  		state: 'Texas',
  		country: 'United States',
  	}
  });

  database.ref('attributes').set({
  	height: 80,
  	weight: 260
  });
