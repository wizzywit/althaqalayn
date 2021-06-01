import { Layout, Menu, Grid } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'
import { createElement, useState } from 'react'
const { SubMenu } = Menu
const { useBreakpoint } = Grid

const { Header, Sider, Content } = Layout

const Structure = () => {
  const [state, setState] = useState({
    collapsed: false
  })
  const screens = useBreakpoint()
  console.log(screens)

  const toggle = () => {
    setState({
      collapsed: !state.collapsed
    })
  }

  const isMobile = () => {
    return Object.entries(screens)
      .filter(
        screen => screen[0] === 'lg' || screen[0] === 'xl' || screen[0] === 'md'
      )
      .every(ele => !ele[1])
  }

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={state.collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'sticky',
          left: 0
        }}
        breakpoint='md'
        collapsedWidth={isMobile() ? 0 : 80}
        onBreakpoint={broken => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className='logo' />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          <Menu.Item key='1' icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key='2' icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key='sub1' icon={<UserOutlined />} title='User'>
            <Menu.Item key='3'>Tom</Menu.Item>
            <Menu.Item key='4'>Bill</Menu.Item>
            <Menu.Item key='5'>Alex</Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' icon={<TeamOutlined />} title='Team'>
            <Menu.Item key='6'>Team 1</Menu.Item>
            <Menu.Item key='8'>Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key='9' icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }}>
          {createElement(
            state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle
            }
          )}
        </Header>
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            overflow: 'initial'
          }}
        >
          Content
          <h1 className='test'>Test</h1>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Structure
