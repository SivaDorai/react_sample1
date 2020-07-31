export default function UserAction(userdata) {
  console.log('from action ')
  return{
      type:"ADD_USER",
      data: userdata
  }
}
