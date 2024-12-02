import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Alert, ScrollView,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import { addAddress } from '../../Redux/reducer.js/user';

function Checkout({ navigation }) {
  const dispatch = useDispatch();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [address, setAddress] = useState('');

  const totalAmount = useSelector(state => state.cards.items.reduce((sum, item) => sum + item.totalPrice, 0));
  const userAddress = useSelector(state => state.user.address);

  const handlePayment = () => {
    if (cardNumber && expiryDate && cvv && nameOnCard) {
      if (!userAddress && !address) {
        Alert.alert("Missing Address", "Please add an address before proceeding.");
        return;
      }

      if (!userAddress && address) {
        dispatch(addAddress(address));
      }

      Alert.alert("Payment Successful", "Your order has been placed.");
      navigation.navigate("OrderConfirmation");
    } else {
      Alert.alert("Incomplete Details", "Please fill in all payment details.");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView className="pt-8 px-2  bg-[#015d5a] h-full">

        <View className="bg-[#184946] p-4 pb-6 rounded-xl">

       
        {/* Checkout Form */}
        <Text className="text-3xl font-bold pt-4 text-white mb-4">Checkout</Text>

        {/* ATM Card Preview */}
        <View className="bg-[#e3872a] rounded-lg p-5 mb-5 ">
          <Text className="text-white font-bold pb-2 -ml-1"> Card Details</Text>
          <Text className="text-white text-lg tracking-widest mb-3">
            {cardNumber || '**** **** **** ****'}
          </Text>
          <View className="flex-row justify-between">
            <Text className="text-white font-bold   capitalize">{nameOnCard || 'Your Name'}</Text>
            <Text className="text-white text-sm">{expiryDate || 'MM/YY'}</Text>
          </View>
        </View>

        {/* Card Details Section */}
        <View className="">
        <TextInput
            placeholder="Card Name"
            value={nameOnCard}
            onChangeText={setNameOnCard}
            className="bg-gray-200 p-3 rounded-lg mb-3"
          />
          <TextInput
            placeholder="Card Number"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
            className="bg-gray-200 p-3 rounded-lg mb-3"
          />
          <TextInput
            placeholder="Expiry Date (MM/YY)"
            value={expiryDate}
            onChangeText={setExpiryDate}
            keyboardType="numeric"
            className="bg-gray-200 p-3 rounded-lg mb-3"
          />
          <TextInput
            placeholder="CVV"
            value={cvv}
            onChangeText={setCvv}
            keyboardType="numeric"
            secureTextEntry
            className="bg-gray-200 p-3 rounded-lg mb-3"
          />
          
        </View>

        {/* Address Section */}
        <View className="mb-6">
          <Text className="text-lg text-white ml-1 font-semibold mb-2">Delivery Address</Text>
          {userAddress ? (
            <Text className="text-gray-700 text-sm">{userAddress}</Text>
          ) : (
            <TextInput
              placeholder="Enter Address"
              value={address}
              onChangeText={setAddress}
              className="bg-gray-200 p-3 rounded-lg"
            />
          )}
        </View>

        </View>
        {/* Total Amount and Checkout Button */}
        <View className="bg-white p-4 rounded-lg mt-4 flex-row justify-between items-center">
          <Text className="text-lg font-bold">Total: ${totalAmount.toFixed(2)}</Text>
          <Pressable onPress={handlePayment} className="p-3 bg-[#ff8629] rounded-lg">
  <Text className="text-white text-center">Place Order</Text>
</Pressable>
      
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Checkout;
