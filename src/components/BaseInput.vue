<template>
    <div class="base-input">
        <label v-if="label" :for="id" class="base-input__label">
            {{ label }}
        </label>
        <input
            :id="id"
            :type="type"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="base-input__input"
        />
    </div>
</template>

<script>
export default {
    name: 'BaseInput',
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
        type: {
            type: String,
            default: 'text',
        },
    },
    emits: ['update:modelValue'],

    methods: {},
};
</script>

<style lang="scss" scoped>
.base-input {
    width: 100%;
    display: flex;
    flex-direction: column;

    font-size: 1em;
    text-align: left;

    &--small {
        .base-input__input {
            min-height: auto;
            padding: 0 3px;
        }
    }

    &__input {
        width: 100%;
        min-height: calc(1.4em + 26px);
        display: block;

        background-color: #f1f1f1;
        border: 2px solid rgba(0, 0, 0, 0.5);
        border-radius: 4px;

        padding: 12px 16px 14px;

        &:active,
        &:focus {
            border: 2px solid black;
            background-color: white;
        }
    }
}
</style>
