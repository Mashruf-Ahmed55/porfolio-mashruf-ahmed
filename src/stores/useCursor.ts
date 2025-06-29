import { create } from 'zustand';

type CursorType = 'default' | 'hover' | 'text';

interface CursorState {
  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;
}

export const useCursor = create<CursorState>((set) => ({
  cursorType: 'default',
  setCursorType: (type) => set({ cursorType: type }),
}));
