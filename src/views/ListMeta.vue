<template>
  <div>
    <label for="person-id-input">Person ID:</label>
    <input type="text" v-model="personId" id="person-id-input">
    <button @click="fetchData">Fetch Data</button>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Person ID</th>
          <th>Hash Code</th>
          <th>File Path</th>
          <th>Face Count</th>
          <th>File URL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.created_at }}</td>
          <td>{{ item.updated_at }}</td>
          <td>{{ item.person_id }}</td>
          <td>{{ item.hash_code }}</td>
          <td>{{ item.file_path }}</td>
          <td>{{ item.face_count }}</td>
          <td>
            <img :src="item.file_url" :style="{ width: '100px', height: 'auto' }">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      personId: '',
      data: [],
    };
  },
  methods: {
    fetchData() {
      const url = `http://127.0.0.1:6200/meta/image_file?person_id=${this.personId}`;
      axios.get(url)
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>
