let impactChart;

export function initImpactChart(canvas) {
  impactChart?.destroy();
  impactChart = undefined;
  if (!canvas) return;

  if (!globalThis.Chart) {
    document.querySelector("#chartFallback")?.removeAttribute("hidden");
    canvas.setAttribute("hidden", "");
    return;
  }

  impactChart = new globalThis.Chart(canvas, {
    type: "bar",
    data: {
      labels: ["2023", "2024", "2025", "2026"],
      datasets: [{
        label: "Pessoas atendidas",
        data: [620, 790, 960, 1200],
        backgroundColor: ["#9bd6c1", "#6fc2a4", "#36997c", "#1a5c59"],
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (context) => `${context.parsed.y} pessoas atendidas` } }
      },
      scales: {
        y: { beginAtZero: true, ticks: { precision: 0 }, title: { display: true, text: "Pessoas atendidas" } },
        x: { grid: { display: false }, title: { display: true, text: "Ano" } }
      }
    }
  });
}
