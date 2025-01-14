import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ModalType =
  | 'delete'
  | 'menu'
  | 'datePicker'
  | 'addTask'
  | 'setLocation'
  | 'loadBookmark'
  | 'webview'
  | 'taskMenu'
  | 'webviewAgreement'
  | 'webviewPolicy';

export interface ModalPayload {
  modalType: ModalType;
  fade?: boolean;
  props?: {
    type: string;
  };
}

export const modal = createSlice({
  name: 'modal',
  initialState: null as ModalPayload | null,
  reducers: {
    setModal: (state, action: PayloadAction<ModalPayload>) => {
      return action.payload;
    },
    removeModal: () => {
      return null;
    },
  },
});

export const { setModal, removeModal } = modal.actions;
export default modal.reducer;
