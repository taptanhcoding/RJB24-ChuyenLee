import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import SocialBlockItem from "../component/SocialBlockItem/SocialBlockItem";
const socials = [
  {
    text: "Facebook",
    color: "#609bec",
    iconName: FaFacebookF,
    total: 100,
    unit: "500,000 Likes",
  },
  {
    text: "Twitter",
    color: "#31c8dd",
    iconName: BsTwitter,
    total: 100,
    unit: "40,000 Tweets",
  },
  {
    text: "Google +",
    color: "#f78153",
    iconName: AiOutlineGooglePlus,
    total: 100,
    unit: "460,000 Plus",
  },
  {
    text: "Pinterest",
    color: "#f75354",
    iconName: GrPinterest,
    total: 100,
    unit: "43,000 Pins",
  },
];
function SocialBlock() {
  return <div className={"wrapper"}>
    {socials.map((social,i) => <SocialBlockItem key={i} Icon={social.iconName} unit={social.unit} color={social.color}>{social.text}</SocialBlockItem>)}
  </div>;
}

export default SocialBlock;
