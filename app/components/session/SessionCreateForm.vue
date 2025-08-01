<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { storeToRefs } from 'pinia'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/base/form";
import { Input } from "@/components/base/input";
import { Button } from "@/components/base/button";

import { useAuthStore } from "@/stores/auth.store";
import { useSessionStore } from "@/stores/session.store";

const authStore = useAuthStore();
const { isAuth } = storeToRefs(authStore);

const sessionStore = useSessionStore();

const formSchema = toTypedSchema(
  z.object({
    userAlias: z.string().min(2).max(50),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
  console.log("Form submitted!", values);
  if (!isAuth) {
    await authStore.register();
  }

  const session = await sessionStore.createSession(values)

  navigateTo(`/session/${session.id}`);
});
</script>

<template>
  <form @submit.prevent="onSubmit">


    <FormField v-slot="{ componentField }" name="userAlias">
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Enter name" v-bind="componentField" />
        </FormControl>
        <FormDescription>
          Feel free to use any name you like—even something silly or random!
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button type="submit" class="mt-6 w-full"> Let's start! </Button>
  </form>
</template>
