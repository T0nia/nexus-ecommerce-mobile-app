import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react'
import { Link, router, Stack } from 'expo-router';
import FieldInput from '@/components/FieldInput';
import SocialBtn from '@/components/SocialBtn';
import { Colors } from '@/constants/Colors';



type Props = {}

const SignUpScreen = (props: Props) => {
  return (
    <>
    <Stack.Screen options={{headerTitle: 'Sign Up'}} />
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
 <FieldInput placeholder='Email Address' 
               placeholderTextColor={Colors.gray} 
               autoCapitalize='none'
               keyboardType='email-address'/>

<FieldInput placeholder='Password' 
               placeholderTextColor={Colors.gray} 
               secureTextEntry={true}
/>
<FieldInput placeholder='Confirm Password' 
               placeholderTextColor={Colors.gray} 
               secureTextEntry={true}
/>

<TouchableOpacity style={styles.button}>
  <Text style={styles.buttonTxt}>Create your account</Text>
</TouchableOpacity>

<Text style={styles.loginTxt}>Already have an account? {" "}
        <Link href={"/signin"} asChild>
        <TouchableOpacity>
          <Text style={styles.loginSpanTxt}>Sign in</Text>
        </TouchableOpacity>
      </Link>
      </Text>
<View style={styles.divider} />

<SocialBtn emailHref={'/signin'}/>
    </View>
    
    </>
  );
};

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.background
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1.2,
    color: Colors.black,
    marginBottom: 50
  },
  button: {
backgroundColor: Colors.primary,
paddingVertical: 14,
paddingHorizontal: 18,
alignSelf: 'stretch',
alignItems: 'center',
borderRadius: 5,
marginBottom: 20
  },
  buttonTxt: {
color: Colors.white,
fontSize: 16,
fontWeight: '600',
  },
    loginTxt: {
      marginBottom: 30,
      fontSize: 14,
      color: Colors.black,
      lineHeight: 24,
    },  
    loginSpanTxt: {
      color: Colors.primary,
      fontWeight: 600,
    },
    divider: {
      borderTopColor: Colors.gray,
      borderTopWidth: StyleSheet.hairlineWidth,
      width: '30%',
      marginBottom: 30,
    }
  
})