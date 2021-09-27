import React from "react";
import { Input, Select } from "../../../components/ui";
import { useModalStore } from "../../../stores";
import { OfficeManagerModalData } from "../../../types";

interface OfficeModalProps {}

const OfficeModal = ({}: OfficeModalProps) => {
  const handleChange = useModalStore((state) => state.handleChange);
  const modalData: OfficeManagerModalData = useModalStore((state) => state.data);
  const setModalData = useModalStore((state) => state.setData);

  const userOptions = modalData.users.map((user) => ({
    value: user.id.toString(),
    label: `${user.firstName} ${user.lastName}`,
  }));

  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="text-gray-800">Office Name</div>
        <Input
          value={modalData.office.name}
          name="officeName"
          onChange={() => {}}
          placeholder="Selected Office"
          disabled={true}
          className="w-full"
        />
      </div>
      <div>
        <div className="text-gray-800">User</div>
        <Select
          alternateStyle={false}
          disabled={false}
          value={modalData.selectedUser}
          isClearable={false}
          onChange={(value: any) => setModalData({ ...modalData, selectedUser: value })}
          options={userOptions}
          placeholder="Select user..."
        />
      </div>
    </div>
  );
};

export default OfficeModal;
