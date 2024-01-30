<template>
  <div class="todo-block">
   <div class="todo-top">
     <h2>{{ todo.title }}</h2>
     <router-link
        class="link"
        :to="`/about/${todo.id}`"
        >изменить заметку</router-link
      >
   </div>
    <div
      class="todo-bottom"
      v-for="(label, idx) in todo.label"
      :key="idx"
    >
      <div class="todo-input">
        <label :class="{'decoration': todo.completed, 'nonedecoration': !todo.completed}" :for="todo.label">{{ label }}</label>
        <input
          :name="todo.label"
          type="checkbox"
          disabled
        />
      </div>
      <PopUp
        :idxItem="idx"
        :keyItem="todo.id"
        @delete-todo="deleteItemStatic"
      />
    </div>
  </div>
</template>
<script>
import PopUp from "@/components/Popup";
export default {
  components: {
    PopUp,
  },
  methods: {
    // open pop-up
    emitOpenPopupEvent(idx) {
      this.$emit("open-popup", idx);
    },
    // delete static todo
    deleteItemStatic(idx) {
      this.$emit("delete-todoItem", idx);
     
    }
  },
  props: {
    todo: {
      type: Object,
      require: true,
    },
  },
};
</script>
<style scoped>
.todo-block {
  display: flex;
  flex-direction: column;
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
  gap: 30px;
}
.link {
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 5px;
  border: none;
  color: black;
  border-bottom: 3px solid rgba(34, 165, 236, 0.875);
  background: transparent;
  text-transform: uppercase;
}
h2 {
  color: black;
  text-align: center;
}

input {
  width: 20px;
  height: 20px;
}
.decoration {
  text-decoration: line-through;
}
.nonedecoration {
  text-decoration: none;
}
</style>
