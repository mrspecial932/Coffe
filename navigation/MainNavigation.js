import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Route";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home/Home";
import SingleCard from "../Screens/SignleCard/Signle";
import Cart from "../Screens/Cart/Cart";
import Checkout from "../Screens/Checkout/Checkout";
import Login from "../Screens/Login/login";
import Profile from "../Screens/Profile/Profile";
import Register from "../Screens/Login/REgister";
import { Dimensions , View ,Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartShopping, faHeart, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import Wishlist from "../Screens/Wishlist/Wishlist";
import OrderHistory from "../Screens/Order/OrderHistory";



const width = Dimensions.get("screen").width
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fe8323",
        tabBarInactiveTintColor: "#fff",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#196e6b",
          height: 70,
          width: width - 20,
          borderRadius: 40,
          marginHorizontal: 10,
          marginBottom: 10,
          paddingHorizontal:20,
          position: 'absolute',
          borderTopWidth: 0,
         
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: focused ? '#ff872a' : 'transparent',
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 20,
            }}>
              <FontAwesomeIcon icon={faHome} size={24} color="#fff" />
              {focused && (
                <Text style={{ color: '#fff', marginLeft: 8 }}>Home</Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: focused ? '#ff872a' : 'transparent',
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 20,
            }}>
              <FontAwesomeIcon icon={faHeart} size={24} color="#fff" />
              {focused && (
                <Text style={{ color: '#fff', marginLeft: 8 }}>Wishlist</Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: focused ? '#ff872a' : 'transparent',
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 20,
            }}>
              <FontAwesomeIcon icon={faCartShopping} size={24} color="#fff" />
              {focused && (
                <Text style={{ color: '#fff', marginLeft: 8 }}>Cart</Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: focused ? '#ff872a' : 'transparent',
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 20,
            }}>
              <FontAwesomeIcon icon={faUser} size={20} color="#fff" />
              {focused && (
                <Text style={{ color: '#fff', marginLeft: 8 }}>Profile</Text>
              )}
            </View>
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};
const MainNavigation= ()=>{
    return(
        <Stack.Navigator initialRouteName={Routes.Login} screenOptions={{header:()=>null , headerShown:false}}>
            


              <Stack.Screen name="Tabs" component={TabNavigator} />
            <Stack.Screen  name={Routes.Home} component={Home} />
            <Stack.Screen  name={Routes.SingleCard} component={SingleCard} />
            <Stack.Screen  name={Routes.OrderHistory} component={OrderHistory} />          
            <Stack.Screen  name={Routes.Cart} component={Cart} />
            <Stack.Screen  name={Routes.Profile} component={Profile} />
            <Stack.Screen  name={Routes.Checkout} component={Checkout} />
        </Stack.Navigator>
    )
}
export default MainNavigation;