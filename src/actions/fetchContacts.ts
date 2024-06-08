// import { configuration } from '@/utils';

// const contacts = `
// query getContact {
//     contact {
//       data {
//         attributes{
//           email
//           numbers {
//             ua
//             cz
//           }
//         }
//       }
//     }
//   }
// `;

// const response = await fetch(`${configuration.BASE_DATA_URL}}/graphql`, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     query: contacts,
//     variables: variables,
//   }),
//   cache: 'no-store',
// });
