<script setup lang="ts">
import { h } from 'vue'

import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Bolt } from 'lucide-vue-next'

import { Card } from '@/components/base/card'
import { Button } from '@/components/base/button'
import { FormControl, FormField, FormItem, FormLabel, FormDescription } from '@/components/base/form'
import { Textarea } from '@/components/base/textarea'
import { Input } from '@/components/base/input'
import { Slider } from '@/components/base/slider'
import { toast } from '@/components/base/toast'

import { formatSeconds } from '@/utils/formatSeconds'

type FormValues = {
    prompt: string
    questionsCount: number
    questionTimeLimit: number
}

const QUESTIONS_COUNT_MIN = 3
const QUESTIONS_COUNT_MAX = 25
const QUESTIONS_COUNT_DEFAULT = 10

const QUESTION_TIME_LIMIT_MIN = 30 // 30 seconds
const QUESTION_TIME_LIMIT_MAX = 300 // 5 min
const QUESTION_TIME_LIMIT_DEFAULT = 90 // 1 min 30 sec

const { handleSubmit } = useForm<FormValues>({
    validationSchema: toTypedSchema(
        z.object({
            prompt: z
                .string({
                    required_error: 'We need to know what you want to quiz about!',
                })
                .min(3, 'We need more! The topic at least 3 characters required.')
                .max(255, 'It seems too much! The topic at most 255 characters allowed.'),
            questionsCount: z
                .number({
                    required_error: 'We need to know how many questions you want to answer!',
                    invalid_type_error: 'We need a number! Please enter a number for questions count.',
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
        prompt: '',
        questionsCount: QUESTIONS_COUNT_DEFAULT,
        questionTimeLimit: [QUESTION_TIME_LIMIT_DEFAULT],
    },
})

const onSubmit = handleSubmit(
    async (values) => {
        try {
            const payload = {
                prompt: values.prompt,
                questionsCount: values.questionsCount,
                questionTimeLimit: values.questionTimeLimit[0],
            }

            console.log('Quiz configuration:', payload)
            // TODO: call the API to create a quiz
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
                Object.values(errors).map((error) => h('li', `${error}`)),
            ),
            duration: 10000,
        })
    },
)
</script>

<template>
    <form @submit.prevent="onSubmit">
        <Card class="p-4">
            <h3 class="flex items-center text-base font-medium mb-1">
                <Bolt :size="18" aria-hidden="true" class="mr-2" />
                Configuration
            </h3>

            <p class="text-sm text-gray-600 mb-4">
                Configure your quiz by providing the topic, number of questions, and time limit per question.
            </p>

            <FormField v-slot="{ componentField }" name="prompt">
                <FormItem class="mb-4">
                    <FormLabel>Topic</FormLabel>
                    <FormControl>
                        <Textarea
                            placeholder="Enter quiz topic..."
                            :default-value="''"
                            auto-grow
                            v-bind="componentField"
                        />
                    </FormControl>
                    <FormDescription class="w-20 text-right">
                        <!-- TODO: few buttons with popular topics to autocomplete -->
                    </FormDescription>
                </FormItem>
            </FormField>

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
                <FormItem class="mb-4">
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
