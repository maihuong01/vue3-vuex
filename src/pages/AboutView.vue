<script setup>
import { computed } from 'vue'
import store from '@/store/store'

const count = computed(() => {
  return store.state.count
})
const nameCount = computed(() => {
  return store.getters.nameCount
})

const increased = () => {
  store.state.count++
}
const increasedOption = () => {
  store.commit('increasedOption', 30)
}
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <span>Count :</span>
      <span>{{ count }}</span>
    </div>
    <div>
      <span>This name Count :</span>
      <span>{{ nameCount }}</span>
    </div>
    <button @click="increased">Increased</button>
    <button @click="increasedOption">Increased Option</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
