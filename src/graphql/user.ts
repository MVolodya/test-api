import mapKeys from 'lodash.mapkeys';
import fetch from 'node-fetch';

const { URL } = process.env;

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
 // tslint:disable-next-line
  User: async (_: any, { email }: any) => {
    const response = await fetch(
      `${URL}=${email}`,
    ).then(data => data.json())
      // @ts-ignore
    .then(data => data.map(userData => mapKeys(userData, (value, key) => key.replace(/\s/g, ''))));

    return response;
  }
};
