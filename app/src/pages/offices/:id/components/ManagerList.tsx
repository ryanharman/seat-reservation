import { Col, List, Modal, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  RightOutlined
} from '@ant-design/icons';

import { IconWrapper } from '../../../../components';
import { User } from '../../../../types';

const { Title } = Typography;

interface ManagerListProps {
  managers: User[];
}

export const ManagerList = ({ managers }: ManagerListProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [addNewManager, setAddNewManager] = useState<boolean>(false);

  return (
    <div>
      <Title level={5}>
        <Row className="justify-between items-center">
          <Col className="flex items-center gap-2">Managers</Col>
          {editMode ? (
            <Col className="flex items-center gap-4">
              <IconWrapper onClick={() => setEditMode(false)}>
                <CloseOutlined />
              </IconWrapper>
            </Col>
          ) : (
            <IconWrapper onClick={() => setEditMode(true)}>
              <EditOutlined />
            </IconWrapper>
          )}
        </Row>
      </Title>
      <List
        itemLayout="horizontal"
        dataSource={managers}
        split={false}
        size={'small'}
        renderItem={(i) => (editMode ? <NotEditableItem item={i} /> : <EditableItem item={i} />)}
        footer={
          editMode && (
            <IconWrapper onClick={() => setAddNewManager(true)}>
              <PlusOutlined />
              Add new manager
            </IconWrapper>
          )
        }
      />
      <Modal
        title="Add New Manager"
        visible={addNewManager}
        onOk={() => console.log('add new manager to some state')}
        onCancel={() => setAddNewManager(false)}
      >
        Add new manager form here m8
      </Modal>
    </div>
  );
};

interface ItemProps {
  item: User;
}

const EditableItem = ({ item }: ItemProps) => {
  const navigate = useNavigate();
  return (
    <List.Item
      className="transition-all group hover:bg-slate-100 cursor-pointer"
      onClick={() => navigate(`/users/${item.id}`)}
    >
      <div className="flex items-center justify-between w-full">
        {item.firstName} {item.lastName}
        <IconWrapper>
          <RightOutlined key="visit" />
        </IconWrapper>
      </div>
    </List.Item>
  );
};

const NotEditableItem = ({ item }: ItemProps) => {
  return (
    <List.Item className="transition-all hover:bg-slate-100">
      <div className="flex items-center justify-between w-full">
        {item.firstName} {item.lastName}
        {/* TODO: React query mutation for deletion */}
        <IconWrapper>
          <DeleteOutlined />
        </IconWrapper>
      </div>
    </List.Item>
  );
};
