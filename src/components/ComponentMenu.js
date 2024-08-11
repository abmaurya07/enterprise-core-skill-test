import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentApp, setMenuItems, setComponent } from '../redux/features/appSlice';

const ComponentMenu = () => {
  const dispatch = useDispatch();
  const { currentApp, appConfig } = useSelector((state) => state.app);


  const handleComponentClick = (componentName) => {
    dispatch(setComponent(componentName));
  };

  return (
    <nav className="p-4 bg-gray-800 text-white">
    
      {currentApp && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Components</h2>
          <ul className="space-y-2">
            {appConfig.components.map((component) => (
              <li key={component.type}>
                <button
                  onClick={() => handleComponentClick(component.type)}
                  className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  {component.displayName}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default ComponentMenu;
