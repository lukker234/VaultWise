import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';

const AddButton = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const buttonClickedHandler = () => {
        console.log('You have been clicked a button!');
        // do something
        setDropdownVisible(!isDropdownVisible); // Toggle the dropdown visibility
    };

    const data = [
        { key: 'option1', label: 'Option 1' },
        { key: 'option2', label: 'Option 2' },
        { key: 'option3', label: 'Option 3' },
    ];

    return (
        <View style={styles.container}>
            {/* Your button */}
            <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.roundButton1}>
                <Text>I'm a button</Text>
            </TouchableOpacity>

            {isDropdownVisible && (
                <Modal
                    transparent={true}
                    animationType="slide"
                >
                    <View style={styles.dropdownContainer}>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.dropdownItem}
                                    onPress={() => {
                                        console.log('Selected:', item.label);
                                        setDropdownVisible(false);
                                    }}
                                >
                                    <Text>{item.label}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    roundButton1: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'blue',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    dropdownContainer: {
        position: 'absolute',
        top: 170, // Adjust the top position to position the dropdown beneath the button
        right: 0,
        width: 150, // Set the width of the dropdown
        backgroundColor: 'white', // Background color of the dropdown
        borderWidth: 1,
        borderColor: 'lightgray',
    },
    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
    },
});

export default AddButton;
