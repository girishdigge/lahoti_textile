'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Logo from './logo';
import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import { Separator } from '@radix-ui/react-separator';

const services: { title: string; href: string; description: string }[] = [
  {
    title: 'Business Transformation',
    href: '/services/business-transformation',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Claim Management',
    href: '/services/claim-management',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Contract Administration',
    href: '/services/contract-administration',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Project Monitoring & Control',
    href: '/services/project-monitoring-and-control',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Quantity Survey',
    href: '/services/quantity-survey',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Techno Commercial Audit',
    href: '/services/techno-commercial-audit',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
  {
    title: 'Transaction Advisory',
    href: '/services/transaction-advisory',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

const sectors: { title: string; href: string; description: string }[] = [
  {
    title: 'Aviation',
    href: '/sectors/aviation',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Bridges Structures',
    href: '/sectors/bridges-structures',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Commercial',
    href: '/sectors/commercial',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Industrial',
    href: '/sectors/industrial',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Institutional',
    href: '/sectors/institutional',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Oil Gas',
    href: '/sectors/oil-gas',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
  {
    title: 'Ports',
    href: '/sectors/ports',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
  {
    title: 'Power Transmission',
    href: '/sectors/power-transmission',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Railways Metro',
    href: '/sectors/railways-metro',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Renewable Energy',
    href: '/sectors/renewable-energy',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Residential',
    href: '/sectors/residential',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Roads Highways',
    href: '/sectors/roads-highways',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Thermal Power Plant',
    href: '/sectors/thermal-power-plant',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
  {
    title: 'Water Infrastructure',
    href: '/sectors/water-infrastructure',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

const projects: { title: string; href: string; description: string }[] = [
  {
    title: 'Featured Projects',
    href: '/projects/featured-projects',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Latest Projects',
    href: '/projects/latest-projects',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'past-projects',
    href: '/projects/past-projects',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
];

export function NavigationBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className='hidden md:flex md:justify-center md:items-center md:space-x-3 md:z-2 mr-1'>
        {/* <NavigationMenuItem>
          <Link href='/' legacyBehavior passHref>
            <NavigationMenuLink>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
        {/* <Separator orientation='vertical' className='bg-pink-400 w-1 h-10' /> */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href={`/services`}> Services</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-4 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {services.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  href={service.href}
                >
                  {service.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href={`/sectors`}> Sectors</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-1 p-1 md:w-[500px] md:grid-cols-3 lg:w-[600px] '>
              {sectors.map((sector) => (
                <ListItem
                  key={sector.title}
                  title={sector.title}
                  href={sector.href}
                >
                  {sector.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href={`/projects`}>Projects</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] '>
              {projects.map((project) => (
                <ListItem
                  key={project.title}
                  title={project.title}
                  href={project.href}
                >
                  {project.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/bim' legacyBehavior passHref>
            <div className=' mb-0.5'>
              <NavigationMenuLink className='hover:bg-gray-100 text-sm font-medium px-4 py-2'>
                BIM
              </NavigationMenuLink>
            </div>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href={`/about`}>About</Link>
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-4'>
                <NavigationMenuLink asChild>
                  <a
                    className='flex h-full w-full pl-2 pr-2 select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                    href='/about'
                  >
                    <Logo />
                    <div className='mb-2 mt-4 text-lg font-medium '>
                      About Us
                    </div>
                    <p className='text-sm leading-tight text-muted-foreground'>
                      For major engineering and construction (E&C) projects,
                      Construction Site audit ( techno Commercial Audit) can be
                      an effective tool to do more with less and help eliminate
                      wasteful spending and cost overruns
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href='/about/vision' title='Vision'>
                Re-usable services built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href='/about/mission' title='Mission'>
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href='/about/people' title='Team / People'>
                Styles for headings, paragraphs, lists...etc
              </ListItem>
              <ListItem href='/about/csr-esg' title='CSR / ESG'>
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/career' legacyBehavior passHref>
            <div className=' mb-0.5'>
              <NavigationMenuLink className='hover:bg-gray-100 text-sm font-medium px-4 py-2'>
                Career
              </NavigationMenuLink>
            </div>
          </Link>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <Link href='/resources' legacyBehavior passHref>
            <div className=' mb-0.5'>
              <NavigationMenuLink className='hover:bg-gray-100 text-sm font-medium  px-4 py-2 '>
                Blogs
              </NavigationMenuLink>
            </div>
          </Link>
        </NavigationMenuItem>
        <Separator orientation='vertical' className='bg-pink-400 w-1 h-10' />*/}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
