import list from "./data.json" assert { type: 'json' };

const dataElement = document.querySelector(".data");
const userScore = document.querySelector(".user-score");

const addScores = data => {
  const scoreDiv = document.createElement("div");
  scoreDiv.className = "score";
  scoreDiv.style.backgroundColor = data.bg;

  const categoryDiv = document.createElement("div");
  categoryDiv.className = "test-label";

  const img = document.createElement("img");
  img.src = data.icon;

  const label = document.createElement("span");
  label.style.color = data.color;
  label.textContent = data.category;

  categoryDiv.appendChild(img);
  categoryDiv.appendChild(label);

  const resultDiv = document.createElement("div");
  resultDiv.className = "result";

  const p = document.createElement("p");
  p.innerHTML = `<span>${data.score}</span> / 100`;

  resultDiv.appendChild(p);

  scoreDiv.appendChild(categoryDiv);
  scoreDiv.appendChild(resultDiv);

  return scoreDiv;
};

const calculateScore = () => {
  let total = 0;

  list.forEach(score => {
    total += score.score;

    dataElement.appendChild(addScores(score));

    const average = Math.floor(total / list.length);
    userScore.textContent = average;
  });
};

calculateScore();
