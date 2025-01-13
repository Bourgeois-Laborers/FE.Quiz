interface Quiz {
    id: string
}

interface QuizConfiguration {
    id: string
    prompt: string
    questionsCount: number
    questionTimeLimit: number
}

export type { Quiz, QuizConfiguration }
