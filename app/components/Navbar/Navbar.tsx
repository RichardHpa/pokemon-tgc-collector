import { Link, Form } from "@remix-run/react";
import { Button } from "~/components/Button";

import { useOptionalUser } from "~/utils";

export const Navbar = () => {
  const user = useOptionalUser();

  return (
    <nav className="border-gray-200 px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between border-b py-2">
        <div className="flex items-center">
          <Link
            className="mr-8 flex p-0 text-2xl tracking-tighter text-gray-700 no-underline dark:text-white"
            to="/"
          >
            <span className="inline-block font-medium">
              Pokemon Card Checker
            </span>
          </Link>
          <NavLink to="/sets">Sets</NavLink>
        </div>
        <div className="flex items-center">
          {user ? (
            <>
              <p>{user.email}</p>
              <Form action="/logout" method="post">
                <Button variant="ghost" type="submit">
                  Logout
                </Button>
              </Form>
            </>
          ) : (
            <>
              <NavLink to="/join">Sign up</NavLink>

              <NavLink to="/login">Login</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={to}
      className="'text-gray-700 hover:underline' rounded-md px-3 py-2 text-sm font-medium hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100"
    >
      {children}
    </Link>
  );
};
