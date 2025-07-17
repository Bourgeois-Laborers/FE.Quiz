<script setup lang="ts">
import { ref } from 'vue';

interface IFormData {
  username: string;
}

const formData = ref<IFormData>({
  username: '',
});

const onSubmit = () => {
  console.log('submit');
};
</script>

<template>
  <q-form @submit.prevent="onSubmit">
    <q-input
      v-model="formData.username"
      name="username"
      :label="$t('session.create.username')"
      :placeholder="$t('session.create.usernamePlaceholder')"
      outlined
      dense
    />

    <q-btn type="submit" color="primary" unelevated>
      {{ $t('session.create.submit') }}
    </q-btn>
  </q-form>
</template>
