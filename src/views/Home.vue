<template>
  <div>
    <!-- <h1>Home Page</h1> -->
    <nav>
      <button @click="$router.push({ name: 'ListMeta' })">
        查看已上传的母本
      </button>
      <button @click="$router.push({ name: 'UploadSample' })">
        上传样本进行比对
      </button>
      <button @click="$router.push({ name: 'Search' })">搜索</button>
      <button @click="$router.push({ name: 'TextSearch' })">文本搜索</button>
    </nav>
  </div>
</template>
