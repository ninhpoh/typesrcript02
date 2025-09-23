import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../slices/menuSlice';
import {
  DashboardOutlined,
  DownloadOutlined,
  BarChartOutlined,
  ClockCircleOutlined,
  SettingOutlined
} from '@ant-design/icons';

const Bt05 = () => {
  const collapsed = useSelector((state: any) => state.menu.collapsed);
  const dispatch = useDispatch();

  const menuItems = [
    { icon: <DashboardOutlined />, label: 'Dashboard' },
    { icon: <DownloadOutlined />, label: 'Download' },
    { icon: <BarChartOutlined />, label: 'Statistics' },
    { icon: <ClockCircleOutlined />, label: 'Time' },
    { icon: <SettingOutlined />, label: 'Settings' }
  ];

  return (
    <div style={{ width: collapsed ? '40px' : '200px', transition: '0.3s' }} className=' bg-sky-950 text-white'>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {menuItems.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
            {item.icon}
            {!collapsed && <span style={{ marginLeft: '10px' }}>{item.label}</span>}
          </li>
        ))}
      </ul>
      <div style={{padding: '10px'}} onClick={() => dispatch(toggleMenu())}>
        {collapsed ? '> ' : '< Thu gon'}
      </div>
    </div>
  );
};

export default Bt05;