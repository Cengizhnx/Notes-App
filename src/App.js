import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Form from './components/Form';
import Notes from './components/Notes';

function App() {
  return (
    <>
      <div className='flex flex-row h-full'>
        <div className="App ml-16 flex items-center flex-col">
          <Header></Header>
          <Form></Form>
        </div>
        <div className="App w-3/4 flex items-center mx-10 mt-5 mb-10 flex-col">
          <Search></Search>
          <Notes></Notes>
        </div>
      </div>

    </>
  );
}

export default App;
