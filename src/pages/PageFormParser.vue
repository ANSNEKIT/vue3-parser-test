<template>
    <div class="page-parser">
        <h1 class="page-parser__title">Настройки парсера</h1>

        <BaseForm class="page-parser__form" @submit-form="onSubmit" />
    </div>
</template>

<script>
import BaseForm from '@/components/BaseForm.vue';
import { mapActions } from 'vuex';
export default {
    name: 'PageFormParse',
    components: {
        BaseForm,
    },
    methods: {
        ...mapActions(['fetchTasks', 'actionExchange']),

        async onSubmit({ exchange, keyword }) {
            const sources = [];

            if (exchange === '3') {
                sources.push('1');
                sources.push('2');
            } else {
                sources.push(exchange);
            }

            const parserConfig = {
                sources,
                id_user: 0,
                id_parsource: 0,
                keywords: keyword,
                hash_parsource: 'string-test123',
            };
            const getParserConfig = {
                params: { hash_parsource: parserConfig.hash_parsource },
            };

            this.actionExchange(exchange);
            await this.fetchTasks({ parserConfig, getParserConfig });

            this.$router.push({ name: 'Tasks' });
        },
    },
};
</script>

<style lang="scss" scoped>
.page-parser {
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
