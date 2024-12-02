import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Modal, TextInput, StatusBar } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit, faMapMarkerAlt, faCreditCard, faHeart, faSignOutAlt, faCog, faTimes } from '@fortawesome/free-solid-svg-icons';

const ProfileScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    
    <View className="flex-1 bg-[#015d5a]">
        <StatusBar backgroundColor="#013f3d" barStyle="light-content" />
      {/* Header Section */}
      <View className="bg-[#013f3d] p-6 rounded-b-3xl">
        <View className="items-center">
          <Image
            source={{ uri: 'https://img.freepik.com/premium-photo/sunny-cafe-iced-latte-experience_1160504-1708.jpg' }}
            className="w-24 h-24 rounded-full mb-4 border-4 border-white"
          />
          <Text className="text-xl font-bold text-white">Mark Alex</Text>
          <Text className="text-sm text-gray-300">alexmark@gmai.com</Text>
         
        </View>
        <TouchableOpacity className="absolute top-8 right-8">
          <FontAwesomeIcon icon={faEdit} size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Body Section */}
      <ScrollView className="flex-1 p-4">
        {/* Order History */}
        <TouchableOpacity
          className="flex-row items-center bg-white rounded-lg p-4 shadow-md mb-4"
          onPress={() => navigation.navigate('OrderHistory')}
        >
          <FontAwesomeIcon icon={faEdit} size={20} color="#015d5a" />
          <Text className="ml-4 text-base text-gray-800 font-semibold">View Order History</Text>
        </TouchableOpacity>

        {/* Saved Addresses */}
        <TouchableOpacity className="flex-row items-center bg-white rounded-lg p-4 shadow-md mb-4">
          <FontAwesomeIcon icon={faMapMarkerAlt} size={20} color="#015d5a" />
          <Text className="ml-4 text-base text-gray-800 font-semibold">Manage Addresses</Text>
        </TouchableOpacity>

        {/* Payment Methods */}
        <TouchableOpacity
          className="flex-row items-center bg-white rounded-lg p-4 shadow-md mb-4"
          onPress={() => setModalVisible(true)}
        >
          <FontAwesomeIcon icon={faCreditCard} size={20} color="#015d5a" />
          <Text className="ml-4 text-base text-gray-800 font-semibold">Payment Methods</Text>
        </TouchableOpacity>

        {/* Favorites */}
        <TouchableOpacity className="flex-row items-center bg-white rounded-lg p-4 shadow-md mb-4">
          <FontAwesomeIcon icon={faHeart} size={20} color="#015d5a" />
          <Text className="ml-4 text-base text-gray-800 font-semibold">Favorite Items</Text>
        </TouchableOpacity>

        
      

        {/* Logout */}
        <TouchableOpacity className="flex-row items-center bg-red-500 rounded-lg p-4 shadow-md">
          <FontAwesomeIcon icon={faSignOutAlt} size={20} color="#fff" />
          <Text className="ml-4 text-base text-white font-semibold">Logout</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Add Card Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white rounded-2xl p-6 w-11/12 shadow-lg">
            {/* Modal Header */}
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-bold text-gray-800">Add Card Details</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <FontAwesomeIcon icon={faTimes} size={20} color="gray" />
              </TouchableOpacity>
            </View>

            {/* Card Form */}
            <ScrollView className="mt-4 space-y-4">
              <View>
                <Text className="text-sm text-gray-600 mb-1">Card Holder Name</Text>
                <TextInput
                  placeholder="Enter your name"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800"
                />
              </View>
              <View>
                <Text className="text-sm text-gray-600 mb-1">Card Number</Text>
                <TextInput
                  placeholder="1234 5678 9012 3456"
                  keyboardType="numeric"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800"
                  maxLength={19}
                />
              </View>
              <View className="flex-row justify-between">
                <View className="flex-1 mr-2">
                  <Text className="text-sm text-gray-600 mb-1">Expiry Date</Text>
                  <TextInput
                    placeholder="MM/YY"
                    keyboardType="numeric"
                    className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800"
                    maxLength={5}
                  />
                </View>
                <View className="flex-1 ml-2">
                  <Text className="text-sm text-gray-600 mb-1">CVV</Text>
                  <TextInput
                    placeholder="123"
                    keyboardType="numeric"
                    className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800"
                    maxLength={3}
                  />
                </View>
              </View>
              <View>
                <Text className="text-sm text-gray-600 mb-1">Billing Address</Text>
                <TextInput
                  placeholder="Enter your billing address"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800"
                />
              </View>
              <TouchableOpacity
                className="bg-[#015d5a] py-3 rounded-lg mt-4"
                onPress={() => {
                  setModalVisible(false);
                  alert("Card added successfully!");
                }}
              >
                <Text className="text-white text-center font-semibold">Add Card</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileScreen;
