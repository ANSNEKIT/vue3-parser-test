import axios from './axios';
export class ReadonlyApiService {
    static async get(resource, config = {}) {
        const { data } = await axios.get(resource, config);
        return data;
    }

    static async getEntityById(resource, id, config = {}) {
        const { data } = await axios.get(`api/${resource}/${id}/`, config);
        return data;
    }
}

export class CrudApiService extends ReadonlyApiService {
    static async post(resource, entity) {
        const { data } = await axios.post(resource, entity);
        return data;
    }

    static async put(resource, entity) {
        const { data } = await axios.put(`api/${resource}/${entity.id}/`, entity);
        return data;
    }

    static async patch(resource, entity) {
        const { data } = await axios.patch(`api/${resource}/${entity.id}/`, entity);
        return data;
    }

    static async delete(resource, id) {
        const { data } = await axios.delete(`api/${resource}/${id}/`, id);
        return data;
    }
}
