import React from 'react';
import { useStore } from "./store"

export default function Users() {
  const users = useStore((state) => state.users)
  const add = useStore(state => state.addUser)
  add("Joel")
  add("Pricny")

  return (<ol>
    {/* <p>{ JSON.stringify(users)}</p> */}
    {users.map((u,i) => (<li key={i}>{u}</li>))}
  </ol>)
}