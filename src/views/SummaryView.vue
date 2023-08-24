<script setup lang="ts">
import { onMounted } from 'vue';
import { rotateElement } from '../scripts/rotate_element'

const props = defineProps({
  attempts_count: String
})

// Scripts for the component

onMounted(() => {
  const thonk_gif = document.getElementById("thonk-gif") as HTMLElement
  rotateElement(thonk_gif);
})

</script>

<template>
  <div class="container">
    <!-- HTML elements for the component -->
    <div class="titles">
      <img id="thonk-gif" src="../assets/thonk.png" />
      <h1 id="game-title">You guessed it!</h1>
      <p id="attempts-count">After {{ props.attempts_count as string }} times</p>
    </div>
    <div class="action-buttons">
      <button @click="$router.push('/generatingrandomnumber')">Play again</button>
      <button @click="$router.push('/')">Go home</button>
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
  gap: 30px;
  margin-top: 10px;
}

#game-title {
  font-size: 40px;
}

#thonk-gif {
  position: relative;
  width: 200px;
  border-radius: 200px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 10px solid var(--accent-color);
}

.action-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.action-buttons button {
  all: unset;
  font-size: 35px;
  border-bottom: 3px solid var(--accent-color);
  transition: 0.2s;
}

.action-buttons button:hover {
  transform: scale(1.2);
}

#attempts-count {
  font-size: 25px;
}
</style>