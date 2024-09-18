import {TestResponse} from "../views/Home.vue";

export function useDataApi(): {
    getUsers(): Promise<TestResponse>
} {
    async function getUsers(): Promise<TestResponse> {
        return (await fetch('http://localhost:6905/tasks',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "GET",
            })).json();
    }

    return {getUsers}
}