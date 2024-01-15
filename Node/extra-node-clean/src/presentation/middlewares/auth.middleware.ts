import { JwtAdapter } from '@/config'
import type { Request, Response, NextFunction } from 'express'
import { prisma } from '@/data/postgres'

export class AuthMiddleware {
  static validateJwt = async (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.header('Authorization')
    if (!authorization) return res.status(401).json({ error: 'No token provided' })
    if (!authorization.startsWith('Bearer '))
      return res.status(401).json({ error: 'Invalid bearer token' })

    const token = authorization.split(' ').at(1) ?? ''
    try {
      const payload = await JwtAdapter.validateToken<{ id: number }>(token)
      if (!payload) return res.status(401).json({ error: 'Invalid token' })

      const user = await prisma.user.findUnique({
        where: {
          id: payload.id,
        },
      })
      if (!user)
        return res.status(400).json({ error: 'Invalid token - user not found' })

      // Se podría agregar si un usuario está activo o no
      // user.isActive

      req.body.user = user

      req.body.payload = payload
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Internal server error' })
    }
    next()
  }
}
