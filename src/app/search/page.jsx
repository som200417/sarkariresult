import { Suspense } from "react";
import SearchPage from "@/ui/Search";

export default function Page() {
  return (
    <Suspense fallback={<div className="site-container my-8">Loading...</div>}>
      <SearchPage />
    </Suspense>
  );
}