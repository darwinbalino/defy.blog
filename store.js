import create from "zustand";

const useStore = create((set) => ({
  menu: true,
  toggleMenu: () => set((state) => ({ menu: !state.menu })),
}));

export default useStore;
