<!-- src/components/layout/TreeNode.vue -->
<template>
  <div class="tree-node">
    <div
        class="node-content"
        :class="{ 'is-expanded': isExpanded }"
        @click="toggleExpand"
    >
      <span v-if="hasChildren" class="expand-icon">
        {{ isExpanded ? '▼' : '▶' }}
      </span>
      {{ node.name }}
    </div>
    <div v-if="isExpanded && hasChildren" class="children">
      <TreeNode
          v-for="child in node.children"
          :key="child.id"
          :node="child"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'TreeNode',
  props: {
    node: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const isExpanded = ref(false)
    const hasChildren = computed(() => {
      return props.node.children && props.node.children.length > 0
    })

    const toggleExpand = () => {
      isExpanded.value = !isExpanded.value
    }

    return {
      isExpanded,
      hasChildren,
      toggleExpand
    }
  }
}
</script>

<style scoped>
.tree-node {
  padding-left: 1.2rem;
}

.node-content {
  padding: 0.5rem;
  cursor: pointer;
  user-select: none;
}

.node-content:hover {
  background-color: #e9ecef;
}

.expand-icon {
  display: inline-block;
  width: 1rem;
  margin-right: 0.5rem;
}

.children {
  margin-left: 1rem;
}
</style>