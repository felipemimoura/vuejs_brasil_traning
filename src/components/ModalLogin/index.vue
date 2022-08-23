<script setup>
import useModal from '@/hooks/useModal'
import { reactive } from 'vue'
import { useField } from 'vee-validate'
import { validadeEmptyAndEmail, validadeEmptyAndLength3 } from '../../utils/validade'

const modal = useModal()

const { value: emailValue, errorMessage: emailErrorMessage } = useField('email', validadeEmptyAndEmail)
const { value: passwordValue, errorMessage: passwordErrorMessageValue } = useField('password', validadeEmptyAndLength3)

const state = reactive({
  isLoading: false,
  hasError: false,
  email: {
    value: emailValue,
    errorMessage: emailErrorMessage
  },
  password: {
    value: passwordValue,
    errorMessage: passwordErrorMessageValue
  }
})

const handleSubmit = () => {
  console.log('submit')
}

</script>
<template>
  <header class="flex justify-between">
    <h1 class="text-4xl text-gray-800 font-black">Entre na sua conta</h1>
    <button class="text-4xl text-gray-800 focus:outilne-none" @click="modal.close">&times;</button>
  </header>

  <form class="mt-14 flex flex-col gap-11" @submit.prevent="handleSubmit">
    <label>
      <span class="text-lg text-gray-800 font-medium pb-2 block">Email</span>
      <input :class="{ 'border-band-danger': !!state.email.errorMessage }"
        class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
        placeholder="john.doe@gmail.com" type="email" v-model="state.email.value">
      <span class="block font-medium text-brand-danger" v-if="!!state.email.errorMessage">
        {{ state.email.errorMessage }}</span>
    </label>
    <label>
      <span class="text-lg text-gray-800 font-medium pb-2 block">Senha</span>
      <input :class="{ 'border-band-danger': !!state.password.errorMessage }"
        class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
        placeholder="john.doe@gmail.com" type="password" v-model="state.password.value">
      <span class="block font-medium text-brand-danger" v-if="!!state.password.errorMessage">
        {{ state.password.errorMessage }}</span>
    </label>

    <button :disabled="state.isLoading" :class="{ 'opacity-50': !!state.isLoading }" type="submit"
      class="px-8 py-3 rounded bg-brand-main text-2xl font-bold text-white rounted-full focus:outiline-none transition-all duration-150">Entrar</button>

  </form>
</template>
