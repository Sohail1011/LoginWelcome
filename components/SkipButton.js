import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

export default function SkipButton() {
    return (
        <TouchableOpacity>
            <Text style={styles.text}>Skip</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        marginTop: 9,
        color: '#0b132b'
    }
})