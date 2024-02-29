import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Cookies from 'js-cookie';

const GET_USER = gql`
  query getUser($tokenId: String!, $email: String!) {
    userService(tokenId: $tokenId, email: $email) {
      name
      memberNo
      amount
    }
  }
`;

const SecondPage = () => {
  const tokenId = Cookies.get('token');
  const [inputMemberNo, setInputMemberNo] = useState('');
  const [amount, setAmount] = useState(0);
  const { data } = useQuery(GET_USER, {
    variables: { tokenId: tokenId, email: "abc@mail.com" },
  });

  const handleMemberNoChange = (e) => {
    const newMemberNo = e.target.value;
    setInputMemberNo(newMemberNo);
    
    if (data && data.userService && newMemberNo === data.userService.memberNo) {
      setAmount(data.userService.amount);
    } else {
      setAmount(0);
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <input
          className='px-4 py-1 border'
          type="text"
          placeholder='Member No'
          value={inputMemberNo}
          onChange={handleMemberNoChange}
        />
        <input
          className='px-4 py-1 border'
          type="number"
          placeholder='Amount'
          value={amount}
          readOnly
        />
      </div>
      <div>
        <p>Name: {data?.userService.name}</p>
        <p>MemberNo: {data?.userService.memberNo}</p>
      </div>
    </div>
  );
};

export default SecondPage;
