import React from 'react';
import { useSelector } from 'react-redux';

const FeatureFlaggedComponent = ({ componentName,componentVersion, Component }) => {
  const featureFlags = useSelector(state => state.featureFlags);

  console.log('featureFlags', featureFlags);

  if (!featureFlags[componentName][componentVersion]) {
    return <div className='flex items-center justify-center h-full'>Feature is not available</div>;
  }

  return (
    <React.Suspense fallback={
      <div className="flex items-center justify-center h-full">
        <div className="text-gray-600 text-lg">Loading...</div>
      </div>
    }>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Component />
      </div>
    </React.Suspense>
  );
};

export default FeatureFlaggedComponent;
