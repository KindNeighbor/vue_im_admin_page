<!-- src/views/GroupManagement.vue -->
<template>
  <div class="content">
    <h2>그룹 관리</h2>
    <DataTable :items="groups" />
  </div>
</template>

<script>
import DataTable from '../components/common/DataTable.vue'
import { ref, onMounted } from 'vue'
import { apiService } from '@/api/api.js'

export default {
  components: {
    DataTable
  },
  setup() {

    const groups = ref([]);

    // 데이터 로드 함수
    const loadData = async () => {
      try {
        const [groupsResponse] = await Promise.all([
          apiService.getGroups()
        ])
        groups.value = groupsResponse.data;
      } catch (error) {
        console.error('데이터 로딩 실패:', error)
      }
    }

    onMounted(loadData);

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