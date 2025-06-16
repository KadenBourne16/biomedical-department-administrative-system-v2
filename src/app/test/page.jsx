"use client"
import { useEffect, useState } from 'react';

export default function MyPage() {
  const [updates, setUpdates] = useState([]);
  useEffect(() => {
    const eventSource = new EventSource('/api/customSocketHandler');
    eventSource.onmessage = (event) => {
      const newUpdate = JSON.parse(event.data);
      setUpdates((prevUpdates) => [...prevUpdates, newUpdate]);
    };
    return () => {
      eventSource.close();
    };
  }, []);
  return (
    <div>
      <h1>Real-time Updates</h1>
      <ul>
        {updates.map((update, index) => (
          <li key={index}>{JSON.stringify(update)}</li>
        ))}
      </ul>
    </div>
  );
}
