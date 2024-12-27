type CreateSessionData = {
    userAlias: string
}

type JoinSessionData = {
    sessionId: string
    userAlias: string
}

export type { CreateSessionData, JoinSessionData }
