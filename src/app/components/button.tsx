import { ButtonProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { ButtonHTMLAttributes } from 'react';

const Button = ({ link, className, ...props }: ButtonProps) => {
  return link ? (
    <Link className={cn(className)} {...(props as LinkProps)} />
  ) : (
    <button
      className={cn(className)}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
};

export default Button;
