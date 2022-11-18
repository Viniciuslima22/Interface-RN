import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./Stack/Models";
import {TouchableOpacity} from 'react-native'
import  Icons  from "react-native-vector-icons/AntDesign";

import { Principal } from "../pages/Principal";
import { Detail } from "../pages/Detail";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function() {
    return(
        <Navigator initialRouteName="Principal" >
            <Screen name="Principal" component={Principal} />
            <Screen name="Detail" component={Detail}
               options={{
                headerRight: () => (
                  <TouchableOpacity style={{ marginRight: 15 }}>
                     <Icons name="shoppingcart" size={25} color='#000'/>
                    
                  </TouchableOpacity>  
                )
            }} />
            
        </Navigator>
    )
}