import './App.css';

import Brand from './components/Brand';
import LineGraph from './components/LineGraph';

import data from './assets/anon_carbon_data.csv?raw';

export default function App() {
  return (
    <>
      <Brand />
      <LineGraph data={data} />
    </>
  );
}
