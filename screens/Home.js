import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { TaskList } from '../components/taskList';


export function Home({ navigation }) {
    const allTasks = useSelector(store => store.task.task);
    function disappearKeyboard(){
        Keyboard.dismiss();
    }
    return (
        <TouchableWithoutFeedback onPress={disappearKeyboard}>
            <View style={styles.container}>
                <Header />
                <TaskList tasks={allTasks} />
                <Footer navigation={navigation} />
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: '#E8F9FD'
    }
})