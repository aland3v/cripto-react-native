class Http {
  static instance = new Http();

  get = async url => {
    try {
      let req = await fetch(url);
      let json = await req.json();
      return json;
    } catch (err) {
      console.log('Http get method error', err);
      throw Error(err);
    }
  };

  post = async (url, body) => {
    try {
      let req = fetch(url, {
        method: 'POST',
        body,
      });
      let json = await req.json();
      return json;
    } catch (err) {
      console.log('http method post err', err);
      throw Error(err);
    }
  };

  remove = async url => {
    try {
      const request = await fetch(url, {
        method: 'DELETE',
      });
      const json = await request.json();
      return json;
    } catch (err) {
      console.error('HTTP DELETE Error: ', err);
      throw Error(err);
    }
  };

  put = async (url, body) => {
    try {
      const request = await fetch(url, {
        method: 'PUT',
        body,
      });
      const json = await request.json();
      return json;
    } catch (err) {
      console.error('HTTP PUT Error: ', err);
      throw Error(err);
    }
  };
}
export default Http;
