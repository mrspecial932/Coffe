import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Route";
import Home from "../Screens/Home/Home";
import SingleCard from "../Screens/SignleCard/Signle";

const Stack = createStackNavigator();

const MainNavigation= ()=>{
    return(
        <Stack.Navigator screenOptions={{header:()=>null , headerShown:false}}>
            <Stack.Screen  name={Routes.Home} component={Home} />
            <Stack.Screen  name={Routes.SingleCard} component={SingleCard} />
        </Stack.Navigator>
    )
}
export default MainNavigation;