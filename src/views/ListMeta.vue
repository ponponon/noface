<template>
  <div>
    <el-input
      v-model="filterPersonId"
      placeholder="输入 person_id 进行筛选"
    ></el-input>
    <el-date-picker
      v-model="filterStartDate"
      type="date"
      placeholder="开始时间"
      :picker-options="pickerOptions"
      style="margin-left: 10px"
    ></el-date-picker>
    <el-date-picker
      v-model="filterEndDate"
      type="date"
      placeholder="结束时间"
      :picker-options="pickerOptions"
      style="margin-left: 10px"
    ></el-date-picker>
    <el-button type="primary" @click="fetchData" style="margin-left: 10px"
      >查询</el-button
    >

    <div v-if="isLoading" class="loading-container">
      <el-loading text="Loading..." :full-screen="true"></el-loading>
    </div>

    <el-table :data="tableData">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="created_at" label="创建时间"></el-table-column>
      <el-table-column prop="updated_at" label="更新时间"></el-table-column>
      <el-table-column prop="person_id" label="Person ID"></el-table-column>
      <el-table-column prop="hash_code" label="哈希码"></el-table-column>
      <el-table-column prop="file_path" label="文件路径"></el-table-column>
      <el-table-column prop="face_count" label="人脸数量"></el-table-column>
      <el-table-column label="文件">
        <template #default="{ row }">
          <img :src="row.file_url" style="max-width: 100%; max-height: 100px" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      filterPersonId: "",
      filterStartDate: null,
      filterEndDate: null,
      isLoading: false,
      tableData: [],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const params = {
        person_id: this.filterPersonId,
        created_at_start: this.filterStartDate
          ? this.filterStartDate.toISOString().substring(0, 10)
          : null,
        created_at_end: this.filterEndDate
          ? this.filterEndDate.toISOString().substring(0, 10)
          : null,
      };
      try {
        const response = await axios.get(
          "http://127.0.0.1:6200/meta/image_file",
          { params }
        );
        this.tableData = response.data;
      } catch (error) {
        console.error(error);
      }
      this.isLoading = false;
    },
  },
};
</script>
