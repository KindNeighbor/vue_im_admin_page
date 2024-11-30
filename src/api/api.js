import axios from 'axios'

// axios 인스턴스 생성
const api = axios.create({
    baseURL: 'http://localhost:3000'
})

// API 호출 메소드들
export const apiService = {
    // 부서 정보 조회
    getDepartments() {
        return api.get('/departments')
    },

    // 사용자 정보 조회
    getUsers() {
        return api.get('/users')
    },

    // 그룹 정보 조회
    getGroups() {
        return api.get('/groups')
    },

    // 역할 정보 조회
    getRoles() {
        return api.get('/roles')
    }
}