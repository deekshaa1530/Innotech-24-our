import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Reports</a></li>
          <li><a href="/profile">Prescription</a></li>
          <li><a href="Order">Order Medicines</a></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
