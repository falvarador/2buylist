import { define } from "@/utils.ts";

import { Sidebar } from "@/components/sidebar/Sidebar.tsx";

export default define.page(function Home() {
  return (
    <div class="flex h-screen overflow-hidden">
      <Sidebar />
    </div>
  );
});
