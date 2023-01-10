interface noLoginData {
  displayUsername: boolean;
  surname?: string;
  name?: string;
  role?: string;
  email?: string;
  profileImagePath?: string;
}

interface LoginData {
  username: string;
  password: string;
}

interface UserData extends noLoginData, LoginData {}

interface CalendarEvent {
  id: bigint;
  name: string;
  description: string;
  date: string;
  authorId: bigint;
  yearMonth: string;
}
