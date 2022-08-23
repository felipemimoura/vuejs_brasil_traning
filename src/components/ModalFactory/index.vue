<script setup>
import { defineAsyncComponent, onBeforeUnmount, onMounted, reactive } from 'vue'
import useModal from '../../hooks/useModal'
const ModalLogin = defineAsyncComponent(() => import('../ModalLogin'))
const ModalCreateAccount = defineAsyncComponent(() => import('../ModalCreateAcccout'))

const modal = useModal()

const DEFAULT_WIDTH = 'w-3/4 lg:w-1/3'

const components = { ModalLogin, ModalCreateAccount }
const state = reactive({
  isActive: false,
  component: {},
  props: {},
  width: DEFAULT_WIDTH
})

onMounted(() => {
  modal.listen(handleModalStatus)
})

onBeforeUnmount(() => {
  modal.off(handleModalStatus)
})

const handleModalStatus = (payload) => {
  if (payload.status) {
    state.component = payload.component
    state.props = payload.props
    state.width = payload.width ?? DEFAULT_WIDTH
  } else {
    state.component = {}
    state.props = {}
    state.width = DEFAULT_WIDTH
  }
  state.isActive = payload.status
}

</script>

<template>
  <teleport to="body">
    <div v-if="state.isActive" @click="handleModalStatus({ status: false })"
      class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div class="fixed mx-10" :class="state.width" @click.stop>
        <div class="flex flex-col overflow-hidden rounded-lg animate__animated animate__fadeInDown animated_faster">

          <div class="flex flex-col px-12 py-10 bg-white">
            <component :is="components[state.component]" />
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
