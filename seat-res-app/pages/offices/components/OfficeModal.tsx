import { useQuery } from "@apollo/client";
import React from "react";
import { Input, Select } from "../../../components/ui";
import { getBuildings } from "../../../services";
import { useModalStore } from "../../../stores";
import { Building, OfficeModalData } from "../../../types";

interface OfficeModalProps {}

const OfficeModal = ({}: OfficeModalProps) => {
  const handleChange = useModalStore((state) => state.handleChange);
  const modalData: OfficeModalData = useModalStore((state) => state.data);
  const setModalData = useModalStore((state) => state.setData);
  const { data: buildingData } = useQuery(getBuildings);

  const buildingOptions = buildingData?.buildings.map((building: Building) => ({
    value: building.id.toString(),
    label: building.name,
  }));

  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="text-gray-800">Office Name</div>
        <Input
          name="officeName"
          value={modalData.officeName}
          onChange={handleChange}
          placeholder=""
          className="w-full"
        />
      </div>
      <div>
        <div className="text-gray-800">Building</div>
        <Select
          alternateStyle={false}
          disabled={false}
          value={modalData.selectedBuilding}
          isClearable={false}
          onChange={(value: any) => setModalData({ ...modalData, selectedBuilding: value })}
          options={buildingOptions}
          placeholder="Select building..."
        />
      </div>
    </div>
  );
};

export default OfficeModal;
