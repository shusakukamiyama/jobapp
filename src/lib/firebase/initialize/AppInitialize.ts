import firebase from 'firebase';

export const appInitilize = async () => {
    const firebaseConfig = {
        apiKey: 'AIzaSyBsSfcbEkOo64Z4Ay0BZHPer2tMZdcpCP4',
        authDomain: 'jobapp-dev.firebaseapp.com',
        databaseURL: 'https://jobapp-dev.firebaseio.com',
        projectId: 'jobapp-dev',
        storageBucket: 'jobapp-dev.appspot.com',
        messagingSenderId: '134062550540',
        appId: '1:134062550540:web:e334b434fb4a3693c20829'
    };

    await firebase.initializeApp(firebaseConfig);
};
