import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { randomNumber } from "../service/id";
import { addTask } from "../redux/reducers/tasks";
import { useSelector, useDispatch } from 'react-redux';


export function Add_note({ navigation }) {
    const [task, setTask] = useState()
    const dispatch = useDispatch();
    
    function ToHome() {
        const date = new Date();
        dispatch(addTask({
            id: randomNumber(),
            task,
            date: date.toDateString(),
            time: date.toTimeString(),
        }))
        navigation.navigate('Todo List')
    }
    return (
        <>
            <View style={style.container}>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    placeholder={'Note'}
                    style={style.input}
                    onChangeText={setTask}
                />
                <Button title="add note" onPress={ToHome} />
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 30,
        height: '100%',
    },
    input: {
        height: '80%',
        fontSize: 20,
        marginBottom: 30
    },
})