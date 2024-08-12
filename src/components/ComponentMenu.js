import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions from Redux Store
import { setViewPanelComponent } from '@store/features/viewPanelComponentSlice';
import { updateFeatureFlags } from '@store/features/featureFlagsSlice';
import { Panel } from '@xyflow/react';



//-------------------Component Menu-------------------
const ComponentMenu = () => {
  const dispatch = useDispatch();

  //Get the active application components from redux store
  const appComponents = useSelector(state => state.applications.appComponents);

  //Get the feature flags from redux store
  const featureFlags = useSelector(state => state.featureFlags);
  
  //State to track the selected component
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    setSelectedComponent(null);
  }, [appComponents]);

  //  Function to handle component click
  //  Will dispatch action to set the active component to render on view Panel
  //  Will also set the selected component in format name-version
  const handleComponentClick = (name, version) => {
    dispatch(setViewPanelComponent({ name, version }));
    setSelectedComponent(`${name}-${version}`); 
  };

  const handleToggleFlag = (componentName, version) => {
    // Check if the component exists in the feature flags
    const componentExists = featureFlags[componentName] !== undefined;
    
    // If the component does not exist, create a new empty object for it
    const updatedComponent = componentExists 
      ? featureFlags[componentName]
      : {};
  
    // If the version does not exist, initialize it as false
    const currentStatus = updatedComponent[version] !== undefined 
      ? updatedComponent[version] 
      : false;
  
    // Update the feature flags with the toggled value
    const updatedFlags = {
      [componentName]: {
        [version]: !currentStatus,
      },
    };
  
    // Dispatch the updated flags
    dispatch(updateFeatureFlags(updatedFlags));
  };
  

  return (
    <nav className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-100">Components</h2>
        <ul className="space-y-2">
          {appComponents.map((component) => {
            const { name, version } = component;
            const isFeatureEnabled = featureFlags[name]?.[version];

            return (
              <li key={`${name}-${version}`} className="flex items-center justify-between">
                <button
                  onClick={() => handleComponentClick(name, version)}
                  disabled={!isFeatureEnabled}  // Disable button if feature is not enabled
                  className={`flex-1 py-2 px-4 rounded-lg text-left focus:outline-none focus:ring-2 ${
                    selectedComponent === `${name}-${version}`
                      ? 'bg-blue-600 text-white focus:ring-blue-400'  // Style for selected component
                      : isFeatureEnabled
                      ? 'bg-gray-700 hover:bg-gray-600 focus:ring-gray-500'
                      : 'bg-gray-500 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {name} - {version}
                </button>
                <label className="ml-4 flex items-center">
                  <input
                    type="checkbox"
                    checked={isFeatureEnabled}
                    onChange={() => handleToggleFlag(name, version)}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-gray-300">Enabled</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default ComponentMenu;

