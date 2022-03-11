import './App.css';
import Calendar from './Calendar';
import 'bulma/css/bulma.min.css';
import CalendarTwo from './CalendarTwo';

function App() {
  return (
    <div className="container" style={ { color: "white" } }>
      <Calendar />
      {/* <CalendarTwo /> */ }
    </div>
  );
}

export default App;
