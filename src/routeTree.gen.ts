/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProductsImport } from './routes/products'
import { Route as OrdersImport } from './routes/orders'
import { Route as ProductsIndexImport } from './routes/products.index'
import { Route as ProductsProductIdImport } from './routes/products.$productId'
import { Route as AuthRegisterImport } from './routes/auth/register'
import { Route as AuthLoginImport } from './routes/auth/login'

// Create Virtual Routes

const SettingsLazyImport = createFileRoute('/settings')()
const DashboardLazyImport = createFileRoute('/dashboard')()
const CustomersLazyImport = createFileRoute('/customers')()
const AppointmentsLazyImport = createFileRoute('/appointments')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const SettingsLazyRoute = SettingsLazyImport.update({
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/settings.lazy').then((d) => d.Route))

const DashboardLazyRoute = DashboardLazyImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/dashboard.lazy').then((d) => d.Route))

const CustomersLazyRoute = CustomersLazyImport.update({
  path: '/customers',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/customers.lazy').then((d) => d.Route))

const AppointmentsLazyRoute = AppointmentsLazyImport.update({
  path: '/appointments',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/appointments.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const ProductsRoute = ProductsImport.update({
  path: '/products',
  getParentRoute: () => rootRoute,
} as any)

const OrdersRoute = OrdersImport.update({
  path: '/orders',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ProductsIndexRoute = ProductsIndexImport.update({
  path: '/',
  getParentRoute: () => ProductsRoute,
} as any)

const ProductsProductIdRoute = ProductsProductIdImport.update({
  path: '/$productId',
  getParentRoute: () => ProductsRoute,
} as any)

const AuthRegisterRoute = AuthRegisterImport.update({
  path: '/auth/register',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/orders': {
      preLoaderRoute: typeof OrdersImport
      parentRoute: typeof rootRoute
    }
    '/products': {
      preLoaderRoute: typeof ProductsImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/appointments': {
      preLoaderRoute: typeof AppointmentsLazyImport
      parentRoute: typeof rootRoute
    }
    '/customers': {
      preLoaderRoute: typeof CustomersLazyImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      preLoaderRoute: typeof DashboardLazyImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      preLoaderRoute: typeof SettingsLazyImport
      parentRoute: typeof rootRoute
    }
    '/auth/login': {
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/auth/register': {
      preLoaderRoute: typeof AuthRegisterImport
      parentRoute: typeof rootRoute
    }
    '/products/$productId': {
      preLoaderRoute: typeof ProductsProductIdImport
      parentRoute: typeof ProductsImport
    }
    '/products/': {
      preLoaderRoute: typeof ProductsIndexImport
      parentRoute: typeof ProductsImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  OrdersRoute,
  ProductsRoute.addChildren([ProductsProductIdRoute, ProductsIndexRoute]),
  AboutLazyRoute,
  AppointmentsLazyRoute,
  CustomersLazyRoute,
  DashboardLazyRoute,
  SettingsLazyRoute,
  AuthLoginRoute,
  AuthRegisterRoute,
])

/* prettier-ignore-end */
