import {
  AiOutlineAndroid,
  AiOutlineApple,
  AiOutlineDropbox,
} from "react-icons/ai";
import { SiBilibili } from "react-icons/si";
import {DiAndroid,DiApple} from 'react-icons/di'
import { IoBasketballOutline } from "react-icons/io5";
import ProfileItem from "../component/ProfileItem/ProfileItem";

const profiles = [
  {
    text: "html",
    type: "success",
    percentage: 60,
    icon: DiAndroid,
  },
  {
    text: "css",
    type: "danger",
    percentage: 48,
    icon:DiApple,
  },
  {
    text: "php",
    type: "info",
    percentage: 30,
    icon: AiOutlineDropbox,
  },
  {
    text: "java",
    type: "warning",
    percentage: 83,
    icon: IoBasketballOutline,
  },
  {
    text: ".net",
    type: "purple",
    percentage: 47,
    icon: SiBilibili,
  },
];
function Profile() {
  return (
    <div>
      {profiles.map((profile, i) => (
        <ProfileItem
          key={i}
          icon={profile.icon}
          type={profile.type}
          percentage={profile.percentage}
        >
          {profile.text}
        </ProfileItem>
      ))}
    </div>
  );
}

export default Profile;
