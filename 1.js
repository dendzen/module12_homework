const obj = {
  key:"value",
};
const obj2 = Object.create(obj);

obj2.key2 = "value2";

function keyInfo(inObject){
  for (let key in inObject) {
if (inObject.hasOwnProperty(key)) {

        console.log(key); // ownCity
    }   
}
}

keyInfo(obj2)