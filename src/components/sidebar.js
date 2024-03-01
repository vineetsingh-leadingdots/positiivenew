import React, { useState } from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { BasketIcon, CalendarIcon, CompanyGoalsIcon, ComplianceIcon, ExperienceIcon, HardwareChipIcon, HeartCircleIcon, HomeIcon, PeopleCircleIcon, SearchIcon, SparklesIcon } from '../commonComponents/commonSvg';

const items = [
  { label: 'Home', key: '1', icon: <HomeIcon/>, link: '/dashboard' },
  { label: 'Search', key: '2', icon: <SearchIcon/>, link: '/search' },
  { label: 'Order History', key: '3', icon: <BasketIcon/>, link: '/order-history' },
  { label: 'Calendar', key: '4', icon: <CalendarIcon/>, link: '/calendar' },
  { label: 'Favorites', key: '5', icon: <HeartCircleIcon/>, link: '/favorites' },
  { label: 'Education', key: '6', icon: <ExperienceIcon/>, link: '/education' },
  { label: 'Experiences', key: '7', icon: <SparklesIcon/>, link: '/experiences' },
  { label: 'Suppliers', key: '8', icon: <PeopleCircleIcon/>, link: '/suppliers' },
  { label: 'Company Goals', key: '9', icon: <CompanyGoalsIcon/>, link: '/company-goals' },
  { label: 'Innovations', key: '10', icon: <HardwareChipIcon/>, link: '/innovations' },
  { label: 'Industry News', key: '11', icon: <CompanyGoalsIcon />, link: '/industry-news' },
  { label: 'Compliance', key: '12', icon: <ComplianceIcon/>, link: '/compliance' },
  { label: 'Logout', key: '13', icon: <LogoutOutlined style={{fontSize:"20px"}} />, link: '/logout' },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
 
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        itemHeight={50}
      >
        {items.map(item => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.link}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Sidebar;

