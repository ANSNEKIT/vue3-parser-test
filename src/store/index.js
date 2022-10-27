import { createStore } from 'vuex';

export default createStore({
    state: {
        tasks: [
            // {
            //     id: '0',
            //     title: 'asdfasdf oijwsjh asdhgjv',
            //     article:
            //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veniam doloremque libero deleniti rem laboriosam commodi veritatis culpa molestias voluptate suscipit at numquam quaerat ut, saepe nemo illum repellendus optio. Voluptas in sed sequi vel ipsum omnis, voluptate ullam qui odit voluptatibus id ab alias ad fuga provident facere quasi.',
            //     url: 'https://ya.ru',
            //     keyword: ['qwer', 'coiugs'],
            // },
        ],
        exchange: '',
    },
    getters: {
        getTaskById: (state) => (id) => {
            return state.tasks.find((el) => Number(el.id) === Number(id)) ?? {};
        },
    },
    mutations: {
        updateTask(state, payload) {
            const taskIndex = state.tasks.findIndex((el) => Number(el.id) === Number(payload.id));
            if (taskIndex !== -1) {
                state.tasks.splice(taskIndex, 1, payload);
            }
        },

        setDeleteTask(state, id) {
            const taskIndex = state.tasks.findIndex((el) => Number(el.id) === Number(id));
            if (taskIndex !== -1) {
                state.tasks.splice(taskIndex, 1);
            }
        },

        setTasks(state, tasks) {
            state.tasks = tasks;
        },

        setExchange(state, exchange) {
            state.exchange = exchange;
        },
    },
    actions: {
        getTasks({ commit }, tasks) {
            if (tasks.length > 0) {
                const tasksWidthModifyKeyword = tasks.map((el) => {
                    if (!Array.isArray(el.keyword)) {
                        const keyword = el.keyword.split(', ');
                        el.keyword = keyword;
                    }
                    el.id = String(el.id);
                    return el;
                });

                localStorage.setItem('tasks', JSON.stringify(tasksWidthModifyKeyword));
                commit('setTasks', tasksWidthModifyKeyword);
            }
        },

        getExchange({ commit }, exchange) {
            commit('setExchange', exchange);
            localStorage.setItem('exchange', JSON.stringify(exchange));
        },

        getDeleteTask({ commit, state }, id) {
            commit('setDeleteTask', id);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },

        getTask({ commit, state }, task) {
            commit('updateTask', task);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
    },
    modules: {},
});
