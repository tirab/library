import axios from 'axios';
import { GOOGLE_API } from './config';

/**
 * This file will hold all the calls to external API
 *
 */

export const findBooksOnTitle = (title) => {
  console.log('QUERY:', `https://www.googleapis.com/books/v1/volumes?q=${title}`);

  return (axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
    .then(response => response.data.items)
    .catch((error) => {
    // handle error
      console.log(error);
    }));
};
