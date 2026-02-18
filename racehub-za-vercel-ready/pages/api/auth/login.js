import dbConnect from '../../../../server/db'
import User from '../../../../server/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
  await dbConnect()
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ error: 'User not found' })

  const match = await bcrypt.compare(password, user.password)
  if (!match) return res.status(400).json({ error: 'Invalid password' })

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

  res.json({ token })
}