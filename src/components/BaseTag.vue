<template>
    <li class="tag">
        <slot />
        <button v-if="isEdit" class="tag__delete"></button>
    </li>
</template>

<script>
export default {
    name: 'BaseTag',
    props: {
        tag: {
            type: String,
            default: '',
        },
        isEdit: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss" scoped>
.tag {
    display: flex;
    align-items: center;

    padding: 5px 10px;

    border: 1px solid #d2dae2;
    border-radius: 6px;
    color: #9eabb8;
    background-color: white;
    text-decoration: none;
    white-space: nowrap;
    font-size: 13px;

    &__delete {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 20px;
        height: 20px;

        padding: 3px;
        margin-left: 5px;

        border: none;
        outline: none;
        border-radius: 1000px;

        &::after {
            display: inline-block;
            content: '\00d7';
        }

        &:hover {
            background-color: #ccc;
        }
    }
}
</style>
