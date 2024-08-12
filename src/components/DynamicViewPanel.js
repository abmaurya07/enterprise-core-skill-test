import React from "react";
import { useSelector } from "react-redux";

//HOC for Checking Whether Feature is enabled or not
import FeatureFlaggedComponent from "HOC/FeatureFlaggedComponent"; 

//UI Components with lazy loading
import componentMap from "@UIComponents/index";

//Component Menu from to display Components of the application
import ComponentMenu from "@components/ComponentMenu";

const DynamicViewPanel = () => {

  //Get the active application from redux store
  const activeApp = useSelector((state) => state.applications.activeApp);

  //Get the active component for View Panel from redux store
  const { name: ComponentName, version: ComponentVersion } = useSelector(
    (state) => state.viewPanelComponent
  );


  //Get the component from the component map based on the name and version
  const Component = componentMap[ComponentName]?.[ComponentVersion];


  //If no application is selected, display 'No App selected' message
  if (!activeApp) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        No App selected
      </div>
    );
  }


  

  return (
    <div className="p-6 gap-5 flex min-h-dvh">
      { ComponentName && Component?
      //Render the Component if the component is found
      <div className="flex-1">
        <FeatureFlaggedComponent
          componentName={ComponentName}
          componentVersion={ComponentVersion}
          Component={Component}
        />
      </div> : (<div className="flex-1 flex items-center justify-center min-h-screen bg-gray-100">
        {ComponentName && !Component ? 'No Component Found in the directory' : 'No Component Selected'}
      </div>) //Display 'No Component Found' message if the component is not found in Component MAp.
      }
      <ComponentMenu />
    </div>
  );
};

export default DynamicViewPanel;
