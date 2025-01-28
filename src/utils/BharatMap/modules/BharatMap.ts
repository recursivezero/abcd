import * as d3 from "d3";
import { StateModal } from "./StateModal";

interface MapConfig {
  center: [number, number];
  scale: number;
  width: number;
  height: number;
  initialTransform: d3.ZoomTransform | null;
}

interface CapitalData {
  name: string;
  coordinates: [number, number];
}

interface StateData {
  capital: {
    coordinates: any;
    name: string;
  };
  area: string;
  languages: string;
  danceforms: string;
  literacy: string;
  description: string;
}

export class BharatMap {
  private config: MapConfig;
  private stateData: Record<string, StateData>;
  private projection: d3.GeoProjection;
  private path: d3.GeoPath;
  private zoom: d3.ZoomBehavior<SVGSVGElement, unknown>;
  private svg!: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;
  private mapGroup!: d3.Selection<SVGGElement, unknown, HTMLElement, any>;
  private initialTransform: d3.ZoomTransform | null;

  constructor(config: MapConfig) {
    this.config = config;
    this.stateData = {};
    this.projection = this.createProjection();
    this.path = d3.geoPath().projection(this.projection);
    this.zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 8])
      .on("zoom", (event) => this.handleZoom(event));
    this.initializeSVG();
    this.initialTransform = null;
    this.handleResize = this.handleResize.bind(this);
    window.addEventListener("resize", this.handleResize);

    // Cleanup method
    this.cleanup = this.cleanup.bind(this);
    window.addEventListener("beforeunload", this.cleanup);
  }

  private cleanup(): void {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("beforeunload", this.cleanup);
    // Clear any D3 selections
    if (this.svg) {
      this.svg.selectAll("*").remove();
    }
  }

  // Initialize SVG container and set up zoom behavior
  private initializeSVG(): void {
    this.svg = d3
      .select<SVGSVGElement, unknown>(".map-container")
      .append("svg")
      .attr("viewBox", `0 0 ${this.config.width} ${this.config.height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    this.mapGroup = this.svg.append("g");

    this.initialTransform = d3.zoomIdentity.translate(this.config.width / 2, this.config.height / 2).scale(1);

    this.svg.call(this.zoom);
  }

  // Create Mercator projection for Bharat map
  private createProjection(): d3.GeoProjection {
    return d3
      .geoMercator()
      .center(this.config.center)
      .scale(this.config.scale)
      .translate([this.config.width / 2, this.config.height / 2]);
  }

  // Load GeoJSON and state data from external files
  public async loadData(): Promise<void> {
    try {
      const [geoData, states] = await Promise.all([
        d3.json<GeoJSON.FeatureCollection>("data/bharat.geojson"),
        d3.json<Record<string, StateData>>("data/state_data.json")
      ]);

      if (!geoData || !states) throw new Error("Failed to load data");

      this.stateData = states;
      this.renderMap(geoData);
      this.renderCapitals();
    } catch (error) {
      console.error("Error loading data:", error);
      this.handleDataLoadError();
    }
  }

  private handleDataLoadError(): void {
    // Error UI feedback
    const container = document.querySelector(".map-container");
    if (container) {
      container.innerHTML = `
        <div class="error-message">
          Failed to load map data. Please try refreshing the page.
        </div>
      `;
    }
  }

  // Handle zoom and pan events
  private handleZoom(event: d3.D3ZoomEvent<SVGSVGElement, unknown>): void {
    this.mapGroup.attr("transform", event.transform.toString());
  }

  private renderMap(geoData: GeoJSON.FeatureCollection): void {
    if (!this.mapGroup) return;

    this.mapGroup
      .selectAll("path")
      .data(geoData.features)
      .enter()
      .append("path")
      .attr("d", this.path)
      .attr("class", "state")
      .on("click", (event: MouseEvent, d: GeoJSON.Feature) => {
        const properties = d.properties as { st_nm: string };
        this.handleStateClick(properties.st_nm);
      });
  }

  private renderCapitals(): void {
    const capitals = this.mapGroup.append("g").attr("class", "capitals");

    Object.entries(this.stateData).forEach(([stateName, data]) => {
      const coords = data.capital.coordinates;
      if (!coords) return;

      const projected = this.projection(coords);
      if (!projected) return;
      const [x, y] = projected;
      if (isNaN(x) || isNaN(y)) return;

      const g = capitals.append("g").attr("class", "capital-group").attr("data-state", stateName);

      g.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 3).attr("class", "capital-marker");

      g.append("text").attr("x", 0).attr("y", -10).attr("class", "capital-label").text(data.capital.name);

      g.attr("transform", `translate(${x},${y})`);
    });
  }

  private handleStateClick(stateName: string): void {
    this.highlightCapital(stateName);
    this.showStateModal(stateName);
  }

  private highlightCapital(stateName: string): void {
    d3.selectAll(".capital-marker, .capital-label").classed("active", false);

    d3.selectAll(`[data-state="${stateName}"]`).classed("active", true);
  }

  private showStateModal(stateName: string): void {
    const modal = new StateModal(this.stateData[stateName], stateName);
    modal.show();
  }

  public resetZoom(): void {
    this.svg.transition().duration(750).call(this.zoom.transform, d3.zoomIdentity.scale(1));
  }

  private handleResize(): void {
    this.config.width = window.innerWidth - 60;
    this.config.height = window.innerHeight - 180;

    this.svg.attr("viewBox", `0 0 ${this.config.width} ${this.config.height}`);

    this.projection
      .center(this.config.center)
      .scale(this.config.scale)
      .translate([this.config.width / 2, this.config.height / 2]);

    this.mapGroup.selectAll("path").attr("d", (d) => this.path(d as GeoJSON.Feature | GeoJSON.Geometry));

    // Update capital positions
    this.mapGroup.selectAll(".capital-group").remove();
    this.renderCapitals();
  }
}
