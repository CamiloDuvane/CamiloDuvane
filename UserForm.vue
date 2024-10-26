<template>
    <UForm :state="UserState" class="flex flex-col mt-5" :schema="UserRegister" @submit="onSubmitStep1">
        <div class="flex flex-col gap-5">
            <UFormGroup label="E-mail" name="email" required>
                <UInput icon="i-heroicons-envelope" size="lg" v-model="UserState.email" type="email" variant="outline"
                    placeholder="email@exemplo.com" />
            </UFormGroup>

            <UFormGroup label="Senha" name="password" required>
                <UInput icon="i-heroicons-lock-closed" size="lg" v-model="UserState.password" type="password"
                    variant="outline" placeholder="Senha" @input="passwordTouched = true" />
                <ul class="mt-2 text-sm" v-if="passwordTouched || formSubmitted">
                    <li v-for="(rule, index) in passwordRules" :key="index" class="text-red-500 flex items-center">
                        {{ rule }}
                    </li>
                </ul>
            </UFormGroup>

            <UFormGroup label="Confirme a senha" name="password_confirm" required>
                <UInput icon="i-heroicons-lock-closed" size="lg" v-model="UserState.password_confirm" type="password"
                    variant="outline" placeholder="Confirme a senha" />
            </UFormGroup>

            <UButton type="submit" class="flex justify-center mt-5" size="lg" color="amber" variant="solid">
                Próximo
            </UButton>
        </div>
    </UForm>
</template>

<script setup lang="ts">
import { reactive, computed, ref, defineEmits } from 'vue';
import { z } from 'zod';
import { passwordValidation } from '~/utils';

const emit = defineEmits(['nextStep']);
const props = defineProps(['userData']);

const UserRegister = z.object({
    email: z.string().email('Email inválido'),
    password: z.string()
        .min(1, 'Senha é obrigatória'),
    password_confirm: z.string().min(1, 'Confirmação de senha é obrigatória'),
}).refine((data) => data.password === data.password_confirm, {
    message: 'As senhas devem ser iguais',
    path: ['password_confirm'],
});

const UserState = reactive({
    email: props.userData.email || '',
    password: props.userData.password || '',
    password_confirm: props.userData.password_confirm || ''
});

const formSubmitted = ref(false);

const passwordRules = computed(() => passwordValidation(UserState.password));

const onSubmitStep1 = () => {
    formSubmitted.value = true;
    const result = UserRegister.safeParse(UserState);

    if (result.success) {
        emit('nextStep', { ...UserState });
    } else {
        console.log('Erro de validação', result.error);
    }
};
</script>