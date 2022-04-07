import { Badge, Col, List, Row, Space, Typography } from 'antd';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  RightOutlined
} from '@ant-design/icons';

import { useBookableItemDelete } from '../../../../api';
import { IconWrapper } from '../../../../components';
import { BookableItem } from '../../../../types';
import { CreateBookableItemForm } from './CreateItemForm';

const { Title, Text } = Typography;

interface ItemListProps {
  bookableItems?: BookableItem[];
}

export const ItemList = ({ bookableItems }: ItemListProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [addNewItem, setAddNewItem] = useState<boolean>(false);

  if (!bookableItems || bookableItems.length === 0)
    return <Text>No bookable items found for this office...</Text>;

  return (
    <div>
      <Title level={5}>
        <Row className="justify-between items-center">
          <Col className="flex items-center gap-2">Bookable Items</Col>
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
        dataSource={bookableItems?.sort((a, b) => (a.type > b.type ? -1 : 1))}
        split={false}
        size={'small'}
        renderItem={(i) => (editMode ? <NotEditableItem item={i} /> : <EditableItem item={i} />)}
        footer={
          editMode && (
            <IconWrapper onClick={() => setAddNewItem(true)}>
              <PlusOutlined />
              Add new item
            </IconWrapper>
          )
        }
      />
      <CreateBookableItemForm closeModal={() => setAddNewItem(false)} visible={addNewItem} />
    </div>
  );
};

interface ItemProps {
  item: BookableItem;
}

const EditableItem = ({ item }: ItemProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <List.Item
      className="transition-all group hover:bg-slate-100 cursor-pointer"
      onClick={() => navigate(`${pathname}/bookable-item/${item.id}`)}
    >
      <div className="flex items-center justify-between w-full">
        <Space size={'small'}>
          <Badge color={item.availableForBooking ? 'green' : 'red'} />
          <div>
            {item.type} {item.label}
          </div>
        </Space>
        <IconWrapper>
          <RightOutlined key="visit" />
        </IconWrapper>
      </div>
    </List.Item>
  );
};

const NotEditableItem = ({ item }: ItemProps) => {
  const { mutateAsync } = useBookableItemDelete();

  return (
    <List.Item className="transition-all hover:bg-slate-100">
      <div className="flex items-center justify-between w-full">
        <Space size={'small'}>
          <Badge color={item.availableForBooking ? 'green' : 'red'} />
          <div>
            {item.type} {item.label}
          </div>
        </Space>
        <IconWrapper onClick={() => mutateAsync(item.id)}>
          <DeleteOutlined />
        </IconWrapper>
      </div>
    </List.Item>
  );
};
