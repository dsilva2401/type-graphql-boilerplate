const request = require('request');
const expect = require('chai').expect;

const graphQlRequest = (data) => {
  return new Promise((resolve, reject) => {
    request('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: data.query,
        variables: data.variables || {},
      })
    }, (err, resp) => {
      if (err) {
        reject(err);
        return;
      }
      var parsedResp = resp.toJSON();
      try {
        resolve(JSON.parse(parsedResp.body));
      } catch (err) {
        reject(err);
      }
    })
  })
}

describe('GraphQL API', () => {
  describe('Resoolvers: ToDosResolver',  () => {

    it('Mutation: registerToDo', async () => {
      const out = await graphQlRequest({
        query: `
          mutation {
            registerToDo (description: "hello") {
              description
              id
            }
          }        
        `
      })
      expect(out.data.registerToDo.description).to.equal('hello');
    });

    it('Query: getToDos', async () => {
      const out = await graphQlRequest({
        query: `
          {
            getToDos {
              id
              description
            }
          }
        `
      })
      expect(out.data.getToDos.pop().description).to.equal('hello');
    });

  })
})