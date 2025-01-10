<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/base/button'
import { FormControl, FormField, FormItem } from '@/components/base/form'
import { Input } from '@/components/base/input'
import { toast } from '@/components/base/toast'

import { useAuthStore } from '@/stores/auth'
import { useSessionStore } from '@/stores/session'

type FormValues = {
    username: string
}

const { signUpUser } = useAuthStore()
const { createNewSession } = useSessionStore()

const router = useRouter()

const { handleSubmit } = useForm<FormValues>({
    validationSchema: toTypedSchema(
        z.object({
            username: z
                .string({
                    required_error: 'We must know each other! Please enter your name, it may not be real.',
                    invalid_type_error: 'We need a string! Please enter your name.',
                })
                .min(2, 'We need more! Your name is too short, at least 2 characters required.')
                .max(50, 'It seems to much! Your name is too long, at most 50 characters allowed.'),
        }),
    ),
})

const onSubmit = handleSubmit(
    async (values: FormValues) => {
        try {
            await signUpUser()
            const session = await createNewSession({ userAlias: values.username })

            router.push(`/session/${session.id}`)
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
            description: errors.username,
            duration: 10000,
        })
    },
)
</script>

<template>
    <form class="w-full flex items-center justify-center gap-4" @submit.prevent="onSubmit">
        <FormField v-slot="{ componentField }" name="username">
            <FormItem>
                <FormControl>
                    <Input type="text" placeholder="Enter name" max="50" v-bind="componentField" />
                </FormControl>
            </FormItem>
        </FormField>

        <Button size="lg" type="submit"> Let's get started! </Button>
    </form>
</template>
