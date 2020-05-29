<template>
  <div class="container">
    <div class="input-container">
      <span>新增事項:</span>
      <a-input class="input-item" v-model="content"></a-input>
      <a-button @click="add">新增</a-button>
    </div>
    <div class="item-container">
      <a-table :columns="columns" :dataSource="todos" rowKey="content" bordered></a-table>
    </div>
  </div>
</template>


<script>
export default {
  name: "Todo",
  data() {
    return {
      content: "",
      columns: [
        {
          title: "內容",
          dataIndex: "content",
          scopedSlots: { customRender: "content" }
        }
      ],
      todos: [
        {
          content: "吃飯"
        },
        {
          content: "睡覺"
        },
        {
          content: "打東東"
        },
        {
          content: "打西西"
        },
        {
          content: "打南南"
        },
        {
          content: "打北北"
        },
        {
          content: "再吃飯"
        },
        {
          content: "再睡覺"
        },
        {
          content: "再打東東"
        },
        {
          content: "東東痛"
        }
      ]
    };
  },
  methods: {
    add() {
      if (!this.content) return;
      this.todos.push({ content: this.content });
      this.content = "";
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  margin: auto;
  border: 1px solid black;
  max-width: 800px;
  min-height: 723px;
  box-sizing: border-box;
  padding: 10px;
}

.input-container {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 10px;

  .input-item {
    width: 300px;
    margin: 0 10px;
  }
}

.item-container {
  margin: auto;
}
</style>