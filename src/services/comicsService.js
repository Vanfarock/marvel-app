import httpService from './httpService';

const endpoint = '/comics';

export const getComics = async (page, title, limit = 20) => {
  const paginationQuery = `limit=${limit}&offset=${page * limit}`;
  if (title) {
    return httpService.get(`${endpoint}?${paginationQuery}&titleStartsWith=${title}`);
  }

  return httpService.get(`${endpoint}?${paginationQuery}`);
};

export const getComic = async (id) => id;
