<template>
    <div class="search-box">
      <el-input v-model="keyword" placeholder="请输入搜索关键字"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'SearchBox',
    setup() {
      const keyword = ref('');
  
      const search = () => {
        console.log('search keyword:', keyword.value);
        // 进行搜索操作
      };
  
      return { keyword, search };
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
  