"use strict";
let TodoLists;
const createTodo = (todo) => {
    TodoLists.push({
        id: TodoLists.length + 1,
        content: todo,
        isCompleted: false,
        category: ""
    });
};
const getTodos = () => {
    TodoLists.map((todo) => todo);
};
const getTodoById = (id) => {
    TodoLists.filter((todo) => todo.id === id);
};
const updateTodo = (id, content) => {
    TodoLists.find((todo) => {
        if (todo.id === id) {
            return {
                content: content
            };
        }
    });
};
const updateTags = (id, tags) => {
    TodoLists.find((todo) => {
        if (todo.id === id) {
            return {
                tags: tags,
            };
        }
    });
};
const deleteAllTodos = (id) => {
    TodoLists.map((todo) => {
        if (todo.id === id) {
            return Object.assign(Object.assign({}, todo), { content: "", tags: [], category: "" });
        }
        return todo;
    });
};
const deleteTodoById = (id) => {
    TodoLists.find((todo) => {
        if (todo.id === id) {
            return Object.assign(Object.assign({}, todo), { content: "" });
        }
        return todo;
    });
};
const deleteAllTags = (id) => {
    TodoLists.map((todo) => {
        if (todo.id === id) {
            return Object.assign(Object.assign({}, todo), { tags: [] });
        }
        return todo;
    });
};
const deleteTag = (id) => {
    TodoLists.find((todo) => {
        if (todo.id === id) {
            return Object.assign(Object.assign({}, todo), { tags: [] });
        }
        return todo;
    });
};
