import React, { useState } from "react";
import { ScrollView, View ,Text ,Pressable, StatusBar} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input/input";
import Buttons from "../../components/Button/Buttons";
import Button from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Register = ({navigation})=>{
    const [email , setEmail ]= useState("");
    console.log(email)

    return(
        <SafeAreaView  className="flex-1 bg-[#015d5a]">
          <StatusBar backgroundColor="#015d5a" barStyle="dark-content" />
          <ScrollView 
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={{ flexGrow: 1 }}
                className="bg-[#015d5a]"
            >
                <View className="flex-1 justify-center items-center">
       
                <View className="w-11/12 p-6 rounded-xl bg-white">
                <View className="py-4">
            <Text className="text-4xl -ml-1 font-bold text-black ">Create an Account</Text>
        </View>
        <Input placeholder={"Your Full Name"}  
        secureTextEntry={false}
        keyboardType={"email-address"}
        label={"Full name"} onChangeText={(value)=>setEmail(value)}/>

        <Input placeholder={"Enter your email"}  
        secureTextEntry={false}
        keyboardType={"email-address"}
        label={"Email"} onChangeText={(value)=>setEmail(value)}/>

        <Input placeholder={"***********"}  
        secureTextEntry={true}
        keyboardType={"email-address"}
        label={"Password"} onChangeText={(value)=>setEmail(value)}/>

<Input placeholder={"***********"}  
        secureTextEntry={true}
        keyboardType={"email-address"}
        label={"Password"} onChangeText={(value)=>setEmail(value)}/>
        <View>       
             <Buttons title="Login"></Buttons>
        </View>
        <View className=" flex-row items-center justify-center pt-3 ">


<Text>Already Have an Account? </Text>
<Pressable onPress={() => navigation.navigate('Login')}>
    <Text className="text-[#ff8629] text-base">Sign In </Text>  
</Pressable> 
</View>
        </View>
        </View>
       </ScrollView>
       </SafeAreaView>
    )
}
export default Register