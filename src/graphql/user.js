import mapKeys from 'lodash.mapkeys';
import fetch from 'node-fetch';
import { URL } from 'babel-dotenv';

export const typeDef = `
  type User {
    FirstName: String
    EmailID: String
    Title: String
    Photo: String
    Gender: String
    DateOfJoining: String
    BirthDate: String
    LastName: String
    MobilePhone: String
    Photo_downloadUrl: String
  }
`;

export const resolvers = {
  User: async (_, { email }) => {
    const response = await fetch(`${URL}=${email}`)
      .then(data => data.json())
      .then(data => data.map(u => mapKeys(u, (v, k) => k.replace(/\s/g, ''))));

    return response;
  },
};
