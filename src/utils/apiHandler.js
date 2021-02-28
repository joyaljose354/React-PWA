import {ApolloClient, gql, InMemoryCache } from '@apollo/client';

//setting up the apollo client for graphql interaction
export const client = new ApolloClient({
    uri:'https://countries.trevorblades.com/',
    cache: new InMemoryCache()
  });

// query to fetch continent list
export const fetchContinentList = () => {
    const result = client.query({
      query:gql`
      query{
        continents{
          code
          name
        }
      }`
    })
    return result
  }

// query to fetch continent details of selected continent
export const fetchContinentData = (continentCode) => {
    const result = client.query({
        variables:{
            continentCode
        },
        query:gql`
        query($continentCode:String!){
            continents(filter:{code:{eq:$continentCode}}){
              countries{
                name
                native
                phone
                capital
                languages{
                  native
                  rtl
                }
                emoji
                emojiU
                states{
                  name
                  code
                }
              }
            }
          }`
    });
    return result;
}