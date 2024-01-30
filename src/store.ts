import { createStore } from "vuex";

interface State {
  todos: Todo[];
}
interface Todo {
  id: number;
  title: string;
  label?: string[];
  completed?: false;
}

const store = createStore<State>({
  state: {
    todos: JSON.parse(localStorage.getItem("todos") || "[]"),
  },
  mutations: {
    createTodo(state, todo: Todo) {
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeLabel(state, { keyItem, idxItem }) {
      const todo = state.todos.find((todo) => todo.id === keyItem);
      if (todo && todo.label && idxItem >= 0 && idxItem < todo.label.length) {
        todo.label.splice(idxItem, 1);
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    updateTodo(state, todo) {
      const index = state.todos.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      state.todos[index] = todo;
    } else {
      state.todos.push(todo);
    }
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
},
  actions: {
    createTodo({ commit }, todo) {
      commit("createTodo", todo);
    },
    removeLabel({ commit }, { idxItem, keyItem }) {
      commit("removeLabel", { idxItem, keyItem });
    },
    updateTodo({ commit }, todo) {
      commit("updateTodo", todo);
    },
  },
  getters: {},
});

export default store;
