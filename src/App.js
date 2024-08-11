import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainMenu from './components/MainMenu';
import ComponentMenu from './components/ComponentMenu'
import DynamicViewPanel from './components/DynamicViewPanel';
import globalConfig  from './config/appConfig.json';
import { setMenuItems } from './redux/features/appSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMenuItems(globalConfig.menuItems));
  }, [dispatch]);

  return (
    <div className="App">
      <MainMenu />
      <div className='flex'>
      <DynamicViewPanel />
      <ComponentMenu />
      </div>
    </div>
  );
}

export default App;
