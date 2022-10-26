<template>
    <button class="base-button">
        <slot />
    </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.base-button {
    width: max-content;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;

    &--ok {
        background-color: var(--color-btn-ok);

        &:hover {
            background-color: var(--color-btn-ok-hover);
        }
    }

    &--cancel {
        background-color: white;
        border: 1px solid black;
        color: black;
        &:hover {
            background-color: var(--color-gray-hover);
        }
    }

    &--red {
        background-color: var(--color-btn-red);
        &:hover {
            background-color: var(--color-btn-red-hover);
        }
    }

    &--orange {
        background-color: var(--color-btn-orange);
        &:hover {
            background-color: var(--color-btn-orange-hover);
        }
    }
}
</style>
