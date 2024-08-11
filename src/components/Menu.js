import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveComponent } from '../redux/features/componentsSlice';

const Menu = () => {
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.menu.items);

  const handleMenuClick = (componentName) => {
    dispatch(setActiveComponent(componentName));
  };

  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name} onClick={() => handleMenuClick(item.component)}>
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
