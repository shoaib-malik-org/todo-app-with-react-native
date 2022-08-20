import { StyleSheet, View, Text, ScrollView } from "react-native"

import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;


export function TaskList({ tasks }) {
    return (
        <ScrollView>
            <View style={s.container}>
                <View style={[s.row, s.mt3]}>
                    {tasks.map((value) => {
                        return Cols(value)
                    })}
                </View>
                {/* <View style={styles.cols}>
                    {tasks.map((value, index) => {
                        if (index % 3 === 0) return <></>
                        return Cols(value)
                    })}
                </View> */}
            </View>
        </ScrollView>
    )
}

function Cols(task) {

    return (
        <View style={styles.cols} key={`${task.id}`}>
            <View style={styles.task}>
                <Text style={s.textDark}>
                    {task.task}
                </Text>
            </View>
        </View>
    )
}

// const numColumns = 2;
// const size = Dimensions.get('window').width / numColumns - 15

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
        flexWrap: 'nowrap',
    },
    cols: {
        padding: 10,
        width: '50%',
    },
    task: {
        borderColor: "black",
        color: "black",
        borderWidth: 2,
        borderRadius: 10,
        padding: 5
    }
})
