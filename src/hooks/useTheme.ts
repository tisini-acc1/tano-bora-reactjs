import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { useStore } from "@/store/store";
import { getOrganizations } from "@/lib/api/fetchOrg";

export const useThemeSync = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const updateOrg = useStore((state) => state.updateOrg);

  const { data, isFetched } = useQuery<Organization[]>({
    queryKey: ["organizations"],
    queryFn: () => getOrganizations(),
  });

  useEffect(() => {
    const slug = location.pathname.split("/")[1];

    if (isFetched && data) {
      const organization = data.find((org) => org.slug === slug);

      if (organization) {
        updateOrg(organization);

        document.documentElement.style.setProperty(
          "--primary-color",
          organization.primary_color || "#0092E0"
        );
        document.documentElement.style.setProperty(
          "--secondary-color",
          organization.secondary_color || "#8AB6D6"
        );
      } else {
        navigate("/404", { replace: true }); // Redirect to 404
      }
    }
  }, [data, isFetched, location.pathname, updateOrg, navigate]);
};
