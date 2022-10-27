<template>
    <div class="page-tasks">
        <TheCard
            v-for="task in tasks"
            :key="task.id"
            :id="task.id"
            :title="task.title"
            :article="task.article"
            :keyword="task.keyword"
            :url="task.url"
            @delete-task="onDeleteTask"
        />
    </div>
</template>

<script>
import TheCard from '@/components/TheCard.vue';
import { CrudApiService } from '@/services/api.service';
import { resources } from '@/common/constants.js';
import { mapActions, mapState } from 'vuex';

export default {
    name: 'PageParsedList',
    components: { TheCard },
    created() {
        const tasksData = localStorage.getItem('tasks');
        const localExchange = localStorage.getItem('exchange');
        if (tasksData) {
            this.getTasks(JSON.parse(tasksData));
        }
        if (localExchange) {
            this.getExchange(JSON.parse(localExchange));
        }
    },
    computed: {
        ...mapState(['tasks', 'exchange']),
    },
    methods: {
        ...mapActions(['getTasks', 'getDeleteTask', 'getExchange']),

        async onDeleteTask(id) {
            if (resources[this.exchange]) {
                await CrudApiService.delete(resources[this.exchange], id);
                this.getDeleteTask(id);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.page-tasks {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1rem;

    max-width: 1300px;
    margin: 0 auto;
    padding: 30px;
}
</style>
