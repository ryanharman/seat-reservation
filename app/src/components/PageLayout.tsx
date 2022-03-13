import { Layout as AntdLayout, Menu } from 'antd';
import React from 'react';

import {
  DesktopOutlined,
  FileOutlined,
  HomeOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';

const { Content, Footer, Sider } = AntdLayout;
const { SubMenu } = Menu;

interface LayoutProps {
  children: React.ReactNode;
  footer?: React.ReactNode | string;
  className?: string;
}

const PageLayout = ({ children, footer, className }: LayoutProps) => {
  return (
    <AntdLayout className="h-screen">
      <Sider className="overflow-y-auto h-screen fixed left-0">
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Reservations
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            Your Profile
          </Menu.Item>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Offices">
            <Menu.Item key="4">Generic Office Name</Menu.Item>
            <Menu.Item key="5">Generic Office Name</Menu.Item>
          </SubMenu>
          <Menu.Item key="6" icon={<FileOutlined />}>
            Files
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
