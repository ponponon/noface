<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <div v-for="item in items" :key="item.id">
      <img :src="item.file_url" alt="" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    fetchData() {
      axios
        .get("http://127.0.0.1:6200/meta/image_file")
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
