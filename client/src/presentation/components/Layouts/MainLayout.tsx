import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Flex, Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { MdClear } from 'react-icons/md';

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const getMobileSize = () => {
        const mobileMediaQuery = window.matchMedia('(max-width: 767px)');

        const handleMobileChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        mobileMediaQuery.addEventListener('change', handleMobileChange);
        setIsMobile(mobileMediaQuery.matches);

        return () => {
            mobileMediaQuery.removeEventListener('change', handleMobileChange);
        };
    };

    useEffect(() => getMobileSize(), [collapsed, isMobile]);

    return (
        <Layout className='min-h-screen'>
            <Sider
                theme='light'
                width={isMobile ? (collapsed ? '100%' : '0') : '250px'}
                collapsed={isMobile ? false : collapsed}
            >
                <Flex
                    className='px-8 py-4'
                    justify='space-between'
                    align='center'
                >
                    <h1 className='text-xl font-medium'>Sistem LSP</h1>
                    <MdClear
                        className='text-xl md:hidden'
                        onClick={() => {
                            if (isMobile) {
                                setCollapsed(false);
                            }
                        }}
                    />
                </Flex>

                <Menu
                    theme='light'
                    mode='inline'
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header className='p-0 bg-white'>
                    <Button
                        type='text'
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )
                        }
                        onClick={() => {
                            if (isMobile) {
                                setCollapsed(true);
                            }
                        }}
                        className='!w-16 !h-16 !text-sm md:hidden'
                    />
                </Header>
                <Content className='mx-6 my-4 p-6 min-h-[280px] bg-white rounded-md'>
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
