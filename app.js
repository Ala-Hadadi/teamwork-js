const arr = [];

async function fetchScores() {
  try {
    const response = await fetch(
      "https://67b741f92bddacfb270e55fb.mockapi.io/game"
    );
    const data = await response.json();
    console.log("Data received from API:", data);

    data.forEach((player) => {
      if (player.name && player.scores) {
        arr.push(player);
      }
    });

    console.log("Processed players array:", arr);

    if (arr.length === 0) {
      console.log("No players found in the data.");
      const tableBodyTop = document.getElementById("top");
      const tableBodyLow = document.getElementById("low");
      tableBodyTop.innerHTML = "<tr><td colspan='3'>No players found</td></tr>";
      tableBodyLow.innerHTML = "<tr><td colspan='3'>No players found</td></tr>";
      return;
    }

    arr.sort((a, b) => Number(b.scores) - Number(a.scores));

    const topScores = arr.slice(0, 5);
    const lowestScores = arr.slice(-10);

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
        scoreCell.textContent = player.scores;

        row.appendChild(rankCell);
        row.appendChild(nameCell);
        row.appendChild(scoreCell);

        tableBody.appendChild(row);
      });
    }

    populateTable("top", topScores);
    populateTable("low", lowestScores);
  } catch (error) {
    console.error("Error fetching scores:", error);
    const tableBodyTop = document.getElementById("top");
    const tableBodyLow = document.getElementById("low");
    tableBodyTop.innerHTML = "<tr><td colspan='3'>Error loading data</td></tr>";
    tableBodyLow.innerHTML = "<tr><td colspan='3'>Error loading data</td></tr>";
  }
}

fetchScores();
