export class Queue {
    constructor(
        public name: String,
        public description: String,
        public startTime: Date,
        public closeTime: Date
    ) {}

    public get status() : string {
        return 'Open'
    }
}
