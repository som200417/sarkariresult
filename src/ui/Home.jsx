import TopIntro from "../components/TopIntro";
import HighlightCards from "../components/HighlightCards";
import BreakingNews from "../components/BreakingNews";
import LatestJobs from "../components/LatestJobsinfo";
import ResultsBox from "../components/ResultsBox";
import AdmitCardBox from "../components/AdmitCardBox";
import AnswerKeyBox from "../components/AnswerKeyBox";
import DocumentsBox from "../components/DocumentsBox";
import AdmissionBox from "../components/AdmissionBox";
import HomeStaticContent from "../components/HomeStaticContent";

export default function Home({ homeData }) {
  if (!homeData) return null;

  return (
    <div className="space-y-4 md:space-y-6">

      {/* INTRO */}
      <div className="site-container">
        <TopIntro />
      </div>

      {/* HIGHLIGHTS */}
      <div className="site-container">
        <HighlightCards data={homeData.highlights} />
      </div>

      {/* BREAKING NEWS */}
      <div className="site-container">
        <BreakingNews data={homeData.breaking_news} />
      </div>

      {/* MAIN GRID */}
      <div className="site-container">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <ResultsBox data={homeData.results} />
          <AdmitCardBox data={homeData.admit_cards} />
          <LatestJobs data={homeData.latest_jobs} />
          <AnswerKeyBox data={homeData.answer_keys} />
          <DocumentsBox data={homeData.documents} />
          <AdmissionBox data={homeData.admissions} />
        </div>
      </div>

      <HomeStaticContent highlights={homeData.highlights} />
    </div>
  );
}