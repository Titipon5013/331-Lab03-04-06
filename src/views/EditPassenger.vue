<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useMessageStore } from '../stores/message.js'

const router = useRouter()
const route = useRoute()
const messageStore = useMessageStore()
const user = ref({
  name: route.params.name || '',
  email: route.params.email || '',
  phone: route.params.phone || ''
})

const editEvent = () => {
  messageStore.updateMessages('The event data has been updated.')
  setTimeout(() => {
    messageStore.resetMessages()
    router.push({ path: '/', query: { page: route.query.page, size: route.query.size } })
  }, 2000)
}
</script>

<template>
  <div class="edit-passenger">
    <h2>Edit Passenger</h2>
    <form @submit.prevent="editEvent">
      <label>Name: <input v-model="user.name" /></label><br />
      <label>Email: <input v-model="user.email" /></label><br />
      <label>Phone: <input v-model="user.phone" /></label><br />
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<style scoped>
.edit-passenger {
  max-width: 400px;
  margin: 40px auto;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
@keyframes yelloFade {
  from {
    background-color: yellow;
  }
  to {
    background-color: transparent;
  }
}
#flashMessage {
  animation: yelloFade 3s ease-in-out;
}
</style>
