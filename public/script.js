const getCities = async () => {
  try {
    const response = await fetch("api/cities/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const showCities = async () => {
  let cities = await getCities();
  cities.forEach((city) => {
    const section = document.createElement("section");
    const a = document.createElement("a");
    section.append(a);
    section.classList.add("column");
    a.href = "#";
    a.innerHTML = city.name;
    document.getElementById("cities").append(section);
    a.onclick = (e) => {
      e.preventDefault();
      displayDetails(city);
    };
  });
};

displayDetails = (city) => {
  document.getElementById("details").innerHTML = "";
  const section = document.createElement("section");
  section.classList.add("column");

  const h2 = document.createElement("h2");
  h2.innerHTML = city.name;
  section.append(h2);

  const p = document.createElement("p");
  p.innerHTML = `Country: ${city.country}`;
  section.append(p);

  const p2 = document.createElement("p");
  p2.innerHTML = `Population: ${city.population}`;
  section.append(p2);

  const language = document.createElement("p");
  language.innerHTML = `Prominent Language: ${city.prominentLanguage}`;
  section.append(language);

  const landmarks = document.createElement("p");
  landmarks.innerHTML = "Landmarks: ";

  city.landmarks.forEach((landmark) => {
    if (landmark == city.landmarks[city.landmarks.length - 1]) {
      landmarks.innerHTML += `${landmark}`;
    } else {
      landmarks.innerHTML += `${landmark}, `;
    }
  });

  section.append(landmarks);

  document.getElementById("details").append(section);
};

const showForm = () => {
  document.getElementById("add-city-form").classList.toggle("hide");
};

const addCity = () => {};

const addLandmarkInput = (e) => {
  e.preventDefault();
  const inputs = document.getElementById("landmark-inputs");
  const input = document.createElement("input");
  input.type = "text";
  inputs.appendChild(input);
};

window.onload = () => {
  showCities();
  document.getElementById("addCity").onclick = showForm;
  document.getElementById("add-city-form").onsubmit = addCity;
  document.getElementById("add-landmark-button").onclick = addLandmarkInput;
};
