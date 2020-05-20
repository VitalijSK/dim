import axios from 'axios';

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.status == 401) {
    Auth.logout();
  }
});

export const Auth = {
  authenticated() {
    return !!localStorage.getItem('token');
  },
  login({email, password}) {
    return axios.post(`http://localhost:8081/login`, {email, password})
      .then((res) => {
        let {token, user} = res.data;
        localStorage.setItem('profile', JSON.stringify(user));
        localStorage.setItem('token', token);
        axios.interceptors.request.use((config) => {
          config.headers['authorization'] = `Bearer ${token}`;
          return config;
        });
      });
  },
  regist({email, password, values}) {
      console.log('regist', {email, password, values})
    return axios.post(`http://localhost:8081/reg`, {email, password, values})
      .then((res) => {
            if (!res) {
                return res
            }
            let {token, user, data} = res.data;
             console.log('finish-regist', user, data)
            localStorage.setItem('profile', JSON.stringify(user));
            localStorage.setItem('token', token);
            axios.interceptors.request.use((config) => {
              config.headers['authorization'] = `Bearer ${token}`;
              return config;
            });
        return data;
      });
  },
  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('token');
    axios.interceptors.request.use((config) => {
      delete config.headers['authorization'];
      return config;
    });
    window.location = '/#/login';
  }
};
