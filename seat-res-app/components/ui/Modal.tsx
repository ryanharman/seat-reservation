import React from "react";
import { UseStore } from "zustand";
import { ModalState } from "../../stores";
import { Button, Card, CardHeader, Icon } from ".";

interface ModalProps {
  useModalStore: UseStore<ModalState>;
}

const Modal = ({ useModalStore }: ModalProps) => {
  const { title, content, isOpen, data, cancelText, confirmText, onCancel, onConfirm, onClose } =
    useModalStore();

  return (
    <>
      {isOpen && (
        <Backdrop onClick={onClose}>
          <div onClick={(e) => e.stopPropagation()} className="z-50">
            <Card className="w-96">
              <CardHeader className="mb-8">
                <div>{title}</div>
                <Icon
                  icon="expand"
                  className="cursor-pointer hover:text-blue-500"
                  width={20}
                  height={20}
                  onClick={() => onClose(data)}
                />
              </CardHeader>
              {content}
              <div className="flex items-center justify-end gap-4 mt-8">
                <Button className="text-sm" primary={false} onClick={() => onCancel(data)}>
                  {cancelText}
                </Button>
                <Button className="text-sm" primary onClick={() => onConfirm(data)}>
                  {confirmText}
                </Button>
              </div>
            </Card>
          </div>
        </Backdrop>
      )}
    </>
  );
};

interface BackdropProps {
  onClick: () => void;
  children: React.ReactChild[] | React.ReactChild;
}

const Backdrop = ({ onClick, children }: BackdropProps) => {
  return (
    <div
      className="fixed flex justify-center items-center bg-black bg-opacity-50 w-screen h-screen z-30"
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
};

export default Modal;
