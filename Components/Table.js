import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Table = () => {
    return (
        <View style={styles.table}>
            <View style={styles.row}>
                <Text style={styles.headerCell}>Header 1</Text>
                <Text style={styles.headerCell}>Header 2</Text>
                <Text style={styles.headerCell}>Header 3</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.cell}>Row 1, Cell 1</Text>
                <Text style={styles.cell}>Row 1, Cell 2</Text>
                <Text style={styles.cell}>Row 1, Cell 3</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.cell}>Row 2, Cell 1</Text>
                <Text style={styles.cell}>Row 2, Cell 2</Text>
                <Text style={styles.cell}>Row 2, Cell 3</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    table: {
        borderWidth: 1,
        borderColor: 'black',
    },
    row: {
        flexDirection: 'row',
    },
    headerCell: {
        flex: 1,
        backgroundColor: 'lightgray',
        fontWeight: 'bold',
    },
    cell: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
    },
});

export default Table;
