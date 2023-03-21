import { firebaseDb } from "."

import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore"

async function addTest(testObj) {
  try {
    await setDoc(doc(firebaseDb, "tests", testObj._id), testObj)
    //console.log("Test is Added!!");
  } catch (error) {
    console.log(error)
  }
}
async function getTestWithId(testId) {
  try {
    let sel_test
    let q = query(collection(firebaseDb, "tests"), where("_id", "==", testId))
    let scope = await getDocs(q)
    //console.log(scope);
    scope.forEach((det) => {
      sel_test = det.data()
    })
    return sel_test
  } catch (error) {
    console.log(error)
  }
}

export { addTest, getTestWithId }
