<template>
  <div class="search-box">
    <el-input v-model="keyword" placeholder="请输入搜索关键字"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="search"
      >搜索</el-button
    >
  </div>
  <div v-if="result">
    <h3>搜索结果</h3>
    <div v-for="(item, index) in result" :key="index">
      <p>identifier: {{ item.identifier }}</p>
      <p>score: {{ item.score }}</p>
      <ul>
        <li v-for="(match, i) in item.extra.matches" :key="i">{{ match }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "SearchBox",
  setup() {
    const keyword = ref("");
    const result = ref(null);

    const search = async () => {
      const url =
        "http://text-search.mediawise.vobile.cn/v2/meta/sample/search/content";
      const data = {
        content: keyword.value,
      };
      const formData = new FormData();
      formData.append("content", keyword.value);
      try {
        const response = await axios.post(url, formData);
        console.log("response:", response.data);
        result.value = response.data.data;
      } catch (error) {
        console.log("error:", error);
      }
    };

    return { keyword, search, result };
  },
};
</script>

<style>
.search-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20%;
}
</style>
