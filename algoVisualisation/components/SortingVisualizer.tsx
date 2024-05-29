import React, { useState, useEffect } from 'react';
import ColumnChart from './ColumnChart';
import * as algorithms from '../algorithms';

function SortingVisualizer() {
  const [data, setData] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubbleSort');

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const arr = Array.from({ length: 100 }, (_, i) => i + 1);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setData(arr);
  };

  const sortData = () => {
    const generator = algorithms[selectedAlgorithm](data);
    const sortInterval = setInterval(() => {
      const result = generator.next();
      if (result.done) {
        clearInterval(sortInterval);
      } else {
        setData(result.value);
      }
    }, 1); // Adjust this value to change the speed of the sorting visualization
  };

  return (
    <div>
      <ColumnChart data={data.map((value, index) => ({ name: index + 1, value }))} />
      
      <select value={selectedAlgorithm} onChange={(e) => setSelectedAlgorithm(e.target.value)}>
        {Object.keys(algorithms).map((algo) => (
          <option key={algo} value={algo}>
            {algo}
          </option>
        ))}
      </select>
      <button onClick={sortData}>Sort</button>
      <button onClick={resetArray}>Reset</button>
    </div>
  );
}

export default SortingVisualizer;