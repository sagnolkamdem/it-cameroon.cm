export interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    href?: string;
    children: React.ReactNode;
    className?: string;
    click?: any;
}