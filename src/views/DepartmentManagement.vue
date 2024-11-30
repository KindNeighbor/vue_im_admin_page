<!-- src/views/DepartmentManagement.vue -->
<template>
  <div class="management-layout">
    <DepartmentTree />
    <div class="content">
      <h2>부서 관리</h2>
      <DataTable :items="departmentList" />
    </div>
  </div>
</template>

<script>
import DepartmentTree from '../components/layout/DepartmentTree.vue'
import DataTable from '../components/common/DataTable.vue'
import { departments } from '../mock/data'

export default {
  components: {
    DepartmentTree,
    DataTable
  },
  setup() {
    // 트리 구조를 평면화하여 테이블에 표시
    const flattenDepartments = (deps, parent = null) => {
      return deps.reduce((acc, dept) => {
        const flatDept = {
          id: dept.id,
          name: dept.name,
          parent: parent ? parent.name : '-'
        }

        // 현재 부서를 결과 배열에 추가
        acc.push(flatDept)

        // 자식 부서가 있다면 재귀적으로 처리
        if (dept.children) {
          acc.push(...flattenDepartments(dept.children, dept))
        }

        return acc
      }, [])
    }

    const departmentList = flattenDepartments(departments)

    return {
      departmentList
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