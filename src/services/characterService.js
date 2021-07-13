import httpService from './httpService';

const endpoint = '/characters';

export const getCharacters = async (page, name, limit = 20) => {
  const paginationQuery = `limit=${limit}&offset=${page * limit}`;
  if (name) {
    return httpService.get(`${endpoint}?${paginationQuery}&nameStartsWith=${name}`);
  }

  return httpService.get(`${endpoint}?${paginationQuery}`);
};

export const getCharacter = async (id) => httpService.get(`${endpoint}/${id}`);
