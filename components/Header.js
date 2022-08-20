import React from 'react';
import { View, Text, TextInput } from "react-native";
import { StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 



export function Header() {

    return (
        <View style={styles.container}>
            <View style={styles.bgPurple}>
                <Octicons name="three-bars" size={20} color="white" style={styles.barsIcon} />
                <TextInput placeholderTextColor={'white'} style={styles.input} placeholder='Search your notes' />
                <Entypo name="grid" size={26} color="white" style={styles.gridIcon} />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: "90%",
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 'auto'
    },
    bgPurple: {
        flexDirection: "row",
        backgroundColor: '#303841',
        borderRadius: 50,
        height: 40
    },
    input: {
        marginLeft: 10,
        alignContent: 'center',
        color: "white",
        width: "72%",
    },
    barsIcon: {
        marginTop: 10,
        marginLeft: 16
    },
    gridIcon: {
        margin: 7,
        marginLeft: 7
    }
});