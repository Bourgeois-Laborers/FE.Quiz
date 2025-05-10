interface DecodedToken {
    sub: string
    iat: number
    exp: number
}

type SignUpResponse = {
    accessToken: string
    refreshToken: string
}

type SignInData = {
    id: string
}

type SignInResponse = {
    accessToken: string
    refreshToken: string
}

export type { DecodedToken, SignUpResponse, SignInData, SignInResponse }
