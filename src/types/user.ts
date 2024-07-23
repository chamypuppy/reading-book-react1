export type User = {
    id: number;
    name: string;
    age: number;
    personalColor?: string;
    hobbies?: string[]; // 설정되지 않은 데이터도 있으므로
}