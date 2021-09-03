
import { db } from "../../Components/config/firebase";

export const MakeRestaurants = (data) => async (dispatch) => {
    try {
    
       await db.collection("restaurants").add(data)
       alert("You have create the Restaurant Successfully")
      
      dispatch({
        type:"NewRestaurant",
        payload:data
      });
      window.location.reload(false);

    } catch (error) {
      alert(JSON.stringify(error))
      console.log("error", error);
    }
  };





export const FetchRestaurant = () => async (dispatch) => {
    try {
      var user = JSON.parse(localStorage.getItem('info'));
      const restaurant = await db.collection("restaurants").get().then((restaurants) => {
        let data;
        restaurants.forEach((val) => {
          if (user.uid === val.data().ouid) {
            data = val.data()
          }
  
        })
        return data
      })

   const res = await db.collection("restaurants").get().then((restaurants) => {
    let data;
      restaurants.forEach((val) => {
        if (user.uid === val.data().ouid) {
          data = val.id
        }

      })
      return data
    })

     let dishes = await db.collection("restaurants").doc(res).collection("products").get().then((items) => {
      let data = [];
      items.forEach((val) => {
          data.push(val.data().dat)
      })
      return data
  })
      if(restaurant){  
       let dashboard={
         restaurant:restaurant,
         dish:dishes
       }

       
        dispatch({
          type:"FetchRestaurant",
          payload:dashboard
        });
      }
      }
     catch (error) {
      alert(JSON.stringify(error))
      console.log("error", error);
    }
  };


  
export const Details = (param) => async (dispatch) => {
  try {


    const restaurant = await db.collection("restaurants").get().then((restaurants) => {
      let data;
      restaurants.forEach((val) => {
        if (param === val.data().ouid) {
          data = val.data()
        }

      })
      return data
    })

 const res = await db.collection("restaurants").get().then((restaurants) => {
  let data;
    restaurants.forEach((val) => {
      if (param=== val.data().ouid) {
        data = val.id
      }

    })
    return data
  })

   let dishes = await db.collection("restaurants").doc(res).collection("products").get().then((items) => {
    let data = [];
    items.forEach((val) => {
        data.push(val.data().dat)
    })
    return data
})
    if(restaurant){ 
      let dashboard={
        restaurant:restaurant,
        dish:dishes
      }
      
  
     
      dispatch({
        type:"FetchRestaurant",
        payload:dashboard
      });
    }
    }
   catch (error) {
    alert(JSON.stringify(error))
    console.log("error", error);
  }
};


  
export const FetchRestaurants = () => async (dispatch) => {
  try {



    const restaurant = await db.collection("restaurants").get().then((restaurants) => {
      let data =[];
      restaurants.forEach((val) => {
        data.push(val.data())

      })
      return data
    })
    if(restaurant){
      console.log(restaurant)   
      dispatch({
        type:"FetchRestaurants",
        payload:restaurant
      });
    }
    }
   catch (error) {
    alert(JSON.stringify(error))
    console.log("error", error);
  }
};

  

// AddDish

export const AddDish = (dat) => async (dispatch) => {
  try {
    var user = JSON.parse(localStorage.getItem('info'));
    const res = await db.collection("restaurants").get().then((restaurants) => {
    let data;
      restaurants.forEach((val) => {
        if (user.uid === val.data().ouid) {
          data = val.id
        }

      })
      return data
    })

     await db.collection("restaurants").doc(res).collection("products").add({
     dat
  }).then((data) => {
      console.log(data.id);
      console.log("Document has added")
  }).catch((err) => {
      console.log(err)
  })
    if(res){   
      dispatch({
        type:"AddDish",
        payload:res
      });
    }
    }
   catch (error) {
    alert(JSON.stringify(error))
    console.log("error", error);
  }
};

