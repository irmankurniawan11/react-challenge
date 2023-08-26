import PHPIcon from "../icon/PHPIcon";
import ReactIcon from "../icon/ReactIcon";
import TailwindIcon from "../icon/TailwindIcon";
import BootstrapIcon from "../icon/BootstrapIcon";
import NextIcon from "../icon/NextIcon";

const techStackIcons = {
    react: {alias:"React", component:<ReactIcon/>},
    tailwind: {alias:"Tailwind CSS", component:<TailwindIcon/>},
    php: {alias:"PHP", component:<PHPIcon/>},
    bootstrap: {alias:"Bootstrap", component:<BootstrapIcon/>},
    next: {alias:"NextJS", component:<NextIcon/>}
}

export default techStackIcons;