import { useEther } from 'core';

const WithSuspendEther = () => {
  const { active, library } = useEther({ suspend: true });
  console.log('library', library);
  return (
    <span>{active ? 'Active' : 'Disable'}</span>
  );
};
export default WithSuspendEther;
