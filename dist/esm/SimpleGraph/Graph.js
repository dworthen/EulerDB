export class Graph {
    constructor() {
        this.vertices = new Set();
        this.edges = new Set();
        this.adjList = new Map();
        this.adjMatrix = new Map();
        this.addVertex = (vertex) => {
            if (this.vertices.has(vertex))
                return false;
            this.vertices.add(vertex);
            this.adjList.set(vertex, []);
            this.adjMatrix.set(vertex, new Map());
            return true;
        };
        this.getEdge = (vertexA, vertexB) => {
            return `${vertexA}->${vertexB}`;
        };
        this.addEdge = (vertexA, vertexB) => {
            if (!this.vertices.has(vertexA))
                return false;
            if (!this.vertices.has(vertexB))
                return false;
            let edge = this.getEdge(vertexA, vertexB);
            if (this.edges.has(edge))
                return false;
            this.edges.add(edge);
            this.adjList.get(vertexA).push(vertexB);
            this.adjMatrix.get(vertexA).set(vertexB, true);
            return true;
        };
        this.deleteVertex = (vertex) => {
            if (!this.vertices.has(vertex))
                return false;
            this.vertices.delete(vertex);
            this.adjList.delete(vertex);
            return true;
        };
        this.deleteEdge = (vertexA, vertexB) => {
            let edge = this.getEdge(vertexA, vertexB);
            if (!this.edges.has(edge))
                return false;
            this.edges.delete(edge);
        };
        this.toJSON = () => {
            return {
                vertices: [...this.vertices],
                edges: [...this.adjList]
            };
        };
        this.loadGraph = (graph) => {
            for (let vertex of graph.vertices) {
                this.addVertex(vertex);
            }
            for (let [vertexA, edges] of graph.edges) {
                for (let vertexB of edges) {
                    this.addEdge(vertexA, vertexB);
                }
            }
        };
    }
}
//# sourceMappingURL=Graph.js.map