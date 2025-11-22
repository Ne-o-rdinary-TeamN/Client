import { cookies } from "next/headers";

export class AuthService {
  private static readonly ACCESS_TOKEN_KEY = "access_token";
  private static readonly REFRESH_TOKEN_KEY = "refresh_token";

  private static getClientCookie(name: string): string | null {
    if (typeof window === "undefined") return null;

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(";").shift() || null;
    }
    return null;
  }

  private static setClientCookie(
    name: string,
    value: string,
    maxAge: number
  ): void {
    if (typeof window === "undefined") return;

    const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
    document.cookie = `${name}=${value}; path=/; max-age=${maxAge}; SameSite=Strict${secure}`;
  }

  private static deleteClientCookie(name: string): void {
    if (typeof window === "undefined") return;
    document.cookie = `${name}=; path=/; max-age=0`;
  }

  static async setTokens(accessToken: string, refreshToken: string) {
    if (typeof window !== "undefined") {
      this.setClientCookie(this.ACCESS_TOKEN_KEY, accessToken, 15 * 60);
      this.setClientCookie(
        this.REFRESH_TOKEN_KEY,
        refreshToken,
        7 * 24 * 60 * 60
      );
      return;
    }

    const cookieStore = await cookies();

    cookieStore.set(this.ACCESS_TOKEN_KEY, accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60,
    });

    cookieStore.set(this.REFRESH_TOKEN_KEY, refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60,
    });
  }

  static async getAccessToken(): Promise<string | null> {
    if (typeof window !== "undefined") {
      return this.getClientCookie(this.ACCESS_TOKEN_KEY);
    }

    const cookieStore = await cookies();
    return cookieStore.get(this.ACCESS_TOKEN_KEY)?.value || null;
  }

  static async getRefreshToken(): Promise<string | null> {
    if (typeof window !== "undefined") {
      return this.getClientCookie(this.REFRESH_TOKEN_KEY);
    }

    const cookieStore = await cookies();
    return cookieStore.get(this.REFRESH_TOKEN_KEY)?.value || null;
  }

  static async clearTokens() {
    if (typeof window !== "undefined") {
      this.deleteClientCookie(this.ACCESS_TOKEN_KEY);
      this.deleteClientCookie(this.REFRESH_TOKEN_KEY);
      return;
    }

    const cookieStore = await cookies();
    cookieStore.delete(this.ACCESS_TOKEN_KEY);
    cookieStore.delete(this.REFRESH_TOKEN_KEY);
  }

  static async isAuthenticated(): Promise<boolean> {
    const accessToken = await this.getAccessToken();
    return !!accessToken;
  }
}
