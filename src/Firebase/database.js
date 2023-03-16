import { firebaseDb } from ".";

import { addDoc,collection,getDocs,query,where } from "firebase/firestore";


async function addTest(testObj){
    try {
        await addDoc(collection(firebaseDb,"tests"),testObj);
        //console.log("Test is Added!!");
    } catch (error) {
        console.log(error);
    }
}
async function getTestWithId(testId){
    try {
        let sel_test;
        let q = query(collection(firebaseDb,"tests"),where("_id","==",testId));
        let scope = await getDocs(q);
        scope.forEach(det => {
            sel_test = det.data()
        })
        return sel_test
    } catch (error) {
        console.log(error);
    }
}

export {
    addTest,
    getTestWithId
}