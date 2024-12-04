import axios from "axios";


const fetchRepos = async (username: string, type: string) => {
  const repos = await axios({
    method: 'get',
    url: `https://api.github.com/users/${username}/repos?type=${type}&per_page=100`
  });

  
  return repos.data;

  };



export default fetchRepos;