<script setup lang="ts">
import { h } from 'vue'

import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Card } from '@/components/base/card'
import { Button } from '@/components/base/button'
import { FormControl, FormField, FormItem, FormLabel, FormDescription } from '@/components/base/form'
import { Input } from '@/components/base/input'
import { Slider } from '@/components/base/slider'
import { toast } from '@/components/base/toast'

import { useSessionStore } from '@/stores/session'

import { formatSeconds } from '@/utils/formatSeconds'

type FormValues = {
    questionsCount: number
    questionTimeLimit: number
}

const QUESTIONS_COUNT_MIN = 3
const QUESTIONS_COUNT_MAX = 25
const QUESTIONS_COUNT_DEFAULT = 10

const QUESTION_TIME_LIMIT_MIN = 30 // 30 seconds
const QUESTION_TIME_LIMIT_MAX = 300 // 5 min
const QUESTION_TIME_LIMIT_DEFAULT = 90 // 1 min 30 sec

const { updateSession } = useSessionStore()

const { handleSubmit } = useForm<FormValues>({
    validationSchema: toTypedSchema(
        z.object({
            questionsCount: z
                .number({
                    required_error: 'We need to know how many questions you want to answer!',
                    invalid_type_error: 'We need a number! Please enter a number.',
                })
                .min(QUESTIONS_COUNT_MIN, `We need more! At least ${QUESTIONS_COUNT_MIN} question required.`)
                .max(QUESTIONS_COUNT_MAX, `It seems to much! At most ${QUESTIONS_COUNT_MAX} questions allowed.`),
            questionTimeLimit: z
                .array(
                    z
                        .number({
                            required_error: 'We need to know how much time you want to spend on each question!',
                            invalid_type_error: 'We need a number! Please enter a number.',
                        })
                        .min(
                            QUESTION_TIME_LIMIT_MIN,
                            `We need more! At least ${QUESTION_TIME_LIMIT_MIN} seconds required.`,
                        )
                        .max(
                            QUESTION_TIME_LIMIT_MAX,
                            `It seems to much! At most ${QUESTION_TIME_LIMIT_MAX} seconds allowed.`,
                        ),
                )
                .length(1),
        }),
    ),
    initialValues: {
        questionsCount: QUESTIONS_COUNT_DEFAULT,
        questionTimeLimit: [QUESTION_TIME_LIMIT_DEFAULT],
    },
})

const onSubmit = handleSubmit(
    async (values) => {
        try {
            const payload = {
                questionsCount: values.questionsCount,
                questionTimeLimit: values.questionTimeLimit[0],
            }
            await updateSession(payload)
        } catch {
            toast({
                title: 'Whoops!',
                description: 'Something went wrong, please try again later.',
                duration: 10000,
            })
        }
    },
    ({ errors }) => {
        toast({
            title: 'Whoops!',
            description: h(
                'ul',
                Object.values(errors).map((error) => h('li', error)),
            ),
            duration: 10000,
        })
    },
)
</script>

<template>
    <form @submit.prevent="onSubmit">
        <Card class="p-4">
            <h3 class="text-base font-medium mb-2">Settings</h3>

            <FormField v-slot="{ componentField }" name="questionsCount">
                <FormItem class="mb-4">
                    <FormLabel>Questions count</FormLabel>
                    <FormControl>
                        <Input
                            type="number"
                            placeholder="Enter questions count"
                            :default-value="QUESTIONS_COUNT_DEFAULT"
                            :max="QUESTIONS_COUNT_MAX"
                            :min="QUESTIONS_COUNT_MIN"
                            v-bind="componentField"
                        />
                    </FormControl>
                </FormItem>
            </FormField>

            <FormField v-slot="{ componentField, value }" name="questionTimeLimit">
                <FormItem>
                    <FormLabel>Question time limit</FormLabel>
                    <div class="flex items-center gap-2">
                        <FormControl>
                            <Slider
                                v-bind="componentField"
                                :default-value="[QUESTION_TIME_LIMIT_DEFAULT]"
                                :max="QUESTION_TIME_LIMIT_MAX"
                                :min="QUESTION_TIME_LIMIT_MIN"
                                :step="15"
                            />
                        </FormControl>
                        <FormDescription class="w-20 text-right"> {{ formatSeconds(value[0]) }} min </FormDescription>
                    </div>
                </FormItem>
            </FormField>
        </Card>

        <Button size="lg" type="submit" class="w-full mt-8">Generate & Start</Button>
    </form>
</template>
