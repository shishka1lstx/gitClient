import axios from "axios";


const fetchRepos = async (username: string) => {
  const repos = await axios({
    method: 'get',
    url: `https://api.github.com/users/${username}/repos`
  });

  
  return repos.data;

  };



export default fetchRepos;