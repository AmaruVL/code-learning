// import { UserModel } from '@/data/mongodb'
import { BcryptAdapter } from '@/config'
import { prisma } from '@/data/postgres'
import {
  AuthDatasource,
  CustomError,
  LoginUserDto,
  RegisterUserDto,
  UserEntity,
} from '@/domain'
import { UserMapper } from '../mappers/user.mapper'

type HashFunction = (password: string) => string
type CompareFunction = (password: string, hashed: string) => boolean

export class AuthDatasourceImpl implements AuthDatasource {
  constructor(
    private readonly hashPassword: HashFunction = BcryptAdapter.hash,
    private readonly comparePassword: CompareFunction = BcryptAdapter.compare,
  ) {}
  async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
    const { email, password } = loginUserDto
    try {
      // 1. Verificar si usuario existe
      const user = await prisma.user.findUnique({
        where: { email },
      })
      if (!user) throw CustomError.badRequest('User dont exists')

      // Verificar contraseña
      const isMatching = this.comparePassword(password, user.password)
      if (!isMatching) throw CustomError.badRequest('Password is not valid')

      return UserMapper.userEntityFromObject(user)
    } catch (error) {
      if (error instanceof CustomError) throw error
      console.error(error)
      throw CustomError.internalServer()
    }
  }

  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { name, email, password } = registerUserDto
    try {
      // 1. Verificar si correo existe
      const exists = await prisma.user.findUnique({
        where: { email },
      })

      if (exists) throw CustomError.badRequest('User already exists')

      // 2. Hash de contraseña
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: this.hashPassword(password),
        },
      })

      // 3. Mapear la respuesta a nuestra entidad
      return UserMapper.userEntityFromObject(user)
    } catch (error) {
      if (error instanceof CustomError) {
        throw error
      }
      console.error(error)
      throw CustomError.internalServer()
    }
  }
}
