import WrapperProjects from "../WrapperProjects";

export default function Proyects({ params }: { params: { id: string } }) {
  return <WrapperProjects id={params.id} />;
}
