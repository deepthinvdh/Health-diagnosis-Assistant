class HealthDiagnosisApp {
  constructor() {
    this.initializeElements()
    this.bindEvents()
  }

  initializeElements() {
    // Navigation elements
    this.symptomsTab = document.getElementById("symptoms-tab")
    this.resultsTab = document.getElementById("results-tab")

    // Section elements
    this.symptomsSection = document.getElementById("symptoms-section")
    this.resultsSection = document.getElementById("results-section")

    // Form elements
    this.symptomsForm = document.getElementById("symptoms-form")
    this.resetBtn = document.getElementById("reset-btn")
    this.predictBtn = document.getElementById("predict-btn")

    // Results elements
    this.loading = document.getElementById("loading")
    this.resultsContainer = document.getElementById("results-container")
  }

  bindEvents() {
    // Navigation events
    this.symptomsTab.addEventListener("click", () => this.showSection("symptoms"))
    this.resultsTab.addEventListener("click", () => this.showSection("results"))

    // Form events
    this.symptomsForm.addEventListener("submit", (e) => this.handleFormSubmit(e))
    this.resetBtn.addEventListener("click", () => this.resetForm())

    // Checkbox events for better UX
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => this.updatePredictButton())
    })
  }

  showSection(section) {
    if (section === "symptoms") {
      this.symptomsSection.classList.remove("hidden")
      this.resultsSection.classList.add("hidden")
      this.symptomsTab.classList.add("active")
      this.resultsTab.classList.remove("active")
    } else {
      this.symptomsSection.classList.add("hidden")
      this.resultsSection.classList.remove("hidden")
      this.symptomsTab.classList.remove("active")
      this.resultsTab.classList.add("active")
    }
  }

  updatePredictButton() {
    const selectedSymptoms = this.getSelectedSymptoms()
    this.predictBtn.disabled = selectedSymptoms.length === 0

    if (selectedSymptoms.length === 0) {
      this.predictBtn.textContent = "Select Symptoms First"
      this.predictBtn.style.opacity = "0.6"
    } else {
      this.predictBtn.textContent = `Predict Disease (${selectedSymptoms.length} symptoms)`
      this.predictBtn.style.opacity = "1"
    }
  }

  getSelectedSymptoms() {
    const checkboxes = document.querySelectorAll('input[name="symptoms"]:checked')
    return Array.from(checkboxes).map((cb) => cb.value)
  }

  resetForm() {
    const checkboxes = document.querySelectorAll('input[name="symptoms"]')
    checkboxes.forEach((cb) => (cb.checked = false))
    this.updatePredictButton()
    this.resultsContainer.innerHTML = ""
  }

  async handleFormSubmit(e) {
    e.preventDefault()

    const selectedSymptoms = this.getSelectedSymptoms()

    if (selectedSymptoms.length === 0) {
      alert("Please select at least one symptom.")
      return
    }

    // Show loading and switch to results tab
    this.showSection("results")
    this.showLoading(true)

    try {
      const response = await fetch("/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          symptoms: selectedSymptoms,
        }),
      })

      const data = await response.json()

      if (data.success) {
        this.displayResults(data.results, selectedSymptoms)
      } else {
        this.displayError(data.error || "An error occurred while processing your request.")
      }
    } catch (error) {
      console.error("Error:", error)
      this.displayError("Failed to connect to the server. Please try again.")
    } finally {
      this.showLoading(false)
    }
  }

  showLoading(show) {
    if (show) {
      this.loading.classList.remove("hidden")
      this.resultsContainer.innerHTML = ""
    } else {
      this.loading.classList.add("hidden")
    }
  }

  displayResults(results, selectedSymptoms) {
    if (results.length === 0) {
      this.resultsContainer.innerHTML = `
                <div class="result-card">
                    <h3>No Matches Found</h3>
                    <p>Based on your selected symptoms, we couldn't find any matching conditions in our database. 
                       Please consult with a healthcare professional for proper evaluation.</p>
                </div>
            `
      return
    }

    let html = `
            <div style="margin-bottom: 24px; padding: 16px; background: #f0f9ff; border-radius: 8px;">
                <h3 style="color: #0369a1; margin-bottom: 8px;">Analysis Summary</h3>
                <p style="color: #0c4a6e;">Based on ${selectedSymptoms.length} selected symptoms: 
                   <strong>${selectedSymptoms.join(", ").replace(/_/g, " ")}</strong></p>
            </div>
        `

    results.forEach((result, index) => {
      const probabilityClass = this.getProbabilityClass(result.probability)
      const probabilityLabel = this.getProbabilityLabel(result.probability)

      html += `
                <div class="result-card ${probabilityClass}">
                    <div class="result-header">
                        <div class="disease-name">${result.disease}</div>
                        <div class="probability ${probabilityClass.replace("-probability", "")}">${result.probability}% ${probabilityLabel}</div>
                    </div>
                    <div class="description">${result.description}</div>
                    <div style="font-size: 14px; color: #6b7280; margin-bottom: 12px;">
                        Matched ${result.matched_symptoms} out of ${result.total_symptoms} key symptoms
                    </div>
                    <div class="recommendations">
                        <h4>Recommended Actions:</h4>
                        <ul>
                            ${result.recommendations.map((rec) => `<li>${rec}</li>`).join("")}
                        </ul>
                    </div>
                </div>
            `
    })

    this.resultsContainer.innerHTML = html
  }

  getProbabilityClass(probability) {
    if (probability >= 70) return "high-probability"
    if (probability >= 40) return "medium-probability"
    return "low-probability"
  }

  getProbabilityLabel(probability) {
    if (probability >= 70) return "High Match"
    if (probability >= 40) return "Moderate Match"
    return "Low Match"
  }

  displayError(message) {
    this.resultsContainer.innerHTML = `
            <div class="result-card" style="border-color: #ef4444; background: #fef2f2;">
                <h3 style="color: #dc2626;">Error</h3>
                <p style="color: #7f1d1d;">${message}</p>
            </div>
        `
  }
}

// Initialize the app when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new HealthDiagnosisApp()
})
