<template>
  <div class="content">
    <h2>역할 관리</h2>
    <DataTable :items="roles" />
  </div>
</template>

<script>
import DataTable from "@/components/common/DataTable.vue";
import { roles } from '../mock/data'

export default {
  components: {
    DataTable,
  },
  setup() {
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