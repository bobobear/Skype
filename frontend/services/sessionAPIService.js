export const login = (user) => {
  return $.ajax({
    url: 'api/session',
    method: 'POST',
    data: { user }
  })
};

export const logoutUser = () => {
  return $.ajax({
    url: 'api/session',
    method: 'DELETE'
  })
};

