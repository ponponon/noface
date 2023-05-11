<template>
  <div class="search-box">
    <el-input v-model="keyword" placeholder="请输入搜索关键字"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="search"
      >搜索</el-button
    >
  </div>
  <div v-if="result">
    <h3>搜索结果</h3>
    <div v-for="(item, index) in result" :key="index" class="result-item">
      <!-- <a :href="link">链接 -->

      <a
        :href="
          'http://text-search.mediawise.vobile.cn/meta/text?meta_uuid=' +
          item.identifier
        "
        target="_blank"
      >
        <p>identifier: {{ item.identifier }}</p>
      </a>
      <p>score: {{ item.score }}</p>
      <ul>
        <li v-for="(match, i) in item.extra.matches" :key="i">{{ match }}</li>
      </ul>
      <p>母本总句子数: {{ item.extra.bank_text_length }}</p>
      <p>匹配上了样本句子数: {{ item.extra.dup_text_length }}</p>
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
.result-item {
  /* height: 40px;
  width: 70%; */
  border: 1px solid var(--el-border-color);
  border-radius: 0;
  margin-top: 20px;
}
</style>
