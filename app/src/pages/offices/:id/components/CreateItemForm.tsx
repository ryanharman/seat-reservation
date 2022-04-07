import { Checkbox, Form, Input, Modal } from 'antd';
import React from 'react';
import { useMatch } from 'react-router-dom';

import { useBookableItemPut } from '../../../../api';
import { BookableItem } from '../../../../types';

interface CreateBookableItemFormProps {
  visible: boolean;
  closeModal: () => void;
}

export const CreateBookableItemForm = ({ visible, closeModal }: CreateBookableItemFormProps) => {
  const match = useMatch('offices/:id');
  const officeId = Number(match?.params.id);
  const { mutateAsync, isLoading } = useBookableItemPut();

  const [item] = Form.useForm();

  const onFinish = (data: BookableItem) => {
    mutateAsync([{ ...data, officeId }]);
  };

  return (
    <Modal
      title="Add New Bookable Item"
      visible={visible}
      onOk={
        () =>
          item.validateFields().then((values) => {
            item.resetFields();
            onFinish(values);
            closeModal();
          })
        // .catch(info => {
        //   // console.log('Validate Failed:', info);
        // })
      }
      onCancel={() => closeModal()}
      confirmLoading={isLoading}
    >
      <Form
        form={item}
        name="item"
        labelCol={{ span: 8 }}
        labelWrap={true}
        wrapperCol={{ span: 14 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Select Type"
          name="type"
          rules={[{ required: true, message: 'Please select a type' }]}
          // TODO: Selection of item types
        >
          {/* <Select /> */}
          <Input />
        </Form.Item>
        <Form.Item
          label="Label"
          name="label"
          rules={[{ required: true, message: 'Please assign a label' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Available For Booking"
          name="availableForBooking"
          valuePropName="checked"
          wrapperCol={{ span: 12 }}
        >
          <Checkbox></Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
};
