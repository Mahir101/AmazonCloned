
import './app.css';

import Header from './components/Header';
import Home from './components/Home';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './components/Checkout';

import ProductProvider from './components/ProductProvider';

function App() {
  return (
    <Router>

      <ProductProvider>
        <div className="app">

          <body>

          <Header/>   
        
            <Switch>

              <Route path = "/checkout">
                  <Checkout/>
              </Route>

              <Route path = "/">
                {/* Default route */}
                <Home/>
              </Route>
              
            </Switch>
          </body>
        </div>
      </ProductProvider>
      </Router>
  );
}

export default App;
