import { FormEvent, ReactElement } from "react";
import create from "zustand";

interface ModalState {
  title: string;
  content: string | ReactElement;
  isOpen: boolean;
  data: [] | {};
  cancelText: string;
  confirmText: string;
  setIsOpen: (isOpen: boolean, options: {} | undefined) => void;
  toggle: (options: {}) => void;
  onCancel: () => void;
  onConfirm: () => void;
  onClose: () => void;
  setData: (data: [] | {}) => void;
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
}

export const createModalStore = () =>
  create<ModalState>((set, get) => ({
    title: "Confirm Action",
    content: "",
    isOpen: false,
    data: [],
    cancelText: "Cancel",
    confirmText: "Confirm",
    setIsOpen: (isOpen, options) => set(() => ({ isOpen, ...options })),
    toggle: (options) => {
      const { isOpen, setIsOpen } = get();
      setIsOpen(!isOpen, options);
    },
    // TODO: Finalise
    onCancel: () => {},
    onConfirm: () => {},
    onClose: () => {},
    setData: (data) => set(() => ({ data })),
    handleChange: (e) => {
      const { name, value } = e.target as HTMLInputElement;
      const { data, setData } = get();
      setData({ ...data, [name]: value });
    },
  }));

export const useModalStore = createModalStore();
