<template>
    <div class="page-task-edit">
        <h1 class="page-task-edit__title">Редактировать задачу</h1>

        <BaseForm form-type="edit" :tags="['asdf', 'aljjhsjh']" />
    </div>
</template>

<script>
import BaseForm from '@/components/BaseForm.vue';

export default { components: { BaseForm } };
</script>

<style lang="scss" scoped>
.page-task-edit {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 100px;

    &__title {
        font-size: 30px;
        line-height: 1.5;

        margin-bottom: 30px;
    }
}
</style>
