<script setup lang="ts">
// Scripts for the component
</script>

<template>
  <div class="container">
    <!-- HTML elements for the component -->
    <div class="titles">
      <img id="thonk-gif" src="./assets/thonk.gif" />
      <h1 id="game-title">Guess The Number:<br><b>The Video Game</b></h1>
    </div>
    <div class="game-action-buttons">
      <button>Start</button>
      <button>High scores</button>
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

#game-title {
  font-size: 40px;
}

#thonk-gif {
  position: relative;
  width: 200px;
  border-radius: 20px;
  margin-bottom: 20px;
  border: 10px solid var(--accent-color);
}

.game-action-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.game-action-buttons button {
  all: unset;
  font-size: 35px;
  border-bottom: 3px solid var(--accent-color);
  transition: 0.2s;
}

.game-action-buttons button:hover {
  transform: scale(1.2);
}
</style>