"use client";

import { Suspense, useState } from "react";
import LatestJobsPage from "@/ui/Jobs";

function JobsWrapperInner({ initialPage = 1 }) {
  const [page, setPage] = useState(initialPage);

  return (
    <div>
      <LatestJobsPage page={page} onPageChange={setPage} />
    </div>
  );
}

export default function JobsWrapper(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobsWrapperInner {...props} />
    </Suspense>
  );
}