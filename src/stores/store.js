import { create } from "zustand";

const useStore = create((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (task) =>
    set((state) => ({ tasks: state.tasks.filter((item) => item !== task) })),
}));

export default useStore;
