import React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, updateSelectedCardId } from '../../Redux/reducer.js/Wishlist'; // Adjust the import if necessary
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation
import { Routes } from '../../navigation/Route'; 

function Wishlist() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.Wishlist.items); // Get items from Redux store
  const navigation = useNavigation(); // To navigate to SingleCard screen

  // Filter items with a quantity greater than 0
  const selectedItems = cartItems.filter(item => parseInt(item.NumOrder, 10) > 0);

  // Render each wishlist item
  const renderWishlistItem = ({ item }) => (
    <View className="w-1/2 p-2"> 
      <View className="bg-white rounded-lg overflow-hidden relative">
        <TouchableOpacity 
          onPress={() => {
           
            dispatch(updateSelectedCardId(item.id));  
            navigation.navigate(Routes.SingleCard); 
          }}
        >
          <Image
            source={{ uri: item.uri }}
            className="w-full h-[200px] self-center"
          />
        </TouchableOpacity>
        
        {/* Love Icon for removing */}
        <TouchableOpacity
          className="absolute top-2 right-2 bg-white rounded-full p-2"
          onPress={() => dispatch(deleteItem(item.id))} // Dispatch item.id to delete
        >
          <FontAwesomeIcon icon={faHeart} size={24} color="red" />
        </TouchableOpacity>

        <View className="p-2">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-black font-semibold w-[110px] text-base">{item.title}</Text>
            <Text className="text-black font-bold text-lg mt-1">${item.totalPrice.toFixed(2)}</Text>
          </View>
          <Text className="text-gray-600">Size: {item.selectedSize}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#015d5a]">
      <View className="p-6">
        <Text className="text-4xl mt-4 font-bold text-white">Wishlist</Text>
      </View>

      {selectedItems.length > 0 ? (
        <FlatList
          data={selectedItems}
          renderItem={renderWishlistItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} // Corrected to a two-column layout
          contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 16 }}
        />
      ) : (
        <View className="flex-1 justify-center items-center">
          <Text className="text-lg text-white">Your Wishlist is empty</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

export default Wishlist;
