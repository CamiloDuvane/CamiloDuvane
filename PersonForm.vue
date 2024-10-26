<template>
    <UForm :state="PersonState" class="flex flex-col mt-5" :schema="PersonRegister" @submit="onSubmitStep2">
        <div class="flex flex-col gap-5">
            <UFormGroup label="Primeiro nome" name="first_name" required>
                <UInput icon="i-heroicons-user" size="lg" v-model="PersonState.first_name" variant="outline"
                    placeholder="Primeiro nome" />
            </UFormGroup>
            <UFormGroup label="Último nome" name="last_name" required>
                <UInput icon="i-heroicons-user" size="lg" v-model="PersonState.last_name" variant="outline"
                    placeholder="Último nome" />
            </UFormGroup>
            <UFormGroup label="CPF" name="cpf" required>
                <UInput icon="i-heroicons-identification" size="lg" v-model="PersonState.cpf" variant="outline"
                    v-mask="'###.###.###-##'" placeholder=" 000.000.00-00" />
            </UFormGroup>
            <div class="flex gap-4 w-full">
                <UFormGroup class="w-1/2" label="Gênero" name="gender" required>
                    <USelectMenu v-model="PersonState.gender" placeholder="Selecione o gênero" size="lg"
                        :options="genderOptions" />
                </UFormGroup>
                <UFormGroup label="Data de nascimento" name="birthdate" required>
                    <UInput icon="i-heroicons-calendar" size="lg" v-model="PersonState.birthdate" variant="outline"
                        v-mask="'##/##/####'" placeholder="00/00/0000" />
                </UFormGroup>
            </div>
            <UFormGroup label="Sobre você" name="about">
                <UTextarea icon="i-heroicons-identification" size="lg" v-model="PersonState.about" variant="outline" />
            </UFormGroup>
            <div class="flex gap-3 justify-end mt-5">
                <UButton class="flex justify-center" size="lg" color="amber" variant="outline"
                    @click="$emit('prevStep')">
                    Voltar
                </UButton>
                <UButton type="submit" class="flex justify-center" size="lg" color="amber" variant="solid">
                    Concluir
                </UButton>
            </div>
        </div>
    </UForm>
</template>

<script setup lang="ts">
import { reactive, ref, defineEmits, watchEffect } from 'vue';
import { z } from 'zod';
import { validarCPF } from '~/utils';

const emit = defineEmits(['prevStep', 'submitForm']);

const props = defineProps(['personData']);

const genderOptions = [
    { value: 'M', label: 'Masculino' },
    { value: 'F', label: 'Feminino' },
];

const PersonRegister = z.object({
    first_name: z.string().min(1, 'O primeiro nome é obrigatório'),
    last_name: z.string().min(1, 'O último nome é obrigatório'),
    birthdate: z.string().min(1, 'A data de nascimento é obrigatória'),
    cpf: z.string()
        .min(11, 'O CPF deve conter 11 dígitos')
        .max(14, 'O CPF não pode exceder 14 caracteres')
        .refine((cpf) => validarCPF(cpf), {
            message: 'CPF inválido',
        }),
    gender: z.object({
        value: z.string()
            .refine((val) => ['M', 'F'].includes(val), {
            message: 'O gênero selecionado é inválido',
        }),
        label: z.string()
    })
});


const PersonState = reactive({
    first_name: props.personData.first_name || '',
    last_name: props.personData.last_name || '',
    birthdate: props.personData.birthdate || '',
    cpf: props.personData.cpf || '',
    about: props.personData.about || '',
    gender: props.personData.gender || '',
});

watchEffect(() => {
    Object.assign(PersonState, props.personData);
});

const onSubmitStep2 = () => {
    console.log(PersonRegister)
    const result = PersonRegister.safeParse(PersonState);
    if (result.success) {
        emit('submitForm', { ...PersonState });
    } else {
        console.log('Erro de validação', result.error);
    }
};
</script>