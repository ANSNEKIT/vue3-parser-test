<template>
    <li class="tag">
        <slot />
        <div data-role="button" v-if="isEdit" class="tag__delete" @click="$emit('tagDelete', id)">
            x
        </div>
    </li>
</template>

<script>
export default {
    name: 'BaseTag',
    props: {
        id: {
            type: Number,
            default: 0,
        },
        tag: {
            type: String,
            default: '',
        },
        isEdit: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['tagDelete'],
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
        cursor: pointer;

        &:hover {
            background-color: #ccc;
        }
    }
}
</style>
