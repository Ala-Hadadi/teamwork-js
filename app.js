async function fetchScores() {
  try {
    const response = await fetch("https://mockapi.io/api/v1/scores");
    const data = await response.json();

    data.sort((a, b) => b.score - a.score);
    const topScores = data.slice(0, 5);
    const lowestScores = data.slice(-10);

    function populateTable(selector, scores) {
      const tableBody = document.getElementById(selector);
      tableBody.innerHTML = "";

      scores.forEach((player, index) => {
        const row = document.createElement("tr");

        const rankCell = document.createElement("td");
        rankCell.textContent = index + 1;

        const nameCell = document.createElement("td");
        nameCell.textContent = player.name;

        const scoreCell = document.createElement("td");
        scoreCell.textContent = player.score;

        row.appendChild(rankCell);
        row.appendChild(nameCell);
        row.appendChild(scoreCell);

        tableBody.appendChild(row);
      });
    }

    populateTable("top-scores", topScores);
    populateTable("lowest-scores", lowestScores);
  } catch (error) {
    console.error("Error fetching scores:", error);
  }
}
fetchScores();
