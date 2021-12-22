import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next Steps</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="styles.css"></link>
      </Head> 

      <main>
        <Header title="Hello Dr !!! Welcome to Next Steps" />
        <p className="description">
        <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Phone: <input type="phone" name="phone" /></label>
  </p>
  <p>
    <label>Your Interests: <select name="role[]" multiple>
      <option value="radiology">Radiology</option>
      <option value="genmed">General Medicine</option>
    </select></label>
  </p>
  <p>
    <label>Brief Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
        </p>
      </main>

    </div>
  )
}

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