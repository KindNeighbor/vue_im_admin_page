<!-- src/components/common/DataTable.vue -->
<template>
  <div class="data-table">
    <div class="table-controls">
      <input
          type="text"
          v-model="searchQuery"
          placeholder="검색..."
          class="search-input"
      >
    </div>
    <table>
      <thead>
      <tr>
        <th v-for="column in columns" :key="column">
          {{ column }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in filteredItems" :key="item.id">
        <td v-for="column in columns" :key="column">
          {{ item[column.toLowerCase()] }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const searchQuery = ref('')

    const columns = computed(() => {
      if (!props.items.length) return []
      return Object.keys(props.items[0])
          .filter(key => key !== 'id')
          .map(key => key.charAt(0).toUpperCase() + key.slice(1))
    })

    const filteredItems = computed(() => {
      return props.items.filter(item =>
          Object.values(item).some(value =>
              String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
          )
      )
    })

    return {
      searchQuery,
      columns,
      filteredItems
    }
  }
}
</script>

<style scoped>
.data-table {
  width: 100%;
}

.table-controls {
  margin-bottom: 1rem;
}

.search-input {
  padding: 0.5rem;
  width: 200px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #dee2e6;
}

th {
  background-color: #f8f9fa;
}

tr:hover {
  background-color: #f8f9fa;
}
</style>