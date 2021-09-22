import React from "react";
import { Input, Select } from "../../../components/ui";
import { useModalStore } from "../../../stores";
import { OfficeModalData } from "../../../types";

interface OfficeModalProps {}

const OfficeModal = ({}: OfficeModalProps) => {
  const handleChange = useModalStore((state) => state.handleChange);
  const modalData: OfficeModalData = useModalStore((state) => state.data);
  const setModalData = useModalStore((state) => state.setData);

  const buildingOptions = modalData.buildings.map((building) => ({
    value: building.id.toString(),
    label: building.name,
  }));

  return (
    <div className="flex flex-col gap-8">
      <div>
        <div>Office Name</div>
        <Input
          name="officeName"
          value={modalData.officeName}
          onChange={handleChange}
          placeholder=""
          className="w-full"
        />
      </div>
      <div>
        <div>Building</div>
        <Select
          alternateStyle={false}
          disabled={false}
          value={modalData.selectedBuilding}
          isClearable={false}
          onChange={(value: any) => setModalData({ ...modalData, selectedBuilding: value })}
          options={buildingOptions}
        />
      </div>
    </div>
  );
};

export default OfficeModal;
