import { compareSync, hashSync } from 'bcryptjs'

// Patron adaptador
export class BcryptAdapter {
  static hash(password: string): string {
    return hashSync(password)
  }

  static compare(password: string, hashed: string): boolean {
    return compareSync(password, hashed)
  }
}
