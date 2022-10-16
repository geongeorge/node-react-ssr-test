import create from 'zustand'

export const useStore = create((set) => ({
   users: ['Geon', 'Tapan', 'Arjun'],
   addUser: (user) => (state) => set({ users: [ ...state.users, user ]})
}))