import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface UserContextData {
  name: string;
  avatarUrl: string;
  handleChangeName: (name: string) => void;
}

interface UserResponseData {
  name: string;
  avatar_url: string;
}

export const UserContext = createContext({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const [name, setName] = useState<string>(null);
  const [initialName, setInitalName] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('https://i.stack.imgur.com/frlIf.png');

  const router = useRouter();

  useEffect(() => {
    async function handleGetAvatar() {
      if (initialName === '') return;

      axios.get<UserResponseData>(`https://api.github.com/users/${initialName}`)
        .then(({ data }) => {
          setName(data.name || initialName);
          setAvatarUrl(data.avatar_url);
        })
        .catch(() => {
          if (avatarUrl !== 'https://i.stack.imgur.com/frlIf.png') setAvatarUrl('https://i.stack.imgur.com/frlIf.png');
          setName(initialName)
        });
    }

    handleGetAvatar();
  }, [initialName])

  useEffect(() => {
    if (name === '') router.push('/');

    if (name) {
      localStorage.setItem('name', name);
      localStorage.setItem('avatarUrl', avatarUrl);
    }
  }, [name, avatarUrl]);

  useEffect(() => {
    setName(localStorage.getItem('name') || '');
    setAvatarUrl(localStorage.getItem('avatarUrl') || '');
  }, []);

  function handleChangeName(name: string) {
    setInitalName(name);
  }

  return (
    <UserContext.Provider value={{
      name,
      avatarUrl,
      handleChangeName
    }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;