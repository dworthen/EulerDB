export declare type JSONGraph = {
    vertices: string[];
    edges: Array<[string, string[]]>;
};
export declare class Graph {
    vertices: Set<string>;
    edges: Set<string>;
    adjList: Map<string, string[]>;
    adjMatrix: Map<string, Map<string, boolean>>;
    addVertex: (vertex: string) => boolean;
    private getEdge;
    addEdge: (vertexA: string, vertexB: string) => boolean;
    deleteVertex: (vertex: string) => boolean;
    deleteEdge: (vertexA: string, vertexB: string) => false | undefined;
    toJSON: () => {
        vertices: string[];
        edges: [string, string[]][];
    };
    loadGraph: (graph: JSONGraph) => void;
}
