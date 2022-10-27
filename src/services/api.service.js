import axios from './axios';

export class ReadonlyApiService {
    static async get(resource, config = {}) {
        const { data } = await axios.get(resource, config);
        return data;
    }

    static async getEntityById(resource, id, config = {}) {
        const { data } = await axios.get(`${resource}/${id}`, config);
        return data;
    }
}

export class CrudApiService extends ReadonlyApiService {
    static async post(resource, entity) {
        const { data } = await axios.post(resource, entity);
        return data;
    }

    static async put(resource, entity) {
        const { data } = await axios.post(`${resource}/${entity.id}`, entity);
        return data;
    }

    static async patch(resource, entity) {
        const { data } = await axios.post(`${resource}/${entity.id}`, entity);
        return data;
    }

    static async delete(resource, id) {
        const { data } = await axios.post(`${resource}/${id}`, id);
        return data;
    }
}

export class ParserConfigService extends CrudApiService {
    userId;
    parsourceId;
    keywords;
    hash;
    sources;

    static async post(resource, config = {}) {
        const data = await CrudApiService.post(resource, config);

        this.userId = data.id_user;
        this.parsourceId = data.id_parsource;
        this.keywords = data.keywords;
        this.hash = data.hash_parsource;

        return data;
    }

    static async get(resource, config = {}) {
        const data = await CrudApiService.get(resource, config);
        const filtered = this._filterByConfig(data);
        return filtered;
    }

    static _filterByConfig(data = []) {
        const filteredResults = data
            .filter((el) => Number(this.userId) === Number(el.id_user))
            .filter((el) => Number(this.parsourceId) === Number(el.id_parsource))
            .filter((el) => String(this.keywords) === String(el.keywords))
            .filter((el) => String(this.hash) === String(el.hash_parsource));

        return filteredResults;
    }
}
