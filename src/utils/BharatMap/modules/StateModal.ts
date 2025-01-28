interface StateData {
  capital: {
    name: string;
  };
  area: string;
  languages: string;
  danceforms: string;
  literacy: string;
  description: string;
}

export class StateModal {
  private stateData: StateData;
  private stateName: string;
  private modal: HTMLElement;

  constructor(stateData: StateData, stateName: string) {
    this.stateData = stateData || ({} as StateData);
    this.stateName = stateName;
    const modal = document.getElementById("stateModal");
    if (!modal) throw new Error("Modal element not found");
    this.modal = modal;
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    const closeBtn = this.modal.querySelector(".close") as HTMLElement;
    const copyBtn = this.modal.querySelector("#copyButton") as HTMLElement;

    if (closeBtn) closeBtn.onclick = () => this.hide();
    if (copyBtn) copyBtn.onclick = () => this.copyContent();

    window.onclick = (event: MouseEvent) => {
      if (event.target === this.modal) this.hide();
    };

    document.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "Escape" && this.modal.style.display === "block") {
        this.hide();
      }
    });
  }

  show(): void {
    this.updateModalContent();
    this.modal.style.display = "block";
  }

  private hide(): void {
    const modalContent = this.modal.querySelector(".modal-content") as HTMLElement;
    modalContent.classList.add("closing");

    setTimeout(() => {
      this.modal.style.display = "none";
      modalContent.classList.remove("closing");
    }, 300);
  }

  private updateModalContent(): void {
    const elements: Record<string, string> = {
      stateName: this.stateName,
      stateCapital: this.stateData.capital?.name,
      stateArea: this.stateData.area,
      stateLanguages: this.stateData.languages,
      stateDance: this.stateData.danceforms,
      stateLiteracy: this.stateData.literacy,
      stateDescription: this.stateData.description
    };

    Object.entries(elements).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = value || "N/A";
    });
  }

  private async copyContent(): Promise<void> {
    try {
      const content = (this.modal.querySelector(".modal-body") as HTMLElement).innerText;
      await navigator.clipboard.writeText(content);
      this.showCopyFeedback();
    } catch (error) {
      console.error("Failed to copy content:", error);
    }
  }

  private showCopyFeedback(): void {
    const copyBtn = this.modal.querySelector("#copyButton") as HTMLElement;
    if (!copyBtn) return;

    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => {
      copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
    }, 2000);
  }
}
