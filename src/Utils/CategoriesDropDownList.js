import Discounts from "../icons/GroupDiscounts.svg";
import Bio from "../icons/GroupBio.svg";
import Products from "../icons/GroupNewProducts.svg";
import GiftCards from "../icons/GroupGiftcards.svg";
import FruitsAndVegetables from "../icons/Fruits and vegetables.svg";
import MeatsFishAndPoultry from "../icons/Meats, fish & poultry.svg";
import Sausages from "../icons/Sausages.svg";
import Fish from "../icons/Fish.svg";
import BreadAndBakedProducts from "../icons/Bread and baked products.svg";
import FrozenProducts from "../icons/Frozen Products.svg";
import DairyProducts from "../icons/Dairy products.svg";
import FruitsIcon2 from "../icons/Fruits.svg";
import Vegetables from "../icons/Vegetables.svg";
import Vegan from "../icons/Vegan.svg";
import Beverages from "../icons/Beverages.svg";
import TeaAndCoffee from "../icons/Tea and Coffee.svg";
import SweetsAndChoclates from "../icons/Sweets & Choclates.svg";
import Staples from "../icons/Staples.svg";
import CannedProducts from "../icons/Canned products.svg";
import SpicesAndCondiments from "../icons/Spices & condiments.svg";
import NoodlesAndPasta from "../icons/Noodles & pasta.svg";
import SaltyAndChips from "../icons/Salty & Chips.svg";
import BabyAndKids from "../icons/Baby & kids.svg";
import CookingOils from "../icons/Cooking Oils.svg";
import RamadhanSpecial from "../icons/Ramadhan special.svg";
import Cosmetic from "../icons/Cosmetic.svg";
import HouseholdHygiene from "../icons/Household Hygiene.svg";
import Books from "../icons/Books.svg";

function CategoriesDropDownList(props) {
  var windowWitdth = window.innerWidth;
  window.addEventListener("resize", () => (windowWitdth = window.innerWidth));

  const AllCategoriesTabs =
    windowWitdth <= 1200
      ? [
          {
            text: "Discounts & Offers",
            icon: Discounts,
            colorChangeOnHover: true,
          },
          { text: "New Products", icon: Products, colorChangeOnHover: true },
          { text: "Bio Products", icon: Bio, colorChangeOnHover: true },
          {
            text: "Fruits and vegetables",
            icon: FruitsAndVegetables,
            colorChangeOnHover: true,
          },
          {
            text: "Meats, fish & poultry",
            icon: MeatsFishAndPoultry,
            colorChangeOnHover: true,
          },
          { text: "Sausages", icon: Sausages, colorChangeOnHover: true },
          { text: "Fish", icon: Fish, colorChangeOnHover: true },
          {
            text: "Bread and baked products",
            icon: BreadAndBakedProducts,
            colorChangeOnHover: true,
          },
          {
            text: "Frozen Products",
            icon: FrozenProducts,
            colorChangeOnHover: false,
          },
          {
            text: "Dairy Products",
            icon: DairyProducts,
            colorChangeOnHover: true,
          },
          { text: "Friuts", icon: FruitsIcon2, colorChangeOnHover: true },
          { text: "Vegetables", icon: Vegetables, colorChangeOnHover: true },
          { text: "Vegan", icon: Vegan, colorChangeOnHover: true },
          { text: "Beverages", icon: Beverages, colorChangeOnHover: true },
          {
            text: "Tea and coffee",
            icon: TeaAndCoffee,
            colorChangeOnHover: true,
          },
          {
            text: "Sweets & Choclates",
            icon: SweetsAndChoclates,
            colorChangeOnHover: true,
          },
          { text: "Staples", icon: Staples, colorChangeOnHover: true },
          {
            text: "Canned Products",
            icon: CannedProducts,
            colorChangeOnHover: true,
          },
          {
            text: "Spices & condiments",
            icon: SpicesAndCondiments,
            colorChangeOnHover: true,
          },
          {
            text: "Noodles & pasta",
            icon: NoodlesAndPasta,
            colorChangeOnHover: true,
          },
          {
            text: "Salty & Chips",
            icon: SaltyAndChips,
            colorChangeOnHover: true,
          },
          { text: "Baby & kids", icon: BabyAndKids, colorChangeOnHover: true },
          { text: "Cooking Oils", icon: CookingOils, colorChangeOnHover: true },
          {
            text: "Ramadhan Special",
            icon: RamadhanSpecial,
            colorChangeOnHover: true,
          },
          { text: "Cosmetic", icon: Cosmetic, colorChangeOnHover: false },
          {
            text: "Household Hygiene",
            icon: HouseholdHygiene,
            colorChangeOnHover: true,
          },
          { text: "Gift Cards", icon: GiftCards, colorChangeOnHover: true },
          { text: "Books", icon: Books, colorChangeOnHover: true },
        ]
      : [
          {
            text: "Fruits and vegetables",
            icon: FruitsAndVegetables,
            colorChangeOnHover: true,
          },
          {
            text: "Meats, fish & poultry",
            icon: MeatsFishAndPoultry,
            colorChangeOnHover: true,
          },
          { text: "Sausages", icon: Sausages, colorChangeOnHover: true },
          { text: "Fish", icon: Fish, colorChangeOnHover: true },
          {
            text: "Bread and baked products",
            icon: BreadAndBakedProducts,
            colorChangeOnHover: true,
          },
          {
            text: "Frozen Products",
            icon: FrozenProducts,
            colorChangeOnHover: false,
          },
          {
            text: "Dairy Products",
            icon: DairyProducts,
            colorChangeOnHover: true,
          },
          { text: "Friuts", icon: FruitsIcon2, colorChangeOnHover: true },
          { text: "Vegetables", icon: Vegetables, colorChangeOnHover: true },
          { text: "Vegan", icon: Vegan, colorChangeOnHover: true },
          { text: "Beverages", icon: Beverages, colorChangeOnHover: true },
          {
            text: "Tea and coffee",
            icon: TeaAndCoffee,
            colorChangeOnHover: true,
          },
          {
            text: "Sweets & Choclates",
            icon: SweetsAndChoclates,
            colorChangeOnHover: true,
          },
          { text: "Staples", icon: Staples, colorChangeOnHover: true },
          {
            text: "Canned Products",
            icon: CannedProducts,
            colorChangeOnHover: true,
          },
          {
            text: "Spices & condiments",
            icon: SpicesAndCondiments,
            colorChangeOnHover: true,
          },
          {
            text: "Noodles & pasta",
            icon: NoodlesAndPasta,
            colorChangeOnHover: true,
          },
          {
            text: "Salty & Chips",
            icon: SaltyAndChips,
            colorChangeOnHover: true,
          },
          { text: "Baby & kids", icon: BabyAndKids, colorChangeOnHover: true },
          { text: "Cooking Oils", icon: CookingOils, colorChangeOnHover: true },
          {
            text: "Ramadhan Special",
            icon: RamadhanSpecial,
            colorChangeOnHover: true,
          },
          { text: "Cosmetic", icon: Cosmetic, colorChangeOnHover: false },
          {
            text: "Household Hygiene",
            icon: HouseholdHygiene,
            colorChangeOnHover: true,
          },
          { text: "Books", icon: Books, colorChangeOnHover: true },
        ];
  return AllCategoriesTabs;
}

export default CategoriesDropDownList;
