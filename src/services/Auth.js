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
        let {token, user, data} = res.data;
        localStorage.setItem('profile', JSON.stringify(user));
        localStorage.setItem('events', JSON.stringify(data));
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
            localStorage.setItem('events', JSON.stringify(data));
            localStorage.setItem('profile', JSON.stringify(user));
            localStorage.setItem('token', token);
            axios.interceptors.request.use((config) => {
              config.headers['authorization'] = `Bearer ${token}`;
              return config;
            });
        return data;
      });
  },
  setEvent({payload}) {
      console.log('setEvent', payload)
      const user = JSON.parse(localStorage.getItem('profile'));
    return axios.post(`http://localhost:8081/setItem`, {item: payload, email: user && user.email})
      .then((res) => {
            if (!res) {
                return res
            }
            let {data} = res.data;
          axios.interceptors.request.use((config) => {
              return config;
          });
        return data;
      });
  },
  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('token');
    localStorage.removeItem('events');
    axios.interceptors.request.use((config) => {
      delete config.headers['authorization'];
      return config;
    });
    window.location = '/#/login';
  }
};
