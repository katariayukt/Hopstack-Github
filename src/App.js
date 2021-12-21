import React, {useState, useEffect, useRef} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import UserForm from './components/UserForm';
import UserCard from './components/UserCard';
import UserTable from './components/UserTable';

function App() {

  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);


  const addUserHandler = async (username)=>{
    setError();
    try{
      const response = await fetch (`https://api.github.com/users/${username}`);
      
      if(!response.ok){
        throw new Error('Something went wrong!!');
      }
      
      const data = await response.json();

      // console.log(data);
    
      const loadedUser = {
        id : data.id,
        username : data.login,
        bio : data.bio,
        url : data.avatar_url,
        repos_no : data.public_repos,
        repos_url : data.repos_url
      }
      await setUser(loadedUser);
      addToDatabase(loadedUser);  

    } catch(error){
        setError(error.message);
    }
  }

  const reposHandler = async (reposUrl)=>{
    try{
      console.log(reposUrl);
      const response = await fetch(reposUrl);
      if(!response.ok){
        throw new Error('Repos not found')
      }
      const data = await response.json();
      console.log(data);

      const loadedRepos = [];

      for(let i=0 ; i<data.length; i++){
        loadedRepos.push({
          id : data[i].id,
          name  : data[i].name,
          commitsUrl : data[i].git_commits_url
        })
      }
      console.log(loadedRepos);

      await setRepos(loadedRepos);     
      console.log(repos);
    } catch(error){
      setError(error.message);
    }
  }

  const addToDatabase = async (userData)=> {
      console.log(userData);
      
      console.log('userdata' + userData.id);
      await fetch('http://localhost:5000/stored',{
        method : 'POST',
        body : JSON.stringify(userData),
        headers : {
          'Content-Type' : 'application/json'
        }
      })
  }

  
  const getFromDatabase = async (username)=>{
    try{
      
      console.log('HIi');
      const response = await fetch (`http://localhost:5000/read?username=${username}`);
      
      if(response.username == undefined){
        addUserHandler(username);
        return;
      }
  
      const data = await response.json();
      console.log(response);
      
      if(!response.ok){
        throw new Error('Something went wrong!!');
      }
    
      const loadedUser = {
        id : data._id,
        username : data.username,
        bio : data.bio,
        url : data.url,
        repos_no : data.repos_no,
        repos_url : data.repos_url
      }
      console.log(loadedUser);
      await setUser(loadedUser); 
    } 
    catch(error){
        setError(error.message);
    }
  }

  const firstUpdate = useRef(true);
  useEffect(() => {
  
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    
    reposHandler(user.repos_url);
  }, [user]);

  return (
    <div className="App">
      <NavBar />
      <UserForm onAddUser = {getFromDatabase}/>
      {!error && user.id && <UserCard cardError={error} cardUser={user} />}
      {error && <h1>{error}</h1>}

      {!error && user.id && <UserTable tableRepos={repos} />}
    </div>
  );
}

export default App;
