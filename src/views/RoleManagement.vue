<template>
  <div class="content">
    <h2>역할 관리</h2>
    <DataTable :items="roles" />
  </div>
</template>

<script>
import DataTable from "@/components/common/DataTable.vue";
import {ref, onMounted, computed} from 'vue'
import { apiService } from '@/api/api.js'

export default {
  components: {
    DataTable,
  },
  setup() {

    const roles = ref([]);

    // 데이터 로드 함수
    const loadData = async () => {
      try {
        const [rolesResponse] = await Promise.all([
          apiService.getRoles()
        ])
        roles.value = rolesResponse.data;
      } catch (error) {
        console.error('데이터 로딩 실패:', error)
      }
    }

    onMounted(loadData);

    return {
      roles
    }
  }
}

</script>

<style scoped>
.content {
  padding: 1rem;
}
</style>