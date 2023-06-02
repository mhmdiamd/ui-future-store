
import { usePathname } from "next/navigation"
import { useMemo } from "react"

const generateUrl = (arr: string[], index: number
) => {

  let urlPath = ""
  for (let i = 0; i <= index; i++) {
    urlPath += `/${arr[i].toLowerCase()}`
  }

  return urlPath

}

export const useGetPathName = (): {
  href: string,
  label: string
  isActive: boolean
}[] => {
  const pathName = usePathname()

  const arrPath: string[] = useMemo(() => {
    const originalPath = pathName.split("/").slice(1)


    return originalPath
  }, [pathName])

  const reGeneratePathname = useMemo(() => {
    return arrPath.map((path, i) => {
      return {
        href: generateUrl(arrPath, i),
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isActive: arrPath[arrPath.length - 1] === path
      }
    })
  }, [arrPath])

  return reGeneratePathname
}