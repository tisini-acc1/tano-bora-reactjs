import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Store = {
  organization: Organization;
};

export type State = {
  store: Store;
};

export type Actions = {
  updateOrg: (org: Organization) => void;
};

const initialState: Store = {
  organization: {
    id: "",
    name: "",
    logo: "",
    description: null,
    slug: "",
    primary_color: "",
    secondary_color: "",
    created_at: "",
    updated_at: "",
  },
};

export const useStore = create<State & Actions>()(
  persist(
    (set) => ({
      store: initialState,
      updateOrg(org) {
        set((state) => ({ store: { ...state.store, organization: org } }));
      },
    }),
    { name: "store" }
  )
);
