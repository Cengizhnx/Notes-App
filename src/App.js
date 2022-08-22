import './App.css';
import Header from './components/Header';
// import Search from './components/Search';
import Form from './components/Form';
import Notes from './components/Notes';

function App() {
  return (
    <>
      <div className='flex flex-row'>
        <div className="App mx-10 flex justify-center items-center flex-col">
          <Header></Header>
          {/* <Search></Search> */}
          <Form></Form>
        </div>
        <div className="App flex items-center mt-5 flex-col">
          <Notes></Notes>
        </div>
      </div>

    </>
  );
}

export default App;
