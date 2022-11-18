
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/Routes";

export default function App() {
    return(
      <>

        <StatusBar barStyle={"light-content" } backgroundColor="#000"/>
          <NavigationContainer>
          <Routes/>
          </NavigationContainer>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#FFF",
        alignItems: 'center',
        justifyContent: 'center'
    }
})