export default class SaveData {
    static readonly KEY_USER_ID = 'userId';

    public static load(key: string) {
        return localStorage.getItem(key)
    }

    public static save(key: string, value: string | undefined) {
        if (value) return localStorage.setItem(key, value);
    }
}