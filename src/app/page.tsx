'use client';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { 
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset, 
  setInput
} from '@/redux/features/counter.slice';
import { useGetUsersQuery } from '@/redux/services/exampleApi.service';

const Home = () => {
  const { counter, input } = useAppSelector(state => state.counterReducer);
  const dispatch = useAppDispatch();
  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

  if (isLoading || isFetching) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1 className='text-center text-2x1 pb-4'>Total: { counter }</h1>
          <div className='flex gap-3'>
            <input className='text-black' type='number' name='value' value={input} onChange={(e) => dispatch(setInput(e.target.value))} />
            <button className='bg-green-500 px-3 py-2 rounded-md' onClick={() => dispatch(increment())}>Increment +1</button>
            <button className='bg-blue-500 px-3 py-2 rounded-md' onClick={() => dispatch(decrement())}>Decrement -1</button>
            <button className='bg-green-500 px-3 py-2 rounded-md' onClick={() => dispatch(incrementByAmount(Number(input)))}>Increment</button>
            <button className='bg-blue-500 px-3 py-2 rounded-md' onClick={() => dispatch(decrementByAmount(Number(input)))}>Decrement</button>
            <button className='bg-red-500 px-3 py-2 rounded-md' onClick={() => dispatch(reset())}>Reset</button>
          </div>
        </div>
        <div className="grid grid-cols-3 mx-auto gap-3">
          { data?.map(user => (
            <div key={`user-${user.id}`} className='bg-zinc-800 p-4'>
              <p>{user.name}</p>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </div>
          )) }
        </div>
    </main>
  )
};

export default Home;
