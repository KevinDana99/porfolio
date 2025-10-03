import WrapperCertifications from "../WrapperCertifications";
export default function Certifications({ params }: { params: { id: string } }) {
  return <WrapperCertifications id={params.id} />;
}
