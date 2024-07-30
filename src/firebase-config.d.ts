declare module "firebase-config" {
  export const messaging: any; // Adjust type as necessary
  export const getToken: (messaging: any, options: any) => Promise<string>;
  export const onMessage: (
    messaging: any,
    callback: (payload: any) => void
  ) => void;
}
