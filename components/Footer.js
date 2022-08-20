
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';


export function Footer({ navigation }) {
    function AddNote() {
        navigation.navigate("Add Task")
    }
    return (
        <>
            <View style={styles.footer}>
                <Ionicons name="add" size={45} color="white" style={styles.add} onPress={AddNote} />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#303841',
        position: 'absolute',
        bottom: 0,
        height: 70,
        width: "100%"
    },
    add: {
        position: 'absolute',
        right: 50,
        bottom: 40,
        backgroundColor: '#303841',
        borderRadius: 15,
        paddingLeft: 12,
        paddingTop: 10,
        borderColor: '#E8F9FD',
        borderWidth: 5
    }
})