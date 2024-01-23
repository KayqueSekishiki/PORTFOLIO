async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/KayqueSekishiki/PORTFOLIO/main/data/profile.json";

  const fetching = await fetch(url);
  return await fetching.json();
}
