<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="Person ID">
        <el-input v-model="personId"></el-input>
      </el-form-item>
      <el-form-item label="Created At">
        <el-date-picker v-model="createdAt" type="date" placeholder="Select date"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="fetchData">Search</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="created_at" label="Created At"></el-table-column>
      <el-table-column prop="updated_at" label="Updated At"></el-table-column>
      <el-table-column prop="person_id" label="Person ID"></el-table-column>
      <el-table-column prop="hash_code" label="Hash Code"></el-table-column>
      <el-table-column label="Image">
        <template #default="{ row }">
          <img :src="row.file_url" class="image-cell" />
        </template>
      </el-table-column>
      <el-table-column prop="face_count" label="Face Count"></el-table-column>
      <el-table-column label="File URL">
        <template #default="{ row }">
          <a :href="row.file_url" target="_blank">{{ row.file_url }}</a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ImageFile",
  data() {
    return {
      personId: "",
      createdAt: null,
      tableData: [],
    };
  },
  methods: {
    async fetchData() {
      const params = {
        person_id: this.personId,
        created_at_start: this.createdAt ? this.createdAt[0] : undefined,
        created_at_end: this.createdAt ? this.createdAt[1] : undefined,
      };
      const { data } = await axios.get("http://127.0.0.1:6200/meta/image_file", { params });
      this.tableData = data.map((item) => {
        const img = new Image();
        img.src = item.file_url;
        const width = img.width > img.height ? 100 : (img.width / img.height) * 100;
        const height = img.width > img.height ? (img.height / img.width) * 100 : 100;
        return {
          ...item,
          imgWidth: `${width}px`,
          imgHeight: `${height}px`,
        };
      });
    },
  },
};
</script>

<!-- <style scoped>
.el-table img.image-cell {
  width: 100%;
  height: 100%;
  object-fit: contain;
  max -->
