"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";

type ClientButtonProps = React.ComponentProps<typeof Button> & {
  action?: string;
};

export default function ClientButton({ action, ...props }: ClientButtonProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Do client-side behavior based on a serializable `action` string
    if (action === "start-booking") {
      router.push("/book");
      return;
    }
    if (action === "book-general") {
      alert("Booking General Physician (demo)");
      return;
    }
    if (action === "book-dentist") {
      alert("Booking Dentist (demo)");
      return;
    }
    if (action === "book-pediatrician") {
      alert("Booking Pediatrician (demo)");
      return;
    }

    // Fallback: if parent passed an onClick from a client component, it will be in props and executed here
    // NOTE: server components cannot pass functions as props, so this is only for client->client usage
    const maybeOnClick = props.onClick as unknown as ((e: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
    if (typeof maybeOnClick === "function") {
      maybeOnClick(e);
    }
  };

  return <Button {...(props as any)} onClick={handleClick} />;
}
