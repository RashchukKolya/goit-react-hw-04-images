import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Oval
      visible={true}
      height="40"
      width="40"
      color="#3f51b5"
      ariaLabel="oval-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClass=""
    />
  );
};
