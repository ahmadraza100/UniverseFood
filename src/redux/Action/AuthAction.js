import { auth, db } from "../../Components/config/firebase";


export const LOGIN = "Login";
export const LOGOUT = "LOGOUT";

export const doLogin = (user) => async (dispatch) => {

  try {

    // firebase login
    console.log(user.email);

    const userCredential = await auth.signInWithEmailAndPassword(user.email, user.password);
    var userCred = userCredential.user;

    const userr = await db.collection("users").get().then((users) => {
      let data;
      users.forEach((val) => {
        if (userCred.uid === val.data().uid) {
          data = val.data()
        }

      })
      return data
    })


    if (userr) {
      const profilee = {
        user: userCred,
        profile: userr
      }


      dispatch({
        type: LOGIN,
        payload: profilee,
      });
      alert("USER Logged In")

    }

  } catch (error) {
    alert(JSON.stringify(error.message))
    console.log("error", error);
  }
};


export const doSignup = (user) => async (dispatch) => {

  try {
    // firebase login
    const userCredential = await auth.createUserWithEmailAndPassword(user.email, user.password);

    var userData = userCredential.user;
    await db.collection("users").add({
      ...user,
      uid: userData.uid
    })

    const userrr = await db.collection("users").get().then((users) => {
      let data;
      users.forEach((val) => {
        if (userData.uid === val.data().uid) {
          data = val.data()
        }

      })
      return data
    })




    if (userrr) {

      const profileee = {
        user: userData,
        profile: userrr
      }

      dispatch({
        type: LOGIN,
        payload: profileee,
      });
      alert("User Registered Successfully");
    }




  } catch (error) {
    console.log("error", error);
    alert(error.message)
  }
};



export const doLogout = () => async (dispatch) => {
  try {
    // firebase login
    const res = await auth.signOut();
    localStorage.clear();
    console.log("user", res);
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    alert(JSON.stringify(error))
    console.log("error", error);
  }
};