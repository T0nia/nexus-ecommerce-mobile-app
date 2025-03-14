import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/constants/Colors';

// Sample notifications data
const sampleNotifications = [
  { id: '1', title: 'New Discount!', message: 'Get 20% off on all items today!', time: '2025-03-14 10:00 AM' },
  { id: '2', title: 'Order Update', message: 'Your order #12345 has been shipped!', time: '2025-03-13 06:30 PM' },
  { id: '3', title: 'Limited Time Offer', message: 'Buy 1, get 1 free on selected items!', time: '2025-03-12 11:00 AM' },
  { id: '4', title: 'Reminder', message: 'Your shopping cart is waiting for you!', time: '2025-03-11 09:00 AM' },
];

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState(sampleNotifications);

  // Render each notification item
  const renderNotification = ({ item }) => (
    <View style={styles.notificationCard}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationMessage}>{item.message}</Text>
      <Text style={styles.notificationTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      
      {/* Display list of notifications */}
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
      />

      {/* Example of a button that could mark all notifications as read */}
      <TouchableOpacity style={styles.clearButton}>
        <Text style={styles.clearButtonText}>Clear All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Light background
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notificationCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationMessage: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  notificationTime: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 10,
  },
  clearButton: {
    backgroundColor: Colors.red,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  clearButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
