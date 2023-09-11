const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hi Boolean',
        image : "./assets/img/spiderlily.png",
      }
    }
  }).mount('#app')