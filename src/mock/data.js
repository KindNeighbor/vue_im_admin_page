// src/mock/data.js
export const departments = [
    {
        id: 1,
        name: "본사",
        children: [
            {
                id: 2,
                name: "개발부",
                children: [
                    { id: 3, name: "프론트엔드팀" },
                    { id: 4, name: "백엔드팀" }
                ]
            },
            {
                id: 5,
                name: "경영지원부",
                children: [
                    { id: 6, name: "인사팀" },
                    { id: 7, name: "총무팀" }
                ]
            }
        ]
    }
];

export const users = [
    { id: 1, name: "이OO", department: "프론트엔드팀", email: "hong@example.com", phone: "010-1234-5678" },
    { id: 2, name: "김OO", department: "백엔드팀", email: "kim@example.com", phone: "010-4321-8765" },
];

export const groups = [
    { id: 1, name: "관리자 그룹", description: "시스템 관리자", 생성일자: "2024-11-30"},
    { id: 2, name: "사용자 그룹", description: "일반 사용자", 생성일자: "2024-11-30" },
];

export const roles = [
    { id: 1, name: "테스트 관리자 역할", system : "TEST 그룹웨어", 생성일자: "2024-11-30"},
    { id: 2, name: "테스트 사용자 역할", system: "TEST ERP", 생성일자: "2024-11-30"}
];