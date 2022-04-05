import { Button, Form, Modal, Select } from 'antd';
import React from 'react';

import { useOfficeManagerPut } from '../../../../api/useOfficeManager';
import { OfficeManager } from '../../../../types';

interface CreateManagerFormProps {
  visible: boolean;
  closeModal: () => void;
}

export const CreateManagerForm = ({ visible, closeModal }: CreateManagerFormProps) => {
  const { mutateAsync } = useOfficeManagerPut();

  const onFinish = (data: OfficeManager) => {
    mutateAsync({ ...data });
  };

  return (
    <Modal
      title="Add New Manager"
      visible={visible}
      onOk={() => console.log('add new manager to some state')}
      onCancel={() => closeModal()}
    >
      <Form
        name="item"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 12 }}
        // initialValues={officeManager}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Select User"
          name="user"
          rules={[{ required: true, message: 'Please select a user' }]}
          // TODO: Selection of item types
        >
          <Select />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
