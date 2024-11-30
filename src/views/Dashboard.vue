<!-- src/views/Dashboard.vue -->
<template>
  <div class="dashboard">
    <div class="stats-cards">
      <div class="stat-card">
        <h3>총 사용자</h3>
        <div class="stat-value">{{ userCount }}</div>
      </div>
      <div class="stat-card">
        <h3>총 부서</h3>
        <div class="stat-value">{{ departmentCount }}</div>
      </div>
      <div class="stat-card">
        <h3>총 그룹</h3>
        <div class="stat-value">{{ groupCount }}</div>
      </div>
    </div>
    <div class="recent-activity">
      <h3>최근 활동</h3>
      <div class="activity-list">
        <div v-for="activity in recentActivities" :key="activity.id" class="activity-item">
          {{ activity.description }}
          <span class="activity-time">{{ activity.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { apiService } from '@/api/api.js'

export default {
  setup() { // vue3 에서는 setup 함수로 컴포넌트가 생성될 때 실행된다.

    // ref로 반응형 데이터 선언
    const userCount = ref(0)
    const departmentCount = ref(0)
    const groupCount = ref(0)

    const countDepartments = (deps) => { // 재귀로 json 데이터를 탐색하면서 전체 부서 수 체크. 이 부분은 데이터에 따라서 달라질 수 있다.
      return deps.reduce((count, dept) => {
        return count + 1 + (dept.children ? countDepartments(dept.children) : 0)
      }, 0)
    }

    const recentActivities = [
      { id: 1, description: '새로운 사용자 등록: 김OO', time: '10분 전' },
      { id: 2, description: '부서 이동: 이OO → 프론트엔드팀', time: '1시간 전' },
      { id: 3, description: '그룹 생성: 개발팀', time: '2시간 전' },
    ]

    // 데이터 로드 함수
    const loadData = async () => {
      try {
        const [users, departments, groups] = await Promise.all([
          apiService.getUsers(),
          apiService.getDepartments(),
          apiService.getGroups()
        ])

        userCount.value = users.data.length
        departmentCount.value = countDepartments(departments.data)
        groupCount.value = groups.data.length
      } catch (error) {
        console.error('데이터 로딩 실패:', error)
      }
    }

    // 컴포넌트 마운트 시 데이터 로드
    onMounted(loadData);

    return {
      userCount,
      departmentCount,
      groupCount,
      recentActivities
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: 1rem;
}

.stats-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-card {
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.stat-value {
  font-size: 2rem;
  font-weight: bold;
  color: #228be6;
}

.recent-activity {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.activity-item {
  padding: 0.75rem 0;
  border-bottom: 1px solid #dee2e6;
}

.activity-time {
  float: right;
  color: #868e96;
  font-size: 0.875rem;
}
</style>