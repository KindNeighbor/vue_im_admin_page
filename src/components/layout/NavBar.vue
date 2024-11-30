<!-- src/components/layout/NavBar.vue -->
<template>
  <nav class="nav-bar">
    <router-link to="/">홈 </router-link>
    <router-link to="/users">사용자 관리 </router-link>
    <router-link to="/departments">부서 관리 </router-link>
    <router-link to="/groups">그룹 관리 </router-link>
    <router-link to="/roles">역할 관리</router-link>
  </nav>
</template>

<style scoped>
.nav-bar {
  padding: 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

.nav-bar a {
  margin-right: 1rem;
  text-decoration: none;
  color: #495057;
}

.nav-bar a.router-link-active {
  color: #228be6;
}
</style>