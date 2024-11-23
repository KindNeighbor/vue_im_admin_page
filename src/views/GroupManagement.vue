<!-- src/views/GroupManagement.vue -->
<template>
  <div class="content">
    <h2>그룹 관리</h2>
    <DataTable :items="groups" />
  </div>
</template>

<script>
import DataTable from '../components/common/DataTable.vue'
import { groups } from '../mock/data'

export default {
  components: {
    DataTable
  },
  setup() {
    return {
      groups
    }
  }
}
</script>

<style scoped>
.content {
  padding: 1rem;
}
</style>