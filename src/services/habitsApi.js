let token = null;
export const setToken = newToken => {
  token = newToken;
};

export const postHabit = (habit, description) => {
  return fetch(`${process.env.API_URL}/api/v1/habits`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ habit, description })
  })
    .then(res => {
      if(!res.ok) throw 'Could not create a habit';
      return res.json();
    });
};

export const getHabits = () => {
  return fetch(`${process.env.API_URL}/api/v1/habits`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Error getting quote.';
      return json;
    });
};
