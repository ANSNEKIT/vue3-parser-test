<template>
    <div class="base-textarea">
        <label class="base-textarea__label" :for="id">{{ label }}</label>
        <textarea
            :id="id"
            class="base-textarea__text"
            v-bind="$attrs"
            rows="8"
            v-model="text"
            @input="$emit('change:modelValue', text)"
        ></textarea>
    </div>
</template>

<script>
export default {
    name: 'BaseTextarea',
    props: {
        id: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        modelValue: {
            type: String,
            default: '',
        },
    },
    emits: ['change:modelValue'],

    data: () => ({
        text: '',
    }),
};
</script>

<style lang="scss" scoped>
.base-textarea {
    width: 100%;

    display: flex;
    flex-direction: column;

    font-size: 1em;
    text-align: left;

    &__text {
        padding: 20px;

        resize: none;
        border-radius: 4px;
        background-color: var(--color-input-bg);
        border: 2px solid rgba(0, 0, 0, 0.5);

        &:active,
        &:focus {
            border: 2px solid black;
            background-color: white;
        }
    }
}
</style>
