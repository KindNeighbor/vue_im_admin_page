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
import { users, departments, groups } from '../mock/data'

export default {
  setup() {
    const countDepartments = (deps) => {
      return deps.reduce((count, dept) => {
        return count + 1 + (dept.children ? countDepartments(dept.children) : 0)
      }, 0)
    }

    const recentActivities = [
      { id: 1, description: '새로운 사용자 등록: 김철수', time: '10분 전' },
      { id: 2, description: '부서 이동: 홍길동 → 프론트엔드팀', time: '1시간 전' },
      { id: 3, description: '그룹 생성: 개발팀', time: '2시간 전' },
    ]

    return {
      userCount: users.length,
      departmentCount: countDepartments(departments),
      groupCount: groups.length,
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