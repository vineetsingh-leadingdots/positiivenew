import React, { useState } from 'react';
import { LogoutOutlined, ProductOutlined, UsergroupAddOutlined  } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { BasketIcon, CalendarIcon, CompanyGoalsIcon, ComplianceIcon, ExperienceIcon, HardwareChipIcon, HeartCircleIcon, HomeIcon, MasterIcon, PeopleCircleIcon, SearchIcon, SparklesIcon } from '../commonComponents/commonSvg';

const { SubMenu } = Menu;

const items = [
  { label: 'Home', key: '1', icon: <HomeIcon />, link: '/dashboard' },
  { label: 'Search', key: '2', icon: <SearchIcon />, link: '/search' },
  { label: 'Order History', key: '3', icon: <BasketIcon />, link: '/order-history' },
  { label: 'Calendar', key: '4', icon: <CalendarIcon />, link: '/calendar' },
  {
    label: 'Favorites',
    key: '5',
    icon: <HeartCircleIcon />,
  },
  { label: 'Education', key: '6', icon: <ExperienceIcon />, link: '/education' },
  { label: 'Experiences', key: '7', icon: <SparklesIcon />, link: '/experience' },
  {
    label: 'Products', key: '8', icon: <ProductOutlined />,
    children: [
      { label: 'Product List', key: '8-1', link: '/brand/list' },
    ]
  },
  {
    label: 'Master', key: '9', icon: <SettingOutlined />,
    children: [
      { label: 'Brands', key: '9-1', link: '/brand/list' },
      { label: 'Varieties', key: '9-2', link: '/variety/list' },
      { label: 'Attributes', key: '9-3', link: '/attribute/list' },
      {
        label: 'Origin',
        key: '9-sub',
        children: [
          { label: 'Country', key: '9-sub-1', link: '/country/list' },
          { label: 'Region', key: '9-sub-2', link: '/region/list' },
          { label: 'Sub Regions', key: '9-sub-3', link: '/sub/region/list' },
        ],
      },

      { label: 'Sizes', key: '9-4', link: '/size/list' },
      { label: 'Ratings', key: '9-5', link: '/rating/list' },
      { label: 'Styles', key: '9-6', link: '/style/list' },
      { label: 'Categories ', key: '9-7', link: '/category/list' },
      { label: 'Types', key: '9-8', link: '/type/list' },
      { label: 'Sub Types', key: '9-9', link: '/sub/type/list' },
      { label: 'Nose Palates', key: '9-10', link: '/nose/palate/list' },
      { label: 'Classifications', key: '9-11', link: '/classification/list' },
      { label: 'Vintages', key: '9-12', link: '/vintage/list' },
    ],
  },
  { label: 'Suppliers', key: '10', icon: <PeopleCircleIcon />, link: '/suppliers' },
  { label: 'Sales Person', key: '11', icon: <PeopleCircleIcon />, link: '/sales-person/list' },
  { label: 'Company Goals', key: '12', icon: <CompanyGoalsIcon />, link: '/company-goals' },
  { label: 'Innovations', key: '13', icon: <HardwareChipIcon />, link: '/innovations' },
  { label: 'Industry News', key: '14', icon: <CompanyGoalsIcon />, link: '/industry-news' },
  { label: 'Compliance', key: '15', icon: <ComplianceIcon />, link: '/compliance' },
  { label: 'Customer', key: '16', icon: <UsergroupAddOutlined  />, link: '/customer' },
  { label: 'Logout', key: '17', icon: <LogoutOutlined style={{ fontSize: "20px" }} />, link: '/logout' },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (latestOpenKey === undefined || latestOpenKey === null) {
      setOpenKeys([]);
    } else {
      setOpenKeys([latestOpenKey]);
    }
  };

  return (
    <div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={openKeys}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        onOpenChange={onOpenChange}
        itemHeight={50}
      >
        {items.map(item => {
          if (item.children) {
            return (
              <SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.children.map(child => {
                  if (child.children) {
                    return (
                      <SubMenu key={child.key} title={child.label}>
                        {child.children.map(subChild => (
                          <Menu.Item key={subChild.key}>
                            <Link to={subChild.link}>{subChild.label}</Link>
                          </Menu.Item>
                        ))}
                      </SubMenu>
                    );
                  } else {
                    return (
                      <Menu.Item key={child.key}>
                        <Link to={child.link}>{child.label}</Link>
                      </Menu.Item>
                    );
                  }
                })}
              </SubMenu>
            );
          } else {
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.link}>{item.label}</Link>
              </Menu.Item>
            );
          }
        })}
      </Menu>
    </div>
  );
};

export default Sidebar;
