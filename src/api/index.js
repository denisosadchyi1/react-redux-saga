
export const getAllUsers = async () => {
  const response = await fetch('https://randomuser.me/api/');
  const json = await response.json()
  return json
}