import { memo, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./AppLink.module.scss";

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: "primary" | "secondary";
  children?: ReactNode;
  hovered?: boolean;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        hovered,
        theme = "primary",
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, { [cls.hovered]: hovered }, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
