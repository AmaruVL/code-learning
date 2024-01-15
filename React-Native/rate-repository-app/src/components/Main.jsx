import { Text, View } from "react-native";
import { RepositoryList } from "./RepositoryList";
import { AppBar } from "./AppBar";
import { Redirect, Route, Routes } from "react-router-native"

export const Main = () => {
  return (
    <View style={{ flexGrow: 1, marginBottom: 63}}>
      <AppBar/>
      <Routes>
        <Route path="/" exact element={<RepositoryList/>} />
        <Route path="/signin" exact 
          element={<Text>Working on in!</Text>} 
        />
        {/* <Redirect to='/'/> */}
      </Routes>
    </View>
  )
}
