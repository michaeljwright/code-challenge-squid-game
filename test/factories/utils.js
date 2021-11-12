const camelToSnakeCase = obj => {
  return Object.keys(obj).reduce((acc, key) => {
    let newKey =
      key[0].toLowerCase() +
      key
        .slice(1, key.length)
        .replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
    acc[newKey] = obj[key];
    return acc;
  }, {});
};

module.exports = {
  camelToSnakeCase
};
