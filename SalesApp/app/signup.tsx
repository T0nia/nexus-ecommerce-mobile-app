import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Props = {}

const SignUpScreen = (props: Props) => {
  return (
    <>
    <Stack.Screen options={{headerTitle: 'Sign Up'}} />
    <View style={styles.container}>
      <Text>Create your account</Text>
    </View>
    </>
  );
};

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
  
})