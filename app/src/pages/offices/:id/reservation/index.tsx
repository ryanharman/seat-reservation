import { Button, Card, Col, Descriptions, Row, Skeleton, Typography } from 'antd';
import { format } from 'date-fns';
import React from 'react';
import { useMatch, useNavigate } from 'react-router-dom';

import { ArrowLeftOutlined } from '@ant-design/icons';

import {
  useBookableItemGet,
  useOfficeGet,
  useReservationGet,
  useReservationPost
} from '../../../../api';
import { OfficePageContainer } from '../components/OfficePageContainer';

const { Title } = Typography;

const OfficeReservation = () => {
  const navigate = useNavigate();
  const match = useMatch('offices/:id/reservation/:id');

  const officeId = match?.pathname.split('/')[2];
  const { data: office } = useOfficeGet({ id: officeId });

  const { data: reservation, isFetching } = useReservationGet({ id: match?.params.id });
  const { data: bookableItem } = useBookableItemGet(
    { id: reservation?.bookedItemId },
    { enabled: !!reservation }
  );
  const { mutateAsync, isLoading: isMutateLoading } = useReservationPost();

  // AntDesigns form doesnt like initialValues being changed so we have to do a check
  // to see if the cached data from RQ is stale and not matching the current item.
  // Bit of a nightmare it seems but this may not be exclusive to antD
  const reservationId = String(reservation?.id);
  const isActualData = !isFetching && reservationId === match?.params.id;

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
                <Col className="flex items-center gap-2 pb-4">Reservation</Col>
              </Row>
            </Title>
            <Skeleton loading={!isActualData}>
              <Descriptions column={1}>
                <Descriptions.Item label="User">Zhou Maomao</Descriptions.Item>
                <Descriptions.Item label="Booked Item">
                  {bookableItem?.type} {bookableItem?.label}
                </Descriptions.Item>
                <Descriptions.Item label="Date Booked From">
                  {format(reservation?.dateBookedFrom || new Date(), "do 'of' MMMM yyyy HH:mm")}
                </Descriptions.Item>
                <Descriptions.Item label="Date Booked To">
                  {format(reservation?.dateBookedFrom || new Date(), "do 'of' MMMM yyyy HH:mm")}
                </Descriptions.Item>
                <Descriptions.Item label="All day">
                  {reservation?.isAllDay ? 'Yes' : 'No'}
                </Descriptions.Item>
                <Descriptions.Item label="Cancelled">
                  {reservation?.cancelled ? 'Yes' : 'No'}
                </Descriptions.Item>
              </Descriptions>
            </Skeleton>
            <Button
              type="primary"
              danger
              disabled={reservation?.cancelled ? true : false}
              loading={isMutateLoading}
              onClick={() => mutateAsync({ ...reservation, cancelled: true, id: reservation?.id })}
            >
              Cancel Reservation
            </Button>
          </Card>
        </Col>
      </Row>
    </OfficePageContainer>
  );
};

export default OfficeReservation;
