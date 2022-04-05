import { Col, List, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  RightOutlined
} from '@ant-design/icons';

import { useOfficeManagerDelete } from '../../../../api';
import { IconWrapper } from '../../../../components';
import { OfficeManager } from '../../../../types';
import { CreateManagerForm } from './CreateManagerForm';

const { Title } = Typography;

interface ManagerListProps {
  managers?: OfficeManager[];
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
        pagination={{
          pageSize: 10,
          size: 'small',
          hideOnSinglePage: true,
        }}
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
      <CreateManagerForm visible={addNewManager} closeModal={() => setAddNewManager(false)} />
    </div>
  );
};

interface ItemProps {
  item: OfficeManager;
}

const EditableItem = ({ item }: ItemProps) => {
  const navigate = useNavigate();
  return (
    <List.Item
      className="transition-all group hover:bg-slate-100 cursor-pointer"
      onClick={() => navigate(`/users/${item.id}`)}
    >
      <div className="flex items-center justify-between w-full">
        {item.user.firstName} {item.user.lastName}
        <IconWrapper>
          <RightOutlined key="visit" />
        </IconWrapper>
      </div>
    </List.Item>
  );
};

const NotEditableItem = ({ item }: ItemProps) => {
  const { mutateAsync } = useOfficeManagerDelete();

  return (
    <List.Item className="transition-all hover:bg-slate-100">
      <div className="flex items-center justify-between w-full">
        {item.user.firstName} {item.user.lastName}
        <IconWrapper onClick={() => mutateAsync(item.id)}>
          <DeleteOutlined />
        </IconWrapper>
      </div>
    </List.Item>
  );
};
