<script setup>
import { currentListIndex, darkMode, lists, showModal, toggleDarkMode } from '@/scripts/state.ts'
</script>

<template>
  <aside class="sidebar">
    <header>
      <h2>2BuyList</h2>
      <button class="btn-icon" @click="toggleDarkMode">
        <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
      </button>
    </header>

    <nav id="sidebar-lists" style="flex: 1">
      <div v-for="(list, index) in lists"
           :key="list.id"
           :class="['list-item', { active: currentListIndex === index }]"
           @click="currentListIndex = index">
        <i :class="list.icon" style="margin-right: 15px"></i>
        <div>
          <div style="font-weight: 600">{{ list.name }}</div>
          <small style="color: var(--text-muted)">{{ list.items.length }} items</small>
        </div>
      </div>
    </nav>

    <footer style="padding: 24px">
      <button class="btn-primary" style="width: 100%" @click="showModal = true">+ New List</button>
    </footer>
  </aside>
</template>
