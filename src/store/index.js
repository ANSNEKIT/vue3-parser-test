import { createStore } from 'vuex';

export default createStore({
    state: {
        tasks: [
            {
                id: '0',
                title: 'asdfasdf oijwsjh asdhgjv',
                article:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veniam doloremque libero deleniti rem laboriosam commodi veritatis culpa molestias voluptate suscipit at numquam quaerat ut, saepe nemo illum repellendus optio. Voluptas in sed sequi vel ipsum omnis, voluptate ullam qui odit voluptatibus id ab alias ad fuga provident facere quasi.',
                url: 'https://ya.ru',
                keyword: ['qwer', 'coiugs'],
            },
        ],
    },
    mutations: {
        updateTask(state, payload) {
            const taskIndex = state.tasks.findIndex(payload.id);
            if (taskIndex !== -1) {
                state.tasks.splice(taskIndex, 1, payload);
            }
        },
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
    },
    actions: {
        getTasks({ commit }, tasks) {
            const tasksWidthModifyKeyword = tasks.map((el) => {
                const keyword = el.keyword.split(', ');
                el.keyword = keyword;
                return el;
            });
            commit('setTasks', tasksWidthModifyKeyword);
        },
    },
    modules: {},
    getters: {
        getTaskById: (state) => (id) => {
            return state.tasks.find((el) => Number(el.id) === Number(id)) ?? {};
        },
    },
});
