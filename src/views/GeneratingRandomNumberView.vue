<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

import { getRandomInt } from '../scripts/get_random_int'
import { rotateElement } from '../scripts/rotate_element'

// Scripts for the component
var proceed = true

onMounted(() => {
  const thonk_gif = document.getElementById("thonk-gif") as HTMLElement
  rotateElement(thonk_gif);
  const router = useRouter()
  setTimeout(() => {
    if (proceed) {
      router.push("/guessnumber")
    }
  }, getRandomInt(3000) + 1000)
})

onUnmounted(() => {
  proceed = false
})

</script>

<template>
  <div class="container">
    <!-- HTML elements for the component -->
    <div class="titles">
      <h1 id="game-title">Thinking of a new number...</h1>
      <img id="thonk-gif" src="../assets/thonk.gif" />
    </div>
  </div>
</template>

<style scoped>
/* CSS styles for the component */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 25px;
  gap: 40px;
}

.titles {
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
}

#game-title {
  font-size: 40px;
}

#thonk-gif {
  position: relative;
  width: 200px;
  border-radius: 200px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 10px solid var(--accent-color);
}
</style>