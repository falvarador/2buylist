import {computed, ref} from "vue";

export const darkMode = ref(localStorage.getItem('theme') === 'dark');
export const showModal = ref(false);
export const currentListIndex = ref(0);
export const newItem = ref('');
export const newList = ref({name: '', icon: 'fa-shopping-cart'});

export const lists = ref([
    {id: '1', name: 'Supermercado', icon: 'fas fa-shopping-cart', items: [{id: 101, text: 'Leche', completed: false}]},
    {id: '2', name: 'Trabajo', icon: 'fas fa-briefcase', items: []}
]);

export const currentList = computed(() => lists.value[currentListIndex.value]);
export const pendingCount = computed(() => currentList.value.items.filter(i => !i.completed).length);

export const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    localStorage.setItem('theme', darkMode.value ? 'dark' : 'light');
};

export const addItem = () => {
    if (!newItem.value.trim()) return;
    currentList.value.items.unshift({id: Date.now(), text: newItem.value, completed: false});
    newItem.value = '';
};

export const removeItem = (index: any) => currentList.value.items.splice(index, 1);

export const createList = () => {
    if (!newList.value.name.trim()) return;
    lists.value.push({...newList.value, id: Date.now().toString(), items: []});
    showModal.value = false;
    newList.value = {name: '', icon: 'fa-shopping-cart'};
};

// onMounted(() => {
//     const el = document.getElementById('sidebar-lists');
//     Sortable.create(el, {
//         animation: 150,
//         onEnd: (evt: any) => {
//             const moved = lists.value.splice(evt.oldIndex, 1)[0];
//             lists.value.splice(evt.newIndex, 0, moved);
//         }
//     });
// });