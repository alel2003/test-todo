<template>
  <form @submit.prevent="addSave">
    <div>
      <input
        type="text"
        placeholder="Создайте название заметки"
        v-model="value"
        required
      />
      <button type="submit">Сохранить</button>
    </div>
    <div
      v-for="(item, index) in items"
      :key="index"
    >
      <input
        type="text"
        v-model="item.label"
        placeholder="Создайте заметку"
        required
      />
      <button
        type="button"
        @click="removeItem(index)"
      >
        Удалить
      </button>
    </div>
    <button
      type="button"
      @click="addItem"
    >
      Создать
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      items: [{ label: '' }],
    };
  },
  methods: {
    // add input
    addItem() {
      this.items.push({ label: '' });
    },
     // remove input
    removeItem(index) {
      this.items.splice(index, 1);
    },
    // add new object
    addSave() {
      const newTodo = {
        id: Date.now(),
        title: this.value,
        label: this.items.map(item => item.label),
        completed: false
      };
      this.$emit("add-todo", newTodo);
      this.$store.dispatch("createTodo", newTodo);
      this.value = "";
      this.items = [{ label: "" }];
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
div {
  display: flex;
  gap: 10px;
}
input {
  outline: none;
  padding: 15px 15px;
  border: none;
  border-radius: 20px;
  width: 86%;
}
button {
  color: white;
  background: black;
  padding: 15px 17px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: 600;
}
</style>
