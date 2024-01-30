<template>
  <div>
    <div class="container">
      <h1 class="title">Список задач</h1>
      <TodoForm @add-todo="newTodo" />
      <TodoList
        :todos="todos"
        @delete-todoList="deleteStaticTodo"
      />
    </div>
  </div>
</template>
<script>
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";

export default {
  components: {
    TodoList,
    TodoForm,
  },
  data: () => ({
    todos: [
      {
        id: 1,
        title: "Первая",
        label: ["Задача 1", "Задача 2", "Задача 3"],
        completed: false
      }
    ].concat(JSON.parse(localStorage.todos || "[]")),
  }),
  methods: {
    // add new-todo
    newTodo(todo) {
      this.todos.push(todo);
    },
    // delete static todo
    deleteStaticTodo(id) {
      const { idxItem, keyItem } = id;  
      // Search for the index of a note in the todos array by its id.
      const todoIndex = this.todos.findIndex(todo => todo.id === idxItem);
      // Check if there is a note with this index && delete note
      if (todoIndex !== -1) {
        this.todos[todoIndex].label.splice(keyItem, 1);
      }
    }
  },
};
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
.title {
  font-size: 40px;
}
</style>
