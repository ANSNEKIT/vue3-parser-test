import { resources } from '@/common/constants.js';
import { CrudApiService } from '@/services/api.service.js';

export class ParserConfigService extends CrudApiService {
    userId;
    parsourceId;
    keywords;
    hash;
    sources;

    static async post(config = {}) {
        const route = '/parser-config/';
        const data = await CrudApiService.post(route, config);

        this.userId = data.id_user;
        this.parsourceId = data.id_parsource;
        this.keywords = data.keywords;
        this.hash = data.hash_parsource;

        return data;
    }

    static async get(config = {}, exchange) {
        const route = '/parser-config/';
        const data = await CrudApiService.get(route, config);
        const filtered = this._filterByConfig(data);

        const resoursedData = this._resourceData(filtered, exchange);
        const normalizedData = this._normalizedData(resoursedData);

        return normalizedData;
    }

    static _filterByConfig(data = []) {
        const filteredResults = data
            .filter((el) => Number(this.userId) === Number(el.id_user))
            .filter((el) => Number(this.parsourceId) === Number(el.id_parsource))
            .filter((el) => String(this.keywords) === String(el.keywords))
            .filter((el) => String(this.hash) === String(el.hash_parsource));

        return filteredResults;
    }

    static _resourceData(data = [], exchange) {
        const task = data[data.length - 2];
        const { freelancehabr_result, kwork_result } = task;
        let tasks = [];

        if (data.length === 1) {
            resources[String(exchange)] === resources['1']
                ? (tasks = freelancehabr_result)
                : (tasks = kwork_result);
        } else {
            tasks = freelancehabr_result;
            tasks.push(...kwork_result);
        }

        return tasks;
    }

    static _normalizedData(data = []) {
        const tasksWidthModifyKeyword = data.map((el) => {
            if (!Array.isArray(el.keyword)) {
                const keyword = el.keyword.split(', ');
                el.keyword = keyword;
            }
            el.id = String(el.id);
            return el;
        });

        return tasksWidthModifyKeyword;
    }
}
