<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const user = route.params.user
</script>

<template>
  <div class="airline-info">
    <div v-if="user">
      <div v-if="user.error" class="error">{{ user.error }}</div>
      <div v-else class="company-card">
        <p><strong>Company:</strong> {{ user.company?.name }}</p>
        <p><strong>Catch Phrase:</strong> {{ user.company?.catchPhrase }}</p>
      </div>
    </div>
    <RouterLink to="/" class="back-btn">Back to Home</RouterLink>
  </div>
</template>

<style scoped>
.airline-info {
  max-width: 500px;
  margin: 40px auto;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.company-card {
  background: #f5f7fa;
  border-radius: 6px;
  padding: 16px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.error {
  color: #e74c3c;
  font-weight: bold;
  margin-bottom: 12px;
}
.back-btn {
  display: inline-block;
  margin-top: 24px;
  padding: 8px 20px;
  background: #3498db;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
}
.back-btn:hover {
  background: #217dbb;
}
</style>
