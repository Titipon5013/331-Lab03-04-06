<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const user = route.params.user

function goToEdit() {
  router.push({ name: 'EditPassenger', params: { id: route.params.id, name: user.name, email: user.email, phone: user.phone } })
}
</script>

<template>
  <div class="passenger-info">
    <div v-if="user">
      <div v-if="user.error" class="error">{{ user.error }}</div>
      <div v-else class="user-card">
        <h2>{{ user.name }}</h2>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Phone:</strong> {{ user.phone }}</p>
        <button class="edit-btn" @click="goToEdit">Edit</button>
      </div>
    </div>
    <RouterLink to="/" class="back-btn">Back to Home</RouterLink>
  </div>
</template>

<style scoped>
.passenger-info {
  max-width: 500px;
  margin: 40px auto;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.user-card {
  background: #f5f7fa;
  border-radius: 6px;
  padding: 16px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.user-card h2 {
  margin: 0 0 8px 0;
  font-size: 1.2em;
  color: #2c3e50;
}
.error {
  color: #e74c3c;
  font-weight: bold;
  margin-bottom: 12px;
}
.edit-btn {
  margin-top: 16px;
  padding: 8px 20px;
  background: #27ae60;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.edit-btn:hover {
  background: #219150;
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
