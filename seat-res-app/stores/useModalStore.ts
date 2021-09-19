import { FormEvent, ReactElement } from "react";
import create from "zustand";

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
  setData: (data: any) => void;
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
}

export type ModalOptions = {
  title: string;
  content: string | ReactElement;
  data: any;
  cancelText: string;
  confirmText: string;
};

const initialOptions = {
  title: "Confirm Action",
  content: "",
  isOpen: false,
  data: [],
  cancelText: "Cancel",
  confirmText: "Confirm",
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
    onCancel: () => {
      const { setIsOpen } = get();
      setIsOpen(false);
    },
    onConfirm: () => {
      const { setIsOpen } = get();
      setIsOpen(false);
    },
    onClose: () => {
      const { setIsOpen } = get();
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
