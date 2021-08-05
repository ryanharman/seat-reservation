import React, { MouseEventHandler } from "react";
import { BuildingSVG, CalendarSVG, DashboardSVG, FolderSVG, NotepadSVG, SyncArrowsSVG, UserSVG } from "../common/icons";

const NavBar = () => {
  return (
    <header className="w-52 min-h-screen py-4 px-6 flex flex-col bg-gray-50">
      <div className="flex gap-2 items-center mb-6">
        <NotepadSVG height={20} width={20} colour="text-blue-500" />
        <div className="text-xl text-gray-900">Reserve</div>
      </div>
      <ul className="flex flex-col gap-2 text-xs relative">
        {/* At a later date this will be mapped over based on user permissions */}
        <ListItem icon={BuildingSVG} text={"Home"} current={true} onClick={() => console.log("pressed")} />
        <ListItem icon={CalendarSVG} text={"Reservations"} current={false} onClick={() => console.log("pressed")} />
        <ListItem icon={SyncArrowsSVG} text={"Settings"} current={false} onClick={() => console.log("pressed")} />
        <h5 className="text-gray-400 text-xs mt-4">Management</h5>
        <ListItem icon={BuildingSVG} text={"Your Offices"} current={false} onClick={() => console.log("pressed")} />
        <ListItem icon={DashboardSVG} text={"Your Rooms"} current={false} onClick={() => console.log("pressed")} />
        <ListItem icon={UserSVG} text={"Your Team"} current={false} onClick={() => console.log("pressed")} />
        <ListItem icon={FolderSVG} text={"Reports"} current={false} onClick={() => console.log("pressed")} />
        <h5 className="text-gray-400 text-xs mt-4">Quick Links</h5>
        <ListItem
          icon={BuildingSVG}
          text={"Create new office"}
          current={false}
          onClick={() => console.log("pressed")}
        />
        <ListItem icon={DashboardSVG} text={"Create new room"} current={false} onClick={() => console.log("pressed")} />
        <ListItem icon={UserSVG} text={"Create team member"} current={false} onClick={() => console.log("pressed")} />
      </ul>
    </header>
  );
};

interface IListItemProps {
  icon: Function;
  text: string;
  current: boolean;
  onClick: MouseEventHandler<HTMLAnchorElement>;
}

const ListItem = ({ icon, text, current, onClick }: IListItemProps) => {
  return (
    <li
      className={`${
        current ? "text-blue-500 bg-blue-50 hover:bg-blue-100" : "hover:bg-gray-100"
      } p-2 rounded-md cursor-pointer transition-all`}
    >
      <a onClick={onClick} className="flex items-center gap-2">
        {icon({ height: 12, width: 12 })}
        {text}
      </a>
    </li>
  );
};

export default NavBar;
