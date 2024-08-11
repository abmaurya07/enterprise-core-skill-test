import React, { Suspense, lazy, useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';



const loadComponent = async (componentName) => {



    // Use React.lazy for other components
    return lazy(() => import(`../dynamicComponents/${componentName}`));
  
}

const ViewPanel = () => {
  const activeComponent = useSelector((state) => state.components.activeComponent);
  const [DynamicComponent, setDynamicComponent] = useState(null);
  useEffect(() => {
    const load = async () => {
      const component = await loadComponent(activeComponent);
      setDynamicComponent(() => component);
    };

    load();
  }, [activeComponent]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {DynamicComponent && <DynamicComponent />}
    </Suspense>
  );
};

export default ViewPanel;
