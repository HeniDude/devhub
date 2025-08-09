export type ToastType = "success" | "info" | "warning" | "error";

export interface ToastOptions{
    type?: ToastType;
    duration?: number;
}

export interface Toast{
    id: number;
    content: string | object;
    type: ToastType;
}