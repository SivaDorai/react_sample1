export default function addUser(users=[],action){
  console.log('reducer triggered');
  if (action.type==='ADD_USER'){
    return [...users,action.userdata]
  }
  return users;
}
