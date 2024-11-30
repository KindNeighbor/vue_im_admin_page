<!-- src/components/layout/DepartmentTree.vue -->
<template>
  <div class="department-tree">
    <h3>부서 구조</h3>
    <div class="tree-container">
      <TreeNode
          v-for="dept in departments"
          :key="dept.id"
          :node="dept"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { apiService } from '@/api/api.js'
import TreeNode from './TreeNode.vue'

export default {
  components: {
    TreeNode
  },
  setup() {
    const departments = ref([]);

    // 데이터 로드 함수
    const loadData = async () => {
      try {
        const [departmentsResponse] = await Promise.all([
          apiService.getDepartments()
        ])
        departments.value = departmentsResponse.data;
      } catch (error) {
        console.error('데이터 로딩 실패:', error)
      }
    }

    onMounted(loadData);

    return {
      departments
    }
  }
}
</script>

<style scoped>
.department-tree {
  width: 300px;
  padding: 1rem;
  border-right: 1px solid #dee2e6;
  background-color: #f8f9fa;
}

.tree-container {
  margin-top: 1rem;
}
</style>