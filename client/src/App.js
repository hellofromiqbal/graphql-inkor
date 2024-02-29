import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import FirstPage from './pages/FirstPage';
import { Routes, Route } from 'react-router-dom';
import SecondPage from './pages/SecondPage';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <div className="h-screen flex justify-center items-center text-center">
      <ApolloProvider client={client}>
        <Routes>
          <Route path='/' element={<FirstPage/>}/>
          <Route path='/second-page' element={<SecondPage/>}/>
        </Routes>
      </ApolloProvider>
    </div>
  );
}

export default App;
