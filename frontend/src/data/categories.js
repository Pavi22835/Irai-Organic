import {
  LuMilk,
  LuLeaf,
  LuLeafyGreen,
  LuUtensils,
  LuUtensilsCrossed,
  LuWheat,
} from "react-icons/lu";

const categories = [
  {
    id: 1,
    title: "Health Mix",
    icon: LuMilk,
    color: "from-green-100 to-green-50",
    description: "Healthy nutrition mixes for everyday wellness."
  },
  {
    id: 2,
    title: "Honey",
    icon: LuLeaf,
    color: "from-yellow-100 to-orange-50",
    description: "Natural honey blended with traditional ingredients."
  },
  {
    id: 3,
    title: "Herbal Powder",
    icon: LuLeafyGreen,
    color: "from-lime-100 to-green-50",
    description: "Pure herbal powders with no preservatives."
  },
  {
    id: 4,
    title: "Breakfast",
    icon: LuUtensils,
    color: "from-green-100 to-emerald-50",
    description: "Healthy breakfast options for every family."
  },
  {
    id: 5,
    title: "Pickles",
    icon: LuUtensilsCrossed,
    color: "from-red-100 to-orange-50",
    description: "Traditional homemade pickle varieties."
  },
  {
    id: 6,
    title: "Country Sugar",
    icon: LuWheat,
    color: "from-amber-100 to-yellow-50",
    description: "Natural sweeteners from traditional sources."
  },
];

export default categories;