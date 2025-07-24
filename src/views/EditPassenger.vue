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
.edit-passenger label {
  display: block;
  margin-bottom: 12px;
  font-weight: 500;
  color: #2c3e50;
}
.edit-passenger input[type="text"],
.edit-passenger input[type="email"],
.edit-passenger input[type="tel"] {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  margin-top: 4px;
  box-sizing: border-box;
  transition: border-color 0.2s;
}
.edit-passenger input:focus {
  border-color: #1a73e8;
  outline: none;
}
.edit-passenger button[type="submit"] {
  margin-top: 12px;
  padding: 10px 28px;
  background: #1a73e8;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 1px 4px rgba(26,115,232,0.08);
}
.edit-passenger button[type="submit"]:hover {
  background: #1760c4;
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
