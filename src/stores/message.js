import { defineStore } from 'pinia'
export const useMessageStore = defineStore('message', {
  state: () => ({
    messages: ''
  }),
  actions: {
    updateMessages(message) {
      this.messages = message
    },
    resetMessages() {
      this.messages = ''
    }
  }
})
