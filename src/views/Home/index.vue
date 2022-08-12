<script setup>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import CustomHeader from './CustomHeader.vue'
import Contact from './Contact.vue'

const router = useRouter()

onBeforeMount(() => {
  const token = window.localStorage.getItem('token')

  if (token) {
    router.push({ name: 'Feedbacks' })
  }
})
</script>

<template>
  <CustomHeader />
  <Contact />
  <div class="flex justify-center bg-gray-50">
    <p class="text-gray-800 font-bold py-10">feedbacker © 2020 </p>
  </div>
</template>
