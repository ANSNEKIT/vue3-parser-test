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
        background-color: #54bcb2;

        &:hover {
            background-color: lighten(#54bcb2, 15%);
        }
    }

    &--cancel {
        background-color: #ff765b;
        &:hover {
            background-color: lighten(#ff765b, 15%);
        }
    }

    &--red {
        background-color: #ff1818;
        &:hover {
            background-color: lighten(#ff1818, 15%);
        }
    }

    &--orange {
        background-color: #ce7c00;
        &:hover {
            background-color: lighten(#ce7c00, 15%);
        }
    }
}
</style>
