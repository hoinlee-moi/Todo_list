export const setLocalStorage = (key: string, value: string) => {
    // 과제 상세 내용으로 expire 토큰관리 없으니 제외
    localStorage.setItem(key,value)
};

export const getLocalStorage = (key:string):string | null => {
    return localStorage.getItem(key)
}