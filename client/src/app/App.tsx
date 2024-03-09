import { Outlet } from 'react-router-dom';
import './App.css';
import { Layout } from './ui/Layout';
import { ProvidersWrapper } from './ui/ProvidersWrapper';

function App() {
  return (
    <>
      <ProvidersWrapper>
        <Layout>
          <Outlet></Outlet>
        </Layout>
      </ProvidersWrapper>
    </>
  );
}

export default App;
