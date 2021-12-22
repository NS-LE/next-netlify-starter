import '@styles/globals.css'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
  const fetch = require('node-fetch')

const API_ENDPOINT = 'https://cdn.contentful.com/spaces/bhxah9dfjc2u/environments/master/entries/6pX6vujnVHCaEONrSqflyU?access_token=AU0qFdeBTy0M9AU9RmdITFoiNGDbu5p_2mlziax7kPI'

exports.handler = async (event, context) => {
  let response
  try {
    response = await fetch(API_ENDPOINT)
    // handle response
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response
    })
  }
}
}

export default Application
