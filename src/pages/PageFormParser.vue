<template>
    <div class="page-parser">
        <h1 class="page-parser__title">Настройки парсера</h1>

        <BaseForm class="page-parser__form" @submit-form="onSubmit" />
    </div>
</template>

<script>
import BaseForm from '@/components/BaseForm.vue';
import { ParserConfigService } from '@/services/api.service.js';
import { mapActions } from 'vuex';
export default {
    name: 'PageFormParse',
    components: {
        BaseForm,
    },
    methods: {
        ...mapActions(['getTasks']),

        async onSubmit({ exchange, keyword }) {
            const sources = [];
            let tasks = [];

            if (exchange === '3') {
                sources.push('1');
                sources.push('2');
            } else {
                sources.push(exchange);
            }

            const config = {
                sources,
                id_user: 0,
                id_parsource: 0,
                keywords: keyword,
                hash_parsource: 'string-test12',
            };
            const prepareConfig = await ParserConfigService.post('/parser-config/', config);

            if (Object.keys(prepareConfig).length > 0) {
                const parsedData = await ParserConfigService.get('/parser-config/', {
                    params: { hash_parsource: config.hash_parsource },
                });

                console.log(parsedData);

                if (exchange === '1') {
                    tasks = parsedData[0].freelancehabr_result;
                } else if (exchange === '2') {
                    tasks = parsedData[0].kwork_result;
                } else {
                    tasks = parsedData[0].freelancehabr_result;
                    tasks.push(...parsedData[0].kwork_result);
                }

                this.getTasks(tasks);

                this.$router.push({ name: 'Tasks' });
            }
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
