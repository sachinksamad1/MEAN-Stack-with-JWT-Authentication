export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
  }
  
  export interface AuthResponse {
    success: boolean;
    token: string;
  }
  
  export interface WelcomeResponse {
    success: boolean;
    data: {
      message: string;
      user: User;
    };
  }