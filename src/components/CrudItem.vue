<template>
  <tr>
    <th>{{crud.name}}</th>
    <th>{{crud.age}}</th>
    <th>{{crud.sex}}</th>
    <th>
      <button @click="$emit('edit-item', index)">修改</button>
    </th>
    <th>
      <button @click="$emit('remove-item', index)">刪除</button>
    </th>
  </tr>
</template>

<script>
export default {
  name: "CrudItem",
  props: {
    crud: Object,
    index: Number
  }
};
</script>

<style scoped lang="scss">
th {
  font-size: 20px;
  color: black;
}
</style>