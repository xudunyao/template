import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import store from '../store';

const ExamplePage1 = () => {
  useEffect(() => {
    store.setTitle('This is example page1.');
  }, []);

  return (
    <div>
      {store.title}
    </div>
  );
};

export default observer(ExamplePage1);
