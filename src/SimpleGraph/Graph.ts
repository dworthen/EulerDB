export type JSONGraph = {
  vertices: string[];
  edges: Array<[string, string[]]>;
};

export class Graph {
  public vertices: Set<string> = new Set();
  public edges: Set<string> = new Set();
  public adjList: Map<string, string[]> = new Map();
  public adjMatrix: Map<string, Map<string, boolean>> = new Map();

  public addVertex = (vertex: string) => {
    if (this.vertices.has(vertex)) return false;
    this.vertices.add(vertex);
    this.adjList.set(vertex, []);
    this.adjMatrix.set(vertex, new Map());
    return true;
  };

  private getEdge = (vertexA: string, vertexB: string) => {
    return `${vertexA}->${vertexB}`;
  };

  public addEdge = (vertexA: string, vertexB: string) => {
    if (!this.vertices.has(vertexA)) return false;
    if (!this.vertices.has(vertexB)) return false;
    let edge = this.getEdge(vertexA, vertexB);
    if (this.edges.has(edge)) return false;
    this.edges.add(edge);
    this.adjList.get(vertexA)!.push(vertexB);
    this.adjMatrix.get(vertexA)!.set(vertexB, true);
    return true;
  };

  public deleteVertex = (vertex: string) => {
    if (!this.vertices.has(vertex)) return false;
    this.vertices.delete(vertex);
    this.adjList.delete(vertex);
    return true;
  };

  public deleteEdge = (vertexA: string, vertexB: string) => {
    let edge = this.getEdge(vertexA, vertexB);
    if (!this.edges.has(edge)) return false;
    this.edges.delete(edge);
  };

  public toJSON = () => {
    return {
      vertices: [...this.vertices],
      edges: [...this.adjList]
    };
  };

  public loadGraph = (graph: JSONGraph) => {
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
