import Status from "@/components/ui/status/CommingSoon";

export default function Courses() {
  return (
    <div className="flex justify-start align-top bg-amber-50">
      <Status status={null} fullScreen />
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
