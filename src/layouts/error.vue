<template>
  <div class="error">
    <div>页面发生错误</div>
    <div>{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: 'error',
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style scoped></style>
