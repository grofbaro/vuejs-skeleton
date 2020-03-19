// import ApiService from '@/core/services/ApiService.js';

export default {
    login(credential) {
        console.log(credential);
        // return ApiService.post('auth/login', credential).then(data => data.data);
        return new Promise(resolve => setTimeout(() => resolve({data: 'token'}), 3000));
    },
    logout() {
        // return ApiService.post('auth/logout');
        return new Promise(resolve => setTimeout(() => resolve(true), 2000));
    }
}