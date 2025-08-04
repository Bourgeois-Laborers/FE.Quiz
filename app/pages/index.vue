<script setup lang="ts">
import { User, Handshake, Bolt, Play } from "lucide-vue-next";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/base/card/";

import AppLogo from "@/components/app/AppLogo.vue";
import SessionCreateForm from "@/components/session/SessionCreateForm.vue";

interface IStep {
  title: string;
  description: string;
  icon: any;
}

interface IFeature {
  title: string;
  description: string;
}

definePageMeta({
  title: "Home",
  layout: "blank",
});

const steps: IStep[] = [
  {
    title: "Enter Your Name",
    description: "Pick any username you like—no registration needed.",
    icon: User,
  },
  {
    title: "Invite Your Squad",
    description:
      "Share one link and watch friends join your quiz lobby instantly.",
    icon: Handshake,
  },
  {
    title: "AI Creates Your Quiz",
    description:
      "Choose any topic and our AI generates challenging questions in seconds.",
    icon: Bolt,
  },
  {
    title: "Battle It Out!",
    description:
      "Compete in real-time and see who's the ultimate quiz champion.",
    icon: Play,
  },
];

const features: IFeature[] = [
  {
    title: "Zero Friction, Maximum Fun",
    description:
      "Skip the boring sign-up process. Enter a name and start playing in under 10 seconds.",
  },
  {
    title: "Real-Time Multiplayer Magic",
    description:
      "Experience the thrill of live competition with instant scoring and real-time reactions.",
  },
  {
    title: "Unlimited Quiz Possibilities",
    description:
      "From 'Marvel Movies' to 'Ancient History'—our AI crafts perfect quizzes on any topic you imagine.",
  },
  {
    title: "Built for Everyone",
    description:
      "Whether you're 4 or 20, host a family game night or challenge your smartest friends.",
  },
];
</script>

<template>
  <main class="home-page relative overflow-hidden">
    <AppLogo
      alt=""
      class="text-primary mx-auto mt-8 md:mt-10 mb-4 md:mb-6 w-32 h-32"
    />

    <h1
      class="mb-4 md:mb-6 mx-auto px-4 md:px-6 text-5xl md:text-6xl lg:text-7xl text-center text-balance font-bold bg-linear-to-br from-primary via-primary to-destructive bg-clip-text text-transparent"
    >
      Quiz Time!
    </h1>

    <section class="mb-8 md:mb-12 container mx-auto px-4 md:px-6">
      <p class="mx-auto text-base md:text-lg text-center max-w-3xl">
        Turn any topic into an exciting quiz battle.
        <br />
        Our AI creates personalized quizzes instantly while you and your friends
        compete in real-time.
        <br />
        No accounts required. Just pure quiz fun.
      </p>
    </section>

    <div class="container mx-auto mb-8 md:mb-12 px-4 md:px-6">
      <Card class="mx-auto max-w-xl">
        <CardContent>
          <SessionCreateForm />
        </CardContent>
      </Card>
    </div>

    <section class="container mx-auto mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl md:text-3xl font-semibold">
        Get Started in 4 Simple Steps
      </h2>

      <ol class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <li
          v-for="(step, index) in steps"
          :key="`step-${index}`"
          class="flex flex-col items-center"
        >
          <span
            class="mb-2 bg-primary rounded-full w-12 h-12 flex items-center justify-center"
          >
            <component :is="step.icon" class="text-primary-foreground" />
          </span>
          <h3 class="mb-1 text-base text-center font-medium">
            {{ step.title }}
          </h3>
          <p class="text-sm text-center text-muted-foreground">
            {{ step.description }}
          </p>
        </li>
      </ol>
    </section>

    <section class="mb-10 lg:mb-12 container mx-auto px-4 md:px-6">
      <h2 class="mb-4 text-center text-2xl md:text-3xl font-semibold">
        Why Choose Our Quiz Platform?
      </h2>

      <div class="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        <Card
          v-for="(feature, index) in features"
          :key="`feature-${index}`"
          class="text-center"
        >
          <CardHeader>
            <CardTitle>{{ feature.title }}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription> {{ feature.description }} </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-page {
  position: relative;
}

.home-page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  background: radial-gradient(
    circle,
    var(--color-primary) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
  background-blend-mode: overlay;
  -webkit-mask-image: linear-gradient(
    to bottom,
    var(--color-background) 20%,
    transparent 80%
  );
  mask-image: linear-gradient(
    to bottom,
    var(--color-background) 20%,
    transparent 80%
  );
}
</style>
