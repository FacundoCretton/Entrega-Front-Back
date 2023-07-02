import { SiGitea } from "react-icons/si";
import { MdLiquor } from "react-icons/md";
import { GiCoolSpices } from "react-icons/gi";
import { FaBottleDroplet, FaJar } from "react-icons/fa6";
import { GiCakeSlice } from "react-icons/gi";
import { BsGridFill } from "react-icons/bs";


export const categorias = [
  {
    id: 0,
    name: "Todos",
    img: <BsGridFill />,
    category: "Todos",
  },
  {
    id: 1,
    name: "Té",
    img: <SiGitea />,
    category: "Te",
  },
  {
    id: 2,
    name: "Licores",
    img: <MdLiquor />,
    category: "Licores",
  },
  {
    id: 3,
    name: "Especias",
    img: <GiCoolSpices />,
    category: "Especias",
  },
  {
    id: 4,
    name: "Aceites",
    img: <FaBottleDroplet />,
    category: "Aceites",
  },
  {
    id: 5,
    name: "Mermeladas",
    img: <FaJar />,
    category: "Mermeladas",
  },
  {
    id: 6,
    name: "Reposteria",
    img: <GiCakeSlice />,
    category: "Reposteria",
    
  },
];

