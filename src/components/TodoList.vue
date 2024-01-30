<template>
  <div class="todo-list">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @delete-todoItem="deleteStaticList"
    />
  </div>
</template>
<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  props: ["todos"],
  methods: {
    // delete static todo
    deleteStaticList(idx) {
      this.$emit('delete-todoList', idx)
    }
  }
};
</script>
<style scoped>
.todo-list {
  background: #fffffff9;
  width: 800px;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
