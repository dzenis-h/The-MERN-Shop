import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, "kakotijenena", {
    expiresIn: '30d',
  })
}

export default generateToken
