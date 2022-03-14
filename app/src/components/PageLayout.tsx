import { Layout as AntdLayout, Menu } from 'antd';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { HomeOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';

const { Content, Footer, Sider } = AntdLayout;

interface LayoutProps {
  children: React.ReactNode;
  footer?: React.ReactNode | string;
  className?: string;
}

const PageLayout = ({ children, footer, className }: LayoutProps) => {
  const { pathname } = useLocation();
  console.log({ pathname });
  console.log(pathname.split('/')[1]);
  // TODO: {useLocation()} to calculate selectedItem after each render.
  // If user opens the app on offices it currently wont show as being
  // on the offices page
  // TODO: Initial param of route needs to determine which item is selected
  // EG: offices/:id should highlight office
  const [selectedItem, setSelectedItem] = useState(['1']);
  const navigate = useNavigate();

  return (
    <AntdLayout className="h-screen">
      <Sider className="overflow-y-auto h-screen fixed left-0">
        <Menu
          theme="dark"
          selectedKeys={selectedItem}
          mode="inline"
          onSelect={(i: any) => setSelectedItem(i.keyPath)}
        >
          <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => navigate('/')}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />} onClick={() => navigate('/users')}>
            Users
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<ShopOutlined />}
            title="Offices"
            onClick={() => navigate('/offices')}
          >
            Offices
          </Menu.Item>
        </Menu>
      </Sider>
      <AntdLayout>
        <Content className={`pl-4 pr-6 py-8 overflow-y-auto ${className}`}>{children}</Content>
        {footer && <Footer>{footer}</Footer>}
      </AntdLayout>
    </AntdLayout>
  );
};

export default PageLayout;
