import { Context, useContext } from 'react';

const useContextAndErrorIfNull = <ItemType>(context: Context<ItemType | null>): ItemType => {
  const contextValue = useContext(context);
  if (contextValue === null) {
    throw Error('Context has not been Provided!');
  }
  return contextValue;
};

export default useContextAndErrorIfNull;
