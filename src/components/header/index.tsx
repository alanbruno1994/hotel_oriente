"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { BiMenu } from "react-icons/bi";

export default function Header() {
  return (
    <header className="h-20 bg-neutral-700 dark:bg-zinc-900 flex justify-center items-center">
      <div className="flex max-w-screen-md w-full h-20">
        <div className="flex w-1/2"></div>
        <div className="flex w-1/2">
          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/bedrooms" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Bedrooms
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/login" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Login
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="max-md:flex md:hidden max-md:justify-end w-full">
            <Sheet>
              <SheetTrigger className="mx-5">
                <BiMenu color={"white"} size={30} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
