import React from "react";
import { Select } from "../../../components/ui";
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
        <div>Office Name</div>
        <div>{modalData.office.name}</div>
      </div>
      <div>
        <div>User</div>
        <Select
          alternateStyle={false}
          disabled={false}
          value={modalData.selectedUser}
          isClearable={false}
          onChange={(value: any) => setModalData({ ...modalData, selectedUser: value })}
          options={userOptions}
        />
      </div>
    </div>
  );
};

export default OfficeModal;
