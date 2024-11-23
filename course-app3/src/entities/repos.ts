import axios from "axios";


const fetchRepos = async (username: string) => {
  const repos = await axios({
    method: 'get',
    url: `https://api.github.com/users/${username}/repos`
  });

  const user = await axios({
    method: 'get',
    url: `https://api.github.com/users/${username}`
  })
  console.log(user.data);
  return [repos.data, user.data.html_url, user.data.avatar_url];

  };



export default fetchRepos;