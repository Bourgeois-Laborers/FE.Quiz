type CreateSessionData = {
    userAlias: string
}

type UpdateSessionData = {
    questionsCount: number
    questionTimeLimit: number
}

type JoinSessionData = {
    sessionId: string
    userAlias: string
}

export type { CreateSessionData, UpdateSessionData, JoinSessionData }
