import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import Cookies from 'js-cookie';

const GET_USER = gql`
  query getUser($email: String!) {
    authService(email: $email) {
      token
      email
      expired
    }
  }
`;

const FirstPage = () => {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState('');
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { email: "abc@mail.com" },
  });

  if(inputEmail === 'abc@mail.com') {
    Cookies.set('token', data.authService.token, { expires: data.authService.expired });
    navigate('/second-page');
  };

  return (
    <>
      {loading ? <h1>Loading...</h1> : ''}
      {error ? <h1>Error...</h1> : ''}
      {data ?
        <div className='flex flex-col gap-4'>
          <input
            className='px-4 py-1 border'
            type="text"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <div>
            <p>Token: {data?.authService?.token}</p>
            <p>Email: {data?.authService?.email}</p>
            <p>Expired: {data?.authService?.expired}</p>
          </div>
        </div>
          :
        ''
      }
    </>
  )
};

export default FirstPage;
