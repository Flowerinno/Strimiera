export const newError = (name) => {
  const e = new Error(name);
  e.name = name;
  return Promise.reject(e);
};
