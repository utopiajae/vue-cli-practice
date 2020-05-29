<template>
  <tr>
    <th>{{crud.name}}</th>
    <th>{{crud.age}}</th>
    <th>{{crud.sex}}</th>
    <th>
      <a-config-provider :auto-insert-space-in-button="false">
        <a-button class="operation-button" @click="$emit('edit-item', index)">修改</a-button>
      </a-config-provider>
    </th>
    <th>
      <a-config-provider :auto-insert-space-in-button="false">
        <a-button class="operation-button" @click="$emit('remove-item', index)">刪除</a-button>
      </a-config-provider>
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
  text-align: center;
}

.operation-button {
  width: 60px;
}
</style>