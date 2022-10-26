import BaseButton from '@/components/BaseButton.vue';
<template>
    <div class="task-info">
        <RouterLink to="/tasks" class="task-info__back link-btn">Назад</RouterLink>

        <section class="task-info__task card">
            <h2 v-if="!isEdit" class="card__title">Title asfd asdlf ljksldfghsdgh</h2>
            <BaseInput v-else id="title" v-model="titleInp" class="card__title-inp" />

            <ul class="card__tags">
                <li class="card__tag">
                    tag
                    <button v-if="isEdit" class="card__tag-delete"></button>
                </li>
                <li class="card__tag">
                    tagasdf
                    <button v-if="isEdit" class="card__tag-delete"></button>
                </li>
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

            <p class="card__description">Источник - <a href="http://ya.ru">http://ya.ru</a></p>

            <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ad nostrum aut
                excepturi delectus illum a. Vitae ad, architecto laboriosam culpa nihil sint aliquid
                molestias accusantium mollitia aliquam et facere provident iure ipsa voluptates
                incidunt hic repellendus itaque impedit id quis voluptas quasi officiis? Accusamus
                inventore itaque eligendi? Impedit magni doloremque cupiditate aliquam perferendis
                iste libero ipsam, reiciendis atque eveniet dolor praesentium natus, nihil aut,
                assumenda adipisci nemo sunt? Porro a officiis natus quis quae? Ipsum modi, suscipit
                voluptatem saepe eius quae porro quam nisi. Incidunt impedit quis culpa rerum
                expedita, perferendis ratione facilis ex iste. Rem perspiciatis laborum cupiditate.
            </p>

            <div class="card__buttons">
                <BaseButton v-if="!isEdit" class="base-button--orange" @click="isEdit = true"
                    >Редактировать</BaseButton
                >
                <BaseButton v-if="!isEdit" class="base-button--red">Удалить</BaseButton>
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

export default {
    name: 'PageTaskInfo',
    components: { BaseButton, RouterLink, BaseInput },
    props: {
        task: {
            type: Object,
            default: () => ({}),
        },
        id: {
            type: String,
            default: '',
            required: true,
        },
        title: {
            type: String,
            default: 'asdfasf',
        },
        url: {
            type: String,
            default: '',
        },
        article: {
            type: String,
            default: '',
        },
        keyword: {
            type: String,
            default: '',
        },
    },
    data: () => ({
        isEdit: false,
        isAddTag: false,
        titleInp: '',
        newTag: '',
    }),
    mounted() {
        let self = this;

        console.log(self);

        this.titleInp = this.title;
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

    &__tag {
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

        &-add {
            background-color: white;

            margin-left: 10px;

            &:hover {
                color: black;
            }

            &-wrap {
                display: flex;
                align-items: center;
            }
        }

        &-delete {
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
