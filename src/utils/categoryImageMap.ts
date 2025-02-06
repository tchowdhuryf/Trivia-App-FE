// Asset imports
import geography from "../assets/geography.jpg";
import history from "../assets/history.jpg";
import mythology from "../assets/mythology.jpg";
import science from "../assets/science.jpg";
import sports from "../assets/sports.jpg";
import technology from "../assets/technology.jpg";

interface CategoryImage {
  title: string;
  path: string;
}

/**
 * `categoryImageMap` contains the mapping of trivia categories to their respective image assets.
 *
 * @returns {CategoryImage[]} An array of category objects with titles and image paths.
 */
const categoryImageMap: CategoryImage[] = [
  { title: "Sports", path: sports },
  { title: "History", path: history },
  { title: "Geography", path: geography },
  { title: "Science", path: science },
  { title: "Technology", path: technology },
  { title: "Mythology", path: mythology },
];

export default categoryImageMap;
