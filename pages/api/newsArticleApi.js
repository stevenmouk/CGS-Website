export default async function handler(req, res) {
  //   console.log(`https://www.pdfdrive.com/search?q=${req.body}`);
  const response = await fetch(`https://www.pdfdrive.com/search?q=${req.body.replace('"', "")}`);

  const html = await response.text();

  res.status(200).json({ result: html });
}
