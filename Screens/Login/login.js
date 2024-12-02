import React, { useState } from "react";
import { ScrollView, View, Text, StatusBar, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input/input";
import Buttons from "../../components/Button/Buttons";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");

    console.log(email);

    return (
        
             <SafeAreaView className="flex-1 bg-[#015d5a]">
            <StatusBar backgroundColor="#015d5a" barStyle="dark-content" />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} className="bg-[#015d5a]">
                <View className="flex-1 justify-center items-center">
                    <View className="w-11/12 p-6 rounded-xl bg-white">
                        <View className="py-4">
                            <Text className="text-4xl font-bold text-black">Welcome Back</Text>
                        </View>
                        <Input 
                            placeholder="Enter your email"  
                            secureTextEntry={false}
                            keyboardType="email-address"
                            label="Email" 
                            onChangeText={(value) => setEmail(value)}
                        />

                        <Input 
                            placeholder="***********"  
                            secureTextEntry={true}
                            keyboardType="default"
                            label="Password" 
                            onChangeText={(value) => setEmail(value)}
                        />

                        <View>       
                            <Buttons title="Login" />
                        </View>

                        <View className=" flex-row items-center justify-center pt-3 ">


                        <Text>Don't have an Account ? </Text>
                        <Pressable onPress={() => navigation.navigate('Home')}>
                            <Text className="text-[#ff8629] text-base">Sign Up</Text>
                        </Pressable> 
                        </View>
                       

                      
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Login;
