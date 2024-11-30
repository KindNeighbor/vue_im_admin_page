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
import DepartmentTree from '../components/layout/DepartmentTree.vue'
import DataTable from '../components/common/DataTable.vue'
import { ref, onMounted } from 'vue'
import { apiService } from '@/api/api.js'

export default {
  components: {
    DepartmentTree,
    DataTable
  },
  setup() {
    const showTree = ref(true);
    const users = ref([]);

    // 데이터 로드 함수
    const loadData = async () => {
      try {
        const [usersResponse] = await Promise.all([
          apiService.getUsers()
        ])
        users.value = usersResponse.data;
      } catch (error) {
        console.error('데이터 로딩 실패:', error)
      }
    }

    onMounted(loadData);

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