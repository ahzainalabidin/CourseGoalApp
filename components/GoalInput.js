import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ onAddGoal, showModal, onCloseModal }) => {

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

                <Image style={styles.image} source={require('../assets/images/target.png')} />

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
                        <Button title='Cancel' onPress={onCloseModal} />
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
    image: {
        width: 100,
        height: 100,
        margin: 20
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
