"use client";
import {
  Navbar,
  NavbarMenu,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuItem,
  NavbarMenuToggle,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Switch from "./components/Theme/Switch";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
export default function WebNav() {
  const pathname = usePathname();
  const mainlinks = [
    {
      label: "Resume",
      href: "/web/resume",
    },
    {
      label: "Projects",
      href: "/web/projects",
    },
   
    {
      label: "Contact",
      href: "/web/contactus",
    },
  ];
  const navlinks = [
    {
      label: "UI/UX Designer",
      href: "/uiux",
    },
   
    {
      label: "Web Developer",
      href: "/telecommunication",
    },
    
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto flex w-full justify-center items-center sticky top-0 lg:top-6 z-50">
      <Navbar
        maxWidth="full"
        className=" px-5 lg:px-3 bg-white/80   md:border border-slate-200 dark:border-slate-600 md:rounded-xl  dark:bg-slate-900/80"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarBrand>
            <Link href="/">
              <Image
                className=" w-full h-5 block dark:hidden cursor-pointer"
                loading="lazy"
                object-fit="cover"
                height={1000}
                width={1000}
                src="/logo.svg"
                alt="image"
              />
              <Image
                className=" w-full h-5 hidden dark:block cursor-pointer"
                loading="lazy"
                object-fit="cover"
                height={1000}
                width={1000}
                src="/darklogo.svg"
                alt="image"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-2" justify="end">
          <NavbarItem className="space-x-6">
            <Dropdown className="flex flex-col">
              <DropdownTrigger>
                <Button variant="none">
                  Portfolio
                  <MdOutlineKeyboardArrowDown />
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem>
                  {navlinks.map((link, i) => {
                    return (
                      <Link
                        key={i}
                        className={
                          pathname === `${link.href}`
                            ? " bg-primary text-white flex flex-col gap-3  rounded-lg px-3 py-2.5"
                            : "text-sm hover:bg-primary hover:text-white rounded-lg font-medium flex flex-col gap-3 px-2 py-2 my-2 "
                        }
                        color="foreground"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem className="space-x-6">
            {mainlinks.map((link, i) => {
              return (
                <Link
                  key={i}
                  className={
                    pathname === `${link.href}`
                      ? " bg-primary text-white  rounded-full px-3 py-2.5"
                      : "text-sm hover:bg-primary px-2 py-2 hover:text-white rounded-full font-medium "
                  }
                  color="foreground"
                  href={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </NavbarItem>
          <NavbarItem className="space-x-6"></NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <div className="hidden md:flex justify-center items-center">
            <Switch />
          </div>

          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem>
            <NavbarItem className="space-y-8 mt-5 flex flex-col items-center">
              <Dropdown className="flex flex-col">
                <DropdownTrigger>
                  <Button variant="none">
                  Portfolio
                    <MdOutlineKeyboardArrowDown />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu variant="faded" aria-label="Static Actions">
                  <DropdownItem>
                    {navlinks.map((link, i) => {
                      return (
                        <Link
                          key={i}
                          className={
                            pathname === `${link.href}`
                              ? " bg-primary text-white flex flex-col gap-3 px-2 py-2 my-2 "
                              : "text-sm hover:bg-primary hover:text-white rounded-lg font-medium flex flex-col gap-3 px-2 py-2 my-2 "
                          }
                          color="foreground"
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
            <NavbarItem className=" flex flex-col justify-center items-center">
              {mainlinks.map((link, i) => {
                return (
                  <Link
                    key={i}
                    className={
                      pathname === `${link.href}`
                        ? " bg-primary text-white  rounded-lg px-3 py-2.5"
                        : "text-sm hover:bg-primary  px-2 py-2 my-2  hover:text-white rounded-lg font-medium "
                    }
                    color="foreground"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </NavbarItem>
            <div className="flex justify-center items-center mt-5 md:hidden">
              <Switch />
            </div>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
