import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { firebaseConfig } from "./configure"

const firebaseApp = initializeApp(firebaseConfig)
const firebaseDb = getFirestore(firebaseApp)

export { firebaseApp, firebaseDb }
