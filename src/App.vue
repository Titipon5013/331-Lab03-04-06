<script setup>
import { useMessageStore } from './stores/message.js'
import CustomProgressBar from './components/CustomProgressBar.vue'
const messageStore = useMessageStore()
</script>

<template>
  <div>
    <header>
      <div id="flashMessage" v-if="messageStore.messages">
        <h4>{{ messageStore.messages }}</h4>
      </div>
    </header>
    <CustomProgressBar />
    <router-view />
  </div>
</template>

<style scoped>
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
