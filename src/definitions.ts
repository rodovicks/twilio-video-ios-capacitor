export interface JoinRoomOptions {
  roomName: string;
  accessToken: string;
}

export interface TwilioVideoIosPlugin {
  joinRoom(options: JoinRoomOptions): Promise<void>;
  disconnect(): Promise<void>;
}
