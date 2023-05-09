<template>
  <div class="container">
    <el-input
      v-model="personId"
      placeholder="请输入person_id"
      style="width: 200px"
    ></el-input>
    <el-button type="primary" @click="getImageFiles">搜索</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="80"></el-table-column>
      <el-table-column
        prop="created_at"
        label="创建时间"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="updated_at"
        label="更新时间"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="person_id"
        label="Person ID"
        width="120"
      ></el-table-column>
      <el-table-column
        prop="hash_code"
        label="哈希值"
        width="160"
      ></el-table-column>
      <el-table-column prop="file_path" label="文件路径"></el-table-column>
      <el-table-column
        prop="face_count"
        label="人脸数量"
        width="120"
      ></el-table-column>
      <el-table-column label="图片">
        <template #default="{ row }">
          <img :src="row.file_url" :style="imageStyle" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { ElMessage } from "element-plus";

export default {
  name: "ImageFileList",
  setup() {
    const state = reactive({
      personId: "",
      tableData: [],
    });

    const imageStyle = {
      width: "100%",
      height: "auto",
      maxWidth: "200px",
    };

    const getImageFiles = () => {
      if (!state.personId) {
        ElMessage.error("请输入person_id");
        return;
      }
      // 发送 GET 请求获取数据
      fetch(`http://127.0.0.1:6200/meta/image_file?person_id=${state.personId}`)
        .then((response) => response.json())
        .then((data) => {
          state.tableData = data;
        })
        .catch((error) => {
          console.error("Error:", error);
          ElMessage.error("获取数据失败");
        });
    };

    return {
      ...toRefs(state),
      getImageFiles,
      imageStyle,
    };
  },
};
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
