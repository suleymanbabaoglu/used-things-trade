const RemoveArrayItem = (array = [], item = null) => {
  const index = array.indexOf(item);
  array.splice(index, 1);
  return array;
};

module.exports = {
  RemoveArrayItem,
};
