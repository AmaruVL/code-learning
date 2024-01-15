// import { LoginUserDto } from "@/domain/dtos/auth/login-user.dto";

// interface LoginUserUseCase {
//   execute(loginUserDto: LoginUserDto):Promise<???>
// }

import { JwtAdapter } from '@/config'
import { LoginUserDto } from '@/domain/dtos/auth/login-user.dto'
import { RegisterUserDto } from '@/domain/dtos/auth/register-user.dto'
import { CustomError } from '@/domain/errors/custom.error'
import { AuthRepository } from '@/domain/repositories/auth.repository'

interface UserToken {
  token: string
  user: {
    id: number
    name: string
    email: string
  }
}

type SignToken = (payload: Object, duration?: string) => Promise<string | null>

interface LoginUserUseCase {
  execute(registerUserDto: RegisterUserDto): Promise<UserToken>
}

export class LoginUser implements LoginUserUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly signToken: SignToken = JwtAdapter.generateToken,
  ) {}

  async execute(loginUserDto: LoginUserDto): Promise<UserToken> {
    // crear el usuario
    const user = await this.authRepository.login(loginUserDto)

    // token
    const token = await this.signToken({ id: user.id }, '2h')
    if (!token) throw CustomError.internalServer('Error generating token')

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    }
  }
}
