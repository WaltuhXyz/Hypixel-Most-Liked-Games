// Type declarations for the API

export class Game {
    gameId!: string;
    count!: number;
}

export class Snapshot {
    timestamp: number = 0;
    total: number = 0;
    games: Array<Game> = [];
}

export class SnapshotHistory {
    success: boolean = false;
    snapshot: Array<Snapshot> | null = null;
}
