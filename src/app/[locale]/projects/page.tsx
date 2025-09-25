import SearchQuery from "@/components/ui/searchs/SearchQuery";
import projects from "@/mocks/projects/index.json";
export default function Proyects() {
  return (
    <>
      <SearchQuery
        data={projects}
        scope={"projects"}
        keywords={["react"]}
      ></SearchQuery>
      <div className="flex justify-start align-top bg-amber-50">
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
      </div>
    </>
  );
}
