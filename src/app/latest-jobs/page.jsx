"use client";

import LatestJobsPage from "@/ui/Jobs";
import { useState } from "react";

export default function JobsWrapper({ initialPage = 1 }) {
  const [page, setPage] = useState(initialPage);

  return (
    <div>
      <LatestJobsPage page={page} onPageChange={setPage} />
    </div>
  );
}