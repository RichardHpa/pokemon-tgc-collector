import { Link, Form } from "@remix-run/react";
import { Button } from "~/components/Button";

import { useOptionalUser } from "~/utils";

export const Navbar = () => {
  const user = useOptionalUser();
  console.log(user);
  return (
    <nav className="border-gray-200 px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between border-b py-2">
        <div className="flex items-center space-x-2">
          <Link
            className="flex p-0 text-2xl tracking-tighter text-gray-700 no-underline dark:text-white"
            to="/"
          >
            <span className="inline-block font-medium">
              Pokemon Card Checker
            </span>
          </Link>

          <Button as={Link} to="/sets" variant="text" color="neutral">
            Sets
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          {user ? (
            <>
              <p className="font-medium text-gray-700">{user.email}</p>
              <Form action="/logout" method="post">
                <Button variant="text" color="neutral" type="submit">
                  Logout
                </Button>
              </Form>
            </>
          ) : (
            <>
              <Button as={Link} to="/join" variant="text" color="neutral">
                Sign up
              </Button>
              <Button as={Link} to="/login" variant="text" color="neutral">
                Login
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
