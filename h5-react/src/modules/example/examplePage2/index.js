import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import store from '../store';

const ExamplePage2 = () => {
  useEffect(() => {
    store.setTitle('This is example page2.');
  }, []);

  return (
    <div>
      {store.title}
    </div>
  );
};

export default observer(ExamplePage2);
