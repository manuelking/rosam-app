import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDGZvEYi9cEFH5PtO7MJb3eM4LZYabH3Js',
  authDomain: 'brtr-team.firebaseapp.com',
  projectId: 'brtr-team',
  storageBucket: 'brtr-team.appspot.com',
  messagingSenderId: '675710330646',
  appId: '1:675710330646:web:ed0bf4f5c51ac54d989237',
}

const app = initializeApp(firebaseConfig)
export const STORAGE = getStorage(app)
export const DB = getFirestore(app)
