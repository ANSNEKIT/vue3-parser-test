<template>
    <div class="task-info">
        <RouterLink to="/tasks" class="task-info__back link-btn">Назад</RouterLink>

        <section class="task-info__task card">
            <h2 v-if="!isEdit" class="card__title">{{ task.title }}</h2>
            <BaseInput v-else id="title" v-model="titleInp" class="card__title-inp" />

            <ul class="card__tags">
                <BaseTag v-for="(tag, idx) in task.keyword" :key="`tag-${idx}`">{{ tag }} </BaseTag>
                <li class="card__tag-add-wrap">
                    <BaseInput
                        v-if="isAddTag"
                        id="tag-add"
                        v-model="newTag"
                        class="card__tag-inp base-input--small"
                    />
                    <button v-if="isEdit" class="card__tag card__tag-add" @click="isAddTag = true">
                        + Добавить
                    </button>
                </li>
            </ul>

            <p class="card__description">
                Источник - <a :href="task.url">{{ task.url }}</a>
            </p>

            <p class="card__description">
                {{ task.article }}
            </p>

            <div class="card__buttons">
                <RouterLink :to="{ name: 'TaskEdit', params: { id: task.id } }">
                    <BaseButton v-if="!isEdit" class="base-button--orange" @click="isEdit = true"
                        >Редактировать</BaseButton
                    >
                </RouterLink>

                <BaseButton v-if="isEdit" class="base-button--cancel" @click="isEdit = false"
                    >Отмена</BaseButton
                >
                <BaseButton v-if="isEdit" class="base-button--ok">Сохранить</BaseButton>
            </div>
        </section>
    </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import { RouterLink } from 'vue-router';
import BaseInput from '@/components/BaseInput.vue';
import { mapGetters, mapState } from 'vuex';
import BaseTag from '../components/BaseTag.vue';

export default {
    name: 'PageTaskInfo',
    components: { BaseButton, RouterLink, BaseInput, BaseTag },
    data: () => ({
        isEdit: false,
        isAddTag: false,
        titleInp: '',
        newTag: '',
    }),

    mounted() {
        this.titleInp = this.title;
    },

    computed: {
        ...mapState(['tasks']),
        ...mapGetters(['getTaskById']),

        task() {
            return this.getTaskById(this.$route.params?.id);
        },
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
    max-width: 70%;
    min-width: 470px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 30px;
    margin: 0 auto;
    margin-top: 100px;

    border-radius: 4px;
    border: 1px solid var(--color-border);
    background-color: var(--color-yellow-light);

    &__title {
        font-size: 23px;
        line-height: 1.2em;
        font-weight: 800;
        text-align: left;

        margin-bottom: 20px;

        &-inp {
            margin-bottom: 20px;
        }
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
