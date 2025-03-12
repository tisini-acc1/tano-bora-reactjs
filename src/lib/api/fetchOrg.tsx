import axios from "axios";

export const getOrganizations = async () => {
  const res = await axios(
    "https://tb-admin.tisini.co.ke/tano-bora/simple-organizations/"
  );

  return res.data;
};
