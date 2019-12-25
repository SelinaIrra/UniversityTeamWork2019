export const authProvider = {
    logout: params => {
        localStorage.removeItem('admin_token');
        return Promise.resolve();
    },
    checkAuth: () => {
        localStorage.getItem('admin_token');
        return Promise.resolve();
    },
    checkError: error => Promise.resolve(),
    getPermissions: params => Promise.resolve(),
    login: ({ username, password }) => {
        const request = new Request('https://lightingstore-server.herokuapp.com/users/sign-in', {
            method: 'POST',
            body: JSON.stringify({ login: username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300)
                    throw new Error(response.statusText);
                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('admin_token', token);
            });
    },
};

export default authProvider;