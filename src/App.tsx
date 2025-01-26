import Layout from './components/Layout';
import TodoPage from './pages/TodoPage';
import { TodoProvider } from './context/todosContext';

function App() {
  return (
    <Layout>
      <TodoProvider>
        <TodoPage />
      </TodoProvider>
    </Layout>
  );
}

export default App;
