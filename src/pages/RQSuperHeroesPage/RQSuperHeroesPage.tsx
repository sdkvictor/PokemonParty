import React, { useState } from 'react';

import { useAddSuperHeroData, useSuperHeroesData } from './useSuperHeroesData';

interface Hero {
  id?: number;
  name: string;
  alterEgo: string;
}

function RQSuperHeroesPage() {
  const [name, setName] = useState('');
  const [alterEgo, setAlterEgo] = useState('');

  const onSuccess = (data: Hero[]) => {
    console.log('Success!', data);
  };
  const onError = (error: Error) => {
    console.log('Error: ', error);
  };

  const { mutate: addHero } = useAddSuperHeroData();

  const { isLoading, data, isError, error } = useSuperHeroesData(onSuccess, onError);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const handleAddHero = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };
  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={alterEgo} onChange={(e) => setAlterEgo(e.target.value)} />
        <button type="button" onClick={handleAddHero}>
          Add Hero
        </button>
      </div>
      {data?.map((hero: Hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
}

export default RQSuperHeroesPage;
