<template>
  <div>
    <h1>Home Page</h1>
    <button @click="$router.push({ name: 'About' })">Go to About page</button>
    <button @click="$router.push({ name: 'ListMeta' })">Go to Contact page</button>
  </div>
</template>
