<template>
    <div class="base-select">
        <label :for="id" class="base-select__label">{{ label }}</label>
        <div class="base-select__select-wrap">
            <select
                :id="id"
                :value="modelValue"
                class="base-select__select"
                @input="$emit('update:modelValue', $event.target.value)"
            >
                <option v-for="option of options" :key="option.id" :value="option.value">
                    {{ option.name }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseSelect',
    props: {
        id: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        options: {
            type: Array,
            default: () => [],
        },
        modelValue: {
            type: String,
            default: '',
        },
    },
    emits: ['update:modelValue'],
};
</script>

<style lang="scss" scoped>
.base-select {
    width: 100%;
    display: flex;
    flex-direction: column;

    font-size: 1em;
    text-align: left;

    &__label {
        margin-bottom: 4px;
    }

    &__select-wrap {
        position: relative;
    }

    &__select {
        width: 100%;
        min-height: calc(1.4em + 26px);
        display: block;

        border: 2px solid rgba(0, 0, 0, 0.5);
        border-radius: 4px;

        padding: 12px 16px 14px;

        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;

        background: url('https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/dropdown_arrow-512.png');
        background-repeat: no-repeat;
        background-size: 15px 15px;
        background-position: right;
        background-origin: content-box;
        background-color: var(--color-input-bg);

        &:active,
        &:focus {
            background-color: white;
            border: 2px solid black;
        }
    }
}
</style>
