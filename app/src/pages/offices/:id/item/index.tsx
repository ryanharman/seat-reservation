import { Button, Card, Checkbox, Col, Form, Input, Row, Skeleton, Typography } from 'antd';
import React from 'react';
import { useMatch, useNavigate } from 'react-router-dom';

import { ArrowLeftOutlined } from '@ant-design/icons';

import { useOfficeGet } from '../../../../api';
import { useBookableItemGet, useBookableItemPost } from '../../../../api/useBookableItem';
import { BookableItem } from '../../../../types';
import { OfficePageContainer } from '../components/OfficePageContainer';

const { Title } = Typography;

const BookableItems = () => {
  const navigate = useNavigate();
  const match = useMatch('offices/:id/bookable-item/:id');

  const officeId = match?.pathname.split('/')[2];
  const { data: office } = useOfficeGet({ id: officeId });

  const { data: item, isFetching } = useBookableItemGet({ id: match?.params.id });
  const { mutateAsync, isLoading: isMutateLoading } = useBookableItemPost();

  const onFinish = (values: BookableItem) => {
    mutateAsync({ ...values, id: item?.id });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  // AntDesigns form doesnt like initialValues being changed so we have to do a check
  // to see if the cached data from RQ is stale and not matching the current item.
  // Bit of a nightmare it seems but this may not be exclusive to antD
  const itemId = String(item?.id);
  const isActualData = !isFetching && itemId === match?.params.id;

  return (
    <OfficePageContainer office={office}>
      <Title
        level={5}
        onClick={() => navigate(`/offices/${officeId}`)}
        className="flex items-center gap-2 cursor-pointer group px-6 pt-2"
      >
        <ArrowLeftOutlined className="transition-all group-hover:text-blue-500" />
        Return to Office Information
      </Title>
      <Row gutter={24}>
        <Col span={12}>
          <Card>
            <Title level={5}>
              <Row className="gap-4 items-center">
                <Col className="flex items-center gap-2 pb-4">Bookable Item</Col>
              </Row>
            </Title>
            <Skeleton loading={!isActualData}>
              <Form
                name="item"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
                initialValues={item}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Type"
                  name="type"
                  rules={[{ required: true, message: 'Please select a type' }]}
                  // TODO: Selection of item types
                >
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
                <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
                  <Button type="primary" htmlType="submit" loading={isMutateLoading}>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Skeleton>
          </Card>
        </Col>
      </Row>
    </OfficePageContainer>
  );
};

export default BookableItems;
