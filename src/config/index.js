export default (path) => {
  const parts = path.split(".");
  const module = parts.shift();

  if (module === "index")
    throw Error("Index Can not be targeted, please choose another config.");

  try {
    const m = require(`./${module}`);

    return parts.map((p) => m[p]).pop();
  } catch (ex) {
    throw Error(`Config Module "${module}" does not exist!`);
  }
};
