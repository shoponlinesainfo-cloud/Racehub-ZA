import dbConnect from '../../../../server/db'
import User from '../../../../server/User'
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
  await dbConnect()
  const { name, email, password, role } = req.body
  const hashed = await bcrypt.hash(password, 10)
  const user = await User.create({ name, email, password: hashed, role })
  res.status(201).json(user)
}