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

const products: { title: string; href: string }[] = [
  {
    title: 'Dobby Border',
    href: '/products/dobbyBorder',
  },
  {
    title: 'Stripe Towel',
    href: '/products/stripeTowel',
  },
  {
    title: 'Bath Towel',
    href: '/products/bathTowel',
  },
  {
    title: 'Jacquard Border',
    href: '/products/jacquardBorder',
  },

  {
    title: 'Jacquard Design',
    href: '/products/jacquardDesign',
  },
  {
    title: 'Jacquard Embroidery',
    href: '/products/jacquardEmbroidery',
  },
  {
    title: 'Kitchen Napkin',
    href: '/products/kitchenNapkin',
  },
  {
    title: 'Greek Border Set',
    href: '/products/greekBorderSet',
  },
  {
    title: 'Bath MAT',
    href: '/products/bathMat',
  },
  { title: 'Beach Towel', href: '/products/beach' },
  {
    title: 'Promotional Supply',
    href: '/products/promotionalSupply',
  },

  {
    title: 'Institutional Supply',
    href: '/products/institutionalSupply',
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
        <NavigationMenuItem className='mb-1'>
          <Link href='/' legacyBehavior passHref>
            <NavigationMenuLink className='hover:bg-gray-100 text-sm font-medium px-4 py-2 '>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
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
            <Link href={`/products`}> products</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-1 p-1 md:w-[500px] md:grid-cols-3 lg:w-[600px] '>
              {products.map((product) => (
                <ListItem
                  key={product.title}
                  title={product.title}
                  href={product.href}
                ></ListItem>
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
                      Lahoti Group is a comprehensive company specialized in
                      developing and export of terry towels and is located in
                      Solapur,a beautiful financial Textile Hub of India. Lahoti
                      Group originally started from yarn business,which was
                      established in 1962.Thereafter we advanced from yarn
                      dealing business to Terry Towel,kitchen Napkins,Bath
                      Towels manufacturing business.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href='/about/vision' title='Vision'>
                Our VISION is to become the prefered source of terry towels with
                customer deligh
              </ListItem>
              <ListItem href='/about/mission' title='Mission'>
                <ul>
                  <li>Constant Innovation</li>
                  <li>Quality Development</li>
                  <li>Customer Satisfaction</li>
                  <li>Meet Targets and Deadlines</li>
                  <li>Long Term Business Relations</li>
                </ul>
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
            <div className=' mb-1'>
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
