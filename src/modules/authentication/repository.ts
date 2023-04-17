import httpRepository from '~core/http';
export interface ILoginDTO {
  username: string;
  password: string;
}

export const login = (payload: ILoginDTO) => {
  return httpRepository.execute({
    path: '/Users/Login',
    method: 'post',
    payload,
    config: {
      isPrivate: false},
  });
};