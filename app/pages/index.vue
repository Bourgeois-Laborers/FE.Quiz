<script setup lang="ts">
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
    title: "Create & Invite",
    description:
      "Enter your nickname—no sign-up needed. Share the link and bring your friends in.",
  },
  {
    title: "Choose a Topic",
    description: "Pick any quiz topic—our AI handles the rest.",
  },
  {
    title: "Start the Quiz",
    description:
      "AI-generated questions, live competition, and a race to the top of the leaderboard!",
  },
];

const features: IFeature[] = [
  {
    title: "Jump In",
    description:
      "No accounts, no hassle. Just pick a name and you’re playing in seconds.",
  },
  {
    title: "Live Multiplayer Thrills",
    description:
      "Play in real-time with friends. Instant scoring and reactions keep the energy high.",
  },
  {
    title: "AI-Powered Quiz Variety",
    description:
      "From pop culture to deep science, our AI creates the perfect quiz on any topic you choose.",
  },
  {
    title: "Fun for All",
    description:
      "It’s perfect for families, classrooms, or friendly rivalries—play from any device with internet.",
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
        <span class="bg-background px-1">
          Turn any topic into an exciting quiz battle.
        </span>
        <br />
        <span class="bg-background px-1">
          Our AI creates personalized quizzes instantly while you and your
          friends compete in real-time.
        </span>
        <br />
        <span class="bg-background px-1"> Just pure quiz fun. </span>
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

      <ol class="home-page__features grid gap-4 w-max mx-auto">
        <li
          v-for="(step, index) in steps"
          :key="`step-${index}`"
          class="flex gap-4"
        >
          <span
            class="mb-2 bg-primary text-lg text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center"
          >
            {{ index + 1 }}
          </span>
          <div>
            <h3 class="mb-1 text-base font-medium">
              {{ step.title }}
            </h3>
            <p class="text-sm text-muted-foreground">
              {{ step.description }}
            </p>
          </div>
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
          class="text-center gap-1"
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
    transparent 85%
  );
  mask-image: linear-gradient(
    to bottom,
    var(--color-background) 20%,
    transparent 85%
  );
  z-index: -1;
}

.home-page__features li {
  position: relative;
}

.home-page__features li:not(:last-child)::after {
  content: "";
  position: absolute;
  left: 24px;
  top: 48px;
  width: 2px;
  height: 32px;
  background-color: var(--color-border);
}
</style>
