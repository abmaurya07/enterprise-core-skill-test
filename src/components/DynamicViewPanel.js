import React from "react";
import { useSelector } from "react-redux";
import componentMap from "@UIComponents/index";
import FeatureFlaggedComponent from "HOC/FeatureFlaggedComponent";
import ComponentMenu from "@components/ComponentMenu";

const DynamicViewPanel = () => {
  const activeApp = useSelector((state) => state.applications.activeApp);
  const { name: ComponentName, version: ComponentVersion } = useSelector(
    (state) => state.viewPanelComponent
  );

  const Component = componentMap[ComponentName]?.[ComponentVersion];

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
      <div className="flex-1">
        <FeatureFlaggedComponent
          componentName={ComponentName}
          componentVersion={ComponentVersion}
          Component={Component}
        />
      </div> : <div className="flex-1 flex items-center justify-center min-h-screen bg-gray-100">
        {ComponentName && !Component ? 'No Component Found in the directory' : 'No Component Selected'}
      </div>
      }
      <ComponentMenu />
    </div>
  );
};

export default DynamicViewPanel;
