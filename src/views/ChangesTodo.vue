<template lang="">
  <div class="container">
    <h1>Редактирование заметки</h1>
    <div
      class="todo-block"
      v-if="todoData"
    >
      <input class="title" v-model="todoData.title">{{ todoData.title }}</input>
      <div
        class="todo-bottom"
        v-for="(label, idx) in todoData.label"
        :key="idx"
      >
        <div class="todo-input">
          <input
            class="input"
            v-model="todoData.label[idx]"
          />
          <input
            class="checkbox"
            type="checkbox"
            v-model="todoData.completed"
            @change="checkedStatus"
          />
        </div>
       <div class="btn-block">
         <button
          class="save"
          @click="saveChanges"
        >
          Сохранить
        </button>
        <button class="reject" @click="rejectChanges">
          Отклонить
        </button>
       </div>
      </div>
    </div>
    <router-link
      class="link"
      to="/"
      >главная</router-link
    >
  </div>
</template>
<script>
import PopupVue from '@/components/Popup.vue';
export default {
  components: {
    PopupVue
  },
  data() {
    return {
      todoId: null,
      todoData: null,
      originalTodoData: null,
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  mounted() {
    this.todoIndex = parseInt(this.$route.params.id, 10);
    this.loadTodoData();
  },
  methods: {
    // load todo
    loadTodoData() {
      const todo = this.todos.find((todo) => todo.id === this.todoIndex);
      if (todo) {
        this.todoData = JSON.parse(JSON.stringify(todo));
        this.originalTodoData = JSON.parse(JSON.stringify(todo));
      } else {
        console.error("Заметка с данным ID не найдена.");
      }
    },
    // save notes in input
    saveChanges() {
      this.$store.dispatch('updateTodo', this.todoData).then(() => {
        this.$router.push('/');
      });
      this.originalTodoData = JSON.parse(JSON.stringify(this.todoData));
    },
    // reset text notes in input
    rejectChanges() {
      this.todoData = JSON.parse(JSON.stringify(this.originalTodoData));
    },
    // status checkbox
    checkedStatus() {
      this.todoData.completed === false ? true : false
    }
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  grid-area: 30px;
}

.title {
  color: black;
  text-align: center;
}

.link {
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 5px;
  border: none;
  color: white;
  border-bottom: 3px solid rgba(208, 214, 217, 0.875);
  background: transparent;
  text-transform: uppercase;
}

.todo-block {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 20px;
  padding: 20px;
  width: 600px;
  gap: 20px;
}

.todo-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todo-bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  gap: 30px;
  border-bottom: 2px solid black;
  padding: 10px 0px;
}

.todo-input {
  display: flex;
  align-items: center;
  gap: 30px;
}

.checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.input {
  width: 200px;
  outline: none;
  padding: 7px;
  border-radius: 20px;
}

button {
  padding: 15px;
  cursor: pointer;
  color: white;
  border: none;
  font-weight: 600;
}

.save {
  background: green;
}

.reject {
  background: rgb(139, 139, 236);
}

.btn-block {
  display: flex;
  gap: 20px;
}
</style>
