<template>
  <div>
    <el-button @click="getData" type="primary">获取数据</el-button>
    <el-table :data="tableData">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="created_at" label="创建时间"></el-table-column>
      <el-table-column prop="updated_at" label="更新时间"></el-table-column>
      <el-table-column prop="person_id" label="人员ID"></el-table-column>
      <el-table-column prop="hash_code" label="哈希码"></el-table-column>
      <el-table-column prop="file_path" label="文件路径"></el-table-column>
      <el-table-column prop="face_count" label="人脸数量"></el-table-column>
      <el-table-column label="文件地址">
        <template #default="{ row }">
          <el-image
            :src="row.file_url"
            fit="scale-down"
            style="max-width: 50px"
          ></el-image>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
import { ElButton, ElTable, ElTableColumn, ElImage } from "element-plus";

export default {
  components: { ElButton, ElTable, ElTableColumn, ElImage },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    getData() {
      axios
        .get("http://127.0.0.1:6200/meta/image_file")
        .then((response) => {
          this.tableData = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
