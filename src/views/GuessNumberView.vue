<script setup lang="ts">
// Scripts for the component
import { onMounted, ref } from 'vue';
import { getRandomInt } from '../scripts/get_random_int'
import { useRouter } from 'vue-router';

let random_number = getRandomInt(100) + 1

const user_guess = ref<number>()
const router = useRouter()

var result_text: HTMLElement
var attempts_count = 0;

function check_guess() {
  if (user_guess.value == undefined) {
    result_text.innerText = "Enter a number first."
    return
  }

  if (user_guess.value == random_number) {
    attempts_count++
    router.push(`/summary/${attempts_count}`)
    return
  }

  if (user_guess.value > random_number) {
    attempts_count++
    result_text.innerText = "Too high!"
  } else if (user_guess.value < random_number) {
    attempts_count++
    result_text.innerText = "Too low!"
  }
}

onMounted(() => {
  result_text = document.getElementById("result-text") as HTMLElement
})
</script>

<template>
  <div class="container">
    <!-- HTML elements for the component -->
    <div class="title">
      <h1>Make your guess!</h1>
    </div>
    <div class="guess-div">
      <input id="user-guess-input" type="number" v-model="user_guess" placeholder="0 - 100" />
      <button id="check-user-guess-button" @click="check_guess">Check</button>
    </div>
    <div class="result-div">
      <h3 id="result-text"></h3>
    </div>
  </div>
</template>

<style scoped>
/* CSS styles for the component */

.title {
  text-align: center;
  margin-top: 30px;
}

.guess-div {
  display: flex;
  flex-direction: column;
}

#user-guess-input {
  all: unset;
  font-size: 100px;
  text-align: center;
  border-bottom: 10px solid var(--accent-color);
  border-radius: 50px;
  padding: 20px;
  margin: 30px 80px;
  background-color: white;
}

#check-user-guess-button {
  all: unset;
  font-size: 50px;
  box-shadow: 0 8px 30px var(--accent-color), 0 0 5px var(--accent-color);
  padding: 20px;
  text-align: center;
  margin: 30px 80px;
  border-radius: 30px;
  transition: 0.2s;
}

#check-user-guess-button:hover {
  transform: scale(1.05);
}

#check-user-guess-button:active {
  transform: scale(1.02);
}

.result-div {
  text-align: center;
}

.result-div h3 {
  font-size: 40px;
}
</style>