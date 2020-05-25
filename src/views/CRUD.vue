<template>
  <div class="crud">
    <h5>Vue-CRUD</h5>
    <div class="input-container">
      <p>姓名:</p>
      <input class="input-item" type="text" v-model="name" />
    </div>
    <div class="input-container">
      <p>年紀:</p>
      <input class="input-item" type="text" v-model="age" />
    </div>
    <div class="input-container">
      <p>性別:</p>
      <select id="sex-select" v-model="sex">
        <option>男</option>
        <option>女</option>
      </select>
    </div>

    <button id="confirmBtn" @click="operation">{{type}}</button>

    <div id="crud-table">
      <table>
        <tr id="table-title">
          <th>姓名</th>
          <th>年紀</th>
          <th>性別</th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
        <tr
          is="CrudItem"
          @edit-item="editItem"
          @remove-item="removeItem"
          v-for="(item, index) in items"
          :crud="item"
          :index="index"
          :key="index"
        ></tr>
      </table>
    </div>
  </div>
</template>


<script>
import CrudItem from "@/components/CrudItem.vue";
export default {
  name: "CRUD",
  components: {
    CrudItem
  },
  data() {
    return {
      type: "create",
      target: null,
      name: "",
      age: "",
      sex: "男",
      items: [
        {
          name: "j",
          age: 10,
          sex: "男"
        },
        {
          name: "o",
          age: 11,
          sex: "女"
        },
        {
          name: "f",
          age: 12,
          sex: "男"
        },
        {
          name: "j",
          age: 13,
          sex: "男"
        },
        {
          name: "g",
          age: 14,
          sex: "男"
        },
        {
          name: "i",
          age: 15,
          sex: "男"
        }
      ]
    };
  },
  methods: {
    initInput() {
      this.name = "";
      this.age = "";
      this.sex = "男";
    },
    checkInput() {
      return !this.name || !this.age | isNaN(+this.age);
    },
    operation() {
      if (this.checkInput()) {
        alert("請輸入正確資料");
        return;
      }
      if (this.type === "create") {
        this.items.push({
          name: this.name,
          age: this.age,
          sex: this.sex
        });
        this.initInput();
      } else {
        let target = this.items[this.target];
        target.name = this.name;
        target.age = this.age;
        target.sex = this.sex;
        this.initInput();
        this.target = null;
        this.type = "create";
      }
    },
    editItem(index) {
      console.log(index);
      let target = this.items[index];
      this.type = "confirm";
      this.name = target.name;
      this.age = target.age;
      this.sex = target.sex;
      this.target = index;
    },
    removeItem(index) {
      this.items.splice(index, 1);
      if (this.target === index) {
        this.initInput();
        this.type = "create";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.crud {
  margin: auto;
  box-sizing: border-box;
  border: 1px solid gray;
  width: 40vw;
  font-size: 0;
}

#crud-table {
  width: 100%;
}

.input-container {
  width: 50%;
  margin: 10px;
  margin-left: 20%;
}

.input-item,
#sex-select {
  margin-left: 10px;
  height: 25px;
  width: 60%;
}

#confirmBtn {
  margin-left: 20%;
  margin-bottom: 10px;
  width: 20%;
  height: 25px;
  background-color: lightblue;
}

p {
  display: inline-block;
  font-size: 20px;
}

table {
  width: 100%;
  border: 0;
}

#table-title {
  width: 100%;
  height: 40px;
  background-color: lightblue;
}

th {
  font-size: 20px;
  color: black;
}
button {
  min-width: 20px;
}

h5 {
  display: inline-block;
  font-size: 15px;
  position: relative;
  background-color: white;
  top: -10px;
  left: 20px;
}
</style>