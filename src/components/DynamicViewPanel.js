import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import componentMap from '@UIComponents';

const DynamicViewPanel = () => {
  const { currentComponent, appConfig } = useSelector((state) => state.app);
  const [DynamicComponent, setDynamicComponent] = useState(null);

  useEffect(() => {
    if (currentComponent && appConfig) {
      console.log('currentComponent', currentComponent);
      const componentConfig = appConfig.components.find(comp => comp.type === currentComponent);
      console.log('componentConfig', componentConfig);
      if (componentConfig) {
        const { type, version } = componentConfig;
        const Component = componentMap[type]?.[version];
        setDynamicComponent(() => Component);
      }
    }
  }, [currentComponent, appConfig]);

  return (
    <div className="p-6 bg-gray-100 flex-1">
      {DynamicComponent ? (
        <React.Suspense fallback={
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-600 text-lg">Loading...</div>
          </div>
        }>
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <DynamicComponent />
          </div>
        </React.Suspense>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-600 text-lg">Select a component from the menu.</p>
        </div>
      )}
    </div>
  );
};

export default DynamicViewPanel;
