<script setup lang="ts">
const currentListIndex = ref(0);
const showModal = ref(false);
const darkMode = ref(localStorage.getItem('theme') === 'dark');
const lists = ref([
  {id: 1, name: 'Groceries', icon: 'fas fa-shopping-cart', items: ['Milk', 'Eggs', 'Bread']},
  {id: 2, name: 'Work', icon: 'fas fa-briefcase', items: ['Finish report', 'Email client']},
  {id: 3, name: 'Personal', icon: 'fas fa-user', items: ['Gym', 'Read book']},
]);

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  localStorage.setItem('theme', darkMode.value ? 'dark' : 'light');
};

</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h2>My Lists</h2>
      <button @click="toggleDarkMode" class="btn-icon">
        <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
      </button>
    </div>

    <nav id="sidebar-lists" style="flex: 1">
      <div v-for="(list, index) in lists"
           :key="list.id"
           @click="currentListIndex = index"
           :class="['list-item', { active: currentListIndex === index }]">
        <i :class="list.icon" style="margin-right: 15px"></i>
        <div>
          <p style="font-weight: 600">{{ list.name }}</p>
          <small style="color: var(--text-muted)">{{ list.items.length }} items</small>
        </div>
      </div>
    </nav>

    <div style="padding: 24px">
      <button @click="showModal = true" class="btn-primary" style="width: 100%">
        <i class="fas fa-plus"></i> New List
      </button>
    </div>
  </aside>
</template>
