import { useEffect, useState } from 'react';
import { ListItem } from "./components/ListItem";
import axios from "axios";
import type { User } from "./types/user";


export const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>("https://example.com/users").then((res) => {
      setUsers(res.data);
    })
  },[]);

  return (
    <div>
      {users.map(user => (
        <ListItem 
        id={user.id} name={user.name} age={user.age} 
        hobbies={user.hobbies}
        />
      ))}
    </div>
  );
};