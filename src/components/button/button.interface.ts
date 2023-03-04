export interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    intent?: "primary" | "secondary" | "warning" | "danger" | undefined;
    href?: string;
    children: React.ReactNode;
    class?: string;
    click?: any;
}