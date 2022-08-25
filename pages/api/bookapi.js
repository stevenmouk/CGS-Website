export default async function handler(req, res) {
  const response = await fetch(`https://www.pdfdrive.com${req.body.toString().replace(/"/g, "")}`);

  const html = await response.text();

  res.status(200).json({ result: html });
}
