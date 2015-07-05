export default {
    fetch: (username) => {
      let url = `https://api.github.com/users/${username}/repos`;
      return fetch(url).then(response => response.json());
  }
}
