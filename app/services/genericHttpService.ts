import axios from "axios"

export class GenericHttpService {
    private baseUrl: string = 'http://localhost:3002'
    constructor() {}
    buildUrl(url: string) {
        return `${this.baseUrl}/${url}`;
    }
    async httpGet(url: string) {
        return axios.get(this.buildUrl(url));
    }

    async httpPut(url: string, data: any) {
        return axios.put(this.buildUrl(url), data);
    }

    async httpDelete(url: string){
        return axios.delete(this.buildUrl(url));
    }

    async httpPost(url: string, data: any) {
        return axios.post(this.buildUrl(url), data);
    }
}