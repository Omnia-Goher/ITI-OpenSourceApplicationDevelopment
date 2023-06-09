import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from "react-native";


export default function TodoListScreen() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [todoError, setTodoError] = useState("");
    const [todosRemaining, setTodosRemaining] = useState(0);

    const handleAddTodo = () => {
        if (todo.length > 0) {
            const newTodo = {
                id: Date.now().toString(),
                todo: todo,
                complete: false,
            };
            setTodos([...todos, newTodo]);
            setTodo("");
            setTodoError("");
        } else {
            setTodoError("todo not valid");
        }
    };

    const handleDeleteTodo = (id) => {
        const filteredTodos = todos.filter((item) => item.id !== id);
        setTodos(filteredTodos);
    };

    const handleCompleteTodo = (id) => {
        const newTodos = [...todos];
        const completedItemIndex = todos.findIndex((todo) => todo.id == id);
        newTodos[completedItemIndex].complete = true;
        setTodos(newTodos);
    };

    useEffect(() => {
        setTodosRemaining(todos.filter((todo) => todo.complete).length);
    });

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Add Task"
                    onChangeText={(text) => setTodo(text)}
                    value={todo}
                />
                {todoError && <Text style={styles.inputError}>{todoError}</Text>}
                <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.list}
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.todo}>
                        <Text
                            style={[
                                styles.todoText,
                                { textDecorationLine: item.complete ? "line-through" : "none" },
                            ]}
                        >
                            {item.todo}
                        </Text>
                        <TouchableOpacity style={styles.donebutton} onPress={() => handleCompleteTodo(item.id)} >
                            <Text style={styles.todoButtonText}>Done</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deletebutton} onPress={() => handleDeleteTodo(item.id)} >
                            <Text style={styles.todoButtonText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <Text style={styles.counter}>
                {todosRemaining} / {todos.length} Completed
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1, // Added flex property
        height: 41,
        width: "50%",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        marginRight: 20,
        marginTop: 10 // Added marginRight for spacing between input and button

    },
    button: {
        width: 80,
        height: 40,
        borderRadius: 10,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0
    },
    deletebutton: {
        width: 65,
        height: 35,
        borderRadius: 10,
        backgroundColor: "#aa0505",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0
    },
    donebutton: {
        width: 65,
        height: 35,
        borderRadius: 10,
        backgroundColor: "#416cac",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
    todoButtonText: {
        color: "white",
        fontSize: 13,
    },
    list: {
        width: "100%",
        marginTop: 20,
    },
    todo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        gap: 5,
        padding: 20,
        marginBottom: 20,
    },
    todoText: {
        flex: 1,
        marginRight: 10,
    },
    inputError: {
        textAlign: "left",
        fontWeight: "bold",
        marginBottom: 10,
        color: "red",
    },
    counter: {
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 16,
    },
});
