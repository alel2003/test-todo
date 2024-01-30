<template>
  <div>
    <button
      class="btn-gray"
      @click="openPopup"
    >
      Удалить
    </button>
    <div
      v-if="showPopup"
      class="popup"
    >
      <div class="popup-content">
        <p>Вы точно хотите удалить заметку ?</p>
        <hr />
        <div class="btn-block">
          <button
            class="btn-green"
            @click="deleteTodo"
          >
            Да
          </button>
          <button
            class="btn-red"
            @click="closePopup"
          >
            Нет
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    idxItem: Number,
    keyItem: Number,
    text: String
  },
  data: () => ({
    showPopup: false,
  }),
  methods: {
    // open pop-up
    openPopup() {
      this.showPopup = true;
    },
    // close pop-up
    closePopup() {
      this.showPopup = false;
    },
    // close pop-up && delete-todo store && static
    deleteTodo() {
      this.showPopup = false;
      console.log(this.keyItem);
      if ([1, 2, 3].includes(this.keyItem)) {
        console.log('здеся?');
        this.$emit("delete-todo", {
          idxItem: this.keyItem,
          keyItem: this.idxItem,
        });
      } else {
        this.$store.dispatch("removeLabel", {
          keyItem: this.keyItem,
          idxItem: this.idxItem,
        });

      }
    },
  },
};
</script>
<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  background: white;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.btn-block {
  display: flex;
  justify-content: right;
  gap: 20px;
}

button {
  cursor: pointer;
  padding: 20px;
  border: none;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
}

.btn-gray {
  background: rgba(179, 16, 16, 0.834);
}
.btn-red {
  background: red;
}
.btn-green {
  background: green;
}
</style>
