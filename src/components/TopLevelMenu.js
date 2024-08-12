import React from 'react';
import { useSelector } from 'react-redux';

const TopLevelMenu = () => {
  const activeApp = useSelector(state => state.applications.activeApp);
  const menuItems = activeApp ? activeApp.menu : [];

  return (
    <nav className=" p-6 ">
       {activeApp ? 
       <>
      <h3 className="text-2xl font-bold m-2">
       {activeApp.name} Menu
      </h3>
      <ul className="flex bg-gray-900 p-6 rounded-lg shadow-lg text-white ">
        {menuItems.map((item, index) => (
          <li key={index} className="hover:bg-gray-700 p-2 rounded-lg">
            <a href="#" className="block text-white hover:text-yellow-200">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      </> : 

<p className="text-gray-500 m-2">Please select an application to view the menu.</p>
}
    </nav>
  );
};

export default TopLevelMenu;
