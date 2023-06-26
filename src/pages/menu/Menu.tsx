import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("会议室列表", "1"),
  getItem("预定历史", "2"),
];

const SiderMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header bg-white px-0>
          <span ml-4 text-6>
            会议室预定系统
          </span>
        </Header>
        <Content mx-4 flex="~ col">
          <Breadcrumb
            items={[
              {
                title: "Home",
              },
              {
                title: <a href="">Application Center</a>,
              },
              {
                title: <a href="">Application List</a>,
              },
              {
                title: "An Application",
              },
            ]}
          />
          <div bg-white flex-grow>
            Bill is a cat.
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SiderMenu;
