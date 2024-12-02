import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity, removeFromCart } from '../../Redux/reducer.js/card';
import Button from '../../components/Button/Button';
import { Swipeable } from 'react-native-gesture-handler';
import { Routes } from "../../navigation/Route";

function Cart({ navigation }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cards.items);

  // Filter items with a quantity greater than 0
  const selectedItems = cartItems.filter(item => parseInt(item.NumOrder, 10) > 0);
  const totalAmount = selectedItems.reduce((sum, item) => sum + item.totalPrice, 0);

  // Handle checkout by navigating to the Checkout screen
  const handleAddToCart = () => {
    if (selectedItems.length > 0) {
      navigation.navigate(Routes.Checkout);
    } else {
      Alert.alert("Cart is Empty", "Please add items to the cart before checking out.");
    }
  };

  // Render the remove action when swiped
  const renderRightActions = (id) => {
    return (
      <Pressable
        onPress={() => dispatch(removeFromCart(id))}
        className="flex  w-36 items-center justify-center  bg-red-600"
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        <Text className="text-white font-bold">Remove</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView className="bg-[#015d5a] h-full">
        <View className=" pl-6  pt-6">
          <Text className="text-4xl  mt-4 font-bold text-white">Cart</Text>
        </View>

        <ScrollView className="pt-4  pb-4 px-4 mx-3 h-[550px]  ">
          {selectedItems.length > 0 ? (
            selectedItems.map((item) => (
              <Swipeable
                key={item.id}
                renderRightActions={() => renderRightActions(item.id)}
                friction={1}   // Control the friction of the swipe gesture
                rightThreshold={250} // Adjust the swipe threshold for the "Remove" button to appear halfway
              >
                <View className="flex-row   bg-white  mb-4  rounded-xl p-2">
                  <Image
                    source={{ uri: item.uri }}
                    style={{ width: 120, height: 115, }}
                    className="rounded-l-xl"
                  />
                  <View className="ml-3 flex-1 mt-4">
                    <Text className="text-xl  text-black font-semibold">{item.title}</Text>
                    <Text className="text-gray-900">Size: {item.selectedSize}</Text>
                    <Text className="text-gray-800 text-lg font-bold">
                       ${item.totalPrice.toFixed(2)}
                    </Text>


                    <View className=" -mt-4 pr-4 items-center flex-row justify-end">
                    <Pressable
                      onPress={() =>
                        dispatch(decreaseItemQuantity({ id: item.id, selectedSize: item.selectedSize }))
                      }
                      disabled={item.NumOrder <= 1}
                      className="rounded-full w-6 h-6 items-center bg-black"
                    >
                      <Text className="text-white font-bold">-</Text>
                    </Pressable>

                    <Text className="mx-4 text-lg  text-black font-bold">{item.NumOrder}</Text>

                    <Pressable
                      onPress={() =>
                        dispatch(increaseItemQuantity({ id: item.id, selectedSize: item.selectedSize }))
                      }
                      className="rounded-full w-6 h-6 items-center bg-black"
                    >
                      <Text className="text-white font-bold">+</Text>
                    </Pressable>
                  </View>
              
                  </View>

                </View>
              </Swipeable>
            ))
          ) : (
            <Text className="text-white text-lg">Your cart is empty</Text>
          )}
        </ScrollView>

        <View className="bg-white p-4 m-4 rounded-lg flex-row justify-between items-center">
          {/* Display total amount at the bottom */}
          {selectedItems.length > 0 && (
            <View>
              <Text className="text-lg text-black font-semibold">Total Amount:</Text>
              <Text className="text-xl text-green-900 font-bold">${totalAmount.toFixed(2)}</Text>
            </View>
          )}

          <View>
            <Pressable className="p-5 bg-[#ff8629] rounded-lg" onPress={handleAddToCart}><Text className="text-white">Checkout</Text></Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Cart;
