<!-- <template>
  <div>
    <input type="file" ref="fileInput" @change="onFileChange" />
    <button @click="uploadFile">上传文件</button>
    <div v-if="response">
      <p>ID: {{ response[0][0].id }}</p>
      <p>创建时间: {{ response[0][0].created_at }}</p>
      <p>更新时间: {{ response[0][0].updated_at }}</p>
      <p>人员ID: {{ response[0][0].person_id }}</p>
      <p>哈希码: {{ response[0][0].hash_code }}</p>
      <p>文件路径: {{ response[0][0].file_path }}</p>
    </div>
  </div>
</template> -->

<template>
  <div>
    <input type="file" ref="fileInput" @change="onFileChange" />
    <button @click="uploadFile">上传文件</button>
    <div v-if="response">
      <ul>
        <li v-for="group in response" :key="group[0].id">
          <ul>
            <li v-for="item in group" :key="item.id">
              <p>ID: {{ item.id }}</p>
              <p>创建时间: {{ item.created_at }}</p>
              <p>更新时间: {{ item.updated_at }}</p>
              <p>人员ID: {{ item.person_id }}</p>
              <p>哈希码: {{ item.hash_code }}</p>
              <p>文件路径: {{ item.file_path }}</p>
              <img :src="imageUrl(item.file_path)" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const file = ref(null);
    const response = ref(null);

    const onFileChange = (e) => {
      file.value = e.target.files[0];
    };

    const uploadFile = async () => {
      const formData = new FormData();
      formData.append("file", file.value);

      try {
        const response2 = await fetch(
          "http://127.0.0.1:6200/sample/image_file",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response2.json();
        console.log(data);
        response.value = data;
      } catch (error) {
        console.error(error);
      }
    };

    const imageUrl = (filePath) => {
      return `http://192.168.31.245:9000/whoisface/${filePath}`;
    };

    return {
      file,
      response,
      onFileChange,
      uploadFile,
      imageUrl
    };
  },
};
</script>
