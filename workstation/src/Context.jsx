import React from "react";
const AppContext = React.createContext();

const AppProvider = ({children})=>{
    return <AppContext.Provider value="AMAN">
{children}
    </AppContext.Provider>
}

const getRandomUser = async function () {
    try {
      const data = await axios.get("/api/users/random_user");
      return data;
    } catch(err) {
      console.log("error: ", err);
    }
  }

export{AppContext ,AppProvider}