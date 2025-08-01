import { create } from 'zustand';

type GameState = {
    inventory: string[];
    modal: string | null;
    addToInventory: (item: string) => void;
    openModal: (content: string) => void;
    closeModal: () => void;
}

export const useGameState = create<GameState>((set) => ({
    inventory: [],
    modal: null,
    addToInventory: (item) =>
        set((state) =>
            state.inventory.includes(item) ? state : { inventory: [...state.inventory, item] }
        ),
    openModal: (content) => set({ modal: content }),
    closeModal: () => set({ modal: null }),
}));
