
function findUserByUsername(usersArray, username) {
  return usersArray.find(function(val) {
    return val['username'] === username
  })
};

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  const userIdx = usersArray.findIndex(function(val) {
    return val['username'] === username;
  })
  if(userIdx === -1) {
    return undefined
}
  return usersArray.splice(userIdx,1)[0]
  
};