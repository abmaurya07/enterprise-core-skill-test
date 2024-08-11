import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentApp, setMenuItems, setComponent } from '../redux/features/appSlice';

const MainMenu = () => {
  const dispatch = useDispatch();
  const { menuItems } = useSelector((state) => state.app);
  console.log('menuItems', menuItems);

  const handleAppClick = async (appName) => {
    const { default: appConfig } = await import(`../apps/${appName}/appConfig.json`);
    console.log('config', appConfig);
    dispatch(setCurrentApp({
      currentApp: appName,
      appConfig: appConfig
    }));

  };


  return (
    <nav className="p-4 bg-gray-800 text-white">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Applications</h2>
        <ul className="flex items-center gap-5">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleAppClick(item.name)}
                className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {item.displayName}
              </button>
            </li>
          ))}
        </ul>
      </div>
     
    </nav>
  );
};

export default MainMenu;
