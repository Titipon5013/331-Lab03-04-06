<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const users = ref([])
const loading = ref(true)
const error = ref(null)

const page = ref(Number(route.query.page) || 1)
const size = ref(Number(route.query.size) || 2)

onMounted(async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    users.value = response.data
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})

const totalPages = computed(() => {
  return Math.ceil(users.value.length / size.value)
})

const paginatedUsers = computed(() => {
  const start = (page.value - 1) * size.value
  return users.value.slice(start, start + size.value)
})

watch([users, page, size], () => {
  if (!loading.value && users.value.length > 0 && page.value > totalPages.value) {
    router.replace({ name: 'NotFound' })
  }
})

watch(() => route.query.page, (newPage) => {
  page.value = Number(newPage) || 1
})
watch(() => route.query.size, (newSize) => {
  size.value = Number(newSize) || 2
})

function goToUser(id) {
  router.push(`/passenger/${id}`)
}
function nextPage() {
  if (page.value < totalPages.value) {
    router.push({ path: '/', query: { page: page.value + 1, size: size.value } })
  }
}
function prevPage() {
  if (page.value > 1) {
    router.push({ path: '/', query: { page: page.value - 1, size: size.value } })
  }
}
function changeSize(event) {
  router.push({ path: '/', query: { page: 1, size: Number(event.target.value) } })
}
</script>

<template>
  <div class="home-users">
    <h2>Users</h2>
    <p v-if="loading">Loading...</p>
    <p v-if="error">❌ Error: {{ error }}</p>
    <div v-if="!loading && !error">
      <div class="user-list">
        <div
          v-for="u in paginatedUsers"
          :key="u.id"
          class="user-card"
          @click="goToUser(u.id)"
        >
          <h3>{{ u.name }}</h3>
          <p><strong>Email:</strong> {{ u.email }}</p>
          <p><strong>Username:</strong> {{ u.username }}</p>
        </div>
      </div>
      <div class="pagination-controls">
        <button @click="prevPage" :disabled="page === 1">Prev</button>
        <span>Page {{ page }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="page === totalPages">Next</button>
        <select :value="size" @change="changeSize">
          <option :value="2">2 per page</option>
          <option :value="4">4 per page</option>
          <option :value="6">6 per page</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-users {
  max-width: 700px;
  margin: 40px auto;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.user-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}
.user-card {
  flex: 1 1 45%;
  background: #f5f7fa;
  border-radius: 6px;
  padding: 16px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  margin-bottom: 8px;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.user-card:hover {
  box-shadow: 0 4px 12px rgba(52,152,219,0.15);
}
.user-card h3 {
  margin: 0 0 8px 0;
  font-size: 1.1em;
  color: #2c3e50;
}
.pagination-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}
button {
  padding: 6px 16px;
  border: none;
  border-radius: 4px;
  background: #3498db;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
}
button:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}
select {
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
