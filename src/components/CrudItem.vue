<template>
  <tr>
    <th>{{crud.name}}</th>
    <th>{{crud.age}}</th>
    <th>{{crud.sex}}</th>
    <th>
      <button @click="$emit('edit-item', index)">修改</button>
    </th>
    <th>
      <button @click="removeItem(index)">刪除</button>
    </th>
  </tr>
</template>

<script>
export default {
  name: "CrudItem",
  props: {
    crud: Object,
    index: Number
  },
  methods: {
    removeItem(index) {
      app.items.splice(index, 1);
      if (app.target === index) {
        app.initInput();
        app.type = "create";
      }
    }
  }
};
</script>

<style scoped lang="scss">
th {
  font-size: 20px;
  color: black;
}
</style>