<template>
  <div v-if="visible" class="custom-progress-bar">
    <div class="bar" :style="{ width: percent + '%' }"></div>
    <span class="percent">{{ percent }}%</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const percent = ref(0)
const visible = ref(false)
let timer = null
const router = useRouter()

function startProgress() {
  percent.value = 0
  visible.value = true
  timer = setInterval(() => {
    if (percent.value < 90) {
      percent.value += Math.floor(Math.random() * 10) + 1
      if (percent.value > 90) percent.value = 90
    }
  }, 100)
}

function finishProgress() {
  clearInterval(timer)
  percent.value = 100
  setTimeout(() => {
    visible.value = false
  }, 400)
}

onMounted(() => {
  router.beforeEach((to, from, next) => {
    startProgress()
    next()
  })
  router.afterEach(() => {
    finishProgress()
  })
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.custom-progress-bar {
  position: fixed;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  width: 320px;
  height: 28px;
  background: #e0e0e0;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
}
.bar {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: linear-gradient(90deg, #1a73e8 60%, #42a5f5 100%);
  border-radius: 16px;
  transition: width 0.2s;
  z-index: 1;
}
.percent {
  position: relative;
  z-index: 2;
  color: #222;
  font-weight: bold;
  font-size: 1.1em;
  letter-spacing: 1px;
}
</style>
