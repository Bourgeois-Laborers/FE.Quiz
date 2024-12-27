interface DecodedToken {
    sub: string
    iat: number
    exp: number
}

type SignUpResponse = {
    accessToken: string
}

type SignInData = {
    id: string
}

type SignInResponse = {
    accessToken: string
}

export type { DecodedToken, SignUpResponse, SignInData, SignInResponse }
