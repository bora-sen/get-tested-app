import { firebaseConfig }  from './configure'
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseApp = initializeApp(firebaseConfig);
const firebaseDb = getFirestore(firebaseApp);


export {
    firebaseApp,
    firebaseDb
}