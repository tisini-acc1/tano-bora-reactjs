import { useStore } from "@/store/store";

// import TanoboraCard from "./TanoboraCard";

const TanoBoraPage = () => {
  const organization = useStore((state) => state.store.organization);

  if (!organization || !organization.name) {
    return <div>Loading...</div>;
  }

  console.log(organization);

  return (
    <main className="p-2 text-black">
      tanobora page
      {organization.name}
      {/* <TanoboraCard /> */}
    </main>
  );
};

export default TanoBoraPage;
