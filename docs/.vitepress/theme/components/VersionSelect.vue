<template>
  <div class="version-select">
    <div class="version-current" @click="toggleDropdown">
      <span class="version-text">{{ currentVersion }}</span>
      <svg class="version-arrow" :class="{ 'rotated': isOpen }" width="12" height="12" viewBox="0 0 12 12">
        <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="version-dropdown" v-if="isOpen">
      <div 
        v-for="version in versions" 
        :key="version.text"
        class="version-option"
        :class="{ 'active': version.text === currentVersion }"
        @click="selectVersion(version)"
      >
        {{ version.text }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  currentVersion: {
    type: String,
    default: 'v1'
  },
  versions: {
    type: Array,
    default: () => [
      { text: 'v1', link: '/api/im/' },
      { text: 'v2', link: '/api/im/v2/' }
    ]
  }
})

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectVersion = (version) => {
  if (version.text !== props.currentVersion) {
    window.location.href = version.link
  }
  isOpen.value = false
}

// 点击外部关闭下拉框
const closeDropdown = (event) => {
  if (!event.target.closest('.version-select')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<style scoped>
.version-select {
  position: relative;
  display: inline-block;
}

.version-current {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: #262626;
  transition: all 0.2s ease;
}

.version-current:hover {
  background: #e6f7ff;
  border-color: #1890ff;
  color: #1890ff;
}

.version-text {
  font-weight: 500;
}

.version-arrow {
  transition: transform 0.2s ease;
}

.version-arrow.rotated {
  transform: rotate(180deg);
}

.version-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  margin-top: 4px;
}

.version-option {
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: #262626;
  transition: background-color 0.2s ease;
}

.version-option:hover {
  background: #f5f5f5;
}

.version-option.active {
  background: #e6f7ff;
  color: #1890ff;
  font-weight: 500;
}

.version-option:first-child {
  border-radius: 4px 4px 0 0;
}

.version-option:last-child {
  border-radius: 0 0 4px 4px;
}
</style> 