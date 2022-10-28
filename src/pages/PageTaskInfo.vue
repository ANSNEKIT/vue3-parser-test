<template>
    <div class="task-info">
        <RouterLink to="/tasks" class="task-info__back link-btn">Назад</RouterLink>

        <section class="task-info__task card">
            <h2 class="card__title">{{ task.title }}</h2>

            <ul class="card__tags">
                <BaseTag v-for="(tag, idx) in task.keyword" :key="`tag-${idx}`">{{ tag }} </BaseTag>
            </ul>

            <p class="card__description">
                Источник - <a :href="task.url">{{ task.url }}</a>
            </p>

            <p class="card__description">
                {{ task.article }}
            </p>

            <div class="card__buttons">
                <RouterLink :to="{ name: 'TaskEdit', params: { id: task.id } }">
                    <BaseButton class="base-button--orange">Редактировать</BaseButton>
                </RouterLink>
            </div>
        </section>
    </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import { RouterLink } from 'vue-router';
import { mapActions, mapGetters } from 'vuex';
import BaseTag from '@/components/BaseTag.vue';

export default {
    name: 'PageTaskInfo',
    components: { BaseButton, RouterLink, BaseTag },
    data: () => ({
        isEdit: false,
        isAddTag: false,
    }),

    created() {
        this.getTasks();
    },

    computed: {
        ...mapGetters(['getTaskById']),

        task() {
            return this.getTaskById(this.$route.params.id);
        },
    },

    methods: {
        ...mapActions(['getTasks']),
    },
};
</script>

<style lang="scss" scoped>
.task-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    height: 100%;
}
.card {
    width: 70%;
    min-width: max-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 30px;
    margin: 0 auto;
    margin-top: 0;

    border-radius: 4px;
    border: 1px solid var(--color-border);
    background-color: var(--color-yellow-light);

    &__title {
        font-size: 23px;
        line-height: 1.2em;
        font-weight: 800;
        text-align: left;

        margin-bottom: 20px;
    }

    &__tags {
        display: flex;
        gap: 5px;

        margin-bottom: 30px;
    }

    &__description {
        text-align: left;

        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    &__buttons {
        display: flex;
        gap: 10px;
    }
}
</style>
