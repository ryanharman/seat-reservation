import React from "react";
import { Input } from "../../../components/ui";
import { useModalStore } from "../../../stores";
import { OfficeModalData } from "../../../types";

interface OfficeModalProps {}

const OfficeModal = ({}: OfficeModalProps) => {
  const handleChange = useModalStore((state) => state.handleChange);
  const modalData: OfficeModalData = useModalStore((state) => state.data);

  return (
    <div className="flex flex-col w-full">
      <div>Office Name</div>
      <Input
        name="officeName"
        value={modalData.officeName}
        onChange={handleChange}
        placeholder=""
      />
    </div>
  );
};

export default OfficeModal;
