import {darkMode} from "@/islands/state.ts";

export function Head() {
  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
  };

  return (
    <header class="p-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold tracking-tight">My Lists</h1>
      <button
        type="button"
        class="text-slate-400 hover:text-brand transition-colors"
        onClick={toggleDarkMode}
      >
        <i class={`fas text-lg ${darkMode.value ? "fa-sun" : "fa-moon"}`} />
      </button>
    </header>
  );
}
