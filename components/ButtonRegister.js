import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ButtonRegister() {
    return (
        <TouchableOpacity style={styles.button} >
            <Text style={styles.text} >Register Now</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#1c2541',
        fontFamily: 'serif'
    },
    button: {
        width: '40%',
        height: 40,
        marginTop: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6fffe9'
    }
});