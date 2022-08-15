export type LoginPayload = {
  username: string,
  password: string,
}

export type LoginResponse = {
  email: string,
  sub: string,
  role: string,
  tokens: {
    access_token: string,
    expiresIn: string,
    refresh_token: string,
  }
}
