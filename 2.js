const obj = {
  key1 : 1,
  key2 : 1,
  key3 : 1,
  key4 : 1,
};

const str = "key7";

const strMerge = (strIn, objIn) => {
return (strIn in objIn);
}

console.log(strMerge(str, obj))