<template>
    <div class="page-form">
        <h1 class="page-form__title">Настройки парсера</h1>

        <form action="#" method="post" class="page-form__form">
            <BaseSelect
                id="exchange"
                class="page-form__form-select"
                v-model="exchange"
                label="Выберите биржу"
                :options="exchangeOptions"
            />
            <BaseInput
                id="keyword"
                class="page-form__form-input"
                v-model="keyword"
                label="Ключевые слова"
            />

            <div class="page-form__buttons">
                <BaseButton type="button" class="base-button--cancel">Отмена</BaseButton>
                <BaseButton type="submit" class="base-button--ok">Отправить</BaseButton>
            </div>
        </form>
    </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseButton from '@/components/BaseButton.vue';

export default {
    name: 'PageFormParse',
    components: {
        BaseInput,
        BaseSelect,
        BaseButton,
    },
    data: () => ({
        exchange: '1',
        keyword: 'bla bla',
        exchangeOptions: [
            {
                id: 'freelance',
                value: '1',
                name: 'Freelance',
            },
            {
                id: 'kwork',
                value: '2',
                name: 'Kwork',
            },
            {
                id: 'all',
                value: '3',
                name: 'Выбрать все',
            },
        ],
    }),
};
</script>

<style lang="scss" scoped>
.page-form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;

    padding-top: 100px;

    &__title {
        font-size: 30px;
        line-height: 1.5;

        margin-bottom: 30px;
    }

    &__form {
        width: 50%;
        min-width: 290px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        border: 1px solid black;
        border-radius: 4px;
        background-color: var(--color-yellow-light);

        margin: 0 auto;
        padding: 30px;

        &-select {
            margin-bottom: 30px;
        }
    }

    &__buttons {
        display: flex;
        gap: 20px;

        margin-top: 50px;
    }
}
</style>
