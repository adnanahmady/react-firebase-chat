export default (path) => {
  const parts = path.split(".");
  const file = parts.shift();

  if (file === "index")
    throw Error("Index Can not be targeted, please choose another config.");

  try {
    let target = require(`./${file}`);
    parts.map((p) => { target = target[p]; }).pop();

    return target;
  } catch (ex) {
    throw Error(`Config Module "${file}" does not exist!`);
  }
};
