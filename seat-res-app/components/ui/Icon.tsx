import { MouseEventHandler } from "react";
import {
  AddSVG,
  ArrowSVG,
  BinSVG,
  BuildingSVG,
  CalendarSVG,
  CameraSVG,
  CarSVG,
  CheckSVG,
  ChevronSVG,
  DashboardSVG,
  EditSVG,
  ExclamationSVG,
  ExpandSVG,
  EmailSendSVG,
  FlagSVG,
  FolderSVG,
  ListSVG,
  LogoutSVG,
  NotepadSVG,
  NotVisibleSVG,
  OpenSVG,
  PinSVG,
  SearchSVG,
  SyncArrowsSVG,
  UserSVG,
} from "../../components/icons";

const icons: Record<string, any> = {
  add: AddSVG,
  arrow: ArrowSVG,
  bin: BinSVG,
  building: BuildingSVG,
  calendar: CalendarSVG,
  camera: CameraSVG,
  car: CarSVG,
  check: CheckSVG,
  chevron: ChevronSVG,
  dashboard: DashboardSVG,
  edit: EditSVG,
  exclamation: ExclamationSVG,
  expand: ExpandSVG,
  emailSend: EmailSendSVG,
  flag: FlagSVG,
  folder: FolderSVG,
  list: ListSVG,
  logout: LogoutSVG,
  notepad: NotepadSVG,
  notVisible: NotVisibleSVG,
  open: OpenSVG,
  pin: PinSVG,
  search: SearchSVG,
  syncArrow: SyncArrowsSVG,
  user: UserSVG,
};

interface Icon {
  icon: string;
  width: string | number;
  height: string | number;
  className?: string;
  onClick?: () => void;
}

const Icon = ({ icon, className, width, height, onClick }: Icon) => {
  const Icon = icons[icon];

  return (
    <div className={className} onClick={() => onClick && onClick()}>
      <Icon height={height} width={width} />
    </div>
  );
};

export default Icon;
