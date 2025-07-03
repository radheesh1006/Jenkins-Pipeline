import React, { useState } from 'react';
import Welcome from './Welcome';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <Welcome name="Radheesh" />
      <h2>React Counter</h2>
      <p style={styles.counter}>Current count: {count}</p>
      <div style={styles.buttons}>
        <button onClick={() => setCount(count + 1)}>➕ Increase</button>
        <button onClick={() => setCount(count - 1)}>➖ Decrease</button>
        <button onClick={() => setCount(0)}>🔁 Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  counter: {
    fontSize: '1.5rem',
    margin: '1rem 0',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
};

export default App;

