export default async function handler(req, res) {
    try {
      res.redirect(307, "https://abyssnftdata.s3.us-east-2.amazonaws.com/Open.mp4")
    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' })
    }
  }