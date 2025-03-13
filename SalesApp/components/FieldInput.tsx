import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

type props = {}
 
const FieldInput = (props: React.ComponentProps<typeof TextInput>) => {
    return (
        <TextInput style={styles.input} {...props}
        />
    );
};

export default FieldInput;

const styles = StyleSheet.create({
    input: {
        backgroundColor: Colors.white,
        paddingVertical: 12,
        paddingHorizontal: 18,
        alignSelf: 'stretch',
        borderRadius: 5,
        fontSize: 16,
        color: Colors.black,
        marginBottom: 20,
      },
      
}) 