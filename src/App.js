import React from "react";

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    const urlUser = fetch('https://randomuser.me/api/?results=1');
    urlUser.then((response) => {
      const jsonPromise = response.json();
      jsonPromise.then((data) => {
        setUser(data);
        console.log(data.results)
      })
    })
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{padding: "40px"}}>
      <h1>Customer data</h1>
      <h2>Name: {user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt="profile_pic" />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
