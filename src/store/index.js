import { createStore } from 'vuex';
import { ParserConfigService } from '@/services/parser-config.service';
import { setLocalStorage } from '@/common/localStorage';
import { getLocalStorage, hasKeyInLocalStorage } from '../common/localStorage';

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
        async fetchTasks({ commit, state }, { parserConfig, getParserConfig }) {
            const postData = await ParserConfigService.post(parserConfig);

            if (Object.keys(postData).length > 0) {
                const tasks = await ParserConfigService.get(getParserConfig, state.exchange);

                commit('setTasks', tasks);
                setLocalStorage('tasks', tasks);
            }
        },

        getTasks({ commit, state }) {
            if (state.tasks.length === 0 && hasKeyInLocalStorage('tasks')) {
                const tasks = getLocalStorage('tasks');
                commit('setTasks', tasks);
            }
        },

        actionExchange({ commit }, exchange) {
            commit('setExchange', exchange);
            setLocalStorage('exchange', exchange);
        },

        getExchange({ commit, state }) {
            if (!state.exchange && hasKeyInLocalStorage('exchange')) {
                const exchange = getLocalStorage('exchange');
                commit('setExchange', exchange);
            }
        },

        actionDeleteTask({ commit, state }, id) {
            commit('setDeleteTask', id);
            setLocalStorage('tasks', state.tasks);
        },

        actionUpdateTask({ commit, state }, task) {
            commit('updateTask', task);
            setLocalStorage('tasks', state.tasks);
        },
    },
    modules: {},
});
