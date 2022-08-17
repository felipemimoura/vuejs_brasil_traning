<script setup>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import useModal from '../../hooks/useModal'
import Contact from './Contact.vue'
import CustomHeader from './CustomHeader.vue'

const router = useRouter()
const modal = useModal()

const handleLogin = () => {
  modal.open({
    component: 'ModalLogin'
  })
}

const handleAccountCreate = () => {
  modal.open({
    component: 'ModalCreateAccount'
  })
}

onBeforeMount(() => {
  const token = window.localStorage.getItem('token')

  if (token) {
    router.push({ name: 'Feedbacks' })
  }
})

</script>

<template>
  <CustomHeader @login="handleLogin" @create-account="handleAccountCreate" />
  <Contact />
  <div class="flex justify-center bg-gray-50">
    <p class="text-gray-800 font-bold py-10">feedbacker © 2020 </p>
  </div>
</template>
