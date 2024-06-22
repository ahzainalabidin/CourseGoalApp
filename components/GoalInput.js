import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ onAddGoal, showModal }) => {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredGoalText) {
        setEnteredGoalText(enteredGoalText);
    };

    function addGoalHandler() {
        onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return (
        <Modal visible={showModal} animationType="slide">
            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />

                <View style={styles.buttonContainer}>

                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} />
                    </View>

                    <View style={styles.button}>
                        <Button title='Cancel' />
                    </View>

                </View>

            </View>
        </Modal>
    );

}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    }
});
