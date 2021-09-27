import React from "react";
import { Input } from "../../../components/ui";
import { useModalStore } from "../../../stores";
import { BuildingModalData } from "../../../types";

interface BuildingModalProps {}

const BuildingModal = ({}: BuildingModalProps) => {
  const handleChange = useModalStore((state) => state.handleChange);
  const modalData: BuildingModalData = useModalStore((state) => state.data);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="text-gray-800">Building Name</div>
        <Input
          name="buildingName"
          value={modalData.buildingName}
          onChange={handleChange}
          placeholder=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default BuildingModal;
