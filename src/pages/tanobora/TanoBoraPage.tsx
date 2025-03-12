import { useStore } from "@/store/store";

import TanoboraCard from "./TanoboraCard";

const TanoBoraPage = () => {
  const organization = useStore((state) => state.store.organization);

  if (!organization || !organization.name) {
    return <div>Loading...</div>;
  }

  console.log(organization);

  return (
    <main className="p-2 grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
      <TanoboraCard />
      <TanoboraCard />
      <TanoboraCard />
      <TanoboraCard />
    </main>
  );
};

export default TanoBoraPage;
