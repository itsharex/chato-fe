<template>
  <div
    :class="[
      'relative transition-all mb-6 cursor-pointer lg:mt-4 lg:mx-8',
      active && 'case-active'
    ]"
    @click="emit('select', index)"
    data-sensors-click
    id="Chato_home_case_button"
    :data-sensors-bot-name="item.title"
  >
    <div
      class="w-[18vw] min-w-[230px] max-w-[280px] border-[0.8px] border-solid border-[#E4E7ED] rounded-2xl bg-white px-3 py-[10px] flex items-center gap-2 text-[#596780] font-medium text-base lg:w-full lg:max-w-none lg:border-[#EBDAFF] lg:text-[#7c5cfc]"
    >
      <img :src="item.logo" class="w-12 h-12 object-cover" />
      <span>{{ item.title }}</span>
    </div>
    <span
      class="w-8 h-8 rounded-full border-[0.8px] border-solid border-[#EBDAFF] bg-white absolute right-4 -top-[15px] flex items-center justify-center lg:right-3"
    >
      <img :src="item.emoji" class="w-[18px] h-[18px]" />
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  active?: boolean
  item: any
  index?: number
}>()

const emit = defineEmits(['select'])
</script>
