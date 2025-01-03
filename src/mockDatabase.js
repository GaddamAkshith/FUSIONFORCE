const users = [];

export const addUser = (user) => {
    users.push(user);
};

export const findUser = (email, password) => {
    return users.find(user => user.email === email && user.password === password);
};