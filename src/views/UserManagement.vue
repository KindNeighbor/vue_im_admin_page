<!-- src/views/UserManagement.vue -->
<template>
  <div class="management-layout">
    <DepartmentTree v-if="showTree" />
    <div class="content">
      <h2>사용자 관리</h2>
      <DataTable :items="users" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import DepartmentTree from '../components/layout/DepartmentTree.vue'
import DataTable from '../components/common/DataTable.vue'
import { users } from '../mock/data'

export default {
  components: {
    DepartmentTree,
    DataTable
  },
  setup() {
    const showTree = ref(true)
    return {
      users,
      showTree
    }
  }
}
</script>

<style scoped>
.management-layout {
  display: flex;
  height: calc(100vh - 56px);
}

.content {
  flex: 1;
  padding: 1rem;
}
</style>