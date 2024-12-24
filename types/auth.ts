export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
}
