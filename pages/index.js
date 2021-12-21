import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
  body {
    font-family: sans-serif;
  }
  label {
    display: block;
    margin-bottom: .2em;
  }
</style>
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

      <Footer />
    </div>
  )
}
