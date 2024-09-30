import React from 'react';
import List from './List'
import {Provider} from 'react-redux'
import store from './store'
import Cart from './Cart'
function App() {
  return (
    <Provider store={store}>
      <Cart/>
     <List/>
    </Provider>
  
  );
}

export default App;
