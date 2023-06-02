import { useMemo } from "react"
import { usePathname } from "next/navigation" 

const useRoutes = () : Array<any> => {
  const pathname = usePathname()

  const routes = useMemo(() => {
    return [
      {
        label : "Home",
        href : '/',
        active: pathname === "/"
      },

      {
        label : "Categories",
        href : '/categories',
        active: pathname === "/categories"
      },

      {
        label : "Rewards",
        href : '/rewards',
        active: pathname === "/rewards"
      },
      {
        label : "Sign Up",
        href : '/auth/register',
        active: pathname === "/auth"
      },
      {
        label : "Sign In",
        href : '/auth/login',
        active: pathname === "/auth"
      },
    ]
  }, [pathname])

  return routes
}

export default useRoutes