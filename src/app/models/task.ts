export class Task {
    id: number;
    name: string;
    priority: string;

    constructor(id: number, name: string, priority: string) {
        this.id = id;
        this.name = name;
        this.priority = priority;
    }
}