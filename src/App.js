import React from 'react';
import ApplicationSwitcher from '@components/ApplicationSwitcher';
import DynamicViewPanel from '@components/DynamicViewPanel';
import TopLevelMenu from '@components/TopLevelMenu';
function App() {


  return (
    <div className="App">
      <ApplicationSwitcher />
      <TopLevelMenu />
    

      <DynamicViewPanel />

    
    </div>
  );
}

export default App;
