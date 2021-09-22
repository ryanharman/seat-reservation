import { FormEvent, ReactElement } from "react";
import create from "zustand";

/* We control all of the modal data, content and below values
within the Zustand store so that we only need to render in one
modal to the DOM. The ModalOptions type is what a dev will
populate when using the component. The on*Action functions
can be used for API calls or similar actions when the user
presses the relevant button. 🤯 */

export interface ModalState {
  title: string;
  content: string | ReactElement;
  isOpen: boolean;
  data: any;
  cancelText: string;
  confirmText: string;
  setIsOpen: (isOpen: boolean, options?: ModalOptions) => void;
  toggle: () => void;
  onCancel: (data?: any) => void;
  onConfirm: (data?: any) => void;
  onClose: (data?: any) => void;
  onCancelAction: (data: any) => void;
  onConfirmAction: (data: any) => void;
  onCloseAction: (data: any) => void;
  setData: (data: any) => void;
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
}

export type ModalOptions = {
  title: string;
  content: string | ReactElement;
  data: any;
  cancelText: string;
  confirmText: string;
  onCancelAction?: (data?: any) => void;
  onConfirmAction?: (data?: any) => void;
  onCloseAction?: (data?: any) => void;
};

const initialOptions = {
  title: "Confirm Action",
  content: "",
  isOpen: false,
  data: [],
  cancelText: "Cancel",
  confirmText: "Confirm",
  onCancelAction: () => {},
  onConfirmAction: () => {},
  onCloseAction: () => {},
};

export const createModalStore = () =>
  create<ModalState>((set, get) => ({
    ...initialOptions,
    setIsOpen: (isOpen, options) => {
      set((state) => ({ ...state, ...options, isOpen }));
    },
    toggle: () => {
      const { isOpen } = get();
      set(() => ({ isOpen: !isOpen }));
    },
    onCancel: (data) => {
      const { setIsOpen, onCloseAction } = get();
      onCloseAction(data);
      setIsOpen(false);
    },
    onConfirm: (data) => {
      const { setIsOpen, onConfirmAction } = get();
      onConfirmAction(data);
      setIsOpen(false);
    },
    onClose: (data) => {
      const { setIsOpen, onCloseAction } = get();
      onCloseAction(data);
      setIsOpen(false);
    },
    setData: (data) => set(() => ({ data })),
    handleChange: (e) => {
      const { name, value } = e.target as HTMLInputElement;
      const { data, setData } = get();
      setData({ ...data, [name]: value });
    },
  }));

export const useModalStore = createModalStore();
