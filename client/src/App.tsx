import React, { useEffect, useState } from 'react';

function App() {

  const [activities, setActivities] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);


  return <><h1 className="app">Adiros Activities 🤓👇</h1>
  <ul>
    {activities.map((activity) => (
      <li key={activity.id}>{activity.title}</li>
    ))}
  </ul>
  </>;
}

export default App;
