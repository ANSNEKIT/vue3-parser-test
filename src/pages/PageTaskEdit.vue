<template>
    <div class="page-task-edit">
        <h1 class="page-task-edit__title">Редактировать задачу</h1>

        <BaseForm form-type="edit" :task="task" @submit-form="onEdit" />
    </div>
</template>

<script>
import BaseForm from '@/components/BaseForm.vue';
import { CrudApiService } from '@/services/api.service';
import { resources } from '@/common/constants.js';
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
    name: 'PageTaskEdit',
    components: { BaseForm },

    created() {
        this.getTasks();
        this.getExchange();
    },

    computed: {
        ...mapState(['exchange']),
        ...mapGetters(['getTaskById']),

        task() {
            return this.getTaskById(this.$route.params.id);
        },
    },

    methods: {
        ...mapActions(['getTasks', 'getExchange', 'actionUpdateTask']),

        async onEdit(taskParams) {
            const task = { ...taskParams };

            delete task.newKeyword;
            task.id = this.task.id;
            task.keyword = task.keyword.join(', ');

            if (resources[this.exchange]) {
                await CrudApiService.put(resources[this.exchange], task);

                task.keyword = task.keyword.split(', ');
                await this.actionUpdateTask(task);
            }

            this.$router.push({ name: 'Task', params: { id: task.id } });
        },
    },
};
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
