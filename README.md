# Component Breakdown

## App.js
- **Purpose**: The main entry component for the application.
- **Key Functions**:
  - **Rendering of Layout**: Serves as the container for the entire application.
  - **Integration of Components**: Integrates components: `ApplicationSwitcher`, `TopLevelMenu`, and `DynamicViewPanel`.
  - **Application State Management**: Connects to the Redux store to manage global state.

## ApplicationSwitcher.js
- **Purpose**: Handles the switching between different applications or views within the main app.
- **Key Functions**:
  - **Conditional Rendering**: Based on  selected application, it renders the appropriate view.
  - **State Management**: Interacts with Redux to determine which application is currently active.

## ComponentMenu.js
- **Purpose**: Provides a navigational menu for selecting different components within the active application.
- **Key Functions**:
  - **Menu Items**: Lists different components or views that users can navigate to.
  - **Event Handling**: Captures user interaction and triggers appropriate actions (e.g., component change).

## DynamicViewPanel.js
- **Purpose**: A flexible panel component that dynamically loads and displays different views or components based on the application state.
- **Key Functions**:
  - **Dynamic Rendering**: Adjusts content based on current state, props, or user input.
  - **Component Loading**: May include lazy loading for performance optimization.

## TopLevelMenu.js
- **Purpose**: Serves as the primary navigation menu for the application, typically positioned at the top of the user interface.
- **Key Functions**:
  - **Navigation Links**: Provides links to major sections of the application.
  - **Responsive Design**: Adjusts layout and visibility based on screen size or user preference.

# Configuration Files Overview

## appConfig.json
- **Purpose**: Holds the application's configuration.

## featureFlags.json
- **Purpose**: Manages feature flags, allowing the application to enable or disable features based on certain conditions.
- **Key Sections**:
  - **Flags List**: Contains a list of boolean flags that control whether specific features are active.

# Redux Store

## store.js
- **Purpose**: The central configuration file for Redux, where the application's state is managed. It combines reducers and sets up the Redux store.
- **Key Functions**:
  - **Combine Reducers**: Merges multiple reducers (e.g., `applicationsSlice`, `featureFlagsSlice`) into a single root reducer.
  - **Store Initialization**: Creates the Redux store, making it accessible to the entire application through the `<Provider>` component in `index.js`.

## applicationsSlice.js
- **Purpose**: Manages state related to different applications within the app.
- **Key Functions**:
  - **Initial State**: Defines the initial state for application-related data (active application, list of application components).

## featureFlagsSlice.js
- **Purpose**: Controls the state of feature flags, allowing features to be toggled on or off.
- **Key Functions**:
  - **Initial State**: Defines the initial state of all feature flags.
  - **Reducers**: Handles actions that update the status of feature flags, enabling/disabling features.
  - **Selectors**: Provides functions to access the state of specific feature flags.

## sharedStateSlice.js
- **Purpose**: Manages state that is shared across multiple components or sections of the application.
- **Key Functions**:
  - **Initial State**: Defines a generic state structure that can be used across different components.
  - **Reducers**: Handles generic actions that affect shared state.
  - **Selectors**: Allows components to access and modify shared state.

## viewPanelComponentSlice.js
- **Purpose**: Manages the state of selected components to display within the dynamic view panel.
- **Key Functions**:
  - **Initial State**: Defines the default state of components rendered in the dynamic view panel.
  - **Reducers**: Handles actions that affect which components are displayed within the panel.
  - **Selectors**: Provides access to the state of the view panel components.

# UI Components

- **componentMap (index.js)**: Used to dynamically import the components using lazy load.
- **LoginForm (V1 and V2)**
- **RegistrationForm (V1 and V2)**
- **SharedComponent.js**
