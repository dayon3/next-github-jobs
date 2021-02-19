// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const fs = require("fs")
import positionsObj from "./../../dev-data/positions.json"

export default (req, res) => {
  res.status(200).json(positionsObj)
}
