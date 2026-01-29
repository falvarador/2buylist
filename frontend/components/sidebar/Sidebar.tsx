import {Head} from "@/components//sidebar/Head.tsx";

import {Button} from "@/components/modal/Button.tsx";

import {currentListIndex, shoppingLists} from "@/islands/state.ts";

export function Sidebar() {
  const setCurrentListIndex = (index: number) => {
    // Placeholder function to set the current list index
    console.log("Set current list index to:", index);
  };

  return (
    <aside class="w-80 bg-white dark:bg-darkSidebar border-r border-slate-200 dark:border-slate-800 flex-col hidden lg:flex">
      <Head />
      <nav
        id="sidebar-lists"
        class="flex-1 overflow-y-auto px-4 space-y-1 py-2"
      >
        {shoppingLists.value.map((list, index) => (
          <div
            key={list.id}
            onClick={() => setCurrentListIndex(index)}
            data-id={list.id}
            className={`group flex items-center p-3 rounded-r-xl cursor-pointer transition-all relative ${
              currentListIndex.value === index
                ? "bg-emerald-50 dark:bg-brand/10 border-l-4 border-brand"
                : "border-l-4 border-transparent hover:bg-slate-50 dark:hover:bg-slate-800"
            }`}
          >
            {/* Grip Icon for Drag & Drop */}
            <div className="absolute left-0 opacity-0 group-hover:opacity-100 cursor-grab active:cursor-grabbing px-1 text-slate-300">
              <i class="fas fa-grip-vertical text-xs"></i>
            </div>

            {/* List Icon Container */}
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 shadow-sm transition-colors ml-2 ${
                currentListIndex.value === index
                  ? "bg-white dark:bg-brand text-brand dark:text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-500"
              }`}
            >
              <i class={`fas ${list.icon} text-sm`}></i>
            </div>

            {/* List Info */}
            <div class="flex-1">
              <p
                class={`font-semibold text-sm ${
                  currentListIndex.value === index
                    ? "text-emerald-700 dark:text-emerald-400"
                    : "text-slate-700 dark:text-slate-300"
                }`}
              >
                {list.name}
              </p>
              <p class="text-[11px] text-slate-400 font-medium">
                {list.items.length} items
              </p>
            </div>
          </div>
        ))}
      </nav>

      <Button />
    </aside>
  );
}
