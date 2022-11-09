import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Rakib Consultancy | ${title}`
    }, [title])
}

export default useTitle;