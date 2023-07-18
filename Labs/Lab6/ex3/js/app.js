<script>
let pet = {
  name: "Fido",
  energy: 50,
  happiness: 50,
  age: 1
};

function setup() {
  updateStats();
}

function feed() {
  pet.energy += 5;
  updateStats();
}

function play() {
  pet.happiness += 5;
  updateStats();
}

function updateStats() {
  document.getElementById("name").textContent = pet.name;
  document.getElementById("energy").textContent = pet.energy;
  document.getElementById("happiness").textContent = pet.happiness;
}
</script>
</body>
</html>

